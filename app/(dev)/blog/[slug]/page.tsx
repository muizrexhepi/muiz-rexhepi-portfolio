import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Header } from "../../_components/header";
import { NavigationTabs } from "../../_components/navigation-tabs";
import { blogPosts } from "@/data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Muiz Rexhepi",
    };
  }

  return {
    title: `${post.title} | Muiz Rexhepi`,
    description: post.description,
    keywords: [...post.tags, "Muiz Rexhepi", "Blog", "Software Engineering"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://muizrexhepi.com/blog/${post.slug}`,
      siteName: "Muiz Rexhepi",
      type: "article",
      publishedTime: post.date,
      authors: ["Muiz Rexhepi"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-20">
        <Header />
        <NavigationTabs />

        <article className="animate-in fade-in duration-500 slide-in-from-bottom-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <header className="mb-12 border-b border-border pb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900" />
                <span>Muiz Rexhepi</span>
              </div>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-code:bg-muted prose-code:rounded-md prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none">
            {post.content}
          </div>
        </article>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js 16.
          </p>
        </footer>
      </div>
    </main>
  );
}
