import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import SEOHead from '../components/seo/seo-head';
import Container from '../components/ui/container';
import Section from '../components/ui/section';
import Card from '../components/ui/card';
import Button from '../components/ui/button';
import { getProductBySlug, PRODUCT_CATEGORIES } from '../utils/products-data';
import { mergeSEOMetadata } from '../utils/seo-helpers';
import { SITE_CONFIG } from '../utils/constants';

/**
 * Product detail page component
 */
export default function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>();

  const product = getProductBySlug(productSlug || '');

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const categoryData = PRODUCT_CATEGORIES[product.category];

  const seoMetadata = mergeSEOMetadata({
    title: `${product.title} - Policy Nivesh`,
    description: product.description,
    canonical: `https://policynivesh.com/products/${productSlug}`,
  });

  return (
    <>
      <SEOHead metadata={seoMetadata} />

      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to={`/category/${categoryData.slug}`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to {categoryData.title}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="text-6xl">{product.icon}</div>
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
              {categoryData.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              {product.headline}
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 font-semibold max-w-4xl mx-auto">
              {product.tagline}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {product.mainMessage}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as="a"
              href={`tel:${SITE_CONFIG.phone}`}
              size="lg"
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: {SITE_CONFIG.phone}
            </Button>
            <Button
              as="a"
              href="/#contact"
              variant="secondary"
              size="lg"
            >
              Get a Quote
            </Button>
          </div>
        </Container>
      </Section>

      {/* Investment & Returns Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Investment Details */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                💰 Investment Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">
                    Annual Investment:
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    {product.investment.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Payment Term:</span>
                  <span className="text-xl font-bold text-gray-900">
                    {product.investment.term}
                  </span>
                </div>
                {product.investment.totalInvestment && (
                  <div className="flex justify-between items-center py-3 bg-primary-50 px-4 rounded-lg">
                    <span className="text-gray-700 font-semibold">
                      Total Investment:
                    </span>
                    <span className="text-2xl font-bold text-primary-700">
                      {product.investment.totalInvestment}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Returns Details */}
            <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <h2 className="text-2xl font-bold mb-6">🎁 Returns & Benefits</h2>
              <div className="space-y-4">
                {product.returns.map((returnItem, index) => (
                  <div
                    key={index}
                    className="py-3 border-b border-primary-400/30"
                  >
                    <div className="text-primary-100 text-sm mb-1">
                      {returnItem.type}
                    </div>
                    <div className="text-2xl font-bold">
                      {returnItem.amount}
                    </div>
                    <div className="text-primary-200 text-sm mt-1">
                      {returnItem.duration}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📋 Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    feature.highlight
                      ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="text-sm text-gray-600 mb-2">
                    {feature.label}
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      feature.highlight ? 'text-primary-700' : 'text-gray-900'
                    }`}
                  >
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ✨ Why Choose This Plan?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          {product.additionalBenefits && product.additionalBenefits.length > 0 && (
            <Card className="p-8 mb-16 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🌟 Additional Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {product.additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Special Offer */}
          {product.specialOffer && (
            <Card className="p-8 mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-300">
              <div className="text-center">
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-orange-900 mb-3">
                  Special Offer
                </h3>
                <p className="text-xl font-semibold text-orange-800">
                  {product.specialOffer}
                </p>
              </div>
            </Card>
          )}

          {/* Final CTA */}
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get in touch with us today to learn more about this plan and how it
              can benefit you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as="a"
                href={`tel:${SITE_CONFIG.phone}`}
                variant="secondary"
                size="lg"
                className="gap-2 bg-white text-primary-600 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" />
                Call Now: {SITE_CONFIG.phone}
              </Button>
              <Button
                as="a"
                href="/#contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Get a Free Quote
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}

