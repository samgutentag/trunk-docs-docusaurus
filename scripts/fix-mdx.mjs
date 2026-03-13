#!/usr/bin/env node

/**
 * Fix MDX compatibility issues in docs files.
 * Run after migrate-gitbook.mjs to fix remaining issues.
 */

import fs from "fs";
import path from "path";

const DOCS = path.join(process.cwd(), "docs");

function getAllFiles(dir) {
  const res = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith("_") || e.name.startsWith(".")) continue;
      res.push(...getAllFiles(full));
    } else if (e.name.endsWith(".md") || e.name.endsWith(".mdx")) {
      res.push(full);
    }
  }
  return res;
}

let fixCount = 0;

for (const f of getAllFiles(DOCS)) {
  let s = fs.readFileSync(f, "utf-8");
  const orig = s;
  const isMdx = f.endsWith(".mdx");

  // 1. Self-closing void tags for ALL files (both .md and .mdx)
  // Be careful not to double-close already self-closed tags
  s = s.replace(/<img ([^>]*[^/])>/g, "<img $1 />");
  s = s.replace(/<br\s*>/g, "<br />");
  s = s.replace(/<hr\s*>/g, "<hr />");
  s = s.replace(/<source ([^>]*[^/])>/g, "<source $1 />");
  s = s.replace(/<input ([^>]*[^/])>/g, "<input $1 />");

  // 2. Convert remaining <pre class="language-X"><code>...</code></pre>
  s = s.replace(
    /<pre[^>]*class="language-(\w+)"[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/g,
    (_, lang, code) => {
      let decoded = code
        .replace(/<\/?strong>/g, "")
        .replace(/<\/?em>/g, "")
        .replace(/<br\s*\/?>/g, "\n")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&#x3C;/g, "<")
        .replace(/&#x3E;/g, ">")
        .replace(/&#x26;/g, "&")
        .replace(/&#x22;/g, '"')
        .replace(/&#x27;/g, "'");
      return "```" + lang + "\n" + decoded.trim() + "\n```";
    }
  );

  // 3. For MDX files: escape { } in prose only (not in JSX blocks or code)
  if (isMdx) {
    s = escapeCurliesInMdx(s);
  }

  if (s !== orig) {
    fs.writeFileSync(f, s);
    fixCount++;
  }
}

console.log(`Fixed ${fixCount} files`);

function escapeCurliesInMdx(s) {
  const lines = s.split("\n");
  let inCodeBlock = false;
  let jsxDepth = 0; // Track nesting of JSX tags
  const result = [];

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    const trimmed = line.trim();

    // Track code blocks
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }

    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    // Track JSX tag depth for multi-line JSX components
    // Count opening tags (but not self-closing ones)
    const openTags = (line.match(/<(?!\/)[A-Z][a-zA-Z]*\b[^>]*(?<!\/)>/g) || []).length;
    const selfCloseTags = (line.match(/<[A-Z][a-zA-Z]*\b[^>]*\/>/g) || []).length;
    const closeTags = (line.match(/<\/[A-Z][a-zA-Z]*>/g) || []).length;

    // Also count lowercase HTML tags that might span lines
    const openHtml = (line.match(/<(?!\/)[a-z][a-zA-Z]*\b[^>]*(?<!\/)>/g) || []).length;
    const closeHtml = (line.match(/<\/[a-z][a-zA-Z]*>/g) || []).length;

    // If we're inside a JSX block, don't escape
    if (jsxDepth > 0) {
      jsxDepth += openTags - closeTags;
      result.push(line);
      continue;
    }

    // Check if this line opens a multi-line JSX component
    if (openTags > closeTags + selfCloseTags) {
      jsxDepth = openTags - closeTags;
      result.push(line);
      continue;
    }

    // Don't touch lines that are imports, exports, admonitions, or contain JSX
    if (
      trimmed.startsWith("import ") ||
      trimmed.startsWith("export ") ||
      trimmed.startsWith(":::") ||
      trimmed.startsWith("<") ||
      trimmed.startsWith("</") ||
      trimmed.startsWith("/>")
    ) {
      result.push(line);
      continue;
    }

    // If no curlies, skip
    if (!line.includes("{") && !line.includes("}")) {
      result.push(line);
      continue;
    }

    // Escape curlies in prose, respecting inline code
    let escaped = "";
    let inInline = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];

      if (ch === "`") {
        inInline = !inInline;
        escaped += ch;
        continue;
      }

      if (inInline) {
        escaped += ch;
        continue;
      }

      if (ch === "{" || ch === "}") {
        escaped += "\\" + ch;
      } else {
        escaped += ch;
      }
    }

    result.push(escaped);
  }

  return result.join("\n");
}
