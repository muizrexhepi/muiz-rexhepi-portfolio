import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/layout/section";
import { WorkPageClient } from "@/components/work/work-page-client";
import { getWorkProjects, projectCategories } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/work",
  "Work",
  "Explore websites, booking platforms, restaurant software, mobile apps, and client projects built by Muiz Rexhepi.",
);

export default function WorkPage() {
  const projects = getWorkProjects();
  const categories = projectCategories.filter((category) =>
    projects.some((project) => project.categories.includes(category)),
  );

  return (
    <Section spacing="sm">
      <Container>
        <PageIntro
          title="Work."
          description="Websites, booking platforms, and software built for customers, teams, and the businesses behind them."
        />
        <WorkPageClient projects={projects} categories={categories} />
      </Container>
    </Section>
  );
}
