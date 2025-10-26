import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import Button from '../../components/ui/button';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';

/**
 * Hero section component
 */
export default function HeroSection() {
  return (
    <Section background="primary" className="pt-8 md:pt-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Secure Your Future with{' '}
              <span className="text-primary-600">Expert Insurance</span>{' '}
              Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get personalized insurance solutions tailored to your needs. From
              life and health insurance to investment planning, we've got you
              covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-200">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary-600 mb-2">
                  <Users className="w-6 h-6" />
                  <span className="text-2xl md:text-3xl font-bold">5000+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary-600 mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="text-2xl md:text-3xl font-bold">10+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary-600 mb-2">
                  <Award className="w-6 h-6" />
                  <span className="text-2xl md:text-3xl font-bold">100%</span>
                </div>
                <p className="text-sm text-gray-600">Trusted Service</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative animate-slide-up">
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <Shield className="w-32 h-32 mx-auto mb-4 opacity-90" />
                <p className="text-2xl font-semibold">
                  Your Protection, Our Priority
                </p>
              </div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    100% Secure
                  </p>
                  <p className="text-xs text-gray-500">Verified Policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

