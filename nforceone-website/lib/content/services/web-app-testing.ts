import type { ServicePage } from "@/lib/types";

export const webAppTesting: ServicePage = {
  slug: "web-app-testing",
  title: "Web App Testing",
  category: "Testing",
  metaDescription:
    "Delivering a fast, secure, and intuitive web experience is no longer optional; even small issues can cost traffic, reputation, and revenue.",
  icon: "app-window",
  heroEyebrow: "Testing Services",
  heroHeadline: "Web App Testing",
  heroSubtext:
    "Delivering a fast, secure, and intuitive web experience is no longer optional; even small issues can cost traffic, reputation, and revenue.",
  why: {
    heading: "Why Your Website or Web Application Needs Software Testing",
    paragraphs: [
      "Delivering a fast, secure, and intuitive web experience is no longer optional; even small issues can cost traffic, reputation, and revenue.",
    ],
  },
  typesSection: {
    heading: "Platforms and Website Types We Test",
    items: [
      {
        icon: "globe",
        title: "Websites",
        description: "Marketing sites, e-commerce stores, and corporate portals.",
      },
      {
        icon: "lock",
        title: "Web Portals",
        description: "Login systems, admin panels, and multi-role access.",
      },
      {
        icon: "code",
        title: "Web Applications",
        description: "SPAs, dashboards, and complex frontend logic.",
      },
      {
        icon: "cloud",
        title: "SaaS Applications",
        description: "Scalable, multi-tenant platforms.",
      },
    ],
  },
  toolsSection: {
    heading: "Tools and Technologies We Use",
    items: [
      "Selenium",
      "Ranorex",
      "TestComplete",
      "BrowserStack",
      "SoapUI",
      "TestProject",
      "NetSparker",
      "Katalon Studio",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
