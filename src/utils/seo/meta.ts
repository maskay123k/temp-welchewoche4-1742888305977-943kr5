import type { LanguageCode } from '../../i18n/constants';
import { siteConfig } from './config';

export interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  language: LanguageCode;
}

export function generateMeta({ 
  title, 
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  language
}: MetaProps) {
  return [
    { name: 'description', content: description },
    { name: 'robots', content: noIndex ? 'noindex' : 'index,follow' },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: image },
    { property: 'og:url', content: siteConfig.url },
    { property: 'og:locale', content: language },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ];
}
