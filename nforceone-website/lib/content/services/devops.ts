import type { ServicePage } from "@/lib/types";

/**
 * The source page's intro paragraph is leftover Payment Testing placeholder
 * copy ("One payment glitch can mean lost sales..."). Dropped that in favor
 * of the page's own real intro sentence, and replaced the generic reused
 * QA-tool grid with the site's own genuine DevOps capability list (from the
 * homepage's "Our Capabilities" section) — real, same-document content
 * relocated to the page it actually describes, not invented.
 */
export const devops: ServicePage = {
  slug: "devops",
  title: "DevOps",
  category: "Platform & Consulting",
  metaDescription:
    "Modern DevOps practices that transform software delivery into a fast, repeatable, and reliable process.",
  icon: "settings",
  heroEyebrow: "Platform & Consulting",
  heroHeadline: "DevOps",
  heroSubtext:
    "We help businesses adopt modern DevOps practices, transforming software delivery into a fast, repeatable, and reliable process.",
  why: {
    heading: "Our DevOps Delivery Process",
    paragraphs: [
      "We help businesses adopt modern DevOps practices, transforming software delivery into a fast, repeatable, and reliable process.",
    ],
  },
  typesSection: {
    heading: "Our Capabilities",
    items: [
      { icon: "git-branch", title: "CI/CD Pipeline Setup", id: "ci-cd-pipeline" },
      { icon: "code", title: "Infrastructure as Code (IaC)", id: "infrastructure-as-code" },
      { icon: "cloud", title: "Cloud Infrastructure Management", id: "cloud-infrastructure" },
      { icon: "container", title: "Containerization & Orchestration", id: "containerization" },
      { icon: "activity", title: "Monitoring & Observability", id: "monitoring" },
      { icon: "lock", title: "Security & Compliance Automation", id: "security-compliance" },
      { icon: "brain", title: "DevOps for AI/ML (MLOps)", id: "mlops" },
      { icon: "settings", title: "Environment Automation", id: "environment-automation" },
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
