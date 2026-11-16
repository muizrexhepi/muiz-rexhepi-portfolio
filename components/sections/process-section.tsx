import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";

const phases = [
  ["Define what matters", "We agree on the problem, the people using the product, and what needs to be ready for launch."],
  ["Design and build", "I share designs and working previews early so you can try the important flows and give feedback."],
  ["Launch and improve", "I test the critical journeys, prepare the handover, and agree with you on what comes next."],
];

export function ProcessSection() {
  return (
    <Section className="border-t border-border bg-[var(--yellow)] text-[var(--ink)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Heading as="h2" variant="section" className="text-[var(--ink)]">How we’ll work together.</Heading>
          <Link href="/process" className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
            See the process <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
          </Link>
        </div>
        <ol className="mt-9 grid gap-px overflow-hidden rounded-xl border border-[var(--ink)] bg-[var(--ink)] md:grid-cols-3">
          {phases.map(([title, description], index) => (
            <li key={title} className="bg-[var(--yellow)] p-5 sm:p-7">
              <span className="grid size-9 place-items-center rounded-full border border-[var(--ink)] text-sm font-semibold">{index + 1}</span>
              <Heading as="h3" variant="card" className="mt-5 text-[var(--ink)]">{title}</Heading>
              <p className="mt-3 max-w-sm text-sm leading-6">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
