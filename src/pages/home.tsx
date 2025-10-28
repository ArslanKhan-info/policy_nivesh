import SEOHead from '../components/seo/seo-head';
import HeroSection from './home/hero-section';
import ServicesSection from './home/services-section';
import InsightsSection from './home/insights-section';
import AboutSection from './home/about-section';
import ContactSection from './home/contact-section';
import { mergeSEOMetadata, getOrganizationStructuredData } from '../utils/seo-helpers';

/**
 * Home page component
 */
export default function Home() {
  const seoMetadata = mergeSEOMetadata({
    title: 'Policy Nivesh - Your Trusted Insurance Advisor',
    description:
      'Expert insurance advisory services helping you find the perfect life, health, and investment insurance solutions. Get personalized quotes and expert guidance.',
    canonical: 'https://policynivesh.com',
  });

  return (
    <>
      <SEOHead
        metadata={seoMetadata}
        structuredData={getOrganizationStructuredData()}
      />
      <HeroSection />
      <ServicesSection />
      <InsightsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

