import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <Section id="services" className="border-y border-border bg-card">
      <Container>
        <Heading as="h2" variant="section">What I can build for you.</Heading>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="service-tile group flex min-h-48 flex-col justify-between gap-6 rounded-2xl border-2 border-[var(--ink)] p-5 text-[var(--ink)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[4px_5px_0_var(--paper)] motion-reduce:transform-none sm:p-6 lg:col-span-2 lg:nth-last-[-n+2]:col-span-3"
            >
              <div className="flex items-start justify-between gap-3">
                <Heading as="h3" variant="subsection" className="max-w-64 text-[var(--ink)]">{service.title}</Heading>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={22} className="shrink-0" />
              </div>
              <p className="max-w-lg text-sm leading-relaxed sm:text-base">{service.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
