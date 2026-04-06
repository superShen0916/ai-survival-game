'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/src/game/store';
import Sidebar from './Sidebar';
import GameScreen from './GameScreen';
import EndingScreen from './EndingScreen';
import AchievementToast from './AchievementToast';

interface GameContainerProps {
  onRestart: () => void;
}

export default function GameContainer({ onRestart }: GameContainerProps) {
  const gameState = useGameStore((state) => state.gameState);
  const currentEvent = useGameStore((state) => state.currentEvent);
  const newUnlockedAchievements = useGameStore((state) => state.newUnlockedAchievements);
  const unlockedAchievements = useGameStore((state) => state.unlockedAchievements);
  const markAchievementsSeen = useGameStore((state) => state.markAchievementsSeen);

  if (!gameState) {
    return null;
  }

  const recentUnlocked = newUnlockedAchievements
    .map((id) => unlockedAchievements.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-5 w-full">
      <Sidebar gameState={gameState} unlockedAchievements={unlockedAchievements} />

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl w-full">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => useGameStore.getState().toggleSound()}
            className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50 transition-colors"
          >
            🔊 {gameState.soundEnabled ? '开' : '关'}
          </button>
        </div>
        <AnimatePresence mode="wait">
          {gameState.isGameOver ? (
            <motion.div
              key="ending"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EndingScreen gameState={gameState} onRestart={onRestart} />
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GameScreen
                gameState={gameState}
                currentEvent={currentEvent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {recentUnlocked.length > 0 &&
          recentUnlocked.map((ach) => (
            <AchievementToast
              key={ach?.id}
              achievement={ach!}
              onComplete={markAchievementsSeen}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
