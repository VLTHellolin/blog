import { cn } from '@/lib/utils';

export function headingFactory(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    const Tag = `h${level}` as const;
    const classes = cn(
      'tracking-tight text-slate-900 dark:text-slate-100',
      Tag === 'h1'
        ? 'font-bold'
        : 'font-semibold target:animate-[fade-in_1.5s]',
      {
        h1: 'mt-2 text-4xl',
        h2: 'mt-10 border-b pb-1 text-3xl',
        h3: 'mt-8 text-2xl',
        h4: 'mt-8 text-xl',
        h5: 'mt-8 text-lg',
        h6: 'mt-8 text-base',
      }[Tag],
      className,
    );

    return (
      <Tag className={classes} {...props}>
        {children}
      </Tag>
    );
  };
};
