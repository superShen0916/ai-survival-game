'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import type { EventOption } from '@/src/game/types';
import { useGameStore } from '@/src/game/store';

interface OptionButtonProps {
  option: EventOption;
  onSelect: () => void;
}

export default function OptionButton({ option, onSelect }: OptionButtonProps) {
  const gameState = useGameStore((state) => state.gameState);
  const playSound = () => {
    if (gameState?.soundEnabled && typeof window !== 'undefined') {
      try {
        const audio = new Audio(
          'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'
        );
        audio.volume = 0.2;
        audio.play().catch(() => {});
      } catch (e) {
        // ignore
      }
    }
  };

  const handleClick = () => {
    playSound();
    onSelect();
  };

  // Show effects as tooltip hints
  const hasEffects = Object.values(option.effects).some((v) => v !== 0);

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        'w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg transition-all hover:border-purple-500 hover:bg-purple-50',
        'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
      )}
    >
      <div className="text-base text-gray-800 font-medium">{option.text}</div>
      {hasEffects && (
        <div className="mt-2 flex flex-wrap gap-1">
          {Object.entries(option.effects).map(([key, value]) =>
            value !== 0 ? (
              <span
                key={key}
                className={cn(
                  'text-xs px-2 py-1 rounded',
                  value > 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                )}
              >
                {formatEffectKey(key)} {value > 0 ? '+' : ''}
                {value}
              </span>
            ) : null
          )}
        </div>
      )}
    </motion.button>
  );
}

function formatEffectKey(key: string): string {
  const labels: Record<string, string> = {
    tech: '技术',
    social: '社交',
    innovation: '创新',
    aiAdaptability: 'AI适应',
    techMatch: '技术匹配',
    teamContribution: '团队贡献',
    marketValue: '市场价值',
    health: '健康',
    family: '家庭',
    salary: '薪资',
    warnings: '警告',
    skillPoints: '技能点',
  };
  return labels[key] || key;
}
