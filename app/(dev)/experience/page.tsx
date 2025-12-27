import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { ExperienceSection } from "../_components/experience-section";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience and education of Muiz Rexhepi - Fullstack Developer specializing in React, Next.js, and React Native.",
  keywords: [
    "Muiz Rexhepi",
    "Experience",
    "Work History",
    "Fullstack Developer",
    "React Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Experience",
    description:
      "Work experience and education of Muiz Rexhepi - Fullstack Developer.",
    url: "https://muizrexhepi.com/experience",
    siteName: "Muiz Rexhepi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience",
    description:
      "Work experience and education of Muiz Rexhepi - Fullstack Developer.",
  },
  alternates: {
    canonical: "https://muizrexhepi.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 md:px-4 py-12 md:py-16">
        <Header />
        <NavigationTabs />
        <ExperienceSection />
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
