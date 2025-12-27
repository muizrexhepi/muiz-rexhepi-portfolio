import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { ToolsSection } from "../_components/tools-section";

export const metadata: Metadata = {
  title: "Tools | Muiz Rexhepi",
  description:
    "Technical skills and tools used by Muiz Rexhepi - React, Next.js, React Native, TypeScript, Node.js, and more.",
  keywords: [
    "Muiz Rexhepi",
    "Tools",
    "Skills",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Technical Skills",
  ],
  openGraph: {
    title: "Tools | Muiz Rexhepi",
    description:
      "Technical skills and tools used by Muiz Rexhepi - Fullstack Developer.",
    url: "https://muizrexhepi.com/tools",
    siteName: "Muiz Rexhepi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools | Muiz Rexhepi",
    description:
      "Technical skills and tools used by Muiz Rexhepi - Fullstack Developer.",
  },
  alternates: {
    canonical: "https://muizrexhepi.com/tools",
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 md:px-4 py-12 md:py-16">
        <Header />
        <NavigationTabs />
        <ToolsSection />
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
