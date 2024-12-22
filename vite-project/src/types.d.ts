// src/types.d.ts

import { ThemeType } from './services/theme';

export type ThemeName = 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4';

export interface ThemeContextType {
  selectedTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
  themeOptions: ThemeType[];
  setThemeOptions: Dispatch<SetStateAction<ThemeType[]>>;
  removeTheme: (themeClass: string) => void;
}
