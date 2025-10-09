import { projects, Project } from "@/data/projects";
import { MetadataRoute } from "next";

const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = ["/", "/contact", "/projects"].map((path) => ({
    url: `https://muizrexhepi.com${path}`,
    lastModified: new Date().toISOString(),
  }));

  const projectUrls = projects.map((project: Project) => ({
    url: `https://muizrexhepi.com/project/${createSlug(project.name)}`,
    lastModified: new Date().toISOString(),
  }));

  const allUrls = [...staticUrls, ...projectUrls];
  const uniqueUrls = Array.from(
    new Map(allUrls.map((u) => [u.url, u])).values()
  );

  return uniqueUrls;
}
