import type { ServicePage } from "@/lib/types";

/**
 * The source page's section heading read "Why Your Business Needs
 * Automation Testing" (leftover from the Automation Testing page) even
 * though this is the Consulting Testing page. Corrected the heading label
 * only — the paragraph beneath it was already genuinely about consulting.
 */
export const consultingTesting: ServicePage = {
  slug: "consulting-testing",
  title: "Consulting Testing",
  category: "Testing",
  metaDescription:
    "QA process and strategy consulting leveraging 15+ years of testing expertise.",
  icon: "users",
  heroEyebrow: "Testing Services",
  heroHeadline: "Consulting Testing",
  heroSubtext:
    "Leverage our 15+ years of proven testing expertise to elevate your QA processes, reduce testing costs, and eliminate quality issues from your software products.",
  why: {
    heading: "Why Your Business Needs Consulting Testing",
    paragraphs: [
      "Leverage our 15+ years of proven testing expertise to elevate your QA processes, reduce testing costs, and eliminate quality issues from your software products.",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
