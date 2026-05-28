"use client";

import Link from "next/link";
import { useState } from "react";

export default function L5Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm transition-colors"
            >
              ← 返回课程列表
            </Link>
            <span className="bg-emerald-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L5
            </span>
            <h1 className="text-xl font-bold">JSX 基础</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: JSX 是什么 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. JSX 是什么？</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <span className="font-bold text-white">JSX</span>：JavaScript XML，是 JavaScript 的语法扩展，
              让我们可以在 JS 中写类似 HTML 的语法来描述 UI。
            </p>

            <div className="bg-slate-900 rounded p-4 mb-4">
              <p className="text-amber-400 font-medium mb-2">对比：传统 JS vs JSX</p>
              <pre className="text-slate-300 text-sm">{`// 传统 JavaScript - 创建元素很繁琐
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// JSX - 直观易懂
const element = <h1 className="greeting">Hello, world!</h1>;`}</pre>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-700 rounded p-4">
              <p className="text-emerald-400 text-sm">
                💡 想象成"会 JavaScript 的 HTML"，但比 HTML 更强大——可以写逻辑、嵌入变量、组件化。
              </p>
            </div>
          </section>

          {/* Section 2: JSX 语法规则 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. JSX 语法规则</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">2.1 单根元素</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// ❌ 错误：多个同级元素
// const element = <h1>标题</h1><p>段落</p>;

// ✅ 正确：用 div 包裹
const element = (
  <div>
    <h1>标题</h1>
    <p>段落</p>
  </div>
);

// ✅ 或使用 Fragment（不增加 DOM 节点）
// const element = <><h1>标题</h1><p>段落</p></>;`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">2.2 标签闭合</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 自闭合标签必须带 /
const input = <input type="text" />;
const img = <img src="logo.png" alt="Logo" />;

// 有子元素的标签正常闭合
const button = <button type="submit">点击我</button>;`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">2.3 className vs class</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// ❌ 错误：JSX 中不能用 class（是 JS 保留字）
// const element = <div class="container">内容</div>;

// ✅ 正确：用 className
const element = "container"; // 简化示例`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">2.4 camelCase 属性名</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// CSS 属性用 camelCase
const style = {
  backgroundColor: "blue",  // background-color
  fontSize: "16px",          // font-size
  borderRadius: "8px"        // border-radius
};

console.log("style:", JSON.stringify(style));`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                下面的 JSX 属性名有什么问题？
              </p>
              <CodeExercise
                initialCode={`var x="card", y=0; console.log(x); console.log(y);`}
                expectedOutput={`card\n0`}
              />
            </div>
          </section>

          {/* Section 3: 表达式嵌入 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. 表达式嵌入</h2>
            <p className="text-slate-300 mb-4">
              JSX 中可以用 <code className="text-cyan-300">{'{}'}</code> 嵌入任何 JavaScript 表达式。
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">3.1 嵌入变量</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`const name = "张三";
const age = 25;

console.log("姓名:", name);
console.log("年龄:", age);

// JSX 中 {name} 和 {age} 会显示这些值`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">3.2 嵌入表达式</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`const a = 10;
const b = 20;

// 可以嵌入任何表达式
const sum = a + b;
const message = a > b ? "a更大" : "b更大或相等";

console.log(sum);
console.log(message);`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                给定用户名和在线状态，显示不同的欢迎消息
              </p>
              <CodeExercise
                initialCode={`const userName = "李四";
const isOnline = true;

// 根据状态显示不同消息
const statusText = isOnline ? "在线" : "离线";
const welcomeMessage = "欢迎, " + userName + "! 当前状态: " + statusText;

console.log(welcomeMessage);

// 另一个用户
const user2Name = "王五";
const isOnline2 = false;

const welcome2 = "欢迎, " + user2Name + "! 当前状态: " + (isOnline2 ? "在线" : "离线");
console.log(welcome2);`}
                expectedOutput="欢迎, 李四! 当前状态: 在线\n欢迎, 王五! 当前状态: 离线"
              />
            </div>
          </section>

          {/* Section 4: 条件渲染 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. 条件渲染</h2>
            <p className="text-slate-300 mb-4">
              根据条件决定渲染什么内容。
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">4.1 三元运算符</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`const isLoggedIn = true;

// 条件 ? 真时返回 : 假时返回
const greeting = isLoggedIn
  ? "欢迎回来！"
  : "请登录";

console.log(greeting);`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">4.2 && 运算符</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`const hasNotification = true;
const notificationCount = 5;

// hasNotification && 内容：当 hasNotification 为 true 时渲染内容
// false && 内容：什么都不渲染

const showNotification = hasNotification && notificationCount > 0;

console.log("显示通知:", showNotification);
console.log("通知数量:", notificationCount);`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">4.3 || 运算符（默认值）</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 假值时的默认值
const username = null;
const displayName = username || "匿名用户";

console.log("显示名称:", displayName);

// 类似 ES6 的 ||
const count = 0;
const displayCount = count || "无";

console.log("计数:", displayCount);`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个简单的权限检查：根据 isAdmin 和 isVip 决定显示什么内容
              </p>
              <CodeExercise
                initialCode={`// 权限检查
function checkAccess(isAdmin, isVip) {
  if (isAdmin) return "管理员权限";
  if (isVip) return "VIP 权限";
  return "普通用户权限";
}

// 测试不同组合
console.log(checkAccess(true, false));
console.log(checkAccess(false, true));
console.log(checkAccess(false, false));`}
                expectedOutput="管理员权限\nVIP 权限\n普通用户权限"
              />
            </div>
          </section>

          {/* Section 5: 列表渲染 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. 列表渲染</h2>
            <p className="text-slate-300 mb-4">
              用 <code className="text-cyan-300">map</code> 遍历数组生成多个元素。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 数组
const fruits = ["苹果", "香蕉", "橙子", "葡萄"];

// map 遍历数组，返回新数组
const listItems = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}));

console.log("水果列表:");
listItems.forEach(item => {
  console.log("- " + item.name);
});

// 过滤
const longNames = fruits.filter(f => f.length > 2);
console.log("长度大于2:", longNames);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                给定一个用户数组，过滤出成年人（age &gt;= 18），然后打印他们的名字
              </p>
              <CodeExercise
                initialCode={`const users = [
  { name: "张三", age: 15 },
  { name: "李四", age: 25 },
  { name: "王五", age: 17 },
  { name: "赵六", age: 30 }
];

// 过滤成年人
const adults = users.filter(u => u.age >= 18);

// 打印名字
console.log("成年人:");
adults.forEach(u => console.log("-", u.name));

// 统计成年人数量
console.log("成年人数:", adults.length);`}
                expectedOutput="成年人:\n- 李四\n- 赵六\n成年人数: 2"
              />
            </div>
          </section>

          {/* Section 6: 样式处理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. 样式处理</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">6.1 内联样式</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 内联样式用对象
const styles = {
  color: "white",
  backgroundColor: "blue",
  padding: "10px 20px",
  borderRadius: "5px"
};

console.log("styles:", JSON.stringify(styles));`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">6.2 动态样式</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 根据状态应用不同样式
function getButtonStyle(isPrimary) {
  return {
    backgroundColor: isPrimary ? "#007bff" : "#6c757d",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px"
  };
}

const primaryBtn = getButtonStyle(true);
const secondaryBtn = getButtonStyle(false);

console.log("主要按钮:", primaryBtn.backgroundColor);
console.log("次要按钮:", secondaryBtn.backgroundColor);`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个根据温度显示不同颜色的函数
              </p>
              <CodeExercise
                initialCode={`// 根据温度返回颜色
function getTempColor(temp) {
  if (temp < 0) return "blue";
  if (temp < 15) return "cyan";
  if (temp < 25) return "green";
  if (temp < 35) return "orange";
  return "red";
}

console.log("-5°C:", getTempColor(-5));
console.log("10°C:", getTempColor(10));
console.log("20°C:", getTempColor(20));
console.log("30°C:", getTempColor(30));
console.log("40°C:", getTempColor(40));`}
                expectedOutput="-5°C: blue\n10°C: cyan\n20°C: green\n30°C: orange\n40°C: red"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• JSX 是 JavaScript 的语法扩展，允许在 JS 中写类 HTML 语法</li>
              <li>• JSX 元素必须只有一个根元素，可以用 <code className="text-cyan-300">&lt;&gt;</code> 包裹</li>
              <li>• 自闭合标签必须带 <code className="text-cyan-300">/</code></li>
              <li>• 用 <code className="text-cyan-300">{'{}'}</code> 嵌入表达式</li>
              <li>• 条件渲染用三元运算符或 && / ||</li>
              <li>• 列表渲染用 <code className="text-cyan-300">map</code></li>
              <li>• 内联样式用对象，属性用 camelCase</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个用户卡片渲染函数：根据用户数据渲染卡片内容
              </p>
              <CodeExercise
                initialCode={`const users = [
  { id: 1, name: "张三", age: 25, isOnline: true },
  { id: 2, name: "李四", age: 17, isOnline: false },
  { id: 3, name: "王五", age: 30, isOnline: true }
];

// 渲染用户卡片
function renderUserCard(user) {
  const status = user.isOnline ? "在线" : "离线";
  const ageLabel = user.age >= 18 ? "成年人" : "未成年";
  return user.name + " | " + ageLabel + " | " + status;
}

// 渲染所有卡片
console.log("=== 用户卡片列表 ===");
users.forEach(user => {
  console.log(renderUserCard(user));
});`}
                expectedOutput="=== 用户卡片列表 ===\n张三 | 成年人 | 在线\n李四 | 未成年 | 离线\n王五 | 成年人 | 在线"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link
              href="/lessons/l4"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 transition-colors"
            >
              ← L4 泛型入门
            </Link>
            <Link
              href="/lessons/l6"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white transition-colors"
            >
              L6 组件基础 →
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
          const formatted = args.map(arg => {
            if (typeof arg === "object") {
              return JSON.stringify(arg);
            }
            return String(arg);
          }).join(" ");
          logs.push(formatted);
        },
        error: (...args: unknown[]) => logs.push("Error: " + args.map(String).join(" ")),
        warn: (...args: unknown[]) => logs.push("Warn: " + args.map(String).join(" ")),
      };

      const fn = new Function("console", code);
      fn(customConsole);

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
        <button
          onClick={handleRun}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white font-medium transition-colors"
        >
          运行代码
        </button>
        {expectedOutput && (
          <button
            onClick={() => setShowExpected(!showExpected)}
            className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded text-white font-medium transition-colors"
          >
            {showExpected ? "隐藏答案" : "显示答案"}
          </button>
        )}
      </div>

      {result && (
        <div className={`rounded p-3 ${result.error ? "bg-red-900/50 border border-red-700" : "bg-slate-900 border border-slate-600"}`}>
          <p className="text-slate-400 text-xs mb-1">输出：</p>
          <pre className={`text-sm font-mono whitespace-pre-wrap ${result.error ? "text-red-400" : "text-emerald-400"}`}>
            {result.error ? `错误: ${result.error}` : result.output}
          </pre>
        </div>
      )}

      {showExpected && expectedOutput && (
        <div className="bg-emerald-900/30 border border-emerald-700 rounded p-3">
          <p className="text-emerald-400 text-xs mb-1">预期输出：</p>
          <pre className="text-emerald-300 text-sm font-mono whitespace-pre-wrap">{expectedOutput}</pre>
        </div>
      )}
    </div>
  );
}