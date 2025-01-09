import { getPosts } from '@/lib/posts';
import { Container } from '@radix-ui/themes';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return (await getPosts()).map(post => ({ slug: post }));
};

export default async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const { default: MDX } = await import(`^/posts/${slug}.mdx`);

  return (
    <Container>
      <MDX />
    </Container>
  );
};
