"use client";

/**
 * Cinematic video slot.
 * - Pass `youtube="VIDEO_ID"` to embed a YouTube film.
 * - Pass `src="/videos/film.mp4"` to embed a local file.
 * - Pass neither to show a labelled placeholder (drop the film in later).
 */
export default function Vid({ youtube, embed, src, poster, label, className = "" }) {
  if (youtube) {
    return (
      <div className={`video-frame ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtube}`}
          title={label || "Film"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  // Generic embed — Google Drive (/preview) or Instagram (/embed)
  if (embed) {
    return (
      <div className={`video-frame ${className}`}>
        <iframe
          src={embed}
          title={label || "Film"}
          loading="lazy"
          allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className={`video-frame ${className}`}>
        <video src={src} poster={poster} controls preload="none" />
      </div>
    );
  }

  return (
    <div className={`video-frame video-placeholder ${className}`} role="img" aria-label={label}>
      <span className="video-play" aria-hidden="true">▶</span>
      <span className="video-tag">FILM</span>
      <span className="video-label">{label || "Drop film / YouTube link here"}</span>
    </div>
  );
}
