"use client";

import Link from "next/link";
import { useState } from "react";

export default function L9Page() {
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
              L9
            </span>
            <h1 className="text-xl font-bold">Hooks 深入</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: useRef */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">1. useRef</h2>
            <p className="text-slate-300 mb-4">
              useRef 用于在渲染间保持值不变，且修改它不会触发重新渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useRef
function createRef(initialValue) {
  return { current: initialValue };
}

const countRef = createRef(0);

console.log("初始:", countRef.current);
countRef.current = 5;
console.log("修改后:", countRef.current);
// 不会触发渲染
console.log("ref 仍是:", countRef.current);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 ref 用于存储输入框的值
              </p>
              <CodeExercise
                initialCode={`// 模拟 ref
const inputRef = { current: "" };

console.log("初始值:", inputRef.current);

inputRef.current = "你好";
console.log("输入后:", inputRef.current);

inputRef.current = "";
console.log("清空后:", inputRef.current);`}
                expectedOutput="初始值:\n输入后: 你好\n清空后:"
              />
            </div>
          </section>

          {/* Section 2: useMemo */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">2. useMemo</h2>
            <p className="text-slate-300 mb-4">
              useMemo 用于缓存计算结果，避免不必要的重复计算。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useMemo
const cache = new Map();

function useMemo(fn, deps) {
  const key = JSON.stringify(deps);
  if (cache.has(key)) {
    console.log("使用缓存");
    return cache.get(key);
  }
  const result = fn();
  cache.set(key, result);
  console.log("计算新值");
  return result;
}

let count = 0;

// 依赖不变，使用缓存
const r1 = useMemo(() => count + 1, [count]);
const r2 = useMemo(() => count + 1, [count]);

// 依赖变化，重新计算
count = 1;
const r3 = useMemo(() => count + 1, [count]);

console.log("r1:", r1, "r2:", r2, "r3:", r3);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个 expensive 计算，只有依赖变化时才重新计算
              </p>
              <CodeExercise
                initialCode={`// 模拟 expensive 计算
let computationCount = 0;
const cache = {};

function expensiveCalc(n) {
  computationCount++;
  console.log("计算第", computationCount, "次");
  return n * 2;
}

// 缓存
cache[1] = expensiveCalc(1);
cache[1] = expensiveCalc(1); // 应该用缓存
cache[2] = expensiveCalc(2);

console.log("计算次数:", computationCount);`}
                expectedOutput="计算第 1 次\n计算第 2 次\n计算次数: 2"
              />
            </div>
          </section>

          {/* Section 3: useCallback */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">3. useCallback</h2>
            <p className="text-slate-300 mb-4">
              useCallback 缓存函数，避免子组件不必要的重新渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useCallback
let lastDeps = null;
let cachedFn = null;

function useCallback(fn, deps) {
  const depsKey = JSON.stringify(deps);
  if (lastDeps === depsKey) {
    console.log("返回缓存的函数");
    return cachedFn;
  }
  cachedFn = fn;
  lastDeps = depsKey;
  console.log("创建新函数");
  return cachedFn;
}

const fn1 = useCallback(() => console.log("A"), [0]);
const fn2 = useCallback(() => console.log("A"), [0]); // 缓存
const fn3 = useCallback(() => console.log("B"), [1]); // 新依赖

fn1();
fn2();
fn3();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个按钮点击处理函数
              </p>
              <CodeExercise
                initialCode={`// 模拟 useCallback
let handler = null;
let lastId = null;

function useCallback(fn, id) {
  if (handler === null || lastId !== id) {
    handler = fn;
    lastId = id;
    console.log("创建新处理函数 id:", id);
  }
  return handler;
}

// 组件1
const handleClick = useCallback(() => console.log("点击!"), 1);
handleClick();

// 相同 id，复用
const handleClick2 = useCallback(() => console.log("点击!"), 1);
handleClick2();

// 不同 id
const handleClick3 = useCallback(() => console.log("新点击!"), 2);
handleClick3();`}
                expectedOutput="创建新处理函数 id: 1\n点击!\n点击!\n创建新处理函数 id: 2\n新点击!"
              />
            </div>
          </section>

          {/* Section 4: 自定义 Hooks */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">4. 自定义 Hooks</h2>
            <p className="text-slate-300 mb-4">
              自定义 Hook 是封装了 Hook 逻辑的函数，以 use 开头。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 自定义 Hook: useCounter
function useCounter(initial) {
  let count = initial;
  const increment = () => { count++; console.log("+1:", count); };
  const decrement = () => { count--; console.log("-1:", count); };
  return [() => count, increment, decrement];
}

// 使用
const [getCount, inc, dec] = useCounter(0);

console.log("count:", getCount());
inc();
inc();
dec();
console.log("count:", getCount());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 useInput 自定义 Hook，管理和输入相关的 state
              </p>
              <CodeExercise
                initialCode={`// 自定义 useInput
function useInput(initialValue) {
  let value = initialValue;
  const setValue = (v) => { value = v; };
  const reset = () => { value = initialValue; };
  return [() => value, setValue, reset];
}

const [getValue, setValue, reset] = useInput("");

console.log("初始:", getValue());
setValue("Hello");
console.log("输入:", getValue());
setValue("World");
console.log("再次输入:", getValue());
reset();
console.log("重置:", getValue());`}
                expectedOutput="初始:\n输入: Hello\n再次输入: World\n重置:"
              />
            </div>
          </section>

          {/* Section 5: useReducer */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">5. useReducer</h2>
            <p className="text-slate-300 mb-4">
              useReducer 是 useState 的替代方案，用于复杂的状态逻辑。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// reducer 模式
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// 初始状态
let state = { count: 0 };

// dispatch
state = reducer(state, { type: "increment" });
console.log("after +1:", state.count);

state = reducer(state, { type: "increment" });
console.log("after +1:", state.count);

state = reducer(state, { type: "decrement" });
console.log("after -1:", state.count);

state = reducer(state, { type: "reset" });
console.log("after reset:", state.count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 reducer 实现一个 todo 添加功能
              </p>
              <CodeExercise
                initialCode={`// reducer
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { items: [...state.items, action.text] };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

let todos = { items: [] };

todos = reducer(todos, { type: "add", text: "学习 React" });
todos = reducer(todos, { type: "add", text: "学习 TypeScript" });
console.log("items:", todos.items);

todos = reducer(todos, { type: "clear" });
console.log("after clear:", todos.items);`}
                expectedOutput="items: 学习 React,学习 TypeScript\nafter clear: "
              />
            </div>
          </section>

          {/* Section 6: Hooks 规则 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">6. Hooks 规则</h2>
            <p className="text-slate-300 mb-4">
              Hooks 有一些必须遵守的规则，否则会导致 bug。
            </p>

            <div className="bg-red-900/30 border border-red-700 rounded p-4 mb-4">
              <ul className="text-slate-300 text-sm space-y-1">
                <li>1. 只在顶层调用 Hooks - 不要在循环、条件、嵌套函数中调用</li>
                <li>2. 只在 React 函数中调用 Hooks - 组件或自定义 Hook</li>
                <li>3. Hooks 的调用顺序必须一致 - 每次渲染都一样</li>
              </ul>
            </div>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 错误示例：在条件中调用
// let useConditional = condition ? useState(0) : useState(1);

// 正确：始终在顶层调用
function useMyHook() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  // 始终按顺序调用
  return [state1, state2];
}

console.log("Hooks 必须在顶层调用，顺序不能变");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟验证 Hooks 调用顺序
              </p>
              <CodeExercise
                initialCode={`// 验证调用顺序
let hookCallOrder = [];

function useState(val) {
  hookCallOrder.push("useState");
  return [val, () => {}];
}

function useEffect(fn) {
  hookCallOrder.push("useEffect");
}

function MyComponent() {
  useState(0);
  useState(1);
  useEffect(() => {});
  return null;
}

MyComponent();
console.log("调用顺序:", hookCallOrder.join(" -> "));`}
                expectedOutput="调用顺序: useState -> useState -> useEffect"
              />
            </div>
          </section>

          {/* Section 7: 常用 Hooks 组合 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">7. 常用 Hooks 组合</h2>
            <p className="text-slate-300 mb-4">
              实际开发中经常组合使用多个 Hooks。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 组合 Hooks：表单处理
function useForm(initial) {
  let values = { ...initial };
  const [getValues, setValues] = [
    () => values,
    (newValues) => { values = { ...values, ...newValues }; }
  ];
  return [getValues, setValues];
}

const [getForm, setForm] = useForm({ username: "", password: "" });

console.log("初始:", getForm());
setForm({ username: "admin" });
console.log("username:", getForm().username);
setForm({ password: "123456" });
console.log("password:", getForm().password);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                组合 useState 和 useEffect 实现一个自动保存功能
              </p>
              <CodeExercise
                initialCode={`// 模拟自动保存
let content = "";
let saveCount = 0;
let lastSaved = null;

function useAutoSave() {
  const setContent = (text) => {
    content = text;
    console.log("内容更新:", text.substring(0, 10));
  };

  const save = () => {
    saveCount++;
    lastSaved = content;
    console.log("保存成功次数:", saveCount);
  };

  return [setContent, save, () => lastSaved];
}

const [setContent, save, getLastSaved] = useAutoSave();

setContent("这是要保存的内容...");
save();
setContent("修改后的内容");
save();
console.log("最后保存的内容:", getLastSaved());`}
                expectedOutput="内容更新: 这是要保存的内容...\n保存成功次数: 1\n内容更新: 修改后的内容\n保存成功次数: 2\n最后保存的内容: 这是要保存的内容..."
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• useRef 在渲染间保持值，修改不触发重新渲染</li>
              <li>• useMemo 缓存计算结果，避免重复计算</li>
              <li>• useCallback 缓存函数，避免不必要的渲染</li>
              <li>• 自定义 Hook 是封装了 Hook 逻辑的函数</li>
              <li>• useReducer 适合复杂的状态逻辑</li>
              <li>• Hooks 必须在顶层调用，顺序不能变</li>
              <li>• 可以组合使用多个 Hooks</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个 useToggle Hook，返回布尔值和切换函数
              </p>
              <CodeExercise
                initialCode={`// useToggle
function useToggle(initial) {
  let value = initial;
  const toggle = () => { value = !value; };
  return [() => value, toggle];
}

const [getValue, toggle] = useToggle(false);

console.log("初始:", getValue());
toggle();
console.log("切换后:", getValue());
toggle();
console.log("再切换:", getValue());`}
                expectedOutput="初始: false\n切换后: true\n再切换: false"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l8" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L8 副作用与数据获取
            </Link>
            <Link href="/lessons/l10" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded text-white">
              L10 Context 与全局状态 →
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