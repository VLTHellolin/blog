import { Icon } from '@iconify/react';
import { Link as NextLink } from 'next-view-transitions';
import dynamic from 'next/dynamic';
import NextLinkWithoutVTA from 'next/link';
import { Button } from './ui/button';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export function Nav() {
  return (
    <nav className='fixed top-0 z-100 w-full flex justify-center border-b bg-background/70 backdrop-blur'>
      <div className='h-14 flex items-center container'>
        <NextLink className='mr-4 flex items-center gap-2 font-bold' href='/'>
          <Icon icon='lucide:book-text' />
          Hellolin's Blog
        </NextLink>

        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>Home</NextLink>
        </Button>
        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>Archive</NextLink>
        </Button>
        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>About</NextLink>
        </Button>

        <div className='m-a' />

        <Button variant='ghost' size='icon' asChild>
          <NextLink href='/'>
            <Icon icon='lucide:search' />
          </NextLink>
        </Button>
        <Button variant='ghost' size='icon' asChild>
          <NextLinkWithoutVTA href='/api/feed' target='_blank'>
            <Icon icon='lucide:rss' />
          </NextLinkWithoutVTA>
        </Button>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
