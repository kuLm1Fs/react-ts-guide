import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">TypeScript + React 学习路径</h1>
          <p className="text-slate-300 text-lg">目标：能参与团队 React 项目</p>
          <p className="text-slate-400 text-sm mt-2">每日投入 2-4 小时 | 先广度后深度</p>
        </header>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Phase 1 */}
          <section>
            <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="bg-cyan-400 text-slate-900 px-2 py-0.5 rounded text-sm">Phase 1</span>
              TypeScript 基础
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "L1", name: "TS 环境与基础类型", desc: "类型注解、基础类型、数组" },
                { id: "L2", name: "接口与类型别名", desc: "interface vs type、继承" },
                { id: "L3", name: "函数类型", desc: "参数、返回值、可选参数" },
                { id: "L4", name: "泛型入门", desc: "泛型函数、泛型约束" },
              ].map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id.toLowerCase()}`}
                  className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors group"
                >
                  <div className="text-cyan-400 font-mono text-sm mb-1">{lesson.id}</div>
                  <div className="font-medium group-hover:text-cyan-300">{lesson.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{lesson.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Phase 2 */}
          <section>
            <h2 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
              <span className="bg-emerald-400 text-slate-900 px-2 py-0.5 rounded text-sm">Phase 2</span>
              React 核心概念
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "L5", name: "JSX 基础", desc: "表达式、条件渲染" },
                { id: "L6", name: "组件基础", desc: "函数组件、Props" },
                { id: "L7", name: "State 与事件", desc: "useState、表单处理" },
                { id: "L8", name: "副作用与数据获取", desc: "useEffect、清理函数" },
              ].map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id.toLowerCase()}`}
                  className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-emerald-400 transition-colors group"
                >
                  <div className="text-emerald-400 font-mono text-sm mb-1">{lesson.id}</div>
                  <div className="font-medium group-hover:text-emerald-300">{lesson.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{lesson.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Phase 3 */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
              <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded text-sm">Phase 3</span>
              Hooks 进阶
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "L9", name: "Hooks 深入", desc: "useRef、useMemo" },
                { id: "L10", name: "Context 与全局状态", desc: "createContext" },
                { id: "L11", name: "useReducer 复杂状态", desc: "reducer 模式" },
              ].map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id.toLowerCase()}`}
                  className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-amber-400 transition-colors group"
                >
                  <div className="text-amber-400 font-mono text-sm mb-1">{lesson.id}</div>
                  <div className="font-medium group-hover:text-amber-300">{lesson.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{lesson.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Phase 4 */}
          <section>
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <span className="bg-purple-400 text-slate-900 px-2 py-0.5 rounded text-sm">Phase 4</span>
              React 生态
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "L12", name: "React Router", desc: "路由、嵌套路由" },
                { id: "L13", name: "状态管理", desc: "Zustand 入门" },
                { id: "L14", name: "API 数据获取", desc: "fetch、loading 状态" },
              ].map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id.toLowerCase()}`}
                  className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-purple-400 transition-colors group"
                >
                  <div className="text-purple-400 font-mono text-sm mb-1">{lesson.id}</div>
                  <div className="font-medium group-hover:text-purple-300">{lesson.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{lesson.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Phase 5 */}
          <section>
            <h2 className="text-xl font-semibold text-rose-400 mb-4 flex items-center gap-2">
              <span className="bg-rose-400 text-slate-900 px-2 py-0.5 rounded text-sm">Phase 5</span>
              全栈实践
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "L15", name: "Next.js 基础", desc: "App Router、API Routes" },
                { id: "L16", name: "数据库集成", desc: "Prisma、CRUD" },
                { id: "L17", name: "认证与会话", desc: "JWT、Cookie" },
                { id: "L18", name: "部署与优化", desc: "Vercel、环境变量" },
              ].map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id.toLowerCase()}`}
                  className="bg-slate-700/50 hover:bg-slate-700 p-4 rounded-lg border border-slate-600 hover:border-rose-400 transition-colors group"
                >
                  <div className="text-rose-400 font-mono text-sm mb-1">{lesson.id}</div>
                  <div className="font-medium group-hover:text-rose-300">{lesson.name}</div>
                  <div className="text-slate-400 text-xs mt-1">{lesson.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}