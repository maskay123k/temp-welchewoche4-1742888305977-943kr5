import { LANGUAGE_STORAGE_KEY, DEFAULT_LANGUAGE, type LanguageCode } from '../constants';

export const languageStorage = {
  get(): LanguageCode {
    if (typeof localStorage === 'undefined') return DEFAULT_LANGUAGE;
    return (localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode) || DEFAULT_LANGUAGE;
  },
  
  set(language: LanguageCode): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
};
