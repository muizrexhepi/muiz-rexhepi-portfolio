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
    <nav className="flex items-center gap-0.5 md:gap-1 p-1 bg-muted/50 rounded-lg w-fit mb-8 md:mb-12">
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.id ||
          (tab.id !== "/" && pathname.startsWith(tab.id));
        return (
          <Link
            key={tab.id}
            href={tab.id}
            className={cn(
              "relative px-2.5 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-md transition-colors",
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
