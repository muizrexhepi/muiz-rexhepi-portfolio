import { blogPosts } from "@/data/blogs";
import Link from "next/link";

export function BlogSection() {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section>
      <div className="mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold mb-1">Blog</h2>
        <p className="text-muted-foreground text-xs md:text-sm">
          Thoughts on web development, mobile apps, and modern tooling.
        </p>
      </div>
      <div className="space-y-8 md:space-y-6">
        {sortedPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block group"
          >
            <article>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 tabular-nums">
                  {post.date}
                </span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm mb-2 leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground border border-transparent group-hover:border-border transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
