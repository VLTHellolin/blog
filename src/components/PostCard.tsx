import Link from 'next/link';

export async function PostCard({
  post,
}: {
  post: string;
}) {
  const { frontmatter } = await import(`^/posts/${post}.mdx`);

  return (
    <div className='post-card'>
      <h4>
        <Link href={`/posts/${post}`}>{frontmatter.title}</Link>
      </h4>
      <p>{frontmatter.description}</p>
    </div>
  );
}
