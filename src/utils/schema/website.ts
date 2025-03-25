import type { WithContext, WebSite } from 'schema-dts';
import { schemaConfig } from './config';

export function generateWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: schemaConfig.organization.name,
    url: schemaConfig.organization.url,
    description: 'Copy emojis with a single click - Free emoji picker and text styler',
    inLanguage: ['de', 'en', 'es', 'fr', 'it', 'pt', 'nl', 'pl', 'ru', 'ja', 'ko', 'zh'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://smileys.lol/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
}
