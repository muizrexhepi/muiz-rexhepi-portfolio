import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Heading, Text } from "@/components/ui/typography";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function WorkProjectCard({
  project, priority = false, large = false, heading = "h2", edgeToEdge = false, imageSizes,
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
    <Link href={`/work/${project.slug}`} className={cn("group/card block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary", `project-${project.visualTheme}`)}>
      <div className={cn("work-frame overflow-hidden rounded-xl border border-border transition-colors group-hover/card:border-primary/60", !edgeToEdge && "p-4 sm:p-6")}>
        <div className={cn("relative aspect-video w-full overflow-hidden", !edgeToEdge && "rounded-lg border border-border")}>
          {image ? (
            <Image
              src={image}
              alt={project.coverAlt ?? project.heroAlt ?? `${project.name} interface`}
              fill
              preload={priority}
              sizes={imageSizes ?? (large ? "(min-width: 1280px) 1216px, 95vw" : "(min-width: 1280px) 596px, (min-width: 768px) 46vw, 95vw")}
              className={cn("object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.015] motion-reduce:transform-none", project.coverImageClassName)}
            />
          ) : (
            <span aria-hidden="true" className="grid h-full place-items-center font-heading text-6xl text-primary">{project.initials}</span>
          )}
        </div>
      </div>
      <div className={cn("mt-5 grid gap-3", large && "border-b border-border pb-8 sm:mt-6 lg:grid-cols-2 lg:gap-12")}>
        <div>
          <p className="text-sm text-muted-foreground">{project.industry}</p>
          <Heading as={heading} variant={large ? "subsection" : "project"} className="mt-2 transition-colors group-hover/card:text-primary">{project.name}</Heading>
        </div>
        <div>
          <Text className="max-w-lg">{project.summary}</Text>
          <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground">
            View case study <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} className="text-primary" />
          </span>
        </div>
      </div>
    </Link>
  );
}
