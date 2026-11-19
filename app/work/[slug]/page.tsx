import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft02Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { FooterCta } from "@/components/footer-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { getNextProject, getProject, projects, type Project } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";
import { projectOutcomes } from "@/lib/project-outcomes";
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
        <Section>
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
    <Section spacing="sm" className={`project-${project.visualTheme}`}>
      <Container>
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <HugeiconsIcon icon={ArrowLeft02Icon} size={17} />
          All work
        </Link>
        <div className="mt-9 grid gap-7 md:grid-cols-[.44fr_.56fr] md:items-end md:gap-16">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[.08em] text-muted-foreground uppercase">{project.flag ?? project.industry}</p>
            <Heading as="h1" variant="hero" className={cn("[overflow-wrap:anywhere]", project.name.length > 18 && "type-display-long")}>{project.name}</Heading>
          </div>
          <div>
            <Heading as="h2" variant="subsection">{project.headline}</Heading>
            <Text className="mt-3 max-w-2xl">{project.subheadline}</Text>
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-5 transition-colors hover:decoration-foreground">
                {project.liveLabel ?? "Visit live project"}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
              </Link>
            )}
          </div>
        </div>
        {image && (
          <div className="mt-10 sm:mt-14">
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl bg-secondary/40 sm:rounded-2xl">
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
  const outcome = projectOutcomes[project.slug];
  return (
    <Section spacing="sm">
      <Container>
        <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-sm font-semibold">The mission</p>
            <p className="mt-3 text-sm text-muted-foreground">{project.clientType}</p>
          </div>
          <p className="max-w-3xl font-heading text-2xl leading-snug font-medium tracking-tight text-foreground sm:text-3xl">{outcome?.mission ?? project.headline}</p>
        </div>
        <div className="mt-12 grid gap-9 md:mt-16 md:grid-cols-2 md:gap-16">
          <div>
            <Heading as="h2" variant="card">The problem</Heading>
            <Text className="mt-4">{project.challenge}</Text>
          </div>
          <div>
            <Heading as="h2" variant="card">The solution</Heading>
            <Text className="mt-4">{project.solution}</Text>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <Heading as="h2" variant="card">Scope of work</Heading>
          <ul className="grid gap-x-7 gap-y-4 text-sm sm:grid-cols-2 sm:text-base">
            {project.deliverables.map((item) => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />{item}</li>)}
          </ul>
        </div>
        {outcome && (
          <div className="mt-14 rounded-2xl bg-[var(--yellow)]/20 p-6 sm:mt-18 sm:p-10 lg:p-12">
            <Heading as="h2" variant="subsection">The result</Heading>
            <Text variant="lead" className="mt-5 max-w-4xl text-foreground/90">{outcome.result}</Text>
            {outcome.facts && (
              <dl className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {outcome.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium tracking-wide text-muted-foreground">{fact.label}</dt>
                    <dd className="mt-2 font-heading text-2xl leading-tight font-semibold tracking-tight">{fact.value}</dd>
                    <dd className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{fact.detail}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}

function ProjectStory({ project }: { project: Project }) {
  if (!project.caseStudy.length) return null;

  return (
    <Section className={`project-${project.visualTheme}`}>
      <Container className="grid gap-16 sm:gap-24 lg:gap-28">
        {project.caseStudy.map((section, index) => {
          const gallery = project.galleryImages[index];
          const image = section.image ?? gallery?.src;
          const isMobile = (section.imageType ?? (section.image ? undefined : gallery?.type)) === "mobile";

          return (
            <article key={section.title}>
              <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr] md:gap-16">
                <div>
                  {section.eyebrow && <p className="mb-3 text-xs font-medium tracking-[.08em] text-muted-foreground uppercase">{section.eyebrow}</p>}
                  <Heading as="h2" variant="subsection" className="max-w-xl">{section.title}</Heading>
                </div>
                <div>
                  <Text className="max-w-2xl">{section.body}</Text>
                  {section.links && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                      {section.links.map(({ label, href }) => (
                        <Link key={href} href={href} {...(href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                          {label}<HugeiconsIcon icon={ArrowUpRight01Icon} size={16} aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {section.steps && (
                <ol className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
                  {section.steps.map((step, stepIndex) => (
                    <li key={step.title}>
                      <span className="flex size-8 items-center justify-center rounded-full bg-secondary font-heading text-xs font-semibold" aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</span>
                      <Heading as="h3" variant="small" className="mt-3">{step.title}</Heading>
                      <Text variant="body-sm" className="mt-2">{step.body}</Text>
                    </li>
                  ))}
                </ol>
              )}
              {image && (
                <figure className="mt-8 sm:mt-10">
                  <div className={cn(isMobile && "rounded-2xl bg-secondary/40 px-5 py-8 sm:py-12")}>
                    <Image
                      src={image}
                      alt={section.imageAlt ?? gallery?.alt ?? `${project.name} project detail`}
                      width={isMobile ? 430 : 1500}
                      height={isMobile ? 932 : 900}
                      sizes={isMobile ? "(min-width: 640px) 320px, 78vw" : "(min-width: 1280px) 1150px, 90vw"}
                      className={cn("mx-auto h-auto w-full rounded-xl", isMobile && "max-w-[300px] shadow-[0_12px_40px_-16px_rgba(36,33,30,.25)]")}
                    />
                  </div>
                  {section.imageCaption && <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">{section.imageCaption}</figcaption>}
                </figure>
              )}
              {section.screens && (
                <div
                  role="region"
                  aria-label="Customer ordering screenshots"
                  tabIndex={0}
                  className="mt-9 flex snap-x snap-mandatory gap-6 overflow-x-auto rounded-2xl bg-secondary/40 p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid sm:grid-cols-3 sm:gap-9 sm:p-10"
                >
                  {section.screens.map((screen) => (
                    <figure key={screen.src} className="min-w-0 basis-[85%] shrink-0 snap-center sm:basis-auto">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={430}
                        height={932}
                        sizes="(min-width: 1280px) 320px, (min-width: 640px) 28vw, 75vw"
                        className="mx-auto h-auto w-full max-w-[300px] rounded-xl shadow-[0_12px_40px_-16px_rgba(36,33,30,.25)]"
                      />
                      <figcaption className="mt-4 text-center text-sm font-semibold text-[var(--ink)]">{screen.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </Container>
    </Section>
  );
}
