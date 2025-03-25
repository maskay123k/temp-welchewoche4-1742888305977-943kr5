import type { MiddlewareResponseHandler } from 'astro';
import { i18nConfig } from '../config';
import { detectLanguage, getLanguageFromURL } from '../utils/languageDetector';

export const handleLanguage: MiddlewareResponseHandler = async ({ request, url }, next) => {
  try {
    const { pathname } = url;

    // Skip language handling for static assets
    if (pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|woff|woff2)$/)) {
      return next();
    }

    // Handle root path
    if (pathname === '/') {
      const language = detectLanguage(request) || i18nConfig.defaultLocale;
      return Response.redirect(new URL(`/${language}`, url), 307);
    }

    // Validate language in URL
    const currentLang = getLanguageFromURL(pathname);
    if (!currentLang) {
      return Response.redirect(new URL(`/${i18nConfig.defaultLocale}${pathname}`, url), 307);
    }

    return next();
  } catch (error) {
    console.error('Language middleware error:', error);
    return next();
  }
};
