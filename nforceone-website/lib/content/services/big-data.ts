import type { ServicePage } from "@/lib/types";

/**
 * The source page for Big Data has no unique copy at all — it's a verbatim
 * duplicate of the Web App Testing template with no H1/hero and no
 * Big-Data-specific content anywhere in the crawl. Rather than either
 * keep the mismatched duplicate or invent new marketing copy, this page is
 * intentionally kept thin and honest until real Big Data copy exists.
 */
export const bigData: ServicePage = {
  slug: "big-data",
  title: "Big Data",
  category: "Platform & Consulting",
  metaDescription: "Big data engineering and analytics services.",
  icon: "server",
  heroEyebrow: "Platform & Consulting",
  heroHeadline: "Big Data",
  heroSubtext: "Big data engineering and analytics services.",
  why: {
    heading: "Big Data Services",
    paragraphs: [
      "Our big data practice covers data engineering, pipelines, and large-scale analytics tailored to your workloads. Get in touch to discuss your specific big data requirements.",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
