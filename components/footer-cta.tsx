import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Container } from "@/components/layout/container";
import { Heading } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
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
    <section
      className={cn(
        "overflow-hidden border-y border-border bg-background py-16 text-foreground sm:py-20",
        className,
      )}
    >
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <Heading as="h2" variant="section">
            {title}
          </Heading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ size: "lg", className: "mt-7" })}
          >
            Start a Project
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
          </Link>
        </div>
        <Image
          unoptimized
          src="/brand/illustrations/project-inquiry.webp"
          width={250}
          height={250}
          alt=""
          className="hidden size-52 shrink-0 md:block"
        />
      </Container>
    </section>
  );
}
