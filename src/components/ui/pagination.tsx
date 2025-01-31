import type { ButtonProps } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// import NextLink from 'next/link';
import { Link as NextLink } from 'next-view-transitions';

function Pagination({ className, ...props }: React.ComponentPropsWithRef<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentPropsWithRef<'ul'>) {
  return (
    <ul
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentPropsWithRef<'li'>) {
  return <li className={cn('', className)} {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
React.ComponentPropsWithRef<typeof NextLink>;

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <NextLink
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label='Go to previous page'
      size='default'
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <div className='i-lucide-chevron-left h-4 w-4' />
      <span>Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label='Go to next page'
      size='default'
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <div className='i-lucide-chevron-right h-4 w-4' />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <div className='i-lucide-more-horizontal h-4 w-4' />
      <span className='sr-only'>More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
