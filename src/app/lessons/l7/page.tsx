"use client";

import Link from "next/link";
import { useState } from "react";

export default function L7Page() {
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
              L7
            </span>
            <h1 className="text-xl font-bold">State 与事件</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是 State */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. 什么是 State？</h2>
            <p className="text-slate-300 mb-4">
              State（状态）是组件内部的数据，会影响组件的渲染。当 state 变化时，组件会重新渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 模拟 useState
function useState(initialValue) {
  let value = initialValue;
  const setValue = (newValue) => {
    value = newValue;
    console.log("状态更新:", value);
  };
  return [value, setValue];
}

// 使用
let count = 0;
console.log("初始:", count);

count = count + 1;
console.log("更新后:", count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                模拟一个简单的计数器状态，从 0 开始，每次 +1
              </p>
              <CodeExercise
                initialCode={`// 模拟计数器
let count = 0;

console.log("初始计数:", count);

// 点击一次 +1
count = count + 1;
console.log("+1 后:", count);

// 再 +1
count = count + 1;
console.log("再 +1 后:", count);`}
                expectedOutput="初始计数: 0\n+1 后: 1\n再 +1 后: 2"
              />
            </div>
          </section>

          {/* Section 2: useState Hook */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. useState Hook</h2>
            <p className="text-slate-300 mb-4">
              useState 是 React 内置的 Hook，用于在函数组件中添加 state。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// useState 返回 [当前值, 设置函数]
// 模拟 React 的 useState
function useState(initialValue) {
  let value = initialValue;
  const setValue = (newValue) => {
    value = newValue;
  };
  return [() => value, setValue];
}

const [getCount, setCount] = useState(0);

// 读取
console.log("count:", getCount());

// 更新
setCount(5);
console.log("更新后:", getCount());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建两个 state：name 和 age，初始值分别是 "张三" 和 25
              </p>
              <CodeExercise
                initialCode={`// 模拟两个 state
function useState(initial) {
  let val = initial;
  return [() => val, (v) => { val = v; }];
}

const [getName, setName] = useState("张三");
const [getAge, setAge] = useState(25);

console.log("name:", getName());
console.log("age:", getAge());

setName("李四");
setAge(30);

console.log("更新后 name:", getName());
console.log("更新后 age:", getAge());`}
                expectedOutput="name: 张三\nage: 25\n更新后 name: 李四\n更新后 age: 30"
              />
            </div>
          </section>

          {/* Section 3: 事件处理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. 事件处理</h2>
            <p className="text-slate-300 mb-4">
              React 中的事件处理与 DOM 事件类似，但写法是 camelCase。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 事件处理函数
function handleClick() {
  console.log("按钮被点击！");
}

function handleMouseOver() {
  console.log("鼠标悬停");
}

// 模拟点击
console.log("绑定: onClick -> handleClick");
console.log("绑定: onMouseOver -> handleMouseOver");

handleClick();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 onClick、onChange、onSubmit 三个处理函数
              </p>
              <CodeExercise
                initialCode={`// 事件处理函数
function handleClick() { console.log("点击事件触发"); }
function handleChange(e) { console.log("输入:", e); }
function handleSubmit() { console.log("表单提交"); }

// 模拟触发
handleClick();
handleChange("用户输入的内容");
handleSubmit();`}
                expectedOutput="点击事件触发\n输入: 用户输入的内容\n表单提交"
              />
            </div>
          </section>

          {/* Section 4: 事件对象 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. 事件对象</h2>
            <p className="text-slate-300 mb-4">
              事件处理函数会接收一个事件对象，包含事件相关信息。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 事件对象
function handleClick(event) {
  console.log("事件类型:", event.type);
  console.log("目标元素:", event.target);
  console.log("时间戳:", event.timeStamp);
}

// 模拟事件
handleClick({
  type: "click",
  target: "button#submit",
  timeStamp: 1234567890
});`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 handleKeyDown 事件，打印 key 和 code
              </p>
              <CodeExercise
                initialCode={`// 键盘事件
function handleKeyDown(event) {
  console.log("key:", event.key);
  console.log("code:", event.code);
}

// 模拟按下 Enter
handleKeyDown({ key: "Enter", code: "Enter" });`}
                expectedOutput="key: Enter\ncode: Enter"
              />
            </div>
          </section>

          {/* Section 5: setState 函数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. setState 函数</h2>
            <p className="text-slate-300 mb-4">
              setState 用于更新 state，更新后组件会重新渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// setState 用法
let count = 0;
const setCount = (newValue) => {
  count = newValue;
  console.log("state 更新:", count);
};

// 直接赋值
setCount(10);
console.log("count:", count);

// 函数式更新
setCount(prev => prev + 1);
console.log("递增后:", count);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个 +1 和 -1 的计数器
              </p>
              <CodeExercise
                initialCode={`// 简单计数器
let count = 0;
const setCount = (v) => { count = v; };

console.log("初始:", count);

// +1
setCount(count + 1);
console.log("+1 后:", count);

// -1
setCount(count - 1);
console.log("-1 后:", count);`}
                expectedOutput="初始: 0\n+1 后: 1\n-1 后: 0"
              />
            </div>
          </section>

          {/* Section 6: 表单处理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. 表单处理</h2>
            <p className="text-slate-300 mb-4">
              表单元素（input, textarea, select）的值存在 state 中，通过 onChange 更新。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 受控组件
let inputValue = "";

function handleChange(e) {
  inputValue = e;
  console.log("输入:", inputValue);
}

// 模拟输入
handleChange("你好");
handleChange("你好，");
handleChange("你好，世界！");

console.log("最终值:", inputValue);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个登录表单，监听 username 和 password 的变化
              </p>
              <CodeExercise
                initialCode={`// 模拟表单
let username = "";
let password = "";

function handleUsernameChange(value) {
  username = value;
  console.log("username:", username);
}

function handlePasswordChange(value) {
  password = value;
  console.log("password:", password);
}

// 模拟输入
handleUsernameChange("admin");
handlePasswordChange("123456");

console.log("登录信息:", username, password);`}
                expectedOutput="username: admin\npassword: 123456\n登录信息: admin 123456"
              />
            </div>
          </section>

          {/* Section 7: 状态提升 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. 状态提升</h2>
            <p className="text-slate-300 mb-4">
              当多个组件需要共享数据时，把状态提升到它们的公共父组件。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 状态提升
let sharedState = { count: 0 };

function ChildA() {
  sharedState.count = sharedState.count + 1;
  console.log("ChildA 更新:", sharedState.count);
}

function ChildB() {
  console.log("ChildB 读取:", sharedState.count);
}

// 模拟更新和读取
ChildA();
ChildB();
ChildA();
ChildB();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现父子组件通信：父组件传递 onClick 给子组件
              </p>
              <CodeExercise
                initialCode={`// 父子通信
let parentCount = 0;

function Child(props) {
  console.log("Child 接收 onClick");
  props.onClick();
}

function Parent() {
  parentCount = parentCount + 1;
  console.log("Parent count:", parentCount);
}

// 模拟点击
const handleClick = () => Parent();
Child({ onClick: handleClick });
Child({ onClick: handleClick });`}
                expectedOutput="Child 接收 onClick\nParent count: 1\nChild 接收 onClick\nParent count: 2"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• State 是组件内部的数据，影响组件渲染</li>
              <li>• useState 返回 [当前值, set函数]</li>
              <li>• React 事件用 camelCase（onClick, onChange）</li>
              <li>• 事件处理函数接收事件对象</li>
              <li>• setState 可以是直接值或函数式更新</li>
              <li>• 表单元素是受控组件，值存在 state 中</li>
              <li>• 状态提升用于组件间共享数据</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个简单的计数器，点击 +1 按钮增加计数
              </p>
              <CodeExercise
                initialCode={`// 模拟计数器组件
let count = 0;

function Counter() {
  function handleClick() {
    count = count + 1;
    console.log("计数:", count);
  }

  // 模拟点击
  handleClick();
  handleClick();
  handleClick();
}

Counter();`}
                expectedOutput="计数: 1\n计数: 2\n计数: 3"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l6" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L6 组件基础
            </Link>
            <Link href="/lessons/l8" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white">
              L8 副作用与数据获取 →
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