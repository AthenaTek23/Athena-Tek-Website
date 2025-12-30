import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

const THEMES = ['dark', 'light', 'brand'];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('athena-theme');
      if (stored && THEMES.includes(stored)) return stored;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    // Update document class and localStorage
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'brand');
    root.classList.add(theme);
    localStorage.setItem('athena-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const currentIndex = THEMES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      return THEMES[nextIndex];
    });
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isBrand: theme === 'brand',
    isSepia: theme === 'brand', // Keep for backward compatibility
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
