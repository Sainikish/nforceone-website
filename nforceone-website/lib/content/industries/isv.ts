import type { IndustryPage } from "@/lib/types";

export const isv: IndustryPage = {
  slug: "isv",
  title: "ISV (Independent Software Vendors)",
  metaDescription:
    "Enabling product-first companies to scale with confidence through modern DevOps, testing, and AI integrations.",
  icon: "boxes",
  image: "/industries/isv.svg",
  heroEyebrow: "Industries",
  heroHeadline: "ISV (Independent Software Vendors)",
  heroSubtext:
    "We act as an engineering accelerator through modern DevOps, testing, and AI integrations.",
  solutions: [
    {
      icon: "container",
      title: "Cloud-Native Application Development",
      description:
        "Microservices, containers, and serverless architectures.",
    },
    {
      icon: "check-circle",
      title: "Automated QA and Regression Testing",
      description:
        "CI/CD-integrated testing frameworks.",
    },
    {
      icon: "layout-grid",
      title: "Multi-Tenant SaaS Enablement",
      description:
        "Tenant isolation, billing, onboarding, and usage analytics.",
    },
    {
      icon: "puzzle",
      title: "API Management and Third-Party Integrations",
      description:
        "Auth, rate limiting, and integrations with Stripe, Salesforce, Twilio, and Slack.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help independent software vendors build cloud-native applications and scale multi-tenant SaaS products with automated QA baked in.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Ship faster and cut regression costs with CI/CD-integrated automated testing and streamlined API integrations.",
  },
};
