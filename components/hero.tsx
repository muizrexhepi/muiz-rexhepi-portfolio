// components/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const marqueeStyles = `
  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes scroll-right {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

  /* Apply marquee styles only on screens up to 767px wide (mobile) */
  @media (max-width: 767px) {
    .mobile-marquee-container {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
    }

    .mobile-marquee-content {
      display: inline-block;
      min-width: fit-content;
    }
    
    .mobile-marquee-content.left {
      animation: scroll-left 5s linear infinite; /* Faster speed */
      animation-direction: normal;
    }
    
    .mobile-marquee-content.right {
      animation: scroll-right 5s linear infinite; /* Faster speed */
      animation-direction: normal;
    }
  }
`;

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkIsMobile = () => window.innerWidth < 768;
    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop Title Spans
  const DesktopTitle = () => (
    <>
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        FULL-STACK
      </motion.span>
      <motion.span
        className="block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        SOFTWARE
      </motion.span>
      <motion.span
        className="relative flex justify-center md:justify-end gap-4 items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        ENGINEER
        <motion.div
          className="left-full hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="max-w-xs xl:max-w-sm mt-4">
            <p className="text-sm xl:text-base text-left font-light leading-tight tracking-tight text-white uppercase">
              <span className="ml-12">
                {" "}
                PASSIONATE ABOUT CREATING SCALABLE WEB APPLICATIONS AND
              </span>{" "}
              ELEGANT CODE SOLUTIONS, BRINGING IDEAS TO LIFE THROUGH FULL-STACK
              DEVELOPMENT.
            </p>
          </div>
        </motion.div>
      </motion.span>
    </>
  );

  // Mobile Marquee Title Spans
  const MobileMarqueeTitle = () => (
    <div className="space-y-2">
      {/* Line 1 (Scrolls right) */}
      <div className="mobile-marquee-container">
        <motion.span
          className="mobile-marquee-content right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          FULL-STACK —&nbsp; FULL-STACK —&nbsp;
        </motion.span>
      </div>
      {/* Line 2 (Scrolls left) */}
      <div className="mobile-marquee-container">
        <motion.span
          className="mobile-marquee-content left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          SOFTWARE —&nbsp; SOFTWARE —&nbsp;
        </motion.span>
      </div>
      {/* Line 3 (Scrolls right) */}
      <div className="mobile-marquee-container">
        <motion.span
          className="mobile-marquee-content right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          ENGINEER —&nbsp; ENGINEER —&nbsp;
        </motion.span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen text-white w-full flex flex-col relative">
      <style>{marqueeStyles}</style>

      {/* Date and Scroll Indicator */}
      <div className="pt-12">
        <motion.p
          className="text-xs md:text-sm font-light tracking-wider text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          01/04 — SCROLL ↓
        </motion.p>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-start py-36 sm:py-24 justify-center relative">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight mb-8 md:mb-12">
                {isClient && isMobile ? (
                  <MobileMarqueeTitle />
                ) : (
                  <DesktopTitle />
                )}
              </h1>

              {/* Description Text - Mobile/Tablet Centered - This div will only be visible on desktop */}
              <motion.div
                className="flex justify-center lg:hidden mt-14"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="max-w-sm md:max-w-md ">
                  <p className="text-base font-light text-left leading-tight tracking-wide text-white uppercase">
                    PASSIONATE ABOUT CREATING SCALABLE WEB APPLICATIONS AND
                    ELEGANT CODE SOLUTIONS, BRINGING IDEAS TO LIFE THROUGH
                    FULL-STACK DEVELOPMENT.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.a
        href="#about"
        className="absolute bottom-32 sm:bottom-46 left-1/2 transform -translate-x-1/2 size-28 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={42} />
        </motion.div>
      </motion.a>
    </section>
  );
}
