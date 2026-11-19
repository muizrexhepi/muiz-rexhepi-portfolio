import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProcessPhaseList } from "@/components/process/process-phase-list";
import { Heading, Text } from "@/components/ui/typography";

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-9 rounded-2xl bg-[var(--yellow)]/20 p-6 sm:gap-12 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:p-12">
          <div>
            <Heading as="h2" variant="section" className="max-w-[16ch]">How we’ll work together.</Heading>
            <Text className="mt-5 max-w-[39ch]">
              Clear scope, working previews, and a practical handover. You’ll know what’s being built and what comes next.
            </Text>
            <Link href="/process" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
              See the process <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} aria-hidden="true" />
            </Link>
          </div>
          <ProcessPhaseList />
        </div>
      </Container>
    </Section>
  );
}
