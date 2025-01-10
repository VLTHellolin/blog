'use client';

import { Icon } from '@iconify/react';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton className='theme-switch' color='gray' variant='ghost' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Icon icon={theme === 'dark' ? 'radix-icons:moon' : 'radix-icons:sun'} />
    </IconButton>
  );
};

// For dynamic loading
export default ThemeSwitch;
