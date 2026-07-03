// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import yaml from '@rollup/plugin-yaml'

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tw.amase.cc',
  integrations: [icon(), vue(), sitemap()],
  vite: {
    plugins: [tailwindcss(), yaml()],
    build: {
      rollupOptions: {
        external: [/^\/pagefind\//],
      },
    }
  },
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});