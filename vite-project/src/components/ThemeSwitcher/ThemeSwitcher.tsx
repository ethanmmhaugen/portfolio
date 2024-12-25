// src/components/ThemeSwitcher.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeSwitcher.scss';
import { injectThemeCSS, removeThemeCSS, ThemeType } from '../../services/theme';
import Theme from './Theme/Theme';

const ThemeSwitcher: React.FC = () => {
  const { themeOptions, setThemeOptions, removeTheme } = useContext(ThemeContext);

  const classNumbers = themeOptions
    .map((theme) => {
      const match = theme.class.match(/^theme-(\d+)$/);
      return match ? parseInt(match[1], 10) : 0;
    })
    .filter((num) => num > 0);

  // Determine the next available number
  const nextNumber = classNumbers.length > 0 ? Math.max(...classNumbers) + 1 : 1;
  const newClass = `theme-${nextNumber}`;

  const addTheme = () => {
    const newTheme: ThemeType = {
      name: `Theme ${nextNumber}`,
      class: newClass,
      canEdit: true,
      scss: {
        primary_color: '#000000', // Black
        secondary_color: '#808080', // Grey
        default_text_color: '#FFFFFF', // White
        highlight_color_1: '#A9A9A9', // Dark Grey
        highlight_color_2: '#D3D3D3', // Light Grey
        highlight_color_3: '#C0C0C0', // Silver
      },
      images: [],
    };

    setThemeOptions((prevThemes: ThemeType[]) => [...prevThemes, newTheme]);
    injectThemeCSS(newTheme);
  };

  const deleteTheme = (themeClass: string) => {
    setThemeOptions((prevThemes: ThemeType[]) => prevThemes.filter((theme) => theme.class !== themeClass));
    removeThemeCSS(themeClass);
    removeTheme(themeClass);
  };

  const changeTheme = (updatedTheme: ThemeType) => {
    setThemeOptions((prevThemes: ThemeType[]) =>
      prevThemes.map((theme) => (theme.class === updatedTheme.class ? updatedTheme : theme))
    );

    // removeThemeCSS(updatedTheme.class);
    // injectThemeCSS(updatedTheme);
  };

  const saveTheme = (updatedTheme: ThemeType) => {
    removeThemeCSS(updatedTheme.class);
    injectThemeCSS(updatedTheme);
  };

  return (
    <div className="theme-container">
      <div className="theme-switcher">
        {themeOptions.map((theme: ThemeType) => (
          <Theme theme={theme} deleteTheme={deleteTheme} onThemeChange={changeTheme} saveTheme={saveTheme} />
        ))}
      </div>
      <button onClick={addTheme} className="new-theme-button">
        ADD NEW
      </button>
    </div>
  );
};

export default ThemeSwitcher;
