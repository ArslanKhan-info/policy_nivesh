import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone, Mail, Shield, TrendingUp, Award } from 'lucide-react';
import SEOHead from '../components/seo/seo-head';
import Container from '../components/ui/container';
import Section from '../components/ui/section';
import Button from '../components/ui/button';
import { getProductBySlug, PRODUCT_CATEGORIES } from '../utils/products-data';
import { mergeSEOMetadata } from '../utils/seo-helpers';
import { SITE_CONFIG } from '../utils/constants';

/**
 * Product detail page with modern colorful design
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

  // Category-specific color schemes
  const categoryColors: Record<string, {
    gradient: string;
    badge: string;
    card: string;
    icon: string;
    iconBg: string;
  }> = {
    'life-insurance': {
      gradient: 'from-blue-50 via-blue-100 to-blue-50',
      badge: 'bg-blue-100 text-primary-600',
      card: 'from-primary-600 to-primary-700',
      icon: 'text-primary-600',
      iconBg: 'bg-blue-100',
    },
    'health-insurance': {
      gradient: 'from-green-50 via-green-100 to-green-50',
      badge: 'bg-green-100 text-success-600',
      card: 'from-success-600 to-success-700',
      icon: 'text-success-600',
      iconBg: 'bg-green-100',
    },
    investment: {
      gradient: 'from-purple-50 via-purple-100 to-purple-50',
      badge: 'bg-purple-100 text-purple-600',
      card: 'from-purple-600 to-purple-700',
      icon: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
    retirement: {
      gradient: 'from-indigo-50 via-indigo-100 to-indigo-50',
      badge: 'bg-indigo-100 text-indigo-600',
      card: 'from-indigo-600 to-indigo-700',
      icon: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
    },
    'child-education': {
      gradient: 'from-yellow-50 via-yellow-100 to-yellow-50',
      badge: 'bg-yellow-100 text-warning-600',
      card: 'from-warning-600 to-warning-700',
      icon: 'text-warning-600',
      iconBg: 'bg-yellow-100',
    },
    'home-insurance': {
      gradient: 'from-red-50 via-red-100 to-red-50',
      badge: 'bg-red-100 text-danger-600',
      card: 'from-danger-600 to-danger-700',
      icon: 'text-danger-600',
      iconBg: 'bg-red-100',
    },
  };

  const colors = categoryColors[product.category] || categoryColors['life-insurance'];

  return (
    <>
      <SEOHead metadata={seoMetadata} />

      {/* Hero Section */}
      <Section className={`pt-32 pb-20 bg-gradient-to-br ${colors.gradient}`}>
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to={`/category/${categoryData.slug}`}
              className={`inline-flex items-center gap-2 ${colors.icon} hover:opacity-80 font-semibold transition-opacity`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to {categoryData.title}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className={`${colors.iconBg} w-24 h-24 rounded-3xl flex items-center justify-center animate-bounce shadow-lg`}>
                <span className="text-6xl">{product.icon}</span>
              </div>
            </div>

            {/* Badge */}
            <div className={`inline-block px-6 py-3 ${colors.badge} rounded-full text-sm font-semibold shadow-sm`}>
              {categoryData.title}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {product.headline}
            </h1>

            {/* Tagline */}
            <p className={`text-xl md:text-2xl ${colors.icon} font-semibold`}>
              {product.tagline}
            </p>

            {/* Main Message */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {product.mainMessage}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                as="a"
                href={`tel:${SITE_CONFIG.phone}`}
                size="lg"
                className={`gap-2 bg-gradient-to-r ${colors.card} hover:opacity-90 transition-opacity`}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button
                as="a"
                href="/#contact"
                variant="outline"
                size="lg"
                className={`border-2 ${colors.icon} hover:bg-white/50`}
              >
                <Mail className="w-5 h-5" />
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Investment & Returns Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Investment Details */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${colors.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <Shield className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Investment Details
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Annual Investment:</span>
                  <span className={`text-2xl font-bold ${colors.icon}`}>
                    {product.investment.amount}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Payment Term:</span>
                  <span className="text-xl font-bold text-gray-900">
                    {product.investment.term}
                  </span>
                </div>
                {product.investment.totalInvestment && (
                  <div className={`flex justify-between items-center py-4 bg-gradient-to-r ${colors.gradient} px-6 rounded-xl border-2 border-gray-200`}>
                    <span className="text-gray-700 font-semibold">Total Investment:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.investment.totalInvestment}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Returns Details */}
            <div className={`bg-gradient-to-br ${colors.card} rounded-2xl shadow-xl p-8 text-white`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Returns & Benefits</h2>
              </div>
              <div className="space-y-4">
                {product.returns.map((returnItem, index) => (
                  <div key={index} className="py-4 border-b border-white/20">
                    <div className="text-blue-100 text-sm mb-2 font-medium">
                      {returnItem.type}
                    </div>
                    <div className="text-3xl font-bold mb-1">
                      {returnItem.amount}
                    </div>
                    <div className="text-blue-200 text-sm">
                      {returnItem.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className={`${colors.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                <Award className={`w-7 h-7 ${colors.icon}`} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                    feature.highlight
                      ? `bg-gradient-to-br ${colors.gradient} border-2 ${colors.icon.replace('text', 'border')} shadow-md`
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="text-sm text-gray-600 font-medium mb-2">
                    {feature.label}
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      feature.highlight ? colors.icon : 'text-gray-900'
                    }`}
                  >
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose This Plan?
              </h2>
              <p className="text-lg text-gray-600">
                Discover all the amazing benefits this plan offers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          {product.additionalBenefits && product.additionalBenefits.length > 0 && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-xl border-2 border-green-200 p-8 md:p-12 mb-16">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Additional Benefits
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {product.additionalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/80 rounded-xl p-4">
                    <Check className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Offer */}
          {product.specialOffer && (
            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 rounded-3xl shadow-xl border-2 border-orange-300 p-8 md:p-12 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/30 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-200/30 rounded-full -ml-16 -mb-16"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4">🎉</div>
                <div className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-bold mb-4">
                  LIMITED TIME OFFER
                </div>
                <h3 className="text-3xl font-bold text-orange-900 mb-4">
                  Special Offer
                </h3>
                <p className="text-2xl font-semibold text-orange-800">
                  {product.specialOffer}
                </p>
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className={`bg-gradient-to-br ${colors.card} rounded-3xl shadow-2xl p-8 md:p-16 text-white text-center relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get in touch with us today to learn more about this plan and how it
                can benefit you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  as="a"
                  href={`tel:${SITE_CONFIG.phone}`}
                  variant="secondary"
                  size="lg"
                  className="gap-2 bg-white text-primary-600 hover:bg-gray-100 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call: {SITE_CONFIG.phone}
                </Button>
                <Button
                  as="a"
                  href="/#contact"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
