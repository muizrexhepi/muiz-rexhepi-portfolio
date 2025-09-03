"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useRef } from "react";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable wheel navigation on mobile

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        // Scroll down
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
      } else {
        // Scroll up
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
      }

      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling, isMobile]);

  const goToProject = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentIndex(index);
    setTimeout(() => setIsScrolling(false), 800);
  };

  // Create slug from project name
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // Animation variants for title
  const titleVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const roleVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden">
      {isMobile ? (
        <>
          <div className="h-screen flex flex-col items-center justify-center px-4 relative">
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-gray-600 hover:bg-gray-400 w-4"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-sm mt-8">
              {/* Mobile Image */}
              <Link
                href={`/projects/${createSlug(projects[currentIndex].name)}`}
              >
                <motion.div
                  key={`mobile-image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl"
                >
                  {projects[currentIndex].image ? (
                    <Image
                      src={projects[currentIndex].image!}
                      alt={projects[currentIndex].name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-400 text-lg font-light">
                        {projects[currentIndex].name}
                      </span>
                    </div>
                  )}
                </motion.div>
              </Link>

              {/* Mobile Title and Role Below Image */}
              <div className="mt-6 text-center space-y-2">
                <div className="overflow-hidden">
                  <motion.h2
                    key={`mobile-title-${currentIndex}`}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl font-light text-white tracking-tight"
                  >
                    {projects[currentIndex].name}
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    key={`mobile-role-${currentIndex}`}
                    variants={roleVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-sm uppercase tracking-widest text-gray-400 font-medium"
                  >
                    {projects[currentIndex].role}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <button
                onClick={() =>
                  goToProject(
                    currentIndex === 0 ? projects.length - 1 : currentIndex - 1
                  )
                }
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                disabled={isScrolling}
              >
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <span className="text-sm text-gray-300 font-medium min-w-[60px] text-center">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

              <button
                onClick={() =>
                  goToProject(
                    currentIndex === projects.length - 1 ? 0 : currentIndex + 1
                  )
                }
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                disabled={isScrolling}
              >
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Desktop Layout */
        <>
          {/* Desktop Navigation Dots */}
          <div className="fixed right-46 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-4 h-[3px] rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125 w-6 "
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Content */}
          <div className="h-screen flex items-start justify-center">
            <div className="relative">
              <Link
                href={`/projects/${createSlug(projects[currentIndex].name)}`}
              >
                <motion.div
                  key={`desktop-image-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-[800px] h-[500px] rounded-3xl overflow-hidden bg-gray-800 shadow-2xl"
                >
                  {projects[currentIndex].image ? (
                    <Image
                      src={projects[currentIndex].image!}
                      alt={projects[currentIndex].name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-400 text-lg font-light">
                        {projects[currentIndex].name}
                      </span>
                    </div>
                  )}

                  {/* Fixed text on bottom left of image */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-end gap-4">
                      <div className="space-y-1">
                        <div className="overflow-hidden">
                          <motion.h2
                            key={`desktop-title-${currentIndex}`}
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-[120px] font-light tracking-tight uppercase leading-none"
                          >
                            {projects[currentIndex].name}
                          </motion.h2>
                        </div>
                        <div className="overflow-hidden">
                          <motion.p
                            key={`desktop-role-${currentIndex}`}
                            variants={roleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-xs uppercase tracking-widest text-white/80 font-medium"
                          >
                            {projects[currentIndex].role}
                          </motion.p>
                        </div>
                      </div>
                      <motion.div
                        key={`desktop-number-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-4xl font-light text-white/60"
                      >
                        {String(currentIndex + 1).padStart(2, "0")}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
