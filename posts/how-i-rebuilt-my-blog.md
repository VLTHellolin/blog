---
title: 2025 年，我如何重构我的网站
description: 使用 Next.js App Router 开发的全新个人网站，以及我对其他 Content-Driven 解决方案的看法。
date: 2025-01-10 19:21:06
---

一个优秀的 web dev 必须有一个优秀的 web page（

## 设计蓝图

设计整体上偏向于 Vercel 的那种现代简约风格，一张页面上没有任何多余的内容，只有一个导航栏、文章容器和页脚。这种设计最明显的好处是不会造成阅读疲劳，内容完全自上而下排列，没有分散注意力的部分，能让用户更加专注于内容本身。

我使用 shadcn/ui 作为组件基底，通过元素的简单布局和组合，传递想要表达的含义。

## 实现

### 为什么是 Next.js

Next.js 是老牌的 React 全栈框架，它不仅提供了类似 `react-router` 的路由，有着无刷新的站内导航，而且是一个优秀的 SSG，对静态部署和缓存有很好的支持。

### 内容管理

对于文章管理，我只有基本的需求（排序展示），所以直接依靠 Node：

``` ts
// src/lib/posts.ts
import dayjs, { type Dayjs } from 'dayjs';
import { glob } from 'fast-glob';

export async function getPosts() {
  return (await glob('posts/*.md')).map(file => /^posts\/(.*).md$/.exec(file)![1]);
}

export async function getSortedPosts() {
  const posts = await getPosts();
  const dates: Record<string, Dayjs> = {};
  for (const post of posts) {
    dates[post] = dayjs((await import(`^/posts/${post}.md`)).frontmatter.date);
  }
  posts.sort((a, b) => (dates[a].isAfter(dates[b]) ? -1 : 1));
  return posts;
}
```

``` tsx
// src/app/post/[slug]/page.tsx
import { getPosts } from '@/lib/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(post => ({ slug: post }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { default: MDX, frontmatter } = await import(`^/posts/${slug}.md`);
  const { title, date } = frontmatter;

  return (
    // ...
  );
};
```

### 编写样式

相较于传统的解决方案，React 更适合 Atomic CSS。

我选用了比 TailwindCSS 更强大的 UnoCSS，
