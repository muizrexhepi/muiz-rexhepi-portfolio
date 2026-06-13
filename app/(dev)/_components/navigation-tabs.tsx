"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "/", label: "Projects" },
  { id: "/experience", label: "Experience" },
  { id: "/tools", label: "Tools" },
  { id: "/blog", label: "Blog" },
];

export function NavigationTabs() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 flex w-fit items-center gap-0.5 rounded-lg bg-muted/50 p-1 md:mb-12 md:gap-1">
      {tabs.map((tab) => {
        const isActive =
          tab.id === "/"
            ? pathname === "/" || pathname.startsWith("/work")
            : pathname === tab.id || pathname.startsWith(tab.id);

        return (
          <Link
            key={tab.id}
            href={tab.id}
            className={cn(
              "relative rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors md:px-4 md:py-2 md:text-sm",
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
