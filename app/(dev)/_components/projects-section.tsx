import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
  icon: string;
}

const projects: Project[] = [
  {
    name: "Nuroo AI",
    role: "Mobile App Developer",
    period: "Aug 2025 - Present",
    description:
      "Mobile app that helps users organize their thoughts into manageable tasks using AI.",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "OpenAI"],
    link: "https://apps.apple.com/mk/app/nuroo-ai/id6748567237",
    icon: "/nuroo.webp",
  },
  {
    name: "GoBusly",
    role: "Lead Frontend Developer",
    period: "Jan 2025 - Jul 2025",
    description:
      "Web app for booking bus tickets across Europe with real-time availability and payments.",
    technologies: ["Next.js", "TypeScript", "SSR", "SEO"],
    link: "https://gobusly.com",
    icon: "/gobusly.webp",
  },
  {
    name: "Hakbus",
    role: "Full-Stack Developer",
    period: "Jul 2024 - Dec 2024",
    description:
      "Multi-platform ticket booking solution with mobile apps, web app, and admin dashboard.",
    technologies: ["React Native", "Next.js", "Expo", "Analytics"],
    link: "https://hakbus.org",
    icon: "/hakbus.webp",
  },
  {
    name: "Menyro",
    role: "Frontend Developer",
    period: "Apr 2024 - Jul 2024",
    description:
      "Web platform to digitalize restaurant menus with real-time updates and translations in 35+ languages.",
    technologies: ["Next.js", "React", "DeepL API", "Tailwind CSS"],
    link: "https://menyro.com",
    icon: "/menyro.png",
  },
  {
    name: "Insylink",
    role: "Frontend Developer",
    period: "Dec 2023 - Mar 2024",
    description:
      "Restaurant POS app for tablets and mobile with offline-first functionality.",
    technologies: ["React Native", "Offline-first", "Zustand"],
    link: "https://insylink.vercel.app",
    icon: "/insylink.svg",
  },
  {
    name: "AskNoel",
    role: "Frontend Developer",
    period: "Nov 2023 - Dec 2023",
    description:
      "Crypto news platform with real-time price tracking and AI chatbot.",
    technologies: ["Next.js", "TypeScript", "AI", "Real-time"],
    link: "https://asknoel.ai",
    icon: "/asknoel.webp",
  },
  {
    name: "TvojPazar",
    role: "Full-Stack Developer",
    period: "Mar 2023 - Jun 2023",
    description:
      "Marketplace platform with advanced search, filtering, and responsive UI.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    link: "https://tvojpazar.mk",
    icon: "/tvojpazar.svg",
  },
  {
    name: "AMGMBH",
    role: "Frontend Developer",
    period: "Jul 2022 - Nov 2022",
    description:
      "Marketing website with CMS integration for real-time content updates.",
    technologies: ["Next.js", "Tailwind CSS", "CMS", "SEO"],
    link: "https://amgebaeudereinigung.hamburg",
    icon: "/am.svg",
  },
  {
    name: "Lans-Gr",
    role: "Frontend Developer",
    period: "Jul 2022 - Nov 2022",
    description:
      "Multi-language website for one of the largest shutter companies in the Balkans.",
    technologies: ["Next.js", "Tailwind CSS", "i18n", "SEO"],
    link: "https://lans-gr.mk",
    icon: "/lansgr.png",
  },
];

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold mb-6 md:mb-8">
        Projects
      </h2>
      <div className="space-y-10 md:space-y-8">
        {projects.map((project) => (
          <article key={project.name} className="flex gap-3 md:gap-4">
            <div className="shrink-0">
              <Image
                src={project.icon || "/placeholder.svg"}
                alt={`${project.name} icon`}
                width={36}
                height={36}
                className="rounded-lg md:w-10 md:h-10"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-1">
                <h3 className="font-semibold text-sm md:text-base">
                  {project.name}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {project.role}
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-1.5 md:px-2 py-0.5 md:py-1 bg-muted rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
