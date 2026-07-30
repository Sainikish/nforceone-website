import type { ServicePage } from "@/lib/types";

export const softwareDevelopment: ServicePage = {
  slug: "software-development",
  title: "Software Development",
  category: "Development",
  metaDescription:
    "Custom software development services that streamline operations, enhance customer experiences, and drive long-term business growth.",
  icon: "code",
  heroEyebrow: "Development Services",
  heroHeadline: "Software Development",
  heroSubtext:
    "Custom software streamlines operations, enhances customer experiences, and drives long-term growth for your business.",
  why: {
    heading: "Why Your Business Needs Professional Software Development",
    paragraphs: [
      "Custom software streamlines operations, enhances customer experiences, and drives long-term growth.",
    ],
  },
  typesSection: {
    heading: "Types of Software Solutions We Build",
    items: [
      { icon: "building-2", title: "Enterprise Applications", description: "Software built for large-scale operations, workflows, and internal processes." },
      { icon: "smartphone", title: "Mobile Applications", description: "Native and cross-platform applications for iOS and Android." },
      { icon: "app-window", title: "Self-Service Portals", description: "Portals that let customers and employees complete tasks independently." },
      { icon: "layout-grid", title: "Omnichannel Platforms", description: "Consistent experiences across web, mobile, and in-store channels." },
      { icon: "factory", title: "Industry-Specific Software", description: "Solutions tailored for healthcare, finance, logistics, and retail." },
      { icon: "puzzle", title: "Custom Product Development", description: "End-to-end products built from your vision." },
    ],
  },
  toolsSection: {
    heading: "Software Development Tools We Use",
    items: ["Visual Studio Code", "IntelliJ / Eclipse", "Git & GitHub", "JMeter", "Postman", "Docker", "Jenkins / GitHub Actions", "AWS / Azure / GCP"],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
