import type { ReactNode } from "react";

import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function SectionIntro({
  title,
  description,
  action,
  ink = false,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  ink?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-12">
      <div>
        <Heading as="h2" variant="section" className={cn("max-w-[19ch]", ink && "text-[var(--ink)]")}>
          {title}
        </Heading>
      </div>
      {(description || action) && (
        <div className="max-w-md md:justify-self-end">
          {description && <Text className={cn(ink && "text-[var(--ink)]/80")}>{description}</Text>}
          {action && <div className={cn(description && "mt-4")}>{action}</div>}
        </div>
      )}
    </div>
  );
}
