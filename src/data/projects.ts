export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  challenges: string[];
  learnings: string[];
}

export const projectsData: Project[] = [
  {
    id: 'bharat-business-pro',
    title: 'Bharat Business Pro – Business Networking Platform',
    shortDescription: 'Full-stack business networking platform with modern landing page, robust backend API, and comprehensive admin dashboard',
    fullDescription: 'Bharat Business Pro is a comprehensive business networking and freelancing platform designed to connect businesses with opportunities. The platform consists of three main components: a visually stunning Next.js landing page with 3D animations and Framer Motion effects, a robust Express.js backend with TypeScript featuring real-time capabilities, and a feature-rich React admin dashboard. The platform enables business verification, lead management, real-time chat between businesses, subscription management with Razorpay integration, bulk import capabilities, and comprehensive analytics. Built with scalability in mind using Redis for caching, Firebase for authentication and notifications, and Socket.io for real-time communication.',
    image: 'https://bharatbusinessnetworks.com/frontend/img/sticky-logo.png',
    gallery: ['https://bharatbusinessnetworks.com/frontend/img/sticky-logo.png', '/image copy.png', '/image copy 2.png'],
    tags: ['Next.js', 'Express.js', 'TypeScript', 'Firebase', 'Redis', 'Socket.io', 'Razorpay', 'Tailwind CSS', 'React'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Modern landing page with 3D globe animations and Framer Motion effects',
      'Real-time chat system with WebSocket (Socket.io) for instant business communication',
      'Complete business verification system with document upload and approval workflow',
      'Lead management and business-to-lead conversion tracking',
      'Subscription management with Razorpay payment gateway integration',
      'Admin dashboard with comprehensive analytics and user management',
      'Bulk import system for businesses and leads via CSV/Excel',
      'Coupon and discount management system',
      'Industry categorization and filtering system',
      'Notification system with Firebase Cloud Messaging',
      'Brand management and showcase features',
      'Feed system for business updates and announcements',
      'Location-based business discovery',
      'Responsive design across all devices',
      'Redis caching for improved performance',
      'Rate limiting and security middleware'
    ],
    techStack: [
      {
        category: 'Landing Page (Frontend)',
        technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Radix UI', 'shadcn/ui']
      },
      {
        category: 'Dashboard (Frontend)',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React Hook Form', 'Zustand']
      },
      {
        category: 'Backend API',
        technologies: ['Express.js', 'TypeScript', 'Node.js', 'Firebase Admin', 'Redis', 'Socket.io']
      },
      {
        category: 'Database & Storage',
        technologies: ['Firebase Firestore', 'Firebase Storage', 'Redis (caching & sessions)']
      },
      {
        category: 'Authentication',
        technologies: ['Firebase Auth', 'JWT', 'Express Sessions', 'Cookie Parser']
      },
      {
        category: 'Payments',
        technologies: ['Razorpay', 'Webhooks', 'Subscription Management']
      },
      {
        category: 'Real-time Communication',
        technologies: ['Socket.io', 'WebSocket', 'Firebase Cloud Messaging']
      },
      {
        category: 'DevOps & Tools',
        technologies: ['Cron Jobs', 'Multer (file uploads)', 'Brevo (email)', 'Helmet (security)']
      }
    ],
    challenges: [
      'Architecting a scalable system with three separate components (landing, backend, dashboard)',
      'Implementing real-time chat with proper room management and message persistence',
      'Designing a flexible subscription system with Razorpay that handles multiple plans',
      'Building a bulk import system that validates and processes large CSV/Excel files',
      'Managing state across the admin dashboard with complex data relationships',
      'Creating a verification workflow with document upload and approval stages',
      'Optimizing performance with Redis caching for frequently accessed data',
      'Handling file uploads securely with proper validation and storage',
      'Building a notification system that works across web and potential mobile',
      'Implementing rate limiting and security measures for production'
    ],
    learnings: [
      'Advanced Next.js 15 features with App Router and Turbopack',
      'Express.js with TypeScript for type-safe backend development',
      'Socket.io implementation for real-time bidirectional communication',
      'Redis integration for caching, sessions, and rate limiting',
      'Razorpay payment gateway and subscription management',
      'Firebase ecosystem (Auth, Firestore, Storage, FCM)',
      'Building complex admin dashboards with data visualization',
      'Three.js and 3D animations for modern web experiences',
      'File upload handling with Multer and cloud storage',
      'Cron job implementation for automated tasks',
      'Security best practices with Helmet and express-rate-limit'
    ]
  },
  {
    id: 'apna-duggu',
    title: 'Apna Duggu – Multi-Platform Service Ecosystem',
    shortDescription: 'Multi-platform service marketplace with 4 clients (2 web + 2 mobile) sharing a unified backend',
    fullDescription: 'Apna Duggu is not just a web app — it is a multi-platform service ecosystem consisting of 4 applications (2 web + 2 mobile) sharing a single backend. Architected a scalable multi-client backend system supporting user-facing applications (web + mobile) and service provider/admin panels (web + mobile). Solved complex cross-platform authentication challenges including OTP + Google login, handling real-world edge cases like incomplete user registration, OAuth users without phone numbers, and password reset flow inconsistencies. Built REST APIs with reusability and modularity for seamless data synchronization across all platforms. Implemented role-based access control for users and service providers, maintained UI consistency across platforms, and built admin/service dashboards for managing operations.',
    image: '/image copy.png',
    gallery: ['/image copy.png', '/image.png', '/image copy 2.png'],
    tags: ['Next.js', 'Flutter', 'Node.js', 'REST APIs', 'Multi-Platform', 'Auth'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Multi-platform ecosystem: 4 applications (2 web + 2 mobile) with shared backend',
      'User app (web + mobile) for service booking and management',
      'Service provider/admin panel (web + mobile) for operations',
      'Robust authentication: OTP + Google login with edge case handling',
      'Cross-platform data synchronization via REST APIs',
      'Role-based access control for users and providers',
      'Real-time chat between customers and service providers',
      'Service provider verification and job management',
      'Subscription model for premium partner features',
      'Push notifications across all platforms',
      'Consistent UI/UX design system across web and mobile'
    ],
    techStack: [
      {
        category: 'Frontend (Web)',
        technologies: ['Next.js', 'React', 'Tailwind CSS']
      },
      {
        category: 'Mobile',
        technologies: ['Flutter', 'Dart', 'Firebase Messaging']
      },
      {
        category: 'Backend',
        technologies: ['Node.js', 'Express', 'REST APIs', 'JWT']
      },
      {
        category: 'Database',
        technologies: ['PostgreSQL', 'MongoDB', 'Firebase Firestore']
      },
      {
        category: 'Authentication',
        technologies: ['Firebase Auth', 'OTP', 'Google OAuth', 'JWT']
      },
      {
        category: 'Services',
        technologies: ['Push Notifications', 'Real-time Chat', 'Cloud Functions']
      }
    ],
    challenges: [
      'Architecting a multi-client backend serving 4 applications simultaneously',
      'Solving cross-platform authentication edge cases (incomplete registration, OAuth without phone)',
      'Maintaining UI/UX consistency across web and mobile platforms',
      'Implementing seamless data synchronization across all clients',
      'Designing role-based access for users vs service providers',
      'Handling real-time features across different platform capabilities'
    ],
    learnings: [
      'Multi-platform system architecture design',
      'Cross-platform authentication implementation',
      'REST API design for reusability and modularity',
      'Flutter for both mobile and web deployment',
      'Firebase integration for real-time features',
      'Production-level edge case handling in auth flows',
      'Maintaining design system consistency across platforms'
    ]
  },
  {
    id: 'corefit-plus',
    title: 'Corefit Plus – Fitness & Wellness Platform',
    shortDescription: 'Frontend development for a fitness and wellness platform with class booking and membership features',
    fullDescription: 'Developed responsive frontend UI for a static fitness and wellness platform. Built landing pages for class booking info, membership details with cross-device compatibility and performance optimization. Implemented UI components and layouts based on design requirements while ensuring cross-device compatibility and consistent UI/UX. Optimized performance by improving rendering and load times for a seamless static site experience.',
    image: '/image copy 3.png',
    gallery: ['/image copy 3.png'],
    tags: ['React.js', 'Bootstrap', 'Font Awesome', 'Frontend'],
    liveUrl: 'https://corefitplus.com',
    githubUrl: '#',
    features: [
      'Responsive frontend UI for fitness platform',
      'Static landing page with class booking information',
      'Membership details and pricing pages',
      'Cross-device compatibility',
      'Consistent UI/UX design system',
      'Performance optimized rendering',
      'Fast loading static site'
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React.js', 'Bootstrap', 'Font Awesome']
      },
      {
        category: 'Styling',
        technologies: ['Bootstrap', 'CSS3', 'Responsive Design']
      },
      {
        category: 'Optimization',
        technologies: ['Performance Optimization', 'Lazy Loading']
      }
    ],
    challenges: [
      'Building responsive layouts for fitness content',
      'Optimizing performance for fast load times',
      'Implementing class booking UI components',
      'Ensuring consistent UI across all devices'
    ],
    learnings: [
      'Fitness platform UI/UX design patterns',
      'Performance optimization techniques',
      'Responsive component architecture',
      'Booking system interface design'
    ]
  },
  {
    id: 'fly-crm',
    title: 'FLY YOURTECH CRM',
    shortDescription: 'Internal CRM system for lead and client management',
    fullDescription: 'A comprehensive CRM system developed for FLY YOURTECH to manage leads, track clients, assign tasks, and monitor team productivity. Built with React (Vite) and Firebase, it provides real-time data syncing, role-based access control, and dashboard analytics for business insights.',
    image: '/image copy 2.png',
    gallery: ['/image copy 2.png'],
    tags: ['React', 'Firebase', 'Firestore', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Lead management and tracking system',
      'Client records and interaction history',
      'Task assignment and team collaboration',
      'Role-based access control',
      'Real-time dashboard analytics',
      'Active leads and conversion tracking',
      'Team productivity metrics',
      'Firebase authentication'
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React', 'Vite', 'CSS3']
      },
      {
        category: 'Backend',
        technologies: ['Firebase', 'Cloud Functions']
      },
      {
        category: 'Database',
        technologies: ['Firestore']
      },
      {
        category: 'Auth',
        technologies: ['Firebase Auth']
      }
    ],
    challenges: [
      'Designing real-time data sync with Firestore',
      'Implementing role-based access control',
      'Creating meaningful dashboard analytics',
      'Managing complex client relationships'
    ],
    learnings: [
      'Firebase ecosystem integration',
      'Firestore real-time queries',
      'React with Vite for fast development',
      'CRM domain knowledge'
    ]
  },
  {
    id: 'gangavalley',
    title: 'Gangavalley Real Estate',
    shortDescription: 'SEO-optimized real estate landing page built with Next.js and Tailwind CSS',
    fullDescription: 'A responsive and high-performance real estate landing page developed for Gangavalley using Next.js. Features modern UI sections including property highlights, amenities showcase, interactive location map, pricing tables, and contact forms. Optimized for SEO, fast loading, and mobile responsiveness.',
    image: '/image copy 4.png',
    gallery: ['/image copy 4.png'],
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    liveUrl: 'https://ayayventures.com/gangavalley',
    githubUrl: '#',
    features: [
      'Property highlights and gallery showcase',
      'Amenities section with visual icons',
      'Interactive location map integration',
      'Pricing and floor plan displays',
      'Contact forms with validation',
      'SEO optimization for search visibility',
      'Fast loading with Next.js optimization',
      'Fully responsive mobile design'
    ],
    techStack: [
      {
        category: 'Frontend',
        technologies: ['Next.js', 'React', 'Tailwind CSS']
      },
      {
        category: 'Optimization',
        technologies: ['SEO', 'Lazy Loading', 'Image Optimization']
      }
    ],
    challenges: [
      'Optimizing for SEO and page speed',
      'Creating engaging property showcases',
      'Implementing responsive image galleries',
      'Building conversion-focused contact forms'
    ],
    learnings: [
      'Next.js SEO best practices',
      'Real estate UX patterns',
      'Tailwind CSS advanced styling',
      'Performance optimization techniques'
    ]
  },
  {
    id: 'mgneq',
    title: 'MGNEQ – E-commerce Website',
    shortDescription: 'Shopify-based e-commerce website with custom theme development',
    fullDescription: 'Developed and customized a Shopify-based e-commerce website. Built and modified Shopify themes using Liquid templating. Designed product pages, collections, and navigation flows. Customized UI/UX and layout as per business requirements. Handled store configuration, content, and responsiveness.',
    image: '/image copy 5.png',
    gallery: ['/image copy 5.png'],
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'E-commerce'],
    liveUrl: 'https://magneq.in',
    githubUrl: '#',
    features: [
      'Shopify theme customization with Liquid',
      'Custom product pages and collection layouts',
      'Navigation flow optimization',
      'UI/UX customization per business needs',
      'Store configuration management',
      'Responsive design implementation',
      'Content management setup'
    ],
    techStack: [
      {
        category: 'Platform',
        technologies: ['Shopify', 'Liquid']
      },
      {
        category: 'Frontend',
        technologies: ['HTML', 'CSS', 'Shopify Themes']
      }
    ],
    challenges: [
      'Customizing Shopify themes with Liquid templating',
      'Designing optimal product page layouts',
      'Implementing responsive e-commerce design',
      'Managing store configuration and content'
    ],
    learnings: [
      'Shopify theme development',
      'Liquid templating language',
      'E-commerce UX patterns',
      'Shopify store management'
    ]
  },
  {
    id: 'mysweetwishes',
    title: 'MySweetWishes – Gift & E-commerce Store',
    shortDescription: 'Shopify-based gifting e-commerce website with custom storefront',
    fullDescription: 'Developed a Shopify-based gifting e-commerce website. Customized themes, product pages, and collection layouts. Implemented UI components for product display and browsing. Ensured responsive design across devices. Managed storefront design and content structure.',
    image: '/image.png',
    gallery: ['/image.png'],
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'E-commerce'],
    liveUrl: 'https://mysweetwishes.com/',
    githubUrl: '#',
    features: [
      'Shopify gift store customization',
      'Theme and product page customization',
      'Collection layout design',
      'Product display UI components',
      'Responsive storefront design',
      'Content structure management',
      'Cross-device compatibility'
    ],
    techStack: [
      {
        category: 'Platform',
        technologies: ['Shopify', 'Liquid']
      },
      {
        category: 'Frontend',
        technologies: ['HTML', 'CSS', 'Shopify Themes']
      }
    ],
    challenges: [
      'Customizing Shopify for gift products',
      'Designing gift-focused collection layouts',
      'Implementing product browsing UI',
      'Managing storefront content structure'
    ],
    learnings: [
      'Gift e-commerce UX design',
      'Shopify customization techniques',
      'Product page optimization',
      'Storefront content management'
    ]
  }
];
