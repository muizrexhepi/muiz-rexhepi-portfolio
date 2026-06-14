import type { Metadata } from "next";
import { Header } from "./_components/header";
import { NavigationTabs } from "./_components/navigation-tabs";
import { ProjectsSection } from "./_components/projects-section";

const siteUrl = "https://muizrexhepi.com";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Muiz Rexhepi - React Native and Full-Stack Developer",
};

export const metadata: Metadata = {
  title: "Muiz Rexhepi | React Native & Full-Stack Developer",
  description:
    "React Native and Full-Stack Developer building production mobile apps, web platforms, booking systems, marketplaces and AI products with Expo, Next.js and TypeScript.",
  keywords: [
    "Muiz Rexhepi",
    "React Native Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Expo Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "AI App Developer",
    "North Macedonia",
    "Tetovo",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Muiz Rexhepi | React Native & Full-Stack Developer",
    description:
      "Production mobile apps, web platforms, booking systems, marketplaces and AI products built with Expo, Next.js and TypeScript.",
    url: siteUrl,
    siteName: "Muiz Rexhepi",
    type: "website",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Rexhepi | React Native & Full-Stack Developer",
    description:
      "Production mobile apps, web platforms, booking systems, marketplaces and AI products built with Expo, Next.js and TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-4 md:py-16">
        <Header />
        <NavigationTabs />
        <ProjectsSection />

        <footer className="mt-16 border-t border-border pt-8 md:mt-20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muiz Rexhepi.
          </p>
        </footer>
      </div>
    </main>
  );
}
