import { cn } from '@/lib/utils';
// import NextLink from 'next/link';
import { Link as NextLink } from 'next-view-transitions';

export function Link({ className, children, ...props }: React.ComponentPropsWithRef<typeof NextLink>) {
  return (
    <NextLink className={cn('underline underline-offset-4 decoration-from-font', className)} {...props}>
      {children}
    </NextLink>
  );
}
