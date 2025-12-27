import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type React from "react";
import { Header } from "../../_components/header";
import { NavigationTabs } from "../../_components/navigation-tabs";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable React Native Apps with Zustand",
    date: "Dec 20, 2024",
    description:
      "Learn how to manage state efficiently in React Native applications using Zustand.",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed my-4">
          State management is crucial for building scalable React Native
          applications. After working with Redux, MobX, and Context API across
          multiple production apps at <strong>Insyllium</strong>, I found{" "}
          <strong>Zustand</strong> to be the perfect balance of simplicity and
          power.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Why Zustand?</h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          When building <strong>Insylink</strong>, our restaurant POS system, we
          needed state management that could handle complex offline scenarios
          while remaining maintainable. Redux felt like overkill with its
          boilerplate, and Context API caused unnecessary re-renders. Zustand
          gave us exactly what we needed.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Key Benefits</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li className="text-muted-foreground">
            <strong>Minimal boilerplate</strong> - No providers wrapping your
            app, no reducers, no action creators. Just stores that work.
          </li>
          <li className="text-muted-foreground">
            <strong>TypeScript support</strong> - First-class TypeScript
            integration with full type inference out of the box.
          </li>
          <li className="text-muted-foreground">
            <strong>React Native friendly</strong> - Works seamlessly with
            AsyncStorage for persistence, critical for offline-first apps.
          </li>
          <li className="text-muted-foreground">
            <strong>Tiny bundle size</strong> - Only ~1KB gzipped, which matters
            for mobile app performance.
          </li>
          <li className="text-muted-foreground">
            <strong>Middleware support</strong> - Built-in persist, devtools,
            and immer middleware for complex use cases.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Implementation Pattern
        </h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          Here is the pattern I use across all my React Native projects. The key
          is separating your stores by domain - auth, cart, settings - rather
          than having one monolithic store.
        </p>
        <p className="text-muted-foreground leading-relaxed my-4">
          For <strong>Nuroo AI</strong>, our AI journaling app, we have separate
          stores for user sessions, journal entries, and AI conversation
          history. Each store handles its own persistence logic, making the
          codebase much easier to maintain and test.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Performance Considerations
        </h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          One thing I learned building mobile apps is that state management
          performance directly impacts user experience. Zustand's selective
          subscriptions mean components only re-render when their specific slice
          of state changes. This is especially important in list-heavy UIs like{" "}
          <strong>GoBusly's</strong> route search results.
        </p>
        <p className="text-muted-foreground leading-relaxed my-4">
          If you are building React Native apps and haven't tried Zustand yet, I
          highly recommend giving it a shot. The learning curve is minimal, and
          the productivity gains are substantial.
        </p>
      </>
    ),
    tags: ["React Native", "State Management"],
    slug: "zustand-react-native",
  },
  {
    title: "Server-Side Rendering in Next.js: A Deep Dive",
    date: "Nov 15, 2024",
    description:
      "Exploring SSR techniques in Next.js for better SEO and performance.",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed my-4">
          Server-side rendering is one of the most powerful features of{" "}
          <strong>Next.js</strong>. When building <strong>GoBusly</strong>, our
          European bus ticket booking platform, getting SSR right was critical
          for both SEO and user experience.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">The Problem</h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          Bus travel searches are highly specific. Users search for routes like
          "Berlin to Munich" or "Prague to Vienna" through Google. If our route
          pages weren't properly indexed and fast-loading, we'd lose potential
          customers to competitors.
        </p>
        <p className="text-muted-foreground leading-relaxed my-4">
          With hundreds of routes across multiple countries, we needed a
          solution that could generate SEO-optimized pages at scale while
          maintaining fast load times.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          The Solution: Next.js App Router
        </h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          Next.js 14's App Router with <strong>React Server Components</strong>{" "}
          gave us the perfect foundation. Server Components allowed us to fetch
          route data, pricing, and schedules on the server without shipping that
          logic to the client.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">
          Key Techniques We Used
        </h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li className="text-muted-foreground">
            <strong>generateStaticParams</strong> - Pre-rendered our top 500
            routes at build time for instant loading.
          </li>
          <li className="text-muted-foreground">
            <strong>Dynamic metadata</strong> - Generated unique title,
            description, and Open Graph tags for each route.
          </li>
          <li className="text-muted-foreground">
            <strong>Streaming</strong> - Used Suspense boundaries to show route
            info immediately while prices loaded.
          </li>
          <li className="text-muted-foreground">
            <strong>ISR</strong> - Incremental Static Regeneration kept pricing
            data fresh without full rebuilds.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Results</h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          After implementing proper SSR, our Core Web Vitals improved
          significantly. <strong>LCP dropped from 3.2s to 1.1s</strong>, and our
          organic search traffic increased by 340% over three months. The
          combination of fast initial loads and proper meta tags made a huge
          difference in search rankings.
        </p>
        <p className="text-muted-foreground leading-relaxed my-4">
          If you're building a content-heavy site with Next.js, investing time
          in your SSR strategy pays dividends. The App Router makes it much more
          intuitive than the Pages Router ever did.
        </p>
      </>
    ),
    tags: ["Next.js", "SSR", "Performance"],
    slug: "nextjs-ssr-deep-dive",
  },
  {
    title: "Offline-First Architecture in Mobile Apps",
    date: "Oct 5, 2024",
    description:
      "How we built a reliable POS system that works without internet.",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed my-4">
          When building <strong>Insylink</strong>, a restaurant POS system at
          Insyllium, reliability was non-negotiable. Restaurants cannot afford
          to have their point-of-sale system fail during dinner service because
          of a network hiccup.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">The Challenge</h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          Restaurant environments are notoriously bad for connectivity. Thick
          walls, interference from kitchen equipment, and overloaded networks
          during peak hours meant we couldn't rely on constant internet access.
          Yet we needed to handle orders, payments, and inventory in real-time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Our Approach: Local-First Architecture
        </h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          We adopted a <strong>local-first architecture</strong> where all
          operations work offline by default, and syncing happens
          opportunistically when connectivity is available.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Core Principles</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li className="text-muted-foreground">
            <strong>SQLite as source of truth</strong> - All data lives locally
            first. The server is just a sync target.
          </li>
          <li className="text-muted-foreground">
            <strong>Optimistic updates</strong> - UI updates immediately, sync
            happens in background.
          </li>
          <li className="text-muted-foreground">
            <strong>Conflict resolution</strong> - Last-write-wins for most
            data, custom merge logic for orders.
          </li>
          <li className="text-muted-foreground">
            <strong>Sync queue</strong> - Failed operations queue up and retry
            automatically.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Implementation Details
        </h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          We used <strong>React Native</strong> with{" "}
          <strong>expo-sqlite</strong> for local storage and{" "}
          <strong>Zustand</strong> for in-memory state. The sync layer was built
          with a custom queue system that tracked pending operations and their
          retry status.
        </p>
        <p className="text-muted-foreground leading-relaxed my-4">
          For conflict resolution, we implemented vector clocks for order
          modifications. If two tablets modified the same order offline, we
          could intelligently merge the changes rather than losing data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Lessons Learned</h2>
        <p className="text-muted-foreground leading-relaxed my-4">
          Building offline-first is harder than it sounds, but the user
          experience is worth it. Our POS system now handles network outages
          gracefully, and restaurant staff don't even notice when connectivity
          drops. That's the goal - <strong>technology that just works</strong>,
          regardless of network conditions.
        </p>
      </>
    ),
    tags: ["Mobile", "Architecture"],
    slug: "offline-first-architecture",
  },
];

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
    keywords: [...post.tags, "Muiz Rexhepi", "Blog", "Software Development"],
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
    alternates: {
      canonical: `https://muizrexhepi.com/blog/${post.slug}`,
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
      <div className="max-w-2xl mx-auto px-5 md:px-4 py-12 md:py-16">
        <Header />
        <NavigationTabs />

        <article>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
              <time>{post.date}</time>
              <span className="hidden sm:inline">·</span>
              <span>by Muiz Rexhepi</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content}
          </div>
        </article>

        <footer className="mt-16 md:mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Muiz Rexhepi. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
