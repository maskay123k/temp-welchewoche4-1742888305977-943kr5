import { useState, useEffect } from 'react';
import type { SupportedLanguage, Translation, TranslationKey } from '../i18n/types';
import { TranslationLoader } from '../i18n/translationLoader';
import { LanguageDetector } from '../i18n/languageDetector';
import { formatters } from '../i18n/formatters';

export function useTranslation() {
  const [language, setLanguage] = useState<SupportedLanguage>(LanguageDetector.detect());
  const [translations, setTranslations] = useState<Translation>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadTranslations();
  }, [language]);

  async function loadTranslations() {
    try {
      setLoading(true);
      const newTranslations = await TranslationLoader.load(language);
      setTranslations(newTranslations);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load translations'));
    } finally {
      setLoading(false);
    }
  }

  function translate(key: TranslationKey, params?: Record<string, string>): string {
    let text = getNestedValue(translations, key) || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, value);
      });
    }
    
    return text;
  }

  function formatDate(date: Date): string {
    return formatters.date(date, language);
  }

  function formatNumber(num: number): string {
    return formatters.number(num, language);
  }

  function formatCurrency(amount: number): string {
    return formatters.currency(amount, language);
  }

  return {
    t: translate,
    language,
    setLanguage,
    formatDate,
    formatNumber,
    formatCurrency,
    loading,
    error,
  };
}

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) as string | undefined;
}
