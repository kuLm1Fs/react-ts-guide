"use client";

import Link from "next/link";
import { useState } from "react";

export default function L13Page() {
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
              L13
            </span>
            <h1 className="text-xl font-bold">状态管理</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 状态管理问题 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">1. 状态管理问题</h2>
            <p className="text-slate-300 mb-4">
              Context 在复杂应用中可能变得难以维护，需要专门的状态管理方案。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Context 问题
// 1. 容易产生不必要的重渲染
// 2. 状态逻辑分散在多个 Context
// 3. 中间件支持有限

// 模拟多个 Context
const UserContext = { Provider: () => {} };
const CartContext = { Provider: () => {} };
const ProductContext = { Provider: () => {} };
const OrderContext = { Provider: () => {} };
const NotificationContext = { Provider: () => {} };

console.log("需要简化:", UserContext, CartContext, ProductContext);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟管理多个分散的状态
              </p>
              <CodeExercise
                initialCode={`// 分散的状态
// let userState = { name: "张三" };
// let cartState = { items: [], total: 0 };
// let uiState = { theme: "dark" };

// updateUser("李四");
// addToCart({ id: 1, name: "商品A" });
// setTheme("light");

console.log("user:", userState.name);
console.log("cart:", cartState.items.length);
console.log("theme:", uiState.theme);`}
                expectedOutput={`// 分散的状态
let userState = { name: "张三" };
let cartState = { items: [], total: 0 };
let uiState = { theme: "dark" };

function updateUser(name) { userState.name = name; }
function addToCart(item) { cartState.items.push(item); }
function setTheme(theme) { uiState.theme = theme; }

updateUser("李四");
addToCart({ id: 1, name: "商品A" });
setTheme("light");

console.log("user:", userState.name);
console.log("cart:", cartState.items.length);
console.log("theme:", uiState.theme);`}
              />
            </div>
          </section>

          {/* Section 2: Zustand 简介 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Zustand 简介</h2>
            <p className="text-slate-300 mb-4">
              Zustand 是一个轻量级状态管理库，API 简洁，使用方便。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Zustand 创建 store
// const useStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 }))
// }));

// 模拟 create
function create(storeFn) {
  let state;
  const listeners = new Set();

  const getState = () => state;
  const setState = (updater) => {
    state = typeof updater === "function"
      ? updater(state)
      : { ...state, ...updater };
    listeners.forEach(l => l());
  };
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  state = storeFn(setState, getState, { getState, setState });
  return () => ({ getState, subscribe });
}

const useStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 }))
}));

const { getState, subscribe } = useStore();
console.log("count:", getState().count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个简单的 Zustand store
              </p>
              <CodeExercise
                initialCode={`// function createStore(init) { ... }

const store = createStore({ count: 0, name: "计数器" });
console.log(store.getState().count);
console.log(store.getState().name);`}
                expectedOutput={`function createStore(init) {
  let state = init;
  const subs = [];
  return {
    getState: () => state,
    setState: (u) => { state = typeof u === "function" ? u(state) : u; },
    subscribe: (fn) => { subs.push(fn); }
  };
}

const store = createStore({ count: 0, name: "计数器" });
console.log(store.getState().count);
console.log(store.getState().name);`}
              />
            </div>
          </section>

          {/* Section 3: Store 订阅 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Store 订阅</h2>
            <p className="text-slate-300 mb-4">
              组件可以订阅 store 的部分状态，只在相关状态变化时重渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 选择器订阅
const store = {
  _state: { count: 0, name: "张三", age: 25 },
  _subs: [],
  getState() { return this._state; },
  subscribe(fn) { this._subs.push(fn); },
  setState(updater) {
    this._state = typeof updater === "function"
      ? updater(this._state)
      : { ...this._state, ...updater };
    this._subs.forEach(fn => fn());
  }
};

// 选择器：只取需要的部分
function select(getState, selector) {
  let selected = selector(getState());
  const listener = () => {
    const newSelected = selector(getState());
    if (newSelected !== selected) {
      selected = newSelected;
      console.log("更新:", selector.name || "selected", "=", newSelected);
    }
  };
  store.subscribe(listener);
  return selected;
}

const count = select(store, s => s.count);
const name = select(store, s => s.name);
console.log("初始:", count, name);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用选择器获取用户信息
              </p>
              <CodeExercise
                initialCode={`const store = {
  user: { name: "张三", email: "zhang@example.com" },
  cart: { items: 3 }
};

// function useSelector(selector) { ... }

// const userName = useSelector(s => s.user.name);
// const cartCount = useSelector(s => s.cart.items);

console.log("name:", userName);
console.log("items:", cartCount);`}
                expectedOutput={`const store = {
  user: { name: "张三", email: "zhang@example.com" },
  cart: { items: 3 }
};

function useSelector(selector) {
  return selector(store);
}

const userName = useSelector(s => s.user.name);
const cartCount = useSelector(s => s.cart.items);

console.log("name:", userName);
console.log("items:", cartCount);`}
              />
            </div>
          </section>

          {/* Section 4: Action 方法 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Action 方法</h2>
            <p className="text-slate-300 mb-4">
              Store 可以包含 action 方法，修改状态。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 带 action 的 store
function createStore(initial) {
  let state = initial;
  return {
    getState: () => state,
    setState: (updater) => {
      state = typeof updater === "function" ? updater(state) : updater;
    }
  };
}

const counterStore = createStore({ count: 0 });

// Action
const increment = () => counterStore.setState(s => ({ count: s.count + 1 }));
const decrement = () => counterStore.setState(s => ({ count: s.count - 1 }));
const reset = () => counterStore.setState({ count: 0 });

console.log("初始:", counterStore.getState().count);
increment();
increment();
decrement();
console.log("操作后:", counterStore.getState().count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 todo store，支持 add 和 remove
              </p>
              <CodeExercise
                initialCode={`// const todoStore = { todos: [], add(text) { ... }, remove(id) { ... } };

todoStore.add("学习 React");
todoStore.add("写代码");
todoStore.remove(todoStore.todos[0].id);
console.log("剩余:", todoStore.todos.length);`}
                expectedOutput={`const todoStore = {
  todos: [],
  add(text) {
    this.todos.push({ id: Date.now(), text, done: false });
    console.log("添加:", text);
  },
  remove(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    console.log("删除 id:", id);
  }
};

todoStore.add("学习 React");
todoStore.add("写代码");
todoStore.remove(todoStore.todos[0].id);
console.log("剩余:", todoStore.todos.length);`}
              />
            </div>
          </section>

          {/* Section 5: 中间件 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. 中间件</h2>
            <p className="text-slate-300 mb-4">
              中间件可以拦截 actions，添加日志、持久化等逻辑。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 中间件模拟
function logger(store) {
  const originalSetState = store.setState.bind(store);
  store.setState = (updater) => {
    console.log("更新前:", store.getState());
    originalSetState(updater);
    console.log("更新后:", store.getState());
  };
  return store;
}

const store = logger(createStore({ count: 0 }));
console.log("---");
store.setState({ count: 5 });
console.log("---");
store.setState(s => ({ count: s.count + 1 }));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 persist 中间件，保存状态到 localStorage
              </p>
              <CodeExercise
                initialCode={`// let storage = {};
// function persist(store, key) { ... }

const store = persist({ getState: () => ({ name: "张三" }), setState: (u) => {} }, "user");
store.setState({ name: "李四" });
console.log("storage:", JSON.stringify(storage));`}
                expectedOutput={`let storage = {};

const persist = (store, key) => {
  const originalSetState = store.setState.bind(store);
  store.setState = (updater) => {
    originalSetState(updater);
    storage[key] = store.getState();
    console.log("持久化:", key);
  };
  return store;
};

const store = persist({ getState: () => ({ name: "张三" }), setState: (u) => {} }, "user");
store.setState({ name: "李四" });
console.log("storage:", JSON.stringify(storage));`}
              />
            </div>
          </section>

          {/* Section 6: Context vs Zustand */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">6. Context vs Zustand</h2>
            <p className="text-slate-300 mb-4">
              选择合适的状态管理方案。
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 px-3">特性</th>
                    <th className="text-left py-2 px-3">Context</th>
                    <th className="text-left py-2 px-3">Zustand</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">API 复杂度</td>
                    <td className="py-2 px-3 text-emerald-400">简单</td>
                    <td className="py-2 px-3 text-purple-400">简洁</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">渲染优化</td>
                    <td className="py-2 px-3 text-amber-400">需手动</td>
                    <td className="py-2 px-3 text-purple-400">自动</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">中间件</td>
                    <td className="py-2 px-3 text-red-400">不支持</td>
                    <td className="py-2 px-3 text-purple-400">支持</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">适用场景</td>
                    <td className="py-2 px-3 text-slate-400">简单全局状态</td>
                    <td className="py-2 px-3 text-slate-400">复杂状态管理</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                选择合适方案：主题 vs 电商购物车
              </p>
              <CodeExercise
                initialCode={`// function recommend(name, tool) { ... }

// 主题：简单全局配置
// 购物车：复杂状态、频繁更新`}
                expectedOutput={`function recommend(name, tool) {
  console.log(name + ":", tool);
}

// 主题：简单全局配置
recommend("主题切换", "Context");

// 购物车：复杂状态、频繁更新
recommend("购物车", "Zustand");`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Context 适合简单全局状态</li>
              <li>• Zustand 是轻量级状态管理库</li>
              <li>• Store 包含状态和 actions</li>
              <li>• 选择器实现细粒度订阅</li>
              <li>• 中间件可扩展功能（日志、持久化）</li>
              <li>• 复杂状态管理推荐 Zustand</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个带日志的购物车 store
              </p>
              <CodeExercise
                initialCode={`// function createCartStore() { ... }

// cart.dispatch({ type: "ADD_ITEM", payload: { name: "iPhone", price: 6999 } });
// cart.dispatch({ type: "ADD_ITEM", payload: { name: "AirPods", price: 1999 } });
console.log("total:", cart.getState().total);`}
                expectedOutput={`function createCartStore() {
  let state = { items: [], total: 0 };
  const listeners = [];

  return {
    getState: () => state,
    subscribe: (fn) => { listeners.push(fn); },
    dispatch: (action) => {
      console.log("action:", action.type);
      if (action.type === "ADD_ITEM") {
        state = {
          items: [...state.items, action.payload],
          total: state.total + action.payload.price
        };
      }
      listeners.forEach(fn => fn());
    }
  };
}

const cart = createCartStore();
cart.dispatch({ type: "ADD_ITEM", payload: { name: "iPhone", price: 6999 } });
cart.dispatch({ type: "ADD_ITEM", payload: { name: "AirPods", price: 1999 } });
console.log("total:", cart.getState().total);`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l12" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L12 React Router
            </Link>
            <Link href="/lessons/l14" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white">
              L14 API 数据获取 →
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