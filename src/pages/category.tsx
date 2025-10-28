import { useParams, Navigate } from 'react-router-dom';
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
 * Category page component to display products by category
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

  return (
    <>
      <SEOHead metadata={seoMetadata} />

      <Section className="pt-32 pb-16">
        <Container>
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
              {categoryData.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {categoryData.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {categoryData.description}
            </p>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No products available in this category yet.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}

