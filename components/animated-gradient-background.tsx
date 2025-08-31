// components/AnimatedGradientBackground.tsx
"use client";

import { useEffect, useRef } from "react";

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      time += 0.005;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      // Animated color stops with smooth transitions
      const hue1 = (time * 20) % 360;
      const hue2 = (time * 30 + 120) % 360;
      const hue3 = (time * 25 + 240) % 360;

      gradient.addColorStop(0, `hsl(${hue1}, 70%, 15%)`);
      gradient.addColorStop(0.5, `hsl(${hue2}, 60%, 10%)`);
      gradient.addColorStop(1, `hsl(${hue3}, 65%, 12%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add noise/texture overlay
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 10;
        data[i] += noise; // Red
        data[i + 1] += noise; // Green
        data[i + 2] += noise; // Blue
      }

      ctx.putImageData(imageData, 0, 0);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      }}
    />
  );
}

// Alternative CSS-only approach (lighter weight)
export function CSSAnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full opacity-90"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a0f1a 50%, #0f1a0f 100%)
          `,
          animation: "gradientShift 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full opacity-40"
        style={{
          background: `
            radial-gradient(ellipse at 60% 30%, rgba(139, 69, 19, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(25, 25, 112, 0.4) 0%, transparent 50%)
          `,
          animation: "gradientShift 12s ease-in-out infinite reverse",
        }}
      />
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(5deg) scale(1.1);
          }
          50% {
            transform: rotate(0deg) scale(1.05);
          }
          75% {
            transform: rotate(-5deg) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
