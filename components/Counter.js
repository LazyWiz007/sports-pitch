"use client";

import { useEffect, useRef } from "react";

/**
 * Counts from 0 to `value` when scrolled into view.
 * prefix/suffix are rendered as-is (e.g. "100" + "M+").
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1400 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = `${prefix}${value.toLocaleString("en-IN")}${suffix}`;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(value * eased);
            el.textContent = `${prefix}${current.toLocaleString("en-IN")}${suffix}`;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, prefix, suffix, duration]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
