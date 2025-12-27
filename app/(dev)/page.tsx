// import { AboutSection } from "@/components/about";
// import { CapabilitiesSection } from "@/components/capabilities";
// import { FooterSection } from "@/components/footer";
// import { HeroSection } from "@/components/hero";
// import { ProjectsSection } from "@/components/projects";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen w-full relative overflow-hidden">
//       <div className="relative z-10">
//         <HeroSection />
//         <AboutSection />
//         <ProjectsSection />
//         <CapabilitiesSection />
//       </div>{" "}
//       <FooterSection />
//     </div>
//   );
// }
import type { Metadata } from "next";
import { Header } from "./_components/header";
import { NavigationTabs } from "./_components/navigation-tabs";
import { ProjectsSection } from "./_components/projects-section";

export const metadata: Metadata = {
  title: "Muiz Rexhepi | Fullstack Developer",
  description:
    "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript. Building high-performance web and mobile applications.",
  keywords: [
    "Muiz Rexhepi",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Web Developer",
    "Mobile Developer",
    "North Macedonia",
  ],
  authors: [{ name: "Muiz Rexhepi" }],
  creator: "Muiz Rexhepi",
  openGraph: {
    title: "Muiz Rexhepi | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript.",
    url: "https://muizrexhepi.com",
    siteName: "Muiz Rexhepi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Rexhepi | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, React Native, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 md:px-4 py-12 md:py-16">
        <Header />
        <NavigationTabs />
        <ProjectsSection />
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
