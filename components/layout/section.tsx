import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "xs" | "default" | "sm" | "lg";
};

function Section({ className, spacing = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "bg-background",
        {
          xs: "py-8 sm:py-10",
          sm: "py-14 sm:py-18",
          default: "py-16 sm:py-20 lg:py-24",
          lg: "py-20 sm:py-24 lg:py-28",
        }[spacing],
        className,
      )}
      {...props}
    />
  );
}

export { Section };
