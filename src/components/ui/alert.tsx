import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { cva, type VariantProps } from 'class-variance-authority';

import * as React from 'react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground [&>svg]:text-foreground',
        info: 'border-brand/50 text-brand dark:border-brand [&>svg]:text-brand',
        warning: 'border-warning/50 text-warning dark:border-warning [&>svg]:text-warning',
        important: 'border-important/50 text-important dark:border-important [&>svg]:text-important',
        success: 'border-success/50 text-success dark:border-success [&>svg]:text-success',
        danger: 'border-danger/50 text-danger dark:border-danger [&>svg]:text-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function AlertIcon({ variant }: VariantProps<typeof alertVariants>) {
  const icons = {
    default: 'lucide:chevron-right',
    info: 'lucide:info',
    warning: 'lucide:triangle-alert',
    important: 'lucide:circle-alert',
    success: 'lucide:circle-check',
    danger: 'lucide:circle-x',
  };
  return (
    <Icon icon={icons[variant ?? 'default']} className='h-4 w-4' />
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
