import type { ServicePage } from "@/lib/types";

/**
 * The generic "Platforms and Website Types We Test" grid and QA-tool grid
 * this page also reuses (shared with several other pages) were dropped
 * since they describe generic website testing, not Pega-specific work. The
 * "Stable Performance / Comprehensive Functionality / ..." value grid is
 * kept — it's real, itemized content under this page's own heading.
 */
export const pegaTesting: ServicePage = {
  slug: "pega-testing",
  title: "Pega Testing",
  category: "Development",
  metaDescription:
    "Robust testing solutions for Pega applications — stability, functionality, UX, and security.",
  icon: "search",
  heroEyebrow: "Development Services",
  heroHeadline: "Pega Testing",
  heroSubtext:
    "Robust Testing Solutions for Pega Applications, covering stable performance, comprehensive functionality, enhanced user experience, cross-platform compatibility, security, and ongoing support.",
  why: {
    heading: "Robust Testing Solutions for Pega Applications",
    paragraphs: [
      "We deliver robust testing solutions for Pega applications, covering stable performance, comprehensive functionality, enhanced user experience, cross-platform compatibility, security and data protection, and ongoing support and optimization.",
    ],
  },
  typesSection: {
    heading: "Types of PEGA Testing Services We Offer",
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
