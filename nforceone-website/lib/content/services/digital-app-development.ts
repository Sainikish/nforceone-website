import type { ServicePage } from "@/lib/types";

/**
 * The source page's own hero intro is genuine and unique, but the section
 * beneath it reuses the Web App Testing template verbatim ("Why Your
 * Website... Needs Software Testing" + a generic QA-tool grid). Kept the
 * real intro, dropped the mismatched QA-testing-tool grid since it doesn't
 * describe app development work.
 */
export const digitalAppDevelopment: ServicePage = {
  slug: "digital-app-development",
  title: "Digital App Development",
  category: "Development",
  metaDescription:
    "Intuitive, high-performing web and mobile applications that accelerate digital transformation.",
  icon: "layout-grid",
  heroEyebrow: "Development Services",
  heroHeadline: "Digital App Development",
  heroSubtext:
    "We design and develop intuitive, high-performing web and mobile applications that deliver seamless user experiences and accelerate digital transformation.",
  why: {
    heading: "Why Choose Our Digital App Development Services",
    paragraphs: [
      "We design and develop intuitive, high-performing web and mobile applications that deliver seamless user experiences and accelerate digital transformation.",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
