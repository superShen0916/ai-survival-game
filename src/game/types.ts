// ============================================
// AI替代危机：职场生存战 - TypeScript 类型定义
// ============================================

// 六维隐藏分数
export interface HiddenScores {
  techMatch: number; // 技术匹配度
  teamContribution: number; // 团队贡献
  aiAdaptability: number; // AI适应力
  marketValue: number; // 市场竞争力
  health: number; // 身体健康 (0-100)
  family: number; // 家庭关系 (0-100)
}

// 角色基础属性
export interface GameStats {
  techSkill: number; // 技术能力
  socialSkill: number; // 人际关系
  innovationSkill: number; // 创新能力
}

// 选项效果 - 影响各种属性
export interface OptionEffects {
  // Base stats
  tech?: number;
  social?: number;
  innovation?: number;
  // Hidden scores
  aiAdaptability?: number;
  techMatch?: number;
  teamContribution?: number;
  marketValue?: number;
  health?: number;
  family?: number;
  // Also allow direct modification of base stats for skills
  techSkill?: number;
  socialSkill?: number;
  innovationSkill?: number;
  // Other
  salary?: number;
  rank?: string;
  warnings?: number;
  skillPoints?: number;
}

// 事件选项
export interface EventOption {
  text: string;
  effects: OptionEffects;
}

// 游戏事件
export interface GameEvent {
  id: number;
  title: string;
  description: string;
  options: EventOption[] | ((gameState: GameState) => EventOption[]);
  requiredRole?: string;
  requiredRank?: string;
  requiredCompany?: string;
  minDays?: number;
}

// 角色配置
export interface RoleConfig {
  key: string;
  name: string;
  rank: string;
  salary: number;
  techSkill: number;
  socialSkill: number;
  innovationSkill: number;
  hiddenScores: HiddenScores;
  warnings: number;
  description: string;
  skillPoints?: number; // 初始技能点（技能树系统）
}

// 公司类型配置
export interface CompanyConfig {
  key: string;
  name: string;
  description: string;
  aiAdoptionRate: number; // AI接受度 - 影响属性衰减速度
  baseSalaryMultiplier: number; // 基础薪资倍率
  promotionBonusMultiplier: number; // 晋升奖励倍率
  initialModifier: Partial<HiddenScores> & {
    innovation?: number;
    techSkill?: number;
    socialSkill?: number;
  };
}

// 成就定义
export interface Achievement {
  id: string;
  label: string;
  description: string;
  condition: (gameState: GameState) => boolean;
  special?: boolean;
  unlocked: boolean;
  unlockedAt?: number; // 解锁时间戳
}

// 技能树节点
export interface SkillNode {
  id: string;
  name: string;
  description: string;
  icon: string;
  effects: OptionEffects;
  unlocked: boolean;
  pointsRequired: number;
  category: SkillCategory;
}

export type SkillCategory = "tech" | "social" | "ai" | "innovation";

// 结局定义
export interface Ending {
  id: string;
  title: string;
  description: string;
  condition: (gameState: GameState) => boolean;
  isSuccess: boolean;
}

// 选择历史记录
export interface ChoiceRecord {
  day: number;
  eventId: number;
  eventTitle: string;
  choiceText: string;
  effects: OptionEffects;
  timestamp: number;
}

// 难度设置
export type Difficulty = "easy" | "normal" | "hard" | "extreme";

export interface DifficultyConfig {
  aiDecayPerQuarter: number; // 每季度AI衰减量
  initialRiskBonus: number; // 初始风险加成
  replacementThreshold: number; // 替代阈值
  scoreWeightMultiplier: number; // 分数权重倍率
}

// 游戏状态 - 核心状态
export interface GameState {
  // 基础信息
  roleKey: string;
  role: string;
  companyKey?: string;
  company?: string;

  // 属性
  rank: string;
  salary: number;
  techSkill: number;
  socialSkill: number;
  innovationSkill: number;

  // 隐藏分数
  hiddenScores: HiddenScores;

  // 进度
  days: number;
  quarter: number;
  year: number;

  // 技能树
  skillPoints: number;
  unlockedSkills: string[];

  // 状态标记
  warnings: number;
  isGameOver: boolean;
  gameStartTime: number;
  lastSavedAt: number;

  // 成就
  achievements: string[];

  // 选择历史
  choiceHistory: ChoiceRecord[];

  // 设置
  difficulty: Difficulty;

  // 音效设置
  soundEnabled: boolean;

  // 分享数据（结束后）
  ending?: Ending;
}

// 创建初始游戏状态的参数
export interface GameInitParams {
  roleKey: string;
  companyKey?: string;
  difficulty: Difficulty;
}

// 分享卡片数据
export interface ShareCardData {
  role: string;
  company?: string;
  difficulty: Difficulty;
  daysSurvived: number;
  finalRank: string;
  finalSalary: number;
  endingTitle: string;
  endingDescription: string;
  gameUrl: string;
}

// 计算综合得分结果
export interface ScoreCalculationResult {
  totalScore: number;
  replacementProbability: number;
  riskLevel: "low" | "medium" | "high" | "critical";
}
