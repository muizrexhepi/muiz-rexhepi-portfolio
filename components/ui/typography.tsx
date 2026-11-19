import * as React from "react";

import { cn } from "@/lib/utils";

const headingStyles = {
  hero: "type-display",
  section: "type-section",
  subsection: "type-subsection",
  card: "type-card",
  project: "type-project",
  small: "type-small",
};

const textStyles = {
  lead: "type-lead",
  body: "type-body",
  "body-sm": "type-body-small",
  caption: "type-caption",
  muted: "type-body-small",
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: keyof typeof headingStyles;
};

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: "p" | "span" | "div";
  variant?: keyof typeof textStyles;
};

function Heading({
  as: Comp = "h2",
  variant = "section",
  className,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn("font-heading text-foreground", headingStyles[variant], className)}
      {...props}
    />
  );
}

function Text({
  as: Comp = "p",
  variant = "body",
  className,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn("text-muted-foreground", textStyles[variant], className)}
      {...props}
    />
  );
}

export { Heading, Text };
