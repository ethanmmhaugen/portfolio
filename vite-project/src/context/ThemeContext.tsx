// src/context/ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType } from '../types';
import { initial_themes, ThemeType } from '../services/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

// Create the Theme Context with default values
export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: initial_themes[0],
  changeTheme: () => {},
  themeOptions: initial_themes,
  setThemeOptions: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeOptions, setThemeOptions] = useState<ThemeType[]>(initial_themes);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(initial_themes[0]);

  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType | null;
    if (savedTheme && themeOptions.includes(savedTheme)) {
      setSelectedTheme(savedTheme);
      document.body.classList.add(savedTheme.class);
    } else {
      document.body.classList.add('theme-1');
    }
    // Cleanup: Remove all themes except the active one
    return () => {
      themeOptions.forEach((theme: ThemeType) => {
        if (theme !== savedTheme) {
          document.body.classList.remove(theme.class);
        }
      });
    };
  }, [themeOptions]);

  const changeTheme = (newTheme: ThemeType) => {
    if (!themeOptions.includes(newTheme)) return;

    // Remove all existing theme classes
    themeOptions.forEach((theme: ThemeType) => {
      document.body.classList.remove(theme.class);
    });

    // Add the new theme class
    document.body.classList.add(newTheme.class);

    // Update state
    setSelectedTheme(newTheme);

    // Save to localStorage
    localStorage.setItem('selectedTheme', newTheme.toString());
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, changeTheme, themeOptions, setThemeOptions }}>
      {children}
    </ThemeContext.Provider>
  );
};
