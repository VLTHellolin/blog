import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { Nav } from './Nav';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Theme>
        <Nav />
        {children}
      </Theme>
    </ThemeProvider>
  );
};
