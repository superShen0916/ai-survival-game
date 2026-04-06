'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { useGameStore } from '@/src/game/store';
import skillTree from '@/src/game/config/skillTree';
import type { SkillNode } from '@/src/game/types';

interface SkillTreePanelProps {
  gameState: {
    skillPoints: number;
    unlockedSkills: string[];
  };
}

export default function SkillTreePanel({ gameState }: SkillTreePanelProps) {
  const unlockSkill = useGameStore((state) => state.unlockSkill);

  const canUnlock = (skill: SkillNode) => {
    if (skill.unlocked) return false;
    if (gameState.unlockedSkills.includes(skill.id)) return false;
    return gameState.skillPoints >= skill.pointsRequired;
  };

  const isUnlocked = (skill: SkillNode) => {
    return gameState.unlockedSkills.includes(skill.id);
  };

  const categoryLabels: Record<string, string> = {
    tech: '技术',
    social: '社交',
    ai: 'AI协作',
    innovation: '创新',
  };

  const groupedSkills = skillTree.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, SkillNode[]>
  );

  if (gameState.skillPoints === 0 && gameState.unlockedSkills.length === 0) {
    return null;
  }

  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold mb-3 text-gray-800 border-b-2 border-purple-500 pb-2">
        ✨ 技能树 {gameState.skillPoints > 0 && `(${gameState.skillPoints} 剩余点)`}
      </h3>
      <div className="space-y-4">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category}>
            <div className="text-sm font-semibold text-purple-700 mb-2">
              {categoryLabels[category]}
            </div>
            <div className="grid grid-cols-1 gap-2">
              {skills.map((skill) => {
                const unlocked = isUnlocked(skill);
                return (
                  <button
                    key={skill.id}
                    disabled={!canUnlock(skill)}
                    onClick={() => unlockSkill(skill.id)}
                    className={cn(
                      'p-3 rounded-lg border text-left transition-all',
                      unlocked
                        ? 'bg-green-50 border-green-400'
                        : canUnlock(skill)
                          ? 'bg-purple-50 border-purple-400 hover:bg-purple-100 cursor-pointer'
                          : 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                      {skill.pointsRequired > 0 && (
                        <span className="ml-auto text-xs text-gray-500">
                          {skill.pointsRequired} 点
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{skill.description}</div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
