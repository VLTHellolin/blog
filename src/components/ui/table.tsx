import { cn } from '@/lib/utils';

import * as React from 'react';

function Table({ ref, className, ...props }: React.HTMLAttributes<HTMLTableElement> & { ref?: React.RefObject<HTMLTableElement> }) {
  return (
    <div className='relative w-full overflow-auto'>
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ ref, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement> }) {
  return <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />;
}

function TableBody({ ref, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement> }) {
  return (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}

function TableFooter({ ref, className, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.RefObject<HTMLTableSectionElement> }) {
  return (
    <tfoot
      ref={ref}
      className={cn(
        'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ ref, className, ...props }: React.HTMLAttributes<HTMLTableRowElement> & { ref?: React.RefObject<HTMLTableRowElement> }) {
  return (
    <tr
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ ref, className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement> & { ref?: React.RefObject<HTMLTableCellElement> }) {
  return (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ ref, className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement> & { ref?: React.RefObject<HTMLTableCellElement> }) {
  return (
    <td
      ref={ref}
      className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  );
}

function TableCaption({ ref, className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement> & { ref?: React.RefObject<HTMLTableCaptionElement> }) {
  return (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
