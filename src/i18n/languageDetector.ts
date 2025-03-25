import type { SupportedLanguage } from './types';

export class LanguageDetector {
  static detect(): SupportedLanguage {
    if (typeof navigator === 'undefined') return 'en';

    // Check stored preference first
    const stored = this.getStoredLanguage();
    if (stored) return stored;

    // Then check browser language
    const browserLang = this.getBrowserLanguage();
    if (browserLang) return browserLang;

    // Fall back to default
    return 'en';
  }

  private static getStoredLanguage(): SupportedLanguage | null {
    if (typeof localStorage === 'undefined') return null;
    
    const stored = localStorage.getItem('preferred-language') as SupportedLanguage;
    return this.isValidLanguage(stored) ? stored : null;
  }

  private static getBrowserLanguage(): SupportedLanguage | null {
    const lang = navigator.language.split('-')[0] as SupportedLanguage;
    return this.isValidLanguage(lang) ? lang : null;
  }

  private static isValidLanguage(lang: string): lang is SupportedLanguage {
    return ['de', 'en', 'es', 'fr', 'it', 'pt', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh'].includes(lang);
  }
}
