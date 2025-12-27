import Image from "next/image";

interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
  skills: string[];
  icon: string;
  url?: string;
}

const experiences: Experience[] = [
  {
    company: "GoBusly",
    role: "Co-founder & CEO",
    type: "Full-time",
    period: "Mar 2025 - Present",
    description:
      "European bus ticket booking platform. Leading product development, technical architecture, and business strategy.",
    skills: ["Next.js", "TypeScript", "React Native", "Node.js", "PostgreSQL"],
    icon: "/gobusly.webp",
    url: "https://gobusly.com",
  },
  {
    company: "Insyllium",
    role: "Full-stack Developer",
    type: "Full-time",
    period: "Jul 2023 - Feb 2025",
    duration: "1 yr 8 mos",
    description:
      "Built and maintained multiple client projects including mobile apps, web platforms, and enterprise solutions.",
    skills: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Firebase",
      "MongoDB",
    ],
    icon: "/placeholder.svg?height=40&width=40",
    url: "https://insyllium.com",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    type: "Self-employed",
    period: "Jun 2021 - Mar 2023",
    duration: "1 yr 10 mos",
    description:
      "Delivered custom web solutions for clients across Europe. Specialized in React, Next.js, and responsive design.",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "SEO"],
    icon: "/placeholder.svg?height=40&width=40",
  },
];

export function ExperienceSection() {
  return (
    <section className="space-y-10 md:space-y-12">
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-6 md:mb-8">Work</h2>
        <div className="space-y-10 md:space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className="flex gap-3 md:gap-4"
            >
              <div className="shrink-0">
                <Image
                  src={exp.icon || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={36}
                  height={36}
                  className="rounded-lg md:w-10 md:h-10"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mb-1">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm md:text-base hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <h3 className="font-semibold text-sm md:text-base">
                      {exp.company}
                    </h3>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs md:text-sm font-medium mb-1">
                  {exp.role}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  {exp.period}
                  {exp.duration && ` · ${exp.duration}`}
                </p>
                {exp.description && (
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                    {exp.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground underline decoration-dotted"
                    >
                      {skill}
                      {i < exp.skills.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-6 md:mb-8">
          Education
        </h2>
        <article className="flex gap-3 md:gap-4">
          <div className="shrink-0">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="University of Tetovo"
              width={36}
              height={36}
              className="rounded-lg md:w-10 md:h-10"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              University of Tetovo
            </h3>
            <p className="text-xs md:text-sm font-medium">
              BSc in Computer Science
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Expected May 2025
            </p>
          </div>
        </article>
      </div>

      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
          Languages
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-4 text-xs md:text-sm text-muted-foreground">
          <span>Albanian (Native)</span>
          <span>English (C1)</span>
          <span>Macedonian (B1)</span>
          <span>German (A2)</span>
        </div>
      </div>
    </section>
  );
}
