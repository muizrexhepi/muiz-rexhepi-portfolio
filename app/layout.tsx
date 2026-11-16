import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/footer";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

import "./globals.css";
import "./typography.css";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "400 800",
  variable: "--font-manrope",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} data-scroll-behavior="smooth" className={cn("h-full antialiased", inter.variable, manrope.variable)}>
      <body className="flex min-h-full flex-col font-sans">
        <a href="#main-content" className="sr-only z-[100] focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <SiteFooterCta />
        <Footer />
      </body>
    </html>
  );
}
