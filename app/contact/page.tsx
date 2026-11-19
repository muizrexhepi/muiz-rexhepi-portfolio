import Image from "next/image";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/typography";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(
  "/contact",
  "Start a Project",
  "Tell Muiz Rexhepi about your business website, booking platform, mobile app, or custom software project.",
);

export default function ContactPage() {
  return (
    <Section spacing="sm">
      <Container className="grid gap-5 lg:grid-cols-[.86fr_1.14fr] lg:gap-7">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-foreground sm:p-9 lg:p-11">
          <Heading as="h1" variant="hero">Start a project.</Heading>
          <p className="mt-6 max-w-md text-base leading-7 sm:text-lg">
            Tell me what you’re building, who it’s for, and what you’d like it to do. I’ll reply with the next step.
          </p>
          <a href={`mailto:${site.email}`} className="mt-8 inline-flex items-center gap-2 break-all font-semibold text-primary underline underline-offset-4">
            <HugeiconsIcon icon={Mail01Icon} size={19} className="shrink-0" />
            {site.email}
          </a>
          <div className="hidden flex-1 items-center justify-center pt-6 lg:flex">
            <Image unoptimized src="/brand/illustrations/project-inquiry.webp" alt="" width={1100} height={1100} className="h-auto w-[90%] max-w-84" />
          </div>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
