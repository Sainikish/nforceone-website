import type { ServicePage } from "@/lib/types";

export const paymentTesting: ServicePage = {
  slug: "payment-testing",
  title: "Payment Testing",
  category: "Testing",
  metaDescription:
    "Your payment system shapes user trust — testing that ensures secure, seamless transactions across channels, billing flows, and experiences.",
  icon: "wallet",
  heroEyebrow: "Testing Services",
  heroHeadline: "Payment Testing",
  heroSubtext:
    "Your payment system shapes user trust. Our testing ensures secure, seamless transactions across channels, billing flows, and experiences.",
  why: {
    heading: "Why Your Payment System Needs Software Testing",
    paragraphs: [
      "Your payment system shapes user trust. Our testing ensures secure, seamless transactions across channels, billing flows, and experiences.",
    ],
  },
  typesSection: {
    heading: "Payment Solutions We Test",
    items: [
      {
        icon: "credit-card",
        title: "Payment Gateways",
        description: "Stripe, PayPal, Razorpay, Adyen, and others.",
      },
      {
        icon: "smartphone",
        title: "Mobile Payment Apps",
        description: "In-app purchases, wallets, and tap-to-pay.",
      },
      {
        icon: "shopping-cart",
        title: "POS Systems",
        description:
          "Card-present transactions across retail, hospitality, and events.",
      },
      {
        icon: "repeat",
        title: "Subscriptions & Recurring Billing",
        description: "Auto-renewals, invoicing, and account management.",
      },
    ],
  },
  toolsSection: {
    heading: "Payment Gateway Testing Tools & Frameworks We Use",
    items: [
      "Selenium",
      "JUnit",
      "LoadView",
      "JMeter",
      "Postman",
      "BrowserStack",
      "Fiddler",
      "VirtualBox",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
