import { defineMiddleware } from 'astro:middleware';
import { i18nConfig } from './i18n/config';
import { detectLanguage } from './i18n/utils/languageDetector';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url } = context;
  const { pathname } = url;

  // Skip middleware for static assets
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|woff|woff2)$/)) {
    return next();
  }

  // Let the index page handle the root route
  if (pathname === '/') {
    return next();
  }

  // Handle other routes
  const language = detectLanguage(request) || i18nConfig.defaultLocale;
  context.locals.language = language;

  return next();
});
