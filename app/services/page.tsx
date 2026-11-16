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
    illustration: { src: "/brand/building-blocks.svg", width: 550, height: 500 },
    entries: [web, mobile],
  },
  {
    color: "var(--lilac)",
    illustration: { src: "/brand/bookings.svg", width: 530, height: 420 },
    entries: [booking],
  },
  {
    color: "var(--mint)",
    illustration: { src: "/brand/automation.svg", width: 530, height: 420 },
    entries: [software, automation],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate grid min-h-[26rem] place-items-center overflow-hidden border-b border-[var(--ink)] bg-[var(--yellow)] py-15 text-center text-[var(--ink)] sm:py-20">
        <Image src="/brand/bracket-sticker.svg" alt="" width={234} height={181} className="pointer-events-none absolute -top-6 -left-8 -z-10 w-24 -rotate-12 sm:top-8 lg:left-[8%] lg:w-40" />
        <Image src="/brand/cursor-sticker.svg" alt="" width={220} height={220} className="pointer-events-none absolute -right-9 -bottom-8 -z-10 w-28 rotate-12 sm:bottom-4 lg:right-[7%] lg:w-44" />
        <Container>
          <p className="mb-5 text-sm font-semibold">Software development services</p>
          <Heading as="h1" variant="hero" className="mx-auto max-w-[15ch] text-[var(--ink)]">Software for the way you work.</Heading>
          <Text variant="lead" className="mx-auto mt-6 max-w-[49ch] text-[var(--ink)]">
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
                  <Heading as="h2" variant="subsection" className="text-[var(--service-color)]">{service.title}</Heading>
                  <Text className="mt-3 max-w-[46ch]">{service.description}</Text>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/90 sm:text-sm">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              {entries.length === 1 && (
                <Link href="/work/ido-tours" className="mt-6 w-fit border-t-0 pt-0 text-sm font-semibold text-[var(--service-color)] underline-offset-4 hover:underline">
                  See the Ido Tours case study ↗
                </Link>
              )}
            </div>
            <div className={cn(
              "grid min-h-60 place-items-center border-t border-[var(--ink)] bg-[var(--service-color)] p-4 md:border-t-0 md:p-7",
              index % 2 === 1 && "md:row-start-1",
            )}>
              <Image {...illustration} alt="" className="h-auto w-full max-w-[27rem]" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
