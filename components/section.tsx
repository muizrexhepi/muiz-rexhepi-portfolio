import type React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-6 md:px-8", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
