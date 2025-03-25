export * from './languageDetector';
export * from './storage';
export * from './urlUtils';

export function createTranslator(translations: Record<string, any>) {
  return function translate(key: string, params?: Record<string, string>) {
    let text = key.split('.').reduce((obj, key) => obj?.[key], translations) || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, value);
      });
    }
    
    return text;
  };
}
