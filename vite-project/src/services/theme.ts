export const injectThemeCSS = (theme: ThemeType) => {
  const cssContent = `
      /* Theme: ${theme.name} */
      .${theme.class} {
        --primary-color: ${theme.scss.primary_color};
        --secondary-color: ${theme.scss.secondary_color};
        --default-text-color: ${theme.scss.default_text_color};
        --secondary-text-color-light: ${theme.scss.secondary_text_color_light};
        --secondary-text-color-dark: ${theme.scss.secondary_text_color_dark};
        --highlight-color-1: ${theme.scss.highlight_color_1};
        --highlight-color-2: ${theme.scss.highlight_color_2};
        --highlight-color-3: ${theme.scss.highlight_color_3};
      }
    `;

  const styleElement = document.createElement('style');
  styleElement.innerHTML = cssContent;
  document.head.appendChild(styleElement);
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
      secondary_text_color_light: '#f5f5f5', // Soft Off-White
      secondary_text_color_dark: '#1a1a1a', // Dark (Same as Secondary Color)
      highlight_color_1: '#e50914', // Accent Red
      highlight_color_2: '#ffc107', // Amber
      highlight_color_3: '#03dac6', // Teal
    },
  },
  {
    name: 'Deep Space',
    class: 'theme-2',
    canEdit: false,
    scss: {
      primary_color: '#1b1b2f',
      secondary_color: '#162447',
      default_text_color: '#d4d4d4',
      secondary_text_color_light: '#f8f8f8', // Very Light Off-White
      secondary_text_color_dark: '#162447', // Dark (Same as Secondary Color)
      highlight_color_1: '#e43f5a', // Coral
      highlight_color_2: '#f2d388', // Sand
      highlight_color_3: '#e3e3e3', // Light Gray
    },
  },
  {
    name: 'Forest Twighlight',
    class: 'theme-3',
    canEdit: false,
    scss: {
      primary_color: '#0a0a0a',
      secondary_color: '#1f2a44',
      default_text_color: '#cccccc',
      secondary_text_color_light: '#f2f2f2', // Light Off-White
      secondary_text_color_dark: '#1f2a44', // Dark (Same as Secondary Color)
      highlight_color_1: '#4caf50', // Green
      highlight_color_2: '#ffc107', // Amber
      highlight_color_3: '#ff5722', // Deep Orange
    },
  },
  {
    name: 'Sapphire Night',
    class: 'theme-4',
    canEdit: false,
    scss: {
      primary_color: '#0b0c10',
      secondary_color: '#1f2833',
      default_text_color: '#e8e8e8',
      secondary_text_color_light: '#fafafa', // Almost White
      secondary_text_color_dark: '#1f2833', // Dark (Same as Secondary Color)
      highlight_color_1: '#c5c6c7', // Light Gray
      highlight_color_2: '#66fcf1', // Cyan
      highlight_color_3: '#45a29e', // Teal
    },
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
    secondary_text_color_light: string;
    secondary_text_color_dark: string;
    highlight_color_1: string;
    highlight_color_2: string;
    highlight_color_3: string;
  };
};
