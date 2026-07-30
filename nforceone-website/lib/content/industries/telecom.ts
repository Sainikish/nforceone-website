import type { IndustryPage } from "@/lib/types";

export const telecom: IndustryPage = {
  slug: "telecom",
  title: "Telecommunication",
  metaDescription:
    "Helping telecom providers modernize infrastructure, automate customer service, and derive intelligence from network data.",
  icon: "radio-tower",
  image: "/industries/telecom.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Telecommunication",
  heroSubtext:
    "We help telecom providers modernize infrastructure, automate customer service, and derive intelligence from network data.",
  solutions: [
    {
      icon: "bot",
      title: "AI-Powered Virtual Agents and IVR Systems",
      description:
        "LLM voice and text agents that improve CSAT by 65%+.",
    },
    {
      icon: "activity",
      title: "Predictive Network Maintenance",
      description:
        "Telemetry and AI anomaly detection for SLA compliance.",
    },
    {
      icon: "server",
      title: "5G and Edge Infrastructure Modernization",
      description:
        "Edge nodes, VNFs, and real-time orchestration.",
    },
    {
      icon: "users",
      title: "Real-Time Subscriber Analytics and Churn Reduction",
      description:
        "CDPs, sentiment analysis, and retention modeling.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help telecom providers deploy AI-powered virtual agents, predictive network maintenance, 5G and edge infrastructure, and real-time subscriber analytics.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce operational costs and churn with AI-driven virtual agents, predictive network maintenance, and real-time subscriber analytics.",
  },
};
