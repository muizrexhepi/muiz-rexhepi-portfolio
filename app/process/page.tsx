import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProcessPhaseList } from "@/components/process/process-phase-list";
import { Heading, Text } from "@/components/ui/typography";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/process",
  "Development Process",
  "See how Muiz Rexhepi scopes, designs, builds, and launches custom software and websites.",
);

export default function ProcessPage() {
  return (
    <>
      <Section spacing="sm">
        <Container className="grid items-center gap-7 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <Heading as="h1" variant="hero" className="max-w-[16ch]">Clear scope.<br />Visible progress.</Heading>
            <Text variant="lead" className="mt-6 max-w-[47ch]">
              You’ll work directly with me, see what’s taking shape, and try the important workflows before they go live.
            </Text>
          </div>
          <Image unoptimized src="/brand/illustrations/connected-workflows-v2.webp" alt="" width={1200} height={800} className="mx-auto h-auto w-full max-w-64 lg:max-w-md" />
        </Container>
      </Section>
      <Section className="pt-5 sm:pt-10">
        <Container>
          <ProcessPhaseList detailed />
        </Container>
      </Section>
    </>
  );
}
