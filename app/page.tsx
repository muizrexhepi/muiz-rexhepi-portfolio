"use client";
import { AboutSection } from "@/components/about";
import { CapabilitiesSection } from "@/components/capabilities";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
      radial-gradient(circle at 25% 25%, rgba(10, 10, 10, 0.9) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(20, 20, 20, 0.8) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 0.95) 0%, transparent 70%),
      linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)
    `,
          }}
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CapabilitiesSection />
      </div>
    </div>
  );
}
