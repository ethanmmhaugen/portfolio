// src/types.d.ts

export type ThemeName = 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4';

export interface ThemeContextType {
  theme: ThemeName;
  changeTheme: (theme: ThemeName) => void;
  themes: ThemeName[];
}
