/**
 * Global TypeScript type definitions
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface StructuredDataOrganization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
}

