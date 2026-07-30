import type { ServicePage } from "@/lib/types";

export const posTesting: ServicePage = {
  slug: "pos-testing",
  title: "POS Testing",
  category: "Testing",
  metaDescription:
    "POS testing that ensures system stability, seamless integration, and secure user experiences for every retail and hospitality transaction.",
  icon: "credit-card",
  heroEyebrow: "Testing Services",
  heroHeadline: "POS Testing",
  heroSubtext:
    "In retail and hospitality, every transaction matters. Our POS testing ensures system stability, seamless integration, and secure user experiences.",
  why: {
    heading: "Why Your POS System Needs Software Testing",
    paragraphs: [
      "In retail and hospitality, every transaction matters. Our POS testing ensures system stability, seamless integration, and secure user experiences.",
    ],
  },
  typesSection: {
    heading: "Types of POS Systems We Test",
    items: [
      {
        icon: "shopping-cart",
        title: "Retail POS",
        description: "Traditional checkout terminals and desktop systems.",
      },
      {
        icon: "smartphone",
        title: "Mobile POS",
        description: "Tablet and smartphone POS for on-the-go sales.",
      },
      {
        icon: "network",
        title: "Omnichannel POS",
        description: "Unified online and in-store operations.",
      },
      {
        icon: "flame",
        title: "Restaurant POS",
        description:
          "Table-side ordering, kitchen displays, and tip/gratuity workflows.",
      },
      {
        icon: "monitor-smartphone",
        title: "Self-Service Kiosks",
        description: "Touchscreen customer-driven ordering and checkout.",
      },
      {
        icon: "puzzle",
        title: "Specialized POS",
        description: "Salons, clinics, car rentals, and other verticals.",
      },
    ],
  },
  toolsSection: {
    heading: "POS Testing Tools & Technologies We Use",
    items: [
      "Selenium",
      "JUnit",
      "LoadView",
      "JMeter",
      "Postman",
      "BrowserStack",
      "Fiddler",
      "VirtualBox",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
