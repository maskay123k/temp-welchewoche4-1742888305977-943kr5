import { detectLanguage } from './utils/languageDetector';
import { languageStorage } from './utils/storage';
import { SUPPORTED_LANGUAGES, type LanguageCode } from './constants';

class LanguageService {
  private static instance: LanguageService;
  
  private constructor() {}
  
  static getInstance(): LanguageService {
    if (!LanguageService.instance) {
      LanguageService.instance = new LanguageService();
    }
    return LanguageService.instance;
  }

  getCurrentLanguage(): LanguageCode {
    const stored = languageStorage.get();
    if (SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
    return detectLanguage();
  }

  setLanguage(language: LanguageCode): void {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;
    
    languageStorage.set(language);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      window.location.reload();
    }
  }
}

export const languageService = LanguageService.getInstance();
