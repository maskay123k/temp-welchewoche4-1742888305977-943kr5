import type { WithContext, BreadcrumbList } from 'schema-dts';
import { schemaConfig } from './config';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        '@id': `${schemaConfig.organization.url}${item.path}`,
        name: item.name,
        url: `${schemaConfig.organization.url}${item.path}`
      }
    }))
  };
}
