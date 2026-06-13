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
      "AI nutrition tracker for logging meals, calories, macros, weight and weekly progress insights.",
    description:
      "Logly is a production iOS nutrition tracker built around fast natural-language food logging. Users can write what they ate and the app estimates calories, macros, nutrition details and progress insights.",
    liveUrl: "https://uselogly.app",
    liveLabel: "Open Logly",
    icon: "/logly.png",
    initials: "L",
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
      "Mobile app architecture",
      "AI food logging",
      "RevenueCat subscriptions",
      "Apple Health integration",
      "Onboarding and paywall",
      "Weekly insights",
      "App Store release flow",
    ],
    highlights: [
      "Built and launched a production iOS app with authentication, onboarding, subscriptions and analytics.",
      "Implemented AI-powered meal parsing for natural language food logging.",
      "Integrated Apple Health for steps, active energy and health data syncing.",
      "Designed Pro entitlement handling, paywall logic and subscription-aware feature gating.",
    ],
    outcome: [
      "Live on the App Store with real users.",
      "Built with production subscription infrastructure and analytics.",
      "Shows strong mobile, AI, product and launch experience.",
    ],
  },
  {
    slug: "speaksure",
    name: "SpeakSure",
    role: "Founder & Lead Developer",
    period: "2026 — Present",
    status: "AI voice app",
    summary:
      "AI speaking coach for interviews, leadership updates, negotiations and difficult conversations.",
    description:
      "SpeakSure helps users practice high-pressure communication scenarios by recording answers, transcribing speech and giving structured AI feedback.",
    liveUrl: "https://speaksure.app",
    liveLabel: "Open SpeakSure",
    icon: "/speaksure.png",
    initials: "S",
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
      "Voice recording flows",
      "AI transcription",
      "Communication scoring",
      "Drill history",
      "Subscription system",
      "Mobile onboarding",
      "Paywall UX",
    ],
    highlights: [
      "Built mobile recording and analysis flows for realistic speaking practice.",
      "Integrated Deepgram transcription and OpenAI feedback for answer scoring and rewrites.",
      "Created drill categories for interviews, leadership, negotiation and difficult conversations.",
      "Implemented subscription gating, history and personalized training flows.",
    ],
    outcome: [
      "Demonstrates AI audio product experience.",
      "Shows ability to build complex mobile workflows beyond simple CRUD apps.",
      "Strong proof for React Native, AI and subscription-based products.",
    ],
  },
  {
    slug: "gobusly",
    name: "GoBusly",
    role: "Product Engineer / Co-founder",
    period: "2025 — Present",
    status: "Live platform",
    summary:
      "Intercity bus booking platform for Balkan and European routes with operators, bookings and route pages.",
    description:
      "GoBusly is a public transport booking platform focused on routes between the Balkans and Europe. The product includes customer-facing pages, booking flows, route SEO and operator needs.",
    liveUrl: "https://gobusly.com",
    liveLabel: "Open GoBusly",
    icon: "/gobusly.webp",
    initials: "GB",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Resend", "SEO"],
    scope: [
      "Booking flows",
      "Route pages",
      "SEO pages",
      "Operator workflows",
      "Payment flows",
      "Email notifications",
      "Production deployment",
    ],
    highlights: [
      "Built customer-facing route and booking experiences for real transport routes.",
      "Worked on SEO-focused pages for international bus destinations.",
      "Supported production workflows for operators, bookings and customer communication.",
      "Worked across product, frontend, backend integrations and launch strategy.",
    ],
    outcome: [
      "Live booking platform with real operators.",
      "Strong proof of production web product experience.",
      "Shows ability to build for real-world business operations.",
    ],
  },
  {
    slug: "bileta",
    name: "Bileta",
    role: "Full-Stack Developer",
    period: "2025",
    status: "Ticketing platform",
    summary:
      "Public-facing ticketing platform built around clear discovery, responsive flows and production-ready UI.",
    description:
      "Bileta is a ticketing-focused web product designed to make browsing, selecting and purchasing tickets feel simple across devices.",
    liveUrl: "https://bileta.mk",
    liveLabel: "Open Bileta",
    initials: "B",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO"],
    scope: [
      "Public web experience",
      "Responsive UI",
      "Ticket discovery flows",
      "Frontend architecture",
      "Performance-focused pages",
    ],
    highlights: [
      "Built clean, responsive user-facing pages for a ticketing product.",
      "Focused on simple navigation, clear information structure and fast page experience.",
      "Delivered production UI patterns that work across mobile and desktop.",
    ],
    outcome: [
      "Adds more proof of commercial web platform work.",
      "Shows experience outside personal apps.",
      "Strengthens the portfolio with a recognizable Macedonian market domain.",
    ],
  },
  {
    slug: "nextloop",
    name: "Nextloop",
    role: "Design & Development",
    period: "2025",
    status: "Client website",
    summary:
      "Premium business website with a polished visual direction, responsive layout and conversion-focused structure.",
    description:
      "Nextloop is a business website built to feel clean, credible and premium while presenting the company’s offer clearly across desktop and mobile.",
    liveUrl: "https://nextloop.ch",
    liveLabel: "Open Nextloop",
    initials: "NL",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO"],
    scope: [
      "Website structure",
      "Responsive design",
      "Landing page sections",
      "Visual polish",
      "Performance",
      "SEO foundations",
    ],
    highlights: [
      "Designed and built a clean marketing website with a premium feel.",
      "Focused on trust, clarity, responsive polish and conversion-focused sections.",
      "Created a scalable structure that can support future content and service pages.",
    ],
    outcome: [
      "Strong example of polished client-facing web design.",
      "Shows ability to ship premium business websites.",
      "Useful proof for both job applications and freelance/client work.",
    ],
  },
  {
    slug: "doros-premium",
    name: "Doros Premium",
    role: "Design & Development",
    period: "2025",
    status: "Client website",
    summary:
      "Premium brand website for a local business, focused on clean presentation, trust and mobile-first browsing.",
    description:
      "Doros Premium is a modern client website built to present a local brand with a sharper digital presence, better mobile experience and clearer offer structure.",
    liveUrl: "https://dorospremium.com.mk",
    liveLabel: "Open Doros Premium",
    initials: "DP",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "SEO"],
    scope: [
      "Website design",
      "Frontend development",
      "Mobile optimization",
      "Content structure",
      "Brand presentation",
      "Launch support",
    ],
    highlights: [
      "Created a polished website experience for a real local business.",
      "Focused on making the brand feel more premium and trustworthy online.",
      "Built a responsive structure that works cleanly across phones, tablets and desktop.",
    ],
    outcome: [
      "Strong proof of local business website work.",
      "Shows premium visual execution without overcomplicating the product.",
      "Good example for agencies, startups and local companies reviewing the portfolio.",
    ],
  },
  {
    slug: "hakbus",
    name: "Hakbus",
    role: "Full-Stack Developer",
    period: "2024",
    status: "Client platform",
    summary:
      "Multi-platform bus ticketing solution with web, mobile and dashboard experiences.",
    description:
      "Hakbus is a transport booking product built across customer-facing and business-facing surfaces, including mobile and web workflows.",
    liveUrl: "https://hakbus.org",
    liveLabel: "Open Hakbus",
    icon: "/hakbus.webp",
    initials: "HB",
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Analytics"],
    scope: [
      "Mobile app UI",
      "Web booking flows",
      "Admin-facing tools",
      "Analytics",
      "Responsive product screens",
    ],
    highlights: [
      "Built booking-related flows across web and mobile surfaces.",
      "Worked on production UI for a real transport company.",
      "Delivered responsive screens for both customer and internal workflows.",
    ],
    outcome: [
      "Shows multi-platform client delivery.",
      "Strengthens transport/booking platform experience.",
      "Good proof for React Native and Next.js roles.",
    ],
  },
  {
    slug: "menyro",
    name: "Menyro",
    role: "Frontend Developer",
    period: "2024",
    status: "SaaS product",
    summary:
      "QR menu SaaS for restaurants with multilingual menus, translations and real-time menu management.",
    description:
      "Menyro is a restaurant menu SaaS that helps businesses manage digital QR menus, multilingual content and real-time menu updates.",
    liveUrl: "https://menyro.com",
    liveLabel: "Open Menyro",
    icon: "/menyro.png",
    initials: "M",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "DeepL"],
    scope: [
      "Restaurant dashboard",
      "Public menu UI",
      "Multilingual flows",
      "Translation workflows",
      "Responsive frontend",
    ],
    highlights: [
      "Built frontend screens for restaurant menu management and public menu viewing.",
      "Worked on multilingual UI flows and translation-heavy product experiences.",
      "Helped shape a SaaS product used by restaurants to manage menus digitally.",
    ],
    outcome: [
      "Shows SaaS product experience.",
      "Strong proof for dashboard, multilingual and restaurant-tech work.",
      "Useful example for both hiring and client credibility.",
    ],
  },
  {
    slug: "receta-ime",
    name: "Receta Ime",
    role: "Founder & Lead Developer",
    period: "2026 — In progress",
    status: "In development",
    summary:
      "Albanian-first recipe organizer that turns links, screenshots and text into clean recipes, macros and grocery lists.",
    description:
      "Receta Ime is a mobile app for saving recipes from TikTok, Instagram, photos, links or text and turning them into structured cooking steps, ingredients, collections, nutrition estimates and grocery lists.",
    initials: "RI",
    stack: ["React Native", "Expo", "TypeScript", "Convex", "AI", "RevenueCat"],
    scope: [
      "Recipe import flow",
      "AI parsing",
      "Collections",
      "Meal planning",
      "Grocery lists",
      "Nutrition estimates",
      "Freemium limits",
    ],
    highlights: [
      "Building a native mobile experience around recipe importing and organization.",
      "Using AI to structure messy recipe input into clean ingredients, steps and macro estimates.",
      "Designed for Albanian/Balkan cooking habits instead of generic recipe browsing.",
    ],
    outcome: [
      "Shows current product-building ability.",
      "Strong example of niche product thinking and mobile UX.",
      "Useful if presented as in-progress, not overclaimed as a launched product.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}