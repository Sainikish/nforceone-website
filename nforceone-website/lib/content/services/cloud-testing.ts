import type { ServicePage } from "@/lib/types";

export const cloudTesting: ServicePage = {
  slug: "cloud-testing",
  title: "Cloud Testing",
  category: "Testing",
  metaDescription:
    "Cloud testing services that validate performance, security, and scalable reliability across SaaS, IaaS, PaaS, and NaaS applications.",
  icon: "cloud",
  heroEyebrow: "Testing Services",
  heroHeadline: "Cloud Testing",
  heroSubtext:
    "Cloud apps demand peak performance, airtight security, and scalable reliability. Our testing simulates real-world conditions to validate resilience and meet SLAs.",
  why: {
    heading: "Why Your Cloud Application Needs Software Testing",
    paragraphs: [
      "Cloud apps demand peak performance, airtight security, and scalable reliability. Our testing simulates real-world conditions to validate resilience and meet SLAs.",
    ],
  },
  typesSection: {
    heading: "Types of Cloud-Based Products We Test",
    items: [
      { icon: "app-window", title: "Software as a Service (SaaS)", description: "Multi-tenant applications with frequent updates and role-based workflows." },
      { icon: "server", title: "Infrastructure as a Service (IaaS)", description: "Virtualized compute, storage, and networking." },
      { icon: "layers", title: "Platform as a Service (PaaS)", description: "App deployment, API integrations, and DevOps pipelines." },
      { icon: "network", title: "Network as a Service (NaaS)", description: "VPNs, firewalls, and bandwidth provisioning." },
    ],
  },
  toolsSection: {
    heading: "Cloud Testing Tools & Technologies We Use",
    items: ["Nessus", "LoadStorm", "Testsigma", "BlazeMeter", "WireShark", "SOASTA CloudTest", "AppPerfect", "Xamarin Test Cloud"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
