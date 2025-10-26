import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../utils/constants';
import { useScroll } from '../hooks/use-scroll';
import { useMobileMenu } from '../hooks/use-mobile-menu';
import Button from '../components/ui/button';
import Container from '../components/ui/container';
import { cn } from '../utils/cn';

/**
 * Header component with responsive navigation
 */
export default function Header() {
  const scrolled = useScroll(20);
  const { isOpen, toggle, close } = useMobileMenu();

  const handleNavClick = () => {
    close();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-primary-600"
            onClick={handleNavClick}
          >
            <span>{SITE_CONFIG.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <Button size="sm">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggle}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
                >
                  <Mail className="w-4 h-4" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <Button fullWidth className="mt-2">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

