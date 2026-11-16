import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function FooterCta({
  title = "What are you building?",
  description = "Tell me what you want to launch or how you’d like your business to work better.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("overflow-hidden border-t border-[var(--ink)] bg-[var(--pink)] py-12 text-[var(--ink)] sm:py-16", className)}>
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <Heading as="h2" variant="section" className="text-[var(--ink)]">{title}</Heading>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">{description}</p>
          <Link href="/contact" className="mt-7 inline-flex h-12 items-center gap-3 rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-5 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--ink)]">
            Start a Project
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
          </Link>
        </div>
        <Image src="/brand/mr-light.svg" width={168} height={168} alt="" className="hidden shrink-0 rotate-[12deg] rounded-[2rem] drop-shadow-[8px_9px_0_var(--ink)] md:block" />
      </Container>
    </section>
  );
}
