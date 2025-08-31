"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-sm sm:text-base text-neutral-600 font-semibold mb-8">
        Projects
      </h1>
      <div className="space-y-12">
        <p className="text-sm sm:tracking-wide leading-5 sm:leading-6 sm:text-base text-neutral-500">
          Over the past years, I&apos;ve been fortunate to work on various
          projects, ranging from web applications to mobile solutions.
        </p>
        {projects.map((project) => (
          <section key={project.name} className="space-y-6">
            <Link
              href={project.url!}
              target="_blank"
              className="group inline-flex items-center gap-1.5 text-sm decoration-neutral-400 hover:decoration-neutral-800"
            >
              <h2 className="text-base sm:text-lg font-semibold text-neutral-700 group-hover:text-neutral-900">
                {project.name}
              </h2>
              <span className="text-neutral-400 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                →
              </span>
            </Link>
            <p className="text-sm sm:text-base text-neutral-500">
              {project.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
