# Lesson Builder Skill

## Purpose
Help create consistent, error-free lesson pages for the TS/React learning project.

## When to Use
- Creating new lesson pages (l1, l2, ... l18)
- Checking existing lesson pages for common errors

---

## TSX Lesson Page Template

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function L_X_Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header - MUST include return button */}
      <div className="border-b border-slate-700 bg-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm">
              ← 返回课程列表
            </Link>
            <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded font-bold text-sm">
              LX
            </span>
            <h1 className="text-xl font-bold">Lesson Title</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section with content */}
          <section className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Section Title</h2>
            <p className="text-slate-300 mb-4">Description text.</p>

            {/* Code block - use template literal, NOT JSON */}
            <pre className="bg-slate-900 rounded p-4 text-sm text-slate-300">{`// code here`}</pre>

            {/* Exercise - always use CodeExercise component */}
            <div className="mt-4 bg-slate-900/50 border border-slate-600 rounded p-4">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">练习 X.X</h3>
              <CodeExercise
                initialCode={`// simple code without complex characters
const x = 1;
console.log(x);`}
                expectedOutput={`1`}
              />
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            <Link href="/lessons/l{X-1}" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">
              ← Previous Lesson
            </Link>
            <Link href="/lessons/l{X+1}" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white">
              Next Lesson →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Required: CodeExercise component
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
```

---

## Critical Rules (MUST FOLLOW)

### 1. NO `>=` or `<=` in JSX text
```tsx
// ❌ WRONG - causes "Expression expected" error
<p>大于等于 18</p>
<p>age >= 18</p>

// ✅ CORRECT - use HTML entities
<p>大于等于 18</p>
<p>age &gt;= 18</p>
```

### 2. NO `{}` in JSX text attributes
```tsx
// ❌ WRONG - causes parsing error
<p>{"{"}name} is valid</p>
<CodeExercise expectedOutput="{"name":"test"}" />

// ✅ CORRECT - use template literal or HTML entities
<CodeExercise expectedOutput={`{"name":"test"}`} />
```

### 3. NO JSON in expectedOutput with double quotes
```tsx
// ❌ WRONG - backslash escaping doesn't work in JSX
expectedOutput="{\"name\":\"test\"}"

// ✅ CORRECT - use template literal
expectedOutput={`{"name":"test"}`}
```

### 4. NO `{{` or `}}` in JSX
```tsx
// ❌ WRONG - double braces are parsed as object literal
<code>{ "{name: 'test'}" }</code>

// ✅ CORRECT - use template literal
<code>{"{name: 'test'}"}</code>
```

### 5. Keep initialCode SIMPLE
```tsx
// ❌ COMPLEX - causes issues
initialCode={`const users = [{name: "张三", age: 25}]; console.log(user.name);`}

// ✅ SIMPLE - avoid nested quotes
initialCode={`var u = {n: "张三", a: 25}; console.log(u.n);`}
```

### 6. JSON.stringify in initialCode needs NO extra arguments
```tsx
// ❌ WRONG - null, 2 causes issues in template literal
initialCode={`JSON.stringify(obj, null, 2)`}

// ✅ CORRECT - just use one argument or avoid entirely
initialCode={`JSON.stringify(obj)`}
```

---

## Error Quick Reference

| Error Message | Cause | Fix |
|--------------|-------|-----|
| `Expected ';', '}' or <eof>` | File not valid JSX | Use React component format |
| `Expected '</', got 'string literal'` | `{}` in JSX attribute conflict | Use `{'{'}` or template literal |
| `Expected a semicolon` | `{{` in JSX | Use template literal |
| `role is not defined` | `{variable}` in text parsed as JS | Use HTML entity `&#123;` |
| `Expected unicode escape` | `"...[\"..."` in JSX attribute | Use template literal |
| `Expression expected` | `>=` or `<=` in JSX text | Use `&gt;=` `&lt;=` |

---

## Project Structure
```
src/app/lessons/
  l1/page.tsx  - TypeScript 基础
  l2/page.tsx  - 接口与类型别名
  l3/page.tsx  - 函数类型
  l4/page.tsx  - 泛型入门
  l5/page.tsx  - JSX 基础
  l6/page.tsx  - 组件基础
  l7-l18/      - Placeholder (use LessonPlaceholder)
```

## Color Scheme by Phase
- Phase 1 (L1-L4): `cyan-400` (TypeScript)
- Phase 2 (L5-L8): `emerald-400` (React Core)
- Phase 3 (L9-L11): `amber-400` (Hooks)
- Phase 4 (L12-L14): `purple-400` (Ecosystem)
- Phase 5 (L15-L18): `rose-400` (Full Stack)