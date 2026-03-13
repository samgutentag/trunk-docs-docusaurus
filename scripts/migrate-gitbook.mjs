#!/usr/bin/env node

/**
 * GitBook → Docusaurus migration script.
 *
 * Converts GitBook-specific markdown syntax to Docusaurus/MDX equivalents,
 * moves files into the docs/ directory structure, copies assets, generates
 * sidebars.ts and redirects.ts.
 *
 * Usage: node scripts/migrate-gitbook.mjs
 */

import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "docs");
const STATIC_IMG = path.join(ROOT, "static", "img");
const PARTIALS_DIR = path.join(DOCS_DIR, "_partials");

// Directories that contain content pages
const CONTENT_DIRS = [
  "merge-queue",
  "flaky-tests",
  "ci-autopilot",
  "code-quality",
  "setup-and-administration",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function getAllMdFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip hidden dirs, node_modules, .docusaurus, build, static, src, scripts
      if (
        entry.name.startsWith(".") ||
        entry.name === "node_modules" ||
        entry.name === "build" ||
        entry.name === "static" ||
        entry.name === "src" ||
        entry.name === "scripts"
      )
        continue;
      results.push(...getAllMdFiles(full));
    } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
      results.push(full);
    }
  }
  return results;
}

// ─── Phase 4: Move files & assets ────────────────────────────────────────────

function moveFiles() {
  console.log("\n📁 Moving content files into docs/...");
  ensureDir(DOCS_DIR);

  // Move content directories
  for (const dir of CONTENT_DIRS) {
    const src = path.join(ROOT, dir);
    const dest = path.join(DOCS_DIR, dir);
    if (fs.existsSync(src)) {
      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true });
      }
      fs.cpSync(src, dest, { recursive: true });
      console.log(`  Copied ${dir}/ → docs/${dir}/`);
    }
  }

  // Move welcome.md → docs/index.md
  const welcomeSrc = path.join(ROOT, "welcome.md");
  if (fs.existsSync(welcomeSrc)) {
    fs.copyFileSync(welcomeSrc, path.join(DOCS_DIR, "index.md"));
    console.log("  Copied welcome.md → docs/index.md");
  }

  // Copy includes → docs/_partials/
  const includesSrc = path.join(ROOT, ".gitbook", "includes");
  if (fs.existsSync(includesSrc)) {
    ensureDir(PARTIALS_DIR);
    for (const f of fs.readdirSync(includesSrc)) {
      if (f.endsWith(".md")) {
        const cleanName = f.replace(/\s+/g, "-").toLowerCase();
        fs.copyFileSync(
          path.join(includesSrc, f),
          path.join(PARTIALS_DIR, cleanName)
        );
      }
    }
    console.log("  Copied .gitbook/includes/ → docs/_partials/");
  }

  // Copy assets → static/img/
  const assetsSrc = path.join(ROOT, ".gitbook", "assets");
  if (fs.existsSync(assetsSrc)) {
    ensureDir(STATIC_IMG);
    for (const f of fs.readdirSync(assetsSrc)) {
      const srcFile = path.join(assetsSrc, f);
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, path.join(STATIC_IMG, f));
      }
    }
    console.log(
      `  Copied ${fs.readdirSync(assetsSrc).length} assets → static/img/`
    );
  }

  // Rename README.md → index.md in docs/
  renameReadmes(DOCS_DIR);
}

function renameReadmes(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_")) continue;
      renameReadmes(full);
    } else if (entry.name.toLowerCase() === "readme.md") {
      const dest = path.join(dir, "index.md");
      if (!fs.existsSync(dest)) {
        fs.renameSync(full, dest);
      }
    }
  }
}

// ─── Phase 3: Content transformations ────────────────────────────────────────

function transformContent(content, filePath) {
  let s = content;
  const needsImports = new Set();

  // 1. Hints → Admonitions
  s = convertHints(s);

  // 2. Tabs → MDX Tabs
  const tabsResult = convertTabs(s);
  s = tabsResult.content;
  if (tabsResult.hasTabs) {
    needsImports.add("Tabs");
  }

  // 3. {% code title="X" %} ... {% endcode %}
  s = convertCodeBlocks(s);

  // 4. {% embed url="..." %} → <Embed />
  const embedResult = convertEmbeds(s);
  s = embedResult.content;
  if (embedResult.hasEmbeds) {
    needsImports.add("Embed");
  }

  // 5. {% include "..." %} → partial import
  const includeResult = convertIncludes(s, filePath);
  s = includeResult.content;
  if (includeResult.hasIncludes) {
    needsImports.add("Partials");
  }

  // 6. Card tables → <CardGrid>
  const cardResult = convertCardTables(s);
  s = cardResult.content;
  if (cardResult.hasCards) {
    needsImports.add("CardGrid");
  }

  // 7. Themed images → ThemedImage
  const themedResult = convertThemedImages(s);
  s = themedResult.content;
  if (themedResult.hasThemed) {
    needsImports.add("ThemedImage");
  }

  // 8. <pre class="language-X"> → code blocks
  s = convertPreBlocks(s);

  // 9. <mark style="color:..."> → bold
  s = convertMarks(s);

  // 10. Fix asset paths
  s = fixAssetPaths(s);

  // 11. Fix internal links
  s = fixInternalLinks(s, filePath);

  // 12. Strip GitBook "mention" link titles
  s = s.replace(/"mention"/g, "");

  // 13. Clean up broken-reference links
  s = s.replace(
    /\[([^\]]*)\]\(broken-reference\)/g,
    "$1"
  );

  // 14. Convert noRobotsIndex frontmatter
  s = s.replace(/^noRobotsIndex:\s*true/m, "custom_edit_url: null");

  // 15. Handle GitBook anchor links in headings: ## Title <a href="#id" id="id"></a>
  s = s.replace(
    /^(#{1,6}\s+.+?)\s*<a\s+href="#[^"]*"\s+id="[^"]*"><\/a>\s*$/gm,
    "$1"
  );

  // 16. Clean up {% @supademo/embed %} and similar custom plugin tags
  s = s.replace(
    /{% @\w+\/embed url="([^"]+)"[^%]*%}/g,
    '<Embed url="$1" />'
  );
  if (/{% @\w+\/embed/.test(content)) {
    needsImports.add("Embed");
  }

  // 17. Escape MDX-incompatible characters in prose (not in code blocks)
  s = escapeMdxChars(s);

  // Build import block
  const importLines = buildImports(needsImports);

  // Insert imports after frontmatter
  if (importLines.length > 0) {
    s = insertImports(s, importLines);
  }

  return { content: s, needsJsx: needsImports.size > 0 };
}

// ─── Hints → Admonitions ─────────────────────────────────────────────────────

function convertHints(s) {
  // {% hint style="info" %} ... {% endhint %}
  // Handle multi-line hints
  return s.replace(
    /{% hint style="(\w+)" %}\n?([\s\S]*?){% endhint %}/g,
    (_, style, body) => {
      const admonitionType = mapHintStyle(style);
      const trimmedBody = body.trim();
      return `:::${admonitionType}\n\n${trimmedBody}\n\n:::`;
    }
  );
}

function mapHintStyle(style) {
  switch (style) {
    case "info":
      return "info";
    case "warning":
      return "warning";
    case "danger":
      return "danger";
    case "success":
      return "tip";
    default:
      return "note";
  }
}

// ─── Tabs → MDX Tabs ─────────────────────────────────────────────────────────

function convertTabs(s) {
  let hasTabs = false;

  // Match {% tabs %} ... {% endtabs %}
  s = s.replace(/{% tabs %}\n?([\s\S]*?){% endtabs %}/g, (_, tabsBody) => {
    hasTabs = true;

    // Split into individual tabs
    const tabRegex = /{% tab title="([^"]*)" %}\n?([\s\S]*?)(?={% endtab %})/g;
    const tabs = [];
    let match;
    while ((match = tabRegex.exec(tabsBody))) {
      tabs.push({ title: match[1], content: match[2].trim() });
    }

    if (tabs.length === 0) return tabsBody;

    let result = "<Tabs>\n";
    for (const tab of tabs) {
      result += `<TabItem value="${tab.title.toLowerCase().replace(/\s+/g, "-")}" label="${tab.title}">\n\n${tab.content}\n\n</TabItem>\n`;
    }
    result += "</Tabs>";
    return result;
  });

  return { content: s, hasTabs };
}

// ─── Code blocks with titles ─────────────────────────────────────────────────

function convertCodeBlocks(s) {
  // {% code title="filename.yml" %} ... {% endcode %}
  return s.replace(
    /{% code title="([^"]*)"(?: overflow="[^"]*")?(?: lineNumbers="[^"]*")? %}\n?([\s\S]*?){% endcode %}/g,
    (_, title, body) => {
      const trimmed = body.trim();
      // Check if body already contains a fenced code block
      const codeMatch = trimmed.match(/^```(\w*)\n([\s\S]*?)```$/);
      if (codeMatch) {
        const lang = codeMatch[1] || "";
        const code = codeMatch[2];
        return `\`\`\`${lang} title="${title}"\n${code}\`\`\``;
      }
      // Wrap bare code
      return `\`\`\` title="${title}"\n${trimmed}\n\`\`\``;
    }
  );
}

// ─── Embeds ──────────────────────────────────────────────────────────────────

function convertEmbeds(s) {
  let hasEmbeds = false;
  s = s.replace(
    /{% embed url="([^"]*)"(?: %}| caption="([^"]*)" %})/g,
    (_, url, caption) => {
      hasEmbeds = true;
      if (caption) {
        return `<Embed url="${url}" title="${caption}" />`;
      }
      return `<Embed url="${url}" />`;
    }
  );
  return { content: s, hasEmbeds };
}

// ─── Includes → Partial imports ──────────────────────────────────────────────

function convertIncludes(s, filePath) {
  let hasIncludes = false;
  const partialImports = [];

  s = s.replace(
    /{% include "([^"]*)" %}/g,
    (_, includePath) => {
      hasIncludes = true;
      // Extract just the filename, strip path
      const baseName = path.basename(includePath, ".md");
      const cleanName = baseName.replace(/[^a-zA-Z0-9]/g, "_");
      const varName = `Partial_${cleanName}`;
      const partialFile = baseName.replace(/\s+/g, "-").toLowerCase() + ".md";

      // Calculate relative path from current file to _partials
      const fileDir = path.dirname(filePath);
      const partialsRel = path.relative(fileDir, PARTIALS_DIR);
      const importPath = `${partialsRel}/${partialFile}`.replace(/\\/g, "/");

      partialImports.push(
        `import ${varName} from '${importPath.startsWith(".") ? importPath : "./" + importPath}';`
      );
      return `<${varName} />`;
    }
  );

  return { content: s, hasIncludes, partialImports };
}

// ─── Card tables ─────────────────────────────────────────────────────────────

function convertCardTables(s) {
  let hasCards = false;

  // Match full card tables: <table data-view="cards">...</table>
  s = s.replace(
    /<table[^>]*data-view="cards"[^>]*>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>[\s\S]*?<\/table>/g,
    (_, tbody) => {
      hasCards = true;
      const cards = parseCardRows(tbody);
      if (cards.length === 0) return "";

      let result = "<CardGrid>\n";
      for (const card of cards) {
        const attrs = [];
        if (card.title) attrs.push(`title="${escapeAttr(card.title)}"`);
        if (card.description)
          attrs.push(`description="${escapeAttr(card.description)}"`);
        if (card.href) attrs.push(`href="${card.href}"`);
        if (card.image) attrs.push(`image="${card.image}"`);
        result += `  <Card ${attrs.join(" ")} />\n`;
      }
      result += "</CardGrid>";
      return result;
    }
  );

  return { content: s, hasCards };
}

function parseCardRows(tbody) {
  const cards = [];
  // Split by <tr> tags
  const rows = tbody.split(/<tr>/g).filter((r) => r.includes("<td"));

  for (const row of rows) {
    const card = {};

    // Extract text from <td> cells
    const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
    const tds = [];
    let tdMatch;
    while ((tdMatch = tdRegex.exec(row))) {
      tds.push(tdMatch[1].trim());
    }

    if (tds.length > 0) {
      // First visible td is usually the title
      card.title = stripHtml(tds[0]).trim();
    }
    if (tds.length > 1) {
      card.description = stripHtml(tds[1]).trim();
    }

    // Extract card-target link
    const linkMatch = row.match(
      /data-card-target[^>]*>[\s\S]*?<a\s+href="([^"]*)"/
    );
    if (linkMatch) {
      card.href = fixLinkPath(linkMatch[1]);
    }
    // Also try regular href in content-ref td
    if (!card.href) {
      const hrefMatch = row.match(/<a\s+href="([^"]*)"[^>]*>[^<]*<\/a>/);
      if (hrefMatch) {
        card.href = fixLinkPath(hrefMatch[1]);
      }
    }

    // Extract card-cover image
    const imgMatch = row.match(
      /data-card-cover[\s\S]*?<a\s+href="([^"]*)"/
    );
    if (imgMatch) {
      card.image = fixImagePath(imgMatch[1]);
    }

    if (card.title) cards.push(card);
  }

  return cards;
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/\*\*/g, "")
    .trim();
}

function escapeAttr(s) {
  return s.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function fixLinkPath(href) {
  if (!href || href.startsWith("http") || href.startsWith("#")) return href;
  // Strip .md extension, convert README refs to directory
  let p = href;
  p = p.replace(/\.md$/i, "");
  p = p.replace(/\/README$/i, "");
  p = p.replace(/\/index$/i, "");
  // Make sure internal links start with /
  if (!p.startsWith("/") && !p.startsWith(".")) {
    // keep relative
  }
  return p;
}

function fixImagePath(src) {
  if (!src) return src;
  if (src.includes(".gitbook/assets/")) {
    return "/img/" + src.split(".gitbook/assets/").pop();
  }
  return src;
}

// ─── Themed images ───────────────────────────────────────────────────────────

function convertThemedImages(s) {
  let hasThemed = false;

  // <figure><picture><source srcset="dark.png" media="(prefers-color-scheme: dark)"><img src="light.png" alt=""></picture><figcaption>...</figcaption></figure>
  s = s.replace(
    /<figure>\s*<picture>\s*<source\s+srcset="([^"]*)"[^>]*media="\(prefers-color-scheme:\s*dark\)"[^>]*>\s*<img\s+src="([^"]*)"[^>]*>\s*<\/picture>(?:\s*<figcaption>(?:<p>)?([\s\S]*?)(?:<\/p>)?<\/figcaption>)?\s*<\/figure>/g,
    (_, darkSrc, lightSrc, caption) => {
      hasThemed = true;
      const dark = fixImagePath(darkSrc);
      const light = fixImagePath(lightSrc);
      const alt = caption ? stripHtml(caption).trim() : "";
      return `<ThemedImage\n  alt="${escapeAttr(alt)}"\n  sources={{\n    light: "${light}",\n    dark: "${dark}",\n  }}\n/>`;
    }
  );

  return { content: s, hasThemed };
}

// ─── <pre> blocks ────────────────────────────────────────────────────────────

function convertPreBlocks(s) {
  return s.replace(
    /<pre[^>]*class="language-(\w+)"[^>]*><code>([\s\S]*?)<\/code><\/pre>/g,
    (_, lang, code) => {
      const decoded = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&#x3C;/g, "<")
        .replace(/&#x3E;/g, ">");
      return `\`\`\`${lang}\n${decoded}\n\`\`\``;
    }
  );
}

// ─── <mark> conversion ──────────────────────────────────────────────────────

function convertMarks(s) {
  return s.replace(
    /<mark style="[^"]*">([^<]*)<\/mark>/g,
    "**$1**"
  );
}

// ─── Fix asset paths ─────────────────────────────────────────────────────────

function fixAssetPaths(s) {
  // Convert various .gitbook/assets references to /img/
  s = s.replace(
    /(\.\.\/)*.gitbook\/assets\//g,
    "/img/"
  );
  return s;
}

// ─── Fix internal links ──────────────────────────────────────────────────────

function fixInternalLinks(s, filePath) {
  // Fix markdown links: [text](path.md) → [text](path)
  s = s.replace(
    /\[([^\]]*)\]\(([^)]*\.md(?:#[^)]*)?)\)/g,
    (match, text, href) => {
      if (href.startsWith("http")) return match;
      let fixed = href.replace(/\.md(#|$)/, "$1");
      // Convert README refs to index/directory
      fixed = fixed.replace(/\/README(#|$)/i, "/index$1");
      fixed = fixed.replace(/README(#|$)/i, "index$1");
      return `[${text}](${fixed})`;
    }
  );
  return s;
}

// ─── Escape MDX characters ──────────────────────────────────────────────────

function escapeMdxChars(s) {
  // We need to escape { and < in prose, but NOT inside:
  // - code blocks (``` ... ```)
  // - JSX tags we generated (<Tabs>, <TabItem>, etc.)
  // - existing HTML tags
  // - import statements

  const lines = s.split("\n");
  let inCodeBlock = false;
  const result = [];

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }
    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    // Skip lines that are JSX/HTML tags or import statements
    const trimmed = line.trim();
    if (
      trimmed.startsWith("<") ||
      trimmed.startsWith("import ") ||
      trimmed.startsWith(":::") ||
      trimmed.startsWith("</")
    ) {
      result.push(line);
      continue;
    }

    // Escape HTML comments <!-- --> which MDX doesn't support in prose
    let escaped = line.replace(/<!--[\s\S]*?-->/g, "{/* $& */}");

    // Escape lone { } that aren't part of JSX expressions
    // Only escape { that is NOT followed by /* (our comment wrapper) and NOT part of a JSX attribute
    // This is conservative — we only escape curlies that appear to be prose
    // Don't escape inside inline code
    escaped = escaped.replace(/`[^`]*`/g, (m) => m); // preserve inline code as-is

    result.push(escaped);
  }

  return result.join("\n");
}

// ─── Import builder ──────────────────────────────────────────────────────────

function buildImports(needsImports) {
  const lines = [];

  if (needsImports.has("Tabs")) {
    lines.push(`import Tabs from '@theme/Tabs';`);
    lines.push(`import TabItem from '@theme/TabItem';`);
  }
  if (needsImports.has("ThemedImage")) {
    lines.push(`import ThemedImage from '@theme/ThemedImage';`);
  }
  if (needsImports.has("CardGrid")) {
    lines.push(
      `import { CardGrid, Card } from '@site/src/components/CardGrid';`
    );
  }
  if (needsImports.has("Embed")) {
    lines.push(`import { Embed } from '@site/src/components/Embed';`);
  }

  return lines;
}

function insertImports(s, importLines) {
  const importBlock = importLines.join("\n") + "\n\n";

  // If file has frontmatter, insert after it
  const fmMatch = s.match(/^---\n[\s\S]*?\n---\n/);
  if (fmMatch) {
    const fmEnd = fmMatch[0].length;
    return s.slice(0, fmEnd) + "\n" + importBlock + s.slice(fmEnd);
  }

  // Otherwise prepend
  return importBlock + s;
}

// ─── Phase 5: Generate sidebars ──────────────────────────────────────────────

function generateSidebars() {
  console.log("\n📋 Generating sidebars.ts...");

  const summaryPath = path.join(ROOT, "summary.md");
  if (!fs.existsSync(summaryPath)) {
    console.warn("  SUMMARY.md not found, skipping sidebar generation");
    return;
  }

  const summary = fs.readFileSync(summaryPath, "utf-8");
  const lines = summary.split("\n");

  const sidebars = {
    mergeQueueSidebar: [],
    flakyTestsSidebar: [],
    ciAutopilotSidebar: [],
    codeQualitySidebar: [],
    setupAdminSidebar: [],
  };

  let currentSidebar = null;
  let stack = []; // { indent, items }

  for (const line of lines) {
    // Detect section headers
    if (line.startsWith("## ")) {
      const title = line.replace(/^## /, "").trim();
      // Clean anchor tags from title
      const cleanTitle = title.replace(/<a[^>]*>.*?<\/a>/g, "").trim();
      if (/merge queue/i.test(cleanTitle)) {
        currentSidebar = "mergeQueueSidebar";
      } else if (/flaky test/i.test(cleanTitle)) {
        currentSidebar = "flakyTestsSidebar";
      } else if (/ci autopilot/i.test(cleanTitle)) {
        currentSidebar = "ciAutopilotSidebar";
      } else if (/code quality/i.test(cleanTitle)) {
        currentSidebar = "codeQualitySidebar";
      } else if (/setup|admin/i.test(cleanTitle)) {
        currentSidebar = "setupAdminSidebar";
      } else if (/links/i.test(cleanTitle)) {
        currentSidebar = null;
      } else if (/overview/i.test(cleanTitle)) {
        // Overview section — items go to a general spot, skip for now
        currentSidebar = null;
      }
      stack = [];
      continue;
    }

    if (!currentSidebar) continue;

    // Parse list items: "  * [Title](path.md)"
    const match = line.match(/^(\s*)\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (!match) continue;

    const indent = match[1].length;
    const title = match[2];
    let docPath = match[3];

    // Skip external links
    if (docPath.startsWith("http")) continue;

    // Convert path for docusaurus
    docPath = docPath
      .replace(/\.md$/i, "")
      .replace(/\/README$/i, "/index")
      .replace(/^README$/i, "index")
      .replace(/^\//, "");

    const item = { type: "doc", id: docPath, label: title };

    // Determine nesting level (each 2 spaces = 1 level)
    const level = Math.floor(indent / 2);

    if (level === 0) {
      sidebars[currentSidebar].push(item);
      stack = [{ level: 0, items: sidebars[currentSidebar], lastItem: item }];
    } else {
      // Find parent in stack
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        const parentItem = parent.lastItem;

        // Convert parent from doc to category if needed
        if (parentItem.type === "doc") {
          const categoryItem = {
            type: "category",
            label: parentItem.label,
            link: { type: "doc", id: parentItem.id },
            items: [item],
          };
          // Replace in parent's items array
          const parentItems = parent.items;
          const idx = parentItems.indexOf(parentItem);
          if (idx !== -1) {
            parentItems[idx] = categoryItem;
          }
          parent.lastItem = categoryItem;
          stack.push({
            level,
            items: categoryItem.items,
            lastItem: item,
          });
        } else if (parentItem.type === "category") {
          parentItem.items.push(item);
          stack.push({
            level,
            items: parentItem.items,
            lastItem: item,
          });
        }
      }
    }
  }

  // Write sidebars.ts
  const sidebarContent = `import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = ${JSON.stringify(sidebars, null, 2)};

export default sidebars;
`;

  fs.writeFileSync(path.join(ROOT, "sidebars.ts"), sidebarContent);
  console.log("  Generated sidebars.ts");

  // Print stats
  for (const [key, items] of Object.entries(sidebars)) {
    console.log(`    ${key}: ${countItems(items)} items`);
  }
}

function countItems(items) {
  let count = 0;
  for (const item of items) {
    count++;
    if (item.items) count += countItems(item.items);
  }
  return count;
}

// ─── Phase 5: Generate redirects ─────────────────────────────────────────────

function generateRedirects() {
  console.log("\n🔀 Generating redirects...");

  const gitbookYaml = path.join(ROOT, ".gitbook.yaml");
  if (!fs.existsSync(gitbookYaml)) {
    console.warn("  .gitbook.yaml not found, skipping redirect generation");
    return;
  }

  const content = fs.readFileSync(gitbookYaml, "utf-8");
  const redirects = [];

  // Parse YAML redirects section manually (simple key: value pairs)
  const lines = content.split("\n");
  let inRedirects = false;

  for (const line of lines) {
    if (line.trim() === "redirects:") {
      inRedirects = true;
      continue;
    }
    if (inRedirects && line.match(/^\w/) && !line.startsWith(" ")) {
      inRedirects = false;
      continue;
    }
    if (!inRedirects) continue;

    const match = line.match(/^\s{2}(\S+):\s*(.+)$/);
    if (!match) continue;

    let from = "/" + match[1].trim();
    let to = match[2].trim();

    // Clean up target path
    if (!to.startsWith("/") && !to.startsWith("http")) {
      to = "/" + to;
    }
    to = to.replace(/\.md$/i, "").replace(/\/readme$/i, "").replace(/\/README$/i, "");

    redirects.push({ from, to });
  }

  // Write redirects.ts
  const redirectsContent = `// Auto-generated from .gitbook.yaml — do not edit manually
export const redirects = ${JSON.stringify(redirects, null, 2)};
`;

  fs.writeFileSync(path.join(ROOT, "redirects.ts"), redirectsContent);
  console.log(`  Generated redirects.ts with ${redirects.length} redirects`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log("🚀 GitBook → Docusaurus migration\n");

  // Phase 4: Move files & assets
  moveFiles();

  // Phase 3: Transform content in docs/
  console.log("\n✏️  Transforming content...");
  const mdFiles = getAllMdFiles(DOCS_DIR);
  let transformed = 0;
  let renamedToMdx = 0;

  for (const filePath of mdFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    const result = transformContent(content, filePath);

    if (result.content !== content || result.needsJsx) {
      let outPath = filePath;
      if (result.needsJsx && filePath.endsWith(".md")) {
        outPath = filePath.replace(/\.md$/, ".mdx");
        renamedToMdx++;
      }
      fs.writeFileSync(outPath, result.content);
      if (outPath !== filePath && fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      transformed++;
    }
  }

  console.log(`  Transformed ${transformed} files`);
  console.log(`  Renamed ${renamedToMdx} files to .mdx`);

  // Phase 5: Generate sidebar & redirects
  generateSidebars();
  generateRedirects();

  console.log("\n✅ Migration complete!");
  console.log("   Next steps:");
  console.log("   1. npm install");
  console.log("   2. npm run build");
  console.log("   3. Fix any MDX errors");
  console.log("   4. npm start");
}

main();
