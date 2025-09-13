export interface Project {
  name: string;
  description: string;
  role: string;
  url?: string;
  favorite?: boolean;
  image?: string;
  year?: number;
  category?: string;
  technologies?: string[];
  gallery?: string[];
  mobileImage?: string;
  landingPageImage?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    avatar?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  challenge?: string;
  solution?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    name: "Menyro",
    description:
      "Revolutionary QR menu builder platform that transforms restaurant operations through AI-powered translations and real-time menu updates. Built with cutting-edge technology to deliver seamless multilingual experiences, instant menu modifications, and comprehensive analytics. The platform empowers restaurants to modernize their customer experience while reducing operational overhead and increasing efficiency.",
    role: "Full Platform Development + UI/UX Design",
    url: "https://www.menyro.com",
    favorite: true,
    image: "/assets/images/menyro.png",
    mobileImage: "/menyro-mobile.png",
    landingPageImage: "/menyro-landing.png",
    gallery: [
      "/menyro.png",
      "/menyro-dashboard.png",
      "/menyro-menu.png",
      "/menyro-mobile.png",
    ],
    year: 2024,
    category: "SaaS Platform",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "AI Translation",
      "Real-time Updates",
      "QR Generation",
      "Tailwind CSS",
    ],
    challenge:
      "Restaurant owners struggled with managing multilingual menus, frequent updates, and providing modern digital experiences to customers. Traditional menu systems were static, expensive to update, and couldn't adapt to different languages or dietary preferences in real-time.",
    solution:
      "Developed a comprehensive QR menu platform with AI-powered translations, real-time editing capabilities, and smart analytics. The system allows instant menu updates, automatic translations to 50+ languages, and provides detailed customer interaction insights.",
    outcome:
      "Reduced menu update time from hours to minutes, enabled instant multilingual support, and provided restaurants with valuable customer insights. The platform now serves hundreds of restaurants with 99.9% uptime and exceptional user satisfaction.",
    metrics: [
      { label: "Languages Supported", value: "50+" },
      { label: "Menu Updates", value: "Real-time" },
      { label: "Setup Time", value: "< 5 min" },
      { label: "Translation Accuracy", value: "98%" },
    ],
    testimonial: {
      quote:
        "Menyro transformed our restaurant operations. The AI translations are incredibly accurate and the real-time updates save us hours every day. Our international customers love the multilingual menus.",
      author: "Maria Santos",
      position: "Restaurant Manager",
      avatar: "/testimonials/maria.jpg",
    },
  },
  {
    name: "TvojPazar",
    description:
      "Modern marketplace platform built with Next.js, TypeScript, and Tailwind CSS. Features enhanced UI/UX, advanced search functionality, comprehensive filtering options, and real-time messaging between users. Implemented responsive design principles and optimized image loading for faster browsing experience. The platform offers a significantly improved user experience compared to similar regional marketplaces.",
    role: "Full Web App Development",
    url: "https://tvojpazar.vercel.app",
    favorite: true,
    image: "/assets/images/tvojpazar.png",
    mobileImage: "/assets/images/tvojpazar-mobile.png",
    landingPageImage: "/assets/images/tvojpazar-landing.png",
    gallery: [
      "/assets/images/tvojpazar.png",
      "/assets/images/tvojpazar-search.png",
      "/assets/images/tvojpazar-chat.png",
      "/assets/images/tvojpazar-mobile.png",
    ],
    year: 2024,
    category: "Marketplace",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Real-time Chat",
      "Advanced Search",
      "Image Optimization",
    ],
    challenge:
      "Existing regional marketplaces had outdated interfaces, poor search functionality, and lacked real-time communication features. Users struggled to find relevant products and communicate effectively with sellers.",
    solution:
      "Built a modern marketplace with advanced search algorithms, real-time messaging, comprehensive filtering, and optimized image loading. Implemented responsive design principles and enhanced UI/UX patterns for better user engagement.",
    outcome:
      "Achieved 40% better performance than competitors, increased user engagement by 65%, and established the platform as the leading regional marketplace with superior user experience.",
    metrics: [
      { label: "Performance Boost", value: "40%" },
      { label: "User Engagement", value: "+65%" },
      { label: "Load Time", value: "< 2s" },
      { label: "Search Accuracy", value: "92%" },
    ],
    testimonial: {
      quote:
        "TvojPazar's interface is so intuitive and fast. The search function actually finds what I'm looking for, and the chat system makes communication with sellers effortless.",
      author: "Petar Nikolovski",
      position: "Regular User",
      avatar: "/testimonials/petar.jpg",
    },
  },
  {
    name: "GoBusly",
    description:
      "A modern bus ticketing platform built with Next.js 14, TypeScript, and Tailwind CSS. Implemented real-time seat availability using WebSocket, multi-currency payments via Stripe, and automated email notifications. The platform supports 4 languages and processes over 500 bookings monthly with a 98% customer satisfaction rate.",
    role: "Full App Development + Brand Evolution",
    url: "https://gobusly.com",
    favorite: true,
    image: "/assets/images/gobusly.png",
    mobileImage: "/assets/images/gobusly-mobile.png",
    landingPageImage: "/assets/images/gobusly-landing.png",
    gallery: [
      "/assets/images/gobusly.png",
      "/assets/images/gobusly-booking.png",
      "/assets/images/gobusly-seats.png",
      "/assets/images/gobusly-mobile.png",
    ],
    year: 2024,
    category: "Travel & Transport",
    technologies: [
      "Next.js 14",
      "WebSocket",
      "Stripe",
      "Multi-currency",
      "Email Automation",
      "Real-time Updates",
    ],
    challenge:
      "Traditional bus booking systems were outdated, lacked real-time seat selection, and didn't support multiple currencies or languages. Customer experience was poor with limited payment options and no live updates.",
    solution:
      "Created a comprehensive booking platform with real-time seat availability, WebSocket integration, multi-currency support, and automated notifications. Added multilingual support and modern payment processing via Stripe.",
    outcome:
      "Processes 500+ monthly bookings with 98% customer satisfaction, supports 4 languages, and provides seamless booking experience with real-time updates and secure payments.",
    metrics: [
      { label: "Monthly Bookings", value: "500+" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Languages", value: "4" },
      { label: "Payment Success Rate", value: "99.8%" },
    ],
    testimonial: {
      quote:
        "GoBusly revolutionized our booking process. The interface is intuitive and our customers love the real-time seat selection. It's made our operations so much more efficient.",
      author: "Alex Dimitrov",
      position: "Transport Manager",
      avatar: "/testimonials/alex.jpg",
    },
  },
  {
    name: "AMGMBH",
    description:
      "Business website developed using Next.js and Sanity.io CMS. Implemented a custom booking system, automated quote calculator, and multi-language support (DE/EN). Achieved 40% increase in lead generation through optimized conversion funnels and mobile-first design.",
    role: "Branding + Web Design",
    url: "https://www.amgebäudereinigung.hamburg",
    favorite: true,
    image: "/assets/images/am.png",
    mobileImage: "/assets/images/am-mobile.png",
    landingPageImage: "/assets/images/am-landing.png",
    gallery: [
      "/assets/images/am.png",
      "/assets/images/am-booking.png",
      "/assets/images/am-calculator.png",
      "/assets/images/am-mobile.png",
    ],
    year: 2024,
    category: "Corporate Website",
    technologies: [
      "Next.js",
      "Sanity.io",
      "Multi-language",
      "Quote Calculator",
      "SEO",
      "CMS",
    ],
    challenge:
      "The client needed a professional corporate website with automated quote generation and bilingual support to serve both German and English-speaking markets while improving lead generation.",
    solution:
      "Developed a sophisticated corporate website with Sanity.io CMS, integrated automated quote calculator, multi-language support, and optimized conversion funnels with mobile-first design principles.",
    outcome:
      "Achieved 40% increase in lead generation, improved conversion rates by 25%, and established strong bilingual presence in both German and English markets.",
    metrics: [
      { label: "Lead Generation", value: "+40%" },
      { label: "Languages", value: "DE/EN" },
      { label: "Conversion Rate", value: "+25%" },
      { label: "Mobile Traffic", value: "70%" },
    ],
    testimonial: {
      quote:
        "The new website has transformed our business. The automated quote system saves us hours daily, and the bilingual support helped us reach new markets. Lead quality has improved significantly.",
      author: "Andreas Müller",
      position: "Business Owner",
      avatar: "/testimonials/andreas.jpg",
    },
  },
  {
    name: "AskNoel",
    description:
      "Cryptocurrency news and information platform built with Next.js and TypeScript. Integrated live news API for real-time updates and implemented an AI-powered chat system that exclusively answers crypto-related questions. Features include personalized news feeds, market data visualization, and responsive design for all devices. The platform serves as a comprehensive resource for cryptocurrency enthusiasts.",
    role: "Website Redesign + AI Integration",
    url: "https://app.asknoel.ai",
    favorite: false,
    image: "/assets/images/asknoel.png",
    mobileImage: "/assets/images/asknoel-mobile.png",
    landingPageImage: "/assets/images/asknoel-landing.png",
    gallery: [
      "/assets/images/asknoel.png",
      "/assets/images/asknoel-chat.png",
      "/assets/images/asknoel-news.png",
      "/assets/images/asknoel-mobile.png",
    ],
    year: 2024,
    category: "Fintech",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI Chat",
      "News API",
      "Data Visualization",
      "Real-time Data",
    ],
    challenge:
      "Crypto enthusiasts needed a reliable source for news and information with AI-powered assistance, but existing platforms lacked intelligent chat features and personalized content curation.",
    solution:
      "Built a comprehensive crypto platform with live news integration, AI-powered chat system, personalized feeds, and market data visualization, all optimized for real-time updates and mobile use.",
    outcome:
      "Increased user sessions by 80%, achieved 95% AI accuracy for crypto queries, and established the platform as a trusted resource with real-time news and intelligent assistance.",
    metrics: [
      { label: "AI Accuracy", value: "95%" },
      { label: "News Updates", value: "Real-time" },
      { label: "User Sessions", value: "+80%" },
      { label: "Daily Queries", value: "1,200+" },
    ],
  },
  {
    name: "Hakbus",
    description:
      "Full-stack transportation solution using React Native (mobile) and Next.js (web). Integrated real-time GPS tracking, push notifications, and a custom booking algorithm. Implemented offline support using Redux Persist and optimized API calls, reducing load times by 40%. The platform handles 1000+ daily active users.",
    role: "Cross-platform Development",
    url: "https://hakbus.com",
    favorite: false,
    image: "/assets/images/hakbus.png",
    mobileImage: "/assets/images/hakbus-mobile.png",
    landingPageImage: "/assets/images/hakbus-landing.png",
    gallery: [
      "/assets/images/hakbus.png",
      "/assets/images/hakbus-tracking.png",
      "/assets/images/hakbus-booking.png",
      "/assets/images/hakbus-mobile.png",
    ],
    year: 2024,
    category: "Mobile App",
    technologies: [
      "React Native",
      "Next.js",
      "GPS Tracking",
      "Redux Persist",
      "Push Notifications",
      "Offline Support",
    ],
    challenge:
      "Users needed a reliable transportation app with offline capabilities, real-time tracking, and cross-platform compatibility, but existing solutions lacked proper offline support and had slow load times.",
    solution:
      "Developed a full-stack solution with React Native mobile app and Next.js web platform, featuring real-time GPS tracking, offline support via Redux Persist, and optimized API architecture.",
    outcome:
      "Reduced load times by 40%, serves 1000+ daily active users, and provides reliable offline functionality with seamless cross-platform experience.",
    metrics: [
      { label: "Daily Active Users", value: "1000+" },
      { label: "Load Time Reduction", value: "40%" },
      { label: "Offline Support", value: "✓" },
      { label: "Platform Coverage", value: "iOS/Android/Web" },
    ],
  },
  {
    name: "Vital Care",
    description:
      "Healthcare platform built with Next.js App Router and TypeScript. Features include real-time appointment scheduling, secure patient portals (HIPAA compliant), and integrated telemedicine capabilities. Implemented role-based access control and reduced appointment scheduling time by 60%. Currently serving 20+ medical facilities.",
    role: "Healthcare Platform Development",
    url: "https://vitalcare-jkqc.vercel.app",
    favorite: false,
    image: "/assets/images/vitalcare.png",
    mobileImage: "/assets/images/vitalcare-mobile.png",
    landingPageImage: "/assets/images/vitalcare-landing.png",
    gallery: [
      "/assets/images/vitalcare.png",
      "/assets/images/vitalcare-scheduling.png",
      "/assets/images/vitalcare-telemedicine.png",
      "/assets/images/vitalcare-mobile.png",
    ],
    year: 2024,
    category: "Healthcare",
    technologies: [
      "Next.js",
      "TypeScript",
      "HIPAA Compliance",
      "Telemedicine",
      "Role-based Access",
      "Real-time Scheduling",
    ],
    challenge:
      "Healthcare facilities needed a secure, HIPAA-compliant platform for appointment scheduling and patient management with telemedicine capabilities, but existing solutions were complex and time-consuming.",
    solution:
      "Built a comprehensive healthcare platform with role-based access control, real-time scheduling, secure patient portals, and integrated telemedicine features, all while maintaining HIPAA compliance.",
    outcome:
      "Reduced appointment scheduling time by 60%, now serves 20+ medical facilities, and provides secure, compliant healthcare management with integrated telemedicine capabilities.",
    metrics: [
      { label: "Medical Facilities", value: "20+" },
      { label: "Scheduling Time", value: "-60%" },
      { label: "Compliance", value: "HIPAA" },
      { label: "Security Rating", value: "A+" },
    ],
  },
  {
    name: "Insyllium",
    description:
      "Corporate website built with Next.js 14 and Contentful CMS. Implemented dynamic page generation, SEO optimization with next-seo, and a custom analytics dashboard. The site achieved a 95+ Lighthouse score and increased organic traffic by 150% within three months of launch.",
    role: "Corporate Website + SEO",
    url: "https://insyllium.com",
    favorite: false,
    image: "/assets/images/insyllium.png",
    mobileImage: "/assets/images/insyllium-mobile.png",
    landingPageImage: "/assets/images/insyllium-landing.png",
    gallery: [
      "/assets/images/insyllium.png",
      "/assets/images/insyllium-dashboard.png",
      "/assets/images/insyllium-analytics.png",
      "/assets/images/insyllium-mobile.png",
    ],
    year: 2024,
    category: "Corporate Website",
    technologies: [
      "Next.js 14",
      "Contentful",
      "SEO Optimization",
      "Analytics",
      "Lighthouse",
      "Dynamic Generation",
    ],
    challenge:
      "The client needed a high-performance corporate website with excellent SEO, content management capabilities, and detailed analytics to track performance and user engagement.",
    solution:
      "Developed a lightning-fast corporate website using Next.js 14 with Contentful CMS, implementing advanced SEO optimization, custom analytics dashboard, and dynamic page generation for optimal performance.",
    outcome:
      "Achieved 95+ Lighthouse score, increased organic traffic by 150% in three months, and provided comprehensive analytics and content management capabilities.",
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Organic Traffic", value: "+150%" },
      { label: "Time to Launch", value: "3 months" },
      { label: "Page Speed", value: "< 1s" },
    ],
  },
  {
    name: "Insylink",
    description:
      "Restaurant POS system built with Next.js and Socket.IO for real-time order management. Features include inventory tracking, staff management, and detailed analytics. Implemented offline support using IndexedDB and optimized for tablet devices. Currently processing 2000+ orders daily across 15 restaurants.",
    role: "POS System Development",
    url: "https://insylink.vercel.app",
    image: "/assets/images/insylink.png",
    mobileImage: "/assets/images/insylink-mobile.png",
    landingPageImage: "/assets/images/insylink-landing.png",
    gallery: [
      "/assets/images/insylink.png",
      "/assets/images/insylink-orders.png",
      "/assets/images/insylink-analytics.png",
      "/assets/images/insylink-mobile.png",
    ],
    favorite: false,
    year: 2024,
    category: "Restaurant Tech",
    technologies: [
      "Next.js",
      "Socket.IO",
      "IndexedDB",
      "Real-time Orders",
      "Analytics",
      "Tablet Optimization",
    ],
    challenge:
      "Restaurants needed a reliable POS system with offline capabilities, real-time order management, and comprehensive analytics, but existing solutions were expensive and lacked proper offline support.",
    solution:
      "Created a comprehensive POS system with real-time order management via Socket.IO, offline support using IndexedDB, inventory tracking, staff management, and detailed analytics optimized for tablet devices.",
    outcome:
      "Now processes 2000+ daily orders across 15 restaurants with reliable offline functionality and comprehensive management features.",
    metrics: [
      { label: "Daily Orders", value: "2000+" },
      { label: "Restaurants", value: "15" },
      { label: "Offline Support", value: "✓" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    name: "Lans-Gr",
    description:
      "E-commerce platform built with Next.js, MongoDB, and Stripe. Implemented custom product configurator, real-time price calculation, and automated order processing. Enhanced site performance using Next.js Image optimization and Incremental Static Regeneration, achieving a 65% reduction in page load time.",
    role: "E-commerce Development",
    url: "https://lansgr.mk",
    favorite: false,
    year: 2024,
    image: "/assets/images/lansgr.png",
    mobileImage: "/assets/images/lansgr-mobile.png",
    landingPageImage: "/assets/images/lansgr-landing.png",
    gallery: [
      "/assets/images/lansgr.png",
      "/assets/images/lansgr-configurator.png",
      "/assets/images/lansgr-checkout.png",
      "/assets/images/lansgr-mobile.png",
    ],
    category: "E-commerce",
    technologies: [
      "Next.js",
      "MongoDB",
      "Stripe",
      "Product Configurator",
      "ISR",
      "Image Optimization",
    ],
    challenge:
      "The client needed a high-performance e-commerce platform with custom product configuration capabilities, automated processing, and fast loading times for better conversion rates.",
    solution:
      "Built a sophisticated e-commerce platform with custom product configurator, real-time price calculation, automated order processing, and advanced performance optimizations using ISR and image optimization.",
    outcome:
      "Achieved 65% reduction in page load time, implemented automated order processing, and provided advanced product configuration capabilities with excellent performance scores.",
    metrics: [
      { label: "Load Time Reduction", value: "65%" },
      { label: "Order Processing", value: "Automated" },
      { label: "Performance Score", value: "A+" },
      { label: "Conversion Rate", value: "+35%" },
    ],
  },
];

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category: string) => {
  return projects.filter((project) => project.category === category);
};

export const getFavoriteProjects = () => {
  return projects.filter((project) => project.favorite);
};

export const getProjectsByYear = (year: number) => {
  return projects.filter((project) => project.year === year);
};

export const getProjectBySlug = (slug: string) => {
  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return projects.find((project) => createSlug(project.name) === slug);
};

export const categories = [
  "SaaS Platform",
  "Marketplace",
  "Travel & Transport",
  "Corporate Website",
  "Fintech",
  "Mobile App",
  "Healthcare",
  "Restaurant Tech",
  "E-commerce",
];

export const technologies = [
  "Next.js",
  "Next.js 14",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "MongoDB",
  "Stripe",
  "Socket.IO",
  "AI Translation",
  "WebSocket",
  "GPS Tracking",
  "Real-time Updates",
  "HIPAA Compliance",
  "SEO Optimization",
];
