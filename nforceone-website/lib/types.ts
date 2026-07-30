export type IconName =
  | "shield-check"
  | "bot"
  | "layers"
  | "gauge"
  | "check-circle"
  | "repeat"
  | "puzzle"
  | "layout-grid"
  | "credit-card"
  | "cpu"
  | "smartphone"
  | "tablet-smartphone"
  | "globe"
  | "cloud"
  | "code"
  | "brain"
  | "workflow"
  | "server"
  | "bar-chart"
  | "database"
  | "app-window"
  | "settings"
  | "trending-up"
  | "zap"
  | "target"
  | "users"
  | "sparkles"
  | "shield"
  | "clock"
  | "rocket"
  | "search"
  | "wrench"
  | "lock"
  | "network"
  | "monitor-smartphone"
  | "git-branch"
  | "container"
  | "activity"
  | "boxes"
  | "car"
  | "landmark"
  | "heart-pulse"
  | "graduation-cap"
  | "flame"
  | "factory"
  | "shopping-cart"
  | "radio-tower"
  | "building-2"
  | "wallet"
  | "clipboard-check"
  | "map-pin"
  | "mail"
  | "phone"
  | "linkedin"
  | "arrow-right"
  | "chevron-down"
  | "menu"
  | "x";

export interface FeatureItem {
  icon?: IconName;
  title: string;
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** One entry in the Services or Industries index grid. */
export interface IndexTile {
  slug: string;
  title: string;
  icon: IconName;
  teaser: string;
  hasPage: boolean;
}

export interface ServicePage {
  slug: string;
  title: string;
  category: "Testing" | "Development" | "Platform & Consulting";
  metaDescription: string;
  icon: IconName;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  /** "Why Your ... Needs ..." section */
  why: {
    heading: string;
    paragraphs: string[];
  };
  /** Services / types grid (varies per page: types of testing, service types, etc.) */
  typesSection?: {
    heading: string;
    items: FeatureItem[];
  };
  /** Platforms / website types grid */
  platformsSection?: {
    heading: string;
    items: string[];
  };
  /** Tools & technologies grid */
  toolsSection?: {
    heading: string;
    items: string[];
  };
  impact?: {
    heading: string;
    text: string;
  };
  note?: string;
}

export interface IndustryPage {
  slug: string;
  title: string;
  metaDescription: string;
  icon: IconName;
  /** Hero illustration shown alongside the page title, e.g. "/industries/automotive.svg" */
  image?: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  solutions: FeatureItem[];
  itServicesBand: {
    heading: string;
    text: string;
  };
  costBand: {
    heading: string;
    text: string;
  };
}
