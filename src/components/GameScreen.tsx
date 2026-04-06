'use client';

import React from 'react';
import type { GameState, GameEvent } from '@/src/game/types';
import EventCard from './EventCard';
import ChoiceHistory from './ChoiceHistory';
import { useGameStore } from '@/src/game/store';

interface GameScreenProps {
  gameState: GameState;
  currentEvent: GameEvent | null;
}

export default function GameScreen({ gameState, currentEvent }: GameScreenProps) {
  const selectOption = useGameStore((state) => state.selectOption);

  if (!currentEvent) {
    return <div>Loading...</div>;
  }

  // Get options (could be function)
  const options =
    typeof currentEvent.options === 'function'
      ? currentEvent.options(gameState)
      : currentEvent.options;

  return (
    <div>
      <EventCard
        title={currentEvent.title}
        description={currentEvent.description}
        options={options}
        onSelect={selectOption}
      />

      {gameState.company && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
        🏢 {gameState.role} @ {gameState.company}
        </div>
      )}

      <ChoiceHistory history={gameState.choiceHistory} />
    </div>
  );
}
