import type { IndustryPage } from "@/lib/types";

export const insurance: IndustryPage = {
  slug: "insurance",
  title: "Insurance",
  metaDescription:
    "Digital-first insurance operations that build trust and agility for carriers, brokers, and insurtechs.",
  icon: "shield",
  image: "/industries/insurance.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Insurance",
  heroSubtext:
    "We enable carriers, brokers, and insurtechs to transform claims, underwriting, and risk management.",
  solutions: [
    {
      icon: "clipboard-check",
      title: "Automated Claims Processing",
      description:
        "Image recognition, NLP, document parsing, and auto-adjudication.",
    },
    {
      icon: "bar-chart",
      title: "Underwriting and Risk Analytics",
      description:
        "Historical data, IoT/telematics, and ML risk scores.",
    },
    {
      icon: "layers",
      title: "Policy Management System Modernization",
      description:
        "Modular, API-enabled systems with real-time endorsements.",
    },
    {
      icon: "shield-check",
      title: "Fraud Detection and Prevention",
      description:
        "Anomaly detection and synthetic-identity tracing.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help carriers, brokers, and insurtechs modernize policy management systems and automate claims, underwriting, and fraud detection.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Lower claims-handling and fraud losses with automated adjudication, ML-driven risk scoring, and anomaly detection.",
  },
};
