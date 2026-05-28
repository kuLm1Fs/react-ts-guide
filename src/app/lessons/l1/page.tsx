"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

// ============= 错误根源：TSX 必须是 JSX 组件 =============
// 纯 markdown 或 普通文本 都会导致解析错误

export default function L1Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header - 每个课程页面都有返回按钮 */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm transition-colors"
            >
              ← 返回课程列表
            </Link>
            <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L1
            </span>
            <h1 className="text-xl font-bold">TypeScript 环境与基础类型</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: TypeScript 是什么 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. TypeScript 是什么？</h2>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                <span className="font-bold text-white">一句话解释</span>：TypeScript = JavaScript + 类型系统
              </p>

              <div className="bg-slate-900 rounded p-4">
                <p className="text-amber-400 font-medium mb-2">JavaScript（动态类型）</p>
                <pre className="text-slate-300 text-sm">{`// JS - 运行时才发现问题
let name = "张三";
name = 123; // 不报错，但运行时会出问题`}</pre>
              </div>

              <div className="bg-slate-900 rounded p-4">
                <p className="text-emerald-400 font-medium mb-2">TypeScript（静态类型）</p>
                <pre className="text-slate-300 text-sm">{`// TS - 编译时就报错
let name: string = "张三";
name = 123; // ❌ Type 'number' is not assignable to type 'string'`}</pre>
              </div>

              <div className="bg-slate-700/50 rounded p-4">
                <p className="text-purple-400 font-medium mb-2">为什么值得学？（来自后端视角）</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 你写的后端代码不会因为 <code className="text-cyan-300">userId</code> 传了个对象而崩溃</li>
                  <li>• 重构时敢改类型，编译器帮你检查所有调用方</li>
                  <li>• 接口文档即类型定义</li>
                </ul>
              </div>
            </div>

            {/* Exercise 1.1 */}
            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                根据上面的例子，用代码验证 JS 的动态类型特性：
              </p>
              <CodeExercise
                initialCode={`// 验证 JS 的动态类型特性
// 声明一个变量，先赋值字符串，再赋值数字
// 观察会发生什么

`}
                expectedOutput={`// JS 动态类型示例
let value = "hello";
value = 123; // JS 允许，TS 不允许
console.log(value);`}
              />
            </div>
          </section>

          {/* Section 2: 环境 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. 环境配置</h2>
            <p className="text-slate-300 mb-4">你的项目已经配置好了 TypeScript 环境（tsconfig.json）</p>
            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 overflow-x-auto">{`{
  "compilerOptions": {
    "target": "ES2017",        // 编译到哪个 JS 版本
    "lib": ["dom", "es2017"],  // 支持的 API
    "strict": true             // 严格模式 - 必须类型检查
  }
}`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                打开 <code className="text-cyan-300">tsconfig.json</code> 文件，看看有哪些配置项。
              </p>
              <textarea
                placeholder="我看到 tsconfig.json 里有这些配置..."
                className="w-full h-20 bg-slate-800 border border-slate-600 rounded p-3 text-slate-200 text-sm resize-y"
              />
            </div>
          </section>

          {/* Section 3: 基础类型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. 基础类型注解</h2>

            <div className="space-y-6">
              {/* 3.1 基础类型 */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.1 基础类型</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 字符串
let name: string = "张三";
let greeting: string = \`Hello, \${name}\`;

// 数字
let age: number = 25;
let price: number = 99.9;

// 布尔
let isActive: boolean = true;`}</pre>

                <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
                  <h4 className="text-md font-semibold text-amber-400 mb-3">练习 3.1</h4>
                  <p className="text-slate-300 text-sm mb-3">声明变量保存你的信息，然后打印出来：</p>
                  <CodeExercise
                    initialCode={`// 声明你的信息
// const myName = ...
// const myAge = ...
// const isEmployed = ...

// 打印输出
console.log("姓名:", myName);
console.log("年龄:", myAge);
console.log("在职:", isEmployed);`}
                    expectedOutput={`// 声明你的信息
const myName = "小明";
const myAge = 25;
const isEmployed = true;

// 打印输出
console.log("姓名:", myName);
console.log("年龄:", myAge);
console.log("在职:", isEmployed);`}
                  />
                </div>
              </div>

              {/* 3.2 const vs let */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.2 const vs let（重要！）</h3>
                <p className="text-slate-400 text-sm mb-3">这是 TS 最核心的概念之一：</p>

                <div className="bg-red-900/30 border border-red-700 rounded p-4 mb-3">
                  <p className="text-red-400 text-sm font-medium mb-2">❌ 用 let 声明对象 - 可以随意修改属性</p>
                  <pre className="text-slate-300 text-sm">{`let user = { name: "张三" };
user.name = "李四";      // 允许
user.age = 20;           // 也允许！`}</pre>
                </div>

                <div className="bg-emerald-900/30 border border-emerald-700 rounded p-4">
                  <p className="text-emerald-400 text-sm font-medium mb-2">✅ 用 const 声明 - 对象引用不能改，但属性可以改</p>
                  <pre className="text-slate-300 text-sm">{`const user = { name: "张三" };
user.name = "李四";      // 允许 - 属性可以改
// user = { name: "王五" } // 不允许 - 引用不能改`}</pre>
                </div>

                <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
                  <h4 className="text-md font-semibold text-amber-400 mb-3">练习 3.2</h4>
                  <p className="text-slate-300 text-sm mb-3">下面代码会输出什么？先猜，再运行验证：</p>
                  <CodeExercise
                    initialCode={`// 创建一个用户对象
// 包含 name 和 age 属性

// 修改 name 属性
// person.name = "李四";

// 打印验证

// 尝试解注释下一行，看看会发生什么
// person = { name: "王五" };`}
                    expectedOutput={`const person = { name: "张三" };
person.name = "李四";
console.log(person.name);

// 尝试解注释下一行，看看会发生什么
// person = { name: "王五" };`}
                  />
                </div>
              </div>

              {/* 3.3 数组和元组 */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.3 数组和元组</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 数组
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["张三", "李四"];

// 元组 - 固定长度、固定类型（想象数据库一行）
let coord: [number, number] = [120.1, 30.2]; // 经纬度
let RGB: [number, number, number] = [255, 128, 0];`}</pre>

                <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
                  <h4 className="text-md font-semibold text-amber-400 mb-3">练习 3.3</h4>
                  <p className="text-slate-300 text-sm mb-3">创建一个数组存多个水果名，然后打印第二个：</p>
                  <CodeExercise
                    initialCode={`// 水果数组
// const fruits = ...

// 打印第二个水果（数组索引从 0 开始）
console.log("第二个水果:", fruits[1]);
console.log("数组长度:", fruits.length);`}
                    expectedOutput={`// 水果数组
const fruits = ["苹果", "香蕉", "橙子", "葡萄"];

// 打印第二个水果（数组索引从 0 开始）
console.log("第二个水果:", fruits[1]);
console.log("数组长度:", fruits.length);`}
                  />
                </div>
              </div>

              {/* 3.4 枚举 */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.4 枚举</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 数字枚举（默认从 0 开始）
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// 使用
const move = Direction.Up;
if (move === Direction.Up) {
  console.log("向上移动");
}`}</pre>

                <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
                  <h4 className="text-md font-semibold text-amber-400 mb-3">练习 3.4</h4>
                  <p className="text-slate-300 text-sm mb-3">创建一个订单状态枚举，并使用它：</p>
                  <CodeExercise
                    initialCode={`// 订单状态枚举
// 使用对象表示状态

// 使用
// const myOrder = ...

// 判断订单是否已发货
// if (myOrder === ...) { ... }`}
                    expectedOutput={`// 订单状态枚举
const OrderStatus = {
  Pending: "PENDING",
  Paid: "PAID",
  Shipped: "SHIPPED",
  Delivered: "DELIVERED"
};

// 使用
const myOrder = OrderStatus.Paid;
console.log("我的订单状态:", myOrder);

// 判断
if (myOrder === OrderStatus.Shipped || myOrder === OrderStatus.Delivered) {
  console.log("订单已发货");
} else {
  console.log("订单还在处理中");
}`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: 函数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. 函数</h2>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 函数声明
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// 箭头函数
const add = (a: number, b: number): number => {
  return a + b;
};

// 可选参数
function createUser(name: string, age?: number): string {
  if (age !== undefined) {
    return \`\${name}, \${age}岁\`;
  }
  return name;
}`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h4 className="text-md font-semibold text-amber-400 mb-3">练习 4.1</h4>
              <p className="text-slate-300 text-sm mb-3">写一个函数计算两个数的和：</p>
              <CodeExercise
                initialCode={`// 写一个函数计算两个数的和
// function sum(a, b) { ... }

console.log("3 + 5 =", sum(3, 5));
console.log("10 + 20 =", sum(10, 20));`}
                expectedOutput={`// 写一个函数计算两个数的和
function sum(a, b) {
  return a + b;
}

console.log("3 + 5 =", sum(3, 5));
console.log("10 + 20 =", sum(10, 20));`}
              />
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h4 className="text-md font-semibold text-amber-400 mb-3">练习 4.2</h4>
              <p className="text-slate-300 text-sm mb-3">写一个函数，接受名字和年龄（可选），返回问候语：</p>
              <CodeExercise
                initialCode={`// 写一个 greet 函数
// 接收 name 和可选的 age 参数
// 如果有 age，返回 "你好，name！你age岁了。"
// 如果没有 age，返回 "你好，name！"

console.log(greet("张三"));
console.log(greet("李四", 25));`}
                expectedOutput={`// 写一个 greet 函数
function greet(name, age) {
  if (age !== undefined) {
    return \`你好，\${name}！你\${age}岁了。\`;
  }
  return \`你好，\${name}！\`;
}

console.log(greet("张三"));
console.log(greet("李四", 25));`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• TypeScript = JavaScript + 类型系统，编译时发现问题</li>
              <li>• 尽量用 <code className="text-cyan-300">const</code> 而不是 <code className="text-cyan-300">let</code></li>
              <li>• 数组用 <code className="text-cyan-300">[]</code>，可用索引访问</li>
              <li>• 枚举用于一组命名常量</li>
              <li>• 函数可以声明类型（参数和返回值）</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">创建一个用户管理系统：</p>
              <CodeExercise
                initialCode={`// 用户对象
// const user = { name: ..., email: ..., age: ... };

// 函数打印用户简介
// function printProfile(user) { ... }

printProfile(user);`}
                expectedOutput={`// 用户对象
const user = {
  name: "张三",
  email: "zhangsan@example.com",
  age: 25
};

// 函数打印用户简介
function printProfile(user) {
  console.log("姓名:", user.name);
  console.log("邮箱:", user.email);
  console.log("年龄:", user.age);
}

printProfile(user);`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <span className="text-slate-500">这是第一课</span>
            <Link
              href="/lessons/l2"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
            >
              L2 接口与类型别名 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// 可运行代码练习组件
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
        log: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
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