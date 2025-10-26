import { Helmet } from 'react-helmet-async';
import { SEOMetadata } from '../../types';
import { SITE_CONFIG } from '../../utils/constants';

interface SEOHeadProps {
  metadata: SEOMetadata;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  structuredData?: any;
}

/**
 * SEO component for managing document head meta tags
 */
export default function SEOHead({ metadata, structuredData }: SEOHeadProps) {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
  } = metadata;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta
        property="og:description"
        content={ogDescription || description}
      />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard || 'summary'} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta
        property="twitter:description"
        content={ogDescription || description}
      />
      {ogImage && <meta property="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

