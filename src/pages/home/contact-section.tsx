import { useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';
import Button from '../../components/ui/button';
import { SITE_CONFIG } from '../../utils/constants';

/**
 * Contact section component with new form design
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! We will contact you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <Section id="contact" className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Start Your Insurance Journey?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get personalized investment advice from our certified financial advisors. Schedule a
            free consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Investment Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50"
                  >
                    <option value="">Select your interest</option>
                    <option value="life">Life Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="investment">Investment Plans</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="child">Child Education</option>
                    <option value="home">Home Insurance</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                  />
                </div>

                <Button type="submit" size="lg" fullWidth>
                  Schedule Free Consultation
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Call Us */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Available Mon-Fri, 9 AM - 6 PM</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-success-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">{SITE_CONFIG.phone}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Quick support and updates</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{SITE_CONFIG.email}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
            </div>

            {/* Free Consultation Highlight */}
            <div className="bg-gradient-to-r from-primary-600 to-success-600 rounded-xl p-6 text-white space-y-4">
              <h4 className="font-semibold text-xl">Free Consultation</h4>
              <p className="text-blue-100">
                Get expert advice on your insurance portfolio at no cost. Book your 30-minute session today.
              </p>
              <Button 
                variant="outline" 
                fullWidth 
                className="bg-white text-primary-600 hover:bg-gray-50 border-0"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
