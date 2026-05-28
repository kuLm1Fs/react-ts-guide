"use client";

import Link from "next/link";
import { useState } from "react";

export default function L15Page() {
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
              L15
            </span>
            <h1 className="text-xl font-bold">Next.js 基础</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: Next.js 简介 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">1. Next.js 简介</h2>
            <p className="text-slate-300 mb-4">
              Next.js 是 React 全栈框架，支持 SSR、API Routes、文件系统路由。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Next.js 特点
// 1. App Router - 文件系统路由
// 2. Server Components - 服务端组件
// 3. API Routes - 后端接口
// 4. 自动代码分割
// 5. SEO 友好

console.log("Next.js 是一个全栈 React 框架");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                识别 Next.js 的核心功能
              </p>
              <CodeExercise
                initialCode={`const features = [
  "App Router",
  "Server Components",
  "API Routes",
  "自动代码分割"
];

features.forEach((f, i) => console.log(i + 1 + ".", f));`}
                expectedOutput="1. App Router\n2. Server Components\n3. API Routes\n4. 自动代码分割"
              />
            </div>
          </section>

          {/* Section 2: App Router */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">2. App Router</h2>
            <p className="text-slate-300 mb-4">
              Next.js 13+ 使用 App Router，src/app 目录即是路由。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 文件系统路由
// src/app/page.tsx        -> /
// src/app/about/page.tsx  -> /about
// src/app/blog/[id]/page.tsx -> /blog/:id

// 路由映射
const routes = {
  "src/app/page.tsx": "/",
  "src/app/about/page.tsx": "/about",
  "src/app/blog/[id]/page.tsx": "/blog/:id"
};

Object.entries(routes).forEach(([file, path]) => {
  console.log(file, "->", path);
});`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 /users 和 /users/:id 路由的文件路径
              </p>
              <CodeExercise
                initialCode={`function getRoutePath(path) {
  return \`src/app\${path}/page.tsx\`;
}

console.log(getRoutePath("/users"));
console.log(getRoutePath("/users/123"));`}
                expectedOutput="src/app/users/page.tsx\nsrc/app/users/123/page.tsx"
              />
            </div>
          </section>

          {/* Section 3: 服务端组件 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">3. 服务端组件</h2>
            <p className="text-slate-300 mb-4">
              默认是服务端组件，直接在服务器执行，可以访问数据库。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 服务端组件 vs 客户端组件
// 服务端组件: 默认，无需 "use client"，可访问后端资源
// 客户端组件: 需要 "use client" 声明，可使用 hooks

// 模拟服务端组件
async function fetchData() {
  // 模拟数据库查询
  return { users: [{ name: "张三" }, { name: "李四" }] };
}

function ServerComponent() {
  const data = { users: [{ name: "张三" }, { name: "李四" }] };
  return data;
}

console.log("服务端组件:", ServerComponent());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟服务端获取文章列表
              </p>
              <CodeExercise
                initialCode={`async function getPosts() {
  // 模拟数据库查询
  return [
    { id: 1, title: "Next.js 入门", author: "张三" },
    { id: 2, title: "React Hooks 指南", author: "李四" }
  ];
}

const posts = [
  { id: 1, title: "Next.js 入门", author: "张三" },
  { id: 2, title: "React Hooks 指南", author: "李四" }
];

console.log("文章数:", posts.length);
posts.forEach(p => console.log("-", p.title));`}
                expectedOutput="文章数: 2\n- Next.js 入门\n- React Hooks 指南"
              />
            </div>
          </section>

          {/* Section 4: 客户端组件 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">4. 客户端组件</h2>
            <p className="text-slate-300 mb-4">
              客户端组件使用 "use client" 声明，可以使用 React 特性如 useState。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// "use client" 声明客户端组件
// 客户端组件可以:
// - 使用 useState, useEffect 等 hooks
// - 处理用户交互事件
// - 使用浏览器 API

function ClientComponent() {
  let count = 0;

  function handleClick() {
    count++;
    console.log("点击:", count);
  }

  handleClick();
  handleClick();
  return count;
}

console.log("ClientComponent result:", ClientComponent());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟计数器客户端组件
              </p>
              <CodeExercise
                initialCode={`function Counter() {
  let count = 0;

  function increment() {
    count++;
  }

  increment();
  increment();
  increment();

  return count;
}

console.log("count:", Counter());`}
                expectedOutput="count: 3"
              />
            </div>
          </section>

          {/* Section 5: API Routes */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">5. API Routes</h2>
            <p className="text-slate-300 mb-4">
              API Routes 让你在 Next.js 中创建后端接口。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// API Route 文件
// src/app/api/users/route.ts -> POST /api/users

// 模拟 API Handler
function apiHandler(method, path, body) {
  console.log(method, path);

  if (path === "/api/users" && method === "GET") {
    return { status: 200, data: [{ id: 1, name: "张三" }] };
  }

  if (path === "/api/users" && method === "POST") {
    console.log("body:", JSON.stringify(body));
    return { status: 201, data: { id: 2, ...body } };
  }

  return { status: 404, data: null };
}

console.log(JSON.stringify(apiHandler("GET", "/api/users")));
console.log(JSON.stringify(apiHandler("POST", "/api/users", { name: "李四" })));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现 GET /api/products 接口
              </p>
              <CodeExercise
                initialCode={`function handleRequest(method, path) {
  if (method === "GET" && path === "/api/products") {
    return {
      status: 200,
      data: [{ id: 1, name: "iPhone", price: 6999 }]
    };
  }
  return { status: 404 };
}

const res = handleRequest("GET", "/api/products");
console.log("status:", res.status);
console.log("products:", JSON.stringify(res.data));`}
                expectedOutput={`status: 200\nproducts: [{"id":1,"name":"iPhone","price":6999}]`}
              />
            </div>
          </section>

          {/* Section 6: 布局与模板 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">6. 布局与模板</h2>
            <p className="text-slate-300 mb-4">
              layout.tsx 定义共享布局，template.tsx 每次路由切换重新创建。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// layout.tsx - 持久化布局
// template.tsx - 每次路由切换重新创建

// 模拟布局
function Layout({ children }) {
  return "导航栏 | " + children + " | 页脚";
}

function Page() {
  return Layout("页面内容");
}

console.log("Layout 渲染:", Page());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建带导航栏的布局
              </p>
              <CodeExercise
                initialCode={`function createLayout(page) {
  return "<Nav />" + page + "<Footer />";
}

console.log(createLayout("<HomePage />"));
console.log(createLayout("<AboutPage />"));`}
                expectedOutput="<Nav /><HomePage /><Footer />\n<Nav /><AboutPage /><Footer />"
              />
            </div>
          </section>

          {/* Section 7: 环境变量 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">7. 环境变量</h2>
            <p className="text-slate-300 mb-4">
              Next.js 支持 .env 文件存储环境变量。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// .env 文件
// DATABASE_URL=postgres://...
// API_KEY=xxx

// 访问环境变量
// process.env.DATABASE_URL
// process.env.NEXT_PUBLIC_API_URL

// 模拟环境变量
const env = {
  DATABASE_URL: "postgres://localhost:5432/mydb",
  API_KEY: "secret123",
  NEXT_PUBLIC_PUBLIC_VAR: "public_value"
};

console.log("数据库:", env.DATABASE_URL);
console.log("API Key:", env.API_KEY);
console.log("公开变量:", env.NEXT_PUBLIC_PUBLIC_VAR);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                读取环境变量配置
              </p>
              <CodeExercise
                initialCode={`const envVars = {
  "NEXT_PUBLIC_API_URL": "https://api.example.com",
  "DATABASE_URL": "postgres://user:pass@localhost/db",
  "JWT_SECRET": "my-secret-key"
};

console.log("API URL:", envVars.NEXT_PUBLIC_API_URL);
console.log("DB:", envVars.DATABASE_URL);
console.log("Secret:", envVars.JWT_SECRET);`}
                expectedOutput="API URL: https://api.example.com\nDB: postgres://user:pass@localhost/db\nSecret: my-secret-key"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Next.js 是 React 全栈框架</li>
              <li>• App Router 使用文件系统路由</li>
              <li>• 默认是服务端组件，可直接访问后端</li>
              <li>• 需要交互时用 "use client" 声明客户端组件</li>
              <li>• API Routes 创建后端接口</li>
              <li>• layout.tsx 定义共享布局</li>
              <li>• .env 文件管理环境变量</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个完整的页面 + API 结构
              </p>
              <CodeExercise
                initialCode={`// 模拟 Next.js 结构
const nextjsApp = {
  pages: {
    "page.tsx": "首页",
    "about/page.tsx": "关于页",
    "api/users/route.ts": "用户 API"
  }
};

Object.entries(nextjsApp.pages).forEach(([path, desc]) => {
  console.log(path + ":", desc);
});`}
                expectedOutput="page.tsx: 首页\nabout/page.tsx: 关于页\napi/users/route.ts: 用户 API"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l14" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L14 API 数据获取
            </Link>
            <Link href="/lessons/l16" className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded text-white">
              L16 数据库集成 →
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