import type { GameEvent } from "../types";
import events from "../data/events";

// 根据游戏状态筛选可用事件
export function getAvailableEvents(gameState: {
  roleKey: string;
  rank: string;
  companyKey?: string;
  days: number;
}): GameEvent[] {
  return events.filter((event) => {
    if (event.requiredRole && event.requiredRole !== gameState.roleKey)
      return false;
    if (
      event.requiredRank &&
      !isRankReached(gameState.rank, event.requiredRank)
    )
      return false;
    if (event.requiredCompany && event.requiredCompany !== gameState.companyKey)
      return false;
    if (event.minDays && gameState.days < event.minDays) return false;
    return true;
  });
}

// 判断职级是否达标
function isRankReached(currentRank: string, requiredRank: string): boolean {
  const rankOrder = ["P5", "P6", "P7", "M1"];
  const currentIndex = rankOrder.indexOf(currentRank);
  const requiredIndex = rankOrder.indexOf(requiredRank);
  return currentIndex >= requiredIndex;
}

// 随机选择一个事件
export function selectRandomEvent(gameState: {
  roleKey: string;
  rank: string;
  companyKey?: string;
  days: number;
}): GameEvent {
  const available = getAvailableEvents(gameState);

  // 如果没有可用事件（应该不会发生），返回第一个事件
  if (available.length === 0) {
    return events[0];
  }

  // 加权随机：优先选择未在最近使用过的（如果我们记录了历史）
  // 简单起见，这里完全随机
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}

// 获取事件通过ID
export function getEventById(id: number): GameEvent | undefined {
  return events.find((e) => e.id === id);
}

// 获取所有事件总数
export function getTotalEventCount(): number {
  return events.length;
}

export default {
  selectRandomEvent,
  getAvailableEvents,
  getEventById,
  getTotalEventCount,
};
