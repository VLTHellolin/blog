import { cn } from '@/lib/utils';
import NextLink from 'next/link';

export function Link({ className, children, ...props }: React.ComponentPropsWithRef<typeof NextLink>) {
  return (
    <NextLink className={cn('underline hover:no-underline decoration-from-font', className)} {...props}>
      {children}
    </NextLink>
  );
}
