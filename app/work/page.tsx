import { WorkPageClient } from "@/components/work/work-page-client";
import { getFeaturedProjects, projectCategories } from "@/lib/projects";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/work",
  "Selected Work",
  "Explore Muiz Rexhepi’s projects in hospitality software, booking platforms, business websites, and mobile apps.",
);

export default function WorkPage() {
  const projects = getFeaturedProjects();

  return <WorkPageClient projects={projects} categories={projectCategories} />;
}
