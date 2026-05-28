"use client";

import Link from "next/link";
import { useState } from "react";

export default function L18Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-rose-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L18
            </span>
            <h1 className="text-xl font-bold">部署与优化</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: Vercel 部署 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">1. Vercel 部署</h2>
            <p className="text-slate-300 mb-4">
              Vercel 是 Next.js 的官方部署平台，一键部署 GitHub 仓库。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Vercel 部署步骤
// 1. push 代码到 GitHub
// 2. import 项目到 vercel.com
// 3. 自动检测 Next.js 并部署

// 模拟部署流程
function deployToVercel(repo) {
  console.log("步骤 1: 链接 GitHub 仓库");
  console.log("步骤 2: 选择分支 (main)");
  console.log("步骤 3: 自动构建");
  console.log("步骤 4: 部署到全球 CDN");

  const url = "https://" + repo.replace("/", "-") + ".vercel.app";
  console.log("访问:", url);
}

deployToVercel("user/my-app");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                列出 Vercel 部署步骤
              </p>
              <CodeExercise
                initialCode={`const steps = [
  "连接 GitHub 仓库",
  "选择要部署的分支",
  "配置环境变量",
  "点击部署"
];

steps.forEach((s, i) => console.log(i + 1 + ".", s));`}
                expectedOutput="1. 连接 GitHub 仓库\n2. 选择要部署的分支\n3. 配置环境变量\n4. 点击部署"
              />
            </div>
          </section>

          {/* Section 2: 环境变量配置 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">2. 环境变量配置</h2>
            <p className="text-slate-300 mb-4">
              Vercel 面板或 vercel env add 管理环境变量。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Vercel 环境变量
// vercel env add DATABASE_URL
// vercel env add NEXT_PUBLIC_API_URL

// 本地 .env.local 和生产环境变量分开

function getEnvConfig() {
  const local = {
    DATABASE_URL: "postgres://localhost:5432/dev",
    API_KEY: "dev_key_123",
    NEXT_PUBLIC_API_URL: "http://localhost:3000"
  };

  const prod = {
    DATABASE_URL: process.env.DATABASE_URL,
    API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  };

  return { local, production: prod };
}

console.log("local:", getEnvConfig().local.DATABASE_URL);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                配置生产环境变量
              </p>
              <CodeExercise
                initialCode={`const env = {
  "DATABASE_URL": "postgres://prod-db:5432/app",
  "JWT_SECRET": process.env.JWT_SECRET || "default-secret",
  "NEXT_PUBLIC_SITE_URL": "https://myapp.vercel.app"
};

console.log("DB:", env.DATABASE_URL);
console.log("Site:", env.NEXT_PUBLIC_SITE_URL);`}
                expectedOutput="DB: postgres://prod-db:5432/app\nSite: https://myapp.vercel.app"
              />
            </div>
          </section>

          {/* Section 3: 性能优化 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">3. 性能优化</h2>
            <p className="text-slate-300 mb-4">
              Next.js 自动优化，但可以进一步提升性能。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 性能优化策略
// 1. 图片优化: next/image
// 2. 代码分割: 自动按路由分割
// 3. 预加载: next/link prefetch
// 4. 缓存: Cache-Control 头

// 模拟优化
const bundle = {
  initial: 150000,
  afterOptimization: 85000,
  reduction: ((150000 - 85000) / 150000 * 100).toFixed(1)
};

console.log("原始体积:", bundle.initial, "bytes");
console.log("优化后:", bundle.afterOptimization, "bytes");
console.log("减少:", bundle.reduction + "%");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                计算优化效果
              </p>
              <CodeExercise
                initialCode={`function calcReduction(original, optimized) {
  const reduction = ((original - optimized) / original * 100).toFixed(1);
  console.log("优化效果:", reduction + "%");
  return reduction;
}

calcReduction(200000, 120000);
calcReduction(50000, 40000);`}
                expectedOutput="优化效果: 40.0%\n优化效果: 20.0%"
              />
            </div>
          </section>

          {/* Section 4: 图片优化 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">4. 图片优化</h2>
            <p className="text-slate-300 mb-4">
              next/image 自动优化图片格式、大小，按需加载。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// next/image 特性
// 1. 自动格式转换 (WebP/AVIF)
// 2. 按需调整大小
// 3. 懒加载
// 4. placeholder

// 模拟图片处理
function processImage(url, options = {}) {
  console.log("原图:", url);

  if (options.format) console.log("格式:", options.format);
  if (options.width) console.log("宽度:", options.width);
  if (options.quality) console.log("质量:", options.quality);
  if (options.lazy) console.log("懒加载: 开启");

  return "处理后图片";
}

processImage("/original.jpg", {
  width: 800,
  quality: 80,
  format: "webp",
  lazy: true
});`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                使用 next/image 配置
              </p>
              <CodeExercise
                initialCode={`const imageConfig = {
  src: "/hero.jpg",
  alt: "Hero Image",
  width: 1200,
  height: 600,
  formats: ["webp", "avif"]
};

console.log("src:", imageConfig.src);
console.log("alt:", imageConfig.alt);
console.log("size:", imageConfig.width + "x" + imageConfig.height);
console.log("formats:", imageConfig.formats.join(", "));`}
                expectedOutput="src: /hero.jpg\nalt: Hero Image\nsize: 1200x600\nformats: webp, avif"
              />
            </div>
          </section>

          {/* Section 5: 缓存策略 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">5. 缓存策略</h2>
            <p className="text-slate-300 mb-4">
              合理的缓存策略大幅提升性能。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 缓存策略
// 1. 静态资源: Cache-Control: public, max-age=31536000, immutable
// 2. API 响应: no-store 或短期缓存
// 3. ISR: revalidate 时间

// 模拟缓存头
function getCacheHeader(resource) {
  if (resource.endsWith(".js") || resource.endsWith(".css")) {
    return "public, max-age=31536000, immutable";
  }
  if (resource.startsWith("/api/")) {
    return "no-store";
  }
  if (resource === "/") {
    return "public, max-age=3600, stale-while-revalidate=86400";
  }
  return "public, max-age=60";
}

console.log("JS:", getCacheHeader("/_next/static/chunk.js"));
console.log("API:", getCacheHeader("/api/users"));
console.log("Page:", getCacheHeader("/"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                设置 API 缓存策略
              </p>
              <CodeExercise
                initialCode={`function getApiCache(endpoint) {
  if (endpoint.includes("private")) {
    return "no-store";
  }
  if (endpoint.includes("public")) {
    return "public, max-age=60";
  }
  return "no-cache";
}

console.log("user API:", getApiCache("/api/user"));
console.log("posts public:", getApiCache("/api/posts/public"));
console.log("config:", getApiCache("/api/config"));`}
                expectedOutput="user API: no-store\nposts public: public, max-age=60\nconfig: no-cache"
              />
            </div>
          </section>

          {/* Section 6: 监控与调试 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">6. 监控与调试</h2>
            <p className="text-slate-300 mb-4">
              使用 Vercel Analytics 和错误监控。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Vercel Analytics
// 监控 Core Web Vitals
// - LCP (Largest Contentful Paint)
// - FID (First Input Delay)
// - CLS (Cumulative Layout Shift)

// 模拟性能指标
const metrics = {
  LCP: 2.5,  // 秒
  FID: 100,  // 毫秒
  CLS: 0.1
};

function checkVitals(metrics) {
  console.log("LCP:", metrics.LCP <= 2.5 ? "good" : "needs improvement");
  console.log("FID:", metrics.FID <= 100 ? "good" : "needs improvement");
  console.log("CLS:", metrics.CLS <= 0.1 ? "good" : "needs improvement");
}

checkVitals(metrics);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                评估页面性能
              </p>
              <CodeExercise
                initialCode={`function evaluatePagePerformance(metrics) {
  const scores = [];
  scores.push(metrics.LCP <= 2.5 ? "LCP: good" : "LCP: poor");
  scores.push(metrics.FID <= 100 ? "FID: good" : "FID: poor");
  scores.push(metrics.CLS <= 0.1 ? "CLS: good" : "CLS: poor");
  return scores;
}

const result = evaluatePagePerformance({ LCP: 1.8, FID: 50, CLS: 0.05 });
result.forEach(r => console.log(r));`}
                expectedOutput="LCP: good\nFID: good\nCLS: good"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Vercel 是 Next.js 官方部署平台</li>
              <li>• 环境变量分开管理本地和生产</li>
              <li>• next/image 自动优化图片</li>
              <li>• 合理设置缓存策略提升性能</li>
              <li>• 监控 Core Web Vitals 指标</li>
              <li>• 使用 Analytics 跟踪性能数据</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">课程完成</h3>
              <p className="text-slate-300 text-sm mb-3">
                恭喜完成全栈 React 学习路径！
              </p>
              <CodeExercise
                initialCode={`const course = {
  name: "TypeScript + React 全栈教程",
  lessons: 18,
  phases: [
    "Phase 1: TypeScript 基础",
    "Phase 2: React 核心概念",
    "Phase 3: Hooks 进阶",
    "Phase 4: React 生态",
    "Phase 5: 全栈实践"
  ]
};

console.log("课程:", course.name);
console.log("课时:", course.lessons);
console.log("\\n学习路径:");
course.phases.forEach((p, i) => console.log(i + 1 + ".", p));`}
                expectedOutput={`课程: TypeScript + React 全栈教程\n课时: 18\n\n学习路径:\n1. Phase 1: TypeScript 基础\n2. Phase 2: React 核心概念\n3. Phase 3: Hooks 进阶\n4. Phase 4: React 生态\n5. Phase 5: 全栈实践`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l17" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L17 认证与会话
            </Link>
            <Link href="/" className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded text-white">
              返回课程列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        log: (...args: unknown[]) => {
          logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "));
        },
        error: (...args: unknown[]) => logs.push("Error: " + args.map(String).join(" ")),
      };
      new Function("console", code)(customConsole);
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
        <button onClick={handleRun} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white">
          运行代码
        </button>
        {expectedOutput && (
          <button onClick={() => setShowExpected(!showExpected)} className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded text-white">
            {showExpected ? "隐藏答案" : "显示答案"}
          </button>
        )}
      </div>
      {result && (
        <div className={`rounded p-3 ${result.error ? "bg-red-900/50 border border-red-700" : "bg-slate-900 border border-slate-600"}`}>
          <pre className={`text-sm font-mono ${result.error ? "text-red-400" : "text-emerald-400"}`}>
            {result.error ? `错误: ${result.error}` : result.output}
          </pre>
        </div>
      )}
      {showExpected && expectedOutput && (
        <div className="bg-emerald-900/30 border border-emerald-700 rounded p-3">
          <pre className="text-emerald-300 text-sm font-mono">{expectedOutput}</pre>
        </div>
      )}
    </div>
  );
}