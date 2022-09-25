import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import webfontDownload from 'vite-plugin-webfont-dl';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), webfontDownload(), Sitemap()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
