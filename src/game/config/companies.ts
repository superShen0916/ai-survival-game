import type { CompanyConfig } from "../types";

export const companyConfigs: Record<string, CompanyConfig> = {
  bigtech: {
    key: "bigtech",
    name: "互联网大厂",
    description: "技术驱动，积极拥抱AI，流程规范",
    aiAdoptionRate: 1.2, // AI采用率高，衰减更快
    baseSalaryMultiplier: 1.3,
    promotionBonusMultiplier: 1.5,
    initialModifier: {
      techMatch: +5,
      marketValue: +5,
    },
  },
  startup: {
    key: "startup",
    name: "创业公司",
    description: "快速变化，机会多但不稳定",
    aiAdoptionRate: 1.0,
    baseSalaryMultiplier: 0.9,
    promotionBonusMultiplier: 2.0,
    initialModifier: {
      innovation: +8,
      marketValue: -5,
    },
  },
  traditional: {
    key: "traditional",
    name: "传统企业",
    description: "保守稳健，AI转型缓慢",
    aiAdoptionRate: 0.7, // AI采用慢，衰减更慢
    baseSalaryMultiplier: 0.8,
    promotionBonusMultiplier: 0.8,
    initialModifier: {
      aiAdaptability: -10,
      teamContribution: +5,
    },
  },
};

export default companyConfigs;
