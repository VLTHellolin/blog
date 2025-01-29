import type { NextConfig } from 'next';
import remarkMdxToc from '@/plugins/remark-mdx-toc';
import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import rehypeKatex from 'rehype-katex';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

const withMDX = createMDX({
  extension: /\.md$/,
  options: {
    remarkPlugins: [
      [remarkFrontmatter, { type: 'yaml', marker: '-' }],
      [remarkMdxFrontmatter],
      [remarkMdxToc],
      [remarkGfm],
      [remarkMath],
    ],
    rehypePlugins: [
      [rehypeKatex, { strict: true }],
      [rehypeShiki, { themes: { light: 'github-light-default', dark: 'github-dark-default' } }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md'],
  experimental: {
    reactCompiler: true,
  },
};

export default withMDX(nextConfig);
