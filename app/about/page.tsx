import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading, Text } from "@/components/ui/typography";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(
  "/about",
  "About",
  "Meet Muiz Rexhepi, an independent full-stack developer in Tetovo, North Macedonia, working with local and international businesses.",
);

export default function AboutPage() {
  return (
    <>
      <Section spacing="sm">
        <Container className="grid items-center gap-10 md:grid-cols-[.58fr_.42fr] lg:gap-16">
          <div>
            <Heading as="h1" variant="hero">Hi, I’m Muiz.</Heading>
            <Text variant="lead" className="mt-6 max-w-2xl">
              I’m an independent full-stack software developer in Tetovo, North Macedonia. I work directly with local and international businesses to shape, design, and build their websites and software.
            </Text>
            <Text variant="lead" className="mt-4 max-w-2xl">
              In 4+ years of development, I’ve built production software for daily restaurant operations, bus ticket bookings, hospitality reservations, and mobile products.
            </Text>
            <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-primary">
              <a href={site.profiles.linkedin} className="hover:underline">LinkedIn ↗</a>
              <a href={site.profiles.github} className="hover:underline">GitHub ↗</a>
            </div>
          </div>
          <div className="grid min-h-70 place-items-center rounded-2xl border border-border bg-card p-9 sm:min-h-96">
            <Image unoptimized src="/brand/illustrations/digital-builder.webp" alt="" loading="eager" width={1100} height={1100} className="h-auto w-full max-w-84" />
          </div>
        </Container>
      </Section>
      <Section className="border-t border-border">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-14">
          <Heading as="h2" variant="section" className="max-w-lg">You’ll work directly with me.</Heading>
          <div>
            <Text variant="lead">
              I start by learning how your business runs and where software would make the biggest difference. I’ll share what I’m building early, explain the decisions that affect your team, and work with you through testing and launch.
            </Text>
            <Link href="/work" className="mt-6 inline-flex font-semibold text-primary hover:underline">Explore my work ↗</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
