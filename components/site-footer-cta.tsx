"use client";

import { usePathname } from "next/navigation";
import { FooterCta } from "@/components/footer-cta";

export function SiteFooterCta() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname.startsWith("/work/")) return null;

  return <FooterCta />;
}
