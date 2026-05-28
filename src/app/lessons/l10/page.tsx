"use client";

import Link from "next/link";
import { useState } from "react";

export default function L10Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-amber-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L10
            </span>
            <h1 className="text-xl font-bold">Context 与全局状态</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是 Context */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">1. 什么是 Context？</h2>
            <p className="text-slate-300 mb-4">
              Context 允许在组件树中传递数据，而不必逐层手动传递 props。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Props 层层传递（繁琐）
function A(props) { return B({ data: props.data }); }
function B(props) { return C({ data: props.data }); }
function C(props) { return D({ data: props.data }); }

// Context（简洁）
const Context = { data: "全局数据" };
function useContext(ctx) { return ctx.data; }

console.log("Context:", Context.data);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟用 Context 获取主题配置
              </p>
              <CodeExercise
                initialCode={`// 模拟 ThemeContext
// const ThemeContext = { ... };

console.log("theme:", ThemeContext.theme);
console.log("color:", ThemeContext.primaryColor);`}
                expectedOutput={`// 模拟 ThemeContext
const ThemeContext = {
  theme: "dark",
  primaryColor: "#007bff",
  fontSize: 14
};

console.log("theme:", ThemeContext.theme);
console.log("color:", ThemeContext.primaryColor);`}
              />
            </div>
          </section>

          {/* Section 2: createContext */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">2. createContext</h2>
            <p className="text-slate-300 mb-4">
              createContext 创建 Context 对象，包含 Provider 和 Consumer。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 createContext
function createContext(defaultValue) {
  const context = {
    Provider: ({ value, children }) => children,
    Consumer: ({ children }) => children(defaultValue)
  };
  return context;
}

const ThemeContext = createContext({
  theme: "light",
  color: "blue"
});

console.log("Context created with default");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 UserContext，默认用户是 "游客"
              </p>
              <CodeExercise
                initialCode={`// UserContext
// function createContext(defaultValue) { ... }

console.log("默认用户:", UserContext.defaultValue.name);
console.log("默认级别:", UserContext.defaultValue.level);`}
                expectedOutput={`// UserContext
function createContext(defaultValue) {
  return { defaultValue };
}

const UserContext = createContext({ name: "游客", level: 0 });

console.log("默认用户:", UserContext.defaultValue.name);
console.log("默认级别:", UserContext.defaultValue.level);`}
              />
            </div>
          </section>

          {/* Section 3: Provider */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Provider</h2>
            <p className="text-slate-300 mb-4">
              Provider 组件提供 context 值，其下所有子组件都能访问。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 Provider
let currentContext = { theme: "light" };

function Provider(props) {
  currentContext = { ...currentContext, ...props.value };
  return props.children;
}

console.log("初始:", currentContext);

Provider({
  value: { theme: "dark", color: "black" },
  children: () => console.log("组件内:", currentContext)
});`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟 Provider 提供语言设置
              </p>
              <CodeExercise
                initialCode={`// 语言 Provider
// let currentLang = { lang: "en", dir: "ltr" };
// function LanguageProvider(props) { ... }

LanguageProvider({ lang: "zh", dir: "ltr" });
LanguageProvider({ lang: "ar", dir: "rtl" });`}
                expectedOutput={`// 语言 Provider
let currentLang = { lang: "en", dir: "ltr" };

function LanguageProvider(props) {
  currentLang = { ...currentLang, ...props };
  console.log("Provider 设置:", currentLang.lang, currentLang.dir);
}

LanguageProvider({ lang: "zh", dir: "ltr" });
LanguageProvider({ lang: "ar", dir: "rtl" });`}
              />
            </div>
          </section>

          {/* Section 4: useContext */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">4. useContext</h2>
            <p className="text-slate-300 mb-4">
              useContext 让组件读取 context 值。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useContext
let context = { user: null, theme: "light" };

function useContext(Context) {
  return context;
}

const ThemeContext = { name: "theme" };
context = { user: null, theme: "dark", color: "white" };

const theme = useContext(ThemeContext);
console.log("获取 theme:", theme.theme);
console.log("获取 color:", theme.color);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟用 useContext 获取用户信息
              </p>
              <CodeExercise
                initialCode={`// User Context
// let globalUser = { name: "未登录", id: null };
// function useUser() { ... }

// 组件中获取
const user = useUser();
console.log("用户:", user.name);

// 登录后
globalUser = { name: "张三", id: 1 };
const user2 = useUser();
console.log("登录后:", user2.name);`}
                expectedOutput={`// User Context
let globalUser = { name: "未登录", id: null };

function useUser() {
  return globalUser;
}

// 组件中获取
const user = useUser();
console.log("用户:", user.name);

// 登录后
globalUser = { name: "张三", id: 1 };
const user2 = useUser();
console.log("登录后:", user2.name);`}
              />
            </div>
          </section>

          {/* Section 5: Context 分离原则 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">5. Context 分离原则</h2>
            <p className="text-slate-300 mb-4">
              避免创建一个大 context，按功能拆分成多个小 context。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 分离 vs 合并
// ❌ 一个大 context
const AppContext = createContext({
  user: null,
  theme: "light",
  language: "zh",
  notifications: [],
  settings: {}
});

// ✅ 按功能拆分
const UserContext = createContext(null);
const ThemeContext = createContext(null);
const LanguageContext = createContext(null);

console.log("分离后更易维护");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                将电商应用的 context 按功能拆分
              </p>
              <CodeExercise
                initialCode={`// 电商 Context 拆分
// const AuthContext = { name: "auth" };
// const CartContext = { name: "cart" };
// const ProductContext = { name: "product" };

console.log("Auth:", AuthContext.name);
console.log("Cart:", CartContext.name);
console.log("Product:", ProductContext.name);`}
                expectedOutput={`// 电商 Context 拆分
const AuthContext = { name: "auth" };
const CartContext = { name: "cart" };
const ProductContext = { name: "product" };

console.log("Auth:", AuthContext.name);
console.log("Cart:", CartContext.name);
console.log("Product:", ProductContext.name);`}
              />
            </div>
          </section>

          {/* Section 6: 全局状态管理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">6. 全局状态管理</h2>
            <p className="text-slate-300 mb-4">
              Context 适合简单的全局状态，复杂场景可用专门的库如 Zustand。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 简单的全局 Store
class Store {
  constructor() {
    this.state = {};
    this.listeners = [];
  }

  getState(key) {
    return this.state[key];
  }

  setState(key, value) {
    this.state[key] = value;
    console.log("更新:", key, "=", value);
  }

  subscribe(fn) {
    this.listeners.push(fn);
    console.log("订阅数:", this.listeners.length);
  }
}

const store = new Store();

store.setState("count", 0);
store.setState("name", "张三");
console.log("count:", store.getState("count"));
console.log("name:", store.getState("name"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个简单的 Store，实现 get 和 set
              </p>
              <CodeExercise
                initialCode={`// 简单 Store
// const store = { ... };

store.set("user", { name: "李四" });
store.set("role", "admin");

console.log(store.get("user").name);
console.log(store.get("role"));`}
                expectedOutput={`// 简单 Store
const store = {
  data: {},
  get(key) { return this.data[key]; },
  set(key, value) { this.data[key] = value; }
};

store.set("user", { name: "李四" });
store.set("role", "admin");

console.log(store.get("user").name);
console.log(store.get("role"));`}
              />
            </div>
          </section>

          {/* Section 7: Context vs Props */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">7. Context vs Props</h2>
            <p className="text-slate-300 mb-4">
              何时用 Context？何时用 Props？
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 px-3">场景</th>
                    <th className="text-left py-2 px-3">推荐</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">父传子</td>
                    <td className="py-2 px-3 text-emerald-400">Props</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">跨多层传递</td>
                    <td className="py-2 px-3 text-amber-400">Context</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">全局配置（主题、语言）</td>
                    <td className="py-2 px-3 text-amber-400">Context</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">频繁变化的状态</td>
                    <td className="py-2 px-3 text-purple-400">状态管理库</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                判断应该用 Props 还是 Context
              </p>
              <CodeExercise
                initialCode={`// 场景判断
// function scenario(name, use) { ... }

// 1. 用户名从 App -> Header -> Logo
scenario("Logo 组件", "Props");

// 2. 主题从 App -> 所有页面
scenario("主题设置", "Context");

// 3. 购物车数量从 Header -> CartIcon
scenario("购物车图标", "Props");

// 4. 语言从 App -> 所有组件
scenario("语言配置", "Context");`}
                expectedOutput={`// 场景判断
function scenario(name, use) {
  console.log(name + ":", use);
}

// 1. 用户名从 App -> Header -> Logo
scenario("Logo 组件", "Props");

// 2. 主题从 App -> 所有页面
scenario("主题设置", "Context");

// 3. 购物车数量从 Header -> CartIcon
scenario("购物车图标", "Props");

// 4. 语言从 App -> 所有组件
scenario("语言配置", "Context");`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Context 避免层层传递 props</li>
              <li>• createContext 创建 Context 对象</li>
              <li>• Provider 提供值，useContext 消费值</li>
              <li>• 按功能拆分 Context，避免大而全</li>
              <li>• 简单全局状态用 Context，复杂用状态管理库</li>
              <li>• 父传子用 Props，跨多层用 Context</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个 ThemeProvider，支持切换亮色/暗色主题
              </p>
              <CodeExercise
                initialCode={`// ThemeProvider
// let theme = { mode: "light", colors: { bg: "#fff", text: "#000" } };
// function ThemeProvider(mode) { ... }

// 测试
ThemeProvider("light");
console.log("背景色:", theme.colors.bg);

ThemeProvider("dark");
console.log("背景色:", theme.colors.bg);`}
                expectedOutput={`// ThemeProvider
let theme = { mode: "light", colors: { bg: "#fff", text: "#000" } };

function ThemeProvider(mode) {
  if (mode === "dark") {
    theme = { mode: "dark", colors: { bg: "#1a1a1a", text: "#fff" } };
  } else {
    theme = { mode: "light", colors: { bg: "#fff", text: "#000" } };
  }
  console.log("主题切换:", theme.mode);
}

// 测试
ThemeProvider("light");
console.log("背景色:", theme.colors.bg);

ThemeProvider("dark");
console.log("背景色:", theme.colors.bg);`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l9" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L9 Hooks 深入
            </Link>
            <Link href="/lessons/l11" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded text-white">
              L11 useReducer 复杂状态 →
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