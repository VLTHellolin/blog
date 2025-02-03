import { cn } from '@/lib/utils';
import { transformTitleId } from '@/plugins/utils';

function headingFactory(level: 1 | 2 | 3 | 4 | 5 | 6) {
  return function ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    const Tag = `h${level}` as const;
    const classes = cn(
      'toc-heading',
      'scroll-m-20 tracking-tight',
      Tag === 'h1'
        ? 'font-bold'
        : 'font-semibold',
      {
        h1: 'mt-2 text-3xl',
        h2: 'mt-6 border-b pb-2 text-2xl',
        h3: 'mt-6 text-xl',
        h4: 'mt-6 text-lg',
        h5: 'mt-6 text-base',
        h6: 'mt-6 text-base',
      }[Tag],
      className,
    );

    return (
      <Tag className={classes} id={transformTitleId(children as string)} {...props}>
        {children}
      </Tag>
    );
  };
};

export const H1 = headingFactory(1);
export const H2 = headingFactory(2);
export const H3 = headingFactory(3);
export const H4 = headingFactory(4);
export const H5 = headingFactory(5);
export const H6 = headingFactory(6);
