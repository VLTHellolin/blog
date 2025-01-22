import { getSortedPosts } from '@/lib/posts';
import { PostCard } from './PostCard';

export const PostList = async () => {
  const posts = await getSortedPosts();

  return (
    <div>
      {posts.map(e => (
        <PostCard post={e} key={e} />
      ))}
    </div>
  );
};
