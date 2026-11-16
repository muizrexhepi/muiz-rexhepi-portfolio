import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/layout/section";
import { WorkPageClient } from "@/components/work/work-page-client";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { getFeaturedProjects, getHomepageProjects, projectCategories } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/work",
  "Selected Work",
  "Explore Muiz Rexhepi’s projects in hospitality software, booking platforms, business websites, and mobile apps.",
);

export default function WorkPage() {
  const [flagship, ...featured] = getHomepageProjects();
  const moreProjects = getFeaturedProjects().filter((project) => !project.homepageFeatured);
  const categories = projectCategories.filter((category) =>
    moreProjects.some((project) => project.categories.includes(category)),
  );

  return (
    <>
      <Section spacing="sm" className="border-b border-border">
        <Container>
          <PageIntro
            title="Selected work."
            description="Software for running restaurants, booking journeys, and helping guests find their next stay."
          />

          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {flagship && (
              <div className="md:col-span-2">
                <WorkProjectCard project={flagship} large edgeToEdge priority />
              </div>
            )}
            {featured.map((project) => (
              <WorkProjectCard key={project.slug} project={project} edgeToEdge />
            ))}
          </div>
        </Container>
      </Section>

      {moreProjects.length > 0 && <WorkPageClient projects={moreProjects} categories={categories} />}
    </>
  );
}
