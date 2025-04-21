export default function Home() {
  const tools = [
    { name: "ChatGPT", description: "OpenAI 的聊天机器人", url: "https://chat.openai.com" },
    { name: "Midjourney", description: "AI 绘图工具", url: "https://www.midjourney.com" },
    { name: "Notion AI", description: "笔记与文档写作助手", url: "https://www.notion.so/product/ai" },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">AIOrgHub · 人气 AI 工具导航</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <a key={tool.name} href={tool.url} target="_blank" className="p-4 rounded-2xl shadow-xl bg-gray-800 hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-sm text-gray-400">{tool.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}