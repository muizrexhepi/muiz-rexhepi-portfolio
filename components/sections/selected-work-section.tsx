import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { Heading } from "@/components/ui/typography";
import { getHomepageProjects } from "@/lib/projects";

export function SelectedWorkSection() {
  const [flagship, ...projects] = getHomepageProjects();

  return (
    <Section id="selected-work" className="scroll-mt-5">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading as="h2" variant="section">Selected work.</Heading>
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all work
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
          </Link>
        </div>
        <div className="mt-9 grid gap-6">
          {flagship && <WorkProjectCard project={flagship} large heading="h3" />}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => <WorkProjectCard key={project.slug} project={project} heading="h3" />)}
          </div>
        </div>
      </Container>
    </Section>
  );
}
