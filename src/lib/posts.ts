import { glob } from 'fast-glob';

export const getPosts = async () => {
  // biome-ignore lint/style/noNonNullAssertion:
  return (await glob('posts/*.mdx')).map(file => /^posts\/(.*).mdx$/.exec(file)![1]);
};
