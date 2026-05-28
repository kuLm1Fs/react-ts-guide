"use client";

import Link from "next/link";
import { useState } from "react";

export default function L12Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-purple-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              L12
            </span>
            <h1 className="text-xl font-bold">React Router</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: 什么是路由 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">1. 什么是路由？</h2>
            <p className="text-slate-300 mb-4">
              路由根据 URL 路径显示不同的页面内容。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 路由映射
const routes = {
  "/": "首页",
  "/about": "关于页面",
  "/contact": "联系页面"
};

function matchRoute(path) {
  return routes[path] || "404 Not Found";
}

console.log(matchRoute("/"));
console.log(matchRoute("/about"));
console.log(matchRoute("/nonexistent"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 1.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建路由映射，/users 返回 "用户列表"
              </p>
              <CodeExercise
                initialCode={`const routes = {
  "/": "首页",
  "/users": "用户列表",
  "/products": "商品列表"
};

function getPage(path) {
  return routes[path] || "404";
}

console.log(getPage("/users"));
console.log(getPage("/"));`}
                expectedOutput="用户列表\n首页"
              />
            </div>
          </section>

          {/* Section 2: React Router 基础 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. React Router 基础</h2>
            <p className="text-slate-300 mb-4">
              React Router 是 React 生态中最常用的路由库。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// BrowserRouter 包裹应用
// Routes 定义路由规则
// Route 指定每个路径对应的组件

// 模拟 Router
function Router({ children }) {
  const path = window.location.pathname;
  return children.find(r => r.path === path)?.component() || null;
}

// 使用
const app = Router({
  children: [
    { path: "/", component: () => "首页组件" },
    { path: "/about", component: () => "关于组件" }
  ]
});

console.log("当前路由:", app);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 2.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                用 Router 显示 Dashboard 组件
              </p>
              <CodeExercise
                initialCode={`const routes = [
  { path: "/", component: () => "Home" },
  { path: "/dashboard", component: () => "Dashboard" }
];

function navigate(path) {
  const route = routes.find(r => r.path === path);
  return route ? route.component() : "Not Found";
}

console.log(navigate("/dashboard"));`}
                expectedOutput="Dashboard"
              />
            </div>
          </section>

          {/* Section 3: 路由配置 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. 路由配置</h2>
            <p className="text-slate-300 mb-4">
              使用 Routes 和 Route 组件定义路由规则。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// JSX 路由配置
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
// </Routes>

// 模拟配置
const routeConfig = [
  { path: "/", element: "HomePage" },
  { path: "/users", element: "UsersPage" },
  { path: "/products", element: "ProductsPage" }
];

function Routes({ routes, currentPath }) {
  const match = routes.find(r => r.path === currentPath);
  return match ? match.element : "Not Found";
}

console.log("path=/:", Routes({ routes: routeConfig, currentPath: "/" }));
console.log("path=/users:", Routes({ routes: routeConfig, currentPath: "/users" }));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 3.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                配置登录页路由 /login
              </p>
              <CodeExercise
                initialCode={`const routes = [
  { path: "/", element: "HomePage" },
  { path: "/login", element: "LoginPage" },
  { path: "/register", element: "RegisterPage" }
];

function match(path) {
  const route = routes.find(r => r.path === path);
  return route ? route.element : "404";
}

console.log(match("/login"));
console.log(match("/register"));`}
                expectedOutput="LoginPage\nRegisterPage"
              />
            </div>
          </section>

          {/* Section 4: Link 组件 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Link 组件</h2>
            <p className="text-slate-300 mb-4">
              Link 组件用于客户端导航，不刷新页面。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// Link vs a 标签
// <a href="/about"> 刷新页面
// <Link to="/about"> 客户端导航

// 模拟 Link
function Link({ to, children }) {
  return \`<a href="\${to}" onClick={(e) => {
    e.preventDefault();
    history.pushState(null, "", to);
    console.log("导航到:", to);
  }}>\${children}</a>\`;
}

// 使用
const link = Link({ to: "/home", children: "返回首页" });
console.log(link);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 4.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                创建 NavLink 组件，显示导航链接
              </p>
              <CodeExercise
                initialCode={`function NavLink({ to, label }) {
  console.log("NavLink:", label, "->", to);
  return \`<a href="\${to}">\${label}</a>\`;
}

NavLink({ to: "/", label: "首页" });
NavLink({ to: "/about", label: "关于" });
NavLink({ to: "/contact", label: "联系" });`}
                expectedOutput="NavLink: 首页 -> /\nNavLink: 关于 -> /about\nNavLink: 联系 -> /contact"
              />
            </div>
          </section>

          {/* Section 5: 动态路由 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. 动态路由</h2>
            <p className="text-slate-300 mb-4">
              使用 :id 等参数捕获 URL 中的动态部分。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 动态路由 /users/:id
// 匹配 /users/1, /users/2, /users/abc

// 模拟动态路由匹配
function matchRoute(path, pattern) {
  const patternParts = pattern.split("/");
  const pathParts = path.split("/");

  if (patternParts.length !== pathParts.length) return false;

  return patternParts.every((part, i) =>
    part.startsWith(":") ? true : part === pathParts[i]
  );
}

function extractParams(path, pattern) {
  const patternParts = pattern.split("/");
  const pathParts = path.split("/");
  const params = {};

  patternParts.forEach((part, i) => {
    if (part.startsWith(":")) {
      params[part.slice(1)] = pathParts[i];
    }
  });

  return params;
}

const path = "/users/123";
console.log("match:", matchRoute(path, "/users/:id"));
console.log("params:", extractParams(path, "/users/:id"));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 5.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                提取 /products/:productId 的参数
              </p>
              <CodeExercise
                initialCode={`function getParams(path, pattern) {
  const patternParts = pattern.split("/");
  const pathParts = path.split("/");
  const params = {};

  patternParts.forEach((part, i) => {
    if (part.startsWith(":")) {
      params[part.slice(1)] = pathParts[i];
    }
  });

  return params;
}

const params = getParams("/products/456", "/products/:productId");
console.log("productId:", params.productId);`}
                expectedOutput="productId: 456"
              />
            </div>
          </section>

          {/* Section 6: 嵌套路由 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">6. 嵌套路由</h2>
            <p className="text-slate-300 mb-4">
              路由可以嵌套，子路由在父组件内渲染。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// 嵌套路由结构
// /users        -> UsersLayout -> UsersList
// /users/:id    -> UsersLayout -> UserProfile
// /users/:id/edit -> UsersLayout -> EditUser

// 模拟 Layout + 嵌套
function UsersLayout({ children }) {
  return "Layout: " + children;
}

function UsersList() { return "UsersList"; }
function UserProfile({ id }) { return "UserProfile: " + id; }

const route = "/users/123";
const [baseRoute, id] = route.split("/").slice(0, 2);
console.log(baseRoute, id);

// 模拟渲染
console.log(UsersLayout(UserProfile({ id: 123 })));`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 6.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现博客嵌套路由 /blog → BlogLayout → PostList
              </p>
              <CodeExercise
                initialCode={`function BlogLayout({ children }) {
  return "BlogLayout(" + children + ")";
}

function PostList() { return "PostList"; }
function PostDetail({ id }) { return "Post: " + id; }

// /blog 渲染 PostList
console.log(BlogLayout(PostList()));

// /blog/99 渲染 PostDetail
console.log(BlogLayout(PostDetail({ id: 99 })));`}
                expectedOutput="BlogLayout(PostList)\nBlogLayout(Post: 99)"
              />
            </div>
          </section>

          {/* Section 7: useNavigate */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">7. useNavigate Hook</h2>
            <p className="text-slate-300 mb-4">
              useNavigate 返回导航函数，用于程序化导航。
            </p>

            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300 mb-4">{`// useNavigate
// const navigate = useNavigate();
// navigate("/home");
// navigate(-1); // 返回

// 模拟 useNavigate
function createNavigate() {
  const history = ["/"];
  return function navigate(to, options) {
    if (typeof to === "number") {
      const delta = Math.abs(to);
      console.log("返回第", delta, "步");
    } else {
      history.push(to);
      console.log("导航到:", to);
    }
  };
}

const navigate = createNavigate();
navigate("/users");
navigate("/products");
navigate(-1);`}</pre>

            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 7.1</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现登录后导航到首页
              </p>
              <CodeExercise
                initialCode={`function navigate(to) {
  console.log("导航到:", to);
}

function login(username) {
  console.log("登录用户:", username);
  navigate("/home");
}

login("admin");`}
                expectedOutput="登录用户: admin\n导航到: /home"
              />
            </div>
          </section>

          {/* 总结 */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">本节小结</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• 路由根据 URL 显示不同页面</li>
              <li>• React Router 是主流路由库</li>
              <li>• Routes/Route 定义路由规则</li>
              <li>• Link 实现客户端导航</li>
              <li>• :id 捕获 URL 参数</li>
              <li>• 嵌套路由实现布局复用</li>
              <li>• useNavigate 实现程序化导航</li>
            </ul>

            <div className="mt-6 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">综合练习</h3>
              <p className="text-slate-300 text-sm mb-3">
                实现一个简单的路由系统，支持首页和用户页
              </p>
              <CodeExercise
                initialCode={`const routes = {
  "/": "HomePage",
  "/users": "UsersPage",
  "/users/:id": "UserDetailPage"
};

function Router(path) {
  if (routes[path]) return routes[path];
  // 检查动态路由
  for (const pattern of Object.keys(routes)) {
    if (pattern.includes(":")) {
      const patternParts = pattern.split("/");
      const pathParts = path.split("/");
      if (patternParts.length === pathParts.length) {
        let match = true;
        const params = {};
        patternParts.forEach((part, i) => {
          if (part.startsWith(":")) {
            params[part.slice(1)] = pathParts[i];
          } else if (part !== pathParts[i]) {
            match = false;
          }
        });
        if (match) {
          console.log("params:", JSON.stringify(params));
          return routes[pattern];
        }
      }
    }
  }
  return "404";
}

console.log(Router("/"));
console.log(Router("/users"));
console.log(Router("/users/123"));`}
                expectedOutput={`HomePage\nUsersPage\nparams: {"id":"123"}\nUserDetailPage`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l11" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← L11 useReducer 复杂状态
            </Link>
            <Link href="/lessons/l13" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white">
              L13 状态管理 →
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