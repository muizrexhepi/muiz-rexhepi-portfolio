import Image from "next/image";
import Link from "next/link";
import { ArrowDown01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate grid min-h-[34rem] place-items-center overflow-hidden border-b border-border bg-[#100e11] py-20 sm:py-24 lg:min-h-[38rem]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/brand/bracket-sticker.svg"
          alt=""
          width={234}
          height={181}
          className="hero-artwork absolute -top-4 -left-5 w-20 -rotate-12 md:top-14 lg:left-[5%] lg:w-[clamp(7rem,14vw,14rem)]"
        />
        <Image
          src="/brand/cursor-sticker.svg"
          alt=""
          width={220}
          height={220}
          className="absolute -right-4 -bottom-5 w-24 rotate-[15deg] md:bottom-7 lg:right-[4%] lg:w-[clamp(8rem,16vw,15rem)]"
        />
        <Image
          src="/brand/mr-light.svg"
          alt=""
          width={64}
          height={64}
          className="absolute top-11 right-[12%] hidden w-18 rotate-[14deg] drop-shadow-[5px_6px_0_#713c62] lg:block xl:w-22"
        />
        <span className="absolute bottom-[13%] left-[11%] hidden text-4xl text-primary lg:block">✦</span>
      </div>

      <Container className="text-center">
        <p className="mb-5 text-sm font-medium text-muted-foreground sm:mb-6">Independent software developer</p>
        <Heading as="h1" variant="hero" className="type-display-home mx-auto max-w-[16ch]">
          Good software. <span className="block text-primary">Real businesses.</span>
        </Heading>
        <Text variant="lead" className="mx-auto mt-6 max-w-[51ch] text-foreground/85 sm:mt-7">
          I’m Muiz Rexhepi. I build websites, booking platforms, and custom software that help businesses serve customers and run day to day.
        </Text>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-9">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 px-5 sm:h-13 sm:px-6")}>
            Start a Project <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
          </Link>
          <Link href="#selected-work" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-5 sm:h-13 sm:px-6")}>
            Explore My Work <HugeiconsIcon icon={ArrowDown01Icon} size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
