import { featuredProjects } from "@/lib/featured-projects";

export type ProjectCategory =
  | "Custom Software"
  | "Hospitality"
  | "AI"
  | "Mobile App"
  | "Booking"
  | "Transport"
  | "Travel"
  | "Operations"
  | "Marketplace"
  | "E-commerce"
  | "Business Website"
  | "CMS"
  | "Client Work";

export type ProjectMetric = {
  label: string;
  value: string;
  description?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
  type?: "desktop" | "mobile" | "dashboard" | "flow" | "brand" | "detail";
};

export type ProjectCaseSection = {
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageType?: ProjectImage["type"];
  quote?: {
    text: string;
    author?: string;
    role?: string;
  };
};

export type ProjectVisualTheme =
  | "rendo-pos"
  | "ido-tours"
  | "villa-noar"
  | "asknoel"
  | "agimtours"
  | "logly"
  | "speaksure"
  | "hakbus"
  | "gobusly"
  | "nextloop"
  | "doros"
  | "am";

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  status: string;
  clientType: string;
  industry: string;
  summary: string;
  description: string;
  headline: string;
  subheadline: string;
  featured?: boolean;
  homepageFeatured?: boolean;
  flag?: string;
  inquiry?: [title: string, description: string];
  liveUrl?: string;
  liveLabel?: string;
  logoImage?: string;
  logoAlt?: string;
  logoImageClassName?: string;
  initials: string;
  visualTheme: ProjectVisualTheme;
  coverImage?: string;
  coverAlt?: string;
  coverImageClassName?: string;
  heroImage?: string;
  heroAlt?: string;
  galleryImages: ProjectImage[];
  caseStudy: ProjectCaseSection[];
  services: string[];
  deliverables: string[];
  categories: ProjectCategory[];
  proof: string[];
  metrics: ProjectMetric[];
  stack: string[];
  challenge: string;
  solution: string;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
};

export const projects: Project[] = [
  ...featuredProjects,
  {
    slug: "asknoel",
    name: "AskNoel",
    role: "Product strategy, platform engineering, and mobile development",
    period: "Ongoing partnership",
    status: "Live crypto intelligence platform",
    clientType: "Dubai-based fintech client",
    industry: "Crypto / AI / Fintech",
    featured: true,
    headline: "Turning a high-growth crypto product into one connected intelligence platform.",
    subheadline:
      "A multi-surface product spanning real-time market data, editorial intelligence, an AI chatbot, and mobile access for a global crypto audience.",
    summary: "Crypto intelligence, built as one product.",
    description:
      "AskNoel needed more than a market dashboard. Muiz Rexhepi helped shape and build the platform across web, conversational AI, and mobile, creating a cohesive experience across those surfaces.",
    liveUrl: "https://app.asknoel.ai/",
    liveLabel: "Visit AskNoel",
    logoImage: "/logos/asknoel.png",
    logoAlt: "AskNoel logo",
    logoImageClassName: "h-7 max-h-7",
    initials: "AN",
    visualTheme: "asknoel",
    coverImage: "/work/asknoel.png",
    coverAlt: "AskNoel cryptocurrency market intelligence platform",
    heroImage: "/work/asknoel.png",
    heroAlt: "AskNoel market dashboard with crypto prices, analytics, and news",
    galleryImages: [
      {
        src: "/work/asknoel/asknoel-news.png",
        alt: "AskNoel crypto news and market intelligence feed",
        type: "desktop",
      },
      {
        src: "/work/asknoel/asknoel-coin.png",
        alt: "AskNoel Bitcoin market data and charting interface",
        type: "dashboard",
      },
      {
        src: "/work/asknoel/asknoel-chatbot.png",
        alt: "AskNoel AI crypto chatbot and featured agents",
        type: "desktop",
      },
    ],
    services: [
      "Product strategy",
      "UX and interface design",
      "Full-stack platform development",
      "AI chatbot development",
      "Mobile app development",
      "Product infrastructure",
    ],
    deliverables: [
      "Crypto market platform",
      "AI assistant",
      "Mobile application",
      "Market dashboards",
      "News experience",
      "Responsive product system",
    ],
    categories: ["AI", "Mobile App", "Client Work"],
    proof: [
      "Dubai client",
      "Multi-million-dollar backing",
      "Web, mobile, and AI product",
    ],
    metrics: [
      {
        value: "Multi-million",
        label: "Backing",
        description: "Investment supporting growth",
      },
      {
        value: "3",
        label: "Product surfaces",
        description: "Web, AI assistant, and mobile",
      },
      {
        value: "Global",
        label: "Audience",
        description: "Crypto users across markets",
      },
    ],
    stack: [
      "Product strategy",
      "Full-stack engineering",
      "AI systems",
      "Mobile engineering",
      "Market data",
      "Product analytics",
    ],
    challenge:
      "Crypto users move between price trackers, news sources, research tools, and community channels, creating a fragmented experience in a market where speed and clarity matter.",
    solution:
      "Muiz Rexhepi helped build a unified product across web, AI, and mobile, bringing live market information, editorial content, and conversational assistance into a consistent platform.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "Crypto intelligence, clearly organized.",
        body:
          "AskNoel set out to give crypto users a clearer way to follow markets, understand news, and act on information. The product needed to handle dense financial data without feeling fragmented or difficult to navigate.",
      },
      {
        eyebrow: "Platform",
        title: "Market data meets editorial context.",
        body:
          "The web platform organizes prices, market indicators, trending assets, watchlists, and news into a coherent dashboard designed for repeated daily use across screen sizes.",
      },
      {
        eyebrow: "Product ecosystem",
        title: "AI guidance across web and mobile.",
        body:
          "The engagement expanded beyond the core platform to include an AI chatbot and mobile application, giving users more direct ways to ask questions, follow the market, and access the product away from desktop.",
      },
      {
        eyebrow: "Outcome",
        title: "Built as one connected product.",
        body:
          "The result is a multi-surface product system built to support AskNoel's growth: one experience spanning market intelligence, content, AI assistance, and mobile access for an international audience.",
      },
    ],
    seoTitle: "AskNoel Case Study | Crypto Intelligence and AI Platform",
    seoDescription:
      "Case study for AskNoel, a Dubai-based crypto intelligence platform spanning market data, news, an AI chatbot, and a mobile app.",
  },
  {
    slug: "agim-tours",
    name: "Agim Tours",
    role: "Brand, web experience, and operations platform",
    period: "Ongoing partnership",
    status: "Live business platform",
    clientType: "Travel agency",
    industry: "Travel / Hospitality",
    featured: true,
    headline: "One travel business, connected from discovery to daily operations.",
    subheadline:
      "A long-term partnership spanning the public brand, travel discovery, bookings, and the internal system coordinating agencies, reservations, hotels, and tours.",
    summary: "Travel discovery and operations, connected.",
    description:
      "The work began with the customer experience and grew with the business. Muiz Rexhepi connected Agim Tours’ public brand to the operational system behind it, creating one clearer foundation for travel products, bookings, and coordination across agencies.",
    liveUrl: "https://agimtours.com",
    liveLabel: "Visit Agim Tours",
    logoImage: "/logos/agimtours.webp",
    logoAlt: "Agim Tours logo",
    logoImageClassName: "h-6 max-h-6 sm:h-7 sm:max-h-7",
    initials: "AT",
    visualTheme: "agimtours",
    coverImage: "/work/agimtours.webp",
    coverAlt: "Agim Tours travel agency website",
    heroImage: "/work/agimtours.webp",
    heroAlt: "Agim Tours website and travel experience",
    galleryImages: [],
    services: [
      "Digital strategy",
      "Brand direction",
      "UX and interface design",
      "Web development",
      "Operations system design",
      "Product engineering",
    ],
    deliverables: [
      "Travel agency website",
      "Brand experience",
      "Agency management system",
      "Booking operations",
      "Multi-agency workflows",
      "Responsive platform",
    ],
    categories: ["Travel", "Booking", "Operations", "Business Website", "Client Work"],
    proof: ["Travel platform", "Multi-agency system", "Live operations"],
    metrics: [
      {
        value: "Multi-agency",
        label: "Operations",
        description: "Shared workflows across teams",
      },
      {
        value: "Public + ops",
        label: "Platform",
        description: "Discovery through fulfillment",
      },
      {
        value: "Live",
        label: "Daily use",
        description: "Runs real agency workflows",
      },
    ],
    stack: [
      "Product strategy",
      "Brand design",
      "UX/UI design",
      "Web engineering",
      "Booking workflows",
      "Operations architecture",
    ],
    challenge:
      "The agency’s public experience and internal operation needed to work as one connected system rather than a collection of disconnected tools and manual processes.",
    solution:
      "Muiz Rexhepi created a unified digital foundation spanning brand, website, booking journeys, travel inventory, and the operational workflows used by multiple agencies.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "One experience for a complex operation.",
        body:
          "Agim Tours manages far more than destination pages. Its teams coordinate hotels, tours, bookings, customers, and agency-level operations. The challenge was to make the public brand feel clear while giving the business a serious operational backbone.",
      },
      {
        eyebrow: "Customer experience",
        title: "Confidence before the journey.",
        body:
          "The public experience organizes destinations, accommodation, tours, and agency information around the questions travelers actually have. The visual direction gives the established company a more consistent and credible digital presence.",
      },
      {
        eyebrow: "Operations",
        title: "One system across every agency.",
        body:
          "Behind the website, the operational platform supports the workflows that keep the business moving: managing travel products, coordinating bookings, and maintaining visibility across multiple agencies and teams.",
      },
      {
        eyebrow: "Outcome",
        title: "Customers and operations, connected.",
        body:
          "The result is not a standalone marketing site. It is a connected business platform that improves how Agim Tours presents its offer, handles demand, and manages day-to-day travel operations.",
      },
    ],
    seoTitle: "Agim Tours Case Study | Travel Agency Platform",
    seoDescription:
      "Case study for Agim Tours: brand, travel website, booking experience, and multi-agency operations platform.",
  },
  {
    slug: "hakbus",
    name: "Hakbus",
    role: "Product engineering and platform development",
    period: "2022 — 2023",
    status: "Operational transport platform",
    clientType: "Transport operator",
    industry: "Transport / Ticketing",
    featured: true,
    headline: "A transport platform built for passengers and the operation behind them.",
    subheadline:
      "Web booking, mobile access, internal dashboards, and operator workflows designed as one connected ticketing service for a regional bus company.",
    summary: "Ticketing and transport operations, connected.",
    description:
      "For Hakbus, booking could not stop at a confirmation screen. Muiz Rexhepi worked across the passenger journey and the operational tools behind each trip, connecting web, mobile, and dashboards for transport operators.",
    liveUrl: "https://hakbus.org",
    liveLabel: "Visit Hakbus",
    logoImage: "/logos/hakbus.png",
    logoAlt: "Hakbus logo",
    logoImageClassName: "h-7 max-h-7",
    initials: "HB",
    visualTheme: "hakbus",
    coverImage: "/work/hakbus.webp",
    coverAlt: "Hakbus transport booking platform",
    heroImage: "/work/hakbus.webp",
    heroAlt: "Hakbus digital ticketing platform",
    galleryImages: [
      {
        src: "/work/hakbus/booking-flow.png",
        alt: "Hakbus route search and booking flow",
        type: "flow",
      },
      {
        src: "/work/hakbus/dashboard.png",
        alt: "Hakbus internal operator dashboard",
        type: "dashboard",
      },
    ],
    services: [
      "Product engineering",
      "Booking experience",
      "Mobile development",
      "Dashboard development",
      "Operational tooling",
    ],
    deliverables: [
      "Web booking experience",
      "Mobile app flows",
      "Internal dashboards",
      "Operator workflows",
      "Responsive interface system",
    ],
    categories: ["Booking", "Transport", "Mobile App", "Operations", "Client Work"],
    proof: ["100+ buses", "100k+ visitors", "Thousands of bookings"],
    metrics: [
      { value: "100+", label: "Buses", description: "Fleet in active operation" },
      { value: "100k+", label: "Visitors", description: "Proven public reach" },
      { value: "3", label: "Surfaces", description: "Web, mobile, and operations" },
    ],
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Analytics", "Booking systems"],
    challenge:
      "A high-volume transport operator needed reliable customer booking experiences and internal tools across several operational touchpoints.",
    solution:
      "Muiz Rexhepi connected passenger-facing mobile and web journeys with dashboards designed around the realities of transport operations.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "More than a brochure site.",
        body:
          "The platform had to support route discovery and passenger booking while giving internal teams practical views into the operation behind every journey.",
      },
      {
        eyebrow: "Product architecture",
        title: "One service across every screen.",
        body:
          "Customer journeys and operational workflows were treated as parts of the same product. Shared patterns helped keep booking clear for passengers and information useful for operators.",
      },
      {
        eyebrow: "Execution",
        title: "Designed for transport reality.",
        body:
          "The work focused on route clarity, responsive booking flows, operational visibility, and maintainable components capable of supporting real traffic and day-to-day use.",
      },
      {
        eyebrow: "Outcome",
        title: "A stronger operational foundation.",
        body:
          "Hakbus demonstrates how product design and engineering can improve both sides of an operational business: the customer experience and the system that delivers it.",
      },
    ],
    seoTitle: "Hakbus Case Study | Transport Booking Platform",
    seoDescription:
      "Case study for Hakbus, a multi-platform ticketing and transport operations system.",
  },
  {
    slug: "doros-premium",
    name: "Doros Premium",
    role: "E-commerce design and frontend development",
    period: "2025",
    status: "Live e-commerce website",
    clientType: "Swiss retail brand",
    industry: "Coffee / Retail",
    featured: true,
    headline: "Bringing a Swiss coffee brand into a new market with confidence.",
    subheadline:
      "A market-specific storefront for Macedonia, translating Doros Premium’s product quality into clear discovery, credible presentation, and a direct path to purchase.",
    summary: "Premium coffee, introduced to a new market.",
    description:
      "Entering Macedonia meant earning trust with customers who did not yet know the brand. Muiz Rexhepi adapted the Swiss positioning into a focused local storefront where the coffee range, product detail, and buying journey stay clear on every screen.",
    liveUrl: "https://dorospremium.com.mk",
    liveLabel: "Visit Doros Premium",
    logoImage: "/logos/doros.svg",
    logoAlt: "Doros Premium logo",
    logoImageClassName: "h-6 max-h-6",
    initials: "DP",
    visualTheme: "doros",
    coverImage: "/work/doros-premium.webp",
    coverAlt: "Doros Premium e-commerce website",
    heroImage: "/work/doros-premium.webp",
    heroAlt: "Doros Premium online storefront",
    galleryImages: [],
    services: ["Digital direction", "E-commerce UX", "Interface design", "Frontend development", "Launch support"],
    deliverables: ["Online storefront", "Product browsing", "Responsive pages", "SEO foundations", "Visual system"],
    categories: ["E-commerce", "Business Website", "Client Work"],
    proof: ["Swiss client", "New-market launch", "E-commerce platform"],
    metrics: [
      { value: "CH → MK", label: "Market", description: "Swiss brand, local launch" },
      { value: "Mobile-first", label: "Storefront", description: "Built for product discovery" },
      { value: "Live", label: "Commerce", description: "Public retail platform" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce UX", "Responsive design", "SEO"],
    challenge:
      "The brand needed to establish trust in a new market without losing the premium positioning of its product range.",
    solution:
      "Muiz Rexhepi translated the brand into a focused storefront with clear product hierarchy, strong mobile behavior, and a more credible path to purchase.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "Credibility in a new market.",
        body:
          "The website had to introduce the brand, explain the range, and create enough trust for customers encountering Doros Premium for the first time.",
      },
      {
        eyebrow: "Visual direction",
        title: "Let the product lead.",
        body:
          "A restrained layout, deliberate spacing, and clear product hierarchy gave the brand room to feel premium without adding unnecessary visual noise.",
      },
      {
        eyebrow: "Commerce",
        title: "Mobile-first product discovery.",
        body:
          "The browsing structure makes categories and product details easier to understand across devices, keeping the commercial journey direct and comfortable.",
      },
      {
        eyebrow: "Outcome",
        title: "Ready for market expansion.",
        body:
          "The final platform gives Doros Premium a consistent retail presence and a stronger foundation for product discovery and customer trust.",
      },
    ],
    seoTitle: "Doros Premium Case Study | E-commerce Website",
    seoDescription:
      "Case study for Doros Premium, a responsive coffee e-commerce website created for market expansion.",
  },
  {
    slug: "logly",
    name: "Logly",
    role: "Product strategy and mobile engineering",
    period: "2026 — Present",
    status: "Live iOS product",
    clientType: "Independent product",
    industry: "Health / AI / Nutrition",
    featured: true,
    headline: "Nutrition tracking without the repetitive data entry.",
    subheadline:
      "A production iOS app that turns natural-language meal descriptions into structured nutrition data, goals, and useful weekly insights.",
    summary: "AI nutrition tracking without the friction.",
    description:
      "Logly explores a faster model for everyday food tracking. Users describe a meal naturally; the product structures the information into calories and macros while maintaining the goals, insights, and account systems expected from a production health app.",
    liveUrl: "https://uselogly.app",
    liveLabel: "Visit Logly",
    logoImage: "/logos/logly.svg",
    logoAlt: "Logly logo",
    logoImageClassName: "h-7 max-h-7",
    initials: "L",
    visualTheme: "logly",
    coverImage: "/work/logly.webp",
    coverAlt: "Logly AI nutrition tracker",
    heroImage: "/work/logly.webp",
    heroAlt: "Logly iOS nutrition app",
    galleryImages: [],
    services: ["Product strategy", "Mobile UX", "iOS development", "AI integration", "Subscription architecture", "Analytics"],
    deliverables: ["iOS app", "AI meal logging", "Onboarding", "Subscriptions", "Apple Health sync", "Weekly insights"],
    categories: ["AI", "Mobile App"],
    proof: ["Live iOS app", "200+ users", "AI and Health sync"],
    metrics: [
      { value: "200+", label: "Users", description: "Registered accounts" },
      { value: "Live", label: "iOS", description: "Shipped to the App Store" },
      { value: "AI", label: "Logging", description: "Meals described naturally" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Convex", "RevenueCat", "Apple Health", "PostHog", "OpenAI"],
    challenge:
      "Traditional calorie tracking is too slow and repetitive for many users to maintain consistently.",
    solution:
      "Muiz Rexhepi designed and built an AI-first mobile workflow that turns plain-language meals into trackable nutrition data and connects it to a complete subscription product.",
    caseStudy: [
      {
        eyebrow: "Product problem",
        title: "Less friction in every log.",
        body:
          "Database search, weighing, and repeated manual input create friction exactly where a tracking product needs consistency. Logly starts with the way people already describe food.",
      },
      {
        eyebrow: "Core interaction",
        title: "Natural language becomes nutrition.",
        body:
          "The central flow converts a meal description into estimated calories, macros, and nutritional context, then lets the user review and continue without breaking momentum.",
      },
      {
        eyebrow: "Product system",
        title: "An AI feature becomes a product.",
        body:
          "Onboarding, goals, Apple Health context, subscriptions, analytics, Pro access, and weekly insights turn the core idea into a product that can operate and improve over time.",
      },
      {
        eyebrow: "Outcome",
        title: "Shipped to real users.",
        body:
          "Logly brings product strategy, mobile engineering, AI infrastructure, subscriptions, and analytics together in one continuously evolving product.",
      },
    ],
    seoTitle: "Logly Case Study | AI Nutrition Tracker",
    seoDescription:
      "Case study for Logly, an AI nutrition tracker with natural-language logging and Apple Health sync.",
  },
  {
    slug: "gobusly",
    name: "GoBusly",
    role: "Product strategy and platform development",
    period: "2025 — Present",
    status: "Live booking platform",
    clientType: "Independent product",
    industry: "Transport / Booking",
    featured: true,
    headline: "Making bus travel between the Balkans and Europe easier to book.",
    subheadline:
      "A focused booking marketplace where destination discovery, cross-border routes, payments, operator workflows, and traveler communication work as one system.",
    summary: "Cross-border bus travel, easier to book.",
    description:
      "GoBusly was created around a regional reality: cross-border routes are in demand, but the journey from finding a bus to holding a valid booking is often fragmented. Muiz Rexhepi brought discovery, payments, operators, and customer communication into one production platform.",
    liveUrl: "https://gobusly.com",
    liveLabel: "Visit GoBusly",
    logoImage: "/logos/gobusly.svg",
    logoAlt: "GoBusly logo",
    logoImageClassName: "h-7 max-h-7",
    initials: "GB",
    visualTheme: "gobusly",
    coverImage: "/work/gobusly.webp",
    coverAlt: "GoBusly booking platform",
    heroImage: "/work/gobusly.webp",
    heroAlt: "GoBusly route booking experience",
    galleryImages: [
      {
        src: "/work/gobusly/gobusly-home.png",
        alt: "GoBusly mobile route search experience",
        type: "mobile",
      },
      {
        src: "/work/gobusly/gobusly-search-web.png",
        alt: "GoBusly web trip search results",
        type: "desktop",
      },
      {
        src: "/work/gobusly/gobusly-checkout-web.png",
        alt: "GoBusly web passenger and checkout flow",
        type: "flow",
      },
    ],
    services: ["Product strategy", "Booking UX", "Platform development", "Payments", "Operator workflows", "SEO architecture"],
    deliverables: ["Booking platform", "Route pages", "Destination pages", "Payment flow", "Operator tools", "Email notifications"],
    categories: ["Booking", "Transport", "Operations"],
    proof: ["20k+ visitors", "Live operators", "Balkan–EU routes"],
    metrics: [
      { value: "20k+", label: "Visitors", description: "Measured platform traffic" },
      { value: "Live", label: "Bookings", description: "Real routes and operators" },
      { value: "Balkan ↔ EU", label: "Reach", description: "Cross-border coverage" },
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Resend", "SEO architecture"],
    challenge:
      "International bus booking in the region is fragmented across offline counters, phone calls, and inconsistent operator experiences.",
    solution:
      "Muiz Rexhepi built a destination-led booking platform that brings discovery, reservations, payments, operators, and customer communication into one system.",
    caseStudy: [
      {
        eyebrow: "Market problem",
        title: "A better cross-border booking journey.",
        body:
          "Travelers often move between operator websites, phone calls, and offline counters. GoBusly was shaped around making route discovery and booking feel more transparent.",
      },
      {
        eyebrow: "Platform",
        title: "Discovery and operations, connected.",
        body:
          "The customer journey connects destination content, route selection, booking, payment, and transactional email while operator workflows support the supply behind it.",
      },
      {
        eyebrow: "Booking",
        title: "Checkout without uncertainty.",
        body:
          "Passenger details, service options, trip context, and payment stay visible in one clear flow, reducing uncertainty before the booking is confirmed.",
      },
      {
        eyebrow: "Outcome",
        title: "A live regional booking marketplace.",
        body:
          "GoBusly combines product strategy, booking infrastructure, operator workflows, payments, and acquisition into one production platform.",
      },
    ],
    seoTitle: "GoBusly Case Study | Bus Booking Platform",
    seoDescription:
      "Case study for GoBusly, a booking platform for Balkan and European bus routes.",
  },
  {
    slug: "nextloop",
    name: "Nextloop",
    role: "Marketplace design and frontend development",
    period: "2025",
    status: "Luxury marketplace",
    clientType: "Swiss marketplace client",
    industry: "Luxury / Marketplace",
    featured: true,
    headline: "A Swiss luxury marketplace where presentation and bidding carry equal weight.",
    subheadline:
      "An editorial commerce experience that gives high-value objects room to feel considered while keeping auction status, pricing, timing, and bidding unmistakably clear.",
    summary: "Luxury commerce with auction clarity.",
    description:
      "Nextloop sits between two demanding experiences: a luxury storefront and a live marketplace. Muiz Rexhepi designed the responsive frontend so product provenance and imagery build desire while auction mechanics build confidence.",
    liveUrl: "https://nextloop.ch",
    liveLabel: "Visit Nextloop",
    logoImage: "/logos/nextloop.svg",
    logoAlt: "Nextloop logo",
    logoImageClassName: "h-8 max-h-8",
    initials: "NL",
    visualTheme: "nextloop",
    coverImage: "/work/nextloop.webp",
    coverAlt: "Nextloop luxury marketplace",
    heroImage: "/work/nextloop.webp",
    heroAlt: "Nextloop auction and marketplace experience",
    galleryImages: [],
    services: ["Marketplace UX", "Interface design", "Frontend development", "Auction UX", "Responsive design"],
    deliverables: ["Marketplace website", "Product browsing", "Auction flows", "Bidding experience", "Responsive frontend"],
    categories: ["Marketplace", "E-commerce", "Client Work"],
    proof: ["Swiss client", "Luxury marketplace", "Live auction flows"],
    metrics: [
      { value: "Swiss", label: "Market", description: "A high-trust context" },
      { value: "Live", label: "Auctions", description: "Clear real-time bidding" },
      { value: "Luxury", label: "Positioning", description: "Editorial product focus" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Marketplace UX", "Auction flows", "Responsive design"],
    challenge:
      "The platform had to feel premium and trustworthy while still making complex auction actions easy to understand.",
    solution:
      "Muiz Rexhepi balanced editorial product presentation with clear marketplace patterns for browsing, evaluation, bidding, and responsive use.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "Luxury needs room to breathe.",
        body:
          "The marketplace needed enough restraint to let each item feel considered while preserving the information and actions buyers need to make a decision.",
      },
      {
        eyebrow: "Experience",
        title: "Editorial polish, commercial clarity.",
        body:
          "Layouts use hierarchy and space to support high-end imagery, while consistent interaction patterns keep browsing and evaluation straightforward.",
      },
      {
        eyebrow: "Interaction",
        title: "Every bid stays clear.",
        body:
          "Bidding requires clear status, timing, price, and action feedback. Those signals were treated as core product information rather than secondary interface details.",
      },
      {
        eyebrow: "Outcome",
        title: "Brand and transaction, balanced.",
        body:
          "Nextloop shows how a strong visual system can support complex commerce without compromising clarity or credibility.",
      },
    ],
    seoTitle: "Nextloop Case Study | Luxury Marketplace",
    seoDescription:
      "Case study for Nextloop, a Swiss luxury marketplace with auctions and bidding workflows.",
  },
  {
    slug: "speaksure",
    name: "SpeakSure",
    role: "Product strategy and mobile engineering",
    period: "2026 — Present",
    status: "Live iOS product",
    clientType: "Independent product",
    industry: "AI / Communication",
    featured: true,
    headline: "Practice difficult conversations with feedback that helps.",
    subheadline:
      "An AI speaking coach combining voice recording, transcription, structured feedback, scoring, and repeatable practice scenarios.",
    summary: "Practice difficult conversations with AI feedback.",
    description:
      "SpeakSure gives users a private practice loop before high-pressure conversations. The product records and transcribes an answer, then returns structured feedback and a clearer rewritten response.",
    liveUrl: "https://speaksure.app",
    liveLabel: "Visit SpeakSure",
    logoImage: "/logos/speaksure.svg",
    logoAlt: "SpeakSure logo",
    logoImageClassName: "h-7 max-h-7",
    initials: "S",
    visualTheme: "speaksure",
    coverImage: "/work/speaksure.webp",
    coverAlt: "SpeakSure AI communication coach",
    heroImage: "/work/speaksure.webp",
    heroAlt: "SpeakSure iOS practice experience",
    galleryImages: [],
    services: ["Product strategy", "Mobile UX", "iOS development", "AI audio workflows", "Subscription architecture"],
    deliverables: ["iOS app", "Voice recording", "Transcription", "AI feedback", "Scenario library", "Drill history"],
    categories: ["AI", "Mobile App"],
    proof: ["Live iOS app", "AI voice feedback", "Subscription-ready"],
    metrics: [
      { value: "Voice", label: "Practice", description: "Speak naturally" },
      { value: "AI", label: "Coaching", description: "Feedback and rewrites" },
      { value: "Live", label: "iOS", description: "Production mobile app" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Convex", "RevenueCat", "PostHog", "Deepgram", "OpenAI"],
    challenge:
      "People rarely receive useful feedback before the interviews, negotiations, and leadership conversations where communication matters most.",
    solution:
      "Muiz Rexhepi built a repeatable mobile practice loop combining voice capture, transcription, scoring, AI coaching, and subscription-aware access.",
    caseStudy: [
      {
        eyebrow: "Product problem",
        title: "Practice needs useful feedback.",
        body:
          "Interviews, negotiations, and leadership updates carry real consequences, but most preparation happens alone. SpeakSure turns that rehearsal into a structured practice session.",
      },
      {
        eyebrow: "Core interaction",
        title: "Record. Understand. Improve. Repeat.",
        body:
          "A voice answer becomes a transcript, scores, specific feedback, and a stronger rewritten response. The loop is designed to make improvement concrete rather than abstract.",
      },
      {
        eyebrow: "Product system",
        title: "Coaching built for real scenarios.",
        body:
          "Onboarding, drill history, analytics, Pro-aware access, and a growing scenario library support repeated use beyond a single AI interaction.",
      },
      {
        eyebrow: "Outcome",
        title: "AI designed for behavior change.",
        body:
          "SpeakSure brings audio processing, AI feedback, mobile UX, and subscription infrastructure together around a clear user outcome: communicating with more confidence.",
      },
    ],
    seoTitle: "SpeakSure Case Study | AI Speaking Coach",
    seoDescription:
      "Case study for SpeakSure, an AI speaking coach with voice recording, transcription, and feedback.",
  },
  {
    slug: "am-gebaeudereinigung",
    name: "AM Gebäudereinigung",
    role: "Business website and CMS development",
    period: "2022",
    status: "Live client website",
    clientType: "German service business",
    industry: "Cleaning services",
    featured: true,
    headline: "Turning a Hamburg cleaning company’s services into a clearer sales journey.",
    subheadline:
      "A responsive, CMS-backed website that organizes the company’s commercial cleaning offer around customer intent and makes inquiry the natural next step.",
    summary: "A clearer digital front door for commercial cleaning.",
    description:
      "For AM Gebäudereinigung, credibility depended on being specific: what gets cleaned, who the service is for, and how to request an offer. Muiz Rexhepi rebuilt that journey and paired it with a headless CMS the company could maintain without developer support.",
    liveUrl: "https://www.amgebaeudereinigung.hamburg/",
    liveLabel: "Visit website",
    logoImage: "/logos/am.svg",
    logoAlt: "AM Gebäudereinigung logo",
    logoImageClassName: "h-8 max-h-8",
    initials: "AM",
    visualTheme: "am",
    coverImage: "/work/am.webp",
    coverAlt: "AM Gebäudereinigung website",
    heroImage: "/work/am.webp",
    heroAlt: "AM Gebäudereinigung headless CMS website",
    galleryImages: [],
    services: ["Content strategy", "Interface design", "Frontend development", "Headless CMS", "SEO foundations"],
    deliverables: ["Business website", "Service pages", "Headless CMS", "Responsive frontend", "Lead-generation flow"],
    categories: ["Business Website", "CMS", "Client Work"],
    proof: ["Hamburg client", "Headless CMS", "Lead-generation website"],
    metrics: [
      { value: "Headless", label: "CMS", description: "Client-managed content" },
      { value: "Lead-focused", label: "Journey", description: "Clear inquiry paths" },
      { value: "Live", label: "Website", description: "Running in production" },
    ],
    stack: ["Next.js", "Tailwind CSS", "Headless CMS", "SEO", "Responsive design"],
    challenge:
      "The business needed a more credible web presence and a practical way to keep service content current.",
    solution:
      "Muiz Rexhepi organized the offer around customer intent, built a responsive frontend, and connected it to a manageable content system.",
    caseStudy: [
      {
        eyebrow: "The brief",
        title: "Clarity builds trust.",
        body:
          "The existing digital presence did not communicate the range or quality of the company’s services clearly enough for prospective customers.",
      },
      {
        eyebrow: "Structure",
        title: "Services shaped around customer intent.",
        body:
          "Pages were structured around the work customers search for, with direct information and clearer paths to inquiry across screen sizes.",
      },
      {
        eyebrow: "Operations",
        title: "Content updates, without the overhead.",
        body:
          "The content system allows the business to maintain key service information without turning every change into a development task.",
      },
      {
        eyebrow: "Outcome",
        title: "A clearer path to inquiry.",
        body:
          "The finished system gives prospective customers a clearer view of the offer while giving the business practical control over the content supporting it.",
      },
    ],
    seoTitle: "AM Gebäudereinigung Case Study | Business Website",
    seoDescription:
      "Case study for a CMS-backed service website created for AM Gebäudereinigung in Hamburg.",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Custom Software",
  "Hospitality",
  "Travel",
  "Operations",
  "Booking",
  "Transport",
  "E-commerce",
  "Marketplace",
  "AI",
  "Mobile App",
  "Business Website",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getHomepageProjects() {
  return projects.filter((project) => project.homepageFeatured);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.categories.includes(category));
}

export function getRelatedProjects(slug: string, limit = 2) {
  const currentProject = getProject(slug);

  if (!currentProject) return [];

  return projects
    .filter((project) => project.slug !== slug)
    .filter((project) =>
      project.categories.some((category) =>
        currentProject.categories.includes(category),
      ),
    )
    .slice(0, limit);
}

export function getNextProject(slug: string) {
  const featuredProjects = getFeaturedProjects();
  const currentIndex = featuredProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (currentIndex === -1 || featuredProjects.length < 2) return null;

  return featuredProjects[(currentIndex + 1) % featuredProjects.length];
}
