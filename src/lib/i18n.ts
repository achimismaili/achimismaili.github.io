import { createI18n } from '@easy-web/i18n';
import { localizedPaths } from './localized-paths';

export const i18n = createI18n({
  locales: ['de', 'en'] as const,
  defaultLocale: 'de',
  baseUrl: 'https://achim.ismaili.de',
  localizedPaths,
});

export type Locale = (typeof i18n.locales)[number];
