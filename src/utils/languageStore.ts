// Language store to handle language state management
const isBrowser = typeof window !== 'undefined';

export const languageStore = {
  get: () => {
    if (!isBrowser) return null;
    return localStorage.getItem('preferred-language');
  },
  
  set: (language: string) => {
    if (!isBrowser) return;
    localStorage.setItem('preferred-language', language);
    document.documentElement.lang = language;
  },
  
  initialize: () => {
    if (!isBrowser) return;
    const storedLanguage = languageStore.get();
    if (storedLanguage) {
      document.documentElement.lang = storedLanguage;
    }
  }
};
