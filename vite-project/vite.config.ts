// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@design-system/styles/index.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@design-system': path.resolve(__dirname, 'design-system'),
      '@icons': path.resolve(__dirname, 'src/assets/SVG'),
    },
  },
});
