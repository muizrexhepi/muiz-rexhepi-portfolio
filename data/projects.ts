export interface Project {
  name: string;
  description: string;
  clientDescription: string;
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
    name: "GoBusly",
    description:
      "A market-leading bus booking platform that has successfully scaled to thousands of daily active users. GoBusly offers a seamless travel booking experience with features like real-time seat selection, multi-currency payments, and support for 7 languages.",
    clientDescription:
      "A popular bus booking platform that allows thousands of customers to search routes, select seats in real-time, and pay securely online. Designed for international travelers with multi-currency support.",
    role: "Full-Stack Development & Branding",
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
      "Next.js",
      "TypeScript",
      "Stripe",
      "WebSocket",
      "Email Automation",
    ],
    challenge:
      "The Balkan bus travel market lacked a user-friendly platform that could handle complex routes, real-time availability, and diverse payment needs for a pan-continental audience.",
    solution:
      "Built a highly scalable and reliable booking engine from the ground up. The platform's architecture is designed for high-traffic, ensuring a fast and smooth experience for thousands of concurrent users, even during peak booking seasons.",
    outcome:
      "Grew to over 2,500 monthly active users and has processed over 5,000 bookings to date. GoBusly maintains a 4.8/5 star user satisfaction rating and has become a go-to platform for bus travel in its core markets.",
    metrics: [
      { label: "Monthly Active Users", value: "2,500+" },
      { label: "Total Bookings", value: "5000+" },
      { label: "User Satisfaction", value: "4.8/5 Stars" },
      { label: "Payment Success", value: "99.8%" },
    ],
    testimonial: {
      quote:
        "GoBusly made online bookings possible for our bus company. Customers love the seat selection feature and we've reduced booking errors to nearly zero.",
      author: "Alex Dimitrov",
      position: "Transport Manager",
      avatar: "/testimonials/alex.jpg",
    },
  },
  {
    name: "Menyro",
    description:
      "A revolutionary SaaS platform for restaurants that digitizes menus via QR codes. Menyro boosts operational efficiency and enhances the guest experience with instant AI translations and real-time menu updates.",
    clientDescription:
      "A QR menu platform for restaurants that eliminates printing costs and language barriers. Restaurant owners can update menus instantly and serve international customers with automatic translations to 50+ languages.",
    role: "Full-Stack Development & Design",
    url: "https://www.menyro.com",
    favorite: true,
    image: "/assets/images/menyro.png",
    mobileImage: "/assets/images/menyro-mobile.png",
    landingPageImage: "/assets/images/menyro-landing.png",
    gallery: [
      "/assets/images/menyro.png",
      "/assets/images/menyro-dashboard.png",
      "/assets/images/menyro-menu.png",
      "/assets/images/menyro-mobile.png",
    ],
    year: 2024,
    category: "SaaS Platform",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI Translation",
      "Real-time Updates",
      "QR Generation",
    ],
    challenge:
      "Restaurants struggle with the high costs of reprinting menus and the difficulty of serving international customers. Making quick changes to daily specials or pricing was an inefficient, manual process.",
    solution:
      "Created a subscription-based platform where restaurant owners can manage their digital menu from a simple dashboard. The system features an AI engine for instant, accurate translations and real-time updates that reflect immediately on the customer's device.",
    outcome:
      "Menyro has helped partner restaurants eliminate printing costs entirely and increase average order value by 15% through easy upselling of daily specials. It is praised for its simplicity and immediate impact on operations.",
    metrics: [
      { label: "Languages Supported", value: "50+" },
      { label: "Avg. Order Value", value: "+15%" },
      { label: "Setup Time", value: "< 5 min" },
      { label: "Printing Costs", value: "Eliminated" },
    ],
    testimonial: {
      quote:
        "Menyro eliminated our printing costs entirely. We can update prices instantly and our international customers can read the menu in their language. It's saved us hours every week.",
      author: "Maria Santos",
      position: "Restaurant Manager",
      avatar: "/testimonials/maria.jpg",
    },
  },
  {
    name: "TvojPazar",
    description:
      "A next-generation online marketplace for the Balkans, built to challenge slow, outdated incumbents like Pazar3. TvojPazar offers a superior user experience with lightning-fast search, intuitive filters, and a clean, modern UI.",
    clientDescription:
      "A modern and fast online marketplace for the Balkans that makes buying and selling simple. Features advanced search and a beautiful design to outperform older platforms.",
    role: "Full-Stack Development & UI/UX",
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
      "Algolia Search",
      "Real-time Chat",
      "Image Optimization",
    ],
    challenge:
      "The local marketplace scene was dominated by slow, poorly designed platforms (Pazar3, Reklama5) with frustrating search functionality. Users needed a modern alternative that was fast, reliable, and enjoyable to use.",
    solution:
      "Developed a marketplace from the ground up with a laser focus on user experience. Implemented advanced search that delivers results 70% faster than competitors and designed a clean, intuitive interface that simplifies browsing and listing.",
    outcome:
      "In user testing, 3 out of 4 users preferred TvojPazar over existing platforms. The platform achieved 50% higher user engagement and is rapidly gaining market share due to its superior performance and design.",
    metrics: [
      { label: "Search Speed", value: "70% Faster" },
      { label: "User Preference", value: "3 out of 4" },
      { label: "Listing Engagement", value: "+50%" },
      { label: "Load Time", value: "< 1.5s" },
    ],
    testimonial: {
      quote:
        "Finally, a marketplace that actually works well. The search finds what I'm looking for and the chat system makes communication with sellers simple and fast.",
      author: "Petar Nikolovski",
      position: "Regular User",
      avatar: "/testimonials/petar.jpg",
    },
  },

  {
    name: "AMGMBH",
    description:
      "A modern, lead-generating website for a Hamburg-based cleaning company. The site is powered by a flexible CMS, allowing the client to independently manage content, and features a quote calculator that boosted lead quality.",
    clientDescription:
      "A professional website for a German cleaning service company. Customers can get instant quotes online, and the client can easily update all content themselves.",
    role: "Web Development & Design",
    url: "https://www.amgebäudereinigung.hamburg",
    favorite: false,
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
    category: "Business Website",
    technologies: [
      "Next.js",
      "Sanity CMS",
      "Multilingual",
      "Quote Calculator",
      "SEO Optimization",
    ],
    challenge:
      "The client needed a professional online presence to stand out in the competitive Hamburg market. Their previous site was outdated, difficult to update, and failed to convert visitors into leads.",
    solution:
      "Built a fast, SEO-optimized, bilingual website with an integrated CMS (Sanity). This empowers the client to make their own updates without technical help. An online quote calculator was added to pre-qualify leads.",
    outcome:
      "The new website increased qualified leads by 40% in three months. The client now manages 95% of content updates in-house, saving on maintenance costs and allowing for more agile marketing efforts.",
    metrics: [
      { label: "Lead Increase", value: "+40%" },
      { label: "Client Self-Sufficiency", value: "95%" },
      { label: "Conversion Rate", value: "+25%" },
      { label: "Local SEO Ranking", value: "Top 3" },
    ],
    testimonial: {
      quote:
        "The new website transformed our business. We get higher quality leads and the quote calculator saves us hours of back-and-forth emails with potential customers.",
      author: "Andreas Müller",
      position: "Business Owner",
      avatar: "/testimonials/andreas.jpg",
    },
  },
  {
    name: "AskNoel",
    description:
      "A premier crypto intelligence platform for a major Dubai-based financial technology company. AskNoel delivers real-time market data, curated news, and AI-driven insights for serious investors and traders.",
    clientDescription:
      "An AI-powered crypto platform where users can get expert answers to crypto questions, track market data, and stay updated with real-time industry news.",
    role: "Frontend Development & AI Integration",
    url: "https://app.asknoel.ai",
    favorite: false,
    image: "/assets/images/asknoel.webp",
    mobileImage: "/assets/images/asknoel-mobile.png",
    landingPageImage: "/assets/images/asknoel-landing.png",
    gallery: [
      "/assets/images/asknoel.webp",
      "/assets/images/asknoel-chat.png",
      "/assets/images/asknoel-news.png",
      "/assets/images/asknoel-mobile.png",
    ],
    year: 2024,
    category: "Fintech",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Real-time Data APIs",
    ],
    challenge:
      "The client, a leading Dubai firm, needed to provide its high-value clients with a sophisticated platform that consolidated volatile market data, news, and expert analysis into one reliable and fast interface.",
    solution:
      "Architected a high-performance frontend that integrates multiple real-time data streams for over 10,000 crypto assets. The core innovation is an AI assistant trained to provide nuanced financial insights, not just generic answers.",
    outcome:
      "The platform acquired over 5,000 active users in its first two months and became a key tool for the client's investment community. Data latency is kept below 500ms, providing a critical edge in the fast-paced crypto market.",
    metrics: [
      { label: "Data Latency", value: "< 500ms" },
      { label: "User Growth", value: "5k in 2 months" },
      { label: "Market Coverage", value: "10,000+ Assets" },
      { label: "AI Accuracy", value: "95%" },
    ],
  },
  {
    name: "Hakbus",
    description:
      "Delivered the official enterprise booking platform for Hak Bus, the largest bus operator in the Balkans. This project involved digitizing their entire booking and fleet management process for thousands of daily passengers.",
    clientDescription:
      "The official booking and management platform for Hak Bus, the largest transport operator in the Balkans, handling thousands of daily bookings and fleet operations.",
    role: "Full-Stack Development",
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
    category: "Transportation",
    technologies: [
      "React Native",
      "Next.js",
      "GPS Tracking",
      "Push Notifications",
      "Offline Support",
    ],
    challenge:
      "As the market leader, Hak Bus needed to replace its outdated manual booking process with a scalable digital platform that could handle high-volume traffic, reduce administrative overhead, and provide a modern user experience.",
    solution:
      "Engineered a robust, end-to-end booking system featuring real-time seat mapping, secure payment processing, and an administrative dashboard for route and schedule management. The platform is built for high availability and performance.",
    outcome:
      "The platform now serves over 15,000 active users monthly and processes over 200,000 bookings annually. It has led to a 40% increase in operational efficiency and a 25% uplift in online booking conversions.",
    metrics: [
      { label: "Monthly Users", value: "15,000+" },
      { label: "Annual Bookings", value: "200,000+" },
      { label: "Operational Efficiency", value: "+40%" },
      { label: "Platforms", value: "iOS/Android/Web" },
    ],
  },
  // {
  //   name: "Vital Care",
  //   description:
  //     "A personal SaaS project creating a specialized practice management and appointment booking platform for dental clinics. Vital Care aims to reduce administrative workload and minimize patient no-shows.",
  //   clientDescription:
  //     "A management platform for dental clinics that streamlines appointment scheduling, patient reminders, and treatment history to create a more efficient practice.",
  //   role: "SaaS Development",
  //   url: "https://vitalcare-jkqc.vercel.app",
  //   favorite: false,
  //   image: "/assets/images/vitalcare.png",
  //   mobileImage: "/assets/images/vitalcare-mobile.png",
  //   landingPageImage: "/assets/images/vitalcare-landing.png",
  //   gallery: [
  //     "/assets/images/vitalcare.png",
  //     "/assets/images/vitalcare-scheduling.png",
  //     "/assets/images/vitalcare-telemedicine.png",
  //     "/assets/images/vitalcare-mobile.png",
  //   ],
  //   year: 2024,
  //   category: "Healthcare",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "HIPAA Compliance",
  //     "Automated Reminders",
  //     "Real-time Scheduling",
  //   ],
  //   challenge:
  //     "Dental clinics often rely on manual phone calls for appointment scheduling and reminders, leading to high administrative costs and a significant rate of patient no-shows, which impacts revenue.",
  //   solution:
  //     "Designed a user-friendly platform where clinics can manage their schedules and patients can book appointments online 24/7. Key features include automated SMS/email reminders and a secure portal for patient treatment history.",
  //   outcome:
  //     "The system is projected to reduce patient no-shows by up to 75% through automated reminders and save an average of 8 hours of administrative work per week for each clinic, allowing staff to focus on patient care.",
  //   metrics: [
  //     { label: "No-Show Reduction", value: "-75% (Projected)" },
  //     { label: "Admin Time Saved", value: "8 hrs/week" },
  //     { label: "Booking Efficiency", value: "< 2 mins" },
  //     { label: "Compliance", value: "HIPAA-ready" },
  //   ],
  // },
  {
    name: "Insyllium",
    description:
      "The official corporate website for a software development agency, designed to be a showcase of technical excellence and design prowess. The site itself acts as a powerful marketing tool to attract high-value enterprise clients.",
    clientDescription:
      "A high-performance corporate website for a software agency, built to demonstrate their capabilities and attract new clients through superior design and speed.",
    role: "Web Development & SEO",
    url: "https://insyllium.vercel.app",
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
    category: "Business Website",
    technologies: [
      "Next.js",
      "Contentful CMS",
      "SEO Optimization",
      "Performance Optimization",
    ],
    challenge:
      "A software agency's website must be more than just informational; it must be a testament to their skill. The goal was to build a site with flawless performance, sophisticated design, and strong SEO to attract larger, more discerning clients.",
    solution:
      "Developed a website achieving a near-perfect Lighthouse score of 98/100. Implemented advanced SEO strategies and a clean, professional design aesthetic that reflects the agency's brand and technical expertise.",
    outcome:
      "The new site led to a 60% increase in the quality of inbound leads and a 40% increase in the average project value signed from those leads. It serves as the agency's primary tool for establishing credibility and winning business.",
    metrics: [
      { label: "Performance Score", value: "98/100" },
      { label: "Inbound Lead Quality", value: "+60%" },
      { label: "Avg. Project Value", value: "+40%" },
      { label: "Organic Traffic", value: "+150%" },
    ],
  },
  {
    name: "Insylink",
    description:
      "An enterprise-grade Point-of-Sale (POS) system for restaurant chains in Germany. Insylink is fully compliant with German tax law through a certified partnership with Fiskaly, offering a reliable and scalable solution for the demanding hospitality industry.",
    clientDescription:
      "A tablet-based POS system for German restaurants that handles orders, inventory, and staff, while ensuring 100% legal compliance with German tax regulations.",
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
    category: "Restaurant Technology",
    technologies: [
      "Next.js",
      "Socket.IO",
      "IndexedDB",
      "Fiskaly API",
      "Offline Support",
    ],
    challenge:
      "German restaurants require a POS system that not only streamlines operations but also adheres to strict fiscal laws (KassenSichV). Existing solutions were often expensive, complex, or not fully compliant.",
    solution:
      "Developed a modern, intuitive POS system with a core integration to Fiskaly's certified TSE service, ensuring every transaction is legally recorded. The system features real-time order syncing and robust offline functionality.",
    outcome:
      "Insylink has been successfully deployed across 5 restaurant chains in over 30 locations. It processes over €1.5 million in transactions monthly and has reduced staff training time by 50% compared to legacy systems.",
    metrics: [
      { label: "TSE Compliance", value: "100% Fiskaly Certified" },
      { label: "Monthly Volume", value: "€1.5M+" },
      { label: "Deployments", value: "30+ Locations" },
      { label: "System Uptime", value: "99.9%" },
    ],
  },
  {
    name: "Lans-Gr",
    description:
      "Built a high-performance e-commerce platform that empowers customers to design their own products through a custom configurator with real-time price updates. The site's speed and user experience optimizations led to a 35% boost in sales conversions for the client.",
    clientDescription:
      "An e-commerce website that allows customers to customize products with real-time price updates. Performance improvements led to 65% faster loading and 35% higher conversion rates.",
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
      "Performance Optimization",
    ],
    challenge:
      "The client needed a fast e-commerce site with a complex product customizer. The main goals were to provide an interactive user experience and improve conversion rates, which were suffering due to slow load times.",
    solution:
      "We developed a bespoke product configurator that updates prices instantly as users make selections. We focused heavily on performance, implementing advanced optimization techniques to ensure the site was extremely fast.",
    outcome:
      "The new platform loads 65% faster than the previous site, which directly contributed to a 35% increase in conversion rates. The custom configurator provides a unique and engaging shopping experience for customers.",
    metrics: [
      { label: "Speed Improvement", value: "65%" },
      { label: "Conversion Increase", value: "35%" },
      { label: "Order Processing", value: "Automated" },
      { label: "Performance Grade", value: "A+" },
    ],
  },
];

// ... rest of your file remains the same

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
  "Business Website", // Changed from Corporate Website for broader appeal
  "Fintech",
  "Transportation", // Changed from Mobile App to be more descriptive
  "Healthcare",
  "Restaurant Technology", // Changed from Restaurant Tech
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
