import type { SupportedLanguage } from './types';

export const formatters = {
  date(date: Date, language: SupportedLanguage): string {
    return new Intl.DateTimeFormat(language).format(date);
  },

  number(num: number, language: SupportedLanguage): string {
    return new Intl.NumberFormat(language).format(num);
  },

  currency(amount: number, language: SupportedLanguage): string {
    const formatter = new Intl.NumberFormat(language, {
      style: 'currency',
      currency: getCurrencyForLanguage(language),
    });
    return formatter.format(amount);
  }
};

function getCurrencyForLanguage(language: SupportedLanguage): string {
  const currencyMap: Record<SupportedLanguage, string> = {
    de: 'EUR',
    en: 'USD',
    es: 'EUR',
    fr: 'EUR',
    it: 'EUR',
    pt: 'EUR',
    nl: 'EUR',
    pl: 'PLN',
    ru: 'RUB',
    ja: 'JPY',
    ko: 'KRW',
    zh: 'CNY'
  };
  return currencyMap[language];
}
