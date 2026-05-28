"use client";

import Link from "next/link";

export default function LessonTemplate({
  lessonId,
  title,
  description
}: {
  lessonId: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚧 课程开发中</h2>
            <p className="text-slate-300 mb-6">{description}</p>
            <p className="text-slate-500 text-sm">
              这个课程正在准备中，敬请期待...
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
              >
                返回课程列表
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}