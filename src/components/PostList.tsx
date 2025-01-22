import { getSortedPosts } from '@/lib/posts';
import { PostCard } from './PostCard';

export async function PostList() {
  const posts = await getSortedPosts();

  return (
    <div>
      {posts.map(e => (
        <PostCard post={e} key={e} />
      ))}
    </div>
  );
}
