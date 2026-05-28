"use client";

import Link from "next/link";
import { useState } from "react";

export default function L11Page() {
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
              L11
            </span>
            <h1 className="text-xl font-bold">useReducer 复杂状态</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是 Reducer */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">1. 什么是 Reducer？</h2>
            <p className="text-slate-300 mb-4">
              Reducer 是一个函数，接收当前状态和 action，返回新状态。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// reducer 函数签名
function reducer(state, action) {
  return newState;
}

// 模拟 reducer
function counterReducer(count, action) {
  if (action.type === "increment") {
    return count + 1;
  }
  return count;
}

let count = 0;
count = counterReducer(count, { type: "increment" });
console.log("count:", count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个 reducer，收到 "double" 时返回状态 * 2
              </p>
              <CodeExercise
                initialCode={`let n = 5;

// dispatch action to double
console.log("n:", n);`}
                expectedOutput={`function doubleReducer(num, action) {
  if (action.type === "double") {
    return num * 2;
  }
  return num;
}

let n = 5;
n = doubleReducer(n, { type: "double" });
console.log("n:", n);`}
              />
            </div>
          </section>

          {/* Section 2: useReducer Hook */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">2. useReducer Hook</h2>
            <p className="text-slate-300 mb-4">
              useReducer 接收 reducer 和初始状态，返回状态和 dispatch 函数。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// useReducer 模拟
function useReducer(reducer, initialState) {
  const state = initialState;
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  return [state, dispatch];
}

// 使用
function todoReducer(todos, action) {
  if (action.type === "add") {
    return [...todos, action.text];
  }
  return todos;
}

let [todos, dispatch] = useReducer(todoReducer, []);
console.log("初始:", todos);

dispatch({ type: "add", text: "学习 React" });
console.log("添加后:", todos);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 useReducer 管理一个计数器，支持 +1 和 -1
              </p>
              <CodeExercise
                initialCode={`// function counterReducer(count, action) { ... }

dispatch({ type: "increment" });
dispatch({ type: "increment" });
dispatch({ type: "decrement" });
console.log("count:", count);`}
                expectedOutput={`function counterReducer(count, action) {
  if (action.type === "increment") return count + 1;
  if (action.type === "decrement") return count - 1;
  return count;
}

let [count, dispatch] = [0, null];

// 模拟初始化
count = 0;
dispatch = (action) => { count = counterReducer(count, action); };

dispatch({ type: "increment" });
dispatch({ type: "increment" });
dispatch({ type: "decrement" });
console.log("count:", count);`}
              />
            </div>
          </section>

          {/* Section 3: Action 对象 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">3. Action 对象</h2>
            <p className="text-slate-300 mb-4">
              Action 描述要执行的操作，通常包含 type 和 payload。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Action 对象
const ADD_TODO = { type: "ADD", payload: { id: 1, text: "买书" } };
const DELETE_TODO = { type: "DELETE", payload: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

let todos = [];
todos = reducer(todos, ADD_TODO);
todos = reducer(todos, DELETE_TODO);
console.log("todos:", todos);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现 SET_NAME action，修改用户名称
              </p>
              <CodeExercise
                initialCode={`let user = { name: "张三", age: 25 };

// dispatch SET_NAME action with payload "李四"
console.log("name:", user.name);`}
                expectedOutput={`function userReducer(user, action) {
  if (action.type === "SET_NAME") {
    return { ...user, name: action.payload };
  }
  return user;
}

let user = { name: "张三", age: 25 };
user = userReducer(user, { type: "SET_NAME", payload: "李四" });
console.log("name:", user.name);`}
              />
            </div>
          </section>

          {/* Section 4: Dispatch 函数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">4. Dispatch 函数</h2>
            <p className="text-slate-300 mb-4">
              Dispatch 用于发送 action，触发状态更新。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// dispatch 发送 action
function createStore(reducer) {
  let state = {};
  const listeners = [];

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach(fn => fn());
    },
    subscribe: (fn) => {
      listeners.push(fn);
    }
  };
}

const store = createStore((s = {}, a) => s);

store.dispatch({ type: "SET_USER", payload: { name: "王五" } });
console.log("state:", store.getState());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 dispatch 修改购物车商品数量
              </p>
              <CodeExercise
                initialCode={`let cart = { items: 0, total: 0 };

// dispatch ADD_ITEM actions with prices 99 and 199
console.log("items:", cart.items, "total:", cart.total);`}
                expectedOutput={`function cartReducer(cart, action) {
  if (action.type === "ADD_ITEM") {
    return { items: cart.items + 1, total: cart.total + action.price };
  }
  return cart;
}

function dispatch(action) {
  cart = cartReducer(cart, action);
}

let cart = { items: 0, total: 0 };
dispatch({ type: "ADD_ITEM", price: 99 });
dispatch({ type: "ADD_ITEM", price: 199 });
console.log("items:", cart.items, "total:", cart.total);`}
              />
            </div>
          </section>

          {/* Section 5: 状态 vs 多个 State */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">5. 状态 vs 多个 State</h2>
            <p className="text-slate-300 mb-4">
              相关的状态用 useReducer 管理，比多个 useState 更清晰。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 多个 useState
let loading = false;
let error = null;
let data = null;

function setLoading(v) { loading = v; }
function setError(v) { error = v; }
function setData(v) { data = v; }

// useReducer 统一管理
function fetchReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

let state = { loading: false, data: null, error: null };
state = fetchReducer(state, { type: "LOADING" });
state = fetchReducer(state, { type: "SUCCESS", payload: { name: "张三" } });
console.log("state:", JSON.stringify(state));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用一个 reducer 管理 form 的 username 和 password
              </p>
              <CodeExercise
                initialCode={`let form = { username: "", password: "" };

// dispatch SET_USERNAME with "admin" and SET_PASSWORD with "123456"
console.log("username:", form.username);
console.log("password:", form.password);`}
                expectedOutput={`function formReducer(form, action) {
  if (action.type === "SET_USERNAME") {
    return { ...form, username: action.payload };
  }
  if (action.type === "SET_PASSWORD") {
    return { ...form, password: action.payload };
  }
  return form;
}

let form = { username: "", password: "" };
form = formReducer(form, { type: "SET_USERNAME", payload: "admin" });
form = formReducer(form, { type: "SET_PASSWORD", payload: "123456" });
console.log("username:", form.username);
console.log("password:", form.password);`}
              />
            </div>
          </section>

          {/* Section 6: 复杂状态更新 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">6. 复杂状态更新</h2>
            <p className="text-slate-300 mb-4">
              对于复杂对象，用展开运算符保留其他属性。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 复杂状态更新
let user = {
  profile: { name: "张三", avatar: "头像.png" },
  settings: { theme: "dark", lang: "zh" }
};

function updateUser(user, updates) {
  return { ...user, ...updates };
}

// 只更新 settings.theme
user = updateUser(user, {
  settings: { ...user.settings, theme: "light" }
});

console.log("name:", user.profile.name);
console.log("theme:", user.settings.theme);
console.log("lang:", user.settings.lang);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                更新 todo 的完成状态，不影响其他字段
              </p>
              <CodeExercise
                initialCode={`let todo = { id: 1, text: "学习 React", completed: false, tags: ["React"] };

// function toggleComplete(todo) { ... }
console.log("completed:", todo.completed);
console.log("text:", todo.text);
console.log("tags:", todo.tags);`}
                expectedOutput={`let todo = { id: 1, text: "学习 React", completed: false, tags: ["React"] };

function toggleComplete(todo) {
  return { ...todo, completed: !todo.completed };
}

todo = toggleComplete(todo);
console.log("completed:", todo.completed);
console.log("text:", todo.text);
console.log("tags:", todo.tags);`}
              />
            </div>
          </section>

          {/* Section 7: useState vs useReducer */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">7. useState vs useReducer</h2>
            <p className="text-slate-300 mb-4">
              选择合适的工具管理状态。
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
                    <td className="py-2 px-3">简单单值状态</td>
                    <td className="py-2 px-3 text-emerald-400">useState</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">相关多值状态</td>
                    <td className="py-2 px-3 text-amber-400">useReducer</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">复杂状态逻辑</td>
                    <td className="py-2 px-3 text-amber-400">useReducer</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">状态更新逻辑简单</td>
                    <td className="py-2 px-3 text-emerald-400">useState</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                判断用什么：计数器 vs 购物车
              </p>
              <CodeExercise
                initialCode={`// function choose(reason, tool) { ... }

// 计数器：简单单值
// 购物车：多个相关值（商品列表、总价、数量）`}
                expectedOutput={`function choose(reason, tool) {
  console.log(reason + ":", tool);
}

// 计数器：简单单值
choose("计数器", "useState");

// 购物车：多个相关值（商品列表、总价、数量）
choose("购物车", "useReducer");`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Reducer 接收状态和 action，返回新状态</li>
              <li>• useReducer 适合复杂相关状态</li>
              <li>• Action 包含 type 和 payload</li>
              <li>• dispatch 触发状态更新</li>
              <li>• 相关多值状态用 useReducer 更清晰</li>
              <li>• 复杂对象更新用展开运算符</li>
              <li>• 简单状态用 useState，复杂逻辑用 useReducer</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个待办事项 reducer，支持添加、删除、切换完成
              </p>
              <CodeExercise
                initialCode={`// function todoReducer(todos, action) { ... }

let todos = [];
// 添加"学习 React"和"写代码"，然后切换第一个的完成状态
console.log("待办数:", todos.length);
console.log("完成数:", todos.filter(t => t.done).length);`}
                expectedOutput={`function todoReducer(todos, action) {
  if (action.type === "ADD") {
    return [...todos, { id: Date.now(), text: action.payload, done: false }];
  }
  if (action.type === "TOGGLE") {
    return todos.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
  }
  if (action.type === "DELETE") {
    return todos.filter(t => t.id !== action.id);
  }
  return todos;
}

let todos = [];
todos = todoReducer(todos, { type: "ADD", payload: "学习 React" });
todos = todoReducer(todos, { type: "ADD", payload: "写代码" });
todos = todoReducer(todos, { type: "TOGGLE", id: todos[0].id });
console.log("待办数:", todos.length);
console.log("完成数:", todos.filter(t => t.done).length);`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l10" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L10 Context 与全局状态
            </Link>
            <Link href="/lessons/l12" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white">
              L12 React Router →
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