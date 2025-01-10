import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { IconButton } from '@radix-ui/themes';
import { Icon } from '@iconify/react';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <NextLink className='nav-link' href={href}>
      {children}
    </NextLink>
  );
};

const NavButton = ({ href, icon }: { href: string; icon: string }) => {
  return (
    <NextLink href={href}>
      <IconButton color='gray' variant='ghost' radius='full' size='2'>
        <Icon icon={icon} width={20} />
      </IconButton>
    </NextLink>
  );
};

export const Nav = () => {
  return (
    <nav>
      <NavLink href='/'>
        <div className='nav-title'>Hellolin's Blog</div>
      </NavLink>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/posts'>Posts</NavLink>

      <div className='spacer' />

      <NavButton href='/feed.xml' icon='ri:rss-line' />
      <ThemeSwitch />
    </nav>
  );
};
