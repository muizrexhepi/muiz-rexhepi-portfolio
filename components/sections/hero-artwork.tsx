"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroArtwork() {
  const hostRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const visual = visualRef.current;
    if (!host || !visual) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
    let frame = 0;

    function reset() {
      cancelAnimationFrame(frame);
      visual!.style.transform = "";
    }
    function move(event: PointerEvent) {
      if (motion.matches) return;
      const bounds = host!.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        visual!.style.transform = `perspective(1200px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translate3d(${x * 5}px, ${y * 3}px, 0)`;
      });
    }
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      reset();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return (
    <div ref={hostRef} aria-hidden="true" className="relative mx-auto h-40 w-full max-w-[25rem] select-none sm:h-64 sm:max-w-[32rem] lg:h-96 lg:max-w-none">
      <div ref={visualRef} className="absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transition-none">
        <Image unoptimized src="/brand/illustrations/software-systems-v2.webp" alt="" fill preload sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, 300px" className="object-contain" />
      </div>
    </div>
  );
}
