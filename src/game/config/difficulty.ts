import type { DifficultyConfig, Difficulty } from "../types";

export const difficultyConfigs: Record<Difficulty, DifficultyConfig> = {
  easy: {
    aiDecayPerQuarter: 3,
    initialRiskBonus: 0,
    replacementThreshold: 80,
    scoreWeightMultiplier: 0.8,
  },
  normal: {
    aiDecayPerQuarter: 5,
    initialRiskBonus: 0,
    replacementThreshold: 75,
    scoreWeightMultiplier: 1.0,
  },
  hard: {
    aiDecayPerQuarter: 8,
    initialRiskBonus: 5,
    replacementThreshold: 70,
    scoreWeightMultiplier: 1.2,
  },
  extreme: {
    aiDecayPerQuarter: 12,
    initialRiskBonus: 10,
    replacementThreshold: 65,
    scoreWeightMultiplier: 1.5,
  },
};

export const difficultyLabels: Record<Difficulty, string> = {
  easy: "轻松",
  normal: "普通",
  hard: "困难",
  extreme: "地狱",
};

export const difficultyDescriptions: Record<Difficulty, string> = {
  easy: "AI衰减较慢，适合体验剧情",
  normal: "标准难度，体验完整游戏",
  hard: "AI衰减快，挑战生存极限",
  extreme: "AI飞速进步，活下去都是奇迹",
};

export default { difficultyConfigs, difficultyLabels, difficultyDescriptions };
