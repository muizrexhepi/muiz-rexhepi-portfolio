"use client";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import React from "react";

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
      className="min-h-screen text-white w-full flex flex-col justify-center items-center py-20 relative overflow-hidden"
    >
      <nav className="absolute top-8 left-0 right-0 flex justify-between items-center text-sm font-light tracking-widest z-20">
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

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Text Column */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Animated Text with Stagger Effect */}
          <div className="overflow-hidden">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-light leading-snug"
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.5 }} // Delayed to start after text animation
            className="flex flex-col gap-4 mt-8"
          >
            {/* The "LEARN MORE" button */}
            <motion.a
              href="#"
              className="hidden lg:flex w-32 h-32 rounded-full border border-white/30 items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs font-medium uppercase tracking-wider text-center leading-tight">
                LEARN MORE
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[3rem] shadow-2xl overflow-hidden"
        >
          <img
            src="/assets/images/profile.jpeg"
            alt="Profile of Chris"
            className="rounded-[3rem] w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mobile/Tablet Learn More Button */}
      <motion.a
        href="#"
        className="mt-12 flex lg:hidden w-full max-w-xs items-center justify-center gap-2 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium uppercase tracking-wider">
          LEARN MORE
        </span>
        <ChevronRight className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
