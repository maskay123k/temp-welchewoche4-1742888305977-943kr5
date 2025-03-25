import type { WithContext, WebPage } from 'schema-dts';
import { schemaConfig } from './config';

interface WebPageProps {
  title: string;
  description: string;
  path: string;
  language: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageSchema({
  title,
  description,
  path,
  language,
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString()
}: WebPageProps): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${schemaConfig.organization.url}${path}#webpage`,
    url: `${schemaConfig.organization.url}${path}`,
    name: title,
    description: description,
    inLanguage: language,
    isPartOf: {
      '@id': `${schemaConfig.organization.url}/#website`
    },
    about: {
      '@id': `${schemaConfig.organization.url}/#organization`
    },
    datePublished,
    dateModified
  };
}
