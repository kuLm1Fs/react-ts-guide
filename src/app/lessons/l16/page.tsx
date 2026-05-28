"use client";

import Link from "next/link";
import { useState } from "react";

export default function L16Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-rose-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L16
            </span>
            <h1 className="text-xl font-bold">数据库集成</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: Prisma 简介 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">1. Prisma 简介</h2>
            <p className="text-slate-300 mb-4">
              Prisma 是现代 ORM，简化数据库操作，支持 TypeScript。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Prisma 模型定义
// model User {
//   id    Int    @id @default(autoincrement())
//   name  String
//   email String @unique
// }

// schema.prisma
const schema = {
  models: {
    User: {
      fields: ["id", "name", "email"],
      unique: ["email"]
    }
  }
};

console.log("Prisma schema:", JSON.stringify(schema.models));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                定义 Post 模型
              </p>
              <CodeExercise
                initialCode={`// const postModel = { ... };

console.log("Model:", postModel.name);
console.log("Fields:", postModel.fields.join(", "));`}
                expectedOutput={`const postModel = {
  name: "Post",
  fields: ["id", "title", "content", "published", "authorId"],
  relations: {
    author: { model: "User", relation: "many-to-one" }
  }
};

console.log("Model:", postModel.name);
console.log("Fields:", postModel.fields.join(", "));`}
              />
            </div>
          </section>

          {/* Section 2: CRUD 操作 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">2. CRUD 操作</h2>
            <p className="text-slate-300 mb-4">
              Prisma Client 提供简洁的 CRUD API。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Prisma CRUD
// prisma.user.findMany()
// prisma.user.create({ data: {...} })
// prisma.user.update({ where: {...}, data: {...} })
// prisma.user.delete({ where: {...} })

// 模拟 Prisma Client
const db = {
  users: [{ id: 1, name: "张三", email: "zhang@example.com" }],
  posts: []
};

const prisma = {
  user: {
    findMany: () => db.users,
    findUnique: (where) => db.users.find(u => u.id === where.id),
    create: ({ data }) => {
      const newUser = { id: Date.now(), ...data };
      db.users.push(newUser);
      return newUser;
    },
    update: ({ where, data }) => {
      const user = db.users.find(u => u.id === where.id);
      Object.assign(user, data);
      return user;
    },
    delete: ({ where }) => {
      const idx = db.users.findIndex(u => u.id === where.id);
      return db.users.splice(idx, 1)[0];
    }
  }
};

console.log("findMany:", prisma.user.findMany());`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建用户并查询
              </p>
              <CodeExercise
                initialCode={`// const users = [];
// const db = { create: (data) => { ... }, findAll: () => users };

const newUser = db.create({ name: "张三", email: "zhang@example.com" });
users.push(newUser);

console.log("创建:", newUser.name);
console.log("查询:", db.findAll().length, "个用户");`}
                expectedOutput={`const users = [];

const db = {
  create: (data) => ({ id: Date.now(), ...data }),
  findAll: () => users
};

const newUser = db.create({ name: "张三", email: "zhang@example.com" });
users.push(newUser);

console.log("创建:", newUser.name);
console.log("查询:", db.findAll().length, "个用户");`}
              />
            </div>
          </section>

          {/* Section 3: 关系模型 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">3. 关系模型</h2>
            <p className="text-slate-300 mb-4">
              Prisma 支持一对一、一对多、多对多关系。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 关系定义
// User -> Post (一对多)
// Post -> Comment (一对多)
// User -> Profile (一对一)

// 模拟关系查询
const data = {
  users: [
    { id: 1, name: "张三", posts: [{ id: 1, title: "第一篇" }] }
  ]
};

const user = data.users[0];
console.log("用户:", user.name);
console.log("文章数:", user.posts.length);
console.log("文章:", user.posts[0].title);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现用户及其评论查询
              </p>
              <CodeExercise
                initialCode={`// const db = { users: [{ name: "张三", comments: [...] }] };

const user = db.users[0];
console.log("用户:", user.name);
console.log("评论数:", user.comments.length);
user.comments.forEach(c => console.log("-", c.content));`}
                expectedOutput={`const db = {
  users: [
    {
      name: "张三",
      comments: [
        { id: 1, content: "写的不错" },
        { id: 2, content: "学到了" }
      ]
    }
  ]
};

const user = db.users[0];
console.log("用户:", user.name);
console.log("评论数:", user.comments.length);
user.comments.forEach(c => console.log("-", c.content));`}
              />
            </div>
          </section>

          {/* Section 4: 查询选项 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">4. 查询选项</h2>
            <p className="text-slate-300 mb-4">
              Prisma 支持 select、where、orderBy、take、skip 等选项。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 查询选项
// prisma.user.findMany({
//   where: { name: "张三" },
//   select: { id: true, name: true },
//   orderBy: { createdAt: "desc" },
//   take: 10,
//   skip: 0
// })

const users = [
  { id: 1, name: "张三", age: 25, email: "zhang@example.com" },
  { id: 2, name: "李四", age: 30, email: "li@example.com" },
  { id: 3, name: "王五", age: 25, email: "wang@example.com" }
];

function query(options = {}) {
  let result = [...users];

  if (options.where) result = result.filter(u => u.name === options.where.name);
  if (options.orderBy) {
    const key = Object.keys(options.orderBy)[0];
    result.sort((a, b) => options.orderBy[key] === "desc" ? b[key] - a[key] : a[key] - b[key]);
  }
  if (options.take) result = result.slice(0, options.take);
  if (options.select) {
    result = result.map(u => {
      const filtered = {};
      options.select.forEach(k => filtered[k] = u[k]);
      return filtered;
    });
  }

  return result;
}

console.log(JSON.stringify(query({ where: { age: 25 } })));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                查询前 2 个用户，只返回 id 和 name
              </p>
              <CodeExercise
                initialCode={`// function findUsers(options) { ... }

const result = findUsers({ take: 2, select: ["id", "name"] });
console.log(JSON.stringify(result));`}
                expectedOutput={`const users = [
  { id: 1, name: "张三", age: 25 },
  { id: 2, name: "李四", age: 30 },
  { id: 3, name: "王五", age: 25 }
];

function findUsers(options) {
  let result = [...users];
  if (options.take) result = result.slice(0, options.take);
  if (options.select) {
    result = result.map(u => {
      const o = {};
      options.select.forEach(k => o[k] = u[k]);
      return o;
    });
  }
  return result;
}

const result = findUsers({ take: 2, select: ["id", "name"] });
console.log(JSON.stringify(result));`}
              />
            </div>
          </section>

          {/* Section 5: 事务 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">5. 事务</h2>
            <p className="text-slate-300 mb-4">
              事务确保多个操作原子执行，要么全部成功，要么全部失败。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Prisma 事务
// prisma.$transaction([op1, op2, op3])

// 模拟事务
function transaction(operations) {
  const results = [];
  try {
    for (const op of operations) {
      results.push(op());
    }
    console.log("事务提交成功");
    return results;
  } catch (e) {
    console.log("事务回滚:", e.message);
    throw e;
  }
}

let balance = 1000;
const ops = [
  () => { balance -= 100; return "转出 100"; },
  () => { balance -= 50; return "转出 50"; }
];

try {
  transaction(ops);
  console.log("余额:", balance);
} catch {}`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现转账事务
              </p>
              <CodeExercise
                initialCode={`// function transfer(from, to, amount) { ... }

if (transfer("A", "B", 500)) {
  console.log("A 余额:", accounts.A);
  console.log("B 余额:", accounts.B);
}`}
                expectedOutput={`let accounts = { A: 1000, B: 0 };

function transfer(from, to, amount) {
  if (accounts[from] < amount) {
    console.log("余额不足");
    return false;
  }
  accounts[from] -= amount;
  accounts[to] += amount;
  console.log("转账:", amount, "从", from, "到", to);
  return true;
}

if (transfer("A", "B", 500)) {
  console.log("A 余额:", accounts.A);
  console.log("B 余额:", accounts.B);
}`}
              />
            </div>
          </section>

          {/* Section 6: 迁移 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">6. 数据库迁移</h2>
            <p className="text-slate-300 mb-4">
              Prisma Migrate 管理数据库 schema 版本。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Prisma 迁移命令
// npx prisma migrate dev --name add_users
// npx prisma migrate deploy

// 迁移文件示例
const migrations = [
  { name: "20230101_init", applied: true },
  { name: "20230115_add_posts", applied: true },
  { name: "20230201_add_comments", applied: false }
];

migrations.forEach(m => {
  console.log(m.name + ":", m.applied ? "已应用" : "待应用");
});`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                列出待应用的迁移
              </p>
              <CodeExercise
                initialCode={`// const migrations = [...];
// const pending = migrations.filter(m => !m.applied);

console.log("待应用迁移:", pending.length);
pending.forEach(m => console.log("-", m.name));`}
                expectedOutput={`const migrations = [
  { name: "init", applied: true },
  { name: "add_users", applied: true },
  { name: "add_posts", applied: false },
  { name: "add_comments", applied: false }
];

const pending = migrations.filter(m => !m.applied);
console.log("待应用迁移:", pending.length);
pending.forEach(m => console.log("-", m.name));`}
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Prisma 是现代 TypeScript ORM</li>
              <li>• 提供简洁的 CRUD API</li>
              <li>• 支持一对一、一对多、多对多关系</li>
              <li>• 查询选项支持筛选、排序、分页</li>
              <li>• 事务确保原子性操作</li>
              <li>• Migrate 管理数据库版本</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现完整的用户创建和查询流程
              </p>
              <CodeExercise
                initialCode={`// const db = { users: [], create: (data) => { ... }, findByEmail: (email) => { ... } };

// 创建用户
const user = db.create({ name: "张三", email: "zhang@example.com" });
console.log("创建:", user.name);

// 查询
const found = db.findByEmail("zhang@example.com");
console.log("查询:", found ? found.name : "未找到");`}
                expectedOutput={`const db = {
  users: [],
  create: (data) => {
    const user = { id: Date.now(), ...data, createdAt: new Date().toISOString() };
    db.users.push(user);
    return user;
  },
  findByEmail: (email) => db.users.find(u => u.email === email)
};

// 创建用户
const user = db.create({ name: "张三", email: "zhang@example.com" });
console.log("创建:", user.name);

// 查询
const found = db.findByEmail("zhang@example.com");
console.log("查询:", found ? found.name : "未找到");`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l15" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L15 Next.js 基础
            </Link>
            <Link href="/lessons/l17" className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded text-white">
              L17 认证与会话 →
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