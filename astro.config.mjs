// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import yaml from '@rollup/plugin-yaml'

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';
import { Langs } from './src/i18n/config';
import config from './typewriter.config';

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl,
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
    defaultLocale: config.i18n.defaultLang,
    locales: Langs,
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
