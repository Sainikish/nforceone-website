import type { FaqItem, NavLink } from "@/lib/types";

export const site = {
  name: "NForceOne",
  tagline: "Scale at Speed",
  domain: "nforceone.com",
  description:
    "Transforming Technology with Lightning Speed and Exceptional Quality.",
  logo: "/logo.png",
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** The 8-item capability list used in the "Partner with Us to Build and
 * Scale with Confidence" band that appears on every page. */
export const partnerCapabilities: string[] = [
  "Custom Software Development",
  "API & Microservices Architecture",
  "UI/UX Design Systems",
  "DevOps & Infrastructure Automation",
  "Scalable QA & Test Automation",
  "Cloud & API Integrations",
  "Analytics & AI Enablement",
  "Ongoing Maintenance & Support",
];

export const contact = {
  email: "admin@nforceone.com",
  ctaHeading: "We're here to help",
  expertHeading: "Connect With Our Solutions Expert",
  expertText:
    "Have questions about QA, AI, CI/CD, Cloud Migration, or Security Automation? Talk to a solutions expert.",
  expertCta: "Consult Now",
  locationsHeading: "Our Locations",
  locationsText:
    "Offices in Texas (Associate Brand Office) and Hyderabad, India. Remote support available worldwide.",
  offices: [
    {
      name: "NForce One",
      label: "Texas (Associate Brand Office)",
      address: "5700 Tennyson Parkway, Suite 300, Plano, Texas, 75024",
      email: "admin@nforceone.com",
    },
    {
      name: "NForce One",
      label: "Hyderabad",
      address:
        "4th Floor, Sanali Spazio, Inorbit Mall Rd, Madhapur, Hyderabad, Telangana 500081, India",
      email: "admin@nforceone.com",
    },
  ],
};

export const partnerBand = {
  heading: "Partner with Us to Build and Scale with Confidence",
  text: "We help businesses turn ideas into scalable, secure, and production-ready software.",
};

export const trustBand = {
  heading: "Recognized & Trusted by Leading Technology Providers",
};

export const consultationForm = {
  heading: "Free Consultation",
  fields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    {
      name: "company",
      label: "Company / Organization",
      type: "text",
      required: false,
    },
    {
      name: "companyEmail",
      label: "Company email",
      type: "email",
      required: true,
    },
    { name: "phone", label: "Phone", type: "tel", required: false },
    { name: "message", label: "Message", type: "textarea", required: false },
  ],
  submitLabel: "Submit",
};

export const newsletterForm = {
  heading: "Don't miss out updates",
  submitLabel: "Send",
};

/**
 * The 5-question FAQ accordion reused on every service page and the FAQ
 * page. The source crawl only captured the questions (the answers were
 * collapsed in the DOM). These answers are composed from genuine facts
 * stated elsewhere in the source document (About/Home/Services pages) —
 * nothing here is a new business claim.
 */
export const sharedFaq: FaqItem[] = [
  {
    question:
      "What makes NForce different from other IT service providers?",
    answer:
      "We forge real partnerships with our clients — a team that understands your pain points and your goals, not just a vendor filling a ticket. Our culture is built around being user focused, quality focused, agility focused, and innovation focused, backed by a team of 100+ professionals across India and the US.",
  },
  {
    question: "Can I start small and scale services as my business grows?",
    answer:
      "Yes. Scalability is one of our core value propositions — our engagements are designed to grow with your business, whether that means adding testing coverage, expanding a development team, or extending automation across new platforms.",
  },
  {
    question:
      "Do you support one-time projects as well as long-term engagements?",
    answer:
      "Yes. We offer dedicated outsourced teams embedded in your workflow for long-term engagements, as well as focused consulting and one-time project support drawing on 15+ years of testing and delivery expertise.",
  },
  {
    question: "How do you ensure the security and quality of your solutions?",
    answer:
      "Quality and security are built into our delivery process through continuous, shift-left testing practices and dedicated Security & Compliance Automation as part of our DevOps capabilities, alongside vulnerability scanning and secrets management.",
  },
  {
    question: "Can I choose the tools, tech stack, or cloud provider we use?",
    answer:
      "Yes. We work across major cloud providers (AWS, Azure, GCP) and infrastructure-as-code tooling (Terraform, AWS CloudFormation, Pulumi), and our testing practice spans the tools already listed on each of our service pages, so engagements fit your existing stack.",
  },
];

export const careers = {
  heroHeadline: "Start your journey",
  intro:
    "Grow your career as we grow. Join the team that's changing IT services.",
  cultureHeading: "We put our people first",
  cultureText:
    "We value team happiness, work/life balance, and professional development.",
  openingsHeading: "Current Opportunities",
  openings: [
    { title: "Senior Automation Tester", icon: "repeat" as const },
    { title: "Performance Tester", icon: "gauge" as const },
    { title: "Associate Engineer Intern", icon: "graduation-cap" as const },
    { title: "Pega Developer", icon: "workflow" as const },
    { title: "QA Manager", icon: "shield-check" as const },
  ],
  closingHeading: "Come on board at NForce One",
};
