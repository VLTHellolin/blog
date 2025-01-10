import { Layout } from '@/components/Layout';

import '@radix-ui/themes/styles.css';
import '@/assets/index.css';

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};
