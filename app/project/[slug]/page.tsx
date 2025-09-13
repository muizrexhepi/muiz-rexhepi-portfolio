"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Heart,
  Star,
  Quote,
  Zap,
  Target,
  Award,
} from "lucide-react";
import { useRef, use, useState, useEffect } from "react";

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
  const stickyRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: landingScrollProgress } = useScroll({
    target: landingRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const landingY = useTransform(landingScrollProgress, [0, 1], ["0%", "-50%"]);
  const springY = useSpring(landingY, { stiffness: 400, damping: 90 });

  if (!project) {
    notFound();
  }

  const sections = [
    { id: "overview", title: "Overview", icon: Star },
    { id: "challenge", title: "Challenge", icon: Target },
    { id: "solution", title: "Solution", icon: Zap },
    { id: "outcome", title: "Outcome", icon: Award },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight) {
        setActiveSection("overview");
      } else if (scrollPosition < windowHeight * 2) {
        setActiveSection("challenge");
      } else if (scrollPosition < windowHeight * 3) {
        setActiveSection("solution");
      } else {
        setActiveSection("outcome");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 min-h-screen bg-transparent text-white"
    >
      {/* Floating Header */}
      <motion.header
        className="fixed top-6 left-6 right-6 z-50 max-w-7xl mx-auto"
        style={{ opacity: headerOpacity }}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
          <Link
            href="/projects"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Projects</span>
          </Link>

          <div className="text-sm font-medium text-white/60">
            {project.name}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group"
            >
              <span className="text-sm font-medium">Visit</span>
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {project.image && (
          <motion.div className="absolute inset-0 scale-110" style={{ y }}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
          </motion.div>
        )}

        <motion.div
          className="relative z-20 text-center max-w-5xl mx-auto px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-6 text-sm text-white/60 mb-6">
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
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {project.description.split(".")[0]}.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Sticky Content with Scrollable Landing Page */}
      <section
        ref={landingRef}
        className="relative z-20 bg-black/95 backdrop-blur-xl min-h-[400vh]"
      >
        <div className="sticky top-0 h-screen flex">
          {/* Left Sticky Content */}
          <div
            ref={stickyRef}
            className="w-1/2 p-16 flex flex-col justify-center"
          >
            <div className="max-w-lg">
              {/* Navigation */}
              <div className="flex flex-col gap-4 mb-12">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-white/10 text-white"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                      onClick={() => {
                        const sectionIndex = sections.findIndex(
                          (s) => s.id === section.id
                        );
                        window.scrollTo({
                          top: window.innerHeight * (sectionIndex + 1),
                          behavior: "smooth",
                        });
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content */}
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {activeSection === "overview" && (
                  <div>
                    <h2 className="text-4xl font-light mb-6">
                      Project Overview
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((metric, index) => (
                          <div
                            key={index}
                            className="p-4 bg-white/5 rounded-xl border border-white/10"
                          >
                            <div className="text-2xl font-light text-white mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-white/60">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeSection === "challenge" && (
                  <div>
                    <h2 className="text-4xl font-light mb-6">The Challenge</h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {project.challenge ||
                        "Creating a seamless user experience that balances functionality with aesthetic appeal. The project required careful consideration of user workflows, performance optimization, and scalable architecture that could adapt to future requirements while maintaining design consistency."}
                    </p>
                  </div>
                )}

                {activeSection === "solution" && (
                  <div>
                    <h2 className="text-4xl font-light mb-6">Our Solution</h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">
                      {project.solution ||
                        "Our approach centered on user-centered design principles, beginning with comprehensive research and wireframing. We focused on creating intuitive navigation patterns and implementing a cohesive visual language that reflects the brand's core values while ensuring accessibility standards."}
                    </p>
                    {project.technologies && (
                      <div>
                        <h3 className="text-xl font-medium mb-4 text-white/90">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeSection === "outcome" && (
                  <div>
                    <h2 className="text-4xl font-light mb-6">
                      Results & Impact
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">
                      {project.outcome ||
                        "The final product exceeded performance benchmarks while delivering measurable improvements in user engagement and satisfaction. The project successfully balanced technical excellence with design sophistication, creating a foundation for sustained growth and user adoption."}
                    </p>
                    {project.testimonial && (
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <Quote className="w-8 h-8 text-white/40 mb-4" />
                        <p className="text-lg text-white/80 mb-4 italic">
                          "{project.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                          {project.testimonial.avatar && (
                            <Image
                              src={project.testimonial.avatar}
                              alt={project.testimonial.author}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          )}
                          <div>
                            <div className="font-medium text-white">
                              {project.testimonial.author}
                            </div>
                            <div className="text-sm text-white/60">
                              {project.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Right Scrollable Landing Page */}
          <div className="w-1/2 relative overflow-hidden">
            <motion.div style={{ y: springY }} className="absolute inset-0">
              {project.landingPageImage ? (
                <Image
                  src={project.landingPageImage}
                  alt={`${project.name} - Full Landing Page`}
                  fill
                  className="object-cover object-top"
                  quality={95}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <div className="text-6xl font-light mb-4">
                      {project.name}
                    </div>
                    <div className="text-xl">Landing Page Preview</div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Gallery Section */}
      {project.mobileImage && (
        <section className="relative z-20 py-32 bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Mobile Experience
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Optimized for mobile devices with intuitive touch interactions
                and responsive design principles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Mobile Image */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1 flex justify-center"
              >
                <div className="relative w-80 aspect-[9/19] rounded-[3rem] overflow-hidden bg-black p-2 shadow-2xl">
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

              {/* Mobile Features */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">
                    Responsive Design
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Carefully crafted mobile experience with touch-optimized
                    interactions, fluid animations, and adaptive layouts that
                    work seamlessly across all device sizes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">
                    Performance Optimized
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Lightning-fast loading times and smooth interactions ensure
                    users stay engaged, with optimized images and efficient code
                    splitting for the best mobile experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 text-white">
                    Native-like Feel
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Thoughtful micro-interactions and gestures create an
                    experience that feels natural and intuitive, bridging the
                    gap between web and native applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="relative z-20 py-32 bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Visual Showcase
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Exploring the design details, user interface elements, and key
                features that make this project unique.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.slice(0, 4).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative rounded-3xl overflow-hidden group ${
                    index === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.name} - View ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="relative z-20 py-32 bg-black/95 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge
              technology and thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}

              <Link
                href="/contact"
                className="group border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>Start a Project</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project Preview */}
      <section className="relative z-20 py-32 bg-black/95 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {(() => {
            const currentIndex = projects.findIndex(
              (p) => createSlug(p.name) === slug
            );
            const nextProject = projects[(currentIndex + 1) % projects.length];
            const nextSlug = createSlug(nextProject.name);

            return (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-16">
                  <p className="text-white/40 text-sm uppercase tracking-wider mb-4">
                    Next Project
                  </p>
                  <h2 className="text-3xl font-light text-white/80">
                    Continue Exploring
                  </h2>
                </div>

                <Link
                  href={`/project/${nextSlug}`}
                  className="group block relative aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500"
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
                    <div className="text-center">
                      <h3 className="text-4xl md:text-6xl font-light mb-4 group-hover:scale-105 transition-transform duration-500">
                        {nextProject.name}
                      </h3>
                      <p className="text-white/60 text-lg font-light">
                        {nextProject.role}
                      </p>
                      <div className="mt-4 text-sm text-white/50">
                        {nextProject.category}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </div>
                </Link>
              </motion.div>
            );
          })()}
        </div>
      </section>
    </div>
  );
}
