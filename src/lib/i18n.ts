import { createI18n } from '@achimismaili/easy-web-i18n';

export const i18n = createI18n({
  locales: ['de', 'en'] as const,
  defaultLocale: 'de',
  baseUrl: 'https://dev.ismaili.de',
});

export type Locale = (typeof i18n.locales)[number];
