import type { IndustryPage } from "@/lib/types";

export const bankingAndFinancial: IndustryPage = {
  slug: "banking-and-financial",
  title: "Banking and Financial",
  metaDescription:
    "Empowering secure, scalable, and intelligent financial services for banks, fintechs, and financial institutions.",
  icon: "landmark",
  image: "/industries/banking-and-financial.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Banking and Financial",
  heroSubtext:
    "We support banks, fintechs, and financial institutions with intelligent, compliant, and scalable technology.",
  solutions: [
    {
      icon: "server",
      title: "Core Banking Modernization",
      description:
        "Cloud-native platforms, real-time processing, and API-first architecture.",
    },
    {
      icon: "shield-check",
      title: "Fraud Detection and Risk Analytics",
      description:
        "AI models and behavioral analytics that reduce false positives.",
    },
    {
      icon: "users",
      title: "Customer 360 and Personalization Engines",
      description:
        "Unified profiles, targeted campaigns, and chatbots.",
    },
    {
      icon: "clipboard-check",
      title: "Regulatory Compliance and Reporting Automation",
      description:
        "GDPR, PCI-DSS, AML, and audit trails.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help banks, fintechs, and financial institutions modernize core banking systems and strengthen fraud detection, compliance, and reporting.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce false positives and manual compliance overhead with AI-driven risk analytics and automated regulatory reporting.",
  },
};
