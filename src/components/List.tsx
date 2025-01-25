import { cn } from '@/lib/utils';

export function UnorderedList({ children, className, ...props }: React.ComponentPropsWithRef<'ul'>) {
  return (
    <ul className={cn('my-4 ml-6 list-disc', className)} {...props}>
      {children}
    </ul>
  );
}

export function OrderedList({ children, className, ...props }: React.ComponentPropsWithRef<'ol'>) {
  return (
    <ol className={cn('my-4 ml-6 list-disc', className)} {...props}>
      {children}
    </ol>
  );
}

export function ListItem({ children, className, ...props }: React.ComponentPropsWithRef<'li'>) {
  return (
    <li className={cn('mt-2', className)} {...props}>
      {children}
    </li>
  );
}
