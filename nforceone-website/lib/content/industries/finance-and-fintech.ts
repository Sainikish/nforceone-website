import type { IndustryPage } from "@/lib/types";

export const financeAndFintech: IndustryPage = {
  slug: "finance-and-fintech",
  title: "Finance and FinTech",
  metaDescription:
    "Helping financial firms, from legacy banks to digital-first startups, navigate compliance, scale infrastructure, and transform customer experiences.",
  icon: "wallet",
  image: "/industries/finance-and-fintech.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Finance and FinTech",
  heroSubtext:
    "We help financial firms — from legacy banks to digital-first startups — navigate compliance, scale infrastructure, and transform customer experiences.",
  solutions: [
    {
      icon: "server",
      title: "Core Banking System Modernization",
      description:
        "Modular, cloud-native, microservices architecture.",
    },
    {
      icon: "shield-check",
      title: "Digital Lending & KYC Automation",
      description:
        "Secure APIs, OCR, and AI underwriting.",
    },
    {
      icon: "search",
      title: "Real-Time Fraud Detection & Risk Analytics",
      description:
        "Anomaly detection and AML/CTF compliance.",
    },
    {
      icon: "trending-up",
      title: "Personalized Wealth Management Platforms",
      description:
        "Dashboards, goal-based planning, and robo-advisors.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help financial firms modernize core banking systems, automate digital lending and KYC, strengthen fraud detection, and deliver personalized wealth management.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce compliance overhead and fraud losses with automated KYC, real-time risk analytics, and cloud-native core banking modernization.",
  },
};
