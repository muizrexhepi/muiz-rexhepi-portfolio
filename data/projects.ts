export interface Project {
  name: string;
  description: string;
  clientDescription: string; // New field for client-friendly description
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
      "QR menu platform that enables restaurants to manage digital menus with instant updates and automatic translation to 50+ languages. Built with Next.js and TypeScript, featuring real-time menu editing, QR code generation, and customer analytics dashboard.",
    clientDescription:
      "A QR menu platform for restaurants that eliminates printing costs and language barriers. Restaurant owners can update menus instantly and serve international customers with automatic translations to 50+ languages.",
    role: "Full-Stack Development & Design",
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
      "Next.js",
      "TypeScript",
      "AI Translation",
      "Real-time Updates",
      "QR Generation",
      "Tailwind CSS",
    ],
    challenge:
      "Restaurants needed a cost-effective way to manage multilingual menus and make frequent updates without reprinting costs. Traditional menu systems required manual translation and couldn't accommodate dietary filters or real-time changes.",
    solution:
      "Built a web-based platform that generates QR codes linking to digital menus. Integrated AI translation services for 50+ languages and created an admin dashboard for instant menu updates. Added customer analytics to track popular items.",
    outcome:
      "Restaurants reduced menu printing costs to zero and can now serve international customers in their native language. Menu updates take under 2 minutes compared to the previous 2-day printing cycle.",
    metrics: [
      { label: "Languages Supported", value: "50+" },
      { label: "Menu Updates", value: "Real-time" },
      { label: "Setup Time", value: "5 min" },
      { label: "Translation Accuracy", value: "98%" },
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
      "Marketplace platform built with Next.js and TypeScript, featuring advanced search, real-time messaging, and optimized image loading. Designed to provide faster performance and better user experience than existing regional platforms.",
    clientDescription:
      "An online marketplace that connects buyers and sellers in the Balkans region. Built to be faster and more user-friendly than existing platforms, with advanced search functionality and real-time messaging.",
    role: "Full-Stack Development",
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
      "Real-time Chat",
      "Advanced Search",
      "Image Optimization",
    ],
    challenge:
      "Existing regional marketplaces had slow loading times, poor search results, and no real-time communication between buyers and sellers. Users frequently left due to frustration with the interface.",
    solution:
      "Developed a modern marketplace with optimized image loading, advanced search algorithms, and WebSocket-based real-time messaging. Implemented responsive design and performance optimizations throughout.",
    outcome:
      "Achieved 40% faster loading times than competitors and 65% higher user engagement. The platform now processes hundreds of listings with seamless buyer-seller communication.",
    metrics: [
      { label: "Performance Improvement", value: "40%" },
      { label: "User Engagement", value: "+65%" },
      { label: "Load Time", value: "< 2s" },
      { label: "Search Accuracy", value: "92%" },
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
    name: "GoBusly",
    description:
      "Bus booking platform similar to FlixBus, built with Next.js and TypeScript. Features real-time seat selection, multi-currency payments via Stripe, and automated email confirmations. Supports 4 languages and processes 500+ monthly bookings.",
    clientDescription:
      "A bus booking platform that allows customers to search routes, select seats in real-time, and pay securely online. Designed for international travelers with multi-currency support and multilingual interface.",
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
      "Bus companies needed an online booking system that could handle real-time seat availability, accept international payments, and serve customers in multiple languages.",
    solution:
      "Created a booking platform with WebSocket integration for real-time seat updates, Stripe for multi-currency payments, and automated email confirmations. Added support for 4 languages to serve international routes.",
    outcome:
      "The platform processes over 500 bookings monthly with 98% customer satisfaction. Payment processing is reliable with 99.8% success rate across multiple currencies.",
    metrics: [
      { label: "Monthly Bookings", value: "500+" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Languages", value: "4" },
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
    name: "AMGMBH",
    description:
      "Business website for German cleaning service company, built with Next.js and Sanity CMS. Features automated quote calculator, bilingual support (German/English), and optimized conversion funnels that increased leads by 40%.",
    clientDescription:
      "A professional website for a German cleaning service company. Customers can get instant quotes online and browse services in both German and English. The new site increased their leads by 40%.",
    role: "Web Development & Design",
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
    category: "Business Website",
    technologies: [
      "Next.js",
      "Sanity CMS",
      "Multilingual",
      "Quote Calculator",
      "SEO Optimization",
    ],
    challenge:
      "A cleaning service company needed a professional website that could generate quotes automatically and serve both German and English-speaking customers in Hamburg.",
    solution:
      "Built a bilingual website with Sanity CMS for easy content management. Created an automated quote calculator based on service type and square footage. Optimized conversion paths and mobile experience.",
    outcome:
      "Lead generation increased by 40% within three months. The automated quote system reduced inquiry response time from hours to seconds, improving customer experience significantly.",
    metrics: [
      { label: "Lead Increase", value: "+40%" },
      { label: "Languages", value: "DE/EN" },
      { label: "Conversion Rate", value: "+25%" },
      { label: "Mobile Traffic", value: "70%" },
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
      "Cryptocurrency information platform with AI chat assistant and real-time news feeds. Built with Next.js and integrated with news APIs and OpenAI for crypto-specific Q&A functionality.",
    clientDescription:
      "A cryptocurrency information platform where users can get AI-powered answers to crypto questions and stay updated with real-time news from the industry.",
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
      "News APIs",
      "Real-time Data",
    ],
    challenge:
      "Crypto enthusiasts needed a reliable source for both news and expert-level answers to technical questions, but existing platforms either focused on news or lacked intelligent assistance.",
    solution:
      "Integrated multiple crypto news APIs for real-time updates and implemented an AI chat system trained specifically on cryptocurrency topics. Added personalized news feeds and market data visualization.",
    outcome:
      "User engagement increased by 80% with users averaging 12 questions per session. The AI maintains 95% accuracy on crypto-related queries.",
    metrics: [
      { label: "AI Accuracy", value: "95%" },
      { label: "News Sources", value: "Real-time" },
      { label: "User Engagement", value: "+80%" },
      { label: "Daily Queries", value: "1,200+" },
    ],
  },
  {
    name: "Hakbus",
    description:
      "Transportation app with web dashboard and mobile app, featuring GPS tracking, push notifications, and offline functionality. Built with React Native for mobile and Next.js for web administration.",
    clientDescription:
      "A transportation solution with both mobile app and web dashboard. Passengers can track buses in real-time while operators manage routes and schedules from the web interface.",
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
      "Transportation companies needed a complete solution with passenger mobile app and operator dashboard, including real-time tracking and offline functionality for areas with poor connectivity.",
    solution:
      "Developed a React Native mobile app with GPS tracking and push notifications, plus a Next.js web dashboard for operators. Implemented offline support using Redux Persist for unreliable network areas.",
    outcome:
      "The platform serves 1000+ daily active users with 40% improved loading times. Offline functionality ensures the app works even in areas with poor internet connectivity.",
    metrics: [
      { label: "Daily Active Users", value: "1000+" },
      { label: "Performance Improvement", value: "40%" },
      { label: "Offline Support", value: "Yes" },
      { label: "Platforms", value: "iOS/Android/Web" },
    ],
  },
  {
    name: "Vital Care",
    description:
      "Healthcare management platform with appointment scheduling, patient portals, and telemedicine features. Built with Next.js and designed to be HIPAA compliant for medical facilities.",
    clientDescription:
      "A healthcare platform that streamlines appointment scheduling and patient management. Includes secure patient portals and telemedicine capabilities for virtual consultations.",
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
      "Video Calls",
      "Real-time Scheduling",
    ],
    challenge:
      "Medical facilities needed a HIPAA-compliant platform for managing appointments, patient records, and telemedicine consultations in one integrated system.",
    solution:
      "Built a comprehensive healthcare platform with role-based access control, encrypted patient data storage, real-time scheduling system, and integrated video calling for telemedicine.",
    outcome:
      "Reduced appointment scheduling time by 60% and now serves 20+ medical facilities. The platform maintains full HIPAA compliance while providing modern digital healthcare tools.",
    metrics: [
      { label: "Medical Facilities", value: "20+" },
      { label: "Time Savings", value: "60%" },
      { label: "Compliance", value: "HIPAA" },
      { label: "Security Rating", value: "A+" },
    ],
  },
  {
    name: "Insyllium",
    description:
      "Corporate website built with Next.js and Contentful CMS, achieving 95+ Lighthouse performance score. Includes SEO optimization and analytics dashboard that helped increase organic traffic by 150%.",
    clientDescription:
      "A high-performance corporate website with content management system. Optimized for search engines and speed, resulting in 150% increase in organic traffic within three months.",
    role: "Web Development & SEO",
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
    category: "Business Website",
    technologies: [
      "Next.js",
      "Contentful CMS",
      "SEO Optimization",
      "Analytics Dashboard",
      "Performance Optimization",
    ],
    challenge:
      "The company needed a fast, SEO-optimized website with easy content management and detailed analytics to track marketing performance and user behavior.",
    solution:
      "Developed a Next.js website with Contentful CMS for content management, implemented technical SEO optimizations, and created a custom analytics dashboard for performance tracking.",
    outcome:
      "Achieved 95+ Lighthouse performance score and increased organic search traffic by 150% in three months. The CMS allows non-technical staff to update content easily.",
    metrics: [
      { label: "Performance Score", value: "95+" },
      { label: "Organic Traffic", value: "+150%" },
      { label: "Launch Timeline", value: "3 months" },
      { label: "Page Speed", value: "< 1s" },
    ],
  },
  {
    name: "Insylink",
    description:
      "Point-of-sale system for restaurants built with Next.js and Socket.IO. Features real-time order management, inventory tracking, and offline support. Currently processes 2000+ orders daily across 15 restaurants.",
    clientDescription:
      "A tablet-based POS system designed specifically for restaurants. Handles order management, inventory tracking, and staff coordination with offline support for unreliable internet connections.",
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
      "Real-time Updates",
      "Offline Support",
    ],
    challenge:
      "Restaurants needed an affordable POS system that could work offline during internet outages and provide real-time order coordination between kitchen and service staff.",
    solution:
      "Built a web-based POS system optimized for tablets with Socket.IO for real-time updates and IndexedDB for offline functionality. Added inventory tracking and sales analytics.",
    outcome:
      "Currently processes 2000+ orders daily across 15 restaurants with 99.9% uptime. The offline capability ensures operations continue during network interruptions.",
    metrics: [
      { label: "Daily Orders", value: "2000+" },
      { label: "Active Restaurants", value: "15" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Offline Support", value: "Yes" },
    ],
  },
  {
    name: "Lans-Gr",
    description:
      "E-commerce platform with custom product configurator and real-time pricing. Built with Next.js, MongoDB, and Stripe. Performance optimizations reduced page load times by 65%, increasing conversions by 35%.",
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
      "The client needed an e-commerce platform where customers could customize products with real-time pricing while maintaining fast loading times for better conversion rates.",
    solution:
      "Developed a custom product configurator with real-time price calculation, integrated Stripe for payments, and implemented Next.js performance optimizations including image optimization and static generation.",
    outcome:
      "Reduced page load times by 65% and increased conversion rates by 35%. The product configurator allows customers to see pricing changes instantly as they customize their orders.",
    metrics: [
      { label: "Speed Improvement", value: "65%" },
      { label: "Conversion Increase", value: "35%" },
      { label: "Order Processing", value: "Automated" },
      { label: "Performance Grade", value: "A+" },
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
