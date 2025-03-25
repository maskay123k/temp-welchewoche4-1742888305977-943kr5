import { i18nConfig } from '../config';

export function getLanguageFromURL(pathname: string): string {
  const [, lang] = pathname.split('/');
  return lang in i18nConfig.locales ? lang : i18nConfig.defaultLocale;
}

export function createLocalizedURL(currentPath: string, newLang: string): string {
  const [, ...pathParts] = currentPath.split('/').filter(Boolean);
  return `/${newLang}/${pathParts.join('/')}`;
}

export function removeLanguageFromPath(path: string): string {
  const [, ...pathParts] = path.split('/').filter(Boolean);
  return `/${pathParts.join('/')}`;
}
