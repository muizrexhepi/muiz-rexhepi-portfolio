import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import { WorkProjectCard } from "@/components/work/work-project-card";
import { getHomepageProjects } from "@/lib/projects";

export function SelectedWorkSection() {
  const [flagship, ...projects] = getHomepageProjects();

  return (
    <Section id="selected-work" className="scroll-mt-5">
      <Container>
        <SectionIntro
          title="Selected work."
          action={
            <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">
              View all work <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
            </Link>
          }
        />
        <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12">
          {flagship && <WorkProjectCard project={flagship} large edgeToEdge heading="h3" />}
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
            {projects.map((project) => <WorkProjectCard key={project.slug} project={project} heading="h3" edgeToEdge />)}
          </div>
        </div>
      </Container>
    </Section>
  );
}
