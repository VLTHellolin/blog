import { cn } from '@/lib/utils';
import * as React from 'react';

export function Leading({ children, className, ...props }: React.ComponentPropsWithRef<'p'>) {
  return (
    <p className={cn('text-xl text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}
