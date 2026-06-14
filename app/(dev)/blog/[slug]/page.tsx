import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://muizrexhepi.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Muiz Rexhepi`,
      description: post.description,
      url: `https://muizrexhepi.com/blog/${post.slug}`,
      siteName: "Muiz Rexhepi",
      type: "article",
      publishedTime: post.isoDate,
      authors: ["Muiz Rexhepi"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Muiz Rexhepi`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-10 md:px-4 md:py-16">
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to writing
          </Link>
        </div>

        <article>
          <header className="mb-10 border-b border-border pb-8">
            <div className="mb-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl md:leading-tight">
              {post.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              {post.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={post.isoDate}>{post.date}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>Muiz Rexhepi</span>
            </div>
          </header>

          <div
            className="
              text-[15px] leading-7 text-muted-foreground

              [&_p]:mb-5
              [&_p]:leading-7

              [&_h2]:mb-4
              [&_h2]:mt-10
              [&_h2]:text-xl
              [&_h2]:font-semibold
              [&_h2]:tracking-tight
              [&_h2]:text-foreground

              [&_h3]:mb-3
              [&_h3]:mt-8
              [&_h3]:text-base
              [&_h3]:font-semibold
              [&_h3]:tracking-tight
              [&_h3]:text-foreground

              [&_ul]:my-5
              [&_ul]:list-disc
              [&_ul]:space-y-2
              [&_ul]:pl-5

              [&_ol]:my-5
              [&_ol]:list-decimal
              [&_ol]:space-y-2
              [&_ol]:pl-5

              [&_li]:pl-1
              [&_li]:leading-7

              [&_strong]:font-semibold
              [&_strong]:text-foreground

              [&_em]:text-foreground

              [&_a]:font-medium
              [&_a]:text-foreground
              [&_a]:underline
              [&_a]:decoration-border
              [&_a]:underline-offset-4

              [&_code]:rounded-md
              [&_code]:border
              [&_code]:border-border
              [&_code]:bg-muted/70
              [&_code]:px-1.5
              [&_code]:py-0.5
              [&_code]:font-mono
              [&_code]:text-[13px]
              [&_code]:text-foreground

              [&_pre]:my-7
              [&_pre]:overflow-x-auto
              [&_pre]:rounded-xl
              [&_pre]:border
              [&_pre]:border-border
              [&_pre]:bg-muted/40
              [&_pre]:p-4
              [&_pre]:text-sm
              [&_pre]:leading-6

              [&_pre_code]:border-0
              [&_pre_code]:bg-transparent
              [&_pre_code]:p-0
              [&_pre_code]:text-[13px]

              [&_blockquote]:my-6
              [&_blockquote]:border-l-2
              [&_blockquote]:border-border
              [&_blockquote]:pl-4
              [&_blockquote]:text-muted-foreground
            "
          >
            {post.content}
          </div>
        </article>

        <footer className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Writing
          </Link>
        </footer>
      </div>
    </main>
  );
}
