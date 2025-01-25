import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProvider } from 'next-themes';

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
        <ThemeProvider attribute='class' defaultTheme='system'>
          <Nav />
          <main className='mt-20 flex justify-center'>
            <div className='flex gap-2 container'>
              <div className='flex flex-col gap-2'>
                <Sidebar />
              </div>
              <div className='w-full'>
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};
