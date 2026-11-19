"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Particle = {
  u: number; v: number; x: number; y: number; vx: number; vy: number;
  color: string; glyph: string;
};

export function HeroArtwork() {
  const hostRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const visual = visualRef.current;
    const image = imageRef.current;
    const canvas = canvasRef.current;
    if (!host || !visual || !image || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");
    let particles: Particle[] = [];
    let width = 0, height = 0, frame = 0, lastTime = 0, settlingUntil = 0;
    let hovering = false, visible = true, intensity = 0, tiltX = 0, tiltY = 0;
    const pointer = { x: -1000, y: -1000 };
    const glyphs = ["+", "·", "×", ":", "—"];

    function resize() {
      width = host!.clientWidth;
      height = host!.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const p of particles) {
        p.x = p.u * width; p.y = p.v * height; p.vx = 0; p.vy = 0;
      }
    }

    function sample() {
      if (!image!.naturalWidth) return;
      const sampler = document.createElement("canvas");
      sampler.width = 240; sampler.height = 240;
      const pen = sampler.getContext("2d", { willReadFrequently: true });
      if (!pen) return;
      pen.drawImage(image!, 0, 0, 240, 240);
      const pixels = pen.getImageData(0, 0, 240, 240).data;
      particles = [];
      for (let y = 3; y < 240; y += 3) {
        for (let x = 3; x < 240; x += 3) {
          const i = (y * 240 + x) * 4;
          const [r, g, b, a] = pixels.subarray(i, i + 4);
          const brightness = r * .3 + g * .59 + b * .11;
          if (a < 180 || brightness > 230) continue;
          particles.push({
            u: x / 240, v: y / 240, x: x / 240 * width, y: y / 240 * height,
            vx: 0, vy: 0,
            color: brightness < 95 ? "#24211e" : r > 210 && g > 160 && b < 150 ? "#9d7424" : "#b25783",
            glyph: glyphs[(x * 3 + y) % glyphs.length],
          });
        }
      }
    }

    function clear() {
      ctx.clearRect(0, 0, width, height);
      visual!.style.transform = "";
      intensity = 0; tiltX = 0; tiltY = 0;
    }

    function stop() {
      cancelAnimationFrame(frame); frame = 0; lastTime = 0;
    }

    function draw(time: number) {
      frame = 0;
      if (!visible || document.hidden || motion.matches) { clear(); return; }
      const dt = Math.min((time - (lastTime || time - 16.7)) / 16.7, 2);
      lastTime = time;
      intensity += ((hovering ? 1 : 0) - intensity) * (1 - Math.pow(.85, dt));
      const tx = hovering ? (pointer.y / height - .5) * -4 : 0;
      const ty = hovering ? (pointer.x / width - .5) * 5 : 0;
      tiltX += (tx - tiltX) * .08;
      tiltY += (ty - tiltY) * .08;
      visual!.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width * .23, 136);
      if (intensity > .01) {
        const wash = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius * .82);
        wash.addColorStop(0, `rgba(255,250,240,${intensity})`);
        wash.addColorStop(.5, `rgba(255,250,240,${intensity * .94})`);
        wash.addColorStop(1, "rgba(255,250,240,0)");
        ctx.fillStyle = wash;
        ctx.fillRect(pointer.x - radius, pointer.y - radius, radius * 2, radius * 2);
      }
      ctx.font = `${Math.max(7, width / 58)}px ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const p of particles) {
        const bx = p.u * width, by = p.v * height;
        const dx = bx - pointer.x, dy = by - pointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 1 - distance / radius) * intensity;
        p.vx = (p.vx + ((bx - p.x) * .065 + dx / distance * force * 3.2) * dt) * Math.pow(.84, dt);
        p.vy = (p.vy + ((by - p.y) * .065 + dy / distance * force * 3.2) * dt) * Math.pow(.84, dt);
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (distance < radius * 1.2 || Math.hypot(p.x - bx, p.y - by) > .5) {
          ctx.globalAlpha = Math.min(1, force * 1.7 + Math.hypot(p.x - bx, p.y - by) / 18) * intensity;
          ctx.fillStyle = p.color;
          ctx.fillText(p.glyph, p.x, p.y);
        }
      }
      ctx.globalAlpha = 1;
      if (hovering || time < settlingUntil) frame = requestAnimationFrame(draw);
      else clear();
    }

    function wake() {
      if (!frame && visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(draw);
    }
    function move(event: PointerEvent) {
      if (motion.matches) return;
      const bounds = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left; pointer.y = event.clientY - bounds.top;
      hovering = true; wake();
    }
    function leave() {
      hovering = false; settlingUntil = performance.now() + 1600; wake();
    }
    function updateMotion() {
      if (motion.matches || document.hidden) { hovering = false; stop(); clear(); }
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visual!.parentElement) visual!.parentElement.style.animationPlayState = visible ? "running" : "paused";
      if (!visible) { hovering = false; stop(); clear(); }
    });
    visibility.observe(host);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    image.addEventListener("load", sample);
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    resize();
    if (image.complete) sample();
    return () => {
      stop(); resizeObserver.disconnect(); visibility.disconnect();
      host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave);
      image.removeEventListener("load", sample); motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateMotion);
    };
  }, []);

  return (
    <div ref={hostRef} aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[30rem] select-none lg:max-w-none">
      <div className="hero-illustration-float absolute inset-0">
        <div ref={visualRef} className="absolute inset-0 will-change-transform">
          <Image unoptimized ref={imageRef} src="/brand/illustrations/software-workbench.webp" alt="" fill preload sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, (min-width: 640px) 480px, 90vw" className="object-contain" />
          <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
        </div>
      </div>
    </div>
  );
}
