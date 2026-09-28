import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://achim.ismaili.de',
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') }), react()],
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    // @easy-web/content-blocks depends on @easy-web/theme-core and this project
    // declares it directly. Dedupe so both resolve to one copy -- two theme-core
    // instances would emit duplicate tokens and race the no-flash script.
    resolve: {
      dedupe: ['@easy-web/theme-core', 'react', 'react-dom'],
    },
  },
});
