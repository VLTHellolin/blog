import { getSortedPosts } from '@/lib/posts';
import { Post } from './Post';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';

export async function PostList() {
  const posts = await getSortedPosts();

  return (
    <>
      <div className='grid grid-cols-2 gap-2'>
        {posts.map(e => (
          <Post post={e} key={e} />
        ))}
      </div>
      <Pagination className='mt-5'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href='#' isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>5</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
