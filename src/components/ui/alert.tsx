import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

import * as React from 'react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>span~*]:pl-7 [&>span+div]:translate-y-[-3px] [&>span]:absolute [&>span]:left-4 [&>span]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        info: 'border-brand/50 text-brand dark:border-brand',
        warning: 'border-warning/50 text-warning dark:border-warning',
        important: 'border-important/50 text-important dark:border-important',
        success: 'border-success/50 text-success dark:border-success',
        danger: 'border-danger/50 text-danger dark:border-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function AlertIcon({ variant }: VariantProps<typeof alertVariants>) {
  const icons = {
    default: 'i-lucide-chevron-right',
    info: 'i-lucide-info',
    warning: 'i-lucide-triangle-alert',
    important: 'i-lucide-circle-alert',
    success: 'i-lucide-circle-check',
    danger: 'i-lucide-circle-x',
  };
  return (
    <span className={cn(icons[variant ?? 'default'], 'h-4 w-4')} />
  );
}

function Alert({ className, variant, ...props }: React.ComponentPropsWithRef<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role='alert'
      className={cn('mt-4', alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentPropsWithRef<'h5'>) {
  return (
    <h5
      className={cn('mb-1 font-bold leading-none tracking-tight', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertIcon, AlertTitle };
