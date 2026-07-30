import type { ServicePage } from "@/lib/types";

export const pegaDevelopment: ServicePage = {
  slug: "pega-development",
  title: "PEGA Development",
  category: "Development",
  metaDescription:
    "PEGA-certified experts design, build, and optimize enterprise-grade BPM and CRM solutions with intelligent automation.",
  icon: "workflow",
  heroEyebrow: "Development Services",
  heroHeadline: "PEGA Development",
  heroSubtext:
    "Our PEGA-certified experts design, build, and optimize enterprise-grade BPM and CRM solutions, streamlining workflows with intelligent automation.",
  why: {
    heading: "Why Your Business Needs PEGA Development",
    paragraphs: [
      "Scalable, low-code applications that automate complex processes, improve efficiency, and deliver exceptional end-user experiences.",
    ],
  },
  typesSection: {
    heading: "Types of PEGA Solutions We Deliver",
    items: [
      { icon: "users", title: "Customer Service Applications", description: "Omni-channel service portals and case management." },
      { icon: "repeat", title: "Workflow Automation Solutions", description: "Replace manual processes with automated workflows." },
      { icon: "layers", title: "BPM Applications", description: "Rules-based decisioning end-to-end." },
      { icon: "app-window", title: "Digital Self-Service Portals", description: "Reduce support workload with self-service." },
      { icon: "building-2", title: "Industry-Specific PEGA Solutions", description: "Solutions for banking, insurance, healthcare, and telecom." },
      { icon: "git-branch", title: "Legacy Modernization with PEGA", description: "Migrate legacy systems onto the PEGA platform." },
    ],
  },
  toolsSection: {
    heading: "PEGA Tools & Technologies We Use",
    items: ["App Studio", "Dev Studio", "PEGA Deployment Manager", "PegaUnit", "Pega API Explorer", "Pega Mobile Builder", "Pega Predictive Diagnostic Cloud (PDC)", "Pega App Factory"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
