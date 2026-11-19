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
        <Section className="border-t border-border">
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
  const outcome = projectOutcomes[project.slug];
  return (
    <Section spacing="sm" className="border-b border-border">
      <Container>
        <div className="grid gap-5 border-b border-border pb-8 md:grid-cols-[.7fr_1.3fr] md:gap-12">
          <div>
            <p className="text-sm text-primary">The mission</p>
            <p className="mt-3 text-sm text-muted-foreground">{project.clientType}</p>
          </div>
          <Text variant="lead" className="max-w-3xl text-foreground">{outcome?.mission ?? project.headline}</Text>
        </div>
        <div className="mt-9 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Heading as="h2" variant="subsection">The problem</Heading>
            <Text className="mt-4">{project.challenge}</Text>
          </div>
          <div>
            <Heading as="h2" variant="subsection">The solution</Heading>
            <Text className="mt-4">{project.solution}</Text>
          </div>
        </div>
        <div className="mt-9 grid gap-6 border-t border-border pt-8 md:grid-cols-[.7fr_1.3fr] md:gap-12">
          <Heading as="h2" variant="subsection">Scope of work</Heading>
          <ul className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {project.deliverables.map((item) => <li key={item} className="border-b border-border/60 pb-3">{item}</li>)}
          </ul>
        </div>
        {outcome && (
          <div className="mt-10 border-l-2 border-primary pl-5 sm:pl-7">
            <Heading as="h2" variant="subsection">The result</Heading>
            <Text variant="lead" className="mt-4 max-w-4xl text-foreground/90">{outcome.result}</Text>
          </div>
        )}
        {outcome?.facts && (
          <dl className="mt-10 grid gap-7 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {outcome.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm font-medium">{fact.label}</dt>
                <dd className="mt-3 font-heading text-3xl font-medium tracking-tight text-primary">{fact.value}</dd>
                <dd className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        )}
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
                <div>
                  {section.eyebrow && <p className="mb-3 text-xs font-semibold tracking-[.1em] text-primary uppercase">{section.eyebrow}</p>}
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
                <ol className="mt-7 grid gap-3 min-[360px]:grid-cols-2 lg:grid-cols-4">
                  {section.steps.map((step, stepIndex) => (
                    <li key={step.title} className="rounded-xl border border-border bg-card p-5">
                      <span className="font-heading text-sm font-semibold text-primary" aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</span>
                      <Heading as="h3" variant="small" className="mt-4">{step.title}</Heading>
                      <Text variant="body-sm" className="mt-2">{step.body}</Text>
                    </li>
                  ))}
                </ol>
              )}
              {image && (
                <figure className="mt-7">
                  <div className="work-frame rounded-xl border border-[var(--ink)] p-3 sm:p-7">
                    <Image
                      src={image}
                      alt={section.imageAlt ?? gallery?.alt ?? `${project.name} project detail`}
                      width={isMobile ? 430 : 1500}
                      height={isMobile ? 932 : 900}
                      sizes={isMobile ? "(min-width: 640px) 320px, 78vw" : "(min-width: 1280px) 1150px, 90vw"}
                      className={cn("mx-auto h-auto w-full rounded-lg border-2 border-[var(--ink)] shadow-[4px_5px_0_var(--ink)]", isMobile && "max-w-[320px]")}
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
                  className="work-frame mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-xl border border-[var(--ink)] p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid sm:grid-cols-3 sm:gap-7 sm:p-7"
                >
                  {section.screens.map((screen) => (
                    <figure key={screen.src} className="min-w-0 basis-[85%] shrink-0 snap-center sm:basis-auto">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={430}
                        height={932}
                        sizes="(min-width: 1280px) 320px, (min-width: 640px) 28vw, 75vw"
                        className="mx-auto h-auto w-full max-w-[320px] rounded-xl border-2 border-[var(--ink)] shadow-[4px_5px_0_var(--ink)]"
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
