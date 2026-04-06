'use client';

import React, { useState } from 'react';
import type { ChoiceRecord } from '@/src/game/types';
import { cn } from '@/src/lib/utils';

interface ChoiceHistoryProps {
  history: ChoiceRecord[];
}

export default function ChoiceHistory({ history }: ChoiceHistoryProps) {
  const [expanded, setExpanded] = useState(false);

  if (history.length === 0) return null;

  return (
    <div className="mt-6 border-t pt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-center justify-between text-lg font-semibold text-gray-800"
      >
        <span>📜 选择历史 ({history.length})</span>
        <span>{expanded ? '▼' : '▶'}</span>
      </button>
      {expanded && (
        <div className="mt-3 max-h-80 overflow-y-auto space-y-2">
          {history
            .slice()
            .reverse()
            .map((record, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 text-sm"
              >
                <div className="font-medium text-gray-800 mb-1">
                  第 {record.day} 天 - {record.eventTitle}
                </div>
                <div className="text-gray-600">
                  选择: {record.choiceText}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
