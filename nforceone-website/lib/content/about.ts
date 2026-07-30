import type { FeatureItem, IconName } from "@/lib/types";

export const aboutHero = {
  eyebrow: "About",
  title: "Building Better Tomorrow",
  subtext:
    "We are digital changemakers – here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed.",
};

export const caseStudies = [
  { year: "2024", name: "Atomic", description: "AI-driven outreach" },
  { year: "2024", name: "Intripid", description: "AI Travel Planner" },
  {
    year: "2025",
    name: "Consolidated Communication",
    description: "End-to-end QA",
  },
];

export const whyUs = {
  heading: "Why Us",
  text: "We understand that business can be chaotic. That's where we come in. We forge real partnerships with our clients — a team who understands your pain points and your goals.",
};

export const coreValues = {
  heading:
    "Our culture is built around four key attributes that differentiate us from our competition.",
  items: [
    { icon: "users", title: "User Focused" },
    { icon: "shield-check", title: "Quality Focused" },
    { icon: "zap", title: "Agility Focused" },
    { icon: "sparkles", title: "Innovation Focused" },
  ] satisfies FeatureItem[],
};

export const whyChooseUs = {
  heading: "Why Choose Us?",
  blocks: [
    {
      heading: "A team built on experience",
      text: "We're expanding across India and the US, uniting a vibrant team of over 100 professionals with deep expertise in service delivery and technical excellence.",
      cta: { label: "Join the team", href: "/careers" },
      icon: "graduation-cap" as IconName,
    },
    {
      heading: "Better together",
      text: "We know that work is important, but so is play! We respect all of our partnerships and engage in fun ways that solve critical problems.",
      cta: { label: "Get in touch", href: "/contact" },
      icon: "users" as IconName,
    },
  ],
};
