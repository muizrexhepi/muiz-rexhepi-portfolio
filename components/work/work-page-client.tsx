"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";
import { WorkProjectCard } from "@/components/work/work-project-card";
import type { Project, ProjectCategory } from "@/lib/projects";

type Filter = "All" | ProjectCategory;

export function WorkPageClient({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <Section spacing="sm" className="bg-card">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Heading as="h2" variant="section">More projects.</Heading>
          <div className="grid w-full gap-1.5 sm:w-auto">
            <label htmlFor="project-category" className="text-sm font-medium text-muted-foreground">Filter by category</label>
            <select
              id="project-category"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.currentTarget.value as Filter)}
              className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-w-48"
            >
              <option value="All">All projects</option>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </div>
        </div>

        <p aria-live="polite" className="sr-only">
          {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
        <div className="mt-7 grid gap-5 sm:mt-9 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <WorkProjectCard
              key={project.slug}
              project={project}
              heading="h3"
              edgeToEdge
              imageSizes="(min-width: 1280px) 384px, (min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
