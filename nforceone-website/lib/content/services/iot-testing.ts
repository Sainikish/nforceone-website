import type { ServicePage } from "@/lib/types";

export const iotTesting: ServicePage = {
  slug: "iot-testing",
  title: "IoT Testing",
  category: "Testing",
  metaDescription:
    "The IoT bridges digital and physical realms — our end-to-end testing ensures reliable performance across devices, networks, and platforms.",
  icon: "cpu",
  heroEyebrow: "Testing Services",
  heroHeadline: "IoT Testing",
  heroSubtext:
    "The IoT bridges digital and physical realms, and users expect perfection. Our end-to-end testing ensures reliable performance across devices, networks, and platforms.",
  why: {
    heading: "Why Your IoT Application Needs Software Testing",
    paragraphs: [
      "The IoT bridges digital and physical realms, and users expect perfection. Our end-to-end testing ensures reliable performance across devices, networks, and platforms.",
    ],
  },
  typesSection: {
    heading: "Types of IoT Systems We Test",
    items: [
      {
        icon: "heart-pulse",
        title: "Healthcare Devices & Apps",
        description: "Wearables, monitoring tools, and biosensors.",
      },
      {
        icon: "network",
        title: "Smart Home Ecosystems",
        description: "Connected lighting, security, and appliance control.",
      },
      {
        icon: "activity",
        title: "Wearable Devices & Apps",
        description: "Smartwatches, fitness trackers, and health monitors.",
      },
      {
        icon: "zap",
        title: "Energy Saving Solutions",
        description: "Smart meters, thermostats, and grid-connected devices.",
      },
      {
        icon: "car",
        title: "Fleet Management Systems",
        description: "GPS devices, telematics, and tracking dashboards.",
      },
      {
        icon: "gauge",
        title: "Agriculture Monitoring Solutions",
        description: "Smart irrigation, soil sensors, and climate control.",
      },
    ],
  },
  toolsSection: {
    heading: "IoT Testing Tools & Technologies We Use",
    items: [
      "WireShark",
      "Tcpdump",
      "Shodan",
      "SOASTA",
      "Selenium",
      "Ranorex",
      "LoadRunner",
      "JMeter",
    ],
  },
  impact: {
    heading: "Our Impact",
    text: "Drive greater revenues, reduce inefficiencies and costs, maximize profits.",
  },
};
