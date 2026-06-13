import Image from "next/image";

interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  duration?: string;
  description: string;
  bullets: string[];
  skills: string[];
  icon: string;
  url?: string;
}

const experiences: Experience[] = [
  {
    company: "Independent Products & Client Work",
    role: "React Native & Full-Stack Developer",
    type: "Self-employed",
    period: "2025 — Present",
    description:
      "Building and launching production mobile apps, SaaS products and client systems end-to-end.",
    bullets: [
      "Shipped iOS apps with subscriptions, AI features, onboarding, analytics and App Store release workflows.",
      "Built web platforms, dashboards, booking flows and business tools for real users and clients.",
      "Handled product design, frontend, backend integrations, deployment, analytics and iteration.",
    ],
    skills: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Convex",
      "RevenueCat",
      "PostHog",
      "AI",
    ],
    icon: "/logly.png",
  },
  {
    company: "GoBusly",
    role: "Product Engineer / Co-founder",
    type: "Product",
    period: "2025 — Present",
    description:
      "Intercity bus booking platform for Balkan and European transport routes.",
    bullets: [
      "Worked on product architecture, route pages, booking flows, operator needs and customer-facing UI.",
      "Supported a live booking product with real operators, payments and production workflows.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "SEO"],
    icon: "/gobusly.webp",
    url: "https://gobusly.com",
  },
  {
    company: "Insyllium",
    role: "Full-Stack Developer",
    type: "Full-time",
    period: "2023 — 2025",
    duration: "1 yr 8 mos",
    description:
      "Built and maintained client projects across mobile apps, web platforms and business systems.",
    bullets: [
      "Worked with React Native, Next.js, TypeScript, Firebase, MongoDB and API integrations.",
      "Delivered production UI for mobile, tablet and web experiences.",
      "Collaborated on client-facing projects from implementation to deployment.",
    ],
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
    type: "Client work",
    period: "2021 — 2023",
    duration: "1 yr 10 mos",
    description:
      "Delivered custom websites and frontend work for local and European clients.",
    bullets: [
      "Built responsive marketing websites, multilingual pages and SEO-focused frontend implementations.",
      "Worked directly with clients on requirements, content, launch and maintenance.",
    ],
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "SEO", "i18n"],
    icon: "/placeholder.svg?height=40&width=40",
  },
];

export function ExperienceSection() {
  return (
    <section className="space-y-12">
      <div>
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg font-semibold tracking-tight md:text-xl">
            Experience
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Product engineering, mobile development and client work across
            shipped applications.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="flex gap-4"
            >
              <div className="shrink-0 pt-1">
                <Image
                  src={exp.icon || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl border border-border bg-muted object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold tracking-tight hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <h3 className="text-base font-semibold tracking-tight">
                        {exp.company}
                      </h3>
                    )}

                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      {exp.role} · {exp.type}
                    </p>
                  </div>

                  <p className="text-xs tabular-nums text-muted-foreground">
                    {exp.period}
                    {exp.duration && ` · ${exp.duration}`}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {exp.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mr-2 text-foreground">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-semibold tracking-tight md:text-xl">
          Education
        </h2>

        <article className="flex gap-4">
          <div className="shrink-0 pt-1">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="University of Tetovo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl border border-border bg-muted object-cover"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight">
              University of Tetovo
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              BSc in Computer Science
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Diploma thesis focused on building a multilingual online
              marketplace platform for the local market.
            </p>
          </div>
        </article>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold tracking-tight md:text-xl">
          Languages
        </h2>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="rounded-md bg-muted px-2 py-1">
            Albanian · Native
          </span>
          <span className="rounded-md bg-muted px-2 py-1">English · C1</span>
          <span className="rounded-md bg-muted px-2 py-1">Macedonian · B1</span>
          <span className="rounded-md bg-muted px-2 py-1">German · A2</span>
        </div>
      </div>
    </section>
  );
}
