import { cn } from '@/lib/utils';

export function Paragraph({ children, className, ...props }: React.ComponentPropsWithRef<'p'>) {
  return (
    <p className={cn('leading-7 not-first:mt-6', className)} {...props}>
      {children}
    </p>
  );
}
