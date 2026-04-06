'use client';

import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { roleConfigs } from '@/src/game/config/roles';
import { companyConfigs } from '@/src/game/config/companies';
import { difficultyLabels, difficultyDescriptions } from '@/src/game/config/difficulty';
import type { Difficulty } from '@/src/game/types';

interface StartScreenProps {
  onStart: (params: { roleKey: string; companyKey?: string; difficulty: Difficulty }) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('normal');
  const [step, setStep] = useState<'role' | 'company' | 'difficulty'>('role');

  const handleRoleSelect = (roleKey: string) => {
    setSelectedRole(roleKey);
    setStep('company');
  };

  const handleCompanySkip = () => {
    setStep('difficulty');
  };

  const handleCompanySelect = (companyKey: string) => {
    setSelectedCompany(companyKey);
    setStep('difficulty');
  };

  const handleStart = () => {
    onStart({
      roleKey: selectedRole,
      companyKey: selectedCompany || undefined,
      difficulty: selectedDifficulty,
    });
  };

  const handleBack = () => {
    if (step === 'company') {
      setStep('role');
    } else if (step === 'difficulty') {
      setStep('company');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
      {step === 'role' && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">👨‍💼 选择你的初始岗位</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(roleConfigs).map((role) => (
              <button
                key={role.key}
                onClick={() => handleRoleSelect(role.key)}
                className={cn(
                  'p-5 border-2 rounded-xl text-left transition-all hover:border-purple-500 hover:bg-purple-50',
                  selectedRole === role.key
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white'
                )}
              >
                <div className="text-xl font-semibold mb-1">{role.name}</div>
                <div className="text-sm text-gray-600">{role.description}</div>
                <div className="mt-2 text-xs text-gray-500">
                  薪资: {Math.round(role.salary / 1000)}k | 技术: {role.techSkill} | 社交: {role.socialSkill} | 创新: {role.innovationSkill}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 'company' && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-80">🏢 选择入职公司</h2>
          <p className="text-gray-600 mb-4">
            不同类型的公司AI接受度和薪资待遇不同，可选
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Object.values(companyConfigs).map((company) => (
              <button
                key={company.key}
                onClick={() => handleCompanySelect(company.key)}
                className={cn(
                  'p-4 border-2 rounded-xl text-left transition-all hover:border-purple-500 hover:bg-purple-50',
                  selectedCompany === company.key
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white'
                )}
              >
                <div className="text-lg font-semibold mb-1">{company.name}</div>
                <div className="text-sm text-gray-600 mb-2">{company.description}</div>
                <div className="text-xs text-gray-500">
                  AI速度: x{company.aiAdoptionRate} | 薪资倍率: x{company.baseSalaryMultiplier}
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              返回
            </button>
            <button
              onClick={handleCompanySkip}
              className="px-6 py-3 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors ml-auto"
            >
              跳过公司选择
            </button>
          </div>
        </>
      )}

      {step === 'difficulty' && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">⚔️ 选择难度</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {(Object.keys(difficultyLabels) as Difficulty[]).map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={cn(
                  'p-5 border-2 rounded-xl text-left transition-all hover:border-purple-500 hover:bg-purple-50',
                  selectedDifficulty === difficulty
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 bg-white'
                )}
              >
                <div className="text-xl font-semibold mb-1">
                  {difficultyLabels[difficulty]}
                </div>
                <div className="text-sm text-gray-600">
                  {difficultyDescriptions[difficulty]}
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              返回
            </button>
            <button
              onClick={handleStart}
              disabled={!selectedRole}
              className="px-8 py-3 ml-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              开始游戏
            </button>
          </div>
        </>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2 text-gray-700">📖 游戏说明</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 目标：在AI浪潮中尽可能长时间生存，提升职级和薪资</li>
          <li>• 每一次选择都会影响你的各项属性和隐藏分</li>
          <li>• 每个季度AI都会进步，你的属性会自动衰减</li>
          <li>• 综合评分越低，被替代的风险越高</li>
          <li>• 合理分配属性，提升综合竞争力才能生存更久</li>
        </ul>
      </div>
    </div>
  );
}
