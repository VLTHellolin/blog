import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { ThemeProvider } from 'next-themes';

import 'normalize.css';
import '@/styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='chrome=1' />
        <link rel='stylesheet' href='https://cdn.hellolin.top/npm/katex@0.16.19/dist/katex.min.css' crossOrigin='anonymous' />
      </head>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
