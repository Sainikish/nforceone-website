import type { ServicePage } from "@/lib/types";

export const mobileAppTesting: ServicePage = {
  slug: "mobile-app-testing",
  title: "Mobile App Testing",
  category: "Testing",
  metaDescription:
    "Rigorous mobile app testing that ensures flawless performance across all platforms.",
  icon: "smartphone",
  heroEyebrow: "Testing Services",
  heroHeadline: "Mobile App Testing",
  heroSubtext:
    "Exceptional mobile experiences are engineered; our rigorous app testing ensures flawless performance across all platforms.",
  why: {
    heading: "Why Your Mobile Application Needs Software Testing",
    paragraphs: [
      "Modern users demand speed, security, and seamless compatibility. End-to-end mobile testing safeguards your app from bugs and delivers global performance.",
    ],
  },
  typesSection: {
    heading: "Popular Mobile Solutions We Can Test",
    items: [
      {
        icon: "smartphone",
        title: "Native Mobile Apps",
        description: "iOS and Android apps built on platform SDKs.",
      },
      {
        icon: "layout-grid",
        title: "Cross-Platform Apps",
        description: "Flutter, React Native, and Xamarin applications.",
      },
      {
        icon: "app-window",
        title: "Mobile Web Apps",
        description: "Browser-based, responsive mobile experiences.",
      },
      {
        icon: "puzzle",
        title: "Hybrid Mobile Apps",
        description: "Web technology wrapped in a native container.",
      },
    ],
  },
  toolsSection: {
    heading: "Mobile App Testing Tools & Technologies We Use",
    items: [
      "Appium",
      "Selenium",
      "LoadRunner",
      "JMeter",
      "Jenkins",
      "Postman",
      "UI Automator",
      "TestLink",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
