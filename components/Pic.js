"use client";

import { useState } from "react";

/**
 * Renders an <img>. If the file is missing, shows a labelled placeholder
 * telling you exactly which file to drop into /public/images.
 */
export default function Pic({ src, alt, className = "", label }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={`pic-placeholder ${className}`} role="img" aria-label={alt}>
        <span className="pic-placeholder-tag">PHOTO</span>
        <span className="pic-placeholder-path">{label || src.replace("/images/", "images/")}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setMissing(true)}
    />
  );
}
