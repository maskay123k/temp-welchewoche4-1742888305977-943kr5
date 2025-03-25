import { defineConfig } from 'astro/config';
    import tailwind from '@astrojs/tailwind';
    import sitemap from '@astrojs/sitemap';
    import { i18nConfig } from './src/i18n/config';

    export default defineConfig({
      site: 'https://welche-woche.de',
      integrations: [
        tailwind(),
        sitemap({
          i18n: {
            defaultLocale: i18nConfig.defaultLocale,
            locales: i18nConfig.locales.reduce((acc, locale) => {
              acc[locale] = locale;
              return acc;
            }, {}),
          },
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date()
        })
      ],
      i18n: i18nConfig,
      build: {
        format: 'directory'
      }
    });
