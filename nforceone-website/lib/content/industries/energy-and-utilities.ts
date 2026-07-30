import type { IndustryPage } from "@/lib/types";

export const energyAndUtilities: IndustryPage = {
  slug: "energy-and-utilities",
  title: "Energy and Utilities",
  metaDescription:
    "Helping utilities and energy providers adopt intelligent systems for reliability, sustainability, and agility.",
  icon: "flame",
  image: "/industries/energy-and-utilities.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Energy and Utilities",
  heroSubtext:
    "We help utilities and energy providers adopt intelligent systems for reliability, sustainability, and agility.",
  solutions: [
    {
      icon: "network",
      title: "Smart Grid Management and IoT Integration",
      description:
        "Smart meters, load balancing, and outage detection.",
    },
    {
      icon: "trending-up",
      title: "Energy Trading and Forecasting Platforms",
      description:
        "AI demand prediction and risk modeling.",
    },
    {
      icon: "credit-card",
      title: "Customer Experience and Billing Modernization",
      description:
        "CIS/billing systems and self-service portals.",
    },
    {
      icon: "bar-chart",
      title: "Sustainability and Carbon Tracking Dashboards",
      description:
        "Emissions, ESG, and decarbonization tracking.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help utilities and energy providers modernize smart grid infrastructure, energy trading platforms, billing systems, and sustainability reporting.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Improve reliability and reduce operational costs with smart grid IoT, AI-driven demand forecasting, and modernized billing systems.",
  },
};
