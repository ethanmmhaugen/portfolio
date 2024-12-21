// src/components/ThemeSwitcher.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeName } from '../../types';
import './ThemeSwitcher.scss';

const ThemeSwitcher: React.FC = () => {
  const { theme, changeTheme, themes } = useContext(ThemeContext);

  // Optional: Define human-readable theme names
  const themeNames: Record<ThemeName, string> = {
    'theme-1': 'Night Sky',
    'theme-2': 'Deep Space',
    'theme-3': 'Forest Twilight',
    'theme-4': 'Sapphire Night',
  };

  return (
    <div className="theme-switcher">
      {themes.map((themeName) => (
        <button
          key={themeName}
          onClick={() => changeTheme(themeName)}
          className={theme === themeName ? 'active' : ''}
          aria-label={`Switch to ${themeNames[themeName]} theme`}
        >
          {themeNames[themeName]}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
