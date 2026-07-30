import type { FeatureItem, StatItem } from "@/lib/types";

export const homeHero = {
  headline:
    "Transforming Technology with Lightning Speed and Exceptional Quality.",
  subtext:
    "We're on a mission to revolutionize businesses through transformative technology solutions.",
  primaryCta: { label: "Get in Touch", href: "/contact" },
  secondaryCta: { label: "View Services", href: "/services" },
};

export const homeStats: StatItem[] = [
  {
    value: "8+",
    label: "Testing Services",
    description: "Functional & Regression to Automation & Security Testing",
  },
  {
    value: "24/7",
    label: "Quality Assurance",
    description: "Continuous Test Execution & Reporting",
  },
  {
    value: "100%",
    label: "Coverage Focus",
    description: "Web, Mobile, API & Cloud Testing Expertise",
  },
  {
    value: "0",
    label: "Critical Defects",
    description: "Shift-Left & Continuous Testing Practices",
  },
];

export const whatWeDo = {
  eyebrow: "What we do",
  heading: "Transforming Software Quality with QA Testing",
  items: [
    {
      icon: "trending-up",
      title: "Cost-effectiveness",
      description: "Affordable IT solutions that reduce costs.",
    },
    {
      icon: "sparkles",
      title: "Innovative Technology",
      description: "Built on the latest technology trends.",
    },
    {
      icon: "target",
      title: "Industry Expertise",
      description: "Tailored for healthcare, finance, and manufacturing.",
    },
    {
      icon: "rocket",
      title: "Scalability",
      description: "Solutions that grow with your business.",
    },
  ] satisfies FeatureItem[],
};

export const ourCapabilities = {
  eyebrow: "How we do it",
  heading: "Our Capabilities",
  items: [
    { icon: "git-branch", title: "CI/CD Pipeline Setup" },
    { icon: "code", title: "Infrastructure as Code (IaC)" },
    { icon: "cloud", title: "Cloud Infrastructure Management" },
    { icon: "container", title: "Containerization & Orchestration" },
    { icon: "activity", title: "Monitoring & Observability" },
    { icon: "lock", title: "Security & Compliance Automation" },
    { icon: "brain", title: "DevOps for AI/ML (MLOps)" },
    { icon: "settings", title: "Environment Automation" },
  ] satisfies FeatureItem[],
};

export const homeSolutionsSlugs = [
  "quality-assurance",
  "software-development",
  "artificial-intelligence",
  "pega-development",
  "pega-testing",
  "devops",
  "database-management",
  "data-analytics",
];

export const industriesWeServeSlugs = [
  "automotive",
  "banking-and-financial",
  "digital-media-and-advertising",
  "education-and-edutech",
  "energy-and-utilities",
  "finance-and-fintech",
  "insurance",
  "isv",
  "manufacturing",
  "retail",
  "telecom",
];
