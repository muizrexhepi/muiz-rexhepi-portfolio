import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Heading, Text } from "@/components/ui/typography";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function WorkProjectCard({
  project,
  priority = false,
  large = false,
  heading = "h2",
  edgeToEdge = false,
  imageSizes,
}: {
  project: Project;
  priority?: boolean;
  large?: boolean;
  heading?: "h2" | "h3";
  edgeToEdge?: boolean;
  imageSizes?: string;
}) {
  const image = project.coverImage ?? project.heroImage;

  return (
    <Link href={`/work/${project.slug}`} className={cn(
      "group/card grid h-full overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[4px_5px_0_#713c62] motion-reduce:transform-none",
      `project-${project.visualTheme}`,
      large && "lg:grid-cols-[1.45fr_1fr]",
    )}>
      <div className={cn(
        "work-frame relative grid min-w-0 place-items-center",
        !edgeToEdge && "p-4 sm:p-6",
        !edgeToEdge && large && "lg:p-9",
      )}>
        <div className={cn(
          "relative w-full overflow-hidden",
          edgeToEdge ? "aspect-video" : "aspect-[16/10] rounded-lg border-2 border-[var(--ink)] bg-[var(--paper)] shadow-[4px_4px_0_var(--ink)]",
        )}>
          {image ? (
            <Image
              src={image}
              alt={project.coverAlt ?? project.heroAlt ?? `${project.name} interface`}
              fill
              preload={priority}
              sizes={imageSizes ?? (large ? "(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw" : "(min-width: 768px) 48vw, 100vw")}
              className={cn("object-cover object-top", project.coverImageClassName)}
            />
          ) : (
            <span aria-hidden="true" className="grid h-full place-items-center font-heading text-6xl font-extrabold text-[var(--ink)]">{project.initials}</span>
          )}
        </div>
      </div>
      <div className={cn("flex flex-col justify-center p-5 sm:p-7", large && "lg:p-10")}>
        <p className="text-xs font-semibold tracking-[.09em] text-primary uppercase">
          {project.flag ? `${project.flag} · ${project.industry}` : project.industry}
        </p>
        <Heading as={heading} variant={large ? "section" : "subsection"} className="mt-3">
          {project.name}
        </Heading>
        <Text className="mt-3 max-w-md">{project.summary}</Text>
        <span className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4 text-sm font-semibold">
          Read case study
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={19} className="text-primary transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 motion-reduce:transform-none" />
        </span>
      </div>
    </Link>
  );
}
