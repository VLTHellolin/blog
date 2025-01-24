import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ['remark-frontmatter'],
      ['remark-mdx-frontmatter'],
      ['remark-gfm'],
      ['remark-math'],
    ] as any,
    rehypePlugins: [
      ['rehype-katex', { strict: true }],
      ['@shikijs/rehype', { themes: { light: 'github-light-default', dark: 'github-dark-default' } }],
    ] as any,
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
