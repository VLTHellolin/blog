import { cn } from '@/lib/utils';
import { Link as NextLink } from 'next-view-transitions';
import dynamic from 'next/dynamic';
import NextLinkWithoutVTA from 'next/link';
import { Button } from './ui/button';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

function NavLink({ href, text }: { href: string; text: string }) {
  const icons = {
    home: 'i-lucide-house',
    blog: 'i-lucide-book-text',
    projects: 'i-lucide-code-xml',
  };
  return (
    <Button variant='ghost' size='sm' asChild>
      <NextLink href={href}>
        <div className={cn(icons[text.toLowerCase() as keyof typeof icons], 'md:hidden')} />
        <span className='lt-md:hidden'>{text}</span>
      </NextLink>
    </Button>
  );
}

export function Nav() {
  return (
    <nav className='fixed top-0 z-100 w-full flex justify-center border-b bg-background/70 backdrop-blur'>
      <div className='flex justify-center container'>
        <div className='h-14 w-2/3 flex items-center'>
          <NextLink className='mr-4 flex items-center gap-2 font-bold lt-md:hidden' href='/'>
            <div className='i-lucide-chart-no-axes-gantt' />
            VLTHellolin
          </NextLink>

          <NavLink href='/' text='Home' />
          <NavLink href='/blog' text='Blog' />
          <NavLink href='/projects' text='Projects' />

          <div className='m-a' />

          <Button variant='ghost' size='icon' asChild>
            <NextLinkWithoutVTA href='/api/feed' target='_blank'>
              <div className='i-lucide-rss' />
            </NextLinkWithoutVTA>
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
