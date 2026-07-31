import type { ServicePage } from "@/lib/types";

export const qualityAssurance: ServicePage = {
  slug: "quality-assurance",
  title: "Quality Assurance",
  category: "Testing",
  metaDescription:
    "Comprehensive testing and QA services that ensure software reliability, performance, and security.",
  icon: "shield-check",
  heroEyebrow: "Testing Services",
  heroHeadline: "Quality Assurance",
  heroSubtext:
    "We deliver comprehensive testing and QA services that ensure software reliability, performance, and security, helping businesses achieve flawless user experiences and faster time-to-market.",
  heroBackgroundImage: "/backgrounds/qa-scene.webp",
  why: {
    heading: "Transforming Software Quality with QA Testing",
    paragraphs: [
      "We deliver comprehensive testing and QA services that ensure software reliability, performance, and security, helping businesses achieve flawless user experiences and faster time-to-market.",
    ],
  },
  typesSection: {
    heading: "How We Organize Quality Assurance",
    items: [
      {
        icon: "layers",
        title: "Full Cycle Services",
        description:
          "End-to-end QA across the full software development lifecycle.",
      },
      {
        icon: "target",
        title: "Services By Type",
        description:
          "Manual, automation, performance, functional, regression, and more — see our full services catalog.",
      },
      {
        icon: "app-window",
        title: "Services By Platform",
        description:
          "Web, mobile, cloud, IoT, and device testing tailored to your platform.",
      },
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
