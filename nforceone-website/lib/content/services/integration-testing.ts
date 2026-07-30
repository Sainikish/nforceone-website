import type { ServicePage } from "@/lib/types";

export const integrationTesting: ServicePage = {
  slug: "integration-testing",
  title: "Integration Testing",
  category: "Testing",
  metaDescription:
    "We validate how different modules, services, and systems interact, identifying data mismatches, interface issues, and communication failures early.",
  icon: "puzzle",
  heroEyebrow: "Testing Services",
  heroHeadline: "Integration Testing",
  heroSubtext:
    "We validate how different modules, services, or systems interact. Even if individual components work in isolation, they can break when integrated — we identify data mismatches, interface issues, and communication failures early.",
  why: {
    heading: "Why Your Software Needs Integration Testing",
    paragraphs: [
      "Even if individual components work in isolation, they can break when integrated. We validate how different modules, services, or systems interact, identifying data mismatches, interface issues, and communication failures early.",
    ],
  },
  typesSection: {
    heading: "Platforms We Can Test",
    items: [
      { icon: "globe", title: "Websites & Web Apps", description: "Validating data flow between frontend, backend, APIs, and third-party tools." },
      { icon: "app-window", title: "Desktop Applications", description: "Testing internal modules and external systems, including database, file, and device dependencies." },
      { icon: "building-2", title: "Enterprise Systems", description: "Finance, HR, and sales module integrations, covering workflows, data syncs, and role-based access." },
      { icon: "cloud", title: "Cloud & Microservices Architectures", description: "Testing APIs and message queues for stability, data integrity, and error handling." },
    ],
  },
  toolsSection: {
    heading: "Integration Testing Tools & Technologies We Use",
    items: ["Selenium", "JUnit", "TestComplete", "Cypress", "Postman", "BrowserStack", "REST Assured", "TestNG"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
