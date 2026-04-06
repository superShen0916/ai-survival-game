import type { Ending } from "../types";

export const endings: Ending[] = [
  // 失败结局 - 被优化
  {
    id: "fired-low-score",
    title: "这一段职场旅程结束了",
    description:
      "综合评分不达标，在新一轮裁员中你被公司选中。不过这真不是世界末日，人生不是只有KPI和职级。停下来好好休息一下，陪陪家人，你会发现生活还有很多美好的可能性。",
    condition: (gs) => {
      const total = Object.values(gs.hiddenScores).reduce((a, b) => a + b, 0);
      return total < 200 && gs.warnings >= 2;
    },
    isSuccess: false,
  },
  {
    id: "fired-ai-decay",
    title: "技术迭代，暂别职场",
    description:
      "你选择了自己舒服的生活节奏，没有追着AI新技术不停奔跑。几年后，公司选择了更懂AI的年轻人。但这又怎么样呢？人生的成功本来就不只有一种标准，开心最重要。",
    condition: (gs) => gs.hiddenScores.aiAdaptability < 30 && gs.days > 180,
    isSuccess: false,
  },
  {
    id: "fired-no-contribution",
    title: "换个环境重新出发",
    description:
      "你一直专注于把自己的事情做好，不太在意团队中的表现。年终评估后，公司请你另谋高就。其实你的技术能力很好，换个地方，说不定能找到更适合你的位置。",
    condition: (gs) =>
      gs.hiddenScores.teamContribution < 30 && gs.warnings >= 2,
    isSuccess: false,
  },
  {
    id: "fired-market",
    title: "停下来，想一想",
    description:
      "你在同一份工作上待了很久，没有去外面看看。当你想换工作时，发现市场已经变化很大。没关系，这本来就是大多数人的职业生涯，不是你的错。停下来充充电，一切都还来得及。",
    condition: (gs) => gs.hiddenScores.marketValue < 30 && gs.days > 365,
    isSuccess: false,
  },
  {
    id: "fired-burnout",
    title: "积劳成疾，暂停工作",
    description:
      "你每天996不停卷，身体早就发出警报了你都忽视了。终于撑不住倒下，不得不辞职养病。工作是永远做不完的，但身体才是革命的本钱。好好休息，健康比什么都重要。",
    condition: (gs) => gs.hiddenScores.health < 20,
    isSuccess: false,
  },
  {
    id: "fired-family-break",
    title: "错过了最重要的人",
    description:
      "你把所有时间都献给了工作，陪伴家人的时间越来越少。渐渐地，关系越来越疏远。虽然职场上可能有所成就，但你错过了孩子成长，错过了陪伴父母。人生最珍贵的其实就在身边。",
    condition: (gs) => gs.hiddenScores.family < 20 && gs.days > 365,
    isSuccess: false,
  },

  // 成功结局
  {
    id: "success-technical-fellow",
    title: "技术专家",
    description:
      "你坚持深耕技术，最终成为公司的技术专家。虽然AI不断进步，但你始终站在技术前沿，无人可以替代。你用一生诠释了什么是工匠精神。",
    condition: (gs) =>
      gs.rank === "P7" && gs.hiddenScores.techMatch >= 80 && gs.days >= 1095,
    isSuccess: true,
  },
  {
    id: "success-cto",
    title: "技术总监",
    description:
      "你一步步从工程师做到技术总监，管理着几百人的技术团队。你已经不需要亲自写代码了，你的智慧和经验是公司最宝贵的财富。AI永远替代不了管理者。",
    condition: (gs) =>
      gs.rank === "M1" &&
      gs.hiddenScores.teamContribution >= 80 &&
      gs.days >= 1095,
    isSuccess: true,
  },
  {
    id: "success-entrepreneur",
    title: "创业成功",
    description:
      "你看准AI浪潮中的机会，毅然出来创业。凭借对行业的深刻理解和人脉积累，你的公司快速成长，最终成功上市。你成为了别人口中的老板。",
    condition: (gs) =>
      gs.hiddenScores.marketValue >= 80 &&
      gs.innovationSkill >= 80 &&
      gs.days >= 730,
    isSuccess: true,
  },
  {
    id: "success-freelance",
    title: "自由职业大师",
    description:
      "你早早看清职场真相，辞职做起了自由职业。你利用AI提高效率，一个人就是一支队伍。时间自由，收入不菲，生活工作平衡得很好。这也是一种成功。",
    condition: (gs) =>
      gs.hiddenScores.marketValue >= 70 &&
      gs.hiddenScores.aiAdaptability >= 70 &&
      !["M1", "P7"].includes(gs.rank),
    isSuccess: true,
  },
  {
    id: "success-product-head",
    title: "产品负责人",
    description:
      "你从技术转产品，凭借对技术和用户的双重理解，成长为产品负责人。你对行业趋势判断准确，带领团队做出了现象级产品。",
    condition: (gs) =>
      gs.roleKey === "product" && gs.rank === "M1" && gs.days >= 1095,
    isSuccess: true,
  },
  {
    id: "success-design-director",
    title: "设计总监",
    description:
      "虽然AI能快速生成设计，但你对用户体验的深刻理解和审美依然无人能及。你成为了公司的设计总监，带领设计团队创造出一个又一个惊艳产品。",
    condition: (gs) =>
      gs.roleKey === "designer" && gs.rank === "P7" && gs.innovationSkill >= 80,
    isSuccess: true,
  },
  {
    id: "success-qa-lead",
    title: "测试质量负责人",
    description:
      "你深耕质量保障领域，AI虽然能自动化很多测试，但对业务的深刻理解和风险判断依然依赖你的经验。你成为了质量保障负责人，保障着亿级用户的产品体验。",
    condition: (gs) =>
      gs.roleKey === "qa" &&
      gs.rank === "P7" &&
      gs.hiddenScores.teamContribution >= 80,
    isSuccess: true,
  },
  {
    id: "success-data-scientist",
    title: "首席数据科学家",
    description:
      "AI让数据分析更高效，但你对业务问题的洞察力和数据解读能力依然不可替代。你成为了公司的首席数据科学家，用数据驱动业务决策。",
    condition: (gs) =>
      gs.roleKey === "data" &&
      gs.rank === "P7" &&
      gs.hiddenScores.techMatch >= 80,
    isSuccess: true,
  },
  {
    id: "survival-longterm",
    title: "职场生存大师",
    description:
      "你在AI浪潮中生存了五年，这本身就是一个奇迹。你不断学习，不断调整，始终保持竞争力。你见证了行业的变迁，也成就了自己。",
    condition: (gs) => gs.days >= 1825,
    isSuccess: true,
  },
  // 更多结局
  {
    id: "fired-innovation",
    title: "舒适区也是一种选择",
    description:
      "你更喜欢把现有事情做到极致，不愿意尝试不确定的新方向。公司需要更多创新，所以请你离开。但人生嘛，安安稳稳又何尝不是一种幸福？适合自己的就是最好的。",
    condition: (gs) => gs.innovationSkill < 30 && gs.days > 365,
    isSuccess: false,
  },
  {
    id: "fired-social",
    title: "道不同不相为谋",
    description:
      "你更喜欢专注做事，不太喜欢职场上的人情往来。和团队节奏不太合拍，最终选择分开。这不是你的错，只是环境不合适。总会有欣赏你才华的地方。",
    condition: (gs) => gs.socialSkill < 30 && gs.warnings >= 2,
    isSuccess: false,
  },
  {
    id: "fired-ai-total",
    title: "AI替你工作，你享受生活",
    description:
      "AI技术进步太快，你的工作百分之百可以由AI完成，成本只有十分之一。公司选择了AI，但你也解放了！反正AI养得起人类，提前退休享受人生不好吗？",
    condition: (gs) => gs.hiddenScores.aiAdaptability < 20 && gs.days > 500,
    isSuccess: false,
  },
  // 特殊成功结局
  {
    id: "success-freelance-million",
    title: "自由职业年入百万",
    description:
      "你辞职做自由职业，用好AI提高效率，同时接好几个项目，年入百万，时间自由，比上班香多了。这就是AI时代自由职业者的胜利。",
    condition: (gs) =>
      gs.hiddenScores.marketValue >= 90 &&
      gs.hiddenScores.aiAdaptability >= 90 &&
      !["M1", "P7"].includes(gs.rank) &&
      gs.salary * 12 >= 1000000,
    isSuccess: true,
  },
  {
    id: "success-retired-consultant",
    title: "退休技术顾问",
    description:
      "你退休了，但因为你的经验和名气，很多公司找你做技术顾问，收入比上班还多，时间完全自由，完美晚年。",
    condition: (gs) =>
      gs.rank === "P7" && gs.hiddenScores.marketValue >= 90 && gs.days >= 1500,
    isSuccess: true,
  },
];

export default endings;
