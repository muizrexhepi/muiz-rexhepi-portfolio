import type { Metadata } from "next";
import { Header } from "../_components/header";
import { NavigationTabs } from "../_components/navigation-tabs";
import { BlogSection } from "../_components/blog-section";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building production AI apps, mobile products, React Native, Next.js and full-stack product systems by Muiz Rexhepi.",
  alternates: {
    canonical: "https://muizrexhepi.com/blog",
  },
  openGraph: {
    title: "Writing | Muiz Rexhepi",
    description:
      "Notes on building production AI apps, mobile products and full-stack systems.",
    url: "https://muizrexhepi.com/blog",
    siteName: "Muiz Rexhepi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Muiz Rexhepi",
    description:
      "Notes on building production AI apps, mobile products and full-stack systems.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-12 md:px-4 md:py-16">
        <Header />
        <NavigationTabs />
        <BlogSection />

        <footer className="mt-16 border-t border-border pt-8 md:mt-20">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muiz Rexhepi.
          </p>
        </footer>
      </div>
    </main>
  );
}
