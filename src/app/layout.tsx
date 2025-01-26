import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';

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
            <Footer />
          </ThemeProvider>
        </ViewTransitions>
      </body>
    </html>
  );
};
