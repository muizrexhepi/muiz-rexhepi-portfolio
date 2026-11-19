import Image from "next/image";
import Link from "next/link";

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
    color: "var(--yellow)",
    illustration: { src: "/brand/illustrations/digital-builder.webp", width: 1100, height: 1100 },
    entries: [web, mobile],
  },
  {
    color: "var(--yellow)",
    illustration: { src: "/brand/illustrations/booking-commerce.webp", width: 1100, height: 1100 },
    entries: [booking],
  },
  {
    color: "var(--yellow)",
    illustration: { src: "/brand/illustrations/connected-workflows.webp", width: 1100, height: 1100 },
    entries: [software, automation],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate grid min-h-[26rem] place-items-center overflow-hidden border-b border-border bg-background py-15 text-center text-foreground sm:py-20">
        <Container>
          <p className="mb-5 text-sm font-semibold">Software development services</p>
          <Heading as="h1" variant="hero" className="mx-auto max-w-[15ch] text-foreground">Software for the way you work.</Heading>
          <Text variant="lead" className="mx-auto mt-6 max-w-[49ch] text-foreground/90">
            From a customer’s first visit to the work your team does every day, I build around the part of your business you want to improve.
          </Text>
        </Container>
      </section>
      {serviceGroups.map(({ color, illustration, entries }, index) => (
        <section key={illustration.src} className="border-b border-border">
          <div className="mx-auto grid max-w-[100rem] md:grid-cols-2" style={{ "--service-color": color } as React.CSSProperties}>
            <div className="flex flex-col justify-center divide-y divide-border px-5 py-9 sm:px-10 md:py-13 lg:px-16 xl:px-22">
              {entries.map((service) => (
                <article key={service.id} id={service.id} className="scroll-mt-20 py-6 first:pt-0 last:pb-0">
                  <Heading as="h2" variant="subsection">{service.title}</Heading>
                  <Text className="mt-3 max-w-[46ch]">{service.description}</Text>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/90 sm:text-sm">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              {entries.length === 1 && (
                <Link href="/work/ido-tours" className="mt-6 w-fit border-t-0 pt-0 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                  See the Ido Tours case study ↗
                </Link>
              )}
            </div>
            <div className={cn(
              "grid min-h-60 place-items-center border-t border-border bg-card p-4 md:border-t-0 md:p-7",
              index % 2 === 1 && "md:row-start-1",
            )}>
              <Image unoptimized {...illustration} alt="" className="h-auto w-full max-w-[27rem]" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
