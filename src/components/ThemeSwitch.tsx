'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const startTransition = () => {
    // eslint-disable-next-line ts/no-unnecessary-condition
    if (!document.startViewTransition)
      toggleTheme();
    else document.startViewTransition(toggleTheme);
  };

  return (
    <Button variant='ghost' size='icon' onClick={startTransition}>
      <div className='i-lucide-sun dark:i-lucide-moon' />
    </Button>
  );
}

// For dynamic loading
export default ThemeSwitch;
