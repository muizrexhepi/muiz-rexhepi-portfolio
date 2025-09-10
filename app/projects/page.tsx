"use client";

import { Project, projects } from "@/data/projects";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    setIsLoaded(true);
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable body scroll
  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [lenis]);

  // Smooth scroll to project
  const scrollToProject = useCallback(
    (index: number) => {
      if (!containerRef.current || isTransitioning || index === currentIndex)
        return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      const container = containerRef.current;
      const targetY = index * window.innerHeight;

      const startY = container.scrollTop;
      const distance = targetY - startY;
      const duration = 1000; // Increased duration for a smoother feel
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuint = 1 - Math.pow(1 - progress, 5); // Smoother easing

        container.scrollTop = startY + distance * easeOutQuint;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setTimeout(() => setIsTransitioning(false), 150);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    [isTransitioning, currentIndex]
  );

  // Handle wheel events for desktop
  useEffect(() => {
    if (isMobile || !isLoaded) return;

    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 1200 || isTransitioning) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        const nextIndex =
          currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        scrollToProject(nextIndex);
      } else {
        const prevIndex =
          currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        scrollToProject(prevIndex);
      }
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isTransitioning) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1200) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        lastScrollTime.current = now;
        const nextIndex =
          currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        scrollToProject(nextIndex);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        lastScrollTime.current = now;
        const prevIndex =
          currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        scrollToProject(prevIndex);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isMobile, isLoaded, scrollToProject, isTransitioning]);

  // Mobile touch handling
  useEffect(() => {
    if (!isMobile || !isLoaded) return;

    const handleTouchStart = (e: TouchEvent): void => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      if (isTransitioning) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        const now = Date.now();
        if (now - lastScrollTime.current < 800) return;
        lastScrollTime.current = now;

        if (diffY > 0) {
          const nextIndex =
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
          scrollToProject(nextIndex);
        } else {
          const prevIndex =
            currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
          scrollToProject(prevIndex);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, isMobile, isLoaded, scrollToProject, isTransitioning]);

  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleProjectClick = (project: Project): void => {
    const slug = createSlug(project.name);
    router.push(`/project/${slug}`);
  };

  return (
    <div className="fixed inset-0 w-full h-full text-white overflow-hidden bg-black">
      {isMobile ? (
        // --- MOBILE LAYOUT (Unchanged) ---
        <div className="h-full flex flex-col pt-24">
          <motion.div
            className="flex justify-center gap-3 pb-8 px-4 shrink-0"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {projects.map((_, index: number) => (
              <motion.button
                key={index}
                onClick={() => scrollToProject(index)}
                className="relative"
                disabled={isTransitioning}
              >
                <motion.div
                  className="h-0.5 rounded-full"
                  animate={{
                    width: index === currentIndex ? 32 : 16,
                    backgroundColor:
                      index === currentIndex
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </motion.button>
            ))}
          </motion.div>
          <div className="flex-1 px-6 pb-8">
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(projects[currentIndex])}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {projects[currentIndex].image ? (
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-xl font-light text-white/50">
                        {projects[currentIndex].name}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                        {projects[currentIndex].name}
                      </h2>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                        {projects[currentIndex].role}
                      </p>
                      {projects[currentIndex].favorite && (
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          FEATURED
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      ) : (
        // --- DESKTOP LAYOUT (Updated) ---
        <>
          <motion.div
            className="fixed left-8 lg:left-16 top-1/2 transform -translate-y-1/2 z-40"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-lg font-light text-white/60 tracking-[0.2em] font-mono">
                <span>00.0</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {currentIndex + 1}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="w-12 h-px bg-white/30"></div>
            </div>
          </motion.div>

          <motion.div
            className="fixed right-8 lg:right-16 xl:right-1/7 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col gap-2">
              {projects.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  //  **CHANGE**: Hover now scrolls to the project
                  onMouseEnter={() => scrollToProject(index)}
                  className="relative group"
                  disabled={isTransitioning}
                >
                  <motion.div
                    className="h-[2.5px] bg-white rounded-full"
                    animate={{
                      width: index === currentIndex ? "32px" : "20px",
                      opacity: index === currentIndex ? "100%" : "60%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <div
            ref={containerRef}
            className="h-full overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => void (projectRefs.current[index] = el)}
                className="relative h-screen flex items-center justify-center px-8 lg:px-16"
                style={{ minHeight: "100vh" }}
              >
                <motion.div
                  className="relative max-w-5xl mx-auto w-full cursor-pointer z-30"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
                        <span className="text-4xl font-light text-white/60">
                          {project.name}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* **CHANGE**: Added z-40 to ensure text is always on top */}
          <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-16 pointer-events-none z-40">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  className="text-[8rem] lg:text-[12rem] xl:text-[14rem] font-bold tracking-tighter uppercase text-white leading-none select-none"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.04em",
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {projects[currentIndex].name}
                </motion.h1>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex items-start justify-between mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                    {projects[currentIndex].role}
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    ART DIRECTION + DESIGN
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    {new Date()
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, ".")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {projects[currentIndex].favorite && (
                    <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                      FEATURED
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
