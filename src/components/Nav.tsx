import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { Button } from './ui/button';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export function Nav() {
  return (
    <nav className='fixed top-2 z-100 w-full flex justify-center'>
      <div className='flex items-center gap-1 border rounded-md border-solid bg-background/60 px-2 py-1 backdrop-blur'>
        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>Home</NextLink>
        </Button>
        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>Archive</NextLink>
        </Button>
        <Button variant='ghost' size='sm' asChild>
          <NextLink href='/'>About</NextLink>
        </Button>
        <Button variant='ghost' size='icon' asChild>
          <NextLink href='/'>
            <Icon icon='lucide:search' />
          </NextLink>
        </Button>
        <Button variant='ghost' size='icon' asChild>
          <NextLink href='/'>
            <Icon icon='lucide:rss' />
          </NextLink>
        </Button>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
