"use client";

import Link from "next/link";
import { useState } from "react";

export default function L2Page() {
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
              L2
            </span>
            <h1 className="text-xl font-bold">接口与类型别名</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是接口 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. 什么是接口？</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <span className="font-bold text-white">接口（Interface）</span>：描述对象的脸（Shape）。
              就像后端的数据库表结构，定义了这个对象有哪些字段、每个字段是什么类型。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 定义一个用户接口
interface User {
  name: string;
  age: number;
  email: string;
}

// 使用接口
const user: User = {
  name: "张三",
  age: 25,
  email: "zhangsan@example.com"
};`}</pre>

            <div className="bg-emerald-900/30 border border-emerald-700 rounded p-4">
              <p className="text-emerald-400 text-sm">
                💡 后端视角：Interface 就像 Java/Go 的 class，或数据库的 schema。
                定义了"这个对象长什么样"。
              </p>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">定义一个商品接口，包含：name（商品名）、price（价格）、stock（库存）</p>
              <CodeExercise
                initialCode={`// 定义商品接口
interface Product {
  name: string;
  price: number;
  stock: number;
}

// 创建商品对象
const product: Product = {
  name: "iPhone 15",
  price: 6999,
  stock: 100
};

console.log("商品:", product.name);
console.log("价格:", product.price);
console.log("库存:", product.stock);`}
                expectedOutput="商品: iPhone 15\n价格: 6999\n库存: 100"
              />
            </div>
          </section>

          {/* Section 2: type 别名 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. type 别名</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <span className="font-bold text-white">type</span>：给类型起个别名，类似后端的 typedef 或 alias。
              可以用来给基本类型、联合类型、对象类型起名字。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 基本类型别名
type ID = string | number;  // ID 可以是字符串或数字

// 对象类型别名
type Point = {
  x: number;
  y: number;
};

// 使用别名
const point: Point = { x: 10, y: 20 };
console.log(point);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">用 type 定义一个坐标类型，然后计算两个坐标的距离：</p>
              <CodeExercise
                initialCode={`// 定义坐标类型
type Coordinate = {
  x: number;
  y: number;
};

// 计算欧几里得距离
function distance(p1: Coordinate, p2: Coordinate): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// 测试
const pointA: Coordinate = { x: 0, y: 0 };
const pointB: Coordinate = { x: 3, y: 4 };

console.log("距离:", distance(pointA, pointB));`}
                expectedOutput="距离: 5"
              />
            </div>
          </section>

          {/* Section 3: interface vs type */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. interface vs type</h2>
            <p className="text-slate-300 mb-4">这是 TS 中最重要的概念之一，用表格对比：</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 px-3 text-slate-400">特性</th>
                    <th className="text-left py-2 px-3 text-cyan-400">interface</th>
                    <th className="text-left py-2 px-3 text-emerald-400">type</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">定义对象形状</td>
                    <td className="py-2 px-3">✅</td>
                    <td className="py-2 px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">可以被类实现（implements）</td>
                    <td className="py-2 px-3">✅</td>
                    <td className="py-2 px-3">❌</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">可以合并（声明合并）</td>
                    <td className="py-2 px-3">✅</td>
                    <td className="py-2 px-3">❌</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">可以描述联合类型</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3">✅</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-2 px-3">元组</td>
                    <td className="py-2 px-3">❌</td>
                    <td className="py-2 px-3">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-900/30 border border-red-700 rounded p-4 mb-3">
              <p className="text-red-400 text-sm font-medium mb-2">❌ 用 interface 的场景</p>
              <pre className="text-slate-300 text-sm">{`// 不要用 interface 描述联合类型
interface ID = string | number;  // 错误！

// 不要用 interface 描述元组
interface Pair = [string, number];  // 错误！`}</pre>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-700 rounded p-4">
              <p className="text-emerald-400 text-sm font-medium mb-2">✅ 经验法则</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 定义对象/类的形状 → 用 interface</li>
                <li>• 需要联合类型、元组、工具类型 → 用 type</li>
                <li>• 不确定时，先用 interface，需要时再改成 type</li>
              </ul>
            </div>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">判断以下场景应该用 interface 还是 type：</p>
              <CodeExercise
                initialCode={`// 场景1: 定义用户对象
interface User {
  name: string;
  age: number;
}

// 场景2: 定义 ID 类型（可能是字符串或数字）
type ID = string | number;

// 场景3: 定义配置对象
interface Config {
  theme: string;
  language: string;
}

// 场景4: 定义状态（可以是多个值之一）
type Status = "pending" | "active" | "done";

console.log("User:", typeof User);
console.log("ID:", typeof ID);
console.log("Status:", Status);`}
                expectedOutput="User: object\nID: string\nStatus: string"
              />
            </div>
          </section>

          {/* Section 4: 可选属性和只读属性 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. 可选属性和只读属性</h2>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`interface User {
  name: string;
  age: number;
  email?: string;      // 可选属性，用 ? 标记
  readonly id: string; // 只读属性，创建后不能修改
}

// 可选属性可以不提供
const user1: User = {
  name: "张三",
  age: 25,
  id: "001"  // id 必须提供
};
console.log(user1);

// 只读属性不能被修改
// user1.id = "002";  // 错误！`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">定义一个配置接口，只有 url 是必填的，其他都是可选：</p>
              <CodeExercise
                initialCode={`// 定义配置接口：url 必填，timeout、headers 可选
interface Config {
  url: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// 测试：提供所有字段
const config1: Config = {
  url: "https://api.example.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" }
};

// 测试：只提供必填字段
const config2: Config = {
  url: "https://api.example.com"
};

console.log("完整配置:", JSON.stringify(config1));
console.log("简化配置:", JSON.stringify(config2));`}
                expectedOutput={`完整配置: {"url":"https://api.example.com","timeout":5000,"headers":{"Content-Type":"application/json"}}
简化配置: {"url":"https://api.example.com"}`}
              />
            </div>
          </section>

          {/* Section 5: 继承 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. 继承（extends）</h2>
            <p className="text-slate-300 mb-4">
              接口可以继承其他接口，就像类的继承。可以复用已有接口的功能。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 基础接口
interface Animal {
  name: string;
  age: number;
}

// 继承 Animal，并添加新属性
interface Dog extends Animal {
  breed: string;  // 新增：品种
}

// 使用
const dog: Dog = {
  name: "旺财",
  age: 3,
  breed: "金毛"
};

console.log(dog.name, "是一只", dog.breed);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                设计一个继承关系：基础是 Shape（有 color 属性），然后 Circle 继承它并添加 radius，Rectangle 继承它并添加 width 和 height
              </p>
              <CodeExercise
                initialCode={`// 基础形状
interface Shape {
  color: string;
}

// 圆形
interface Circle extends Shape {
  radius: number;
}

// 矩形
interface Rectangle extends Shape {
  width: number;
  height: number;
}

// 创建实例
const circle: Circle = {
  color: "红色",
  radius: 5
};

const rect: Rectangle = {
  color: "蓝色",
  width: 10,
  height: 20
};

console.log("圆形:", JSON.stringify(circle));
console.log("矩形:", JSON.stringify(rect));`}
                expectedOutput={`圆形: {"color":"红色","radius":5}
矩形: {"color":"蓝色","width":10,"height":20}`}
              />
            </div>
          </section>

          {/* Section 6: 交叉类型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. 交叉类型（&）</h2>
            <p className="text-slate-300 mb-4">
              用 <code className="text-cyan-300">&</code> 可以合并多个类型，类似继承但更灵活。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`interface A {
  name: string;
}

interface B {
  age: number;
}

// 交叉类型：同时拥有 A 和 B 的属性
type AB = A & B;

const obj: AB = {
  name: "张三",
  age: 25
};

console.log(obj);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用交叉类型实现：创建一个 Admin 类型，同时有 name、age 和 role 属性
              </p>
              <CodeExercise
                initialCode={`// 使用交叉类型组合
type Name = { name: string };
type Age = { age: number };
type Role = { role: string };

// Admin 同时拥有三个属性
type Admin = Name & Age & Role;

const admin: Admin = {
  name: "管理员",
  age: 30,
  role: "super_admin"
};

console.log(admin.name, "-", admin.role);`}
                expectedOutput="管理员 - super_admin"
              />
            </div>
          </section>

          {/* Section 7: 索引签名 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. 索引签名</h2>
            <p className="text-slate-300 mb-4">
              当对象有动态属性时，用索引签名描述"键-值"对的关系。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 字符串索引签名：可以用任意字符串作为键
interface StringMap {
  [key: string]: string;
}

const headers: StringMap = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token",
  "X-Request-ID": "12345"
};

// 数字索引签名
interface NumberArray {
  [index: number]: string;
}

const fruits: NumberArray = ["苹果", "香蕉", "橙子"];
console.log(fruits[0]); // 苹果`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用索引签名实现一个计数器，可以动态添加任意名称的计数
              </p>
              <CodeExercise
                initialCode={`// 计数器接口
interface Counter {
  [item: string]: number;
}

const counter: Counter = {};

// 添加计数
counter["苹果"] = 5;
counter["香蕉"] = 3;
counter["苹果"]++; // 苹果的计数 +1

console.log("苹果:", counter["苹果"]);
console.log("香蕉:", counter["香蕉"]);
console.log("总数:", counter["苹果"] + counter["香蕉"]);`}
                expectedOutput="苹果: 6\n香蕉: 3\n总数: 9"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• <code className="text-cyan-300">interface</code>：定义对象形状、可以被类实现、支持声明合并</li>
              <li>• <code className="text-cyan-300">type</code>：给类型起别名、可描述联合类型和元组</li>
              <li>• <code className="text-cyan-300">?</code> 标记可选属性</li>
              <li>• <code className="text-cyan-300">readonly</code> 标记只读属性</li>
              <li>• <code className="text-cyan-300">extends</code> 继承接口</li>
              <li>• <code className="text-cyan-300">&</code> 交叉类型合并</li>
              <li>• 索引签名 <code className="text-cyan-300">[key: string]: value</code> 描述动态键值</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                设计一个电商系统：Product（商品）、BookProduct（图书，继承 Product 并添加 author）、CartItem（购物车项，包含商品和数量）
              </p>
              <CodeExercise
                initialCode={`// 商品接口
interface Product {
  id: string;
  name: string;
  price: number;
}

// 图书接口（继承 Product）
interface BookProduct extends Product {
  author: string;
  pages: number;
}

// 购物车项
interface CartItem {
  product: Product;
  quantity: number;
}

// 创建图书
const book: BookProduct = {
  id: "B001",
  name: "TypeScript 入门",
  price: 59,
  author: "张三",
  pages: 300
};

// 添加到购物车
const cartItem: CartItem = {
  product: book,
  quantity: 2
};

console.log("图书:", book.name, "- 作者:", book.author);
console.log("购物车数量:", cartItem.quantity);
console.log("小计:", cartItem.product.price * cartItem.quantity, "元");`}
                expectedOutput="图书: TypeScript 入门 - 作者: 张三\n购物车数量: 2\n小计: 118 元"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link
              href="/lessons/l1"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 transition-colors"
            >
              ← L1 TypeScript 基础
            </Link>
            <Link
              href="/lessons/l3"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white transition-colors"
            >
              L3 函数类型 →
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