import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable React Native Apps with Zustand",
    date: "Dec 20, 2024",
    description:
      "A guide to managing state efficiently in React Native applications using Zustand. Covers store architecture, persistence with AsyncStorage, and performance optimization patterns.",
    tags: ["React Native", "State Management"],
    slug: "zustand-react-native",
  },
  {
    title: "Server-Side Rendering in Next.js: A Deep Dive",
    date: "Nov 15, 2024",
    description:
      "Exploring SSR and RSC techniques in Next.js App Router for superior SEO and performance. Includes real-world examples from building GoBusly.",
    tags: ["Next.js", "SSR", "Performance"],
    slug: "nextjs-ssr-deep-dive",
  },
  {
    title: "Offline-First Architecture in Mobile Apps",
    date: "Oct 5, 2024",
    description:
      "How to engineer a reliable POS system that operates seamlessly without internet. Deep dive into local-first data patterns and sync strategies.",
    tags: ["Mobile", "Architecture"],
    slug: "offline-first-architecture",
  },
];

export function BlogSection() {
  return (
    <section>
      <div className="mb-4 md:mb-6">
        <h2 className="text-base md:text-lg font-semibold mb-1">Blog</h2>
        <p className="text-muted-foreground text-xs md:text-sm">
          Thoughts on web development, mobile apps, and modern tooling.
        </p>
      </div>
      <div className="space-y-8 md:space-y-6">
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block group"
          >
            <article>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-medium text-sm md:text-base group-hover:text-muted-foreground">
                  {post.title}
                </h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                  {post.date}
                </span>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm mb-2 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground"
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
