import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from './card';
import { cn } from '../../utils/cn';
import { Product } from '../../utils/products-data';

interface ProductCardProps {
  product: Product;
  className?: string;
}

/**
 * Product card component for displaying insurance products
 */
export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card hover className={cn('h-full flex flex-col', className)}>
      <div className="flex flex-col space-y-4 flex-1">
        {/* Icon and Title */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-4xl mb-2">{product.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {product.title}
            </h3>
            <p className="text-primary-600 font-semibold text-sm">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Investment:</span>
            <span className="text-lg font-bold text-gray-900">
              {product.investment.amount}
              <span className="text-sm font-normal text-gray-600">
                {' '}/ year
              </span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Term:</span>
            <span className="text-base font-semibold text-gray-900">
              {product.investment.term}
            </span>
          </div>
          {product.returns[0] && (
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">
                {product.returns[0].type}:
              </span>
              <span className="text-lg font-bold text-primary-600">
                {product.returns[0].amount}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          View Details
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Card>
  );
}

