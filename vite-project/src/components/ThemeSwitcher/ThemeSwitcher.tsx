// src/components/ThemeSwitcher.tsx
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeName } from '../../types';
import './ThemeSwitcher.scss';
import { injectThemeCSS, ThemeType } from '../../services/theme';
import Theme from './Theme/Theme';

const ThemeSwitcher: React.FC = () => {
  const { themeOptions, setThemeOptions } = useContext(ThemeContext);

  // const themeNames: Record<ThemeName, string> = {
  //   'theme-1': 'Night Sky',
  //   'theme-2': 'Deep Space',
  //   'theme-3': 'Forest Twilight',
  //   'theme-4': 'Sapphire Night',
  // };

  const addTheme = () => {
    const newTheme: ThemeType = {
      name: 'TEST',
      class: 'theme-5',
      canEdit: true,
      scss: {
        primary_color: '#FF7E5F', // Warm Orange
        secondary_color: '#FEB47B', // Soft Pink
        default_text_color: '#FFFFFF', // White
        secondary_text_color_light: '#FFE5D9', // Light Peach
        secondary_text_color_dark: '#FEB47B', // Soft Pink (Same as Secondary Color)
        highlight_color_1: '#FF6E7F', // Coral Pink
        highlight_color_2: '#BFE9FF', // Sky Blue
        highlight_color_3: '#A8EDEA', // Light Aqua
      },
    };

    setThemeOptions((prevThemes: ThemeType[]) => [...prevThemes, newTheme]);
    injectThemeCSS(newTheme);
  };

  return (
    <div className="theme-switcher">
      {themeOptions.map((theme: ThemeType) => (
        <Theme theme={theme} />
      ))}
      <button onClick={addTheme}>ADD NEW</button>
    </div>
  );
};

export default ThemeSwitcher;
