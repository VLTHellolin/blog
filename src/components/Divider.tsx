import { cn } from '@/lib/utils';

export function Divider({ className, ...props }: React.ComponentPropsWithRef<'hr'>) {
  return (
    <hr className={cn('shrink-0 bg-border h-1px w-full', className)} {...props} />
  );
}
