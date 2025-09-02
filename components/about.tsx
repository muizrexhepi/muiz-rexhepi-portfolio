"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";

const marqueeStyles = `
  @keyframes scroll-left-name {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes scroll-right-desktop {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  /* Apply mobile marquee styles only on mobile devices */
  @media (max-width: 1023px) {
    .mobile-name-marquee {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }

    .mobile-name-marquee-content {
      display: inline-block;
      min-width: fit-content;
      animation: scroll-left-name 4s linear infinite;
    }
  }

  /* Apply desktop marquee styles only on desktop devices */
  @media (min-width: 1024px) {
    .desktop-name-marquee {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }
    .desktop-name-marquee-content {
      display: inline-block;
      min-width: fit-content;
      animation: scroll-right-desktop 6s linear infinite; /* Slower and opposite direction */
      animation-delay: 2s; /* Start a bit later */
    }
  }
`;

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const text =
    "HELLO, MY NAME'S MUIZ, I'M A SENIOR FULL-STACK DEVELOPER WHERE I CREATE PRODUCTS, WEBSITES, AND BRANDS.";
  const words = text.split(" ");

  // Animation variants for the staggered words
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger delay between each word
        delayChildren: 0.2, // Initial delay before starting
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "100%", // Start from below the container
      opacity: 0,
    },
    visible: {
      y: "0%", // Move to normal position
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="text-white w-full flex flex-col justify-center items-center py-20 relative overflow-hidden px-5 sm:px-12 lg:px-18 min-h-screen" // Ensure min-h-screen for better vertical centering on desktop
    >
      <style>{marqueeStyles}</style>

      {/* Navigation - now positioned relative to the section for easier desktop layout */}
      <nav className="absolute top-8 left-0 right-0 flex justify-between items-center text-sm font-light tracking-widest z-20 border-t py-6 lg:border-none px-5 sm:px-12 lg:px-18">
        <div className="flex items-center gap-3 text-white/80">
          <span>02/04</span>
          <span>—</span>
          <span>ABOUT</span>
        </div>
        <div className="hidden md:flex gap-8 uppercase text-white/80 text-xs tracking-wider">
          <a href="#" className="hover:text-white transition-colors">
            EMAIL
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">
            INSTAGRAM
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">
            TWITTER
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">
            LINKEDIN
          </a>
        </div>
      </nav>

      {/* Desktop Marquee - Only visible on large screens */}
      <motion.div
        className="hidden lg:block absolute bottom-0 left-0 w-full z-[999] text-white desktop-name-marquee"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="desktop-name-marquee-content text-[200px] leading-none text-white font-extrabold uppercase whitespace-nowrap">
          MUIZ REXHEPI —&nbsp; MUIZ REXHEPI —&nbsp; MUIZ REXHEPI —&nbsp; MUIZ
          REXHEPI —&nbsp; MUIZ REXHEPI —&nbsp;
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 pt-12 lg:pt-0 lg:h-[calc(100vh-160px)]">
        {/* Text Column (Desktop Top-Left, Mobile full width) */}
        <div className="flex flex-col gap-6 md:gap-8 lg:absolute lg:top-1/4 lg:left-0 lg:transform lg:-translate-y-1/2 lg:w-auto lg:max-w-md">
          <div className="overflow-hidden">
            <motion.p
              className="text-lg md:text-2xl lg:text-3xl font-light leading-[1em] tracking-tight"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden">
                  <motion.span className="inline-block" variants={wordVariants}>
                    {word}
                    {index < words.length - 1 && "\u00A0"}{" "}
                    {/* Non-breaking space */}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          </div>
        </div>

        {/* Image Column (Centered on Desktop, as per image 2) */}
        <div className="relative flex justify-center items-center w-full lg:w-auto lg:h-full lg:flex-1 mt-12 lg:mt-0 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] h-[400px] md:max-w-[500px] md:h-[500px] lg:max-w-[600px] lg:h-[600px] rounded-[3rem] shadow-2xl overflow-hidden" // Adjust max-w and h for desktop image size
          >
            <Image
              src="/assets/images/profile.jpeg" // Use your actual image path here
              alt="Profile of Muiz"
              fill // Use fill to make the image cover the parent div
              className="rounded-[3rem] object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
              priority // Mark as priority since it's above the fold
            />
          </motion.div>

          {/* Mobile Name Marquee - positioned absolutely to touch the photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="lg:hidden absolute -bottom-12 left-0 right-0 z-30"
          >
            <div className="mobile-name-marquee">
              <div className="mobile-name-marquee-content text-[80px] tracking-wide uppercase">
                MUIZ REXHEPI —&nbsp; MUIZ REXHEPI —&nbsp; MUIZ REXHEPI —&nbsp;
                MUIZ REXHEPI —&nbsp;
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Learn More Button (right-aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }} // Delayed to start after text animation
          className="hidden lg:flex flex-col gap-4 mt-8 lg:absolute lg:right-0 lg:bottom-1/4 lg:transform lg:translate-y-1/2"
        >
          <motion.a
            href="#"
            className="w-32 h-32 rounded-full border border-white/30 items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-center leading-tight">
              LEARN MORE
            </span>
          </motion.a>
        </motion.div>

        {/* Mobile/Tablet Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }} // Delayed to start after name marquee
          className="lg:hidden flex flex-col gap-4 mt-12"
        >
          <motion.a
            href="/about"
            className="lg:hidden flex w-32 h-32 rounded-full border border-white/30 items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-center leading-[1em] flex flex-col mr-4">
              LEARN <span className="ml-10">MORE</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
