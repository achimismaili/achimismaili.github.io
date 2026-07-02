import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://achim.ismaili.de',
  integrations: [sitemap(), react()],
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // Ensure linked @achimismaili/easy-web-content-blocks resolves sibling
    // packages from this project's node_modules (needed until publish).
    resolve: {
      dedupe: ['@achimismaili/easy-web-theme-core', 'react', 'react-dom'],
    },
  },
});
