import type { ServicePage } from "@/lib/types";

export const functionalTesting: ServicePage = {
  slug: "functional-testing",
  title: "Functional Testing",
  category: "Testing",
  metaDescription:
    "Our expert QA team simulates real-world scenarios to identify and resolve issues before they reach users, minimizing risk and ensuring stability.",
  icon: "clipboard-check",
  heroEyebrow: "Testing Services",
  heroHeadline: "Functional Testing",
  heroSubtext:
    "Our expert QA team simulates real-world scenarios, identifying and resolving issues before they reach your users — minimising risk, ensuring stability, and building confidence in every release.",
  why: {
    heading: "Why Your Software Needs Functional Testing",
    paragraphs: [
      "Functional testing validates each feature against business requirements, identifying and resolving issues before they reach your users and building confidence in every release.",
    ],
  },
  typesSection: {
    heading: "Types of Software Products We Test",
    items: [
      { icon: "globe", title: "Websites and Web Apps", description: "Functional and usability testing across browsers, devices, and operating systems." },
      { icon: "building-2", title: "Enterprise Software", description: "ERP/CRM data integrity, workflow logic, integrations, and security compliance." },
      { icon: "network", title: "IoT Solutions", description: "Software and hardware components, data transmission, and device interoperability." },
      { icon: "smartphone", title: "Mobile Applications", description: "Testing on real devices and operating systems, covering native and cross-platform apps." },
      { icon: "database", title: "Big Data Systems", description: "Accuracy, performance, and scalability at high data volumes." },
    ],
  },
  toolsSection: {
    heading: "Functional Testing Tools & Technologies We Use",
    items: ["Selenium", "JUnit", "TestNG", "Cypress", "Postman", "BrowserStack", "Playwright", "VirtualBox"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
