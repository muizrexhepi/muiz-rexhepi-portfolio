import type React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `https://muizrexhepi.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Muiz Rexhepi`,
      description: project.summary,
      url: `https://muizrexhepi.com/work/${project.slug}`,
      siteName: "Muiz Rexhepi",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Muiz Rexhepi`,
      description: project.summary,
    },
  };
}

function ProjectMark({
  name,
  icon,
  initials,
}: {
  name: string;
  icon?: string;
  initials: string;
}) {
  if (icon) {
    return (
      <Image
        src={icon}
        alt={`${name} icon`}
        width={48}
        height={48}
        className="h-12 w-12 rounded-2xl border border-border bg-muted object-cover"
      />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-muted text-sm font-semibold text-foreground">
      {initials}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="mb-4 text-base font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function WorkProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-4 md:py-16">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to projects
          </Link>
        </div>

        <article>
          <header className="mb-12">
            <div className="mb-5">
              <ProjectMark
                name={project.name}
                icon={project.icon}
                initials={project.initials}
              />
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {project.status}
              </span>
              <span className="text-xs text-muted-foreground">
                {project.period}
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {project.name}
            </h1>

            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {project.role}
            </p>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {project.description}
            </p>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
              >
                {project.liveLabel ?? "Open live project"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </header>

          <div className="space-y-10">
            <Section title="Overview">
              <p className="text-sm leading-7 text-muted-foreground">
                {project.summary}
              </p>
            </Section>

            <Section title="Proof points">
              <div className="grid gap-2 sm:grid-cols-3">
                {project.proof.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-muted/40 px-3 py-3"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Scope">
              <div className="flex flex-wrap gap-1.5">
                {project.scope.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="What I built">
              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    <span className="mr-2 text-foreground">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Why it matters">
              <ul className="space-y-2">
                {project.outcome.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    <span className="mr-2 text-foreground">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </article>

        <footer className="mt-16 border-t border-border pt-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Projects
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Live project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </footer>
      </div>
    </main>
  );
}
