import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";

export function StudioOverviewSection() {
  return (
    <Section id="about">
      <Container className="grid items-center gap-8 md:grid-cols-[.38fr_.62fr] lg:gap-16">
        <div className="relative grid min-h-60 place-items-center overflow-hidden rounded-2xl border border-border bg-[var(--lilac)] p-8 sm:min-h-75">
          <div aria-hidden="true" className="absolute -inset-x-3 bottom-13 h-px -rotate-12 bg-[var(--ink)]/30" />
          <div aria-hidden="true" className="absolute -inset-x-3 bottom-8 h-px -rotate-12 bg-[var(--ink)]/30" />
          <Image src="/brand/mr-dark.svg" alt="" width={172} height={172} className="relative w-36 -rotate-12 drop-shadow-[8px_9px_0_#7864bf] sm:w-43" />
        </div>
        <div>
          <Heading as="h2" variant="section">Hi, I’m Muiz.</Heading>
          <Text variant="lead" className="mt-5 max-w-2xl">
            I’m an independent full-stack developer in Tetovo, North Macedonia. I’ve spent 4+ years building and shipping software for businesses, from a restaurant’s first digital order to platforms that handle bookings, payments, and daily operations.
          </Text>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            More about me <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
