import type { ServicePage } from "@/lib/types";

export const uxTesting: ServicePage = {
  slug: "ux-testing",
  title: "UX Testing",
  category: "Testing",
  metaDescription:
    "We focus on how real users interact with your product, ensuring it's not just functional but intuitive, accessible, and enjoyable to use.",
  icon: "sparkles",
  heroEyebrow: "Testing Services",
  heroHeadline: "UX Testing",
  heroSubtext:
    "We focus on how real users interact with your product, ensuring it's not just functional, but intuitive, accessible, and enjoyable to use.",
  why: {
    heading: "Why Your Software Needs UI/UX Testing",
    paragraphs: [
      "Usability testing uncovers friction points, design flaws, and usability gaps that affect user satisfaction and engagement.",
    ],
  },
  platformsSection: {
    heading: "Platforms We Can Test",
    items: [
      "Websites & Web Apps",
      "Desktop Applications",
      "SaaS & Enterprise Tools",
      "Mobile Applications",
      "Touchscreen & Kiosk Interfaces",
      "Wearables & Smart Devices",
    ],
  },
  toolsSection: {
    heading: "UX Testing Tools & Technologies We Use",
    items: ["Selenium", "JUnit", "LoadView", "JMeter", "Postman", "BrowserStack", "Fiddler", "VirtualBox"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
