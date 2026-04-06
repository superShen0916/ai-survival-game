'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { EventOption } from '@/src/game/types';
import OptionButton from './OptionButton';

interface EventCardProps {
  title: string;
  description: string;
  options: EventOption[];
  onSelect: (option: EventOption) => void;
}

export default function EventCard({
  title,
  description,
  options,
  onSelect,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-50 border-l-4 border-purple-500 rounded-lg p-6 mb-6"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="grid gap-3">
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onSelect={() => onSelect(option)}
          />
        ))}
      </div>
    </motion.div>
  );
}
