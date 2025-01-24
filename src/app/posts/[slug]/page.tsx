import { getPosts } from '@/lib/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(post => ({ slug: post }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: MDX, frontmatter } = await import(`^/posts/${slug}.mdx`);

  return (
    <>
      Date:
      {' '}
      {frontmatter.date}
      <MDX />
    </>
  );
};
