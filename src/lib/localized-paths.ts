import type { LocalizedPathGroup } from '@easy-web/i18n';

/**
 * Routes whose slug differs between DE and EN.
 *
 * Consumed by `createI18n` so the page `<head>` hreflang links point at routes
 * this site actually builds. Without a declaration here `/datenschutz/` would
 * derive the nonexistent `/en/datenschutz/`.
 *
 * Routes sharing a slug across locales -- `/about/`, `/community/`,
 * `/impressum/`, `/open-source/`, `/components/` -- pair automatically and must
 * not be listed. This site wires `@astrojs/sitemap` directly rather than
 * `@easy-web/seo`, so i18n is the only consumer.
 */
export const localizedPaths: readonly LocalizedPathGroup[] = [
  { de: '/datenschutz/', en: '/en/privacy/' },
  { de: '/kontakt/', en: '/en/contact/' },
];
