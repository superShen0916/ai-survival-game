import type { GameEvent } from "../types";

export const events: GameEvent[] = [
  {
    id: 1,
    title: "🤖 AI代码生成工具引入",
    description:
      "公司引入了新的AI代码生成工具，能大幅提升开发效率。团队要求所有人都要学习使用。",
    options: [
      {
        text: "积极学习使用，成为工具专家",
        effects: {
          tech: +5,
          social: +2,
          innovation: +3,
          aiAdaptability: +8,
          techMatch: +5,
        },
      },
      {
        text: "表面学习，私下保留自己的核心技能",
        effects: {
          tech: +1,
          social: -1,
          innovation: 0,
          aiAdaptability: +2,
          techMatch: -3,
        },
      },
      {
        text: "担心被替代，抵制使用",
        effects: {
          tech: -2,
          social: -5,
          innovation: +5,
          aiAdaptability: -5,
          techMatch: -8,
        },
      },
      {
        text: "建议团队谨慎使用，强调人工判断的重要性",
        effects: {
          social: +5,
          innovation: +10,
          tech: -1,
          aiAdaptability: +3,
          teamContribution: +5,
        },
      },
    ],
  },
  {
    id: 2,
    title: "👥 团队协作危机",
    description:
      "你的AI同事提出了一个创新方案，但需要你放弃自己正在进行的项目。",
    options: [
      {
        text: "支持AI方案，放弃自己的项目",
        effects: {
          social: +8,
          tech: -3,
          innovation: +5,
          teamContribution: +5,
          aiAdaptability: +3,
        },
      },
      {
        text: "坚持自己的项目，与AI方案竞争",
        effects: {
          tech: +5,
          social: -5,
          innovation: +3,
          techMatch: +5,
          marketValue: +3,
        },
      },
      {
        text: "寻找两者结合的可能性",
        effects: {
          tech: +3,
          social: +3,
          innovation: +8,
          teamContribution: +5,
          aiAdaptability: +5,
        },
      },
      {
        text: "向上级反映AI方案的潜在风险",
        effects: {
          social: -2,
          innovation: +5,
          tech: 0,
          teamContribution: -3,
          marketValue: +5,
        },
      },
    ],
  },
  {
    id: 3,
    title: "📚 技能提升机会",
    description: "公司提供了一个AI技术培训课程，但需要占用你大部分业余时间。",
    options: [
      {
        text: "立即报名参加，全神贯注学习",
        effects: {
          tech: +10,
          innovation: +8,
          social: -5,
          aiAdaptability: +10,
          techMatch: +8,
        },
      },
      {
        text: "报名参加，但只在空闲时间学习",
        effects: {
          tech: +5,
          innovation: +3,
          social: 0,
          aiAdaptability: +5,
          techMatch: +3,
        },
      },
      {
        text: "先观望，等别人学习后再决定",
        effects: {
          tech: +1,
          social: +2,
          innovation: -1,
          aiAdaptability: +2,
          marketValue: +2,
        },
      },
      {
        text: "拒绝参加，专注于当前工作",
        effects: {
          tech: +3,
          social: +5,
          innovation: -3,
          techMatch: -5,
          marketValue: +5,
        },
      },
    ],
  },
  {
    id: 4,
    title: "📈 晋升机会",
    description: "你有两个晋升选择：管理岗需要放弃技术深度，技术岗晋升速度慢。",
    options: [
      {
        text: "选择管理岗，带领团队",
        effects: {
          social: +15,
          tech: -5,
          salary: +10000,
          rank: "P6",
          teamContribution: +10,
          marketValue: +5,
        },
      },
      {
        text: "选择技术岗，深入研究AI技术",
        effects: {
          tech: +15,
          innovation: +10,
          salary: +5000,
          rank: "P6",
          techMatch: +10,
          aiAdaptability: +8,
        },
      },
      {
        text: "申请调岗到产品部门",
        effects: {
          social: +10,
          innovation: +10,
          salary: +7000,
          rank: "P6",
          teamContribution: +5,
          marketValue: +8,
        },
      },
      {
        text: "先不晋升，继续积累经验",
        effects: {
          tech: +5,
          social: +5,
          innovation: +5,
          salary: +3000,
          marketValue: +3,
          techMatch: +3,
        },
      },
    ],
  },
  {
    id: 5,
    title: "📊 季度绩效评估",
    description:
      "季度结束，公司进行绩效评估，根据你的表现决定是否加薪、晋升或发出警告。",
    options: [
      {
        text: "展示AI相关技能和贡献",
        effects: { social: +5, aiAdaptability: +5, salary: +2000, warnings: 0 },
      },
      {
        text: "强调传统技能和经验",
        effects: { tech: +5, marketValue: +5, salary: +1000, warnings: 0 },
      },
      {
        text: "抱怨AI带来的压力",
        effects: { social: -5, teamContribution: -5, warnings: +1 },
      },
      {
        text: "提出创新建议",
        effects: {
          innovation: +10,
          teamContribution: +5,
          salary: +3000,
          warnings: 0,
        },
      },
    ],
  },
  {
    id: 6,
    title: "🏆 年度绩效评估",
    description: "年度结束，公司进行全面绩效评估，这将决定你的职业发展方向。",
    options: (gameState) => [
      {
        text: "展示全年AI相关成果",
        effects: {
          social: +10,
          aiAdaptability: +10,
          salary: +5000,
          rank: gameState.rank === "P5" ? "P6" : gameState.rank,
          warnings: 0,
        },
      },
      {
        text: "强调全年技术贡献",
        effects: { tech: +10, marketValue: +10, salary: +3000, warnings: 0 },
      },
      {
        text: "申请调岗到AI部门",
        effects: { aiAdaptability: +15, tech: +5, salary: +4000, warnings: 0 },
      },
      {
        text: "要求晋升管理岗位",
        effects: {
          social: +15,
          teamContribution: +10,
          salary: +6000,
          rank: gameState.rank === "P5" ? "P6" : gameState.rank,
          warnings: gameState.rank === "P5" ? 0 : +1,
        },
      },
    ],
  },
  {
    id: 7,
    title: "🤖 AI团队成员加入",
    description:
      "公司新招聘了一位AI专家加入你们团队，这可能会影响你的工作地位。",
    options: [
      {
        text: "主动与AI专家合作，学习新知识",
        effects: {
          social: +5,
          tech: +5,
          aiAdaptability: +10,
          teamContribution: +5,
        },
      },
      {
        text: "保持距离，专注于自己的工作",
        effects: { tech: +3, social: -2, marketValue: +3, aiAdaptability: -2 },
      },
      {
        text: "向上级表达担忧，要求明确分工",
        effects: {
          social: +2,
          teamContribution: +3,
          aiAdaptability: +2,
          warnings: 0,
        },
      },
      {
        text: "开始寻找新的工作机会",
        effects: { marketValue: +8, social: -3, tech: +2, aiAdaptability: -5 },
      },
    ],
  },
  {
    id: 8,
    title: "📉 公司裁员传闻",
    description: "公司内部流传着裁员的消息，AI相关岗位可能更安全。",
    options: [
      {
        text: "加倍努力工作，证明自己的价值",
        effects: { tech: +5, social: +3, teamContribution: +5, warnings: 0 },
      },
      {
        text: "开始学习AI相关技能，提升竞争力",
        effects: { tech: +3, aiAdaptability: +8, innovation: +5, social: -2 },
      },
      {
        text: "与同事联合起来，向管理层表达担忧",
        effects: {
          social: +8,
          teamContribution: +5,
          marketValue: -3,
          warnings: +1,
        },
      },
      {
        text: "无所谓，相信自己不会被裁",
        effects: { tech: +1, social: -5, teamContribution: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 9,
    title: "💻 远程工作政策",
    description:
      "公司推出新的远程工作政策，你可以选择完全远程、混合模式或继续办公室工作。",
    options: [
      {
        text: "选择完全远程工作",
        effects: { social: -5, tech: +3, innovation: +5, marketValue: +3 },
      },
      {
        text: "选择混合模式（3天远程，2天办公室）",
        effects: {
          social: +2,
          tech: +2,
          aiAdaptability: +3,
          teamContribution: +2,
        },
      },
      {
        text: "继续完全在办公室工作",
        effects: {
          social: +5,
          teamContribution: +5,
          tech: -2,
          marketValue: -3,
        },
      },
      {
        text: "要求灵活安排，根据项目需要调整",
        effects: {
          social: +3,
          innovation: +3,
          teamContribution: +3,
          aiAdaptability: +3,
        },
      },
    ],
  },
  {
    id: 10,
    title: "📚 外部培训机会",
    description:
      "你获得了一个参加外部AI技术 conference 的机会，但需要自费并占用周末时间。",
    options: [
      {
        text: "积极参加，自费学习",
        effects: {
          tech: +8,
          innovation: +10,
          aiAdaptability: +10,
          salary: -1000,
        },
      },
      {
        text: "申请公司报销部分费用",
        effects: {
          tech: +5,
          social: +3,
          aiAdaptability: +5,
          salary: -500,
          warnings: 0,
        },
      },
      {
        text: "只参加免费部分，放弃付费内容",
        effects: { tech: +3, innovation: +3, aiAdaptability: +3, salary: 0 },
      },
      {
        text: "放弃参加，专注于当前工作",
        effects: {
          tech: +2,
          social: +2,
          teamContribution: +2,
          aiAdaptability: -3,
        },
      },
    ],
  },
  {
    id: 11,
    title: "🍵 下午茶头脑风暴",
    description:
      "团队下午茶时间，大家在讨论AI对行业的影响，产品经理邀请你分享观点。",
    options: [
      {
        text: "积极分享AI协作经验，获得大家认可",
        effects: { social: +8, aiAdaptability: +5, teamContribution: +5 },
      },
      {
        text: "默默听别人说，不发表意见",
        effects: { social: +2, teamContribution: +1 },
      },
      {
        text: "唱反调，说AI全是炒作",
        effects: { social: -5, innovation: +3, aiAdaptability: -8 },
      },
      {
        text: "提前离开，回去写代码",
        effects: { tech: +3, social: -2, teamContribution: +2 },
      },
    ],
  },
  {
    id: 12,
    title: "🐛 线上紧急bug",
    description: "周末你正在休息，线上出现严重bug，需要人立即处理。",
    options: [
      {
        text: "立刻回公司处理，展现责任心",
        effects: {
          teamContribution: +10,
          social: +5,
          tech: +2,
          salary: +1000,
          warnings: 0,
        },
      },
      {
        text: "远程指挥别人处理，自己不去",
        effects: { teamContribution: -5, social: -3, warnings: +1 },
      },
      {
        text: "说自己在外面，明天再说",
        effects: { teamContribution: -8, social: -5, warnings: +1 },
      },
      {
        text: "用AI辅助排查，远程快速解决",
        effects: { teamContribution: +8, aiAdaptability: +5, tech: +3 },
      },
    ],
  },
  {
    id: 13,
    title: "💼 老板找你谈话",
    description: "老板单独找你谈话，问你对AI引入的看法，以及你未来的职业规划。",
    options: (gameState) => [
      {
        text: "积极拥抱AI，认为AI是助手不是敌人",
        effects: { social: +10, aiAdaptability: +8, teamContribution: +5 },
      },
      {
        text: "表达担忧，说AI会让很多人失业",
        effects: { social: -5, innovation: +5, warnings: +1 },
      },
      {
        text: "说你已经做好准备，随时可以转型",
        effects: { marketValue: +8, innovation: +5, aiAdaptability: +5 },
      },
      {
        text: "请求更多资源，带领团队转型",
        effects: {
          teamContribution: +8,
          social: +5,
          rank: gameState.rank === "P5" ? "P6" : gameState.rank,
          salary: +3000,
        },
      },
    ],
  },
  {
    id: 14,
    title: "🐟 摸鱼时刻",
    description: "今天你提前完成了工作，剩下一小时没事做，你会：",
    options: [
      {
        text: "提前下班，回家休息",
        effects: { innovation: +3, social: +2 },
      },
      {
        text: "学习AI新技术，提升自己",
        effects: { aiAdaptability: +5, tech: +3, innovation: +2 },
      },
      {
        text: "和同事聊天，增进感情",
        effects: { social: +5, teamContribution: +2 },
      },
      {
        text: "偷偷刷招聘网站，看看外面机会",
        effects: { marketValue: +3, social: -2 },
      },
    ],
  },
  {
    id: 15,
    title: "🔄 代码重构任务",
    description: "团队安排你重构一段老代码，你会：",
    options: [
      {
        text: "用AI辅助生成大部分代码，自己做review",
        effects: { aiAdaptability: +8, tech: +2, teamContribution: +5 },
      },
      {
        text: "全部自己手写，保持代码控制力",
        effects: { tech: +8, aiAdaptability: +2, innovation: +3 },
      },
      {
        text: "先让AI生成，再逐步优化",
        effects: { aiAdaptability: +5, tech: +5, teamContribution: +3 },
      },
      {
        text: "推给新人去做，自己做设计",
        effects: { social: +3, teamContribution: +5, tech: +2 },
      },
    ],
  },
  {
    id: 16,
    title: "📝 技术分享",
    description: "团队要求做一次技术分享，你选择分享什么主题？",
    options: [
      {
        text: "AI辅助开发实践分享",
        effects: { aiAdaptability: +10, social: +8, teamContribution: +5 },
      },
      {
        text: "深度讲解经典算法和数据结构",
        effects: { tech: +10, innovation: +3, techMatch: +5 },
      },
      {
        text: "分享团队协作经验",
        effects: { social: +10, teamContribution: +8, innovation: +2 },
      },
      {
        text: "推辞说自己还没准备好",
        effects: { social: -5, warnings: +1 },
      },
    ],
  },
  {
    id: 17,
    title: "🤝 跨部门合作",
    description: "其他部门需要你的支持，共同完成一个重要项目，你会：",
    options: (gameState) => [
      {
        text: "全力支持，积极配合",
        effects: { social: +8, teamContribution: +8, marketValue: +5 },
      },
      {
        text: "只做自己分内事",
        effects: { social: -2, teamContribution: -2 },
      },
      {
        text: "推荐别人去做，自己专注核心任务",
        effects: { tech: +3, social: +2, teamContribution: -1 },
      },
      {
        text: "主动牵头，协调各方",
        effects: {
          social: +10,
          teamContribution: +10,
          rank: gameState.rank !== "P5" ? undefined : "P6",
          salary: gameState.rank !== "P5" ? +2000 : +3000,
        },
      },
    ],
  },
  {
    id: 18,
    title: "🚀 新功能上线",
    description:
      "你负责的新功能要上线了，测试发现一些问题， deadlines很紧，你会：",
    options: [
      {
        text: "延期上线，保证质量",
        effects: { teamContribution: +5, tech: +3, warnings: +1 },
      },
      {
        text: "凑合上线，后续迭代",
        effects: { teamContribution: -3, social: +2, warnings: 0 },
      },
      {
        text: "加班修复，按时上线",
        effects: {
          teamContribution: +8,
          social: +5,
          tech: +2,
          health: -5,
          family: -3,
        },
      },
      {
        text: "让AI帮你快速修复bug",
        effects: { aiAdaptability: +8, teamContribution: +5, tech: +2 },
      },
    ],
  },
  {
    id: 19,
    title: "💡 创新提案",
    description:
      "你想到一个可以大幅提升效率的创新方向，需要投入时间验证，你会：",
    options: [
      {
        text: "业余时间自己验证，成功后再推广",
        effects: { innovation: +15, tech: +5, aiAdaptability: +5, social: -3 },
      },
      {
        text: "在会上提出，争取团队支持",
        effects: { innovation: +10, teamContribution: +5, social: +3 },
      },
      {
        text: "想想就行了，多一事不如少一事",
        effects: { innovation: -5, social: +2 },
      },
      {
        text: "结合AI技术做原型，快速演示",
        effects: { innovation: +12, aiAdaptability: +8, techMatch: +5 },
      },
    ],
  },
  {
    id: 20,
    title: "📱 996还是不996",
    description: "项目赶进度，要求大家996加班，你会：",
    options: [
      {
        text: "服从安排，主动加班",
        effects: {
          teamContribution: +8,
          social: +3,
          salary: +2000,
          health: -8,
          family: -10,
        },
      },
      {
        text: "拒绝加班，摸鱼走人",
        effects: {
          social: -8,
          warnings: +2,
          innovation: +5,
          health: +5,
          family: +8,
        },
      },
      {
        text: "提高效率，不加班完成工作",
        effects: {
          tech: +8,
          aiAdaptability: +5,
          teamContribution: +3,
          health: -3,
          family: -3,
        },
      },
      {
        text: "和领导谈，争取合理工期",
        effects: { social: -3, teamContribution: +2, warnings: +1 },
      },
    ],
  },
  // 专属事件 - 测试工程师
  {
    id: 21,
    title: "🧪 AI测试自动化",
    description:
      "公司引入AI测试工具，能自动生成测试用例，很多测试工作可以自动化。",
    requiredRole: "qa",
    options: [
      {
        text: "学习使用AI工具，提升测试效率",
        effects: { aiAdaptability: +10, tech: +5, teamContribution: +8 },
      },
      {
        text: "担心失业，暗中抵制",
        effects: { aiAdaptability: -8, social: -3, warnings: +1 },
      },
      {
        text: "专注探索性测试，让AI做重复工作",
        effects: { innovation: +8, teamContribution: +10, marketValue: +5 },
      },
      {
        text: "转开发岗，拥抱变化",
        effects: { tech: +10, aiAdaptability: +5, salary: +3000 },
      },
    ],
  },
  // 专属事件 - 数据分析师
  {
    id: 22,
    title: "📊 AI数据分析报告",
    description: "AI现在可以自动生成数据分析报告，你的工作受到冲击。",
    requiredRole: "data",
    options: [
      {
        text: "用AI做基础分析，自己专注业务解读",
        effects: { aiAdaptability: +10, innovation: +8, teamContribution: +5 },
      },
      {
        text: "学习AI数据分析工具，成为AI专家",
        effects: { aiAdaptability: +12, tech: +8, marketValue: +5 },
      },
      {
        text: "坚持手动分析，保持特色",
        effects: { innovation: +5, tech: +5, aiAdaptability: -3 },
      },
      {
        text: "转产品岗，用数据思维做产品",
        effects: { innovation: +8, social: +5, marketValue: +8 },
      },
    ],
  },
  // P6+ 高级事件
  {
    id: 23,
    title: "💼 晋升总监机会",
    description: "现在有一个总监位置空缺，你有机会竞争这个位置。",
    requiredRank: "P6",
    options: [
      {
        text: "积极竞争，展示自己多年贡献",
        effects: {
          social: +10,
          teamContribution: +10,
          rank: "M1",
          salary: +15000,
        },
      },
      {
        text: "推荐更合适的同事，自己继续做技术",
        effects: { social: +5, tech: +10, salary: +5000, marketValue: +8 },
      },
      {
        text: "静观其变，看老板安排",
        effects: { social: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 24,
    title: "🌍 行业会议演讲",
    description: "你被邀请在行业会议上做演讲分享，这是提升个人影响力的好机会。",
    requiredRank: "P6",
    options: [
      {
        text: "欣然接受，精心准备",
        effects: { marketValue: +15, social: +10, innovation: +5 },
      },
      {
        text: "推荐其他人去，自己不出风头",
        effects: { social: +5, teamContribution: +3 },
      },
      {
        text: "担心讲不好，推辞掉",
        effects: { marketValue: -5, warnings: 0 },
      },
    ],
  },
  {
    id: 25,
    title: "🎯 新技术选型",
    description: "团队要选型新技术框架，作为资深工程师你有话语权，你倾向于：",
    requiredRank: "P6",
    options: [
      {
        text: "选择AI原生开发框架，拥抱未来",
        effects: { aiAdaptability: +10, innovation: +10, techMatch: +8 },
      },
      {
        text: "选择稳定成熟的老技术，减少风险",
        effects: { teamContribution: +5, tech: +5, innovation: -3 },
      },
      {
        text: "做POC验证，小范围试用",
        effects: { innovation: +8, teamContribution: +8, tech: +5 },
      },
      {
        text: "让团队投票决定，不拍板",
        effects: { teamContribution: -3, social: +2 },
      },
    ],
  },
  // 大厂专属
  {
    id: 26,
    title: "🖥️ 大厂OKR考核",
    description: "这季度OKR完成情况不太好，你需要和主管沟通。",
    requiredCompany: "bigtech",
    options: [
      {
        text: "主动承担责任，申请调整OKR",
        effects: { teamContribution: +5, social: +3, warnings: 0 },
      },
      {
        text: "甩锅给其他部门，说被拖延了",
        effects: { teamContribution: -5, social: -3, warnings: +1 },
      },
      {
        text: "加班赶工，争取完成",
        effects: { teamContribution: +8, social: +2, innovation: +3 },
      },
      {
        text: "用AI辅助加速完成",
        effects: { aiAdaptability: +8, teamContribution: +5, tech: +3 },
      },
    ],
  },
  // 创业公司专属
  {
    id: 27,
    title: "🚀 创业公司抢市场",
    description: "融资窗口期快到了，需要快速上线产品抢市场。",
    requiredCompany: "startup",
    options: [
      {
        text: "全栈负责，一人顶多人用",
        effects: { tech: +10, social: +5, salary: +5000, teamContribution: +8 },
      },
      {
        text: "用AI快速生成代码，加速开发",
        effects: { aiAdaptability: +12, tech: +5, teamContribution: +5 },
      },
      {
        text: "要求增加人手，否则完不成",
        effects: { social: -5, warnings: +1, teamContribution: -3 },
      },
    ],
  },
  // 传统企业专属
  {
    id: 28,
    title: "🏢 传统企业数字化转型",
    description: "公司启动数字化转型项目，需要人牵头技术升级。",
    requiredCompany: "traditional",
    options: (gameState) => [
      {
        text: "主动牵头，引入AI技术",
        effects: {
          aiAdaptability: +8,
          teamContribution: +10,
          rank: gameState.rank === "P5" ? "P6" : gameState.rank,
          salary: +4000,
        },
      },
      {
        text: "保持现状，按部就班",
        effects: { social: +3, aiAdaptability: -5, warnings: 0 },
      },
      {
        text: "建议慢慢来，不要冒进",
        effects: { teamContribution: +5, innovation: -3, social: +2 },
      },
    ],
  },
  // 更多通用事件...继续补充到100+
  {
    id: 29,
    title: "🎓 在职读MBA",
    description: "你有机会在职读MBA提升自己，但需要花费大量时间和金钱。",
    options: [
      {
        text: "报名就读，拓展人脉",
        effects: {
          social: +15,
          marketValue: +10,
          innovation: +5,
          salary: -20000,
        },
      },
      {
        text: "网上自学，不花钱",
        effects: { innovation: +5, marketValue: +3, salary: 0 },
      },
      {
        text: "没时间，不去",
        effects: { tech: +5, social: -2 },
      },
    ],
  },
  {
    id: 30,
    title: "🤝 跳槽机会",
    description: "猎头联系你，有一个不错的跳槽机会，薪资涨30%，你去不去？",
    options: [
      {
        text: "欣然接受，跳槽加薪",
        effects: { salary: +8000, marketValue: +5, social: -3 },
      },
      {
        text: "谈更好的待遇，看看再说",
        effects: { marketValue: +8, social: +2 },
      },
      {
        text: "拒绝，当前公司挺好",
        effects: { social: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 31,
    title: "🌱 开源项目维护",
    description:
      "你维护一个开源项目，最近越来越多人使用，需要投入更多精力维护。",
    options: [
      {
        text: "增加投入，成为项目维护者",
        effects: { tech: +10, innovation: +5, marketValue: +10, social: -3 },
      },
      {
        text: "交给社区，自己只做Review",
        effects: { tech: +3, social: +5, teamContribution: +2 },
      },
      {
        text: "没时间，逐渐放弃",
        effects: { marketValue: -5, innovation: -2 },
      },
    ],
  },
  {
    id: 32,
    title: "💰 副业机会",
    description: "朋友找你一起做副业，利用业余时间赚钱，你会：",
    options: [
      {
        text: "一起干，多一份收入",
        effects: { salary: +1000, innovation: +5, social: +5, tech: -3 },
      },
      {
        text: "只投资不干活，当个股东",
        effects: { salary: +500, innovation: +2, social: +3 },
      },
      {
        text: "拒绝，专注主业",
        effects: { tech: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 33,
    title: "🧠 技术债务",
    description:
      "项目积累了很多技术债务，需要重构，但老板不理解，认为浪费时间。",
    options: [
      {
        text: "说服老板，抽时间重构",
        effects: { tech: +8, teamContribution: +5, social: +3 },
      },
      {
        text: "利用业余时间悄悄重构",
        effects: { tech: +10, innovation: +3, social: -2 },
      },
      {
        text: "服从安排，先凑合用",
        effects: { teamContribution: -3, tech: -5, warnings: 0 },
      },
      {
        text: "用AI辅助加速重构",
        effects: { aiAdaptability: +8, tech: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 34,
    title: "🎨 产品经理改需求",
    description: "产品经理在上线前一天又要改核心需求，你怎么办？",
    options: [
      {
        text: "服从安排，加班改需求",
        effects: { social: +8, teamContribution: +5 },
      },
      {
        text: "讲道理，说这样质量没保障",
        effects: { social: -5, teamContribution: +3, warnings: +1 },
      },
      {
        text: "和产品协商，分阶段改",
        effects: { social: +5, teamContribution: +5, innovation: +3 },
      },
      {
        text: "用AI快速生成代码，满足需求",
        effects: { aiAdaptability: +10, teamContribution: +3, tech: +2 },
      },
    ],
  },
  {
    id: 35,
    title: "🔐 安全漏洞",
    description: "安全扫描发现项目有一个高危安全漏洞，需要立即修复。",
    options: [
      {
        text: "放下所有事，优先修复",
        effects: { teamContribution: +10, tech: +5, warnings: 0 },
      },
      {
        text: "评估影响，排期修复",
        effects: { teamContribution: +5, tech: +3, social: +2 },
      },
      {
        text: "说影响不大，不用急着修",
        effects: { teamContribution: -8, warnings: +2 },
      },
    ],
  },
  {
    id: 36,
    title: "📖 技术书籍写作",
    description: "出版社找你，邀请你写一本技术书籍，你会：",
    options: [
      {
        text: "同意，利用业余时间写作",
        effects: { marketValue: +15, innovation: +5, tech: +3, social: +5 },
      },
      {
        text: "没时间，婉拒",
        effects: { tech: +5 },
      },
      {
        text: "和别人合写",
        effects: { marketValue: +8, social: +8, innovation: +3 },
      },
    ],
  },
  {
    id: 37,
    title: "🗣️ 部门会议",
    description: "周会讨论AI对部门的影响，领导让你发言，你怎么说？",
    options: [
      {
        text: "AI是机遇不是威胁，应该主动拥抱",
        effects: { aiAdaptability: +10, social: +8, teamContribution: +5 },
      },
      {
        text: "AI会抢工作，应该放慢引入速度",
        effects: { social: -3, innovation: +5, warnings: +1 },
      },
      {
        text: "不同岗位区别对待，不能一刀切",
        effects: { innovation: +8, social: +5, teamContribution: +5 },
      },
      {
        text: "不发言，听别人说",
        effects: { social: +1 },
      },
    ],
  },
  {
    id: 38,
    title: "🚪 办公室政治",
    description: "两个部门老大不和，你的项目夹在中间，你怎么办？",
    options: [
      {
        text: "保持中立，不站队",
        effects: { social: +5, warnings: 0 },
      },
      {
        text: "加入你认为对的一方",
        effects: { social: +8, teamContribution: -3, warnings: +1 },
      },
      {
        text: "找借口调离项目",
        effects: { social: -2, warnings: 0 },
      },
      {
        text: "从中协调，促进合作",
        effects: { social: +12, teamContribution: +8, innovation: +5 },
      },
    ],
  },
  {
    id: 39,
    title: "🧪 A/B测试",
    description: "产品要做新功能A/B测试，需要你做技术方案。",
    options: [
      {
        text: "设计完善的A/B测试框架",
        effects: { tech: +8, innovation: +5, teamContribution: +5 },
      },
      {
        text: "快速上线，简单对比",
        effects: { tech: +3, innovation: +2 },
      },
      {
        text: "用AI生成测试代码",
        effects: { aiAdaptability: +8, tech: +3 },
      },
    ],
  },
  {
    id: 40,
    title: "📡 技术调研",
    description: "老板让你调研一个热门新技术，写调研报告。",
    options: [
      {
        text: "深入调研，亲自跑Demo，写详细报告",
        effects: { tech: +10, innovation: +8, teamContribution: +5 },
      },
      {
        text: "让AI帮你整理资料，快速输出报告",
        effects: { aiAdaptability: +10, tech: +3, innovation: +2 },
      },
      {
        text: "抄网上文章，改改就交",
        effects: { tech: -3, teamContribution: -5, warnings: +1 },
      },
    ],
  },
  {
    id: 41,
    title: "🎯 个人绩效谈判",
    description: "年度绩效谈薪资，你对当前结果不满意，你会：",
    options: [
      {
        text: "据理力争，要求加薪升职",
        effects: { salary: +5000, social: -3, warnings: +1 },
      },
      {
        text: "接受结果，明年再说",
        effects: { social: +3 },
      },
      {
        text: "用外面offer谈条件",
        effects: { salary: +8000, marketValue: +5, warnings: +1 },
      },
    ],
  },
  {
    id: 42,
    title: "🧑‍🏫 带新人",
    description: "公司分配一个新人给你带，你会怎么带？",
    options: [
      {
        text: "认真教，分享经验",
        effects: { social: +10, teamContribution: +8, innovation: +2 },
      },
      {
        text: "让他自己看文档，遇到问题再问",
        effects: { tech: +3, social: +2 },
      },
      {
        text: "让AI教他，你做检查",
        effects: { aiAdaptability: +5, teamContribution: +3, social: +3 },
      },
      {
        text: "没时间，推给别人",
        effects: { social: -5, teamContribution: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 43,
    title: "💬 线上会议",
    description: "疫情反复，很多会议都改成线上了，你偏好：",
    options: [
      {
        text: "全程开摄像头，积极互动",
        effects: { social: +5, teamContribution: +3 },
      },
      {
        text: "不开摄像头，只听不说",
        effects: { social: -2 },
      },
      {
        text: "选择性参加，不重要的挂机",
        effects: { tech: +5, social: -1 },
      },
    ],
  },
  {
    id: 44,
    title: "🔄 架构演进",
    description: "系统需要从单体拆分为微服务，这个任务交给你，你会：",
    options: [
      {
        text: "制定详细拆分计划，逐步实施",
        effects: { tech: +12, teamContribution: +8, social: +3 },
      },
      {
        text: "一次性全部拆掉，重新来过",
        effects: { innovation: +10, tech: +5, warnings: +1 },
      },
      {
        text: "保持现状，够用就好",
        effects: { tech: -3, teamContribution: -2 },
      },
      {
        text: "用AI辅助分析和迁移代码",
        effects: { aiAdaptability: +10, tech: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 45,
    title: "🌙 加班文化",
    description: "团队加班风气很重，不加班好像就是不对，你怎么办？",
    options: [
      {
        text: "提高效率，到点走人",
        effects: { tech: +5, social: -3, innovation: +2 },
      },
      {
        text: "入乡随俗，留下来加班",
        effects: { social: +5, teamContribution: +3 },
      },
      {
        text: "活干完就走，不管别人怎么看",
        effects: { innovation: +5, social: -2 },
      },
    ],
  },
  {
    id: 46,
    title: "🤖 AI生成代码Review",
    description: "同事用AI生成了一段代码，让你Review，你发现质量不高，你会：",
    options: [
      {
        text: "认真指出问题，手把手教他改进",
        effects: { social: +8, teamContribution: +8, tech: +3 },
      },
      {
        text: "差不多就行，直接approve",
        effects: { social: +5, teamContribution: -5, techMatch: -3 },
      },
      {
        text: "直接打回去让他重写",
        effects: { social: -3, teamContribution: +3, warnings: 0 },
      },
      {
        text: "自己用AI再生成一个对比，给出改进建议",
        effects: { aiAdaptability: +8, tech: +5, teamContribution: +5 },
      },
    ],
  },
  {
    id: 47,
    title: "📱 DevOps转型",
    description: "公司推行DevOps，开发要自己运维，你怎么看？",
    options: [
      {
        text: "积极学习，自己从开发到上线一条龙",
        effects: { tech: +10, innovation: +5, marketValue: +8 },
      },
      {
        text: "保持分工，专业人做专业事",
        effects: { tech: +5, teamContribution: +3, social: -2 },
      },
      {
        text: "用AI辅助自动化运维，减轻负担",
        effects: { aiAdaptability: +10, tech: +3, teamContribution: +3 },
      },
    ],
  },
  {
    id: 48,
    title: "🏃‍♂️ 中年危机",
    description: "你快35岁了，身体不如以前，加班容易累，你怎么应对？",
    options: (gameState) => [
      {
        text: "加强锻炼，保持健康",
        effects: { innovation: +5, tech: +2 },
      },
      {
        text: "转向管理，用经验代替体力",
        effects: {
          social: +8,
          teamContribution: +8,
          rank: gameState.rank === "P6" ? "M1" : gameState.rank,
        },
      },
      {
        text: "继续深耕技术，保持技术竞争力",
        effects: { tech: +10, marketValue: +8, innovation: +3 },
      },
      {
        text: "发展副业，准备后路",
        effects: { innovation: +8, marketValue: +5, tech: -3 },
      },
    ],
  },
  {
    id: 49,
    title: "🌐 去一线城市还是留二线",
    description: "有一个一线大厂的offer，薪资翻倍，但压力大房价高，选哪个？",
    options: [
      {
        text: "去一线大厂，拼一把",
        effects: { salary: +10000, marketValue: +10, social: -5 },
      },
      {
        text: "留二线，工作生活平衡",
        effects: { innovation: +5, social: +5, marketValue: -5 },
      },
      {
        text: "接offer谈remote，二线拿一线工资",
        effects: { salary: +8000, aiAdaptability: +5, innovation: +3 },
      },
    ],
  },
  {
    id: 50,
    title: "🧩 技术选型争论",
    description: "团队讨论技术选型，分成两派，你支持哪一边？",
    options: [
      {
        text: "坚持选成熟稳定的技术",
        effects: { teamContribution: +5, tech: +5, innovation: -2 },
      },
      {
        text: "坚持选新潮热门的技术",
        effects: { innovation: +8, tech: +3, marketValue: +5 },
      },
      {
        text: "寻找折中方案，分场景使用",
        effects: { innovation: +5, social: +8, teamContribution: +5 },
      },
      {
        text: "不表态，领导说啥就是啥",
        effects: { social: +3 },
      },
    ],
  },
  {
    id: 51,
    title: "🗄️ 技术债务偿还",
    description:
      "项目积累了大量技术债务，团队决定花一个 sprint 集中偿还，你会：",
    options: [
      {
        text: "主动承担最难啃的部分",
        effects: { tech: +10, teamContribution: +8, innovation: +3 },
      },
      {
        text: "做好自己的那份就行",
        effects: { tech: +3, teamContribution: +2 },
      },
      {
        text: "借口太忙，推给新人去做",
        effects: { teamContribution: -5, social: -3, warnings: +1 },
      },
      {
        text: "用AI帮你分析和重构代码",
        effects: { aiAdaptability: +8, tech: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 52,
    title: "📝 技术文档写作",
    description: "领导要求你写一份详细的技术设计文档，你会：",
    options: [
      {
        text: "认真写清楚设计思路和权衡",
        effects: { teamContribution: +8, tech: +5, social: +3 },
      },
      {
        text: "简单写写，剩下让大家自己看代码",
        effects: { teamContribution: -3, innovation: -2 },
      },
      {
        text: "让AI帮你生成初稿，自己修改",
        effects: { aiAdaptability: +5, teamContribution: +5, tech: +2 },
      },
    ],
  },
  {
    id: 53,
    title: "🚀 晋升P6之后",
    description: "你成功晋升P6，现在有一个带新人的机会，你会：",
    requiredRank: "P5",
    options: (gameState) => [
      {
        text: "认真带教，分享经验",
        effects: {
          social: +10,
          teamContribution: +8,
          rank: "P6",
          salary: +5000,
        },
      },
      {
        text: "让他自己看文档，遇到问题再问",
        effects: { tech: +5, social: +2, rank: "P6", salary: +5000 },
      },
      {
        text: "推给其他老员工带",
        effects: {
          social: -5,
          teamContribution: -5,
          rank: "P6",
          salary: +5000,
          warnings: +1,
        },
      },
    ],
  },
  {
    id: 54,
    title: "🤔 35岁+程序员",
    description: "你已经过了35岁，公司招聘越来越偏好年轻人，你怎么看？",
    options: [
      {
        text: "保持学习，每年更新技术栈",
        effects: { tech: +10, aiAdaptability: +8, marketValue: +5 },
      },
      {
        text: "转向管理方向，依靠经验吃饭",
        effects: { social: +8, teamContribution: +8, innovation: +2 },
      },
      {
        text: "降低预期，稳定就好",
        effects: { innovation: -5, marketValue: -3, social: +2 },
      },
      {
        text: "提前准备副业，多元化收入",
        effects: { innovation: +8, marketValue: +5, salary: +2000 },
      },
    ],
  },
  {
    id: 55,
    title: "🌊 创业风口",
    description: "AI创业风口来了，朋友拉你一起出来创业，你去吗？",
    options: [
      {
        text: "辞职全职创业",
        effects: {
          innovation: +15,
          marketValue: +10,
          salary: -10000,
          social: -5,
        },
      },
      {
        text: "兼职参与，不辞职",
        effects: { innovation: +8, marketValue: +5, tech: +3 },
      },
      {
        text: "风口都是泡沫，拒绝",
        effects: { innovation: -3, social: +2 },
      },
    ],
  },
  {
    id: 56,
    title: "📱 远程办公 vs 办公室",
    description: "公司永久开放混合办公模式，你选择：",
    options: [
      {
        text: "完全远程，省下通勤时间",
        effects: { tech: +5, innovation: +5, social: -5 },
      },
      {
        text: "每周去两三天，混合模式",
        effects: { tech: +2, innovation: +3, social: +3, teamContribution: +2 },
      },
      {
        text: "每天去办公室，方便沟通",
        effects: { social: +8, teamContribution: +5, tech: -2 },
      },
    ],
  },
  {
    id: 57,
    title: "💬 代码评审",
    description: "你review同事的代码，发现很多问题，你会：",
    options: [
      {
        text: "礼貌指出问题，给出改进建议",
        effects: { social: +5, teamContribution: +8 },
      },
      {
        text: "直接打回去让重写",
        effects: { social: -5, teamContribution: +3, warnings: 0 },
      },
      {
        text: "用AI帮你检查，给出具体优化点",
        effects: { aiAdaptability: +5, teamContribution: +5, tech: +2 },
      },
      {
        text: "差不多就行，直接approve",
        effects: { teamContribution: -5, techMatch: -3 },
      },
    ],
  },
  {
    id: 58,
    title: "🎁 年终奖发放",
    description: "今年公司业绩不错，年终奖超出预期，你会：",
    options: (gameState) => [
      {
        text: "存起来，准备买房首付",
        effects: {},
      },
      {
        text: "报班学习新技术投资自己",
        effects: {
          tech: +8,
          innovation: +5,
          salary: -(gameState.salary * 12) / 12,
        },
      },
      {
        text: "买最新款电子产品犒劳自己",
        effects: { salary: -(gameState.salary * 12) / 6, innovation: +2 },
      },
      {
        text: "一部分投资，一部分花掉",
        effects: { innovation: +3, marketValue: +3 },
      },
    ],
  },
  {
    id: 59,
    title: "🔍 线上故障复盘",
    description: "线上出了严重故障，影响很多用户，复盘会议上你会：",
    options: [
      {
        text: "主动承担责任，提出改进方案",
        effects: { teamContribution: +10, social: +5 },
      },
      {
        text: "推锅给其他人，说和自己无关",
        effects: { teamContribution: -8, social: -5, warnings: +1 },
      },
      {
        text: "客观分析问题，提出预防措施",
        effects: { innovation: +8, teamContribution: +8, tech: +3 },
      },
    ],
  },
  {
    id: 60,
    title: "🧪 测试开发专场 - 自动化测试",
    description:
      "公司引入AI自动化测试工具，能自动生成用例，你作为测试工程师怎么看？",
    requiredRole: "qa",
    options: [
      {
        text: "学习使用工具，专注探索性测试",
        effects: { aiAdaptability: +10, innovation: +5, teamContribution: +8 },
      },
      {
        text: "担心失业，保持观望",
        effects: { aiAdaptability: -5, warnings: +1 },
      },
      {
        text: "负责测试策略设计，让AI做重复工作",
        effects: { teamContribution: +12, innovation: +8, marketValue: +5 },
      },
      {
        text: "转开发，拥抱变化",
        effects: { tech: +10, aiAdaptability: +5, salary: +3000 },
      },
    ],
  },
  {
    id: 61,
    title: "📊 数据分析师专场 - 数据驱动决策",
    description:
      "现在AI可以自动生成数据分析报告，你作为数据分析师如何体现价值？",
    requiredRole: "data",
    options: [
      {
        text: "专注业务解读，AI做计算人做判断",
        effects: { innovation: +10, teamContribution: +10, marketValue: +8 },
      },
      {
        text: "学习Prompt工程，提高分析效率",
        effects: { aiAdaptability: +12, tech: +8, innovation: +5 },
      },
      {
        text: "转型产品分析师，深入业务",
        effects: { innovation: +8, social: +8, marketValue: +10 },
      },
      {
        text: "焦虑不安，觉得工作不保",
        effects: { innovation: -5, marketValue: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 62,
    title: "🚢 架构重构",
    description: "老系统需要全面架构重构，你负责这个项目，你会：",
    options: [
      {
        text: "分阶段逐步迁移，降低风险",
        effects: { tech: +10, teamContribution: +8, innovation: +5 },
      },
      {
        text: "推倒重来，一次性全部重构",
        effects: { innovation: +10, tech: +8, warnings: +1 },
      },
      {
        text: "用AI辅助分析依赖和生成新代码",
        effects: { aiAdaptability: +10, tech: +5, teamContribution: +3 },
      },
      {
        text: "保持现状，够用就好",
        effects: { tech: -3, teamContribution: -2 },
      },
    ],
  },
  {
    id: 63,
    title: "💼 P6晋升答辩",
    description: "你准备好晋升答辩，你会重点展示什么？",
    requiredRank: "P5",
    options: [
      {
        text: "展示你负责的业务成果和影响",
        effects: {
          teamContribution: +10,
          marketValue: +8,
          rank: "P6",
          salary: +4000,
        },
      },
      {
        text: "展示你技术深度和架构能力",
        effects: { tech: +12, techMatch: +10, rank: "P6", salary: +4000 },
      },
      {
        text: "展示你和其他团队协作能力",
        effects: {
          social: +12,
          teamContribution: +10,
          rank: "P6",
          salary: +4000,
        },
      },
    ],
  },
  {
    id: 64,
    title: "🎓 在职读研究生",
    description:
      "你有机会在职读一个计算机硕士，但是需要三年时间和不少学费，你去吗？",
    options: [
      {
        text: "去读，提升学历背景",
        effects: { marketValue: +10, innovation: +5, salary: -30000 },
      },
      {
        text: "不去，工作中学习更重要",
        effects: { tech: +5, innovation: +5 },
      },
      {
        text: "读在职MBA，提升管理能力",
        effects: { social: +8, marketValue: +8, salary: -50000 },
      },
    ],
  },
  {
    id: 65,
    title: "🌍 开源贡献",
    description: "你用到的开源项目有个bug，你会：",
    options: [
      {
        text: "提issue，等待作者修复",
        effects: { tech: +2 },
      },
      {
        text: "自己fix，提PR给作者",
        effects: { tech: +8, innovation: +5, marketValue: +8 },
      },
      {
        text: "fork一份自己维护",
        effects: { tech: +10, innovation: +3, social: -2 },
      },
      {
        text: "换一个替代库",
        effects: { innovation: +5, tech: +2, social: +2 },
      },
    ],
  },
  {
    id: 66,
    title: "💬 跨部门需求冲突",
    description:
      "两个部门同时给你提了优先级相同的需求，deadline撞了，你怎么办？",
    options: [
      {
        text: "找两个经理一起开会对齐优先级",
        effects: { social: +5, teamContribution: +5 },
      },
      {
        text: "先做自己部门的，另一个再说",
        effects: { social: -3, teamContribution: -2 },
      },
      {
        text: "拉上大家一起梳理，找个折中方案",
        effects: { social: +8, teamContribution: +8, innovation: +3 },
      },
      {
        text: "都说好，自己加班做",
        effects: {
          teamContribution: +5,
          innovation: -2,
          health: -5,
          family: -5,
        },
      },
    ],
  },
  {
    id: 67,
    title: "🔐 密码管理",
    description: "团队安全培训说密码要定期换，你现在：",
    options: [
      {
        text: "所有地方用相同密码，懒得换",
        effects: { warnings: +1 },
      },
      {
        text: "用密码管理器，随机复杂密码",
        effects: { tech: +2, teamContribution: +2 },
      },
      {
        text: "开二次验证",
        effects: { tech: +3, teamContribution: +3 },
      },
    ],
  },
  {
    id: 68,
    title: "🧠 学习AI提示工程",
    description: "现在Prompt Engineering 很火，你会：",
    options: [
      {
        text: "认真学习，掌握技巧，提高效率",
        effects: { aiAdaptability: +10, tech: +5, innovation: +3 },
      },
      {
        text: "随便用用，不用特意学",
        effects: { aiAdaptability: +3 },
      },
      {
        text: "觉得是炒作，不用学",
        effects: { aiAdaptability: -5, innovation: -3 },
      },
    ],
  },
  {
    id: 69,
    title: "🏃 健康管理",
    description: "最近加班多，身体不舒服，体检出小问题，你会：",
    options: [
      {
        text: "开始规律运动，少熬夜",
        effects: { innovation: +3, marketValue: +2 },
      },
      {
        text: "没办法，继续拼，年轻就是资本",
        effects: { tech: +2, innovation: +2, warnings: +1 },
      },
      {
        text: "减少加班，多休息",
        effects: { tech: -2, innovation: +1 },
      },
    ],
  },
  {
    id: 70,
    title: "📱 微信工作群",
    description: "下班之后，微信群@你处理工作问题，你会：",
    options: [
      {
        text: "立刻回复处理",
        effects: { teamContribution: +5, social: +3 },
      },
      {
        text: "明天上班再说",
        effects: { teamContribution: -2, innovation: +3 },
      },
      {
        text: "简单回复说明天处理",
        effects: { teamContribution: +2, social: +2 },
      },
    ],
  },
  {
    id: 71,
    title: "🎯 OKR不达标",
    description: "这季度OKR完成不了，你会：",
    requiredCompany: "bigtech",
    options: [
      {
        text: "提前和主管沟通，申请调整",
        effects: { teamContribution: +5, social: +3, warnings: 0 },
      },
      {
        text: "注水，虚报进度",
        effects: { teamContribution: -5, warnings: +1 },
      },
      {
        text: "加班赶工争取完成",
        effects: { teamContribution: +8, innovation: +3 },
      },
      {
        text: "用AI辅助加速",
        effects: { aiAdaptability: +8, teamContribution: +5, tech: +3 },
      },
    ],
  },
  {
    id: 72,
    title: "🚀 赶上线",
    description: "创业公司要赶融资节点，必须月底上线，你会：",
    requiredCompany: "startup",
    options: [
      {
        text: "加班赶工，保证上线",
        effects: { teamContribution: +10, innovation: +5, salary: +1000 },
      },
      {
        text: "砍功能，保核心上线",
        effects: { innovation: +8, teamContribution: +8 },
      },
      {
        text: "实话实说，时间不够",
        effects: { social: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 73,
    title: "🏢 流程僵化",
    description: "传统企业流程很多，效率低，你会：",
    requiredCompany: "traditional",
    options: [
      {
        text: "按流程走，不改变",
        effects: { social: +3 },
      },
      {
        text: "慢慢优化，从小处改起",
        effects: { innovation: +8, teamContribution: +5, aiAdaptability: +3 },
      },
      {
        text: "提出全面改革方案",
        effects: { innovation: +10, social: -5, warnings: +1 },
      },
    ],
  },
  {
    id: 74,
    title: "🖥️ 远程面试",
    description: "你换工作，现在都是远程面试，你偏好：",
    options: [
      {
        text: "远程面试，省去跑一趟",
        effects: { marketValue: +3, innovation: +2 },
      },
      {
        text: "现场面试，可以参观公司",
        effects: { marketValue: +5, social: +3 },
      },
    ],
  },
  {
    id: 75,
    title: "💰 薪资谈判",
    description: "面试最后谈薪资，HR给的薪资低于预期，你会：",
    options: [
      {
        text: "据理力争，要求达到预期",
        effects: { salary: +3000, social: -2 },
      },
      {
        text: "接受，先入职再说",
        effects: { social: +3 },
      },
      {
        text: "谈不拢，放弃offer",
        effects: { marketValue: +2, innovation: -2 },
      },
    ],
  },
  {
    id: 76,
    title: "🧪 A/B测试争议",
    description:
      "A/B测试结果不明显，产品说要继续跑，开发说别占用资源，你站哪边：",
    options: [
      {
        text: "支持产品，继续测试",
        effects: { teamContribution: +3, innovation: +2 },
      },
      {
        text: "支持开发，提前结束",
        effects: { tech: +3, teamContribution: +2 },
      },
      {
        text: "分析数据，找折中方案",
        effects: { innovation: +5, teamContribution: +5, social: +3 },
      },
    ],
  },
  {
    id: 77,
    title: "📈 性能优化",
    description: "产品说页面太慢，需要优化性能，你会：",
    options: [
      {
        text: "用profiler找到瓶颈，针对性优化",
        effects: { tech: +8, teamContribution: +5 },
      },
      {
        text: "凭经验乱试，改到哪算哪",
        effects: { tech: +2, teamContribution: -2 },
      },
      {
        text: "让AI帮你分析性能瓶颈",
        effects: { aiAdaptability: +5, tech: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 78,
    title: "🔄 依赖更新",
    description: "项目依赖很多版本落后了，是否更到最新：",
    options: [
      {
        text: "逐个更，仔细测试",
        effects: { tech: +5, teamContribution: +5 },
      },
      {
        text: "批量一次性更完",
        effects: { tech: +3, warnings: +1 },
      },
      {
        text: "能用就好，不更",
        effects: { tech: -2, techMatch: -3 },
      },
      {
        text: "用AI帮你看更新日志，评估风险",
        effects: { aiAdaptability: +5, tech: +3 },
      },
    ],
  },
  {
    id: 79,
    title: "💼 管理岗机会",
    description: "有一个管理岗空缺，问你有没有兴趣，你：",
    requiredRank: "P6",
    options: [
      {
        text: "接受，转型管理",
        effects: { social: +10, rank: "M1", salary: +10000 },
      },
      {
        text: "拒绝，继续做技术专家",
        effects: { tech: +10, innovation: +5, salary: +5000 },
      },
      {
        text: "先试试，不行再转回来",
        effects: { social: +5, tech: +5, rank: "M1", salary: +8000 },
      },
    ],
  },
  {
    id: 80,
    title: "🎨 设计师专场 - AI设计",
    description: "AI现在能快速生成很多设计方案，作为设计师你怎么看：",
    requiredRole: "designer",
    options: [
      {
        text: "用AI快速出初稿，自己做审美调整",
        effects: { aiAdaptability: +10, innovation: +5, marketValue: +5 },
      },
      {
        text: "拒绝AI，坚持纯手工",
        effects: { innovation: +8, aiAdaptability: -5, warnings: +1 },
      },
      {
        text: "专注用户体验研究，AI做执行",
        effects: { innovation: +10, teamContribution: +8, marketValue: +8 },
      },
    ],
  },
  {
    id: 81,
    title: "产品经理专场 - AI产品",
    description: "老板让你做一个AI产品，你会：",
    requiredRole: "product",
    options: [
      {
        text: "找到真实痛点，用AI解决真问题",
        effects: { innovation: +10, marketValue: +10, teamContribution: +5 },
      },
      {
        text: "跟风蹭热点，随便做一个",
        effects: { innovation: +3, marketValue: -5, warnings: +1 },
      },
      {
        text: "先做小范围MVP验证需求",
        effects: { innovation: +8, teamContribution: +8, marketValue: +8 },
      },
    ],
  },
  {
    id: 82,
    title: "后端专场 - 微服务拆分",
    description: "现在要拆单体成微服务，你怎么拆：",
    requiredRole: "backend",
    options: [
      {
        text: "按业务领域拆分，界定边界",
        effects: { tech: +10, techMatch: +10, innovation: +5 },
      },
      {
        text: "按代码层拆分，快拆完再说",
        effects: { tech: +5, techMatch: -5, innovation: +3 },
      },
      {
        text: "用AI分析依赖，帮你建议拆分",
        effects: { aiAdaptability: +8, tech: +5, techMatch: +5 },
      },
    ],
  },
  {
    id: 83,
    title: "前端专场 - 框架选型",
    description: "新项目选前端框架，你倾向：",
    requiredRole: "frontend",
    options: [
      {
        text: "选成熟稳定的React",
        effects: { teamContribution: +8, tech: +5 },
      },
      {
        text: "尝试最新热门框架",
        effects: { innovation: +10, tech: +8, warnings: +1 },
      },
      {
        text: "根据团队技术栈选",
        effects: { teamContribution: +10, social: +5 },
      },
    ],
  },
  {
    id: 84,
    title: "🔥 生产环境出bug",
    description: "周五晚上快下班，线上出了严重bug，你会：",
    options: [
      {
        text: "留下来定位修复，好了再走",
        effects: { teamContribution: +10, social: +5 },
      },
      {
        text: "说周一再说，反正影响不大",
        effects: { teamContribution: -8, warnings: +2 },
      },
      {
        text: "远程排查，指导新人修复",
        effects: { teamContribution: +5, social: +5 },
      },
    ],
  },
  {
    id: 85,
    title: "📝 每日站会",
    description: "每天站会大家都说什么，你通常：",
    options: [
      {
        text: "简明扼要，说完就干活",
        effects: { teamContribution: +3 },
      },
      {
        text: "说半天，扯一堆没用的",
        effects: { teamContribution: -2 },
      },
      {
        text: "遇到问题当场提出来求助",
        effects: { teamContribution: +5, innovation: +2 },
      },
    ],
  },
  {
    id: 86,
    title: "🚀 新技术预研",
    description: "团队要引入新技术，你负责预研，你会：",
    options: [
      {
        text: "搭Demo，写详细报告，评估利弊",
        effects: { tech: +10, innovation: +8, teamContribution: +5 },
      },
      {
        text: "抄两篇文章凑合交差",
        effects: { tech: -3, teamContribution: -5, warnings: +1 },
      },
      {
        text: "让AI帮你整理资料，总结重点",
        effects: { aiAdaptability: +8, tech: +5, innovation: +3 },
      },
    ],
  },
  {
    id: 87,
    title: "💼 大厂 末位优化",
    description: "公司实行末位淘汰，你排名靠后，怎么办：",
    requiredCompany: "bigtech",
    options: [
      {
        text: "加倍努力，争取提升排名",
        effects: { tech: +8, teamContribution: +5 },
      },
      {
        text: "开始找下家，准备跑路",
        effects: { marketValue: +8, social: -3 },
      },
      {
        text: "找老板沟通，争取机会",
        effects: { social: +5, warnings: 0 },
      },
    ],
  },
  {
    id: 88,
    title: "💡 创新项目",
    description: "公司鼓励创新，你有一个想法，想做创新项目，你会：",
    options: [
      {
        text: "先做原型，验证想法再推广",
        effects: { innovation: +10, marketValue: +5, tech: +3 },
      },
      {
        text: "申请资源，拉大队做",
        effects: { innovation: +8, teamContribution: +5, warnings: +1 },
      },
      {
        text: "业余时间自己做",
        effects: { innovation: +8, marketValue: +3, social: -2 },
      },
    ],
  },
  {
    id: 89,
    title: "🔀 需求频繁变更",
    description: "产品经理天天改需求，你怎么办：",
    options: [
      {
        text: "理解业务原因，配合修改",
        effects: { social: +8, teamContribution: +5 },
      },
      {
        text: "拒绝，说影响架构",
        effects: { tech: +5, social: -5, warnings: +1 },
      },
      {
        text: "和产品一起分析原因，控制范围",
        effects: { social: +8, innovation: +5, teamContribution: +3 },
      },
      {
        text: "用AI生成代码，快速改",
        effects: { aiAdaptability: +8, tech: +3 },
      },
    ],
  },
  {
    id: 90,
    title: "📚 技术博客",
    description: "你想写技术博客分享经验，你会写什么：",
    options: [
      {
        text: "总结自己踩过的坑",
        effects: { innovation: +5, marketValue: +8, tech: +3 },
      },
      {
        text: "翻译国外好文",
        effects: { innovation: +3, marketValue: +3 },
      },
      {
        text: "不写，没时间，浪费精力",
        effects: { tech: +2 },
      },
      {
        text: "坚持写，打造个人品牌",
        effects: { marketValue: +10, innovation: +5, social: +3 },
      },
    ],
  },
  {
    id: 91,
    title: "🤝 新人融入",
    description: "新人来了，你作为老员工，你会：",
    options: [
      {
        text: "主动带教，解答问题",
        effects: { social: +8, teamContribution: +8 },
      },
      {
        text: "让他自己看文档",
        effects: { social: +2 },
      },
      {
        text: "教他熟悉公司流程和文化",
        effects: { social: +10, teamContribution: +5 },
      },
    ],
  },
  {
    id: 92,
    title: "🌙 摸鱼被抓",
    description: "上班摸鱼被老板撞见了，怎么办：",
    options: [
      {
        text: "道歉，保证下次不犯",
        effects: { warnings: +1, social: -2 },
      },
      {
        text: "说你在思考架构问题",
        effects: { warnings: +1, innovation: +2 },
      },
      {
        text: "继续摸，无所谓",
        effects: { warnings: +2, social: -5 },
      },
    ],
  },
  {
    id: 93,
    title: "💬 技术分享会",
    description: "部门每周技术分享，轮到你了，你分享什么：",
    options: [
      {
        text: "分享最近学的新技术",
        effects: { tech: +5, social: +5, innovation: +3 },
      },
      {
        text: "分享项目踩坑经验",
        effects: { teamContribution: +8, social: +5 },
      },
      {
        text: "让AI帮你做PPT",
        effects: { aiAdaptability: +5, social: +3 },
      },
      {
        text: "找借口推掉",
        effects: { social: -3, marketValue: -2 },
      },
    ],
  },
  {
    id: 94,
    title: "🔒 信息安全",
    description: "收到钓鱼邮件，里面有恶意附件，你会：",
    options: [
      {
        text: "直接删除，报告安全部门",
        effects: { teamContribution: +5 },
      },
      {
        text: "好奇，点开看看",
        effects: { warnings: +2, teamContribution: -5 },
      },
      {
        text: "转发给同事开玩笑",
        effects: { warnings: +3, social: -8 },
      },
    ],
  },
  {
    id: 95,
    title: "🌐 敏捷开发",
    description: "公司推行敏捷开发，你觉得：",
    options: [
      {
        text: "拥抱敏捷，每日迭代改进",
        effects: { innovation: +8, teamContribution: +8 },
      },
      {
        text: "就是改个名字，还是瀑布",
        effects: { innovation: -2 },
      },
      {
        text: "取其精华，适合就好",
        effects: { innovation: +5, teamContribution: +5 },
      },
    ],
  },
  {
    id: 96,
    title: "💎 技术 debt",
    description: "老板觉得技术债务不重要，应该先做新功能，你怎么说服他：",
    options: [
      {
        text: "算清债务成本，说服老板安排时间",
        effects: { tech: +5, teamContribution: +5, social: +3 },
      },
      {
        text: "老板说的对，先做新功能",
        effects: { tech: -5, techMatch: -5, innovation: -2 },
      },
      {
        text: "平时挤时间慢慢还",
        effects: { tech: +3, techMatch: +3 },
      },
    ],
  },
  {
    id: 97,
    title: "🚢 架构师成长",
    description: "你想成长为架构师，你会重点提升哪方面：",
    options: [
      {
        text: "深度钻研技术细节",
        effects: { tech: +10, techMatch: +10 },
      },
      {
        text: "提升沟通和影响力",
        effects: { social: +10, teamContribution: +10 },
      },
      {
        text: "多做跨项目总结经验",
        effects: { innovation: +8, marketValue: +8 },
      },
      {
        text: "学习业务理解产品",
        effects: { innovation: +5, marketValue: +10 },
      },
    ],
  },
  {
    id: 98,
    title: "🎓 培训机会",
    description: "公司送你去外面参加高端技术培训，费用不少，你去吗：",
    options: [
      {
        text: "当然去，好好学习",
        effects: { tech: +10, innovation: +8, aiAdaptability: +5 },
      },
      {
        text: "让新人去，自己已经会了",
        effects: { social: +5, innovation: +3 },
      },
      {
        text: "不去，浪费时间，不如干活",
        effects: { tech: +3, innovation: -5 },
      },
    ],
  },
  {
    id: 99,
    title: "🤔 职场三十五岁",
    description: "三十五岁了，你最大的感悟是：",
    options: [
      {
        text: "身体健康最重要",
        effects: { innovation: +5, marketValue: +2 },
      },
      {
        text: "持续学习不能停",
        effects: { tech: +5, aiAdaptability: +5, innovation: +5 },
      },
      {
        text: "人脉比技术重要",
        effects: { social: +8, marketValue: +5 },
      },
      {
        text: "存钱应对不确定性",
        effects: { marketValue: +3, innovation: +2 },
      },
    ],
  },
  {
    id: 100,
    title: "✨ 新的季度开始",
    description: "新的季度开始，AI又要进步了，你对自己说：",
    options: [
      {
        text: "继续努力学习，保持竞争力",
        effects: { tech: +3, aiAdaptability: +3, innovation: +3 },
      },
      {
        text: "稳扎稳打，保持现状",
        effects: { tech: +1 },
      },
      {
        text: "寻求突破，改变自己",
        effects: { innovation: +5, marketValue: +3 },
      },
    ],
  },
  {
    id: 101,
    title: "🐙 GitHub Copilot 涨价了",
    description: "你一直用的 AI 编程助手涨价了，你会：",
    options: [
      {
        text: "继续付费，效率提升值得",
        effects: { aiAdaptability: +5, salary: -100 },
      },
      {
        text: "换个免费替代品",
        effects: { aiAdaptability: +3 },
      },
      {
        text: "不用AI了，自己写",
        effects: { aiAdaptability: -5, tech: +5 },
      },
    ],
  },
  {
    id: 102,
    title: "🤫 工资倒挂",
    description: "你发现新来的应届生工资比你还高，你会：",
    options: [
      {
        text: "找老板谈加薪",
        effects: { salary: +5000, warnings: +1 },
      },
      {
        text: "默默接受，积累经验准备跳",
        effects: { marketValue: +5 },
      },
      {
        text: "心态放平，反正都是打工",
        effects: { innovation: -2 },
      },
    ],
  },
  {
    id: 103,
    title: "🌍 远程工作面试",
    description: "你跳槽去面试，对方要求远程，你觉得：",
    options: [
      {
        text: "远程好，节省通勤时间",
        effects: { innovation: +3, tech: +2 },
      },
      {
        text: "还是现场好，能沟通更清楚",
        effects: { social: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 104,
    title: "🎯 OKR 不合理",
    description: "老板给你定的 OKR 根本不可能完成，你会：",
    requiredCompany: "bigtech",
    options: [
      {
        text: "和老板沟通，调整预期",
        effects: { social: +5, teamContribution: +3, warnings: 0 },
      },
      {
        text: "答应下来，完不成再说",
        effects: { warnings: +1 },
      },
      {
        text: "直接拒绝，不干了",
        effects: { marketValue: +5, warnings: +2 },
      },
    ],
  },
  {
    id: 105,
    title: "🚀 AI 裁员潮",
    description: "公司用AI裁了一批人，要求你们剩下的人承担更多工作，你会：",
    options: [
      {
        text: "接受，用AI提高效率搞定",
        effects: { aiAdaptability: +8, teamContribution: +3 },
      },
      {
        text: "拒绝，说工作量太大做不完",
        effects: { warnings: +2, social: -5 },
      },
      {
        text: "开始偷偷找下家",
        effects: { marketValue: +8, social: -3 },
      },
    ],
  },
  {
    id: 106,
    title: "📝 Code Review 文化",
    description: "现在团队 CR 越来越严，有人喜欢挑刺找存在感，你会：",
    options: [
      {
        text: "耐心讨论，对事不对人",
        effects: { social: +5, teamContribution: +5 },
      },
      {
        text: "懒得吵，他说什么改什么",
        effects: { social: +2, teamContribution: +2 },
      },
      {
        text: "直接反驳，坚持自己",
        effects: { tech: +3, social: -3, warnings: +1 },
      },
    ],
  },
  {
    id: 107,
    title: "💼 大厂 优化，",
    description:
      "公司又要优化了，传言说P7+ 成本高优先优化，你是 P7，你怎么办：",
    requiredCompany: "bigtech",
    options: [
      {
        text: "主动找老板谈，接受降薪保位置",
        effects: { salary: -10000, warnings: +1 },
      },
      {
        text: "开始准备简历，骑驴找马",
        effects: { marketValue: +8 },
      },
      {
        text: "无欲则刚，大不了走",
        effects: { innovation: +5, marketValue: +5 },
      },
    ],
  },
  {
    id: 108,
    title: "🎨 AI 绘画比赛",
    description: "公司举办 AI 绘画比赛，你作为设计师会参加吗：",
    requiredRole: "designer",
    options: [
      {
        text: "参加，用AI做初稿自己润色",
        effects: { aiAdaptability: +10, innovation: +8, marketValue: +5 },
      },
      {
        text: "不参加，坚持纯手工",
        effects: { innovation: +5, aiAdaptability: -5 },
      },
      {
        text: "当评委，不参赛",
        effects: { social: +5, teamContribution: +3 },
      },
    ],
  },
  {
    id: 109,
    title: "🔍 AI 自动化测试",
    description: "公司引入 AI 自动生成测试用例，你作为测试工程师怎么看：",
    requiredRole: "qa",
    options: [
      {
        text: "拥抱变化，专注复杂场景测试",
        effects: { aiAdaptability: +12, innovation: +8, marketValue: +8 },
      },
      {
        text: "担心失业，心里不安",
        effects: { warnings: +1, innovation: -3 },
      },
      {
        text: "转测试开发，写测试框架",
        effects: { tech: +10, marketValue: +10 },
      },
    ],
  },
  {
    id: 110,
    title: "🤖 AI 辅助数据分析",
    description: "现在AI能自动出分析报告，你作为数据分析师：",
    requiredRole: "data",
    options: [
      {
        text: "让AI做脏活，自己做业务解读",
        effects: { aiAdaptability: +10, innovation: +8, teamContribution: +8 },
      },
      {
        text: "学习Prompt，提升分析效率",
        effects: { aiAdaptability: +12, tech: +8 },
      },
      {
        text: "转业务分析，发挥人类优势",
        effects: { innovation: +10, marketValue: +10, social: +8 },
      },
    ],
  },
  {
    id: 111,
    title: "🎪 技术大会摆摊",
    description: "公司技术大会要各个组摆摊分享，你组派你去，你：",
    options: [
      {
        text: "精心准备，好好分享",
        effects: { marketValue: +5, innovation: +3, social: +3 },
      },
      {
        text: "随便做做，应付一下",
        effects: { marketValue: -2 },
      },
      {
        text: "推荐别人去，自己台下看",
        effects: { social: +2 },
      },
    ],
  },
  {
    id: 112,
    title: "🧠 大模型微调",
    description: "公司想基于开源大模型微调专属业务模型，需要人负责，你：",
    options: [
      {
        text: "主动承担，学习新技术",
        effects: { tech: +10, aiAdaptability: +12, innovation: +5 },
      },
      {
        text: "推荐算法同学负责",
        effects: { social: +3, teamContribution: +3 },
      },
      {
        text: "说这个没必要，成本太高",
        effects: { innovation: -3, tech: -2 },
      },
    ],
  },
  {
    id: 113,
    title: "🌴 年假",
    description: "你攒了好多年假没休，老板让你选什么时候休，你：",
    options: [
      {
        text: "一口气休长假，出去玩",
        effects: { innovation: +5 },
      },
      {
        text: "拆分分散休，错开高峰期",
        effects: { social: +3 },
      },
      {
        text: "不休了，攒着折现",
        effects: { salary: +5000, innovation: -2 },
      },
    ],
  },
  {
    id: 114,
    title: "💰 股票期权",
    description: "公司给了你期权，快要解禁了，你会：",
    options: [
      {
        text: "涨到目标就卖，落袋为安",
        effects: { salary: +50000 },
      },
      {
        text: "长期持有，相信公司",
        effects: { innovation: +3 },
      },
      {
        text: "现在跌了，继续持有等涨",
        effects: { innovation: +2 },
      },
    ],
  },
  {
    id: 115,
    title: "📚 写技术博客",
    description: "你坚持写技术博客一年了，有了一些粉丝，你会：",
    options: [
      {
        text: "继续坚持，输出优质内容",
        effects: { marketValue: +8, innovation: +5, tech: +3 },
      },
      {
        text: "太忙了，停更吧",
        effects: { tech: +2, marketValue: -5 },
      },
      {
        text: "开始接单做咨询",
        effects: { marketValue: +5, salary: +1000 },
      },
    ],
  },
  {
    id: 116,
    title: "🎭 会议室抢投影",
    description: "开会时间撞了，两个组都要投影，你会：",
    options: [
      {
        text: "商量错峰，轮流用",
        effects: { social: +5, teamContribution: +5 },
      },
      {
        text: "我先来，让他们等",
        effects: { social: -3, warnings: +1 },
      },
      {
        text: "不用投影，就这么讲",
        effects: { innovation: +2 },
      },
    ],
  },
  {
    id: 117,
    title: "🥚 彩蛋 - 偷偷摸鱼",
    description: "今天你写完需求，还有一小时下班，你发现没人理你，你会：",
    options: [
      {
        text: "提前走人，下班",
        effects: { innovation: +2 },
      },
      {
        text: "学习新技术",
        effects: { tech: +3, aiAdaptability: +3 },
      },
      {
        text: "水群聊天，和同事摸鱼",
        effects: { social: +3 },
      },
      {
        text: "整理技术文档，补注释",
        effects: { tech: +2, teamContribution: +2 },
      },
    ],
  },
  {
    id: 118,
    title: "🚪 九十点钟下班文化",
    description: "团队大家都走得晚，你干完活走不走：",
    options: [
      {
        text: "干完就走，到点下班",
        effects: { innovation: +3 },
      },
      {
        text: "入乡随俗，晚点走",
        effects: { social: +3 },
      },
      {
        text: "干完就走，但是周末随叫随到",
        effects: { teamContribution: +3, social: +2 },
      },
    ],
  },
  {
    id: 119,
    title: "🔒 密码安全",
    description: "你发现同事密码写在代码库里，你会：",
    options: [
      {
        text: "悄悄告诉他，让改掉",
        effects: { teamContribution: +5, social: +3 },
      },
      {
        text: "直接提issue，公开说",
        effects: { teamContribution: +8, social: -3 },
      },
      {
        text: "装作没看见",
        effects: { teamContribution: -5, warnings: +1 },
      },
    ],
  },
  {
    id: 120,
    title: "🎉 项目上线庆祝",
    description: "你负责的项目终于上线了，大家说要庆祝，你：",
    options: [
      {
        text: "一起聚餐庆祝",
        effects: { social: +8, teamContribution: +5 },
      },
      {
        text: "低调，不去了，早点回家",
        effects: { innovation: +2 },
      },
      {
        text: "你请客，感谢团队",
        effects: { social: +10, teamContribution: +8, salary: -500 },
      },
    ],
  },
];

export default events;
