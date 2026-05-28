"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

interface LessonLayoutProps {
  lessonId: string;
  title: string;
  children: ReactNode;
}

export default function LessonLayout({ lessonId, title, children }: LessonLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm transition-colors"
              >
                ← 返回课程列表
              </Link>
              <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
                {lessonId.toUpperCase()}
              </span>
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}

// 课程内容包装器
export function LessonContent({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {children}
    </div>
  );
}

// 章节包装器
export function Section({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-slate-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
      {children}
    </section>
  );
}

// 子章节
export function SubSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-emerald-400 mb-2">{title}</h3>
      {children}
    </div>
  );
}

// 代码块
export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 overflow-x-auto">
      {children}
    </pre>
  );
}

// 练习题
export function Exercise({
  title,
  description,
  initialCode,
  expectedOutput
}: {
  title: string;
  description: string;
  initialCode: string;
  expectedOutput?: string;
}) {
  return (
    <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
      <h4 className="text-md font-semibold text-amber-400 mb-3">{title}</h4>
      <p className="text-slate-300 text-sm mb-3">{description}</p>
      <CodeExercise initialCode={initialCode} expectedOutput={expectedOutput} />
    </div>
  );
}

// 可运行代码练习组件
function CodeExercise({
  initialCode,
  expectedOutput
}: {
  initialCode: string;
  expectedOutput?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<{ output: string; error?: string } | null>(null);
  const [showExpected, setShowExpected] = useState(false);

  const handleRun = () => {
    try {
      const logs: string[] = [];
      const customConsole = {
        log: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
        error: (...args: unknown[]) => logs.push("Error: " + args.map(String).join(" ")),
        warn: (...args: unknown[]) => logs.push("Warn: " + args.map(String).join(" ")),
      };

      const fn = new Function("console", code);
      fn(customConsole);

      setResult({ output: logs.length > 0 ? logs.join("\n") : "(无输出)" });
    } catch (e) {
      setResult({ output: "", error: (e as Error).message });
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-40 bg-slate-800 border border-slate-600 rounded p-3 text-cyan-300 text-sm font-mono resize-y"
      />
      <div className="flex gap-3">
        <button
          onClick={handleRun}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white font-medium transition-colors"
        >
          运行代码
        </button>
        {expectedOutput && (
          <button
            onClick={() => setShowExpected(!showExpected)}
            className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded text-white font-medium transition-colors"
          >
            {showExpected ? "隐藏答案" : "显示答案"}
          </button>
        )}
      </div>

      {result && (
        <div className={`rounded p-3 ${result.error ? "bg-red-900/50 border border-red-700" : "bg-slate-900 border border-slate-600"}`}>
          <p className="text-slate-400 text-xs mb-1">输出：</p>
          <pre className={`text-sm font-mono whitespace-pre-wrap ${result.error ? "text-red-400" : "text-emerald-400"}`}>
            {result.error ? `错误: ${result.error}` : result.output}
          </pre>
        </div>
      )}

      {showExpected && expectedOutput && (
        <div className="bg-emerald-900/30 border border-emerald-700 rounded p-3">
          <p className="text-emerald-400 text-xs mb-1">预期输出：</p>
          <pre className="text-emerald-300 text-sm font-mono whitespace-pre-wrap">{expectedOutput}</pre>
        </div>
      )}
    </div>
  );
}

// 导航
export function Navigation({
  prevLesson,
  nextLesson
}: {
  prevLesson?: { id: string; title: string };
  nextLesson?: { id: string; title: string };
}) {
  return (
    <div className="flex justify-between items-center pt-8 border-t border-slate-700">
      <div>
        {prevLesson ? (
          <Link
            href={`/lessons/${prevLesson.id}`}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 transition-colors"
          >
            ← {prevLesson.id.toUpperCase()} {prevLesson.title}
          </Link>
        ) : (
          <span className="text-slate-500">这是第一课</span>
        )}
      </div>
      <div>
        {nextLesson ? (
          <Link
            href={`/lessons/${nextLesson.id}`}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
          >
            {nextLesson.id.toUpperCase()} {nextLesson.title} →
          </Link>
        ) : (
          <span className="px-4 py-2 bg-slate-700 rounded text-slate-400">这是最后一课</span>
        )}
      </div>
    </div>
  );
}