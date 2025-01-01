import { create } from 'zustand';

type Theme = 'light' | 'dark';

const getDefaultTheme = () => {
  let stored = localStorage.getItem('theme') as Theme | null;
  if (!stored) {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    stored = darkQuery.matches ? 'dark' : 'light';
  }
  return stored;
};

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
  theme: getDefaultTheme(),
  toggleTheme: () =>
    set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
}));
