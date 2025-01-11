'use client';

import { Icon, loadIcons } from '@iconify/react';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  loadIcons(['ri:moon-line', 'ri:sun-line']);

  return (
    <IconButton color='gray' variant='ghost' radius='full' size='2' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Icon icon={theme === 'dark' ? 'ri:moon-line' : 'ri:sun-line'} width={20} />
    </IconButton>
  );
};

// For dynamic loading
export default ThemeSwitch;
