import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="rounded-2xl border border-border bg-card p-7 sm:p-12">
          <Heading as="h1" variant="hero">Page not found.</Heading>
          <Text variant="lead" className="mt-5">The page you’re looking for may have moved.</Text>
          <Link href="/work" className={buttonVariants({ size: "lg", className: "mt-6" })}>Explore my work</Link>
        </div>
      </Container>
    </Section>
  );
}
