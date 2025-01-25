import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';

import '@unocss/reset/tailwind.css';
import '@/styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='chrome=1' />
        <link rel='stylesheet' href='https://cdn.hellolin.top/npm/katex@0.16.21/dist/katex.min.css' crossOrigin='anonymous' />
      </head>
      <body>
        <ViewTransitions>
          <ThemeProvider attribute='class' defaultTheme='system'>
            <Nav />
            <main className='mt-20 flex justify-center'>
              <div className='grid grid-cols-5 gap-2 container'>
                <div className='col-span-1'>
                  <div className='sticky top-20 flex flex-col gap-2'>
                    <Sidebar />
                  </div>
                </div>
                <div className='col-span-4'>
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </ThemeProvider>
        </ViewTransitions>
      </body>
    </html>
  );
};
