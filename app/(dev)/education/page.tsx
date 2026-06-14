import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { EducationSection } from "../_components/education-section";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education, thesis, languages and technical background of Muiz Rexhepi, React Native and Full-Stack Developer.",
  alternates: {
    canonical: "https://muizrexhepi.com/education",
  },
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-4 md:py-16">
        <Header />
        <NavigationTabs />
        <EducationSection />

        <footer className="mt-16 border-t border-border pt-8 md:mt-20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muiz Rexhepi.
          </p>
        </footer>
      </div>
    </main>
  );
}
