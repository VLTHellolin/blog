import dynamic from 'next/dynamic';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export function Nav() {
  return (
    <nav>
      <ThemeSwitch />
    </nav>
  );
}
