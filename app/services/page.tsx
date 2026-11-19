import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Heading, Text } from "@/components/ui/typography";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata(
  "/services",
  "Software Development Services",
  "Web development, custom software, booking and e-commerce systems, mobile apps, and business automation from Muiz Rexhepi.",
  { url: "/brand/share-services.png", alt: "Muiz Rexhepi software development services", width: 1200, height: 630 },
);

const [web, software, booking, mobile, automation] = services;

const serviceGroups = [
  {
    illustration: { src: "/brand/illustrations/digital-builder-v2.webp", width: 1200, height: 800 },
    entries: [web, mobile],
  },
  {
    illustration: { src: "/brand/illustrations/booking-commerce-v2.webp", width: 1200, height: 800 },
    entries: [booking],
  },
  {
    illustration: { src: "/brand/illustrations/connected-workflows-v2.webp", width: 1200, height: 800 },
    entries: [software, automation],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate grid min-h-[26rem] place-items-center overflow-hidden bg-background py-15 text-center text-foreground sm:py-20">
        <Container>
          <p className="mb-5 text-sm font-semibold">Software development services</p>
          <Heading as="h1" variant="hero" className="mx-auto max-w-[15ch] text-foreground">Software for the way you work.</Heading>
          <Text variant="lead" className="mx-auto mt-6 max-w-[49ch] text-foreground/90">
            From a customer’s first visit to the work your team does every day, I build around the part of your business you want to improve.
          </Text>
        </Container>
      </section>
      {serviceGroups.map(({ illustration, entries }, index) => (
        <section key={illustration.src} className="py-8 sm:py-12">
          <Container className="grid items-center gap-6 md:grid-cols-2 md:gap-14 lg:gap-20">
            <div className="flex flex-col justify-center gap-8">
              {entries.map((service) => (
                <article key={service.id} id={service.id} className="scroll-mt-24">
                  <Heading as="h2" variant="subsection">{service.title}</Heading>
                  <Text className="mt-3 max-w-[46ch]">{service.description}</Text>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="rounded-md bg-secondary/65 px-2.5 py-1.5 text-xs text-muted-foreground sm:text-sm">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              {entries.length === 1 && (
                <Link href="/work/doros-premium" className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                  See the Doros Premium case study
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} aria-hidden="true" />
                </Link>
              )}
            </div>
            <div className={cn(
              "grid place-items-center py-4 md:py-8",
              index % 2 === 1 && "md:row-start-1",
            )}>
              <Image unoptimized {...illustration} alt="" className="h-auto w-full max-w-[30rem]" />
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
