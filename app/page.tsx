"use client";
import { AboutSection } from "@/components/about";
import AnimatedBackground from "@/components/animated-gradient-background";
import { CapabilitiesSection } from "@/components/capabilities";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Use the animated background component here */}
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CapabilitiesSection />
      </div>
    </div>
  );
}
