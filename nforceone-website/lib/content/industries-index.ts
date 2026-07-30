import type { IndexTile } from "@/lib/types";

export const industriesIndexIntro = {
  heroEyebrow: "Industries",
  heroHeadline: "Industry Expertise",
  heroSubheadline: "Managed IT Services for your industry",
  heroSubtext:
    "NForceOne has over 10 years of experience serving IT needs across industries, understanding sector specifics and building matching IT strategies.",
  notFoundHeading: "Don't see your industry?",
  notFoundText: "This list is not comprehensive.",
  whyHeading: "Why industry expertise for IT is critical",
};

/**
 * The 15 tiles listed on the live Industries index, plus "Finance and
 * FinTech" which has its own detail page in the source crawl but isn't
 * one of the 15 index tiles. 5 of the original 15 tiles (flagged in the
 * source inventory) have no dedicated detail page — they're kept here for
 * completeness but marked hasPage: false so they route to Contact instead
 * of a broken "Learn more" link.
 */
export const industriesIndex: IndexTile[] = [
  {
    slug: "healthcare-and-healthtech",
    title: "Healthcare and HealthTech",
    icon: "heart-pulse",
    hasPage: false,
    teaser: "Managed IT services for healthcare and health technology.",
  },
  {
    slug: "banking-and-financial",
    title: "Banking and Financial",
    icon: "landmark",
    hasPage: true,
    teaser:
      "Core banking modernization, fraud and risk analytics, and regulatory compliance automation.",
  },
  {
    slug: "insurance",
    title: "Insurance",
    icon: "shield",
    hasPage: true,
    teaser:
      "Automated claims processing, underwriting and risk analytics, and policy system modernization.",
  },
  {
    slug: "travel-logistics-and-airlines",
    title: "Travel Logistics and Airlines",
    icon: "map-pin",
    hasPage: false,
    teaser: "Managed IT services for travel, logistics, and airlines.",
  },
  {
    slug: "isv",
    title: "ISV",
    icon: "boxes",
    hasPage: true,
    teaser:
      "Cloud-native development, automated QA/regression testing, and multi-tenant SaaS enablement.",
  },
  {
    slug: "retail",
    title: "Retail",
    icon: "shopping-cart",
    hasPage: true,
    teaser:
      "Intelligent inventory and supply chain, headless commerce, and personalized recommendations.",
  },
  {
    slug: "education-and-edutech",
    title: "Education and EduTech",
    icon: "graduation-cap",
    hasPage: true,
    teaser:
      "Virtual classrooms and LMS platforms, student analytics, and AI tutoring.",
  },
  {
    slug: "media-and-publishing",
    title: "Media and Publishing",
    icon: "monitor-smartphone",
    hasPage: false,
    teaser: "Managed IT services for media and publishing.",
  },
  {
    slug: "digital-media-and-advertising",
    title: "Digital Media and Advertising",
    icon: "monitor-smartphone",
    hasPage: true,
    teaser:
      "AdTech infrastructure, audience segmentation, and real-time campaign attribution.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "factory",
    hasPage: true,
    teaser:
      "Industrial IoT and equipment monitoring, MES/ERP integration, and supply-chain analytics.",
  },
  {
    slug: "energy-and-utilities",
    title: "Energy and Utilities",
    icon: "flame",
    hasPage: true,
    teaser:
      "Smart grid and IoT, energy trading and forecasting, and carbon/ESG tracking.",
  },
  {
    slug: "automotive",
    title: "Automotive",
    icon: "car",
    hasPage: true,
    teaser:
      "Connected, autonomous, and electric vehicle platforms, plus predictive maintenance and digital twins.",
  },
  {
    slug: "telecom",
    title: "Telecom",
    icon: "radio-tower",
    hasPage: true,
    teaser:
      "AI virtual agents/IVR, predictive network maintenance, and 5G/edge modernization.",
  },
  {
    slug: "retail-tech",
    title: "Retail Tech",
    icon: "shopping-cart",
    hasPage: false,
    teaser: "Managed IT services for retail technology vendors.",
  },
  {
    slug: "public-sector",
    title: "Public Sector",
    icon: "building-2",
    hasPage: false,
    teaser: "Managed IT services for government and public sector bodies.",
  },
  {
    slug: "finance-and-fintech",
    title: "Finance and FinTech",
    icon: "wallet",
    hasPage: true,
    teaser:
      "Digital lending and KYC, fraud detection, and wealth-management platforms.",
  },
];
