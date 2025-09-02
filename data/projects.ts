export interface Project {
  name: string;
  description: string;
  role: string;
  url?: string;
  favorite?: boolean;
  image?: string; // Added image property
}

export const projects: Project[] = [
  {
    name: "TvojPazar",
    description:
      "Modern marketplace platform built with Next.js, TypeScript, and Tailwind CSS. Features enhanced UI/UX, advanced search functionality, comprehensive filtering options, and real-time messaging between users. Implemented responsive design principles and optimized image loading for faster browsing experience. The platform offers a significantly improved user experience compared to similar regional marketplaces.",
    role: "Full Web App Development",
    url: "https://tvojpazar.vercel.app",
    favorite: true,
    image: "/assets/images/tvojpazar.png", // Added image here
  },
  {
    name: "AskNoel",
    description:
      "Cryptocurrency news and information platform built with Next.js and TypeScript. Integrated live news API for real-time updates and implemented an AI-powered chat system that exclusively answers crypto-related questions. Features include personalized news feeds, market data visualization, and responsive design for all devices. The platform serves as a comprehensive resource for cryptocurrency enthusiasts.",
    role: "Website Redesign",
    url: "https://app.asknoel.ai",
    favorite: false,
  },
  {
    name: "GoBusly",
    description:
      "A modern bus ticketing platform built with Next.js 14, TypeScript, and Tailwind CSS. Implemented real-time seat availability using WebSocket, multi-currency payments via Stripe, and automated email notifications. The platform supports 4 languages and processes over 500 bookings monthly with a 98% customer satisfaction rate.",
    role: "Full App Development + Brand Evolution",
    url: "https://gobusly.com",
    favorite: true,
    image: "/assets/images/gobusly.png", // Added image here
  },
  {
    name: "Hakbus",
    description:
      "Full-stack transportation solution using React Native (mobile) and Next.js (web). Integrated real-time GPS tracking, push notifications, and a custom booking algorithm. Implemented offline support using Redux Persist and optimized API calls, reducing load times by 40%. The platform handles 1000+ daily active users.",
    role: "Website Redesign",
    url: "https://hakbus.com",
    favorite: false,
  },
  {
    name: "Vital Care",
    description:
      "Healthcare platform built with Next.js App Router and TypeScript. Features include real-time appointment scheduling, secure patient portals (HIPAA compliant), and integrated telemedicine capabilities. Implemented role-based access control and reduced appointment scheduling time by 60%. Currently serving 20+ medical facilities.",
    role: "Website Redesign",
    url: "https://vitalcare-jkqc.vercel.app",
    favorite: false,
  },
  {
    name: "Insyllium",
    description:
      "Corporate website built with Next.js 14 and Contentful CMS. Implemented dynamic page generation, SEO optimization with next-seo, and a custom analytics dashboard. The site achieved a 95+ Lighthouse score and increased organic traffic by 150% within three months of launch.",
    role: "Website Redesign",
    url: "https://insyllium.com",
    favorite: false,
    image: "/insyllium-preview.jpg", // Added image here
  },
  {
    name: "Insylink",
    description:
      "Restaurant POS system built with Next.js and Socket.IO for real-time order management. Features include inventory tracking, staff management, and detailed analytics. Implemented offline support using IndexedDB and optimized for tablet devices. Currently processing 2000+ orders daily across 15 restaurants.",
    role: "Full Web App Development",
    url: "https://insylink.vercel.app",
    favorite: false,
  },
  {
    name: "AMGMBH",
    description:
      "Business website developed using Next.js and Sanity.io CMS. Implemented a custom booking system, automated quote calculator, and multi-language support (DE/EN). Achieved 40% increase in lead generation through optimized conversion funnels and mobile-first design.",
    role: "Branding + Web Design",
    url: "https://www.amgebäudereinigung.hamburg",
    favorite: true,
    image: "/assets/images/am.png", // Added image here
  },
  {
    name: "Lans-Gr",
    description:
      "E-commerce platform built with Next.js, MongoDB, and Stripe. Implemented custom product configurator, real-time price calculation, and automated order processing. Enhanced site performance using Next.js Image optimization and Incremental Static Regeneration, achieving a 65% reduction in page load time.",
    role: "Full Web App Development",
    url: "https://lansgr.vercel.app",
    favorite: false,
  },
];
