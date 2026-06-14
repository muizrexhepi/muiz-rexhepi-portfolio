export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  description: string;
  liveUrl?: string;
  liveLabel?: string;
  icon?: string;
  initials: string;
  proof: string[];
  stack: string[];
  scope: string[];
  highlights: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "logly",
    name: "Logly",
    role: "Founder & Lead Developer",
    period: "2026 — Present",
    status: "Live iOS app",
    summary:
      "AI nutrition tracker for iOS with natural-language meal logging, macros, Health sync, subscriptions and weekly insights.",
    description:
      "Logly is a production iOS nutrition tracker built around fast natural-language food logging. Users write what they ate, and the app estimates calories, macros, nutrition details and progress insights.",
    liveUrl: "https://uselogly.app",
    liveLabel: "Open Logly",
    icon: "/logly.png",
    initials: "L",
    proof: ["Live on App Store", "200+ registered users", "AI + Health sync"],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Convex",
      "RevenueCat",
      "Apple Health",
      "PostHog",
      "OpenAI",
    ],
    scope: [
      "iOS app",
      "AI food logging",
      "Subscriptions",
      "Apple Health sync",
      "Analytics",
      "Onboarding",
      "Paywall",
      "App Store release",
    ],
    highlights: [
      "Built and launched a production iOS app with onboarding, authentication, subscriptions and analytics.",
      "Implemented AI-powered meal parsing for calories, macros and nutrition estimates.",
      "Integrated RevenueCat, Convex, Apple HealthKit and PostHog across the mobile app.",
      "Designed Pro gating, weekly insights, nutrition targets and App Store release workflows.",
    ],
    outcome: [
      "Live on the App Store with real users.",
      "Shows mobile, AI, subscription and product-shipping experience.",
      "Built end-to-end from product direction to production release.",
    ],
  },
  {
    slug: "speaksure",
    name: "SpeakSure",
    role: "Founder & Lead Developer",
    period: "2026 — Present",
    status: "Live iOS app",
    summary:
      "AI speaking coach for interviews, leadership updates, negotiations and difficult conversations.",
    description:
      "SpeakSure helps users practice high-pressure communication scenarios by recording answers, transcribing speech and receiving structured AI feedback.",
    liveUrl: "https://speaksure.app",
    liveLabel: "Open SpeakSure",
    icon: "/speaksure.png",
    initials: "S",
    proof: ["Live on App Store", "AI voice feedback", "Subscription-ready"],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Convex",
      "Deepgram",
      "OpenAI",
      "RevenueCat",
      "PostHog",
    ],
    scope: [
      "Voice recording",
      "AI transcription",
      "Feedback engine",
      "Drill history",
      "Subscriptions",
      "Onboarding",
      "Paywall",
      "App Store release",
    ],
    highlights: [
      "Built mobile voice-recording flows with AI transcription and structured feedback.",
      "Integrated Deepgram, OpenAI, Convex, RevenueCat and PostHog.",
      "Created scenario-based drills for interviews, leadership, negotiation and difficult conversations.",
      "Implemented answer scoring, rewritten answers, drill history and subscription-aware access.",
    ],
    outcome: [
      "Live production app with a polished native experience.",
      "Strong proof of AI audio, mobile UX and subscription product experience.",
      "Demonstrates complex app workflows beyond basic CRUD.",
    ],
  },
  {
    slug: "hakbus",
    name: "Hakbus",
    role: "Full-Stack Developer",
    period: "2024 — 2025",
    status: "Major client platform",
    summary:
      "Complete digital ticketing system for one of the largest Balkan bus operators, including mobile apps, web app and dashboards.",
    description:
      "Hakbus is a large transport operator with 100+ buses operating across the Balkans and Europe. I worked on their digital system across customer-facing apps, web booking flows and internal dashboards.",
    liveUrl: "https://hakbus.org",
    liveLabel: "Open Hakbus",
    icon: "/hakbus.webp",
    initials: "HB",
    proof: ["100+ buses", "100k+ visitors", "Thousands of bookings"],
    stack: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Dashboards",
      "Analytics",
      "Booking flows",
    ],
    scope: [
      "Mobile apps",
      "Web app",
      "Admin dashboards",
      "Booking flows",
      "Operator workflows",
      "Analytics",
      "Responsive UI",
    ],
    highlights: [
      "Built customer-facing booking experiences across mobile and web.",
      "Worked on dashboards and internal tools for transport operations.",
      "Delivered production UI for a real operator with large-scale regional activity.",
      "Handled multi-platform product work across mobile, web and business workflows.",
    ],
    outcome: [
      "One of the strongest client projects in the portfolio.",
      "Shows ability to build for a real operational business, not just personal products.",
      "Strong proof for React Native, Next.js and full-stack product delivery.",
    ],
  },
  {
    slug: "gobusly",
    name: "GoBusly",
    role: "Product Engineer / Co-founder",
    period: "2025 — Present",
    status: "Live platform",
    summary:
      "Bus booking platform for Balkan and European routes with route pages, booking flows and operator workflows.",
    description:
      "GoBusly is a public transport booking platform focused on routes between the Balkans and Europe. The product includes customer-facing pages, booking flows, route SEO and operator-facing workflows.",
    liveUrl: "https://gobusly.com",
    liveLabel: "Open GoBusly",
    icon: "/gobusly.webp",
    initials: "GB",
    proof: ["20k+ visitors", "Live operators", "Balkan ↔ EU routes"],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Resend",
      "SEO",
    ],
    scope: [
      "Booking flows",
      "Route pages",
      "SEO pages",
      "Operator workflows",
      "Payments",
      "Email notifications",
      "Production deployment",
    ],
    highlights: [
      "Built customer-facing route pages and booking experiences for international bus routes.",
      "Worked on SEO-focused pages for destinations across the Balkans and Europe.",
      "Supported production workflows for operators, bookings and customer communication.",
      "Worked across product, frontend, backend integrations and launch strategy.",
    ],
    outcome: [
      "Live booking platform with real operators.",
      "Shows production web product experience in a real transport market.",
      "Strong proof of product thinking, SEO, payments and booking workflows.",
    ],
  },
  {
    slug: "nextloop",
    name: "Nextloop",
    role: "Design & Development",
    period: "2025",
    status: "Swiss marketplace",
    icon: "/nextloop.svg",
    summary:
      "Luxury goods marketplace for a Swiss client with premium browsing, live auctions and bidding workflows.",
    description:
      "Nextloop is a luxury goods marketplace built for a Swiss client, focused on high-end product presentation, live auctioning, bidding flows and a polished marketplace experience.",
    liveUrl: "https://nextloop.ch",
    liveLabel: "Open Nextloop",
    initials: "NL",
    proof: ["Swiss client", "Luxury marketplace", "Live auction bidding"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Marketplace UI",
      "Auction flows",
      "Responsive design",
      "SEO",
    ],
    scope: [
      "Marketplace experience",
      "Luxury product UI",
      "Auction flows",
      "Bidding UX",
      "Responsive design",
      "Frontend architecture",
      "Launch support",
    ],
    highlights: [
      "Designed and built a polished marketplace experience for luxury goods.",
      "Worked on auction and bidding-oriented product flows.",
      "Focused on premium visuals, trust, responsive polish and clear product browsing.",
      "Created a clean structure that supports marketplace expansion and future product categories.",
    ],
    outcome: [
      "Strong proof of premium client work.",
      "Shows ability to build complex commercial product experiences.",
      "Adds a high-end Swiss client project to the portfolio.",
    ],
  },
  {
    slug: "doros-premium",
    name: "Doros Premium",
    role: "Design & Development",
    period: "2025",
    status: "E-commerce website",
    summary:
      "Capsule and coffee e-commerce website for a Swiss client expanding into the Macedonian market.",
    description:
      "Doros Premium is a capsule and coffee e-commerce website built for a Swiss client that expanded into Macedonia. The website focuses on premium presentation, clear product browsing and mobile-first shopping.",
    liveUrl: "https://dorospremium.com.mk",
    liveLabel: "Open Doros Premium",
    initials: "DP",
    icon: "/doros.svg",
    proof: ["Swiss client", "E-commerce launch", "Macedonian expansion"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "E-commerce UI",
      "Responsive design",
      "SEO",
    ],
    scope: [
      "E-commerce website",
      "Product pages",
      "Premium visual direction",
      "Mobile optimization",
      "Content structure",
      "Launch support",
    ],
    highlights: [
      "Built a polished e-commerce website for coffee capsules and related products.",
      "Focused on making the brand feel premium, trustworthy and clear for the Macedonian market.",
      "Designed responsive product browsing and clean conversion-focused pages.",
      "Delivered a client-facing commercial website with strong visual execution.",
    ],
    outcome: [
      "Strong example of premium local/e-commerce web work.",
      "Shows ability to translate a business expansion into a polished digital presence.",
      "Useful proof for clients and companies evaluating design/frontend quality.",
    ],
  },
  {
    slug: "am-gebaeudereinigung",
    name: "AM Gebäudereinigung",
    role: "Design & Development",
    icon: "/am.svg",
    period: "2022",
    status: "Client website + CMS",
    summary:
      "Business website with CMS for a cleaning company in Hamburg, built for credibility, services and lead generation.",
    description:
      "AM Gebäudereinigung is a business website for a Hamburg-based cleaning company, built with a clean service structure, responsive pages and CMS-backed content management.",
    liveUrl: "https://amgebaeudereinigung.hamburg",
    liveLabel: "Open website",
    initials: "AM",
    proof: ["Hamburg client", "CMS-powered", "Lead-gen website"],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "CMS",
      "SEO",
      "Responsive design",
      "Client website",
    ],
    scope: [
      "Business website",
      "CMS integration",
      "Service pages",
      "Responsive frontend",
      "SEO foundations",
      "Client delivery",
    ],
    highlights: [
      "Built a clean business website for a real client in Hamburg.",
      "Implemented CMS-backed content updates for easier maintenance.",
      "Focused on services, trust, responsive layouts and lead-generation structure.",
    ],
    outcome: [
      "Shows early client delivery and CMS experience.",
      "Adds credibility with a real European business website.",
      "Useful proof of practical client-focused development.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}