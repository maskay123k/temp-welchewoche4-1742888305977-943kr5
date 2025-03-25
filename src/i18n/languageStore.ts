import { LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE, type LanguageCode } from './constants';

class LanguageStore {
  private static instance: LanguageStore;
  
  private constructor() {}
  
  static getInstance(): LanguageStore {
    if (!LanguageStore.instance) {
      LanguageStore.instance = new LanguageStore();
    }
    return LanguageStore.instance;
  }
  
  getCurrentLanguage(): LanguageCode {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode;
    return stored || DEFAULT_LANGUAGE;
  }
  
  setLanguage(language: LanguageCode): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
    window.location.reload();
  }
  
  initialize(): void {
    if (typeof window === 'undefined') return;
    
    const language = this.getCurrentLanguage();
    document.documentElement.lang = language;
  }
}

export const languageStore = LanguageStore.getInstance();
