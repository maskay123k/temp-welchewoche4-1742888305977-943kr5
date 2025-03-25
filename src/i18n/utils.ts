import { i18nConfig } from './config';

export function getLanguageFromURL(pathname: string): string {
  const [, lang] = pathname.split('/');
  if (lang in i18nConfig.locales) return lang;
  return i18nConfig.defaultLocale;
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    const translations = getTranslations(lang);
    return translations[key] || key;
  };
}

function getTranslations(lang: string): Record<string, string> {
  // Basic translations for UI elements
  return {
    'i18n.selectLanguage': {
      de: 'Sprache auswählen',
      en: 'Select language',
      es: 'Seleccionar idioma',
      fr: 'Sélectionner la langue',
      it: 'Seleziona la lingua',
      pt: 'Selecionar idioma',
      nl: 'Selecteer taal',
      pl: 'Wybierz język',
      ru: 'Выберите язык',
      ja: '言語を選択',
      ko: '언어 선택',
      zh: '选择语言'
    }[lang] || 'Select language'
  };
}
