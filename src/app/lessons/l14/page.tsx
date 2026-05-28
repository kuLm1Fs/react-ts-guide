"use client";

import Link from "next/link";
import { useState } from "react";

export default function L14Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-purple-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L14
            </span>
            <h1 className="text-xl font-bold">API 数据获取</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: fetch API */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">1. fetch API</h2>
            <p className="text-slate-300 mb-4">
              fetch 是浏览器内置的 HTTP 请求 API。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// fetch 基本用法
// fetch(url) 返回 Promise
// fetch(url, options) 可配置请求

// 模拟 fetch
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    console.log("请求:", url, options.method || "GET");
    setTimeout(() => {
      if (url.includes("error")) {
        reject(new Error("请求失败"));
      } else {
        resolve({ data: { name: "张三" }, status: 200 });
      }
    }, 100);
  });
}

// 使用
fetch("/api/users")
  .then(res => console.log("响应:", res.status))
  .catch(err => console.log("错误:", err.message));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟 GET 请求获取用户列表
              </p>
              <CodeExercise
                initialCode={`function fetch(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: [{ id: 1, name: "张三" }, { id: 2, name: "李四" }] });
    }, 50);
  });
}

fetch("/api/users").then(res => {
  console.log("获取到", res.data.length, "个用户");
  console.log("第一个:", res.data[0].name);
});`}
                expectedOutput="获取到 2 个用户\n第一个: 张三"
              />
            </div>
          </section>

          {/* Section 2: async/await */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. async/await 语法</h2>
            <p className="text-slate-300 mb-4">
              async/await 让异步代码更像同步代码。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// async 函数返回 Promise
// await 等待 Promise 结果

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getUser(id) {
  await delay(100);
  return { id, name: "用户" + id };
}

async function main() {
  console.log("开始获取...");
  const user = await getUser(1);
  console.log("获取到:", user);
}

main();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 async/await 获取商品信息
              </p>
              <CodeExercise
                initialCode={`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getProduct(id) {
  await delay(50);
  return { id, name: "iPhone 15", price: 6999 };
}

async function main() {
  const product = await getProduct(1);
  console.log("商品:", product.name);
  console.log("价格:", product.price);
}

main();`}
                expectedOutput="商品: iPhone 15\n价格: 6999"
              />
            </div>
          </section>

          {/* Section 3: 请求配置 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. 请求配置</h2>
            <p className="text-slate-300 mb-4">
              fetch 可以配置 method、headers、body 等参数。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// fetch options
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  body: JSON.stringify({ name: "张三", age: 25 })
};

console.log("method:", options.method);
console.log("headers:", JSON.stringify(options.headers));
console.log("body:", options.body);

// 模拟发送
function request(url, opts) {
  console.log("发送请求到:", url);
  console.log("方法:", opts.method);
  console.log("数据:", opts.body);
}

request("/api/users", options);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟 POST 请求创建用户
              </p>
              <CodeExercise
                initialCode={`function createUser(userData) {
  console.log("POST /api/users");
  console.log("Content-Type: application/json");
  console.log("body:", JSON.stringify(userData));
  return { success: true, id: Date.now() };
}

const result = createUser({ name: "张三", email: "zhang@example.com" });
console.log("result:", JSON.stringify(result));`}
                expectedOutput={`POST /api/users\nContent-Type: application/json\nbody: {"name":"张三","email":"zhang@example.com"}\nresult: {"success":true,"id":1}`}
              />
            </div>
          </section>

          {/* Section 4: Loading 状态 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Loading 状态</h2>
            <p className="text-slate-300 mb-4">
              数据请求时需要显示 loading 状态。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// loading 状态
let state = { loading: false, data: null, error: null };

async function fetchData() {
  console.log("loading: true");
  state.loading = true;
  state.data = null;
  state.error = null;

  await new Promise(r => setTimeout(r, 100));

  state.data = { name: "张三" };
  state.loading = false;
  console.log("loading: false");
  console.log("data:", JSON.stringify(state.data));
}

fetchData();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟加载用户头像
              </p>
              <CodeExercise
                initialCode={`let state = { loading: true, avatar: null };

console.log("loading:", state.loading);

setTimeout(() => {
  state.loading = false;
  state.avatar = "https://example.com/avatar.png";
  console.log("loading:", state.loading);
  console.log("avatar:", state.avatar);
}, 100);`}
                expectedOutput="loading: true\nloading: false\navatar: https://example.com/avatar.png"
              />
            </div>
          </section>

          {/* Section 5: 错误处理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. 错误处理</h2>
            <p className="text-slate-300 mb-4">
              需要处理网络错误和服务器错误。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 错误处理
async function fetchWithError(url) {
  try {
    console.log("开始请求...");
    await new Promise((_, reject) =>
      setTimeout(() => url.includes("error")
        ? reject(new Error("网络错误"))
        : _.resolve(), 100)
    );
    console.log("成功:", { data: "数据" });
  } catch (e) {
    console.log("捕获错误:", e.message);
  }
}

fetchWithError("/api/good");
fetchWithError("/api/error");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                处理 404 和 500 错误
              </p>
              <CodeExercise
                initialCode={`function handleResponse(status) {
  if (status === 404) {
    console.log("错误: 资源不存在");
  } else if (status === 500) {
    console.log("错误: 服务器错误");
  } else if (status >= 200 && status < 300) {
    console.log("成功:", status);
  }
}

handleResponse(200);
handleResponse(404);
handleResponse(500);`}
                expectedOutput="成功: 200\n错误: 资源不存在\n错误: 服务器错误"
              />
            </div>
          </section>

          {/* Section 6: 数据缓存 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">6. 数据缓存</h2>
            <p className="text-slate-300 mb-4">
              避免重复请求，使用缓存策略。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 简单缓存
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    console.log("使用缓存:", url);
    return cache.get(url);
  }

  console.log("发起请求:", url);
  const data = { name: "张三" };
  cache.set(url, data);
  return data;
}

async function main() {
  await fetchWithCache("/api/user");
  await fetchWithCache("/api/user");
  await fetchWithCache("/api/user");
}

main();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现商品详情缓存
              </p>
              <CodeExercise
                initialCode={`const productCache = new Map();

function getProduct(id) {
  if (productCache.has(id)) {
    console.log("缓存命中:", id);
    return productCache.get(id);
  }
  console.log("获取产品:", id);
  const product = { id, name: "商品" + id };
  productCache.set(id, product);
  return product;
}

getProduct(1);
getProduct(1);
getProduct(2);
getProduct(1);`}
                expectedOutput="获取产品: 1\n缓存命中: 1\n获取产品: 2\n缓存命中: 1"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• fetch 是浏览器内置 HTTP API</li>
              <li>• async/await 让异步代码更易读</li>
              <li>• 可配置 method、headers、body</li>
              <li>• 需要处理 loading 和 error 状态</li>
              <li>• 使用 try/catch 捕获错误</li>
              <li>• 缓存避免重复请求</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现完整的数据获取流程：loading → data/error
              </p>
              <CodeExercise
                initialCode={`async function fetchUser(id, shouldFail) {
  console.log("loading: true");
  await new Promise(r => setTimeout(r, 50));

  if (shouldFail) {
    console.log("error: 请求失败");
    return;
  }

  const user = { id, name: "张三", age: 25 };
  console.log("loading: false");
  console.log("data:", JSON.stringify(user));
}

fetchUser(1, false);
fetchUser(2, true);`}
                expectedOutput={`loading: true\nloading: false\ndata: {"id":1,"name":"张三","age":25}\nloading: true\nerror: 请求失败`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l13" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L13 状态管理
            </Link>
            <Link href="/lessons/l15" className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded text-white">
              L15 Next.js 基础 →
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