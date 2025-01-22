import { Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';

export const PostCard = async ({
  post,
}: {
  post: string;
}) => {
  const { frontmatter } = await import(`^/posts/${post}.mdx`);

  return (
    <div className='post-card'>
      <Heading as='h4' className='post-card-title'>
        <Link href={`/posts/${post}`}>{frontmatter.title}</Link>
      </Heading>
      <Text color='gray'>{frontmatter.description}</Text>
    </div>
  );
};
