// Language system constants
export const LANGUAGE_STORAGE_KEY = 'preferred-language';
export const DEFAULT_LANGUAGE = 'de';

export type LanguageCode = 'de' | 'en' | 'es' | 'fr' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja' | 'ko' | 'zh';

export const SUPPORTED_LANGUAGES: LanguageCode[] = [
  'de', 'en', 'es', 'fr', 'it', 'pt', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh'
];

export const FALLBACK_LANGUAGE: LanguageCode = 'de';
