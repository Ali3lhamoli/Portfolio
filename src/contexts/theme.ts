import { createContext, useContext } from 'react';

export type Theme = 'dark' | 'light';

export type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

export const THEME_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * The site is dark-first: dark is the default unless the visitor has
 * explicitly chosen light before.
 */
export function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // localStorage can throw in private mode — fall through to the default.
  }
  return 'dark';
}
