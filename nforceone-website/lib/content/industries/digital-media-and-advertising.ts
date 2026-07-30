import type { IndustryPage } from "@/lib/types";

export const digitalMediaAndAdvertising: IndustryPage = {
  slug: "digital-media-and-advertising",
  title: "Digital Media and Advertising",
  metaDescription:
    "Infrastructure, intelligence, and integrations that power impactful digital campaigns and audience-first content.",
  icon: "monitor-smartphone",
  image: "/industries/digital-media-and-advertising.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Digital Media and Advertising",
  heroSubtext:
    "We deliver the infrastructure, intelligence, and integrations for impactful digital campaigns and audience-first content.",
  solutions: [
    {
      icon: "database",
      title: "AdTech Infrastructure and Data Pipelines",
      description:
        "RTB, campaign tracking, and DSP/DMP support.",
    },
    {
      icon: "target",
      title: "Audience Segmentation and Targeting",
      description:
        "ML models built on behavior and demographic data.",
    },
    {
      icon: "globe",
      title: "Cross-Platform Content Delivery",
      description:
        "Web, mobile, CTV, and social with CDN optimization.",
    },
    {
      icon: "bar-chart",
      title: "Real-Time Campaign Analytics and Attribution",
      description:
        "Dashboards, pixel tracking, and attribution models.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help digital media and advertising companies build AdTech infrastructure, target audiences with precision, and deliver content across platforms with real-time analytics.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Optimize campaign spend and reduce waste with real-time attribution, precise audience targeting, and CDN-optimized content delivery.",
  },
};
