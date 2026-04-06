'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import type { GameState, Achievement } from '@/src/game/types';
import { calculateScoreResult } from '@/src/game/mechanics/scoring';
import SkillTreePanel from './SkillTreePanel';

interface SidebarProps {
  gameState: GameState;
  unlockedAchievements: Achievement[];
}

export default function Sidebar({ gameState, unlockedAchievements }: SidebarProps) {
  const { riskLevel } = calculateScoreResult(gameState);

  const riskColor: Record<string, string> = {
    low: 'bg-green-100 text-green-700 border-green-300',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    high: 'bg-orange-100 text-orange-700 border-orange-300',
    critical: 'bg-red-100 text-red-700 border-red-300',
  };

  const riskText: Record<string, string> = {
    low: '安全',
    medium: '注意',
    high: '危险',
    critical: '濒危',
  };

  return (
    <aside className="bg-white rounded-2xl p-5 shadow-2xl h-fit lg:sticky lg:top-5">
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-3 text-gray-800 border-b-2 border-purple-500 pb-2">
          📊 游戏进度
        </h3>
        <div className="bg-purple-50 p-3 rounded-lg text-center mb-3">
          <span className="text-lg font-bold text-purple-700">
            📅 {gameState.days} 天
          </span>
          <span className="ml-4 text-lg font-bold text-purple-700">
            Q{gameState.quarter} Y{gameState.year}
          </span>
        </div>
        <div
          className={cn(
            'px-3 py-2 rounded-lg border text-center font-semibold',
            riskColor[riskLevel]
          )}
        >
          风险等级: {riskText[riskLevel]}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-xl font-bold mb-3 text-gray-800 border-b-2 border-purple-500 pb-2">
          🎭 角色状态
        </h3>
        <div className="grid grid-cols-1 gap-2">
          <StatItem label="👔 职级" value={gameState.rank} highlighted />
          <StatItem
            label="💰 月薪"
            value={`${Math.round(gameState.salary / 1000)}k`}
            highlighted
          />
          <StatItem label="🧠 技术能力" value={gameState.techSkill} />
          <StatItem label="👥 人际关系" value={gameState.socialSkill} />
          <StatItem label="💡 创新能力" value={gameState.innovationSkill} />
          <StatItem label="📊 技术匹配度" value={gameState.hiddenScores.techMatch} />
          <StatItem label="🤝 团队贡献" value={gameState.hiddenScores.teamContribution} />
          <StatItem label="🤖 AI适应力" value={gameState.hiddenScores.aiAdaptability} />
          <StatItem label="🌐 市场竞争力" value={gameState.hiddenScores.marketValue} />
          <StatItem label="❤️ 身体健康" value={gameState.hiddenScores.health} />
          <StatItem label="👨‍👩‍👧 家庭关系" value={gameState.hiddenScores.family} />
          <StatItem label="⚠️ 警告次数" value={gameState.warnings} />
          {gameState.skillPoints > 0 && (
            <StatItem label="✨ 技能点" value={gameState.skillPoints} highlighted />
          )}
        </div>

        <SkillTreePanel gameState={gameState} />
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 border-b-2 border-purple-500 pb-2">
          🏆 成就 ({unlockedAchievements.filter((a) => a.unlocked).length}/
          {unlockedAchievements.length})
        </h3>
        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
          {unlockedAchievements.map((achievement) =>
            achievement.unlocked ? (
              <div
                key={achievement.id}
                className="bg-green-50 border-2 border-green-400 rounded-lg p-2 text-center"
                title={achievement.description}
              >
                <div className="text-xs text-green-700 font-medium">
                  {achievement.label}
                </div>
              </div>
            ) : null
          )}
          {unlockedAchievements.filter((a) => a.unlocked).length === 0 && (
            <div className="col-span-2 text-center text-gray-500 py-4 text-sm">
              解锁成就后会显示在这里
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

function StatItem({
  label,
  value,
  highlighted = false,
}: {
  label: string;
  value: string | number;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-lg px-3 py-2 flex justify-between items-center',
        highlighted ? 'bg-purple-100' : 'bg-gray-50'
      )}
    >
      <span className="text-sm text-gray-600">{label}</span>
      <span
        className={cn(
          'text-lg font-bold',
          highlighted ? 'text-purple-700' : 'text-gray-800'
        )}
      >
        {value}
      </span>
    </div>
  );
}
