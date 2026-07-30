import type { ServicePage } from "@/lib/types";

/**
 * The source page's own intro is genuine and unique. The generic
 * "Platforms and Website Types We Test" grid and QA-tool grid it also
 * reuses (shared with several other pages) were dropped since they
 * describe website testing, not analytics work. The "Stable Performance /
 * Comprehensive Functionality / ..." value grid is kept — it's real,
 * itemized content that sits directly under this page's own heading, even
 * though the same generic quality attributes are reused on other pages.
 */
export const dataAnalytics: ServicePage = {
  slug: "data-analytics",
  title: "Data Analytics",
  category: "Platform & Consulting",
  metaDescription:
    "Advanced analytics frameworks that transform information into action — from rapid dashboards to predictive modeling.",
  icon: "bar-chart",
  heroEyebrow: "Platform & Consulting",
  heroHeadline: "Data Analytics",
  heroSubtext:
    "Smarter decisions start with clearer data. Our advanced analytics frameworks transform information into action — from rapid dashboards to predictive modeling pipelines.",
  why: {
    heading: "Unleashing Insights and Data Analytics",
    paragraphs: [
      "Smarter decisions start with clearer data. Our advanced analytics frameworks transform information into action — from rapid dashboards to predictive modeling pipelines.",
    ],
  },
  typesSection: {
    heading: "Data Analytics Services We Offer",
    items: [
      { icon: "gauge", title: "Stable Performance" },
      { icon: "layers", title: "Comprehensive Functionality" },
      { icon: "sparkles", title: "Enhanced User Experience" },
      { icon: "monitor-smartphone", title: "Cross-Platform Compatibility" },
      { icon: "lock", title: "Security & Data Protection" },
      { icon: "wrench", title: "Ongoing Support & Optimization" },
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
