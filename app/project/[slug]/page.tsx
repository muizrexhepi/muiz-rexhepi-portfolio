import { use } from "react";
import type { Metadata } from "next";
import ClientProjectPage from "./client-page";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

import { Project, projects } from "@/data/projects";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project: Project | undefined = projects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Muiz Rexhepi",
      description: "This project could not be found.",
    };
  }

  return {
    title: `${project.name} | Muiz Rexhepi`,
    description:
      project.description ||
      `Learn more about ${project.name}, a project by Muiz Rexhepi.`,
    openGraph: {
      title: project.name,
      description: project.description,
      url: project.url,
      images: project.image ? [project.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

// ✅ Page component
export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  return <ClientProjectPage slug={slug} />;
}
