import Link from "next/link";
import { ArrowDown01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { HeroArtwork } from "@/components/sections/hero-artwork";

export function HeroSection() {
  return (
    <section className="relative isolate grid min-h-[min(40rem,calc(100svh-4rem))] place-items-center bg-background py-20 sm:min-h-[38rem] sm:py-24 lg:min-h-[40rem]">
      <HeroArtwork />
      <Container className="relative z-10 text-center">
        <Heading as="h1" variant="hero" className="type-display-home mx-auto max-w-[19ch]">
          <span className="block">Websites &amp; software.</span>
          <span className="block">Built for business.</span>
        </Heading>
        <Text variant="lead" className="mx-auto mt-6 max-w-[34ch] text-foreground/90 sm:mt-7 sm:max-w-[52ch]">
          Custom websites, online booking systems, and business software that help you serve customers and simplify daily operations.
        </Text>
        <div className="mx-auto mt-8 flex max-w-sm flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row">
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "sm:px-6" })}>
            Start a Project <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
          </Link>
          <Link href="#selected-work" className={buttonVariants({ variant: "outline", size: "lg", className: "sm:px-6" })}>
            Explore My Work <HugeiconsIcon icon={ArrowDown01Icon} size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
