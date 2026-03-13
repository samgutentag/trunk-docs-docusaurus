import React from "react";

interface EmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
}

export function Embed({
  url,
  title,
  aspectRatio = "16/9",
}: EmbedProps): React.ReactElement {
  // YouTube and Vimeo get iframes; everything else gets a link card
  const isVideo =
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com") ||
    url.includes("loom.com");

  if (isVideo) {
    let embedUrl = url;
    if (url.includes("youtube.com/watch")) {
      const id = new URL(url).searchParams.get("v");
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    return (
      <div className="embed-container" style={{ aspectRatio }}>
        <iframe
          src={embedUrl}
          title={title || "Embedded content"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
        />
      </div>
    );
  }

  return (
    <div className="embed-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title || url}
      </a>
    </div>
  );
}
