import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  );
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
