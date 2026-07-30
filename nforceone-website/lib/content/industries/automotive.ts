import type { IndustryPage } from "@/lib/types";

export const automotive: IndustryPage = {
  slug: "automotive",
  title: "Automotive",
  metaDescription:
    "Driving innovation across the automotive value chain — connected, autonomous, shared, and electric vehicle platforms.",
  icon: "car",
  image: "/industries/automotive.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Automotive",
  heroSubtext:
    "As the industry transitions toward connected, autonomous, shared, and electric (CASE) vehicles, we enable OEMs, suppliers, and mobility providers to embrace smart manufacturing and vehicle intelligence.",
  solutions: [
    {
      icon: "network",
      title: "Connected Vehicle Platforms and Telematics",
      description:
        "IoT and cloud platforms for real-time sensor data, remote diagnostics, usage-based insurance (UBI), OTA updates, and fleet telematics.",
    },
    {
      icon: "activity",
      title: "AI-Driven Predictive Maintenance",
      description:
        "Anticipate part failures to reduce warranty costs and downtime.",
    },
    {
      icon: "layers",
      title: "Digital Twin and Smart Manufacturing",
      description:
        "Virtual replicas, Industry 4.0 practices, and automated defect detection.",
    },
    {
      icon: "sparkles",
      title: "Customer Experience Personalization",
      description:
        "Tailored infotainment, navigation, and roadside assistance experiences.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help automotive OEMs, suppliers, and mobility providers modernize infrastructure and scale vehicle intelligence with confidence.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce warranty costs and unplanned downtime with predictive, data-driven maintenance and manufacturing.",
  },
};
