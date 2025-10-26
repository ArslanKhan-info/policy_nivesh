import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from '../utils/constants';
import Container from '../components/ui/container';

/**
 * Footer component with links and contact information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-sm text-gray-400">
                Your trusted partner in finding the perfect insurance solutions
                for life, health, and investments.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Investment Planning</li>
                <li>Retirement Planning</li>
                <li>Child Education Plans</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">{SITE_CONFIG.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link
                to="/privacy"
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

