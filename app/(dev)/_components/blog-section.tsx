import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export function BlogSection() {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
  });

  return (
    <section>
      <div className="mb-6 md:mb-8">
        <h2 className="text-lg font-semibold tracking-tight md:text-xl">
          Writing
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Notes from building AI products, mobile apps and production systems.
        </p>
      </div>

      <div className="space-y-8 md:space-y-9">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {post.title}
                </h3>

                <time className="text-xs tabular-nums text-muted-foreground">
                  {post.date}
                </time>
              </div>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Read note
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
