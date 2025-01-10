import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import type React from 'react';
import dynamic from 'next/dynamic';

import '@radix-ui/themes/styles.css';
import '@/assets/index.css';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='chrome=1' />
        <link rel='stylesheet' href='https://cdn.hellolin.top/npm/katex@0.16.19/dist/katex.min.css' crossOrigin='anonymous' />
      </head>
      <body>
        <ThemeProvider attribute='class'>
          <Theme>
            <ThemeSwitch />
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};
