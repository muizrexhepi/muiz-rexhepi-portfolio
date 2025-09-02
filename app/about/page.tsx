"use client";
import { motion, useInView } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const borderAnimationStyles = `
  .border-line {
    position: relative;
    overflow: hidden;
  }
  
  .border-line::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    transition: left 0.8s ease-out;
  }
  
  .border-line.animate::before {
    left: 0;
  }
`;

export default function AboutPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);
  const skillsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const brandsInView = useInView(brandsRef, { once: true, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0.3, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  const textUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const brands = [
    "Odoo",
    "Insyllium",
    "Insylink",
    "Fiskaly",
    "HakBus",
    "GoBusly",
    "Figma",
    "Stripe",
    "Zoho",
    "Adobe",
    "Microsoft",
    "Google",
    "Amazon",
  ];

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "UI/UX Design",
    "System Architecture",
    "Database Design",
    "API Development",
    "Cloud Computing",
    "DevOps",
    "Machine Learning",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <style>{borderAnimationStyles}</style>

      <section ref={heroRef} className="min-h-screen relative overflow-hidden">
        {/* Full Screen Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            variants={imageVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <Image
              src="/assets/images/profile.PNG"
              fill
              alt="Muiz Rexhepi"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* MUIZ Text - Desktop: Bottom Center, Mobile: Bottom Left */}
        <motion.h1
          className="absolute bottom-8 md:bottom-12 left-4 md:left-1/2 md:-translate-x-1/2 text-8xl md:text-9xl lg:text-[12rem] font-light tracking-tight text-white z-10"
          variants={textUpVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          MUIZ
        </motion.h1>

        {/* Description - Bottom Left */}
        <motion.div
          className="absolute bottom-8 left-8 max-w-md z-10 hidden md:block"
          variants={textUpVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg font-light text-white/90 leading-relaxed">
            The developer's role is like an architect who builds digital
            experiences that connect and inspire.
          </p>
        </motion.div>

        {/* Mobile Description */}
      </section>
      <motion.div
        className="z-10 md:hidden"
        variants={textUpVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        transition={{ delay: 0.8 }}
      >
        <p className="text-base font-light text-white/90 leading-relaxed">
          The developer's role is like an architect who builds digital
          experiences that connect and inspire.
        </p>
      </motion.div>

      {/* About Me Section */}
      <section ref={aboutRef} className="md:py-20">
        <div
          className={`border-line ${aboutInView ? "animate" : ""} mb-20`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="text-sm text-white/60 tracking-wider"
                variants={textUpVariants}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                01/
                <br />
                03
                <br />
                About me
              </motion.div>
            </div>

            <div className="lg:col-span-10">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                <motion.h2
                  className="text-4xl lg:text-6xl font-light tracking-tight leading-[1.1]"
                  variants={textUpVariants}
                >
                  Hello, my name's Muiz, I'm a Macedonia-born developer based in
                  Skopje. I'm currently working as a senior full-stack developer
                  creating scalable applications, websites, and digital
                  experiences.
                </motion.h2>

                <motion.p
                  className="text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-4xl"
                  variants={textUpVariants}
                >
                  When I'm not coding, I enjoy exploring new technologies,
                  contributing to open source projects, and mentoring aspiring
                  developers in my quest to build the future of web development.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section ref={brandsRef} className="md:py-20">
        <div
          className={`border-line ${brandsInView ? "animate" : ""} mb-20`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="text-sm text-white/60 tracking-wider"
                variants={textUpVariants}
                initial="hidden"
                animate={brandsInView ? "visible" : "hidden"}
              >
                02/
                <br />
                03
                <br />
                brands I've
                <br />
                worked with
              </motion.div>
            </div>

            <div className="lg:col-span-10">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={brandsInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {brands.map((brand, index) => (
                  <motion.div
                    key={index}
                    className="text-4xl lg:text-6xl font-light text-white hover:text-white/60 transition-colors cursor-pointer"
                    variants={textUpVariants}
                  >
                    {brand}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="md:py-20">
        <div
          className={`border-line ${skillsInView ? "animate" : ""} mb-20`}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="text-sm text-white/60 tracking-wider"
                variants={textUpVariants}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
              >
                03/
                <br />
                03
                <br />
                Skills
              </motion.div>
            </div>

            <div className="lg:col-span-10">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-2xl lg:text-2xl font-light text-white hover:text-white transition-colors cursor-pointer"
                    variants={textUpVariants}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}
