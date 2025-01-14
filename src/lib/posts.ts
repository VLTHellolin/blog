import dayjs, { type Dayjs } from 'dayjs';
import { glob } from 'fast-glob';

export const getPosts = async () => {
  // biome-ignore lint/style/noNonNullAssertion:
  return (await glob('posts/*.mdx')).map(file => /^posts\/(.*).mdx$/.exec(file)![1]);
};

export const getSortedPosts = async () => {
  const posts = await getPosts();
  const dates: Record<string, Dayjs> = {};
  for (const post of posts) {
    dates[post] = dayjs((await import(`^/posts/${post}.mdx`)).frontmatter.date);
  }
  posts.sort((a, b) => (dates[a].isAfter(dates[b]) ? -1 : 1));
  return posts;
};
