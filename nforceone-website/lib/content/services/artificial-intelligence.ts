import type { ServicePage } from "@/lib/types";

export const artificialIntelligence: ServicePage = {
  slug: "artificial-intelligence",
  title: "Artificial Intelligence",
  category: "Development",
  metaDescription:
    "AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across industries.",
  icon: "brain",
  heroEyebrow: "Development Services",
  heroHeadline: "Artificial Intelligence",
  heroSubtext:
    "We design and deploy AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across industries.",
  image: "/images/solutions/ai-about-us.webp",
  imageWidth: 998,
  imageHeight: 622,
  imageBleed: true,
  why: {
    heading: "Our Services",
    paragraphs: [
      "We design and deploy AI-powered solutions that automate processes, unlock data-driven insights, and enhance decision-making across industries.",
      "AI Solutions for Telecom: AI-powered IVR automation and testing, intelligent chatbots for customer support, device management, and predictive network analytics.",
    ],
  },
  typesSection: {
    heading: "Types of AI Solutions We Build",
    items: [
      { icon: "trending-up", title: "Predictive Analytics Platforms", description: "Forecast outcomes from historical data." },
      { icon: "bot", title: "Intelligent Virtual Assistants & Chatbots", description: "Automate support across channels." },
      { icon: "target", title: "Computer Vision Applications", description: "Object detection, facial recognition, and quality inspection." },
      { icon: "sparkles", title: "Recommendation Engines", description: "Real-time personalization for users." },
      { icon: "code", title: "NLP Solutions", description: "Document processing and communication analysis." },
      { icon: "cpu", title: "Custom AI/ML Models", description: "Models built for domain-specific business challenges." },
    ],
  },
  toolsSection: {
    heading: "AI Tools & Technologies We Use",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "LangChain / OpenAI APIs", "Apache Spark / MLlib", "Amazon SageMaker", "Azure Cognitive Services", "MLflow"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
