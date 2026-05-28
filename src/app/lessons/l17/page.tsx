"use client";

import Link from "next/link";
import { useState } from "react";

export default function L17Page() {
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
              L17
            </span>
            <h1 className="text-xl font-bold">认证与会话</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: JWT 简介 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">1. JWT 简介</h2>
            <p className="text-slate-300 mb-4">
              JWT（JSON Web Token）是常用的身份认证方案。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// JWT 结构: header.payload.signature
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdCJ9.
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// 模拟 JWT
function createJWT(payload, secret = "secret") {
  const header = { alg: "HS256", typ: "JWT" };
  const base64 = (obj) => btoa(JSON.stringify(obj));
  const signature = btoa(header.alg + secret + base64(payload));
  return base64(header) + "." + base64(payload) + "." + signature;
}

const token = createJWT({ userId: 1, username: "张三" });
console.log("JWT:", token.substring(0, 50) + "...");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建包含用户信息的 JWT
              </p>
              <CodeExercise
                initialCode={`function createJWT(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256" }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa("sig");
  return header + "." + body + "." + signature;
}

const payload = { sub: 123, name: "张三", role: "admin" };
const token = createJWT(payload);
console.log("token:", token);
console.log("长度:", token.length);`}
                expectedOutput="token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyMywibmFtZSI6IuW8oC4yIiwicm9sZSI6ImFkbWluIn0.c2ln\n长度: 66"
              />
            </div>
          </section>

          {/* Section 2: JWT 验证 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">2. JWT 验证</h2>
            <p className="text-slate-300 mb-4">
              验证 JWT 签名和有效期。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 验证 JWT
function verifyJWT(token, secret) {
  const parts = token.split(".");
  const [header, payload, signature] = parts;

  // 模拟验证
  const expectedSig = btoa("HS256" + secret + header + "." + payload);
  if (signature !== expectedSig) {
    console.log("签名无效");
    return null;
  }

  const data = JSON.parse(atob(payload));

  // 检查过期
  if (data.exp && data.exp < Date.now() / 1000) {
    console.log("Token 已过期");
    return null;
  }

  return data;
}

const payload = { userId: 1, exp: Math.floor(Date.now() / 1000) + 3600 };
const token = createJWT(payload);
const data = verifyJWT(token, "secret");
console.log("验证结果:", data ? "成功" : "失败");`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                解析 JWT 获取用户信息
              </p>
              <CodeExercise
                initialCode={`function parseJWT(token) {
  const parts = token.split(".");
  const payload = JSON.parse(atob(parts[1]));
  return payload;
}

const token = "header.eyJ1c2VySWQiOjEyMywibmFtZSI6IuW8oC4yIn0.signature";
const data = parseJWT(token);
console.log("userId:", data.userId);
console.log("name:", data.name);`}
                expectedOutput="userId: 123\nname: 张三"
              />
            </div>
          </section>

          {/* Section 3: Cookie 管理 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">3. Cookie 管理</h2>
            <p className="text-slate-300 mb-4">
              Cookie 用于在浏览器存储认证信息。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Cookie 设置
// document.cookie = "token=xxx; path=/; httpOnly; secure; sameSite=strict"

// 模拟 Cookie 操作
const cookies = {};

function setCookie(name, value, options = {}) {
  let cookie = name + "=" + value;
  if (options.path) cookie += "; path=" + options.path;
  if (options.httpOnly) cookie += "; httpOnly";
  if (options.secure) cookie += "; secure";
  if (options.maxAge) cookie += "; max-age=" + options.maxAge;
  cookies[name] = value;
  console.log("设置 Cookie:", name);
}

function getCookie(name) {
  return cookies[name] || null;
}

setCookie("token", "abc123", { path: "/", httpOnly: true });
console.log("读取:", getCookie("token"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                设置和获取用户 Cookie
              </p>
              <CodeExercise
                initialCode={`const cookies = {};

function setCookie(name, value) {
  cookies[name] = value;
}

function getCookie(name) {
  return cookies[name];
}

setCookie("user", "张三");
setCookie("role", "admin");

console.log("user:", getCookie("user"));
console.log("role:", getCookie("role"));`}
                expectedOutput="user: 张三\nrole: admin"
              />
            </div>
          </section>

          {/* Section 4: 登录流程 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">4. 登录流程</h2>
            <p className="text-slate-300 mb-4">
              完整的登录认证流程。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 登录流程
// 1. 用户提交 username/password
// 2. 服务器验证后返回 JWT
// 3. 客户端存储 JWT (Cookie 或 localStorage)
// 4. 后续请求携带 JWT

// 模拟登录
function login(username, password) {
  console.log("验证凭据:", username, password);

  // 验证成功
  if (username === "admin" && password === "123456") {
    const token = createJWT({ userId: 1, username });
    console.log("登录成功, token:", token.substring(0, 20) + "...");
    return token;
  }

  console.log("登录失败");
  return null;
}

const token = login("admin", "123456");
console.log("获得 token:", !!token);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现登出功能
              </p>
              <CodeExercise
                initialCode={`let isLoggedIn = true;
let currentUser = { name: "张三" };

function logout() {
  isLoggedIn = false;
  currentUser = null;
  console.log("已退出登录");
}

function getCurrentUser() {
  return isLoggedIn ? currentUser : null;
}

logout();
console.log("当前用户:", getCurrentUser());`}
                expectedOutput="已退出登录\n当前用户: null"
              />
            </div>
          </section>

          {/* Section 5: 保护路由 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">5. 保护路由</h2>
            <p className="text-slate-300 mb-4">
              未登录用户访问受保护页面时重定向到登录页。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 路由守卫
function requireAuth(protect, getUser, navigate) {
  if (protect && !getUser()) {
    console.log("未登录, 重定向到登录页");
    navigate("/login");
    return false;
  }
  return true;
}

// 模拟路由守卫
let user = { name: "张三" };
let currentPath = "/dashboard";

function checkRoute() {
  const protect = currentPath.startsWith("/dashboard");

  if (requireAuth(protect, () => user, path => console.log("跳转:", path))) {
    console.log("访问:", currentPath);
  }
}

// 模拟无用户时访问受保护路由
user = null;
checkRoute();`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                检查用户权限
              </p>
              <CodeExercise
                initialCode={`function checkPermission(user, requiredRole) {
  if (!user) {
    console.log("未登录");
    return false;
  }
  if (user.role !== requiredRole) {
    console.log("权限不足, 需要:", requiredRole);
    return false;
  }
  console.log("权限通过");
  return true;
}

checkPermission({ name: "张三", role: "user" }, "admin");
checkPermission({ name: "李四", role: "admin" }, "admin");`}
                expectedOutput="权限不足, 需要: admin\n权限通过"
              />
            </div>
          </section>

          {/* Section 6: HTTP 认证头 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">6. HTTP 认证头</h2>
            <p className="text-slate-300 mb-4">
              使用 Authorization 头传递 Bearer Token。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Authorization: Bearer <token>
// fetch("/api/data", {
//   headers: { Authorization: "Bearer " + token }
// })

// 模拟带认证的请求
function authRequest(url, token) {
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }
  console.log("请求:", url);
  console.log("认证头:", headers["Authorization"] || "无");
  return { data: "响应数据", authorized: !!token };
}

authRequest("/api/users", "abc123");
authRequest("/api/public", null);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                提取 Authorization 头中的 token
              </p>
              <CodeExercise
                initialCode={`function extractToken(authHeader) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.slice(7);
}

const header1 = "Bearer eyJhbGciOiJIUzI1NiJ9";
const header2 = "Basic abc123";

console.log("token1:", extractToken(header1));
console.log("token2:", extractToken(header2));`}
                expectedOutput="token1: eyJhbGciOiJIUzI1NiJ9\ntoken2: null"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-rose-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• JWT 是常用的身份认证方案</li>
              <li>• JWT 由 header.payload.signature 组成</li>
              <li>• Cookie 用于浏览器存储认证信息</li>
              <li>• 登录流程：验证凭据 → 返回 JWT → 存储 JWT</li>
              <li>• 保护路由检查用户是否已认证</li>
              <li>• 请求时通过 Authorization 头传递 Token</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现完整的登录、认证、登出流程
              </p>
              <CodeExercise
                initialCode={`let user = null;
let token = null;

function login(name, password) {
  if (password === "123456") {
    user = { name, role: "user" };
    token = "jwt_token_" + Date.now();
    console.log("登录成功:", name);
    return true;
  }
  console.log("密码错误");
  return false;
}

function getAuthHeader() {
  return token ? "Bearer " + token : null;
}

function logout() {
  user = null;
  token = null;
  console.log("已退出");
}

login("张三", "123456");
console.log("Auth:", getAuthHeader());
logout();
console.log("Auth:", getAuthHeader());`}
                expectedOutput="登录成功: 张三\nAuth: Bearer jwt_token_1\n已退出\nAuth: null"
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l16" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L16 数据库集成
            </Link>
            <Link href="/lessons/l18" className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded text-white">
              L18 部署与优化 →
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