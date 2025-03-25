import { i18nConfig } from '../config';
import type { LanguageCode } from '../types';

export function detectLanguage(request: Request): LanguageCode | null {
  try {
    // Get Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return null;

    // Parse language from header
    const browserLang = acceptLanguage
      .split(',')[0]
      .trim()
      .split('-')[0] as LanguageCode;

    // Validate against supported languages
    if (isValidLanguage(browserLang)) {
      return browserLang;
    }

    return null;
  } catch (error) {
    console.error('Error detecting language:', error);
    return null;
  }
}

export function isValidLanguage(lang: string): lang is LanguageCode {
  return Object.keys(i18nConfig.locales).includes(lang);
}

// Server-side language detection
export function getLanguageFromURL(pathname: string): LanguageCode {
  const [, lang] = pathname.split('/');
  return isValidLanguage(lang) ? lang : i18nConfig.defaultLocale;
}

// Client-side language detection
export function getPreferredLanguage(): LanguageCode {
  if (typeof window === 'undefined') {
    return i18nConfig.defaultLocale;
  }

  // Check localStorage
  const stored = localStorage.getItem('preferred-language') as LanguageCode;
  if (isValidLanguage(stored)) {
    return stored;
  }

  // Check browser language
  const browserLang = navigator.language.split('-')[0] as LanguageCode;
  if (isValidLanguage(browserLang)) {
    return browserLang;
  }

  return i18nConfig.defaultLocale;
}
