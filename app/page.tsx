'use client';

import React, { useState, useEffect, useCallback } from 'react';
import GameContainer from '@/src/components/GameContainer';
import StartScreen from '@/src/components/StartScreen';
import { useGameStore } from '@/src/game/store';
import type { Difficulty } from '@/src/game/types';

export default function Home() {
  const initGame = useGameStore((state) => state.initGame);
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStartGame = useCallback((params: {
    roleKey: string;
    companyKey?: string;
    difficulty: Difficulty;
  }) => {
    initGame(params);
    setShowStartScreen(false);
  }, [initGame]);

  // Check URL params for shared game
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    const role = url.searchParams.get('role');
    const company = url.searchParams.get('company');
    const diff = url.searchParams.get('diff') as Difficulty | null;

    if (role) {
      setTimeout(() => {
        handleStartGame({
          roleKey: role,
          companyKey: company || undefined,
          difficulty: diff || 'normal',
        });
      }, 0);
    }
  }, [handleStartGame]);

  const handleRestart = useCallback(() => {
    setShowStartScreen(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <header className="text-center mb-8 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
          🧟 AI替代危机：职场生存战 🧟
        </h1>
        <p className="text-lg opacity-90">在AI浪潮中，你能坚持多久不被优化？</p>
      </header>

      {showStartScreen ? (
        <StartScreen onStart={handleStartGame} />
      ) : (
        <GameContainer onRestart={handleRestart} />
      )}

      <footer className="mt-8 text-center text-white opacity-75 text-sm">
        <p>
          这是一个模拟AI时代职场生存的文字冒险游戏，纯属娱乐，仅供参考。
        </p>
      </footer>
    </div>
  );
}
