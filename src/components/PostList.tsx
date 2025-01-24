import { getSortedPosts } from '@/lib/posts';
import { Post } from './Post';

export async function PostList() {
  const posts = await getSortedPosts();

  return (
    <div className='flex flex-col gap-2'>
      {posts.map(e => (
        <Post post={e} key={e} />
      ))}
    </div>
  );
}
