import type React from "react";

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  content: React.ReactNode;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Scaling React Native with Zustand: The Slices Pattern",
    date: "Dec 20, 2024",
    description:
      "Mastering scalable state management in 2025 using Zustand slices and decoupling server state.",
    tags: ["React Native", "Zustand", "Architecture"],
    slug: "zustand-react-native-slices",
    content: (
      <>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          In 2025, the debate isn't about which state library to use—it's about
          how to structure the one you chose. At <strong>Insyllium</strong>, we
          moved our entire React Native fleet to{" "}
          <strong className="text-foreground">Zustand</strong> not just for its
          size, but for its unopinionated flexibility.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          The "Client vs. Server" Split
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          The biggest mistake I see in modern apps is storing server data in
          global stores. If it comes from an API, it belongs in{" "}
          <strong>TanStack Query</strong>. Zustand should be reserved strictly
          for <em>client ownership</em>:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-muted-foreground text-sm">
          <li>UI State (Modals, Sidebar status)</li>
          <li>Session State (Auth tokens, User preferences)</li>
          <li>Complex Multi-step Form Data</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          The Slices Pattern
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          As our app grew, a single store file became unmanageable. We adopted
          the <strong>Slices Pattern</strong> to keep domains isolated while
          sharing a single store instance.
        </p>

        {/* Code blocks usually require a SyntaxHighlighter, keeping it simple text for this structure */}
        <div className="bg-muted/50 rounded-lg p-4 mb-6 font-mono text-xs text-muted-foreground border border-border">
          <p className="mb-2">// store/createAuthSlice.ts</p>
          <p>
            export const createAuthSlice = (set) ={">"} ({"{"}
          </p>
          <p className="pl-4">user: null,</p>
          <p className="pl-4">
            login: (user) ={">"} set({"{"} user {"}"}),
          </p>
          <p>{"}"})</p>
          <br />
          <p className="mb-2">// store/index.ts</p>
          <p>
            export const useBoundStore = create((...a) ={">"} ({"{"}
          </p>
          <p className="pl-4">...createAuthSlice(...a),</p>
          <p className="pl-4">...createCartSlice(...a),</p>
          <p>{"}"}))</p>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          Persistence with MMKV
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          For offline persistence, <code>AsyncStorage</code> is too slow for
          large state trees. We use Zustand's <code>persist</code> middleware
          coupled with <strong>react-native-mmkv</strong>. It’s synchronous,
          roughly 30x faster, and ensures the store is hydrated before the first
          render frame.
        </p>
      </>
    ),
  },
  {
    title: "Next.js 16: Mastering Cache Components & Turbopack",
    date: "Jan 05, 2025",
    description:
      "A deep dive into Next.js 16 features: use cache, proxy.ts, and the new React Compiler.",
    tags: ["Next.js 16", "Performance", "React 19"],
    slug: "nextjs-16-deep-dive",
    content: (
      <>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          The release of <strong className="text-foreground">Next.js 16</strong>{" "}
          has fundamentally changed how we handle caching and build performance.
          Migrating <strong>GoBusly</strong> to v16 wasn't just an upgrade—it
          was a paradigm shift.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          "use cache" Directive
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          The most impactful change is the move to explicit caching. Gone are
          the confusing days of implicit revalidation. With{" "}
          <strong>Cache Components</strong>, we can now granularly cache
          specific parts of the UI or data fetches using the{" "}
          <code>"use cache"</code> directive.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          This allowed us to cache our expensive "Route Search" components while
          keeping the pricing availability strictly real-time, all within the
          same Server Component tree.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          Goodbye Middleware.ts, Hello Proxy.ts
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Next.js 16 introduces <code>proxy.ts</code> to replace the legacy
          middleware approach. This provides a transparent, Node.js-native way
          to handle request interception. We use it to inject tenant IDs into
          headers before the request ever hits our Server Actions, simplifying
          our multi-tenant architecture significantly.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          Turbopack & React Compiler
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          <strong>Turbopack</strong> is finally the stable default. Our local
          dev server startup time dropped from 8s to <strong>400ms</strong>.
          Combined with the <strong>React Compiler</strong> (automating{" "}
          <code>useMemo</code> and <code>useCallback</code>), our codebase is
          cleaner and performant by default without manual optimization
          overhead.
        </p>
      </>
    ),
  },
  {
    title: "Local-First: Building Offline-Ready Apps with SQLite",
    date: "Oct 12, 2024",
    description:
      "Implementing optimistic UI and conflict resolution using Expo SQLite and CRDT concepts.",
    tags: ["Offline First", "SQLite", "Mobile"],
    slug: "offline-first-sqlite",
    content: (
      <>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Connectivity is a feature, not a guarantee. For{" "}
          <strong>Insylink</strong>, our POS system, "offline mode" is the
          default state. We built a local-first architecture that prioritizes
          instant user feedback over server confirmation.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          The Stack: Expo SQLite + Drizzle
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We use <strong>Expo SQLite</strong> as our single source of truth. By
          pairing it with <strong>Drizzle ORM</strong>, we get type-safe SQL
          queries directly on the device. When a waiter punches in an order, it
          writes to SQLite immediately.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          Sync Engine & Optimistic UI
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          We implemented a "Sync Queue" pattern. Every mutation is wrapped in a
          job that is:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-6 text-muted-foreground text-sm">
          <li>Applied optimistically to the UI.</li>
          <li>
            Persisted to a local <code>mutation_queue</code> table.
          </li>
          <li>
            Processed by a background worker when the network is reachable.
          </li>
        </ol>

        <h2 className="text-lg font-semibold text-foreground mt-8 mb-4">
          Conflict Resolution
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          What happens if two devices edit the same order offline? We utilize a
          simplified <strong>CRDT (Conflict-free Replicated Data Type)</strong>{" "}
          approach. Instead of saving "User X set quantity to 5", we save "User
          X added 2 items". Commutative operations allow us to merge changes
          from multiple offline devices without data loss when they finally
          reconnect.
        </p>
      </>
    ),
  },
];
