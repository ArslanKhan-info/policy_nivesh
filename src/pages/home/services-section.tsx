import { Shield, TrendingUp, Heart, Coins, Landmark, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';

/**
 * Investment Products section component with clickable colorful cards
 */
export default function ServicesSection() {
  const products = [
    {
      icon: TrendingUp,
      title: 'Life Insurance',
      description:
        'Protect your loved ones with comprehensive life insurance plans tailored to your family needs.',
      expectedReturn: '₹50L - ₹1Cr',
      returnLabel: 'Coverage',
      bgColor: 'bg-blue-100',
      iconColor: 'text-primary-600',
      badgeColor: 'text-primary-600',
      buttonColor: 'bg-primary-600 hover:bg-primary-700',
      buttonText: 'Learn More',
      categorySlug: 'life-insurance',
    },
    {
      icon: Shield,
      title: 'Health Insurance',
      description:
        'Get complete health coverage for you and your family with cashless hospitalization benefits.',
      expectedReturn: '₹10L - ₹50L',
      returnLabel: 'Coverage',
      bgColor: 'bg-green-100',
      iconColor: 'text-success-600',
      badgeColor: 'text-success-600',
      buttonColor: 'bg-success-600 hover:bg-success-700',
      buttonText: 'Get Quote',
      categorySlug: 'health-insurance',
    },
    {
      icon: Heart,
      title: 'Investment Plans',
      description:
        'Build wealth with smart investment-linked insurance plans offering guaranteed returns.',
      expectedReturn: '₹1Cr+',
      returnLabel: 'Coverage',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badgeColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      buttonText: 'Invest Now',
      categorySlug: 'investment-plans',
    },
    {
      icon: Coins,
      title: 'Retirement Planning',
      description:
        'Secure your golden years with pension plans designed for a worry-free retirement.',
      expectedReturn: '8-12% p.a.',
      returnLabel: 'Returns',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      badgeColor: 'text-indigo-600',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      buttonText: 'Start Planning',
      categorySlug: 'retirement-planning',
    },
    {
      icon: Landmark,
      title: 'Child Education',
      description:
        'Ensure your child education goals are met with dedicated education insurance plans.',
      expectedReturn: '10-15% p.a.',
      returnLabel: 'Returns',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-warning-600',
      badgeColor: 'text-warning-600',
      buttonColor: 'bg-warning-600 hover:bg-warning-700',
      buttonText: 'Plan Future',
      categorySlug: 'child-education',
    },
    {
      icon: Receipt,
      title: 'Home Insurance',
      description:
        'Safeguard your home and belongings against unforeseen events and natural disasters.',
      expectedReturn: 'Up to ₹50L',
      returnLabel: 'Coverage',
      bgColor: 'bg-red-100',
      iconColor: 'text-danger-600',
      badgeColor: 'text-danger-600',
      buttonColor: 'bg-danger-600 hover:bg-danger-700',
      buttonText: 'Protect Home',
      categorySlug: 'home-insurance',
    },
  ];

  return (
    <Section id="services" background="white">
      <Container className="px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Insurance Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated insurance options designed to help you achieve your
            financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                to={`/category/${product.categorySlug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 space-y-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`${product.bgColor} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${product.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Expected Returns */}
                <div className="flex justify-between items-center py-3 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{product.returnLabel}</span>
                  <span className={`text-base font-semibold ${product.badgeColor}`}>
                    {product.expectedReturn}
                  </span>
                </div>

                {/* Risk Level */}
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Coverage Type</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className={`${product.buttonColor} text-white rounded-lg py-3 text-center font-medium transition-all group-hover:shadow-md`}>
                  {product.buttonText}
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
