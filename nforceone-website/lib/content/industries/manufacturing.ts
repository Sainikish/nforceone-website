import type { IndustryPage } from "@/lib/types";

export const manufacturing: IndustryPage = {
  slug: "manufacturing",
  title: "Manufacturing",
  metaDescription:
    "Helping manufacturers modernize IT, optimize supply chains, and unlock real-time visibility across smart factories.",
  icon: "factory",
  image: "/industries/manufacturing.svg",
  heroEyebrow: "Industries",
  heroHeadline: "Manufacturing",
  heroSubtext:
    "We help manufacturers modernize IT, optimize supply chains, and unlock real-time visibility.",
  solutions: [
    {
      icon: "cpu",
      title: "Industrial IoT and Equipment Monitoring",
      description:
        "IIoT and predictive maintenance that reduce downtime.",
    },
    {
      icon: "workflow",
      title: "MES & ERP Integrations",
      description:
        "Production planning, inventory, procurement, and quality control.",
    },
    {
      icon: "bar-chart",
      title: "Supply Chain Analytics and Forecasting",
      description:
        "Model supply and demand to reduce excess inventory.",
    },
    {
      icon: "boxes",
      title: "Digital Twins and Simulation Models",
      description:
        "Simulate workflows and test production changes.",
    },
  ],
  itServicesBand: {
    heading: "Our IT services for manufacturers",
    text: "We help manufacturers modernize equipment monitoring, integrate MES and ERP systems, and unlock supply chain visibility through analytics and digital twins.",
  },
  costBand: {
    heading: "Cut costs while you improve your productivity",
    text: "Reduce downtime and excess inventory with predictive equipment monitoring, supply chain forecasting, and digital twin simulations.",
  },
};
