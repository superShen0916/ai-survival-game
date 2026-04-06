'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Achievement } from '@/src/game/types';

interface AchievementToastProps {
  achievement: Achievement;
  onComplete: () => void;
}

export default function AchievementToast({
  achievement,
  onComplete,
}: AchievementToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Play sound
  useEffect(() => {
    try {
      const audio = new Audio(
        'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3'
      );
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: '-50%' }}
      animate={{ opacity: 1, scale: 1.1, x: '-50%' }}
      exit={{ opacity: 0, scale: 1, x: '-50%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/3 left-1/2 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-5 rounded-xl shadow-2xl"
    >
      <div className="text-center">
        <div className="text-2xl font-bold mb-1">🏆 成就解锁</div>
        <div className="text-lg">{achievement.label}</div>
      </div>
    </motion.div>
  );
}
