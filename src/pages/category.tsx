import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import SEOHead from '../components/seo/seo-head';
import Container from '../components/ui/container';
import Section from '../components/ui/section';
import ProductCard from '../components/ui/product-card';
import {
  getProductsByCategory,
  PRODUCT_CATEGORIES,
} from '../utils/products-data';
import { mergeSEOMetadata } from '../utils/seo-helpers';

/**
 * Category page component with modern colorful design
 */
export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  // Find the category
  const categoryEntry = Object.entries(PRODUCT_CATEGORIES).find(
    ([, cat]) => cat.slug === categorySlug
  );

  if (!categoryEntry) {
    return <Navigate to="/" replace />;
  }

  const [categoryKey, categoryData] = categoryEntry;
  const products = getProductsByCategory(categoryKey);

  const seoMetadata = mergeSEOMetadata({
    title: `${categoryData.title} - Policy Nivesh`,
    description: categoryData.description,
    canonical: `https://policynivesh.com/category/${categorySlug}`,
  });

  // Category-specific color schemes
  const categoryColors = {
    'life-insurance': {
      gradient: 'from-blue-50 via-blue-100 to-blue-50',
      badge: 'bg-blue-100 text-primary-600',
      icon: '🛡️',
    },
    'health-insurance': {
      gradient: 'from-green-50 via-green-100 to-green-50',
      badge: 'bg-green-100 text-success-600',
      icon: '💚',
    },
    'investment-plans': {
      gradient: 'from-purple-50 via-purple-100 to-purple-50',
      badge: 'bg-purple-100 text-purple-600',
      icon: '💰',
    },
    'retirement-planning': {
      gradient: 'from-indigo-50 via-indigo-100 to-indigo-50',
      badge: 'bg-indigo-100 text-indigo-600',
      icon: '🏖️',
    },
    'child-education': {
      gradient: 'from-yellow-50 via-yellow-100 to-yellow-50',
      badge: 'bg-yellow-100 text-warning-600',
      icon: '🎓',
    },
    'home-insurance': {
      gradient: 'from-red-50 via-red-100 to-red-50',
      badge: 'bg-red-100 text-danger-600',
      icon: '🏠',
    },
  };

  const categoryColor = categoryColors[categorySlug as keyof typeof categoryColors] || categoryColors['life-insurance'];

  return (
    <>
      <SEOHead metadata={seoMetadata} />

      {/* Hero Section with Gradient Background */}
      <Section className={`pt-32 pb-20 bg-gradient-to-br ${categoryColor.gradient}`}>
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="text-7xl mb-4 animate-bounce">{categoryColor.icon}</div>
            <div className={`inline-block px-6 py-3 ${categoryColor.badge} rounded-full text-sm font-semibold`}>
              Browse {categoryData.title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {categoryData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {categoryData.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Products Section */}
      <Section className="py-16 bg-white">
        <Container>
          {products.length > 0 ? (
            <>
              {/* Products Count */}
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-primary-600">{products.length}</span>{' '}
                  {products.length === 1 ? 'product' : 'products'} in this category
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 max-w-2xl mx-auto">
                <div className="text-7xl mb-6">📦</div>
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Products Available Yet
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're working on adding amazing {categoryData.title.toLowerCase()} products for you.
                  Check back soon!
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Explore Other Categories
                </Link>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Why Choose This Category */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose {categoryData.title}?
              </h2>
              <p className="text-lg text-gray-600">
                Learn more about the benefits and features of our {categoryData.title.toLowerCase()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Expert Guidance
                </h3>
                <p className="text-gray-600">
                  Get personalized recommendations from certified advisors
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure & Trusted
                </h3>
                <p className="text-gray-600">
                  All products from verified and trusted insurance providers
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">💯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Best Rates
                </h3>
                <p className="text-gray-600">
                  Competitive pricing and flexible payment options
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-r from-primary-600 to-success-600">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Talk to our expert advisors and get personalized recommendations
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
