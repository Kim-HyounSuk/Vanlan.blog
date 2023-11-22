import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vanlan.blog',
  description: 'Vanlan.blog - 웹 개발(프론트엔드, 백엔드)를 배우며 일어난 일들을 기록합니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
