"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/layout/section";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { Heading, Text } from "@/components/ui/typography";
import type { Project, ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function WorkPageClient({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeCategory),
    );
  }, [activeCategory, projects]);

  const filters: Filter[] = ["All", ...categories];

  return (
    <Section spacing="sm" className="pt-10 sm:pt-14 lg:pt-16">
      <Container>
        <PageIntro
          title="Built for real businesses."
          description="Explore the software I’ve built for restaurant service, passenger booking, hospitality, and more."
        />

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div key={project.slug} className={cn(index === 0 && activeCategory === "All" && "md:col-span-2")}>
              <WorkProjectCard
                project={project}
                priority={index === 0}
                large={index === 0 && activeCategory === "All"}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-border bg-card p-10 text-center">
            <Heading as="h2" variant="subsection">
              No projects in this category yet.
            </Heading>
            <Text variant="body" className="mt-3">
              Choose another category to see more work.
            </Text>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
