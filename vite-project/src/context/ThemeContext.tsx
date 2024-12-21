// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType, ThemeName } from '../types';

interface ThemeProviderProps {
  children: ReactNode;
}

// Create the Theme Context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme-1',
  changeTheme: () => {},
  themes: ['theme-1', 'theme-2', 'theme-3', 'theme-4'],
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themes: ThemeName[] = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
  const [theme, setTheme] = useState<ThemeName>('theme-1');

  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeName | null;
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('theme-1');
    }
    // Cleanup: Remove all themes except the active one
    return () => {
      themes.forEach((themeName) => {
        if (themeName !== savedTheme) {
          document.body.classList.remove(themeName);
        }
      });
    };
  }, [themes]);

  const changeTheme = (newTheme: ThemeName) => {
    if (!themes.includes(newTheme)) return;

    // Remove all existing theme classes
    themes.forEach((themeName) => {
      document.body.classList.remove(themeName);
    });

    // Add the new theme class
    document.body.classList.add(newTheme);

    // Update state
    setTheme(newTheme);

    // Save to localStorage
    localStorage.setItem('selectedTheme', newTheme);
  };

  return <ThemeContext.Provider value={{ theme, changeTheme, themes }}>{children}</ThemeContext.Provider>;
};
