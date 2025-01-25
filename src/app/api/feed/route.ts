import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Hellolin\'s Blog',
    description: 'Latest posts from my blog',
    feed_url: 'https://hellolin.top/api/feed',
    site_url: 'https://hellolin.top',
    language: 'zh-CN',
  });

  // const response = await fetch('https://example.com/api/posts');
  // const posts = await response.json();

  // posts.forEach((post) => {
  //   feed.item({
  //     title: post.title,
  //     description: post.description,
  //     url: `https://example.com/posts/${post.slug}`,
  //     date: post.publishedAt,
  //   });
  // });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
