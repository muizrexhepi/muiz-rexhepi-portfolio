"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
// Import the Project type directly from the data file to ensure consistency
import { projects, Project } from "@/data/projects";
import { useRef, useState } from "react";

const favoriteProjects = projects.filter((project) => project.favorite);

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const text =
    "A selection of my best projects that showcase my passion for building memorable digital products and experiences.";
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

      {/* Full-section Overlay for Project Name */}
      {hoveredProject && (
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          initial="hidden"
          animate="visible"
          variants={projectTitleContainerVariants}
        >
          {/* Apply mix-blend-mode and backdrop-filter here */}
          <h3
            className="text-[#171717]  text-4xl md:text-5xl lg:text-8xl font-bold uppercase text-center leading-none tracking-widest"
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
      <nav className="absolute top-8 left-0 right-0 flex justify-between items-center text-sm font-light tracking-wide z-10">
        <div className="flex items-center gap-3 text-white/80">
          <span>03/04</span>
          <span>—</span>
          <span>PROJECTS</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full mx-auto pt-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between mb-16 md:mb-20 px-4 md:px-0">
          <motion.a
            href="/projects"
            className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group mb-8 md:mb-0"
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
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-20 px-4 md:px-0">
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

        <motion.div
          className="flex justify-center mt-16 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link
            href="/projects"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-sm font-medium uppercase tracking-wider">
              VIEW ALL PROJECTS
            </span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
