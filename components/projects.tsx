"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { useRef, useState, useEffect } from "react";

const favoriteProjects = projects.filter((project) => project.favorite);

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % favoriteProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + favoriteProjects.length) % favoriteProjects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < favoriteProjects.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  const text =
    "A selection of my best projects that showcase my passion for building digital products and experiences.";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projectTitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const projectTitleLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen text-white w-full flex flex-col items-center py-20 relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: "url('/noise-texture.png')",
            backgroundSize: "100px",
          }}
        ></div>
      </div>

      {/* Full-section Overlay for Project Name - Only on desktop */}
      {hoveredProject && !isMobile && (
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          initial="hidden"
          animate="visible"
          variants={projectTitleContainerVariants}
        >
          <h3
            className="text-[#171717] text-4xl md:text-5xl lg:text-8xl font-bold uppercase text-center leading-none tracking-widest"
            style={{ mixBlendMode: "color-dodge", backdropFilter: "blur(1px)" }}
          >
            {hoveredProject.name.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={projectTitleLetterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h3>
        </motion.div>
      )}

      {/* Top Navigation */}
      <nav className="absolute top-8 left-0 right-0 flex justify-between items-center text-sm font-light tracking-wide z-10 border-t pt-3 lg:border-none">
        <div className="flex items-center gap-3 text-white/80">
          <span>03/04</span>
          <span>—</span>
          <span>PROJECTS</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse gap-6 md:flex-row items-start justify-between mb-6 md:mb-20">
          <motion.a
            href="/projects"
            className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-center leading-tight">
              VIEW ALL
              <br />
              PROJECTS
            </span>
          </motion.a>

          <motion.div
            className="flex-1 w-full md:max-w-4xl md:ml-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="overflow-hidden">
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.1em] tracking-tight"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="invisible">rand</span>
                {words.map((word, index) => (
                  <span key={index} className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block"
                      variants={wordVariants}
                    >
                      {word}
                      {index < words.length - 1 && "\u00A0"}
                    </motion.span>
                  </span>
                ))}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        {isMobile ? (
          // Mobile Carousel
          <div className="relative mt-12">
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(event, info) => {
                  const threshold = 50;
                  if (info.offset.x > threshold && currentSlide > 0) {
                    prevSlide();
                  } else if (
                    info.offset.x < -threshold &&
                    currentSlide < favoriteProjects.length - 1
                  ) {
                    nextSlide();
                  }
                }}
              >
                {favoriteProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 * index + 0.6 }}
                    >
                      <Link
                        href={project.url!}
                        target="_blank"
                        className="block"
                      >
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gray-900">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <span className="text-white/50 text-lg">
                                {project.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Project Info Below Image */}
                      <div className="mt-2 text-start">
                        <h3 className="text-lg font-medium tracking-tight uppercase text-white/60">
                          {project.name}
                        </h3>
                        <p className="text-lg font-medium tracking-tight uppercase text-white/60">
                          {project.role}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator Only */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                {favoriteProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-20">
            {favoriteProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index + 0.6 }}
                style={{
                  opacity:
                    hoveredProject === null ||
                    hoveredProject.name === project.name
                      ? 1
                      : 0.4,
                  transition: "opacity 0.3s ease-in-out",
                }}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={project.url!} target="_blank" className="block">
                  <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden bg-gray-900">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-white/50 text-lg">
                          {project.name}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
