import type { IndexTile } from "@/lib/types";

export interface ServiceIndexTile extends IndexTile {
  category: "Testing" | "Development" | "Platform & Consulting";
}

export const servicesIndexIntro = {
  heroEyebrow: "Services",
  heroHeadline: "Services & Solutions",
  heroSubtext:
    "Take your company to new heights by investing in our reliable and efficient technology solutions. NForceOne is your trusted partner for IT management, data security, and cloud technology.",
  sectionHeading: "Comprehensive IT services for businesses",
  sectionText:
    "NForceOne has the experience and expertise to provide an excellent experience across spheres, for truly holistic IT.",
  whyHeading: "Why choose services from NForce One?",
  whyText:
    "Outsourced IT services improve efficiency and build trust, tailored to your specific goals.",
  whyCta: "Get in touch",
};

export const servicesIndex: ServiceIndexTile[] = [
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    icon: "shield-check",
    category: "Testing",
    hasPage: true,
    teaser:
      "Free up internal resources we handle day-to-day support, management, and monitoring of your QA.",
  },
  {
    slug: "manual-testing",
    title: "Manual Testing",
    icon: "check-circle",
    category: "Testing",
    hasPage: true,
    teaser:
      "Human-driven validation that catches real-world user behavior and edge cases automation misses.",
  },
  {
    slug: "automation-testing",
    title: "Automation Testing",
    icon: "repeat",
    category: "Testing",
    hasPage: true,
    teaser:
      "Custom automated test suites for broader coverage, faster releases, and reduced manual effort.",
  },
  {
    slug: "consulting-testing",
    title: "Consulting Testing",
    icon: "users",
    category: "Testing",
    hasPage: true,
    teaser:
      "QA process and strategy consulting leveraging 15+ years of testing expertise.",
  },
  {
    slug: "outsourcing-testing",
    title: "Outsourcing Testing",
    icon: "globe",
    category: "Testing",
    hasPage: true,
    teaser: "Dedicated outsourced QA teams embedded in your workflow.",
  },
  {
    slug: "ai-testing",
    title: "AI Testing",
    icon: "bot",
    category: "Testing",
    hasPage: true,
    teaser:
      "Testing for chatbots, RAG/search agents, fine-tuned LLMs, voice AI/IVR, and multi-agent systems.",
  },
  {
    slug: "ux-testing",
    title: "UX Testing",
    icon: "sparkles",
    category: "Testing",
    hasPage: true,
    teaser:
      "Usability testing across web, desktop, SaaS, mobile, kiosk, and wearable interfaces.",
  },
  {
    slug: "performance-testing",
    title: "Performance Testing",
    icon: "gauge",
    category: "Testing",
    hasPage: true,
    teaser:
      "Load, speed, and scalability testing across web, mobile, desktop, and cloud platforms.",
  },
  {
    slug: "functional-testing",
    title: "Functional Testing",
    icon: "clipboard-check",
    category: "Testing",
    hasPage: true,
    teaser:
      "Feature-vs-requirement validation across websites, enterprise software, IoT, mobile, and big data.",
  },
  {
    slug: "regression-testing",
    title: "Regression Testing",
    icon: "git-branch",
    category: "Testing",
    hasPage: true,
    teaser:
      "Ensures new changes don't break existing functionality across web, desktop, cloud/SaaS, mobile, and APIs.",
  },
  {
    slug: "integration-testing",
    title: "Integration Testing",
    icon: "puzzle",
    category: "Testing",
    hasPage: true,
    teaser:
      "Validates interaction between modules and services across web, desktop, enterprise, and cloud/microservices.",
  },
  {
    slug: "compatibility-testing",
    title: "Compatibility Testing",
    icon: "monitor-smartphone",
    category: "Testing",
    hasPage: true,
    teaser: "Cross-browser, cross-OS, and cross-device consistency testing.",
  },
  {
    slug: "pos-testing",
    title: "POS Testing",
    icon: "credit-card",
    category: "Testing",
    hasPage: true,
    teaser:
      "Testing for retail, mobile, omnichannel, restaurant, kiosk, and specialized POS systems.",
  },
  {
    slug: "payment-testing",
    title: "Payment Testing",
    icon: "wallet",
    category: "Testing",
    hasPage: true,
    teaser:
      "Payment gateways, mobile payment apps, POS, and subscription/recurring billing testing.",
  },
  {
    slug: "iot-testing",
    title: "IoT Testing",
    icon: "cpu",
    category: "Testing",
    hasPage: true,
    teaser:
      "Testing across healthcare devices, smart home, wearables, energy, fleet, and agriculture IoT.",
  },
  {
    slug: "mobile-app-testing",
    title: "Mobile App Testing",
    icon: "smartphone",
    category: "Testing",
    hasPage: true,
    teaser: "Native, cross-platform, mobile-web, and hybrid app testing.",
  },
  {
    slug: "mobile-and-device-testing",
    title: "Mobile & Device Testing",
    icon: "tablet-smartphone",
    category: "Testing",
    hasPage: true,
    teaser:
      "iOS, Android, custom-device, and hardware-integrated app testing at scale.",
  },
  {
    slug: "web-app-testing",
    title: "Web App Testing",
    icon: "app-window",
    category: "Testing",
    hasPage: true,
    teaser: "Testing of websites, portals, web apps, and SaaS applications.",
  },
  {
    slug: "cloud-testing",
    title: "Cloud Testing",
    icon: "cloud",
    category: "Testing",
    hasPage: true,
    teaser: "Testing of SaaS, IaaS, PaaS, and NaaS cloud products.",
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "code",
    category: "Development",
    hasPage: true,
    teaser:
      "The right technology, implemented properly, can lead to significant gains in growth.",
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: "brain",
    category: "Development",
    hasPage: true,
    teaser:
      "Predictive analytics, virtual assistants and chatbots, computer vision, and custom AI/ML models.",
  },
  {
    slug: "pega-development",
    title: "Pega Development",
    icon: "workflow",
    category: "Development",
    hasPage: true,
    teaser:
      "Customer service apps, workflow automation, BPM apps, and legacy modernization on Pega.",
  },
  {
    slug: "pega-testing",
    title: "Pega Testing",
    icon: "search",
    category: "Development",
    hasPage: true,
    teaser:
      "Testing solutions for Pega applications stability, functionality, UX, and security.",
  },
  {
    slug: "digital-app-development",
    title: "Digital App Development",
    icon: "layout-grid",
    category: "Development",
    hasPage: true,
    teaser: "Web and mobile app development for digital transformation.",
  },
  {
    slug: "devops",
    title: "DevOps",
    icon: "settings",
    category: "Platform & Consulting",
    hasPage: true,
    teaser:
      "CI/CD, infrastructure as code, and delivery-process modernization.",
  },
  {
    slug: "database-management",
    title: "Database Management",
    icon: "database",
    category: "Platform & Consulting",
    hasPage: true,
    teaser:
      "RDBMS, NoSQL, cloud-managed, distributed, and in-memory database services.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    icon: "bar-chart",
    category: "Platform & Consulting",
    hasPage: true,
    teaser: "Dashboards and predictive modeling built from your data.",
  },
  {
    slug: "big-data",
    title: "Big Data",
    icon: "server",
    category: "Platform & Consulting",
    hasPage: true,
    teaser: "Big data engineering and analytics services.",
  },
  {
    slug: "intelligent-rpa",
    title: "Intelligent RPA",
    icon: "zap",
    category: "Platform & Consulting",
    hasPage: true,
    teaser: "AI-powered robotic process automation for repetitive tasks.",
  },
  {
    slug: "management-services",
    title: "Management Services",
    icon: "trending-up",
    category: "Platform & Consulting",
    hasPage: true,
    teaser: "Ongoing IT management and support for your technology stack.",
  },
];

export const serviceCategories: ServiceIndexTile["category"][] = [
  "Testing",
  "Development",
  "Platform & Consulting",
];
