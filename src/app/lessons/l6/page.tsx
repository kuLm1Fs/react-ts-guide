"use client";

import Link from "next/link";
import { useState } from "react";

export default function L6Page() {
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
              L6
            </span>
            <h1 className="text-xl font-bold">组件基础</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 函数组件 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. 函数组件</h2>
            <p className="text-slate-300 mb-4">
              React 组件是返回 JSX 的函数。最简单的组件就是一个返回 JSX 的函数。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 简单的函数组件
function Welcome() {
  return <h1>欢迎学习 React！</h1>;
}

// 组件可以复用
console.log("组件是封装 UI 的方式");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建一个 Greeting 组件，返回 "你好，张三！" 的字符串
              </p>
              <CodeExercise
                initialCode={`// 函数组件
function Greeting() {
  return "你好，张三！";
}

// 调用组件
const message = Greeting();
console.log(message);`}
                expectedOutput="你好，张三！"
              />
            </div>
          </section>

          {/* Section 2: Props 传递 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. Props 传递</h2>
            <p className="text-slate-300 mb-4">
              Props 是组件的参数，就像函数的参数一样。组件通过 props 接收数据。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 接收 props 的组件
function Welcome(props) {
  return "欢迎，" + props.name + "！";
}

// 传入 props
const message = Welcome({ name: "张三" });
console.log(message);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 UserCard 组件，接收 name 和 age，返回 "姓名: xxx, 年龄: xx"
              </p>
              <CodeExercise
                initialCode={`// 用户卡片组件
function UserCard(props) {
  return "姓名: " + props.name + ", 年龄: " + props.age;
}

// 测试
const card1 = UserCard({ name: "张三", age: 25 });
const card2 = UserCard({ name: "李四", age: 17 });

console.log(card1);
console.log(card2);`}
                expectedOutput={`姓名: 张三, 年龄: 25\n姓名: 李四, 年龄: 17`}
              />
            </div>
          </section>

          {/* Section 3: 解构 Props */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. 解构 Props</h2>
            <p className="text-slate-300 mb-4">
              使用 ES6 解构让代码更简洁。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 解构写法
function UserCard(name, age) {
  return "姓名: " + name + ", 年龄: " + age;
}

// 或者
function UserCard(props) {
  const { name, age } = props;
  return "姓名: " + name + ", 年龄: " + age;
}

console.log(UserCard("张三", 25));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 ProductCard 组件，接收 name, price, stock，返回商品信息
              </p>
              <CodeExercise
                initialCode={`// 商品卡片
function ProductCard(name, price, stock) {
  return name + " - 价格: " + price + "元, 库存: " + stock;
}

// 测试
const product = ProductCard("iPhone 15", 6999, 100);
console.log(product);`}
                expectedOutput="iPhone 15 - 价格: 6999元, 库存: 100"
              />
            </div>
          </section>

          {/* Section 4: 默认 Props */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. 默认 Props</h2>
            <p className="text-slate-300 mb-4">
              可以给 props 设置默认值，当没有传入时使用默认值。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 默认值
function Greeting(name) {
  name = name || "匿名用户";
  return "你好，" + name + "！";
}

// 不传 name
console.log(Greeting());
// 传 name
console.log(Greeting("张三"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 Button 组件，text 默认是 "点击我"，返回按钮文本
              </p>
              <CodeExercise
                initialCode={`// 按钮组件
function Button(text) {
  text = text || "点击我";
  return "[ " + text + " ]";
}

// 测试
console.log(Button());
console.log(Button("提交"));`}
                expectedOutput={`[ 点击我 ]\n[ 提交 ]`}
              />
            </div>
          </section>

          {/* Section 5: Props 类型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. Props 类型</h2>
            <p className="text-slate-300 mb-4">
              React 组件的 props 可以是任意类型：字符串、数字、布尔、对象、函数等。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 多种 props 类型
function UserProfile(name, age, isAdmin, skills) {
  let info = name + ", " + age + "岁";
  if (isAdmin) info += " [管理员]";
  info += ", 技能: " + skills.join(", ");
  return info;
}

const skills = ["React", "TypeScript", "Node.js"];
console.log(UserProfile("张三", 25, true, skills));
console.log(UserProfile("李四", 17, false, ["Java"]));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 ListItem 组件，接收 title（字符串）和 tags（数组），返回格式化字符串
              </p>
              <CodeExercise
                initialCode={`// 列表项组件
function ListItem(title, tags) {
  return title + " | 标签: " + tags.join(", ");
}

// 测试
const item1 = ListItem("React 入门", ["React", "前端"]);
const item2 = ListItem("Node.js 基础", ["Node", "后端"]);

console.log(item1);
console.log(item2);`}
                expectedOutput={`React 入门 | 标签: React, 前端\nNode.js 基础 | 标签: Node, 后端`}
              />
            </div>
          </section>

          {/* Section 6: 组件组合 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. 组件组合</h2>
            <p className="text-slate-300 mb-4">
              组件可以嵌套使用，一个组件可以包含其他组件。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 子组件
function Header() {
  return "=== 网站标题 ===";
}

function Footer() {
  return "=== 版权信息 ===";
}

// 父组件组合子组件
function Page() {
  const header = Header();
  const footer = Footer();
  return header + "\\n" + "页面内容" + "\\n" + footer;
}

console.log(Page());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 Card 组件，内部包含 Title 和 Content 子组件
              </p>
              <CodeExercise
                initialCode={`// 子组件
function Title(text) { return "标题: " + text; }
function Content(text) { return "内容: " + text; }

// Card 组件组合子组件
function Card(titleText, contentText) {
  return "---\\n" + Title(titleText) + "\\n" + Content(contentText) + "\\n---";
}

// 测试
console.log(Card("欢迎", "这是页面内容"));`}
                expectedOutput={`---\n标题: 欢迎\n内容: 这是页面内容\n---`}
              />
            </div>
          </section>

          {/* Section 7: children */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. children 属性</h2>
            <p className="text-slate-300 mb-4">
              特殊的 children prop 用于传递组件的子内容。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 容器组件包裹 children
function Container(children) {
  return "[容器开始]" + children + "[容器结束]";
}

// 使用容器包裹内容
const content = Container("这是内容");
console.log(content);

// 嵌套
const nested = Container("外层" + Container("内层") + "外层");
console.log(nested);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 Box 组件，接收 className（默认 "default"）和 children，返回带包裹的字符串
              </p>
              <CodeExercise
                initialCode={`// Box 组件
function Box(className, children) {
  className = className || "default";
  return "<Box class=\\"" + className + "\\">" + children + "</Box>";
}

// 测试
console.log(Box("primary", "主要内容"));
console.log(Box(null, "另一内容"));`}
                expectedOutput={`<Box class="primary">主要内容</Box>\n<Box class="default">另一内容</Box>`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• 组件是返回 JSX 的函数</li>
              <li>• Props 是组件的参数，用于传递数据</li>
              <li>• 可以使用解构简化 props 的使用</li>
              <li>• 可以给 props 设置默认值</li>
              <li>• Props 可以是任意类型：字符串、数字、数组、函数等</li>
              <li>• 组件可以嵌套组合</li>
              <li>• 特殊的 children prop 用于传递子内容</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 Article 组件，接收 title, author, content，返回格式化文章
              </p>
              <CodeExercise
                initialCode={`// 文章组件
function Article(title, author, content) {
  return "=== " + title + " ===\\n作者: " + author + "\\n内容: " + content + "\\n=============";
}

// 测试
const article = Article(
  "React 入门指南",
  "张三",
  "React 是一个用于构建用户界面的 JavaScript 库..."
);

console.log(article);`}
                expectedOutput={`=== React 入门指南 ===\n作者: 张三\n内容: React 是一个用于构建用户界面的 JavaScript 库...\n=============`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l5" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L5 JSX 基础
            </Link>
            <Link href="/lessons/l7" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded text-white">
              L7 State 与事件 →
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