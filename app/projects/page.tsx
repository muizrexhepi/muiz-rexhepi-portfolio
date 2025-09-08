"use client";

import { Project, projects } from "@/data/projects";
import React, { useState, useEffect, useRef } from "react";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !isLoaded) return;

    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
      }

      setTimeout(() => setIsScrolling(false), 1200);
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsScrolling(false), 1200);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
        setTimeout(() => setIsScrolling(false), 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling, isMobile, isLoaded]);

  const goToProject = (index: number): void => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentIndex(index);
    setTimeout(() => setIsScrolling(false), 1200);
  };

  const currentProject: Project = projects[currentIndex];

  const handleProjectClick = (): void => {
    if (currentProject.url) {
      window.open(currentProject.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-white overflow-hidden relative"
    >
      {isMobile ? (
        /* Mobile Layout */
        <div className="pt-20 px-4">
          {/* Mobile Progress */}
          <div
            className="flex justify-center gap-2 mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s",
            }}
          >
            {projects.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`h-0.5 rounded-full transition-all duration-700 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50 w-4"
                }`}
              />
            ))}
          </div>

          {/* Mobile Project */}
          <div className="mb-8">
            <div
              onClick={handleProjectClick}
              className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: `translateY(${isLoaded ? 0 : 60}px) scale(${
                  isLoaded ? 1 : 0.9
                })`,
                transition:
                  "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s",
              }}
            >
              {currentProject.image ? (
                <img
                  src={currentProject.image}
                  alt={currentProject.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-2xl font-light text-white/60">
                    {currentProject.name}
                  </span>
                </div>
              )}

              {/* Mobile overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div className="flex-1">
                      <h2
                        className="text-4xl md:text-5xl font-thin tracking-tight uppercase leading-none mb-3 text-white"
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transform: isLoaded
                            ? "translateY(0)"
                            : "translateY(40px)",
                          transition:
                            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s",
                        }}
                      >
                        {currentProject.name}
                      </h2>
                      <p
                        className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium mb-2"
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transform: isLoaded
                            ? "translateY(0)"
                            : "translateY(30px)",
                          transition:
                            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s",
                        }}
                      >
                        {currentProject.role}
                      </p>
                      {currentProject.favorite && (
                        <div
                          className="inline-flex items-center gap-2 text-xs text-white/60"
                          style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s",
                          }}
                        >
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div
                      className="text-3xl font-thin text-white/40 ml-4"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded
                          ? "translateY(0)"
                          : "translateY(30px)",
                        transition:
                          "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s",
                      }}
                    >
                      {String(currentIndex + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className="fixed bottom-6 left-1/2 transform z-50"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: `translateX(-50%) translateY(${isLoaded ? 0 : 40}px)`,
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s",
            }}
          >
            <div className="flex items-center gap-6 bg-black/40 backdrop-blur-lg rounded-full px-8 py-4 border border-white/10">
              <button
                onClick={() =>
                  goToProject(
                    currentIndex === 0 ? projects.length - 1 : currentIndex - 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-500 hover:scale-110"
                disabled={isScrolling}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <span className="text-sm font-light min-w-[70px] text-center tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>

              <button
                onClick={() =>
                  goToProject(
                    currentIndex === projects.length - 1 ? 0 : currentIndex + 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-500 hover:scale-110"
                disabled={isScrolling}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <>
          {/* Desktop Navigation */}
          <div
            className="fixed right-1/6 top-1/2 transform -translate-y-1/2 z-50"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: `translateY(-50%) translateX(${isLoaded ? 0 : 30}px)`,
              transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s",
            }}
          >
            <div className="flex flex-col gap-2">
              {projects.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-[2.5px] rounded-full transition-all duration-700 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-white w-6 h-[3px]"
                      : "bg-white/30 hover:bg-white/60 w-4"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="h-screen flex items-start justify-center relative">
            <div className="relative">
              <div className="h-[2px] w-56 absolute border-t border-t-white bottom-34 -left-[40%]" />
              <div
                className="absolute bottom-20 -left-1/4 font-thin  z-10 select-none flex items-center gap-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(-40px)",
                  transition:
                    "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s",
                }}
              >
                <span className="text-white/90 text-2xl">
                  00.{String(currentIndex + 1).padStart(2, "0")}
                </span>
                <h1
                  key={`desktop-title-${currentIndex}`}
                  className="text-[200px] font-semibold tracking-tighter uppercase leading-none text-white"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.03em",
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                  {currentProject.name}
                </h1>
              </div>

              {/* Main Project */}
              <div
                onClick={handleProjectClick}
                className="relative w-[1100px] h-[600px] rounded-4xl overflow-hidden"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? 0 : 80}px) scale(${
                    isLoaded ? 1 : 0.85
                  })`,
                  transition:
                    "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s",
                }}
              >
                {currentProject.image ? (
                  <img
                    src={currentProject.image}
                    alt={currentProject.name}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-4xl font-light text-white/40">
                      {currentProject.name}
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  {/* <div className="absolute bottom-0 left-0 right-0 p-12">
                    <div className="flex items-end justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="overflow-hidden">
                          <h1
                            key={`desktop-title-${currentIndex}`}
                            className="text-[140px] font-thin tracking-tighter uppercase leading-none text-white"
                            style={{
                              fontFamily:
                                "system-ui, -apple-system, sans-serif",
                              letterSpacing: "-0.03em",
                              opacity: 1,
                              transform: "translateY(0)",
                              transition:
                                "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            }}
                          >
                            {currentProject.name}
                          </h1>
                        </div>
                        <div className="space-y-3">
                          <div className="overflow-hidden">
                            <p
                              key={`desktop-role-${currentIndex}`}
                              className="text-sm uppercase tracking-[0.4em] text-white/90 font-medium"
                              style={{
                                opacity: 1,
                                transform: "translateY(0)",
                                transition:
                                  "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s",
                              }}
                            >
                              {currentProject.role}
                            </p>
                          </div>
                          {currentProject.favorite && (
                            <div className="overflow-hidden">
                              <div
                                key={`desktop-featured-${currentIndex}`}
                                className="inline-flex items-center gap-3 text-xs text-white/60"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0)",
                                  transition:
                                    "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
                                }}
                              >
                                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                                <span className="tracking-[0.3em]">
                                  FEATURED PROJECT
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="overflow-hidden">
                        <div
                          key={`desktop-number-${currentIndex}`}
                          className="text-right ml-8"
                          style={{
                            opacity: 1,
                            transform: "translateY(0)",
                            transition:
                              "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
                          }}
                        >
                          <div className="text-6xl font-thin text-white/50 mb-3">
                            {String(currentIndex + 1).padStart(2, "0")}
                          </div>
                          <div className="text-xs tracking-[0.3em] text-white/30 uppercase">
                            OF {String(projects.length).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
