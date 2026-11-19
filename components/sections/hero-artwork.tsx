"use client";

import { useEffect, useRef } from "react";

export function HeroArtwork() {
  const artwork = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = artwork.current;
    const section = element?.closest("section");
    if (!element || !section || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let frame = 0;
    function move(event: PointerEvent) {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bounds = section!.getBoundingClientRect();
        element!.style.setProperty("--hero-x", `${((event.clientX - bounds.left) / bounds.width - .5) * 16}px`);
        element!.style.setProperty("--hero-y", `${((event.clientY - bounds.top) / bounds.height - .5) * 12}px`);
      });
    }
    function reset() {
      window.cancelAnimationFrame(frame);
      element!.style.setProperty("--hero-x", "0px");
      element!.style.setProperty("--hero-y", "0px");
    }
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", reset);
    return () => {
      window.cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={artwork} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-8 top-6 w-28 opacity-50 transition-transform duration-500 sm:left-[5%] sm:top-[14%] sm:w-36 sm:opacity-80" style={{ transform: "translate3d(var(--hero-x, 0px), var(--hero-y, 0px), 0)" }}>
        <svg viewBox="0 0 160 130" fill="none" className="hero-ornament w-full -rotate-6">
          <rect x="10" y="15" width="140" height="100" rx="10" fill="#181619" stroke="#fbd45c" strokeWidth="1.5" />
          <path d="M10 40h140" stroke="#fbd45c" strokeOpacity=".5" />
          <circle cx="23" cy="28" r="2" fill="#f59ad8" /><circle cx="32" cy="28" r="2" fill="#fbd45c" />
          <path d="m54 61-16 16 16 16m52-32 16 16-16 16M88 55 73 99" stroke="#fff8ed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute -right-8 bottom-3 w-25 opacity-50 transition-transform duration-500 sm:right-[5%] sm:bottom-[11%] sm:w-32 sm:opacity-80" style={{ transform: "translate3d(calc(var(--hero-x, 0px) * -1), calc(var(--hero-y, 0px) * -1), 0)" }}>
        <svg viewBox="0 0 130 140" fill="none" className="hero-ornament hero-ornament-delayed w-full">
          <path d="m31 19 65 64-31 2-16 29-18-95Z" fill="#181619" stroke="#fbd45c" strokeWidth="2" strokeLinejoin="round" />
          <path d="m87 23 4-12 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" fill="#f59ad8" />
        </svg>
      </div>
    </div>
  );
}
