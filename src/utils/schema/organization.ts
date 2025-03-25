import type { WithContext, Organization } from 'schema-dts';
import { schemaConfig } from './config';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${schemaConfig.organization.url}/#organization`,
    name: schemaConfig.organization.name,
    url: schemaConfig.organization.url,
    logo: {
      '@type': 'ImageObject',
      url: schemaConfig.organization.logo
    },
    sameAs: schemaConfig.organization.sameAs,
    founder: {
      '@type': 'Person',
      name: schemaConfig.creator.name,
      jobTitle: schemaConfig.creator.jobTitle,
      url: schemaConfig.creator.url
    }
  };
}
