import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { BlogSection } from "../_components/blog-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on web development, mobile apps, and modern tooling by Muiz Rexhepi.",
  keywords: [
    "Muiz Rexhepi",
    "Blog",
    "Web Development",
    "React",
    "Next.js",
    "React Native",
    "Technical Writing",
  ],
  openGraph: {
    title: "Blog",
    description:
      "Thoughts on web development, mobile apps, and modern tooling.",
    url: "https://muizrexhepi.com/blog",
    siteName: "Muiz Rexhepi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Thoughts on web development, mobile apps, and modern tooling.",
  },
  alternates: {
    canonical: "https://muizrexhepi.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-5 md:px-4 py-12 md:py-16">
        <Header />
        <NavigationTabs />
        <BlogSection />
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
