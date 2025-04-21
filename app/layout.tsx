import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Layout from './components/Layout';

export const metadata: Metadata = {
  title: 'CTKCLIP',
  description: '혁신적인 화장품 개발 및 생산 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 