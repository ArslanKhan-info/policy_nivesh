import {
  Clock,
  DollarSign,
  FileText,
  Headphones,
  Lock,
  Star,
} from 'lucide-react';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';
import Card from '../../components/ui/card';

/**
 * Benefits section component
 */
export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Get your insurance policy approved in as little as 24 hours',
    },
    {
      icon: DollarSign,
      title: 'Best Rates',
      description: 'Compare and choose from competitive premiums across providers',
    },
    {
      icon: FileText,
      title: 'Paperless Process',
      description: 'Complete documentation digitally for a hassle-free experience',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your personal and financial data is completely secure with us',
    },
    {
      icon: Star,
      title: 'Expert Advisors',
      description: 'Certified insurance professionals with years of experience',
    },
  ];

  return (
    <Section id="benefits" background="white">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefits That Make a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our customer-first approach and
            industry-leading service standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} hover>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

