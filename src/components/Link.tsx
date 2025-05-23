import { cn } from '@/lib/utils';
import { Link as NextLink } from 'next-view-transitions';
import NextLinkWithoutVTA from 'next/link';
import * as React from 'react';

export function Link({ withoutVTA, className, children, ...props }: { withoutVTA?: boolean } & React.ComponentPropsWithRef<typeof NextLink>) {
  const Component = withoutVTA ? NextLinkWithoutVTA : NextLink;
  return (
    <Component className={cn('underline underline-muted-foreground hover:underline-primary transition-colors underline-offset-4 decoration-from-font', className)} {...props}>
      {children}
    </Component>
  );
}
