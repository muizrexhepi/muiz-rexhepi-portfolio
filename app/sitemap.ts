import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/", "/work", "/services", "/about", "/process", "/contact", "/privacy", "/terms",
    ...projects.map(({ slug }) => `/work/${slug}`),
  ].map((path) => ({ url: `${site.url}${path}` }));
}
