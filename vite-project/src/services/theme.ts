import theme1image1 from '@images/night-sky/image1.jpg';
import theme1image2 from '@images/night-sky/image2.jpg';
import theme2image1 from '@images/deep-space/image1.jpg';
import theme2image2 from '@images/deep-space/image2.jpg';
import theme3image1 from '@images/forest-path/image1.jpg';
import theme3image2 from '@images/forest-path/image2.jpg';
import theme4image1 from '@images/desert-planet/image1.jpg';
import theme4image2 from '@images/desert-planet/image2.jpg';

export const injectThemeCSS = (theme: ThemeType): void => {
  const cssContent = `
      /* Theme: ${theme.name} */
      .${theme.class} {
        --primary-color: ${theme.scss.primary_color};
        --secondary-color: ${theme.scss.secondary_color};
        --default-text-color: ${theme.scss.default_text_color};
        --highlight-color-1: ${theme.scss.highlight_color_1};
        --highlight-color-2: ${theme.scss.highlight_color_2};
        --highlight-color-3: ${theme.scss.highlight_color_3};
      }
    `;

  const styleElement = document.createElement('style');
  styleElement.id = `theme-style-${theme.class}`; // Assign a unique ID based on theme class
  styleElement.innerHTML = cssContent;
  document.head.appendChild(styleElement);
};

export const removeThemeCSS = (themeClass: string): void => {
  const styleElement = document.getElementById(`theme-style-${themeClass}`);
  if (styleElement && styleElement.parentNode) {
    styleElement.parentNode.removeChild(styleElement);
  }
};

export const initial_themes: ThemeType[] = [
  {
    name: 'Night Sky',
    class: 'theme-1',
    canEdit: false,
    scss: {
      primary_color: '#0d0d0d',
      secondary_color: '#1a1a1a',
      default_text_color: '#e0e0e0',
      highlight_color_1: '#e50914', // Accent Red
      highlight_color_2: '#ffc107', // Amber
      highlight_color_3: '#03dac6', // Teal
    },
    images: [theme1image1, theme1image2],
  },
  {
    name: 'Deep Space',
    class: 'theme-2',
    canEdit: false,
    scss: {
      primary_color: '#1b1b2f',
      secondary_color: '#162447',
      default_text_color: '#d4d4d4',
      highlight_color_1: '#e43f5a', // Coral
      highlight_color_2: '#f2d388', // Sand
      highlight_color_3: '#e3e3e3', // Light Gray
    },
    images: [theme2image1, theme2image2],
  },
  {
    name: 'Forest Path',
    class: 'theme-3',
    canEdit: false,
    scss: {
      primary_color: '#0a0a0a',
      secondary_color: '#1f2a44',
      default_text_color: '#cccccc',
      highlight_color_1: '#4caf50', // Green
      highlight_color_2: '#ffc107', // Amber
      highlight_color_3: '#ff5722', // Deep Orange
    },
    images: [theme3image1, theme3image2],
  },
  {
    name: 'Dirt',
    class: 'theme-4',
    canEdit: false,
    scss: {
      primary_color: '#0b0c10',
      secondary_color: '#1f2833',
      default_text_color: '#e8e8e8',
      highlight_color_1: '#c5c6c7', // Light Gray
      highlight_color_2: '#66fcf1', // Cyan
      highlight_color_3: '#45a29e', // Teal
    },
    images: [theme4image1, theme4image2],
  },
];

export type ThemeType = {
  name: string;
  class: string;
  canEdit: boolean;
  scss: {
    primary_color: string;
    secondary_color: string;
    default_text_color: string;
    highlight_color_1: string;
    highlight_color_2: string;
    highlight_color_3: string;
  };
  images: string[];
};
