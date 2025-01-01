import type React from 'react';
import { Theme } from '@radix-ui/themes';
import { useThemeStore } from '@/lib/store/theme';

import '@radix-ui/themes/styles.css';
import Script from 'next/script';

export default ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore(e => e.theme);

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Script defer src='https://umami.admin.hellolin.top/script.js' data-website-id='987464e7-93d8-4f20-96da-12ff04815703' />
      </head>
      <body>
        <Theme appearance={theme}>{children}</Theme>
      </body>
    </html>
  );
};
