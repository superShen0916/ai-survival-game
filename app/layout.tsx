import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-survival-game.vercel.app'),
  title: 'AI替代危机：职场生存战',
  description: '在AI浪潮中，你能坚持多久不被替代？一款文字冒险游戏，模拟程序员职场生存。',
  themeColor: '#7c3aed',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'AI替代危机：职场生存战',
    description: '在AI浪潮中，你能坚持多久不被替代？来测一测你的职场生存力！',
    type: 'website',
    images: ['/og-image.png'],
    siteName: 'AI替代危机：职场生存战',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI替代危机：职场生存战',
    description: '在AI浪潮中，你能坚持多久不被替代？',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full bg-gradient-to-br from-purple-600 to-indigo-700 font-sans">
        {children}
      </body>
    </html>
  );
}
