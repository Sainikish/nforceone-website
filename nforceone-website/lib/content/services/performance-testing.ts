import type { ServicePage } from "@/lib/types";

export const performanceTesting: ServicePage = {
  slug: "performance-testing",
  title: "Performance Testing",
  category: "Testing",
  metaDescription:
    "We ensure your software performs reliably under real-world conditions, detecting speed, stability, and scalability issues before users do.",
  icon: "gauge",
  heroEyebrow: "Testing Services",
  heroHeadline: "Performance Testing",
  heroSubtext:
    "We ensure your software performs reliably under real-world conditions, detecting speed, stability, and scalability issues before your users experience them.",
  why: {
    heading: "Why Your Software Needs Performance Testing",
    paragraphs: [
      "By simulating load scenarios and monitoring system behaviour, we identify bottlenecks, optimise responsiveness, and guarantee a smooth, efficient experience even at scale.",
    ],
  },
  typesSection: {
    heading: "Platforms We Can Test",
    items: [
      { icon: "globe", title: "Websites and Web Apps", description: "Loading speed, responsiveness, and performance across browsers, devices, OS, and screen sizes." },
      { icon: "smartphone", title: "Mobile Applications", description: "Testing on real devices and network conditions, covering load times, UI responsiveness, and resource usage." },
      { icon: "app-window", title: "Desktop Applications", description: "Testing across different hardware setups, OS versions, and configurations." },
      { icon: "cloud", title: "Cloud Services", description: "Testing varying user loads and concurrent usage for SaaS/PaaS/IaaS scaling and uptime." },
    ],
  },
  toolsSection: {
    heading: "Performance Testing Tools & Technologies We Use",
    items: ["Apache JMeter", "LoadRunner", "Gatling", "Grafana", "Locust", "BlazeMeter", "NeoLoad", "Artillery"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
