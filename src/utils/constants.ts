/**
 * Application-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Policy Nivesh',
  tagline: 'Your Trusted Insurance Advisor',
  description:
    'Expert insurance advisory services helping you find the perfect life, health, and investment insurance solutions.',
  url: 'https://policynivesh.com',
  email: 'info@policynivesh.com',
  phone: '+91 6280000874',
  address: 'Mumbai, Maharashtra, India',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
} as const;

