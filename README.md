# React + TypeScript 学习指南

从零开始系统掌握 TypeScript 与 React。

## 学习计划

| 阶段 | 内容 | 课时 |
|------|------|------|
| Phase 1 | TypeScript 基础 | L1-L4 |
| Phase 2 | React 核心概念 | L5-L8 |
| Phase 3 | Hooks 进阶 | L9-L11 |
| Phase 4 | React 生态 | L12-L14 |
| Phase 5 | 全栈实践 | L15-L18 |

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4

## 项目结构

```
src/
├── app/
│   ├── page.tsx           # 首页 - 学习路径概览
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   └── lessons/           # 课程页面
│       └── l1/ ~ l18/     # 各课时
└── components/           # 公共组件
```

## 课时详情

### Phase 1: TypeScript 基础
- **L1** - TS 环境与基础类型
- **L2** - 接口与类型别名
- **L3** - 函数类型
- **L4** - 泛型入门

### Phase 2: React 核心概念
- **L5** - JSX 基础
- **L6** - 组件基础
- **L7** - State 与事件
- **L8** - 副作用与数据获取

### Phase 3: Hooks 进阶
- **L9** - Hooks 深入
- **L10** - Context 与全局状态
- **L11** - useReducer 复杂状态

### Phase 4: React 生态
- **L12** - React Router
- **L13** - 状态管理 (Zustand)
- **L14** - API 数据获取

### Phase 5: 全栈实践
- **L15** - Next.js 基础
- **L16** - 数据库集成 (Prisma)
- **L17** - 认证与会话
- **L18** - 部署与优化

## 部署

本项目使用 [Vercel](https://vercel.com) 部署。

### 部署步骤

1. 将项目推送到 GitHub 仓库
2. 在 [vercel.com](https://vercel.com) 导入项目
3. 配置环境变量（如有需要）：
   - Vercel 面板或 `vercel env add` 管理环境变量
   - 示例：`vercel env add DATABASE_URL`

### 访问部署

部署完成后，访问 `https://[repo-owner]-[repo-name].vercel.app`

## License

MIT
