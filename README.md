# 🧟 programmer.skill / AI替代危机：职场生存战

---

"你们搞大模型的说大模型要取代程序员，我信了。现在Claude Code装了，Copilot开了，API Key充了，你告诉我前端都AI生成了，后端都AI写需求分析了，测试都AI跑用例了，那我们什么时候被完全取代？"

"I会一直盯着你，看你能坚持多少天不被优化！"

<p>

<span>License: <img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT"></span>
<span>Next.js: <img src="https://img.shields.io/badge/Next.js-16-blue" alt="Next.js 16"></span>
<span>TypeScript: <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript 5"></span>
<span>React: <img src="https://img.shields.io/badge/React-19-cyan" alt="React 19"></span>
<span>🎮 Game: <img src="https://img.shields.io/badge/Text-Adventure-purple" alt="Text Adventure"></span>

</p>

本项目纯属娱乐，请勿带入现实

> AI浪潮来了，卷还是不卷？996还是准点走？拥抱AI还是拒绝AI？工作重要还是家庭重要？来玩一局，看看你能活多久。

---

## 🔫 游戏简介

AI正在吞噬职场，裁员潮一波接一波。作为一名程序员，你每天都要面对各种选择：

- 老板让你996赶项目，加还是不加？
- 新技术出来了，学还是不学？
- 机会给你管理岗，升还是不升？
- 天天加班，身体和家庭还要不要？

每一个选择都会改变你的属性。**卷到极致健康崩了也会GG，躺平也能有躺平的结局。** 看看你最终是什么结局？

[🎮 立即在线玩](https://ai-survival-game.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/superShen0916/ai-survival-game)

---

## ✨ 特色功能

- 🎮 **120+ 精心设计的职场事件** - 从入职到退休，全旅程覆盖，每件事都像发生在你身边
- 🏁 **21+ 不同结局** - 从被优化到技术专家，从自由职业年入百万到提前退休，人生有多种可能
- 👔 **6种职业选择** - 前端开发 / 后端开发 / 产品经理 / UI设计师 / 测试工程师 / 数据分析师
- 🏢 **三种公司类型** - 互联网大厂 / 创业公司 / 传统企业，不同节奏不同体验
- 🌳 **完整技能树系统** - 晋升获得技能点，技术/AI/社交/创新四个方向随便点
- ⚖️ **工作生活平衡机制** - 新增 ❤️ 身体健康 / 👨‍👩‍👧 家庭关系，卷太狠真的会原地去世
- 🏆 **18+ 成就系统** - 各种隐藏成就等你解锁
- 📸 **一键生成分享图片** - 自带二维码，生成完直接保存发朋友圈
- 🔗 **分享链接** - 开局配置直接encode在URL里，发给朋友直接开玩
- 📱 **全响应式设计** - 手机PC都能玩，摸鱼时候随时开一把
- ⚡ **纯静态零后端** - Next.js静态导出，Vercel免费托管，打开就玩不用装

---

## 📊 属性说明

| 属性          | 说明                     |
| ------------- | ------------------------ |
| 🧠 技术能力   | 硬实力，越高越好         |
| 👥 人际关系   | 职场人脉，帮助你晋升     |
| 💡 创新能力   | 拥抱变化，应对AI冲击     |
| 📊 技术匹配度 | 技能和当前岗位的匹配程度 |
| 🤝 团队贡献   | 你对团队的价值           |
| 🤖 AI适应力   | 你会用AI吗？越高越安全   |
| 🌐 市场竞争力 | 外面好不好找工作         |
| ❤️ 身体健康   | 天天加班会掉，低于20GG   |
| 👨‍👩‍👧 家庭关系   | 陪家人太少会掉，低于20GG |

---

## 🎯 一局多长时间？

现在每回合走**一周**，一般走到结局也就十几回合，三五分钟一局，摸鱼的时候玩刚好。

---

## 🚀 本地运行

```bash
# 克隆项目
git clone https://github.com/superShen0916/ai-survival-game.git
cd ai-survival-game

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态版本
npm run build

# 输出在 out/ 目录，直接部署
```

---

## 🤝 欢迎共建

想要加新事件？欢迎提PR！

事件格式很简单：

```typescript
{
  id: 123,
  title: "🔖 事件标题",
  description: "事件描述",
  options: [
    {
      text: "选项文字",
      effects: {
        teamContribution: +5,
        health: -3,
        // ... 各种效果
      }
    },
    // 四个选项
  ],
  // 可选：只特定职业显示 requiredRole: "frontend"
}
```

添加完发PR就好！

---

## 🔧 技术栈

- Next.js 16 + TypeScript 严格模式
- Tailwind CSS v4
- Zustand 状态管理
- Framer Motion 动画
- html2canvas 生成分享图
- qrcode 生成二维码
- 完全静态导出，零成本托管

---

## 📸 截图示例

生成的分享图长这样：

![分享示例](./public/screenshot-example.png)

_带二维码，扫完直接开玩_

---

## 📝 License

MIT

---

> 这只是一个游戏，纯属娱乐，不代表任何真实立场。  
> 人生有很多种活法，不管怎么选，开心最重要。

#AI替代危机 #职场 #文字冒险游戏 #前端项目 #Next.js #AI
