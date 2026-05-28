"use client";

import Link from "next/link";
import { useState } from "react";

export default function L8Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-emerald-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L8
            </span>
            <h1 className="text-xl font-bold">副作用与数据获取</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是副作用 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. 什么是副作用？</h2>
            <p className="text-slate-300 mb-4">
              副作用（Side Effect）是指影响外部世界的操作，如数据获取、订阅、手动 DOM 操作等。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 纯函数：只根据输入返回输出，不影响外部
function add(a, b) {
  return a + b;
}

// 有副作用的操作
let result = 0;
function addWithSideEffect(a, b) {
  result = a + b;  // 修改了外部变量
  return result;
}

console.log(add(1, 2));        // 3
console.log(addWithSideEffect(1, 2)); // 3`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                区分纯函数和副作用函数
              </p>
              <CodeExercise
                initialCode={`// 纯函数
// function pureSum(arr) { ... }

// 有副作用
// let externalState = 0;
// function withSideEffect(n) { ... }

console.log("纯函数结果:", pureSum([1, 2, 3]));
console.log("副作用函数结果:", withSideEffect(5));
console.log("外部状态:", externalState);`}
                expectedOutput={`// 纯函数
function pureSum(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

// 有副作用
let externalState = 0;
function withSideEffect(n) {
  externalState = n * 2;
  return externalState;
}

console.log("纯函数结果:", pureSum([1, 2, 3]));
console.log("副作用函数结果:", withSideEffect(5));
console.log("外部状态:", externalState);`}
              />
            </div>
          </section>

          {/* Section 2: useEffect Hook */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. useEffect Hook</h2>
            <p className="text-slate-300 mb-4">
              useEffect 让你在组件渲染后执行副作用操作。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useEffect
let effects = [];

function useEffect(effect, deps) {
  effects.push({ effect, deps });
  effect();
}

// 模拟组件挂载
useEffect(() => {
  console.log("组件挂载，执行副作用");
}, []);

console.log("注册了", effects.length, "个 effect");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个 useEffect，组件挂载时设置标题
              </p>
              <CodeExercise
                initialCode={`// 模拟设置标题
// let documentTitle = "";
// function useEffect(effect) { ... }

useEffect(() => {
  documentTitle = "学习 React";
  console.log("设置标题:", documentTitle);
});

console.log("当前文档标题:", documentTitle);`}
                expectedOutput={`// 模拟设置标题
let documentTitle = "";

function useEffect(effect) {
  effect();
}

useEffect(() => {
  documentTitle = "学习 React";
  console.log("设置标题:", documentTitle);
});

console.log("当前文档标题:", documentTitle);`}
              />
            </div>
          </section>

          {/* Section 3: 依赖数组 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. 依赖数组</h2>
            <p className="text-slate-300 mb-4">
              依赖数组控制 effect 何时执行。空数组表示只执行一次。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 依赖数组的作用
let lastDeps = undefined;

function useEffect(effect, deps) {
  if (deps !== lastDeps) {
    effect();
    lastDeps = deps;
  }
}

let count = 0;

// 空数组 - 只执行一次
console.log("--- 空数组依赖 ---");
useEffect(() => console.log("只执行一次"), []);
useEffect(() => console.log("不会再次执行"), []);

// 有依赖 - 依赖变化时执行
console.log("--- 有依赖 ---");
useEffect(() => console.log("count 变化:", count), [count]);
count = 1;
useEffect(() => console.log("count 变化:", count), [count]);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个计数器，只有 count 变化时才更新文档标题
              </p>
              <CodeExercise
                initialCode={`// 模拟计数器
// let count = 0;
// let lastCount = undefined;
// let documentTitle = "";
// function updateTitle() { ... }

// 模拟更新
count = 1;
updateTitle();

count = 2;
updateTitle();

count = 2; // 相同，不更新
updateTitle();`}
                expectedOutput={`// 模拟计数器
let count = 0;
let lastCount = undefined;
let documentTitle = "";

function updateTitle() {
  if (count !== lastCount) {
    documentTitle = "计数: " + count;
    console.log("更新标题:", documentTitle);
    lastCount = count;
  }
}

// 模拟更新
count = 1;
updateTitle();

count = 2;
updateTitle();

count = 2; // 相同，不更新
updateTitle();`}
              />
            </div>
          </section>

          {/* Section 4: 清理副作用 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. 清理副作用</h2>
            <p className="text-slate-300 mb-4">
              某些副作用需要清理，比如取消订阅、清除定时器等。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 清理函数
let timerId = null;
let subscriptions = [];

function startTimer(callback) {
  timerId = setInterval(callback, 1000);
  console.log("定时器启动, ID:", timerId);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    console.log("定时器停止");
    timerId = null;
  }
}

function subscribe(channel) {
  subscriptions.push(channel);
  console.log("订阅:", channel);
}

function unsubscribe(channel) {
  subscriptions = subscriptions.filter(c => c !== channel);
  console.log("取消订阅:", channel);
}

// 模拟使用
startTimer(() => console.log("定时器触发"));
subscribe("news");

// 清理
unsubscribe("news");
stopTimer();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个 WebSocket 连接和断开
              </p>
              <CodeExercise
                initialCode={`// WebSocket 模拟
// let socket = null;
// let isConnected = false;
// function connect(url) { ... }
// function disconnect() { ... }

connect("wss://chat.example.com");
connect("wss://chat.example.com");
disconnect();`}
                expectedOutput={`// WebSocket 模拟
let socket = null;
let isConnected = false;

function connect(url) {
  if (isConnected) {
    console.log("已连接");
    return;
  }
  socket = { url, status: "open" };
  isConnected = true;
  console.log("连接成功:", url);
}

function disconnect() {
  if (!isConnected) {
    console.log("未连接");
    return;
  }
  socket = null;
  isConnected = false;
  console.log("连接断开");
}

connect("wss://chat.example.com");
connect("wss://chat.example.com");
disconnect();`}
              />
            </div>
          </section>

          {/* Section 5: 数据获取 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. 数据获取</h2>
            <p className="text-slate-300 mb-4">
              useEffect 常用于数据获取，获取数据后更新 state。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟数据获取
let users = null;
let isLoading = true;
let error = null;

function fetchUsers() {
  console.log("开始获取数据...");
  isLoading = true;

  // 模拟延迟
  setTimeout(() => {
    users = [
      { id: 1, name: "张三" },
      { id: 2, name: "李四" }
    ];
    isLoading = false;
    console.log("数据获取完成:", users.length, "条");
  }, 100);

  return users;
}

// 模拟获取
console.log("isLoading:", isLoading);
const result = fetchUsers();
console.log("结果:", result);
console.log("isLoading (同步):", isLoading);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟获取用户信息，设置 loading 状态
              </p>
              <CodeExercise
                initialCode={`// 模拟获取用户
// let user = null;
// let loading = true;
// let error = null;
// function getUser(id) { ... }

getUser(1);`}
                expectedOutput={`// 模拟获取用户
let user = null;
let loading = true;
let error = null;

function getUser(id) {
  loading = true;
  user = null;
  console.log("loading:", loading);

  // 模拟
  user = { id: id, name: "张三" };
  loading = false;
  console.log("user:", user.name);
  console.log("loading:", loading);
}

getUser(1);`}
              />
            </div>
          </section>

          {/* Section 6: async/await */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. async/await</h2>
            <p className="text-slate-300 mb-4">
              async/await 让异步代码看起来像同步代码。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log("开始获取...");
  await delay(100);
  const data = { name: "张三", age: 25 };
  console.log("获取完成:", data);
  return data;
}

async function main() {
  console.log("调用 fetchData");
  const result = await fetchData();
  console.log("结果:", result);
}

main();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 async/await 获取两个用户数据
              </p>
              <CodeExercise
                initialCode={`// 模拟 API
// function delay(ms) { ... }
// async function getUser(id) { ... }

async function main() {
  console.log("获取用户1...");
  const u1 = await getUser(1);

  console.log("获取用户2...");
  const u2 = await getUser(2);

  console.log("全部完成:", u1.name, u2.name);
}

main();`}
                expectedOutput={`// 模拟 API
function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getUser(id) {
  await delay(50);
  return { id, name: "用户" + id };
}

async function main() {
  console.log("获取用户1...");
  const u1 = await getUser(1);

  console.log("获取用户2...");
  const u2 = await getUser(2);

  console.log("全部完成:", u1.name, u2.name);
}

main();`}
              />
            </div>
          </section>

          {/* Section 7: 错误处理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. 错误处理</h2>
            <p className="text-slate-300 mb-4">
              数据获取可能失败，需要处理错误状态。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟错误处理
let data = null;
let error = null;

function fetchWithError(shouldFail) {
  if (shouldFail) {
    error = "网络错误";
    data = null;
    console.log("错误:", error);
  } else {
    data = { name: "张三" };
    error = null;
    console.log("成功:", data);
  }
}

fetchWithError(true);
fetchWithError(false);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟 API 调用，成功返回用户，失败返回错误
              </p>
              <CodeExercise
                initialCode={`// API 调用
// function apiCall(success) { ... }

const r1 = apiCall(false);
console.log(r1.status, r1.message);

const r2 = apiCall(true);
console.log(r2.status, r2.data.name);`}
                expectedOutput={`// API 调用
function apiCall(success) {
  if (success) {
    return { status: "success", data: { id: 1, name: "李四" } };
  } else {
    return { status: "error", message: "请求失败" };
  }
}

const r1 = apiCall(false);
console.log(r1.status, r1.message);

const r2 = apiCall(true);
console.log(r2.status, r2.data.name);`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• 副作用是影响外部世界的操作</li>
              <li>• useEffect 用于执行副作用操作</li>
              <li>• 依赖数组控制 effect 执行时机</li>
              <li>• 清理函数用于取消订阅、停止定时器等</li>
              <li>• 数据获取通常在 useEffect 中进行</li>
              <li>• async/await 让异步代码更易读</li>
              <li>• 需要处理 loading 和 error 状态</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个数据获取流程：loading → success/error
              </p>
              <CodeExercise
                initialCode={`// 模拟数据获取流程
// let state = { loading: true, data: null, error: null };
// function fetchUser(id, shouldFail) { ... }

fetchUser(1, false);
fetchUser(999, true);`}
                expectedOutput={`// 模拟数据获取流程
let state = { loading: true, data: null, error: null };

function fetchUser(id, shouldFail) {
  state.loading = true;
  state.data = null;
  state.error = null;

  // 模拟
  if (shouldFail) {
    state.error = "用户不存在";
    state.loading = false;
  } else {
    state.data = { id, name: "王五" };
    state.loading = false;
  }

  console.log("state:", JSON.stringify(state));
}

// 测试
fetchUser(1, false);
fetchUser(999, true);`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l7" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L7 State 与事件
            </Link>
            <Link href="/lessons/l9" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded text-white">
              L9 Hooks 深入 →
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