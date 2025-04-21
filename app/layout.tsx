export const metadata = {
  title: 'AIORGHub - AI 工具大全',
  description: '探索最新最实用的 AI 工具导航平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
