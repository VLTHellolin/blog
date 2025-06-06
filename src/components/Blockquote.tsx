import { cn } from '@/lib/utils';
import * as React from 'react';

export function Blockquote({ children, className, ...props }: React.ComponentPropsWithRef<'blockquote'>) {
  return (
    <blockquote className={cn('mt-4 border-l-2 pl-6', className)} {...props}>
      {children}
    </blockquote>
  );
}
