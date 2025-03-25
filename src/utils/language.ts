import type { AstroCookies } from 'astro';
import { defaultLanguage } from '../i18n/languages';

const isBrowser = typeof window !== 'undefined';

export function getCurrentLanguage(cookies: AstroCookies): string {
  if (!isBrowser) {
    return cookies.get('preferred-language')?.value || defaultLanguage;
  }
  
  const storedLanguage = localStorage.getItem('preferred-language');
  return storedLanguage || cookies.get('preferred-language')?.value || defaultLanguage;
}

export function setLanguage(language: string): void {
  if (!isBrowser) return;
  
  localStorage.setItem('preferred-language', language);
  document.documentElement.lang = language;
  window.location.reload();
}
