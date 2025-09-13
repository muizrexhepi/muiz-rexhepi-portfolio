"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Heart,
  Quote,
} from "lucide-react";
import { useRef, use, useEffect, useState } from "react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => createSlug(p.name) === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    notFound();
  }

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

  const textUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const nextProjectIndex =
    (projects.findIndex((p) => createSlug(p.name) === slug) + 1) %
    projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div ref={containerRef} className="text-white min-h-screen relative">
      <style>{borderAnimationStyles}</style>

      {/* Navigation Header */}
      {/* <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-12 py-6 transition-all duration-500 ${
          scrollY > 100 ? "bg-black/60 backdrop-blur-xl" : ""
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-light">Back to Projects</span>
          </Link>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm font-light">Visit Live Site</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          )}
        </div>
      </motion.header> */}

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        {project.image && (
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </motion.div>
        )}

        <motion.div
          className="relative z-20 h-full flex flex-col justify-end px-5 sm:px-12 pb-16 lg:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Project Meta */}
            <motion.div
              variants={textUpVariants}
              className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                {project.category}
              </div>
              {project.favorite && (
                <>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-2 text-amber-400">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Featured</span>
                  </div>
                </>
              )}
            </motion.div>

            {/* Project Title */}
            <motion.h1
              variants={textUpVariants}
              className="text-4xl sm:text-6xl lg:text-8xl font-light mb-6 tracking-tight leading-none"
            >
              {project.name}
            </motion.h1>

            {/* Project Description */}
            <motion.p
              variants={textUpVariants}
              className="text-lg sm:text-xl font-light text-white/80 max-w-3xl leading-relaxed mb-8"
            >
              {project.description.split(".")[0]}.
            </motion.p>

            {/* Technologies */}
            {project.technologies && (
              <motion.div
                variants={textUpVariants}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.slice(0, 6).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="px-5 sm:px-12 lg:px-18">
        {/* Project Overview */}
        <section className="py-16 lg:py-24">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={textUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-sm text-white/60 tracking-wider">
                01/
                <br />
                04
                <br />
                Overview
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={textUpVariants}
                className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight"
              >
                Project Overview
              </motion.h2>
              <motion.p
                variants={textUpVariants}
                className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-4xl mb-12"
              >
                {project.description}
              </motion.p>

              {/* Metrics */}
              {project.metrics && (
                <motion.div
                  variants={textUpVariants}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 lg:p-6 bg-white/5 rounded-2xl border border-white/5"
                    >
                      <div className="text-2xl lg:text-3xl font-light text-white mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-white/60">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 lg:py-24">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={textUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-sm text-white/60 tracking-wider">
                02/
                <br />
                04
                <br />
                Challenge
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={textUpVariants}
                className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight"
              >
                The Challenge
              </motion.h2>
              <motion.p
                variants={textUpVariants}
                className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-4xl"
              >
                {project.challenge ||
                  "Creating a seamless user experience that balances functionality with aesthetic appeal. The project required careful consideration of user workflows, performance optimization, and scalable architecture that could adapt to future requirements while maintaining design consistency."}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Visual Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="border-line animate mb-16 lg:mb-20"></div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {project.gallery.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  variants={textUpVariants}
                  className={`relative rounded-3xl overflow-hidden ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[21/9]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Mobile Experience */}
        {project.mobileImage && (
          <section className="py-16 lg:py-24">
            <div className="border-line animate mb-16 lg:mb-20"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                className="lg:col-span-6 order-2 lg:order-1"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.h2
                  variants={textUpVariants}
                  className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight"
                >
                  Mobile Experience
                </motion.h2>
                <motion.p
                  variants={textUpVariants}
                  className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8"
                >
                  Optimized for mobile devices with intuitive touch interactions
                  and responsive design principles that ensure a seamless
                  experience across all screen sizes.
                </motion.p>
                <motion.div variants={textUpVariants} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-light mb-2">Touch Optimized</h3>
                    <p className="text-white/60">
                      Designed with mobile-first interactions
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Performance</h3>
                    <p className="text-white/60">
                      Lightning fast loading on any device
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-6 order-1 lg:order-2 flex justify-center"
                variants={textUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="relative w-64 lg:w-80 aspect-[9/19] rounded-[3rem] overflow-hidden p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={project.mobileImage}
                      alt={`${project.name} - Mobile view`}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Solution & Outcome */}
        <section className="py-16 lg:py-24">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={textUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-sm text-white/60 tracking-wider">
                03/
                <br />
                04
                <br />
                Solution
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={textUpVariants}
                className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight"
              >
                Our Solution
              </motion.h2>
              <motion.p
                variants={textUpVariants}
                className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-4xl mb-12"
              >
                {project.solution ||
                  "Our approach centered on user-centered design principles, beginning with comprehensive research and wireframing. We focused on creating intuitive navigation patterns and implementing a cohesive visual language that reflects the brand's core values while ensuring accessibility standards."}
              </motion.p>

              {/* Technologies Used */}
              {project.technologies && (
                <motion.div variants={textUpVariants}>
                  <h3 className="text-xl font-light mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-16 lg:py-24">
            <div className="border-line animate mb-16 lg:mb-20"></div>
            <motion.div
              variants={textUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-8 lg:p-12 bg-white/5 rounded-3xl border border-white/10">
                <Quote className="w-12 h-12 text-white/40 mb-8 mx-auto" />
                <p className="text-xl lg:text-2xl text-white/90 mb-8 italic font-light leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  {project.testimonial.avatar && (
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  )}
                  <div className="text-left">
                    <div className="font-medium text-white text-lg">
                      {project.testimonial.author}
                    </div>
                    <div className="text-white/60">
                      {project.testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Results */}
        <section className="py-16 lg:py-24">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={textUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="text-sm text-white/60 tracking-wider">
                04/
                <br />
                04
                <br />
                Results
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={textUpVariants}
                className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight"
              >
                Results & Impact
              </motion.h2>
              <motion.p
                variants={textUpVariants}
                className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-4xl"
              >
                {project.outcome ||
                  "The final product exceeded performance benchmarks while delivering measurable improvements in user engagement and satisfaction. The project successfully balanced technical excellence with design sophistication, creating a foundation for sustained growth and user adoption."}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <motion.div
            variants={textUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light mb-8">
              Let's work together
            </h2>
            <p className="text-lg lg:text-xl text-white/70 mb-12 leading-relaxed">
              Ready to bring your vision to life with cutting-edge technology
              and thoughtful design?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}

              <Link
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Next Project */}
        <section className="pb-12">
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <motion.div
            variants={textUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-center mb-12">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-4">
                Next Project
              </p>
            </div>

            <Link
              href={`/project/${createSlug(nextProject.name)}`}
              className="group block relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {nextProject.image ? (
                <Image
                  src={nextProject.image}
                  alt={nextProject.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  quality={85}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl sm:text-4xl lg:text-6xl font-light mb-4 group-hover:scale-105 transition-transform duration-500">
                    {nextProject.name}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light">
                    {nextProject.role}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </div>
            </Link>
          </motion.div>
          <div className="border-line animate mb-16 lg:mb-20"></div>
          <div className="relative z-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-4">
              <motion.div
                className="flex items-center gap-4 text-center md:text-left"
                variants={textUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
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
                  className="hover:text-white/60 transition-colors"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.1 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="https://x.com/muiz_rexhepi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 transition-colors"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.2 }}
                >
                  Twitter
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muiz-rexhepi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 transition-colors"
                  variants={textUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.3 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
