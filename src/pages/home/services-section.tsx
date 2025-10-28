import {
  Heart,
  Shield,
  TrendingUp,
  Users,
  GraduationCap,
  Home,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';
import FeatureCard from '../../components/ui/feature-card';

/**
 * Services section component
 */
export default function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: 'Life Insurance',
      description:
        'Protect your loved ones with comprehensive life insurance plans tailored to your family needs.',
      link: '/category/life-insurance',
    },
    {
      icon: Shield,
      title: 'Health Insurance',
      description:
        'Get complete health coverage for you and your family with cashless hospitalization benefits.',
      link: null, // No products yet
    },
    {
      icon: TrendingUp,
      title: 'Investment Plans',
      description:
        'Build wealth with smart investment-linked insurance plans offering guaranteed returns.',
      link: '/category/investment-plans',
    },
    {
      icon: Users,
      title: 'Retirement Planning',
      description:
        'Secure your golden years with pension plans designed for a worry-free retirement.',
      link: '/category/retirement-planning',
    },
    {
      icon: GraduationCap,
      title: 'Child Education',
      description:
        'Ensure your child education goals are met with dedicated education insurance plans.',
      link: '/category/child-education',
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description:
        'Safeguard your home and belongings against unforeseen events and natural disasters.',
      link: null, // No products yet
    },
  ];

  return (
    <Section id="services" background="gray">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From life and health insurance to investment planning, we offer a
            complete suite of insurance services to protect what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) =>
            service.link ? (
              <Link
                key={index}
                to={service.link}
                className="block h-full transition-transform hover:scale-105"
              >
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Link>
            ) : (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            )
          )}
        </div>
      </Container>
    </Section>
  );
}

