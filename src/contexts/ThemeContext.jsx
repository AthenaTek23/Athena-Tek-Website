import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Force light mode only - no theme switching
  const theme = 'light';

  useEffect(() => {
    // Set light mode on document
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'brand');
    root.classList.add('light');
  }, []);

  const value = {
    theme,
    setTheme: () => {}, // No-op since we only support light mode
    toggleTheme: () => {}, // No-op since we only support light mode
    isDark: false,
    isLight: true,
    isBrand: false,
    isSepia: false,
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
