import { CheckCircle, Target, Heart, TrendingUp } from 'lucide-react';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';

/**
 * About section component
 */
export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your financial goals are our top priority',
    },
    {
      icon: Heart,
      title: 'Trustworthy',
      description: 'Building lasting relationships based on trust',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Proven track record of successful outcomes',
    },
  ];

  return (
    <Section id="about" background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted Partner in Financial Security
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience in the insurance industry, Policy
              Nivesh has helped thousands of families secure their financial
              future through expert guidance and personalized insurance solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Expert Guidance
                  </h4>
                  <p className="text-gray-600">
                    Our certified advisors provide unbiased recommendations
                    tailored to your unique needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Comprehensive Coverage
                  </h4>
                  <p className="text-gray-600">
                    Access to a wide range of insurance products from leading
                    providers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Lifetime Support
                  </h4>
                  <p className="text-gray-600">
                    We're with you every step of the way, from purchase to claims.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

