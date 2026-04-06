import type {
  GameState,
  HiddenScores,
  ScoreCalculationResult,
  Ending,
} from "../types";
import { difficultyConfigs } from "../config/difficulty";
import companyConfigs from "../config/companies";
import endings from "../config/endings";

// 计算综合隐藏分
export function calculateTotalScore(hiddenScores: HiddenScores): number {
  return Object.values(hiddenScores).reduce((sum, score) => sum + score, 0);
}

// 计算替代概率
export function calculateReplacementProbability(gameState: GameState): number {
  const { hiddenScores, days, difficulty } = gameState;
  const totalScore = calculateTotalScore(hiddenScores);
  const difficultyConfig = difficultyConfigs[difficulty];

  // 总分权重：四个维度各100满分，总分400
  // 分数越低，替代概率越高
  // 时间越长，AI衰减越多，概率越高
  const baseProbability =
    (400 - totalScore * difficultyConfig.scoreWeightMultiplier) / 400;
  const timeFactor = Math.min(1, days / 365 / 2); // 两年后达到最大时间影响

  let probability =
    baseProbability * (1 + timeFactor * 0.5) +
    difficultyConfig.initialRiskBonus / 100;

  // 警告次数增加概率
  probability += gameState.warnings * 0.1;

  return Math.max(0, Math.min(1, probability));
}

// 获取风险等级
export function getRiskLevel(
  probability: number,
): ScoreCalculationResult["riskLevel"] {
  if (probability < 0.25) return "low";
  if (probability < 0.5) return "medium";
  if (probability < 0.75) return "high";
  return "critical";
}

// 完整计算结果
export function calculateScoreResult(
  gameState: GameState,
): ScoreCalculationResult {
  const totalScore = calculateTotalScore(gameState.hiddenScores);
  const replacementProbability = calculateReplacementProbability(gameState);
  const riskLevel = getRiskLevel(replacementProbability);

  return {
    totalScore,
    replacementProbability,
    riskLevel,
  };
}

// 季度衰减 - AI不断进步，所有属性自动衰减
export function applyQuarterlyDecay(gameState: GameState): GameState {
  const { difficulty, hiddenScores } = gameState;
  const { aiDecayPerQuarter } = difficultyConfigs[difficulty];
  const companyConfig = gameState.companyKey
    ? companyConfigs[gameState.companyKey]
    : null;

  const aiAdoptionRate = companyConfig?.aiAdoptionRate ?? 1.0;
  const actualDecay = aiDecayPerQuarter * aiAdoptionRate;

  // 对所有隐藏分数应用衰减
  const newHiddenScores: HiddenScores = {
    techMatch: Math.max(0, hiddenScores.techMatch - actualDecay * 0.8),
    teamContribution: Math.max(
      0,
      hiddenScores.teamContribution - actualDecay * 0.5,
    ),
    aiAdaptability: Math.max(
      0,
      hiddenScores.aiAdaptability - actualDecay * 0.3,
    ),
    marketValue: Math.max(0, hiddenScores.marketValue - actualDecay * 0.6),
    health: Math.max(0, hiddenScores.health - actualDecay * 0.3),
    family: Math.max(0, hiddenScores.family - actualDecay * 0.4),
  };

  return {
    ...gameState,
    hiddenScores: newHiddenScores,
  };
}

// 检查是否满足替代条件
export function checkForReplacement(gameState: GameState): boolean {
  const { totalScore } = calculateScoreResult(gameState);
  const { replacementThreshold } = difficultyConfigs[gameState.difficulty];

  // 如果总分低于阈值，检查警告次数
  if (totalScore < replacementThreshold * 4) {
    // 难度越高，阈值越低
    return gameState.warnings >= 2;
  }

  // 健康或家庭低于阈值，直接游戏结束
  if (
    gameState.hiddenScores.health < 20 ||
    gameState.hiddenScores.family < 20
  ) {
    return true;
  }

  return false;
}

// 检查新成就解锁
export function checkNewAchievements(
  gameState: GameState,
  achievements: Array<{
    id: string;
    condition: (gs: GameState) => boolean;
    unlocked: boolean;
  }>,
): string[] {
  const newlyUnlocked: string[] = [];

  achievements.forEach((ach) => {
    if (
      !ach.unlocked &&
      typeof ach.condition === "function" &&
      ach.condition(gameState)
    ) {
      newlyUnlocked.push(ach.id);
    }
  });

  return newlyUnlocked;
}

// 检查结局匹配
export function matchEnding(gameState: GameState): Ending | null {
  // 按条件优先级匹配（更具体的条件先匹配）
  const sortedEndings = [...endings].sort((a, b) => {
    // 成功结局优先匹配，长存活优先
    const aIsSuccess = a.isSuccess ? 1 : 0;
    const bIsSuccess = b.isSuccess ? 1 : 0;
    return bIsSuccess - aIsSuccess;
  });

  for (const ending of sortedEndings) {
    if (ending.condition(gameState)) {
      return ending;
    }
  }

  // 默认失败结局
  return {
    id: "fired-default",
    title: "最终还是被优化了",
    description:
      "在AI浪潮的冲击下，你没能坚持下来。不过这只是一个游戏，现实中你一定可以找到自己的位置！不断学习，保持竞争力，机会永远留给有准备的人。",
    isSuccess: false,
    condition: () => true,
  };
}

// 职级顺序用于晋升判断
export const rankOrder = ["P5", "P6", "P7", "M1"] as const;
export type Rank = (typeof rankOrder)[number];

// 获取下一级职级
export function getNextRank(currentRank: string): Rank | null {
  const index = rankOrder.indexOf(currentRank as Rank);
  if (index === -1 || index === rankOrder.length - 1) return null;
  return rankOrder[index + 1];
}

// 计算综合属性值（用于UI显示）
export function getOverallLevel(gameState: GameState): number {
  const { techSkill, socialSkill, innovationSkill } = gameState;
  const hiddenTotal = calculateTotalScore(gameState.hiddenScores);
  return Math.round(
    (techSkill + socialSkill + innovationSkill + hiddenTotal / 4) / 4,
  );
}
