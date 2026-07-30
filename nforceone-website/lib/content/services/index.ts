import type { ServicePage } from "@/lib/types";

import { qualityAssurance } from "./quality-assurance";
import { manualTesting } from "./manual-testing";
import { automationTesting } from "./automation-testing";
import { consultingTesting } from "./consulting-testing";
import { outsourcingTesting } from "./outsourcing-testing";
import { aiTesting } from "./ai-testing";
import { uxTesting } from "./ux-testing";
import { performanceTesting } from "./performance-testing";
import { functionalTesting } from "./functional-testing";
import { regressionTesting } from "./regression-testing";
import { integrationTesting } from "./integration-testing";
import { compatibilityTesting } from "./compatibility-testing";
import { posTesting } from "./pos-testing";
import { paymentTesting } from "./payment-testing";
import { iotTesting } from "./iot-testing";
import { mobileAppTesting } from "./mobile-app-testing";
import { mobileAndDeviceTesting } from "./mobile-and-device-testing";
import { webAppTesting } from "./web-app-testing";
import { cloudTesting } from "./cloud-testing";
import { softwareDevelopment } from "./software-development";
import { artificialIntelligence } from "./artificial-intelligence";
import { pegaDevelopment } from "./pega-development";
import { pegaTesting } from "./pega-testing";
import { devops } from "./devops";
import { databaseManagement } from "./database-management";
import { dataAnalytics } from "./data-analytics";
import { bigData } from "./big-data";
import { digitalAppDevelopment } from "./digital-app-development";
import { intelligentRpa } from "./intelligent-rpa";
import { managementServices } from "./management-services";

export const allServices: ServicePage[] = [
  qualityAssurance,
  manualTesting,
  automationTesting,
  consultingTesting,
  outsourcingTesting,
  aiTesting,
  uxTesting,
  performanceTesting,
  functionalTesting,
  regressionTesting,
  integrationTesting,
  compatibilityTesting,
  posTesting,
  paymentTesting,
  iotTesting,
  mobileAppTesting,
  mobileAndDeviceTesting,
  webAppTesting,
  cloudTesting,
  softwareDevelopment,
  artificialIntelligence,
  pegaDevelopment,
  pegaTesting,
  devops,
  databaseManagement,
  dataAnalytics,
  bigData,
  digitalAppDevelopment,
  intelligentRpa,
  managementServices,
];

export const serviceBySlug: Record<string, ServicePage> = Object.fromEntries(
  allServices.map((s) => [s.slug, s])
);
