import { CheckCircle, TrendingUp, Smartphone } from 'lucide-react';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';

/**
 * Hero section component with investment dashboard
 */
export default function HeroSection() {
  return (
    <Section className="pt-8 md:pt-12 bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure Your Future with{' '}
              <span className="text-primary-600">Expert Insurance</span>{' '}
              Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Get personalized insurance solutions tailored to your needs. From
              life and health insurance to investment planning, we help you build a
              secure financial future with transparency and trust.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="group">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50">
                Schedule Consultation
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span className="text-sm text-gray-600 font-medium">Trusted Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-gray-600 font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-600 font-medium">Mobile First</span>
              </div>
            </div>
          </div>

          {/* Right Content - Investment Dashboard Card */}
          <div className="relative animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              {/* Dashboard Header */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Insurance Dashboard
                </h3>
                <p className="text-gray-600">Track your coverage and benefits</p>
              </div>

              {/* Portfolio Items */}
              <div className="space-y-4">
                {/* Mutual Funds */}
                <div className="bg-green-50 rounded-lg p-4 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">Life Insurance</p>
                    <p className="text-sm text-gray-600">₹1Cr Coverage</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-success-600">Active</p>
                  </div>
                </div>

                {/* SIP Portfolio */}
                <div className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">Health Insurance</p>
                    <p className="text-sm text-gray-600">Family Floater</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary-600">₹50L Cover</p>
                  </div>
                </div>

                {/* Insurance Plans */}
                <div className="bg-purple-50 rounded-lg p-4 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">Investment Plans</p>
                    <p className="text-sm text-gray-600">ULIP & Endowment</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">Growing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

