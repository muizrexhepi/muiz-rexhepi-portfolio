"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FooterSection } from "@/components/footer";

export default function App() {
  const componentId = React.useId();

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
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
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
    <>
      <div
        key={componentId}
        className="text-white min-h-screen px-5 sm:px-12 lg:px-18 relative z-10"
      >
        <style>{borderAnimationStyles}</style>

        {/* Hero Section */}
        <section className="h-[75vh] lg:h-[85vh] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="w-full h-full"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src="/assets/images/profile.jpeg"
                alt="Muiz Rexhepi"
                className="w-full h-full object-cover rounded-3xl object-top"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

          <motion.h1
            className="absolute bottom-8 md:bottom-12 left-4 md:left-1/2 md:-translate-x-1/2 text-8xl md:text-9xl lg:text-[12rem] font-light tracking-tight text-white z-10"
            variants={textUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6 }}
          >
            MUIZ
          </motion.h1>

          <motion.div
            className="absolute bottom-12 left-8 max-w-sm z-10 hidden md:block"
            variants={textUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg font-light text-white/90 leading-relaxed">
              The developer's role is like an architect who builds digital
              experiences that connect and inspire.
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-24 left-5 right-5 z-10 md:hidden"
            variants={textUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-base font-light text-white/90 leading-relaxed">
              The developer's role is like an architect who builds digital
              experiences that connect and inspire.
            </p>
          </motion.div>
        </section>

        {/* About Me Section */}
        <section className="py-16 md:py-20">
          <div className={`border-line animate mb-16 md:mb-20`}></div>
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  className="text-sm text-white/60 tracking-wider"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="space-y-8"
                >
                  <motion.h2
                    className="text-4xl lg:text-6xl font-light tracking-tight leading-[1.1]"
                    variants={textUpVariants}
                  >
                    Hello, my name's Muiz, I'm a Macedonia-born developer based
                    in Tetovo. I'm currently working as a senior full-stack
                    developer creating scalable applications, websites, and
                    digital experiences.
                  </motion.h2>
                  <motion.p
                    className="text-xl lg:text-2xl font-light text-white/80 leading-relaxed max-w-4xl"
                    variants={textUpVariants}
                  >
                    When I'm not coding, I enjoy exploring new technologies,
                    contributing to open source projects, and mentoring aspiring
                    developers in my quest to build the future of web
                    development.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 md:py-20">
          <div className={`border-line animate mb-16 md:mb-20`}></div>
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  className="text-sm text-white/60 tracking-wider"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
        <section className="py-16 md:py-20">
          <div className={`border-line animate mb-16 md:mb-20`}></div>
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-2">
                <motion.div
                  className="text-sm text-white/60 tracking-wider"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
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
      <FooterSection />
    </>
  );
}
