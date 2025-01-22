'use client';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Icon icon={theme === 'dark' ? 'lucide:moon' : 'lucide:sun'} />
    </Button>
  );
}

// For dynamic loading
export default ThemeSwitch;
