import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    // biome-ignore lint/suspicious/noExplicitAny:
    remarkPlugins: [['remark-gfm'], ['remark-math']] as any,
    rehypePlugins: [
      ['rehype-katex', { strict: true }],
      ['@shikijs/rehype', { themes: { light: 'catppuccin-latte', dark: 'catppuccin-mocha' } }],
      // biome-ignore lint/suspicious/noExplicitAny:
    ] as any,
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
