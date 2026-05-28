"use client";

import Link from "next/link";
import { useState } from "react";

export default function L4Page() {
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
              L4
            </span>
            <h1 className="text-xl font-bold">泛型入门</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是泛型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. 什么是泛型？</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <span className="font-bold text-white">泛型（Generics）</span>：让代码能够适用于多种类型，而不是单一类型。
              就像后端的 <code className="text-cyan-300">T&lt;T&gt;</code>（Java）或 <code className="text-cyan-300">T</code>（Go）。
            </p>

            <div className="bg-slate-900 rounded p-4 mb-4">
              <p className="text-amber-400 font-medium mb-2">没有泛型的问题：</p>
              <pre className="text-slate-300 text-sm">{`// 只能处理字符串
function identity(arg) {
  return arg;
}

// 需要重复编写类似函数`}</pre>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-700 rounded p-4 mb-4">
              <p className="text-emerald-400 font-medium mb-2">泛型的解决方案：</p>
              <pre className="text-slate-300 text-sm">{`// 一个函数，适用于任何类型
function identity(arg) {
  return arg;
}

// 使用时指定类型
const str = identity("hello");
const num = identity(123);

console.log(str, num);`}</pre>
            </div>

            <div className="bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个泛型函数 echo，返回传入的值本身
              </p>
              <CodeExercise
                initialCode={`// 泛型函数
function echo(arg) {
  return arg;
}

// 测试
console.log(echo("你好"));
console.log(echo(123));
console.log(echo({ name: "张三" }));`}
                expectedOutput={`你好\n123\n{"name":"张三"}`}
              />
            </div>
          </section>

          {/* Section 2: 泛型函数 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. 泛型函数</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.1 多个类型参数</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 多个泛型参数
function pair(a, b) {
  return [a, b];
}

const p1 = pair(1, "one");
const p2 = pair("key", true);

console.log(p1);
console.log(p2);`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.2 泛型约束</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 约束泛型必须具有某个属性
function getProperty(obj, key) {
  return obj[key];
}

const user = {
  name: "张三",
  age: 25,
  email: "zhang@example.com"
};

// 获取属性
const name = getProperty(user, "name");
const age = getProperty(user, "age");

console.log("name:", name);
console.log("age:", age);`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">2.3 数组类型</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 泛型在数组中的应用
function firstElement(arr) {
  return arr[0];
}

function lastElement(arr) {
  return arr[arr.length - 1];
}

const nums = [1, 2, 3, 4, 5];
const strs = ["a", "b", "c"];

console.log("first:", firstElement(nums));
console.log("last:", lastElement(nums));
console.log("first str:", firstElement(strs));`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个函数 swap，交换数组的前两个元素的位置
              </p>
              <CodeExercise
                initialCode={`// 交换数组前两个元素
function swap(arr) {
  if (arr.length < 2) return arr;
  [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr;
}

// 测试
const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c"];

console.log(swap([...arr1]));
console.log(swap([...arr2]));`}
                expectedOutput={`[2,1,3,4]\n["b","a","c"]`}
              />
            </div>
          </section>

          {/* Section 3: 泛型接口 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. 泛型接口</h2>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 泛型接口：接口也可以带类型参数
const createPair = (key, value) => ({ key, value });

const pair1 = createPair("age", 25);
const pair2 = createPair(1, "one");

console.log(pair1);
console.log(pair2);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                定义一个 Response 对象结构，带泛型表示数据内容
              </p>
              <CodeExercise
                initialCode={`// 泛型响应
function createResponse(code, message, data) {
  return { code, message, data };
}

// 字符串数据响应
const strResponse = createResponse(200, "成功", "Hello World");

// 对象数据响应
const objResponse = createResponse(200, "成功", { name: "张三", age: 25 });

console.log(strResponse);
console.log(objResponse);`}
                expectedOutput={`{"code":200,"message":"成功","data":"Hello World"}\n{"code":200,"message":"成功","data":{"name":"张三","age":25}}`}
              />
            </div>
          </section>

          {/* Section 4: 泛型类 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. 泛型类</h2>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 泛型类：类也可以带类型参数
class Container {
  constructor(content) {
    this.content = content;
  }

  get() {
    return this.content;
  }

  set(value) {
    this.content = value;
  }
}

const strContainer = new Container("Hello");
const numContainer = new Container(123);

console.log(strContainer.get());
console.log(numContainer.get());

strContainer.set("World");
console.log(strContainer.get());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 Stack（栈）类，支持 push、pop、peek 操作
              </p>
              <CodeExercise
                initialCode={`// 栈类
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  get size() {
    return this.items.length;
  }
}

// 测试
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("peek:", stack.peek());
console.log("pop:", stack.pop());
console.log("size:", stack.size);`}
                expectedOutput="peek: 3\npop: 3\nsize: 2"
              />
            </div>
          </section>

          {/* Section 5: 常见泛型模式 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. 常见泛型模式</h2>
            <p className="text-slate-300 mb-4">
              了解一些常见的泛型使用模式。
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">5.1 延迟类型推断</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 模拟 Partial
const partial = (obj) => ({ ...obj });

// 模拟 Pick
const pick = (obj, keys) => {
  const result = {};
  keys.forEach(k => result[k] = obj[k]);
  return result;
};

// 模拟 Omit
const omit = (obj, keys) => {
  const result = { ...obj };
  keys.forEach(k => delete result[k]);
  return result;
};

const user = { name: "张三", age: 25, email: "zhang@example.com", password: "secret" };

console.log("partial:", partial({ age: 30 }));
console.log("pick:", pick(user, ["name", "email"]));
console.log("omit:", omit(user, ["password"]));`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个 merge 函数，合并两个对象
              </p>
              <CodeExercise
                initialCode={`// 合并两个对象
function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const user1 = { id: 1, name: "张三" };
const user2 = { age: 25, email: "zhang@example.com" };

console.log(merge(user1, user2));`}
                expectedOutput={`{"id":1,"name":"张三","age":25,"email":"zhang@example.com"}`}
              />
            </div>
          </section>

          {/* Section 6: 泛型约束进阶 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. 泛型约束进阶</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.1 确保对象有 id</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 要求对象必须有 id 属性
function processEntity(entity) {
  return "Processing " + entity.id;
}

const validEntity = { id: "1", name: "Test", data: {} };
const invalidEntity = { name: "Test" }; // 没有 id

console.log(processEntity(validEntity));
// console.log(processEntity(invalidEntity));  // 运行时才会发现错误`}</pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">6.2 多重约束</h3>
                <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// 合并多个约束
function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const result = merge(
  { id: 1, name: "张三" },
  { age: 25, email: "zhang@example.com" }
);
console.log(result);`}</pre>
              </div>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                写一个函数 combine，将两个数组合并成一个，并去重
              </p>
              <CodeExercise
                initialCode={`// 合并两个数组并去重
function combine(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// 测试
const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];
console.log("合并数字:", combine(nums1, nums2));

const strs1 = ["a", "b", "c"];
const strs2 = ["b", "c", "d"];
console.log("合并字符串:", combine(strs1, strs2));`}
                expectedOutput={`合并数字: [1,2,3,4,5,6]\n合并字符串: ["a","b","c","d"]`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• 泛型让代码能够适用于多种类型</li>
              <li>• 泛型可以用于函数、接口、类</li>
              <li>• <code className="text-cyan-300">&lt;T&gt;</code> 表示类型参数，可以在声明时指定或自动推断</li>
              <li>• 常见模式：Partial、Pick、Omit、merge、combine</li>
              <li>• 约束可以用 <code className="text-cyan-300">extends</code> 或运行时检查</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个简单的 Cache 类：<br />
                - 支持 set(key, value) 和 get(key)<br />
                - 支持 delete(key) 和 clear()<br />
                - 支持 size 属性
              </p>
              <CodeExercise
                initialCode={`// 缓存类
class Cache {
  constructor() {
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }

  delete(key) {
    return this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }

  get size() {
    return this.store.size;
  }
}

// 测试
const cache = new Cache();
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);

console.log("size:", cache.size);
console.log("get a:", cache.get("a"));
console.log("delete b:", cache.delete("b"));
console.log("size after delete:", cache.size);`}
                expectedOutput="size: 3\nget a: 1\ndelete b: true\nsize after delete: 2"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link
              href="/lessons/l3"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 transition-colors"
            >
              ← L3 函数类型
            </Link>
            <Link
              href="/lessons/l5"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
            >
              L5 JSX 基础 →
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