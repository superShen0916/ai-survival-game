'use client';

import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import type { GameState } from '@/src/game/types';
import { useGameStore } from '@/src/game/store';
import { difficultyLabels } from '@/src/game/config/difficulty';

interface EndingScreenProps {
  gameState: GameState;
  onRestart: () => void;
}

export default function EndingScreen({ gameState, onRestart }: EndingScreenProps) {
  const unlockAchievement = useGameStore((state) => state.unlockAchievement);
  const [generating, setGenerating] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  const ending = gameState.ending;
  const isSuccess = ending?.isSuccess ?? false;
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?role=${gameState.roleKey}${gameState.companyKey ? `&company=${gameState.companyKey}` : ''}&diff=${gameState.difficulty}`
    : '';

  // Generate QR code
  useEffect(() => {
    if (shareUrl && qrCanvasRef.current) {
      QRCode.toCanvas(qrCanvasRef.current, shareUrl, {
        width: 150,
        color: {
          dark: '#ffffff',
          light: '#00000000',
        },
      });
      QRCode.toDataURL(shareUrl, {
        width: 200,
        color: {
          dark: '#ffffff',
          light: '#00000000',
        },
      }).then(setQrCodeUrl);
    }
  }, [shareUrl]);

  // Unlock share achievement when user generates image
  const handleShareAchievement = () => {
    unlockAchievement('ach-viral');
  };

  const generateShareImage = async () => {
    if (!shareCardRef.current || !qrCodeUrl) return;
    setGenerating(true);

    try {
      const canvas = await html2canvas(shareCardRef.current, {
        backgroundColor: '#667eea',
        scale: 2,
      });
      const dataUrl = canvas.toDataURL('image/png');
      setGeneratedUrl(dataUrl);
      handleShareAchievement();

      // Download
      const link = document.createElement('a');
      link.download = `ai-survival-${gameState.days}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error('Failed to generate image', e);
    } finally {
      setGenerating(false);
    }
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('分享链接已复制到剪贴板！');
      handleShareAchievement();
    });
  };

  const shareToWeibo = () => {
    const text = encodeURIComponent(`我在《AI替代危机：职场生存战》中活到了${gameState.days}天，结局是【${ending?.title}】。来挑战一下你能活多久？${shareUrl}`);
    window.open(`https://weibo.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${text}`, '_blank');
    handleShareAchievement();
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`我在《AI替代危机：职场生存战》中活到了${gameState.days}天，结局是【${ending?.title}】。来挑战一下你能活多久？`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    handleShareAchievement();
  };

  return (
    <div className="text-center">
      <div
        className={cn(
          'p-8 rounded-xl mb-6',
          isSuccess
            ? 'bg-green-50 border-2 border-green-400'
            : 'bg-red-50 border-2 border-red-400'
        )}
      >
        <h2
          className={cn(
            'text-3xl font-bold mb-4',
            isSuccess ? 'text-green-700' : 'text-red-700'
          )}
        >
          {ending?.title || '游戏结束'}
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          {ending?.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm">
          <StatCard label="存活天数" value={`${gameState.days} 天`} />
          <StatCard label="最终职级" value={gameState.rank} />
          <StatCard label="最终月薪" value={`${Math.round(gameState.salary / 1000)}k`} />
          <StatCard label="初始岗位" value={gameState.role} />
          {gameState.company && (
            <StatCard label="公司" value={gameState.company} />
          )}
          <StatCard label="难度" value={difficultyLabels[gameState.difficulty]} />
        </div>
      </div>

      {/* Hidden share card for html2canvas */}
      <div className="hidden">
        <div
          ref={shareCardRef}
          className="w-[800px] h-[1200px] bg-gradient-to-br from-purple-600 to-indigo-700 p-12 text-white"
        >
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">🧟 AI替代危机：职场生存战 🧟</h1>
            <p className="text-xl opacity-90">我的职场生存成绩单</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
            <h2 className="text-4xl font-bold mb-6 text-center">{ending?.title}</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {ending?.description}
            </p>
            <div className="grid grid-cols-2 gap-6 text-xl">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="opacity-80 text-sm">存活天数</div>
                <div className="font-bold text-3xl">{gameState.days}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="opacity-80 text-sm">最终职级</div>
                <div className="font-bold text-3xl">{gameState.rank}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="opacity-80 text-sm">最终月薪</div>
                <div className="font-bold text-3xl">{Math.round(gameState.salary / 1000)}k</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="opacity-80 text-sm">岗位</div>
                <div className="font-bold text-3xl">{gameState.role}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold mb-4">
              在AI浪潮中，你能坚持多久不被优化？
            </p>
            {qrCodeUrl && (
              <div className="flex justify-center mt-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <img src={qrCodeUrl} alt="QR Code" width="200" height="200" />
                  <p className="text-sm mt-2 opacity-80">扫码立即挑战</p>
                </div>
              </div>
            )}
            <p className="text-lg opacity-90 mt-4">
              #AI替代危机 #职场生存游戏
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateShareImage}
          disabled={generating}
          className="px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 transition-all"
        >
          {generating ? '生成中...' : '🖼️ 保存分享图'}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyShareLink}
          className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          🔗 复制链接
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={shareToWeibo}
          className="px-5 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          🌊 分享到微博
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={shareToTwitter}
          className="px-5 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          𝕏 分享到X
        </motion.button>
      </div>

      <div className="mt-4">
        <canvas ref={qrCanvasRef} className="hidden" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          🔁 再来一局
        </motion.button>
      </div>

      {generatedUrl && (
        <div className="mt-6">
          <p className="text-green-700 font-medium mb-2">
            ✓ 图片已生成并下载，可以分享到朋友圈啦！
          </p>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  );
}
