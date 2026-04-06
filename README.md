# 🧟 AI替代危机：职场生存战

```
boss.skill
"你们搞AI的简直是战神，你们解放了前端兄弟，还要解放后端兄弟，测试兄弟，产品兄弟，设计兄弟，最后解放manager，解放老板，解放全人类"

"我会一直盯着你，看你什么时候被优化！"
```

> 在AI浪潮中，你能坚持多久不被优化？

一款文字冒险游戏，模拟AI时代程序员职场生存。你会怎么选择？

- 996加班还是准点走人？
- 拥抱AI还是拒绝AI？
- 卷职级还是卷生活？
- 纯静态零后端，打开就能玩，玩完就能晒

[![Play Online](https://img.shields.io/badge/🎮_在线玩-点击开始-purple?style=for-the-badge)](https://ai-survival-game.vercel.app)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-survival-game)

---

## 📖 游戏简介

AI正在吞噬职场，裁员潮一波接一波。作为一名程序员，你每天都要面对各种选择。每一个选择都会影响你的属性值，看看你能走到哪一个结局？

AI正在吞噬职场，裁员潮一波接一波。作为一名程序员，你每天都要面对各种选择：

- 996加班还是准时下班？
- 拥抱AI还是拒绝AI？
- 卷技术还是卷管理？
- 工作重要还是家庭重要？

每一个选择都会影响你的属性值，看看你能走到哪一个结局？

## ✨ 特色功能

- 🎮 **120+ 精心设计的职场事件** - 涵盖从入职到退休的方方面面，贴近真实职场
- 🏁 **19+ 不同结局** - 从被优化到技术专家，从创业成功到提前退休，多种可能性
- 👔 **6种职业** - 前端/后端/产品/设计/测试/数据分析师
- 🏢 **3种公司类型** - 互联网大厂/创业公司/传统企业，不同节奏不同体验
- 🌳 **完整技能树系统** - 技能点自由分配，走你自己的路
- ⚖️ **工作生活平衡** - 新增健康和家庭属性，卷太狠身体会垮
- 🏆 **15+ 成就系统** - 挑战解锁各种成就
- 📸 **一键生成分享图** - 带二维码，朋友圈晒你的结局
- 🔗 **分享链接** - 通过URL直接分享你的开局配置
- 📱 **全响应式** - 手机电脑都能玩，随时开一把
- ⚡ **纯静态零后端** - Next.js静态导出，Vercel免费托管

## 🎯 核心玩法

1. **选择你的职业** - 不同职业开局属性不同
2. **选择公司类型** - 大厂薪资高但是AI替代压力大
3. **选择难度** - 简单/普通/困难/地狱
4. **每回合走一周** - 每次选择推进一周，推进更快
5. **应对随机事件** - 每个选项都有不同后果
6. **解锁技能** - 晋升获得技能点，强化自己
7. **坚持到最后** - 看看你是什么结局

## 📊 属性说明

| 属性          | 说明                   |
| ------------- | ---------------------- |
| 🧠 技术能力   | 硬实力，越高越好       |
| 👥 人际关系   | 职场人脉，帮助晋升     |
| 💡 创新能力   | 拥抱变化，应对AI       |
| 📊 技术匹配度 | 技能和当前岗位匹配度   |
| 🤝 团队贡献   | 你对团队的价值         |
| 🤖 AI适应力   | 你会用AI吗？越高越安全 |
| 🌐 市场竞争力 | 外面好不好找工作       |
| ❤️ 身体健康   | 拼命加班会掉，太低GG   |
| 👨‍👩‍👧 家庭关系   | 陪家人太少会掉，太低GG |

## 🚀 本地运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态版本
npm run build

# 输出在 out/ 目录，直接部署
```

## 🌍 一键部署

点击下面按钮一键部署到Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-survival-game)

## 🎨 截图

![游戏截图](https://github.com/yourusername/ai-survival-game/raw/main/public/screenshot.png)

_生成带二维码的分享图片，直接保存发朋友圈_

## 🤝 贡献

欢迎贡献新的事件！

1. Fork 这个项目
2. 在 `src/game/data/events.ts` 添加你的事件
3. 提 PR
4. 我会合并进去

事件格式：

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
    // ... 四个选项
  ],
  // 可选：只特定职业显示 requiredRole: "frontend"
}
```

## 🔧 技术栈

- Next.js 16 + TypeScript
- Tailwind CSS v4
- Zustand 状态管理
- Framer Motion 动画
- html2canvas 生成分享图
- qrcode 生成二维码
- 完全静态导出，零成本托管

## 📝 License

MIT

---

> 这只是一个游戏，纯属娱乐，不代表任何真实立场。人生有很多种活法，不管怎么选，开心最重要。

#AI替代危机 #职场 #文字游戏 #前端项目 #Nextjs
