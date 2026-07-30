import type { IndustryPage } from "@/lib/types";

import { automotive } from "./automotive";
import { bankingAndFinancial } from "./banking-and-financial";
import { insurance } from "./insurance";
import { isv } from "./isv";
import { retail } from "./retail";
import { educationAndEdutech } from "./education-and-edutech";
import { digitalMediaAndAdvertising } from "./digital-media-and-advertising";
import { manufacturing } from "./manufacturing";
import { energyAndUtilities } from "./energy-and-utilities";
import { telecom } from "./telecom";
import { financeAndFintech } from "./finance-and-fintech";

export const allIndustries: IndustryPage[] = [
  automotive,
  bankingAndFinancial,
  insurance,
  isv,
  retail,
  educationAndEdutech,
  digitalMediaAndAdvertising,
  manufacturing,
  energyAndUtilities,
  telecom,
  financeAndFintech,
];

export const industryBySlug: Record<string, IndustryPage> = Object.fromEntries(
  allIndustries.map((i) => [i.slug, i])
);
