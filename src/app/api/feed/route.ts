import { getSortedPosts } from '@/lib/posts';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Hellolin\'s Blog',
    description: 'Latest posts from my blog',
    feed_url: 'https://hellolin.top/api/feed',
    site_url: 'https://hellolin.top',
    language: 'zh-CN',
  });

  const posts = await getSortedPosts();

  for (const postPath of posts) {
    const { frontmatter } = await import(`^/posts/${postPath}.md`);

    feed.item({
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://hellolin.top/post/${postPath}`,
      date: frontmatter.date,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
