import { cn } from '@/lib/utils';

export function Pre({ children, className, ...props }: React.ComponentPropsWithRef<'pre'>) {
  return (
    <div className='relative my-4 rounded-2'>
      <pre className={cn('relative p-4', className)} {...props}>
        {children}
      </pre>
    </div>
  );
}
