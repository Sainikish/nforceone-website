import type { IndustryPage } from "@/lib/types";

export const retail: IndustryPage = {
  slug: "retail",
  title: "Retail and eCommerce",
  metaDescription:
    "Delivering frictionless commerce for omni-channel retailers and digital-first brands.",
  icon: "shopping-cart",
  image: "/industries/retail.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Retail and eCommerce",
  heroSubtext:
    "We support omni-channel retailers and digital-first brands with scalable, secure, intelligent solutions.",
  solutions: [
    {
      icon: "boxes",
      title: "Intelligent Inventory & Supply Chain Management",
      description:
        "Predictive analytics, IoT, and auto-reordering.",
    },
    {
      icon: "puzzle",
      title: "Headless Commerce and API-first Platforms",
      description:
        "Decoupled backend/frontend with modular integrations.",
    },
    {
      icon: "sparkles",
      title: "Personalized Product Recommendations",
      description:
        "Behavior, search, and purchase data driving upsells and cross-sells.",
    },
    {
      icon: "users",
      title: "Unified Customer Data & Loyalty Systems",
      description:
        "CDPs and loyalty APIs that increase customer lifetime value.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help omni-channel retailers and digital-first brands modernize inventory systems and move to headless, API-first commerce platforms.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce stockouts and manual reordering with predictive inventory analytics while lifting customer lifetime value through personalization and loyalty systems.",
  },
};
