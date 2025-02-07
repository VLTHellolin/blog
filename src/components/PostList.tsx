import { getSortedPosts } from '@/lib/posts';
import { Post } from './Post';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination';

export async function PostList({ page }: { page: number }) {
  // 8 posts per page
  const posts = await getSortedPosts();
  const postsLength = Math.ceil(posts.length / 8);
  const currentPosts = posts.slice((page - 1) * 8, page * 8);

  const getLink = (target: number) => target === 1 ? '/blog' : `/blog/${page}`;

  return (
    <>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
        {currentPosts.map(e => (
          <Post post={e} key={e} />
        ))}
      </div>
      <Pagination className='mt-5'>
        <PaginationContent>
          {
            page !== 1
            && (
              <PaginationItem>
                <PaginationPrevious href={getLink(page - 1)} />
              </PaginationItem>
            )
          }

          <PaginationItem>
            <PaginationLink href='/blog' isActive={page === 1}>1</PaginationLink>
          </PaginationItem>

          {
            page > 3
            && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          {
            page - 1 > 1
            && (
              <PaginationItem>
                <PaginationLink href={getLink(page - 1)}>{page - 1}</PaginationLink>
              </PaginationItem>
            )
          }

          {
            page !== 1 && page !== postsLength
            && (
              <PaginationItem>
                <PaginationLink href='#' isActive>{page}</PaginationLink>
              </PaginationItem>
            )
          }

          {
            page + 1 < postsLength
            && (
              <PaginationItem>
                <PaginationLink href={getLink(page + 1)}>{page + 1}</PaginationLink>
              </PaginationItem>
            )
          }

          {
            page <= postsLength - 3
            && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          {
            postsLength !== 1
            && (
              <PaginationItem>
                <PaginationLink href={getLink(postsLength)} isActive={page === postsLength}>{postsLength}</PaginationLink>
              </PaginationItem>
            )
          }

          {
            page !== postsLength
            && (
              <PaginationItem>
                <PaginationNext href={getLink(page + 1)} />
              </PaginationItem>
            )
          }
        </PaginationContent>
      </Pagination>
    </>
  );
}
