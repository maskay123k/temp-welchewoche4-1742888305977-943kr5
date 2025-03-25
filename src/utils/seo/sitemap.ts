import { i18nConfig } from '../../i18n/config';

export function generateSitemapLinks(path: string): string[] {
  return i18nConfig.locales.map(locale => `/${locale}${path}`);
}

export function getAlternateLanguageLinks(path: string) {
  return i18nConfig.locales.map(locale => ({
    href: `${i18nConfig.site}/${locale}${path}`,
    hreflang: locale
  }));
}
