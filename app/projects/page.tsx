"use client";

import { Project, projects } from "@/data/projects";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const router = useRouter();

  // Spring values for smooth transitions
  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const projectY = useSpring(0, springConfig);

  useEffect(() => {
    setIsLoaded(true);

    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll completely
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  // Desktop scroll handling
  useEffect(() => {
    if (isMobile || !isLoaded) return;

    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      if (isTransitioning) return;

      setIsTransitioning(true);
      setPreviewIndex(null);

      if (e.deltaY > 0) {
        // Scrolling down - next project
        projectY.set(-100);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
          );
          projectY.set(100);
          setTimeout(() => projectY.set(0), 50);
        }, 300);
      } else {
        // Scrolling up - previous project
        projectY.set(100);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
          );
          projectY.set(-100);
          setTimeout(() => projectY.set(0), 50);
        }, 300);
      }

      setTimeout(() => setIsTransitioning(false), 800);
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isTransitioning) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsTransitioning(true);
        setPreviewIndex(null);
        projectY.set(-100);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
          );
          projectY.set(100);
          setTimeout(() => projectY.set(0), 50);
        }, 300);
        setTimeout(() => setIsTransitioning(false), 800);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsTransitioning(true);
        setPreviewIndex(null);
        projectY.set(100);
        setTimeout(() => {
          setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
          );
          projectY.set(-100);
          setTimeout(() => projectY.set(0), 50);
        }, 300);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTransitioning, isMobile, isLoaded, projectY]);

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

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        setIsTransitioning(true);

        if (diffX > 0) {
          setCurrentIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
          );
        } else {
          setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
          );
        }

        setTimeout(() => setIsTransitioning(false), 600);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, isLoaded, isTransitioning]);

  const goToProject = (index: number): void => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setPreviewIndex(null);

    if (!isMobile) {
      const direction = index > currentIndex ? -100 : 100;
      projectY.set(direction);
      setTimeout(() => {
        setCurrentIndex(index);
        projectY.set(-direction);
        setTimeout(() => projectY.set(0), 50);
      }, 300);
    } else {
      setCurrentIndex(index);
    }

    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleIndicatorHover = (index: number): void => {
    if (isTransitioning || index === currentIndex || isMobile) return;
    setPreviewIndex(index);
  };

  const handleIndicatorLeave = (): void => {
    if (isMobile) return;
    setPreviewIndex(null);
  };

  const currentProject: Project = projects[currentIndex];
  const displayProject =
    previewIndex !== null ? projects[previewIndex] : currentProject;
  const displayIndex = previewIndex !== null ? previewIndex : currentIndex;

  // Create slug from project name
  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleProjectClick = (): void => {
    const slug = createSlug(displayProject.name);
    router.push(`/project/${slug}`);
  };

  // Animation variants
  const titleVariants = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="fixed inset-0 w-full h-full text-white overflow-hidden bg-black">
      {isMobile ? (
        /* Mobile Layout */
        <div className="h-full flex flex-col">
          {/* Mobile Progress Dots */}
          <motion.div
            className="flex justify-center gap-2 pt-16 pb-6 px-4 shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : -20,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {projects.map((_, index: number) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-white w-8" : "bg-white/30 w-4"
                }`}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Mobile Project Card */}
          <div className="flex-1 px-4 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                onClick={handleProjectClick}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {displayProject.image ? (
                  <motion.img
                    src={displayProject.image}
                    alt={displayProject.name}
                    className="w-full h-full object-cover"
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-light text-white/60">
                      {displayProject.name}
                    </span>
                  </div>
                )}

                {/* Mobile overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <div className="overflow-hidden mb-3">
                          <motion.h2
                            className="text-3xl sm:text-4xl font-light tracking-tight uppercase leading-none text-white"
                            variants={titleVariants}
                            initial="initial"
                            animate="animate"
                          >
                            {displayProject.name}
                          </motion.h2>
                        </div>
                        <motion.p
                          className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium mb-2"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          {displayProject.role}
                        </motion.p>
                        {displayProject.favorite && (
                          <motion.div
                            className="inline-flex items-center gap-2 text-xs text-white/60"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                            FEATURED
                          </motion.div>
                        )}
                      </div>
                      <motion.div
                        className="text-2xl font-light text-white/40 ml-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {String(currentIndex + 1).padStart(2, "0")}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Counter Only */}
          <motion.div
            className="text-center pb-6 px-4 shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 20,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="text-sm text-white/40">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </motion.div>
        </div>
      ) : (
        /* Desktop Layout */
        <>
          {/* Fixed Desktop Header */}
          <motion.div
            className="fixed bottom-36 left-0 right-0 z-50 px-8 lg:px-16 pt-8 lg:pt-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : -30,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="flex items-baseline gap-6">
              <motion.span
                className="text-white/60 text-xl font-light tracking-wider"
                key={`counter-${displayIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {String(displayIndex + 1).padStart(4, "0")}
              </motion.span>
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`title-${displayIndex}`}
                    className="text-6xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[160px] font-light tracking-tighter uppercase leading-none text-white"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {displayProject.name}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div
            className="fixed right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              x: isLoaded ? 0 : 30,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="flex flex-col gap-4">
              {projects.map((_, index: number) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  onMouseEnter={() => handleIndicatorHover(index)}
                  onMouseLeave={handleIndicatorLeave}
                  className="bg-white/30 rounded-full h-[2px] transition-colors duration-300"
                  style={{
                    backgroundColor:
                      index === currentIndex ? "#ffffff" : undefined,
                  }}
                  animate={{
                    width:
                      index === currentIndex || previewIndex === index
                        ? 24
                        : 16,
                    backgroundColor:
                      index === currentIndex
                        ? "#ffffff"
                        : previewIndex === index
                        ? "rgba(255, 255, 255, 0.7)"
                        : "rgba(255, 255, 255, 0.3)",
                  }}
                  whileHover={{
                    width: 24,
                    backgroundColor:
                      index === currentIndex
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Project Display */}
          <div className="h-full flex items-center justify-center px-8 lg:px-16">
            <motion.div
              className="relative w-full max-w-6xl h-[65vh] rounded-3xl overflow-hidden cursor-pointer group"
              style={{ y: projectY }}
              onClick={handleProjectClick}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: previewIndex !== null ? 0.7 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {displayProject.image ? (
                    <img
                      src={displayProject.image}
                      alt={displayProject.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-4xl font-light text-white/40">
                        {displayProject.name}
                      </span>
                    </div>
                  )}

                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 lg:p-12"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="flex items-end justify-between">
                        <div className="flex-1">
                          {displayProject.favorite && (
                            <motion.div
                              className="inline-flex items-center gap-3 text-xs text-white/70"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              <span className="w-2 h-2 bg-white/70 rounded-full"></span>
                              <span className="tracking-[0.3em]">
                                FEATURED PROJECT
                              </span>
                            </motion.div>
                          )}
                        </div>

                        <motion.div
                          className="text-xs lg:text-sm uppercase tracking-[0.4em] text-white/90 font-medium mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {displayProject.role}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-700" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
