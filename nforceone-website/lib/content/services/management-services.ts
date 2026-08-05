import type { ServicePage } from "@/lib/types";

/**
 * The source page has no unique subcopy — hero and body both reuse the Web
 * App Testing template verbatim. Kept thin and honest rather than
 * reproduce a mismatched testing-specific page under a management-services
 * title, or invent new descriptive copy.
 */
export const managementServices: ServicePage = {
  slug: "management-services",
  title: "Management Services",
  category: "Platform & Consulting",
  metaDescription: "Ongoing IT management and support for your technology stack.",
  icon: "trending-up",
  heroEyebrow: "Platform & Consulting",
  heroHeadline: "Management Services",
  heroSubtext: "Ongoing IT management and support for your technology stack.",
  why: {
    heading: "Why Your Software Needs Management Services",
    paragraphs: [
      "Free up internal resources we handle day-to-day support, management, and monitoring of your IT so your team can focus on what matters most. Get in touch to discuss your specific management services needs.",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
