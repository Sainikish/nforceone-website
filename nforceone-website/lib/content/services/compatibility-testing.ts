import type { ServicePage } from "@/lib/types";

export const compatibilityTesting: ServicePage = {
  slug: "compatibility-testing",
  title: "Compatibility Testing",
  category: "Testing",
  metaDescription:
    "We ensure your software performs consistently across different devices, browsers, operating systems, and network environments.",
  icon: "monitor-smartphone",
  heroEyebrow: "Testing Services",
  heroHeadline: "Compatibility Testing",
  heroSubtext:
    "We ensure your software performs consistently across different devices, browsers, operating systems, and network environments.",
  why: {
    heading: "Why Your Software Needs Compatibility Testing",
    paragraphs: [
      "We ensure your software performs consistently across different devices, browsers, operating systems, and network environments.",
    ],
  },
  typesSection: {
    heading: "Platforms We Can Test",
    items: [
      { icon: "globe", title: "Websites & Web Apps", description: "Testing across Chrome, Safari, Firefox, Edge, and varying device screen sizes." },
      { icon: "app-window", title: "Desktop Applications", description: "Testing across different operating system environments and hardware setups." },
      { icon: "smartphone", title: "Mobile Applications", description: "Testing across devices, screen resolutions, OS versions, and hardware configurations." },
      { icon: "cloud", title: "Cloud-Based Platforms", description: "Ensuring seamless access across browsers and devices in hybrid cloud environments." },
    ],
  },
  toolsSection: {
    heading: "Compatibility Testing Tools & Technologies We Use",
    items: ["Selenium", "JUnit", "LoadView", "JMeter", "Postman", "BrowserStack", "Fiddler", "VirtualBox"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
