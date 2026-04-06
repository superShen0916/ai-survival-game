import type { GameEvent } from "@/src/game/types";

/**
 * 使用 Claude API 生成新的游戏事件
 * 需要用户配置自己的 API Key
 */
export async function generateNewAIEvent(
  apiKey: string,
  gameState: {
    role: string;
    company?: string;
    rank: string;
    days: number;
  },
): Promise<GameEvent> {
  const prompt = `
你是一个文字冒险游戏"AI替代危机：职场生存战"的事件生成器。
请生成一个新的职场事件，符合当前游戏状态：
- 当前岗位: ${gameState.role}
- 当前公司: ${gameState.company || "未知"}
- 当前职级: ${gameState.rank}
- 已经生存天数: ${gameState.days}

请生成一个符合程序员职场实际情况的事件，包含：
1. 事件id（数字，随便给一个大于100的）
2. 事件标题（带emoji）
3. 事件描述
4. 四个选项，每个选项有对应的属性影响

要求：
- 事件要贴合当前岗位和职级
- 符合AI时代职场背景
- 选项效果要合理，有不同的选择策略
- 用 JSON 格式返回，格式如下：
{
  "id": number,
  "title": "string with emoji",
  "description": "string",
  "options": [
    {
      "text": "option text",
      "effects": {
        "tech": number,
        "social": number,
        ... (other effects as needed)
      }
    }
  ]
}
`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  const content = data.content[0].text;

  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to parse AI response");
  }

  const event = JSON.parse(jsonMatch[0]);
  return event;
}
