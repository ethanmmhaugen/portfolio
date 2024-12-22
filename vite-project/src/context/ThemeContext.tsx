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
  removeTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeOptions, setThemeOptions] = useState<ThemeType[]>(initial_themes);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(initial_themes[0]);

  const defaultTheme = initial_themes[0];
  // Load saved theme from localStorage on initial render
  useEffect(() => {
    const savedThemeString = localStorage.getItem('selectedTheme');
    let savedTheme: ThemeType | null = null;

    if (savedThemeString) {
      try {
        savedTheme = JSON.parse(savedThemeString) as ThemeType;
      } catch (error) {
        console.error('Error parsing saved theme:', error);
      }
    }

    if (savedTheme && themeOptions.some((theme) => theme.class === savedTheme.class)) {
      setSelectedTheme(savedTheme);
      document.body.classList.add(savedTheme.class);
    } else {
      setSelectedTheme(defaultTheme);
      document.body.classList.add(defaultTheme.class);
    }

    // Cleanup: Remove all themes except the active one
    return () => {
      themeOptions.forEach((theme: ThemeType) => {
        if (!(savedTheme && theme.class === savedTheme.class)) {
          document.body.classList.remove(theme.class);
        }
      });
    };
    // Run only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Removed themeOptions from dependencies

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
    localStorage.setItem('selectedTheme', JSON.stringify(newTheme));
  };

  const removeTheme = (themeClass: string) => {
    document.body.classList.remove(themeClass);
    if (themeClass === selectedTheme.class) {
      setSelectedTheme(defaultTheme);
      document.body.classList.add(defaultTheme.class);
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, changeTheme, themeOptions, setThemeOptions, removeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
