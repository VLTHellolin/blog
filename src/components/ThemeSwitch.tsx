'use client';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const startTransition = () => {
    if (!document.startViewTransition)
      toggleTheme();
    else document.startViewTransition(toggleTheme);
  };

  return (
    <Button variant='ghost' size='icon' onClick={startTransition}>
      <Icon icon={theme === 'dark' ? 'lucide:moon' : 'lucide:sun'} />
    </Button>
  );
}

// For dynamic loading
export default ThemeSwitch;
