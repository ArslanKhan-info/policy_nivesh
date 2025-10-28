import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Product } from '../../utils/products-data';

interface ProductCardProps {
  product: Product;
  className?: string;
}

/**
 * Product card component with modern colorful design
 */
export default function ProductCard({ product, className }: ProductCardProps) {
  // Category-specific colors
  const categoryColors: Record<string, {
    bg: string;
    iconBg: string;
    iconColor: string;
    badge: string;
    button: string;
  }> = {
    'life-insurance': {
      bg: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary-600',
      badge: 'bg-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700',
    },
    'health-insurance': {
      bg: 'from-green-50 to-green-100',
      iconBg: 'bg-green-100',
      iconColor: 'text-success-600',
      badge: 'bg-success-600',
      button: 'bg-success-600 hover:bg-success-700',
    },
    investment: {
      bg: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'bg-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
    retirement: {
      bg: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      badge: 'bg-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700',
    },
    'child-education': {
      bg: 'from-yellow-50 to-yellow-100',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-warning-600',
      badge: 'bg-warning-600',
      button: 'bg-warning-600 hover:bg-warning-700',
    },
    'home-insurance': {
      bg: 'from-red-50 to-red-100',
      iconBg: 'bg-red-100',
      iconColor: 'text-danger-600',
      badge: 'bg-danger-600',
      button: 'bg-danger-600 hover:bg-danger-700',
    },
  };

  const colors = categoryColors[product.category] || categoryColors['life-insurance'];

  return (
    <div
      className={cn(
        'group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col',
        className
      )}
    >
      {/* Colorful Header */}
      <div className={`bg-gradient-to-br ${colors.bg} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className={`${colors.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <span className="text-4xl">{product.icon}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {/* Badge */}
          <span className={`inline-block px-3 py-1 ${colors.badge} text-white text-xs font-semibold rounded-full`}>
            {product.tagline.slice(0, 30)}...
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-3 mb-6">
          {/* Investment */}
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600 font-medium">Investment</span>
            <span className="text-lg font-bold text-gray-900">
              {product.investment.amount}
              <span className="text-xs font-normal text-gray-500">/year</span>
            </span>
          </div>

          {/* Term */}
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600 font-medium">Term</span>
            <span className="text-base font-semibold text-gray-900">
              {product.investment.term}
            </span>
          </div>

          {/* Returns */}
          {product.returns[0] && (
            <div className={`flex justify-between items-center p-3 bg-gradient-to-r ${colors.bg} rounded-lg border border-gray-200`}>
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${colors.iconColor}`} />
                <span className="text-sm text-gray-700 font-medium">
                  {product.returns[0].type}
                </span>
              </div>
              <span className={`text-lg font-bold ${colors.iconColor}`}>
                {product.returns[0].amount}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          to={`/products/${product.slug}`}
          className={`inline-flex items-center justify-center gap-2 w-full px-6 py-4 ${colors.button} text-white font-semibold rounded-xl transition-all duration-200 group-hover:shadow-lg`}
        >
          View Full Details
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
