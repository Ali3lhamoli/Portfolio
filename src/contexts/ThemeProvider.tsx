import { useCallback, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  THEME_STORAGE_KEY,
  ThemeContext,
  readInitialTheme,
  type Theme,
} from './theme';

/**
 * Tokens in index.css key off `.light`, and `.dark` is kept in sync so
 * Tailwind's `dark:` variant stays usable alongside the token system.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Persisting the preference is best-effort only.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
