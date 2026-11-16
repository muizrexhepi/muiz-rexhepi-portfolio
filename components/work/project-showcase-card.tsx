import Image from "next/image";
import Link from "next/link";
import { ArrowRight02Icon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import type { Project } from "@/lib/projects";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function ProjectShowcaseCard({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="group/work overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
      <div
        className={cn(
          "grid gap-0 lg:grid-cols-2",
          isReversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          className="relative block min-h-[320px] overflow-hidden bg-muted sm:min-h-[420px] lg:min-h-[520px]"
        >
          <ProjectImage project={project} priority={priority} />

          <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
            {project.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>
        </Link>

        <div className="flex min-h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-start justify-between gap-5">
              <div>
                <Text
                  variant="caption"
                  className="font-semibold uppercase tracking-[0.16em]"
                >
                  {project.status}
                </Text>

                <Heading as="h2" variant="subsection" className="mt-3">
                  {project.name}
                </Heading>
              </div>

              <div className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary sm:flex">
                <span className="font-heading text-sm font-semibold">
                  {project.initials}
                </span>
              </div>
            </div>

            <Text variant="body" className="mt-5">
              {project.summary}
            </Text>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={`${project.slug}-${metric.label}`}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <div className="font-heading text-xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </div>
                  <Text variant="caption" className="mt-1">
                    {metric.label}
                  </Text>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
            >
              View case study
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={17}
                strokeWidth={1.8}
                className="ml-2"
              />
            </Link>

            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {project.liveLabel ?? "Open project"}
                <HugeiconsIcon
                  icon={LinkSquare02Icon}
                  size={17}
                  strokeWidth={1.8}
                  className="ml-2"
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectImage({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0",
        project.visualTheme === "asknoel" &&
          "bg-[radial-gradient(circle_at_75%_20%,rgba(124,58,237,0.26),transparent_44%),linear-gradient(135deg,#080f1d,#171c2b)]",
        project.visualTheme === "gobusly" &&
          "bg-[radial-gradient(circle_at_75%_20%,rgba(47,91,211,0.34),transparent_42%),linear-gradient(135deg,#061b36,#0d2b55)]",
        project.visualTheme === "hakbus" &&
          "bg-[radial-gradient(circle_at_78%_18%,rgba(47,91,211,0.34),transparent_44%),linear-gradient(135deg,#061237,#1742a8)]",
        project.visualTheme === "doros" &&
          "bg-[radial-gradient(circle_at_76%_18%,rgba(215,181,109,0.16),transparent_42%),linear-gradient(135deg,#050507,#17120c)]",
        project.visualTheme === "nextloop" &&
          "bg-[radial-gradient(circle_at_72%_22%,rgba(47,91,211,0.32),transparent_42%),linear-gradient(135deg,#07111f,#0d1b38)]",
        project.visualTheme === "logly" &&
          "bg-[radial-gradient(circle_at_74%_18%,rgba(47,91,211,0.16),transparent_44%),linear-gradient(135deg,#f6f8ff,#ffffff)]",
        project.visualTheme === "speaksure" &&
          "bg-[radial-gradient(circle_at_75%_20%,rgba(47,91,211,0.30),transparent_44%),linear-gradient(135deg,#06111f,#111827)]",
        project.visualTheme === "am" &&
          "bg-[radial-gradient(circle_at_75%_20%,rgba(47,91,211,0.18),transparent_44%),linear-gradient(135deg,#f6f8ff,#ffffff)]",
      )}
    >
      {project.coverImage ? (
        <div className="absolute inset-x-5 bottom-0 top-20 overflow-hidden rounded-t-[1.75rem] border border-white/15 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover/work:-translate-y-3 sm:inset-x-8">
          <Image
            src={project.coverImage}
            alt={project.coverAlt ?? `${project.name} project preview`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={cn(
              "object-cover object-top",
              project.coverImageClassName,
            )}
          />
        </div>
      ) : (
        <FallbackVisual project={project} />
      )}
    </div>
  );
}

function FallbackVisual({ project }: { project: Project }) {
  const isLight =
    project.visualTheme === "logly" || project.visualTheme === "am";

  return (
    <div
      className={cn(
        "absolute inset-x-5 bottom-0 top-20 rounded-t-[1.75rem] border p-5 shadow-[0_30px_100px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover/work:-translate-y-3 sm:inset-x-8",
        isLight
          ? "border-primary/10 bg-white"
          : "border-white/10 bg-white/10 backdrop-blur",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-yellow-400" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <div
          className={cn(
            "ml-3 h-2 flex-1 rounded-full",
            isLight ? "bg-slate-200" : "bg-white/10",
          )}
        />
      </div>

      <div className="mt-8 grid grid-cols-[1fr_0.9fr] gap-5">
        <div>
          <div
            className={cn(
              "h-7 w-56 max-w-full rounded-full",
              isLight ? "bg-primary/20" : "bg-white/90",
            )}
          />
          <div
            className={cn(
              "mt-4 h-3 w-40 rounded-full",
              isLight ? "bg-primary/10" : "bg-white/35",
            )}
          />
          <div
            className={cn(
              "mt-3 h-3 w-52 rounded-full",
              isLight ? "bg-primary/10" : "bg-white/25",
            )}
          />
          <div
            className={cn(
              "mt-10 h-11 w-32 rounded-full",
              isLight ? "bg-primary" : "bg-white/10",
            )}
          />
        </div>

        <div
          className={cn(
            "rounded-2xl p-4",
            isLight ? "bg-primary/10" : "bg-white/10",
          )}
        >
          <div
            className={cn(
              "h-4 w-24 rounded-full",
              isLight ? "bg-primary/20" : "bg-white/25",
            )}
          />
          <div className="mt-5 grid grid-cols-3 items-end gap-2">
            <div
              className={cn(
                "h-20 rounded-xl",
                isLight ? "bg-primary/15" : "bg-white/15",
              )}
            />
            <div
              className={cn(
                "h-32 rounded-xl",
                isLight ? "bg-primary/25" : "bg-white/25",
              )}
            />
            <div
              className={cn(
                "h-16 rounded-xl",
                isLight ? "bg-primary/10" : "bg-white/10",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
