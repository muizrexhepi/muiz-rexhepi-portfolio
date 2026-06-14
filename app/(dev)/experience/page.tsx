import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { ExperienceSection } from "../_components/experience-section";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience and education of Muiz Rexhepi, React Native and Full-Stack Developer.",
  alternates: {
    canonical: "https://muizrexhepi.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-4 md:py-16">
        <Header />
        <NavigationTabs />
        <ExperienceSection />

        <footer className="mt-16 border-t border-border pt-8 md:mt-20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muiz Rexhepi.
          </p>
        </footer>
      </div>
    </main>
  );
}
