import './globals.css';
import React from 'react';

export const metadata = {
  title: 'AIORG Hub - AI 工具导航',
  description: '发现并使用最强的 AI 工具合集',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}