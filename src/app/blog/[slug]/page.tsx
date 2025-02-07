import { Container } from '@/components/Container';
import { PostList } from '@/components/PostList';
import { getPosts } from '@/lib/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  const postsLength = Math.ceil(posts.length / 8);
  const result = [];

  for (let i = 2; i <= postsLength; ++i) {
    result.push({ slug: i.toString() });
  }

  return (await getPosts()).map(post => ({ slug: post }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return (
    <Container>
      <PostList page={Number.parseInt(slug)} />
    </Container>
  );
}
