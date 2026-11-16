import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft02Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { FooterCta } from "@/components/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { getNextProject, getProject, projects, type Project } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const image = project.heroImage ?? project.coverImage;
  const share = project.socialImage
    ? { url: project.socialImage, alt: `${project.name} case study by Muiz Rexhepi`, width: 1200, height: 630 }
    : image ? { url: image, alt: project.heroAlt ?? project.coverAlt ?? project.name } : undefined;

  return pageMetadata(
    `/work/${project.slug}`,
    project.seoTitle ?? `${project.name} Case Study`,
    project.seoDescription ?? project.summary,
    share,
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <ProjectStory project={project} />
      <FooterCta title={project.inquiry?.[0]} description={project.inquiry?.[1]} />
      {nextProject && (
        <Section className="bg-card">
          <Container>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <Heading as="h2" variant="subsection">Next project</Heading>
              <Link href="/work" className="text-sm font-semibold text-primary hover:underline">View all work</Link>
            </div>
            <WorkProjectCard project={nextProject} heading="h3" large />
          </Container>
        </Section>
      )}
    </>
  );
}

function ProjectHero({ project }: { project: Project }) {
  const image = project.heroImage ?? project.coverImage;
  return (
    <Section spacing="sm" className={cn("border-b border-border", `project-${project.visualTheme}`)}>
      <Container>
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <HugeiconsIcon icon={ArrowLeft02Icon} size={17} />
          All work
        </Link>
        <div className="mt-7 grid gap-6 md:grid-cols-[.44fr_.56fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[.1em] text-primary uppercase">{project.flag ?? project.industry}</p>
            <Heading as="h1" variant="hero">{project.name}</Heading>
          </div>
          <div>
            <Heading as="h2" variant="subsection">{project.headline}</Heading>
            <Text className="mt-3 max-w-2xl">{project.subheadline}</Text>
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "mt-5" })}>
                {project.liveLabel ?? "Visit live project"}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
              </Link>
            )}
          </div>
        </div>
        {image && (
          <div className="work-frame mt-8 rounded-2xl border border-[var(--ink)] p-3 sm:p-7 lg:p-9">
            <div className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-lg border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[4px_5px_0_var(--ink)]">
              <Image
                src={image}
                alt={project.heroAlt ?? project.coverAlt ?? `${project.name} interface`}
                fill
                preload
                sizes="(min-width: 1280px) 1152px, 90vw"
                className={cn("object-cover object-top", project.coverImageClassName)}
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const facts = [
    ["My role", project.role],
    ["Scope", project.deliverables.join(" · ")],
    ["Technology", project.stack.join(" · ")],
  ].filter(([, value]) => value);

  return (
    <Section spacing="sm" className="border-b border-border bg-card">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border bg-background p-5">
              <p className="text-xs font-semibold tracking-[.1em] text-primary uppercase">{label}</p>
              <p className="mt-2 break-words text-sm leading-6">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Heading as="h2" variant="subsection">The challenge</Heading>
            <Text className="mt-3">{project.challenge}</Text>
          </div>
          <div>
            <Heading as="h2" variant="subsection">What I built</Heading>
            <Text className="mt-3">{project.solution}</Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProjectStory({ project }: { project: Project }) {
  if (!project.caseStudy.length) return null;

  return (
    <Section className={`project-${project.visualTheme}`}>
      <Container className="grid gap-14 sm:gap-20">
        {project.caseStudy.map((section, index) => {
          const gallery = project.galleryImages[index];
          const image = section.image ?? gallery?.src;
          const isMobile = (section.imageType ?? (section.image ? undefined : gallery?.type)) === "mobile";

          return (
            <article key={section.title} className="border-t border-border pt-7">
              <div className="grid gap-4 md:grid-cols-2 md:gap-12">
                <Heading as="h2" variant="subsection" className="max-w-xl">{section.title}</Heading>
                <Text className="max-w-2xl">{section.body}</Text>
              </div>
              {image && (
                <div className="work-frame mt-7 rounded-xl border border-[var(--ink)] p-4 sm:p-7">
                  <Image
                    src={image}
                    alt={section.imageAlt ?? gallery?.alt ?? `${project.name} project detail`}
                    width={isMobile ? 430 : 1500}
                    height={isMobile ? 932 : 900}
                    sizes={isMobile ? "(min-width: 640px) 320px, 78vw" : "(min-width: 1280px) 1150px, 90vw"}
                    className={cn("mx-auto h-auto w-full rounded-lg border-2 border-[var(--ink)] shadow-[4px_5px_0_var(--ink)]", isMobile && "max-w-[320px]")}
                  />
                </div>
              )}
            </article>
          );
        })}
      </Container>
    </Section>
  );
}
