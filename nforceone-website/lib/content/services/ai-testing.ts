import type { ServicePage } from "@/lib/types";

export const aiTesting: ServicePage = {
  slug: "ai-testing",
  title: "AI Testing",
  category: "Testing",
  metaDescription:
    "We test LLMs, chatbots, and voice agents across accuracy, safety, and scalability benchmarks using human and automated QA frameworks.",
  icon: "bot",
  heroEyebrow: "Testing Services",
  heroHeadline: "AI Testing",
  heroSubtext:
    "Ensure your AI systems behave as intended — every prompt, output, and interaction. We test LLMs, chatbots, and voice agents across accuracy, safety, and scalability benchmarks using human and automated QA frameworks.",
  why: {
    heading: "Why Your AI Systems Need Specialized Testing",
    paragraphs: [
      "Unlike traditional software, AI systems evolve — and so do their risks. From hallucinations to bias, our AI-first testing approach helps eliminate blind spots, improve model alignment, and ensure trust, compliance, and usability.",
    ],
  },
  typesSection: {
    heading: "Popular AI Solutions We Can Test",
    items: [
      { icon: "bot", title: "Chatbots & Virtual Assistants", description: "Conversational agents on web, mobile, Slack, WhatsApp, etc." },
      { icon: "search", title: "RAG & Search Agents", description: "Retrieval-augmented generation, vector stores, document embeddings." },
      { icon: "cpu", title: "Fine-Tuned LLMs", description: "Custom LLMs trained on domain-specific data or tasks." },
      { icon: "phone", title: "Voice AI & IVR Systems", description: "Speech-driven systems for support, sales, internal workflows." },
      { icon: "users", title: "Multi-Agent Systems", description: "Collaborative agents with reasoning, memory, function calling." },
      { icon: "bar-chart", title: "Evaluation Frameworks", description: "LangSmith, LangFuse, Ragas, TruLens, custom pipelines." },
    ],
  },
  toolsSection: {
    heading: "AI Testing Tools & Technologies We Use",
    items: ["Appium", "Selenium", "LoadRunner", "JMeter", "Jenkins", "Postman", "UI Automator", "TestLink"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
