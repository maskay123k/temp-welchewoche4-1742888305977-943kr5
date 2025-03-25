import type { AstroI18nConfig } from 'astro';

export const i18nConfig: AstroI18nConfig = {
  defaultLocale: 'de',
  locales: ['en', 'es', 'fr', 'it', 'pt', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh', 'de'],
  routing: {
    strategy: 'prefix-always',
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true
  },
  fallback: {
    en: 'en',
    es: 'en',
    fr: 'en',
    it: 'en',
    pt: 'en',
    nl: 'en',
    pl: 'en',
    ru: 'en',
    ja: 'en',
    ko: 'en',
    zh: 'en'
  }
};
