// Define strict types for our translation system
export type SupportedLanguage = 'de' | 'en' | 'es' | 'fr' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja' | 'ko' | 'zh';

export type TranslationKey = string;

export interface Translation {
  [key: TranslationKey]: string | Translation;
}

export interface LanguageMetadata {
  code: SupportedLanguage;
  name: string;
  flag: string;
  dateFormat: string;
  numberFormat: {
    decimal: string;
    thousand: string;
    precision: number;
  };
  currencyFormat: {
    symbol: string;
    position: 'before' | 'after';
  };
}
