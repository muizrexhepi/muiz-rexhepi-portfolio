interface ToolGroup {
  title: string;
  description: string;
  tools: string[];
}

const toolGroups: ToolGroup[] = [
  {
    title: "Mobile",
    description:
      "Production mobile apps, subscriptions, App Store releases and native integrations.",
    tools: [
      "React Native",
      "Expo",
      "Expo Router",
      "EAS",
      "RevenueCat",
      "Apple HealthKit",
      "Push Notifications",
    ],
  },
  {
    title: "Frontend",
    description:
      "Fast, responsive interfaces for SaaS products, dashboards, marketplaces and public websites.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    description:
      "Auth, databases, server functions, APIs and product data workflows.",
    tools: [
      "Convex",
      "Supabase",
      "Firebase",
      "Appwrite",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Product",
    description:
      "AI features, analytics, subscriptions and product launch infrastructure.",
    tools: [
      "OpenAI",
      "Deepgram",
      "DeepSeek",
      "PostHog",
      "Stripe",
      "Paddle",
      "Resend",
      "Cloudinary",
    ],
  },
  {
    title: "Workflow",
    description:
      "Tools I use to ship, debug and maintain production applications.",
    tools: ["Git", "GitHub", "Vercel", "Docker", "Figma", "App Store Connect"],
  },
];

export function ToolsSection() {
  return (
    <section>
      <div className="mb-6 md:mb-8">
        <h2 className="text-lg font-semibold tracking-tight md:text-xl">
          Stack
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Tools I use to design, build, launch and maintain production mobile
          and web applications.
        </p>
      </div>

      <div className="space-y-8 md:space-y-10">
        {toolGroups.map((group) => (
          <section key={group.title}>
            <h3 className="text-base font-semibold tracking-tight">
              {group.title}
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
