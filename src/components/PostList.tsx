import { getPosts } from '@/lib/posts';
import { Link } from './Link';

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map(e => (
        <li key={e}>
          <Link href={`/posts/${e}`}>{e}</Link>
        </li>
      ))}
    </ul>
  );
};
