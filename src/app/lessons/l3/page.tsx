"use client";

import Link from "next/link";
import { useState } from "react";

export default function L3Page() {
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
            <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L3
            </span>
            <h1 className="text-xl font-bold">函数类型</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 函数声明 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. 函数声明与箭头函数</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              TypeScript 中函数可以声明类型，包括参数类型和返回值类型。
              箭头函数是更简洁的函数写法。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 函数声明
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// 箭头函数
const add = (a: number, b: number): number => {
  return a + b;
};

// 简写（隐式返回）
const multiply = (a: number, b: number): number => a * b;

// 使用
console.log(greet("张三"));
console.log("3 + 5 =", add(3, 5));
console.log("3 * 5 =", multiply(3, 5));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个函数计算矩形面积（宽 * 高），和计算三角形面积（底 * 高 / 2）
              </p>
              <CodeExercise
                initialCode={`// 计算矩形面积
// function rectangleArea(width, height) { ... }

// 计算三角形面积
// function triangleArea(base, height) { ... }

// 测试
const rect = rectangleArea(5, 3);
const tri = triangleArea(6, 4);

console.log("矩形面积:", rect);
console.log("三角形面积:", tri);`}
                expectedOutput={`// 计算矩形面积
function rectangleArea(width, height) {
  return width * height;
}

// 计算三角形面积
function triangleArea(base, height) {
  return (base * height) / 2;
}

// 测试
const rect = rectangleArea(5, 3);
const tri = triangleArea(6, 4);

console.log("矩形面积:", rect);
console.log("三角形面积:", tri);`}
              />
            </div>
          </section>

          {/* Section 2: 参数类型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. 参数类型与返回值</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.1 必填参数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 所有参数都必须提供
function createUser(name, age) {
  return \`\${name}, \${age}岁\`;
}

console.log(createUser("张三", 25)); // 正确
// console.log(createUser("张三"));  // 错误！缺少 age 参数`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.2 可选参数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 用 ? 标记可选参数，可选参数必须在必填参数之后
function createUser(name, age) {
  if (age !== undefined) {
    return \`\${name}, \${age}岁\`;
  }
  return \`\${name}, 年龄保密\`;
}

console.log(createUser("张三", 25));  // 张三, 25岁
console.log(createUser("李四"));      // 李四, 年龄保密`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.3 默认参数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 默认参数：如果没传，就使用默认值
function greet(name, greeting = "你好") {
  return \`\${greeting}, \${name}！\`;
}

console.log(greet("张三"));           // 你好, 张三！
console.log(greet("李四", "早上好")); // 早上好, 李四！`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.4 剩余参数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// ...numbers 收集剩余参数为数组
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("总和:", sum(1, 2, 3));         // 6
console.log("总和:", sum(1, 2, 3, 4, 5)); // 15`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个函数，接收一个名字和一个可选的职位（默认是"工程师"），返回介绍字符串
              </p>
              <CodeExercise
                initialCode={`function introduce(name, title) {

}

console.log(introduce("张三"));
console.log(introduce("李四", "产品经理"));
console.log(introduce("王五", "设计师"));`}
                expectedOutput={`function introduce(name, title = "工程师") {
  return name + " - " + title;
}

console.log(introduce("张三"));
console.log(introduce("李四", "产品经理"));
console.log(introduce("王五", "设计师"));`}
              />
            </div>
          </section>

          {/* Section 3: 函数作为参数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. 函数作为参数和返回值</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.1 高阶函数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 高阶函数：接收函数作为参数
function operation(a, b, fn) {
  return fn(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operation(3, 5, add));      // 8
console.log(operation(3, 5, multiply)); // 15`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.2 工厂函数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 返回函数的工厂函数
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("double(5):", double(5));  // 10
console.log("triple(5):", triple(5)); // 15`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">3.3 类型别名</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 给函数类型起个别名
const calculate = (a, b, fn) => fn(a, b);

const subtract = (x, y) => x - y;

console.log(calculate(10, 3, subtract)); // 7`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个计算器工厂，可以生成加法、减法、乘法函数
              </p>
              <CodeExercise
                initialCode={`// 创建一个计算器工厂
// function createCalculator(op) { ... }
// 返回一个函数，根据 op 执行 + - *

const add = createCalculator("add");
const subtract = createCalculator("subtract");
const multiply = createCalculator("multiply");

console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
console.log("10 * 5 =", multiply(10, 5));`}
                expectedOutput={`// 创建一个计算器工厂
// function createCalculator(op) { ... }
// 返回一个函数，根据 op 执行 + - *
function createCalculator(op) {
  return function(a, b) {
    if (op === "add") return a + b;
    if (op === "subtract") return a - b;
    if (op === "multiply") return a * b;
  };
}

const add = createCalculator("add");
const subtract = createCalculator("subtract");
const multiply = createCalculator("multiply");

console.log("10 + 5 =", add(10, 5));
console.log("10 - 5 =", subtract(10, 5));
console.log("10 * 5 =", multiply(10, 5));`}
              />
            </div>
          </section>

          {/* Section 4: void 和 never */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. void 和 never</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.1 void（没有返回值）</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// void 表示函数不返回任何值
function logMessage(message) {
  console.log("日志:", message);
  // 没有 return 语句
}

const result = logMessage("测试");
console.log("result:", result); // undefined`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">4.2 never（永远不会返回）</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// never 表示函数永远不会正常返回
function throwError(message) {
  throw new Error(message);
}

function infiniteLoop() {
  while (true) {
    // 无限循环
  }
}

// 调用会抛出异常
try {
  throwError("出错了！");
} catch (e) {
  console.log("捕获到错误:", e.message);
}`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个 validate 函数：如果值小于 0 就抛出错误，否则返回 "有效"
              </p>
              <CodeExercise
                initialCode={`// 写一个 validate 函数
// 如果值小于 0 就抛出错误，否则返回 "有效"

console.log(validate(10));
try {
  console.log(validate(-1));
} catch (e) {
  console.log("捕获到错误:", e.message);
}`}
                expectedOutput={`// 写一个 validate 函数
// 如果值小于 0 就抛出错误，否则返回 "有效"
function validate(value) {
  if (value < 0) {
    throw new Error("值不能为负数");
  }
  return "有效";
}

// 测试
console.log(validate(10));
try {
  console.log(validate(-1));
} catch (e) {
  console.log("捕获到错误:", e.message);
}`}
              />
            </div>
          </section>

          {/* Section 5: 回调函数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. 回调函数模式</h2>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 处理数组的常见模式
const numbers = [1, 2, 3, 4, 5];

// map: 转换每个元素
const doubled = numbers.map(n => n * 2);
console.log("加倍:", doubled);

// filter: 过滤元素
const evens = numbers.filter(n => n % 2 === 0);
console.log("偶数:", evens);

// reduce: 汇总元素
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("总和:", sum);

// 组合使用
const result = numbers
  .filter(n => n > 2)      // [3, 4, 5]
  .map(n => n * 2)          // [6, 8, 10]
  .reduce((total, n) => total + n, 0);
console.log("大于2的数加倍后求和:", result);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                给定一个水果数组，用 filter 找出包含"果"字的水果，用 map 把它们变成大写
              </p>
              <CodeExercise
                initialCode={`// 给定一个水果数组
// const fruits = ["苹果", "香蕉", "葡萄", "草莓", "橙子"];

// 找出包含"果"的水果
// const withGuo = fruits.filter(...);

// 变成大写
// const upper = withGuo.map(...);

console.log("包含果:", withGuo);
console.log("大写:", upper);`}
                expectedOutput={`// 给定一个水果数组
const fruits = ["苹果", "香蕉", "葡萄", "草莓", "橙子"];

// 找出包含"果"的水果
const withGuo = fruits.filter(f => f.includes("果"));

// 变成大写
const upper = withGuo.map(f => f.toUpperCase());

console.log("包含果:", withGuo);
console.log("大写:", upper);`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• 函数声明和箭头函数都可以标注类型</li>
              <li>• <code className="text-cyan-300">?</code> 标记可选参数，默认参数用 <code className="text-cyan-300">=</code></li>
              <li>• <code className="text-cyan-300">...args</code> 收集剩余参数为数组</li>
              <li>• 函数可以作为参数或返回值（高阶函数）</li>
              <li>• <code className="text-cyan-300">void</code> 表示不返回值，<code className="text-cyan-300">never</code> 表示永不返回</li>
              <li>• map/filter/reduce 是处理数组的常用模式</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个数组工具函数：<br />
                - filterEven：过滤偶数<br />
                - squareAll：所有元素平方<br />
                - chainProcess：先过滤偶数再平方再求和
              </p>
              <CodeExercise
                initialCode={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 过滤偶数
// const filterEven = arr => ...

// 所有元素平方
// const squareAll = arr => ...

// 先过滤偶数再平方再求和
// const chainProcess = arr => ...

// 测试
console.log("偶数:", filterEven(numbers));
console.log("平方:", squareAll(numbers));
console.log("链式处理结果:", chainProcess(numbers));`}
                expectedOutput={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 过滤偶数
const filterEven = arr => arr.filter(n => n % 2 === 0);

// 所有元素平方
const squareAll = arr => arr.map(n => n * n);

// 先过滤偶数再平方再求和
const chainProcess = arr => {
  const evens = filterEven(arr);
  const squared = squareAll(evens);
  return squared.reduce((sum, n) => sum + n, 0);
};

// 测试
console.log("偶数:", filterEven(numbers));
console.log("平方:", squareAll(numbers));
console.log("链式处理结果:", chainProcess(numbers));`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link
              href="/lessons/l2"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 transition-colors"
            >
              ← L2 接口与类型别名
            </Link>
            <Link
              href="/lessons/l4"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
            >
              L4 泛型入门 →
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