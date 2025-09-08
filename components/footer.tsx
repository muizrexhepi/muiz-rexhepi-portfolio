"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FooterSection() {
  const mainContentRef = useRef(null);
  const footerNavRef = useRef(null);

  const contentInView = useInView(mainContentRef, {
    once: true,
    margin: "-200px 0px",
  });

  const navInView = useInView(footerNavRef, {
    once: false,
    margin: "-100px 0px",
  });

  // Animation variants for the main content container
  // This tells Framer Motion exactly what the "initial" and "docked" states should look like.
  const containerVariants = {
    initial: {
      borderColor: "rgba(255, 255, 255, 0)", // Fully transparent border
      backgroundColor: "rgba(255, 255, 255, 0)", // Fully transparent background
      borderRadius: "0rem",
    },
    docked: {
      borderColor: "rgba(255, 255, 255, 0.3)", // The white/30 border color
      backgroundColor: "rgba(255, 255, 255, 0.05)", // The white/[0.05] background color
      borderRadius: "3rem",
    },
  };

  return (
    <footer
      className="relative min-h-screen w-full flex flex-col justify-end text-white pt-20 pb-8 overflow-hidden px-5 sm:px-12 lg:px-18"
      id="contact"
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          ref={mainContentRef}
          layout // Animates size and position
          variants={containerVariants} // Defines the states for color/border animation
          initial="initial" // Sets the default state
          animate={navInView ? "docked" : "initial"} // Toggles between states based on scroll position
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-grow flex-col items-center justify-center text-center p-8 border backdrop-blur-sm"
        >
          <motion.p
            className="text-white text-sm md:text-base lg:text-xl uppercase tracking-widest font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GOT A PROJECT IN MIND?
          </motion.p>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LET&apos;S CONNECT
          </motion.h2>

          <motion.a
            href="mailto:mail@muizrexhepi.com"
            className="size-32 rounded-full border border-white/30 flex flex-col items-center justify-center p-4 text-center transition-colors duration-300 hover:bg-white hover:text-black group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium uppercase leading-[1.1em] tracking-wider">
              WRITE A
              <br />
              MESSAGE
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Nav - (no changes here) */}
      <div ref={footerNavRef} className="relative z-10 w-full pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-4">
          <motion.div
            className="flex items-center gap-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-sm md:text-base font-light tracking-wide text-white max-w-md">
              FEEL FREE TO CONNECT WITH ME ON SOCIAL
            </p>
          </motion.div>
          <div className="flex gap-6 md:gap-8 lg:gap-45 uppercase text-sm md:text-base font-light text-white">
            <motion.a
              href="https://www.instagram.com/muiz.rexhepi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://x.com/muiz_rexhepi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muiz-rexhepi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
