import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.md$/,
  options: {
    remarkPlugins: [
      ['remark-frontmatter', { type: 'yaml', marker: '-' }],
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
  pageExtensions: ['ts', 'tsx', 'md'],
};

export default withMDX(nextConfig);
