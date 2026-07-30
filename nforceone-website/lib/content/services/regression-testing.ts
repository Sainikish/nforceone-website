import type { ServicePage } from "@/lib/types";

export const regressionTesting: ServicePage = {
  slug: "regression-testing",
  title: "Regression Testing",
  category: "Testing",
  metaDescription:
    "We ensure new updates, enhancements, or bug fixes don't unintentionally break existing functionality, maintaining stability and reliability.",
  icon: "git-branch",
  heroEyebrow: "Testing Services",
  heroHeadline: "Regression Testing",
  heroSubtext:
    "We ensure new updates, enhancements, or bug fixes don't unintentionally break existing functionality — maintaining stability, reliability, and user trust across every release.",
  why: {
    heading: "Why Your Software Needs Regression Testing",
    paragraphs: [
      "We ensure new updates, enhancements, or bug fixes don't unintentionally break existing functionality — maintaining stability, reliability, and user trust across every release.",
    ],
  },
  typesSection: {
    heading: "Types of Regression Testing We Perform",
    items: [
      { icon: "globe", title: "Websites & Web Apps", description: "Checking for broken links, JS issues, form malfunctions, and layout inconsistencies after each deployment." },
      { icon: "app-window", title: "Desktop Applications", description: "Ensuring new features and patches don't interfere with legacy functionality, configurations, or integrations." },
      { icon: "cloud", title: "Cloud & SaaS Platforms", description: "Verifying backward compatibility and user-specific multi-tenant scenarios." },
      { icon: "smartphone", title: "Mobile Applications", description: "Validating workflows, gestures, and UI responsiveness on real iOS and Android devices." },
      { icon: "puzzle", title: "APIs & Microservices", description: "Retesting endpoints and data flows to keep integrations intact." },
    ],
  },
  toolsSection: {
    heading: "Functional & Regression Testing Toolkit",
    items: ["Selenium", "JUnit", "TestNG", "Cypress", "Postman", "BrowserStack", "Appium", "VirtualBox"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
