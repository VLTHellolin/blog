'use client';

import type { TocHeading } from '@/plugins/remark-mdx-toc';
import { cn } from '@/lib/utils';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export function TOC({
  toc,
}: {
  toc: TocHeading[];
}) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('.toc-heading'));

      for (const heading of headingElements) {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
          setActiveId(heading.id);
          return;
        }
      }
    };

    handleScroll(); // immediatly update
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  return (
    <ul className='ml-1 list-none text-muted-foreground'>
      {toc.map(({ depth, title, link }) => (
        <li className={cn('transition-colors', link === activeId ? 'text-foreground' : 'hover:text-foreground')} style={{ marginLeft: `${depth - 2}rem` }} key={link}>
          <NextLink href={`#${link}`}>
            {title}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
