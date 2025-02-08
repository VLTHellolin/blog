import { Nav } from '@/components/Nav';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';
import * as React from 'react';

import '@unocss/reset/tailwind.css';
import '@/styles/global.css';
import 'katex/dist/katex.min.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='chrome=1' />
      </head>
      <body>
        <ViewTransitions>
          <ThemeProvider attribute='class' defaultTheme='system'>
            <Nav />
            {children}
          </ThemeProvider>
        </ViewTransitions>
        {process.env.NODE_ENV === 'production' && <Script defer src='https://umami.admin.hellolin.top/script.js' data-website-id='987464e7-93d8-4f20-96da-12ff04815703' />}
      </body>
    </html>
  );
}
