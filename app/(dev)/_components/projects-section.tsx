import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

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
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl border border-border bg-muted object-cover"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-xs font-semibold text-foreground">
      {initials}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section>
      <div className="mb-6 md:mb-8">
        <h2 className="text-lg font-semibold tracking-tight md:text-xl">
          Selected work
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Production apps, client platforms and product experiments shipped
          across mobile and web.
        </p>
      </div>

      <div className="space-y-7 md:space-y-8">
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <Link href={`/work/${project.slug}`} className="block">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <ProjectMark
                    name={project.name}
                    icon={project.icon}
                    initials={project.initials}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold tracking-tight text-foreground">
                          {project.name}
                        </h3>

                        <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                        {project.role}
                      </p>
                    </div>

                    <p className="text-xs tabular-nums text-muted-foreground">
                      {project.period}
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
