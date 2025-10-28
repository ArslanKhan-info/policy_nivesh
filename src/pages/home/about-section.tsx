import { Award, Eye, Smartphone } from 'lucide-react';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';

/**
 * Why Choose Us section component with features and stats
 */
export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Expert Advisory',
      description:
        'Certified financial advisors with 10+ years of experience in wealth management and investment planning.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-primary-600',
    },
    {
      icon: Eye,
      title: 'Complete Transparency',
      description:
        'No hidden fees, clear terms, and honest advice. You\'ll always know exactly what you\'re investing in and why.',
      bgColor: 'bg-green-100',
      iconColor: 'text-success-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Experience',
      description:
        'Manage your investments on-the-go with our intuitive mobile platform designed for modern investors.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <Section id="about" background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content & Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Policy Nivesh?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that smart investing should be accessible to everyone. Our
                mission is to democratize financial advisory services through technology,
                transparency, and trust.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Image with Floating Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="bg-gradient-to-br from-blue-100 via-green-50 to-purple-100 rounded-2xl shadow-2xl h-96 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🤝</div>
                <p className="text-2xl font-semibold text-gray-800">
                  Financial Advisory Team
                </p>
              </div>
            </div>

            {/* Floating Stat Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 animate-pulse">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary-600">10,000+</p>
                <p className="text-sm text-gray-600">Happy Investors</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 animate-pulse">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-success-600">₹500Cr+</p>
                <p className="text-sm text-gray-600">Assets Managed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
