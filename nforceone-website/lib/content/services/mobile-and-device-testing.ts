import type { ServicePage } from "@/lib/types";

export const mobileAndDeviceTesting: ServicePage = {
  slug: "mobile-and-device-testing",
  title: "Mobile & Device Testing",
  category: "Testing",
  metaDescription:
    "Comprehensive mobile and device testing covering manual and automation testing, network validation, hardware integrations, and distributed testing at scale.",
  icon: "tablet-smartphone",
  heroEyebrow: "Testing Services",
  heroHeadline: "Mobile & Device Testing",
  heroSubtext:
    "Comprehensive mobile and device testing covering manual and automation testing, network validation, hardware integrations, and distributed testing at scale.",
  why: {
    heading: "Why Device & Mobile Testing Matters",
    paragraphs: [
      "Mobile ecosystems are fragmented across devices, OS versions, networks, and hardware dependencies.",
    ],
  },
  typesSection: {
    heading: "Platforms and Scenarios We Test",
    items: [
      {
        icon: "smartphone",
        title: "iOS Devices",
        description:
          "OS compatibility, performance, and App Store readiness.",
      },
      {
        icon: "bot",
        title: "Android Devices",
        description: "Fragmentation across OEMs, OS versions, and configs.",
      },
      {
        icon: "puzzle",
        title: "Custom Device Integrations",
        description: "Device-specific features, APIs, and enterprise apps.",
      },
      {
        icon: "app-window",
        title: "Mobile Apps (Consumer & Enterprise)",
        description: "End-to-end user flows, performance, and usability.",
      },
      {
        icon: "cpu",
        title: "Hardware-Integrated Applications",
        description: "Cameras, IoT devices, scanners, sensors, and wearables.",
      },
      {
        icon: "layout-grid",
        title: "Cross-Platform Apps",
        description: "Flutter, React Native, and hybrid frameworks.",
      },
    ],
  },
  toolsSection: {
    heading: "Device Testing Tools & Technologies",
    items: [
      "Appium",
      "Selenium",
      "BrowserStack / Device Farms",
      "Charles Proxy",
      "Postman",
      "JMeter",
      "Firebase Test Lab",
      "Xcode & Android Studio",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Deliver reliable mobile experiences, reduce production issues, scale confidently across devices, networks, and users.",
  },
};
