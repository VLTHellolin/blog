import { cn } from '@/lib/utils';
import * as React from 'react';

export function Paragraph({ children, className, ...props }: React.ComponentPropsWithRef<'p'>) {
  return (
    <p className={cn('leading-7 not-first:mt-4', className)} {...props}>
      {children}
    </p>
  );
}
