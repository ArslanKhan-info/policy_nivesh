import { SEOMetadata, StructuredDataOrganization } from '../types';
import { SITE_CONFIG } from './constants';

/**
 * Generate structured data for organization
 */
export const getOrganizationStructuredData =
  (): StructuredDataOrganization => ({
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      email: SITE_CONFIG.email,
    },
  });

/**
 * Generate default SEO metadata
 */
export const getDefaultSEOMetadata = (): SEOMetadata => ({
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  canonical: SITE_CONFIG.url,
  ogTitle: SITE_CONFIG.name,
  ogDescription: SITE_CONFIG.description,
  ogImage: `${SITE_CONFIG.url}/og-image.jpg`,
  twitterCard: 'summary_large_image',
});

/**
 * Merge custom SEO metadata with defaults
 */
export const mergeSEOMetadata = (
  custom: Partial<SEOMetadata>
): SEOMetadata => ({
  ...getDefaultSEOMetadata(),
  ...custom,
});

