/**
 * Product data for insurance plans
 */

export interface ProductFeature {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProductBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  category: 'life-insurance' | 'health-insurance' | 'investment' | 'retirement' | 'child-education' | 'home-insurance';
  title: string;
  tagline: string;
  headline: string;
  description: string;
  mainMessage: string;
  investment: {
    amount: string;
    term: string;
    totalInvestment?: string;
  };
  returns: {
    type: string;
    amount: string;
    duration: string;
    totalReturns?: string;
  }[];
  features: ProductFeature[];
  benefits: ProductBenefit[];
  additionalBenefits?: string[];
  specialOffer?: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'retirement-pension-plan',
    slug: 'retirement-pension-plan',
    category: 'retirement',
    title: 'Retirement Pension Plan',
    tagline: 'Retire with Confidence, Live with Dignity.',
    headline: '🌟 A Lifetime of Financial Comfort 🌟',
    description: 'Invest for just 8 years and enjoy guaranteed annual income for life, ensuring your financial well-being and security.',
    mainMessage: 'Invest ₹2,50,000 per year for just 8 years and enjoy ₹1,95,836 guaranteed every year — for life!',
    investment: {
      amount: '₹2,50,000',
      term: '8 Years',
      totalInvestment: '₹20,00,000',
    },
    returns: [
      {
        type: 'Guaranteed Annual Income',
        amount: '₹1,95,836',
        duration: 'Lifetime',
      },
    ],
    features: [
      { label: 'Annual Investment', value: '₹2,50,000', highlight: true },
      { label: 'Payment Term', value: '8 Years Only' },
      { label: 'Annual Income', value: '₹1,95,836', highlight: true },
      { label: 'Income Duration', value: 'Lifetime' },
    ],
    benefits: [
      {
        icon: '✅',
        title: 'Lifetime Guaranteed Annual Income',
        description: 'Receive guaranteed income every year for your entire life',
      },
      {
        icon: '⏰',
        title: 'Short Payment Term',
        description: 'Pay for only 8 years and enjoy lifetime benefits',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Family Financial Security',
        description: 'Your investment continues to support your loved ones in the future',
      },
      {
        icon: '🏖️',
        title: 'Peaceful Retirement',
        description: 'Enjoy a peaceful and independent retirement lifestyle',
      },
    ],
    icon: '🌟',
  },
  {
    id: 'e-property-investment-plan',
    slug: 'e-property-investment-plan',
    category: 'investment',
    title: 'E-Property Investment Plan',
    tagline: 'Buy Property Today, Start Earning Tomorrow!',
    headline: '🏢 Earn Rental Income from Day-1',
    description: 'Start earning monthly rental income from the very next month without paying any loan interest. A secure property investment with lifetime earnings and family protection.',
    mainMessage: 'Why wait years to earn from property? With E-Property, you pay no loan interest and still start earning rent from the very next month!',
    investment: {
      amount: '₹5,00,000',
      term: '12 Years',
      totalInvestment: '₹60,00,000',
    },
    returns: [
      {
        type: 'Monthly Rental Income',
        amount: '₹15,620',
        duration: 'Starting Next Month',
      },
      {
        type: 'Income Duration',
        amount: '40 Years',
        duration: 'Continuous',
      },
      {
        type: 'Maturity Benefit',
        amount: '₹1.20 Crore',
        duration: 'At the end',
      },
    ],
    features: [
      { label: 'Annual Investment', value: '₹5,00,000', highlight: true },
      { label: 'Payment Term', value: '12 Years' },
      { label: 'Monthly Income', value: '₹15,620', highlight: true },
      { label: 'Income Starts', value: 'Next Month' },
      { label: 'Income Duration', value: '40 Years' },
      { label: 'Maturity Amount', value: '₹1.20 Crore', highlight: true },
      { label: 'Life Cover', value: '₹1 Crore from Day-1' },
    ],
    benefits: [
      {
        icon: '💰',
        title: 'Immediate Monthly Income',
        description: 'Get ₹15,620 guaranteed every month starting next month',
      },
      {
        icon: '🚫',
        title: 'No Loan Interest',
        description: 'Pay no loan interest and still earn rental income',
      },
      {
        icon: '🛡️',
        title: '₹1 Crore Life Insurance',
        description: 'Complete protection for your family from Day-1',
      },
      {
        icon: '💎',
        title: '100% Tax-Free Returns',
        description: 'All returns are completely tax-free',
      },
      {
        icon: '🏠',
        title: 'Secure Property Investment',
        description: 'A secure property with lifetime earnings',
      },
    ],
    additionalBenefits: [
      '40 Years of Continuous Income',
      '₹1.20 Crore Guaranteed at Maturity',
      'Complete Family Protection',
      'No Market Risk',
    ],
    icon: '🏢',
  },
  {
    id: 'policy-nivesh-guaranteed-income',
    slug: 'policy-nivesh-guaranteed-income',
    category: 'investment',
    title: 'Policy Nivesh - Guaranteed Income & Protection Plan',
    tagline: 'Secure Your Future with Guaranteed Benefits!',
    headline: '⭐ Guaranteed Income & Protection Plan ⭐',
    description: 'A comprehensive investment plan offering life insurance coverage, guaranteed yearly income, and substantial maturity benefits with zero market risk.',
    mainMessage: 'Pay ₹5,00,000 per year for 12 years and get total guaranteed returns of ₹3,12,00,000 with ₹1 Crore life coverage from Day 1!',
    investment: {
      amount: '₹5,00,000',
      term: '12 Years',
      totalInvestment: '₹60,00,000',
    },
    returns: [
      {
        type: 'Life Insurance Coverage',
        amount: '₹1 Crore',
        duration: 'From Day 1',
      },
      {
        type: 'Guaranteed Yearly Income',
        amount: '₹8,02,800',
        duration: 'From 17th year for 30 years',
      },
      {
        type: 'Total Guaranteed Income',
        amount: '₹2,40,84,000',
        duration: '30 Years',
      },
      {
        type: 'Lump Sum at Maturity',
        amount: '₹80,02,800',
        duration: 'At the end',
      },
    ],
    features: [
      { label: 'Annual Investment', value: '₹5,00,000', highlight: true },
      { label: 'Payment Term', value: '12 Years' },
      { label: 'Total Investment', value: '₹60,00,000' },
      { label: 'Life Cover', value: '₹1 Crore from Day-1' },
      { label: 'Yearly Income', value: '₹8,02,800', highlight: true },
      { label: 'Income Starts', value: '17th Year' },
      { label: 'Income Duration', value: '30 Years' },
      { label: 'Total Income', value: '₹2,40,84,000', highlight: true },
      { label: 'Maturity Bonus', value: '₹80,02,800', highlight: true },
      { label: 'Total Returns', value: '₹3,12,00,000', highlight: true },
    ],
    benefits: [
      {
        icon: '🛡️',
        title: '₹1 Crore Life Insurance',
        description: 'Your family stays financially protected from Day 1',
      },
      {
        icon: '💼',
        title: 'Guaranteed Yearly Income',
        description: '₹8,02,800 every year for 30 years continuously',
      },
      {
        icon: '🎁',
        title: 'Lump Sum Bonus',
        description: '₹80,02,800 guaranteed at the end',
      },
      {
        icon: '🚫',
        title: 'No Market Risk',
        description: '100% guaranteed returns, completely safe',
      },
      {
        icon: '💎',
        title: '100% Tax-Free',
        description: 'All returns are completely tax-free',
      },
      {
        icon: '🏖️',
        title: 'Retirement Security',
        description: 'Perfect for long-term retirement planning',
      },
    ],
    specialOffer: '💥 ₹62,500 Instant Discount on First Premium Payment!',
    icon: '⭐',
  },
  {
    id: 'girl-child-future-plan',
    slug: 'girl-child-future-plan',
    category: 'child-education',
    title: 'Girl Child Future Plan',
    tagline: 'Secure Her Bright Future — Starting Today!',
    headline: '🎁 The Best Gift for Your Child\'s Future!',
    description: 'A specially designed lifetime investment plan for girl child offering guaranteed returns and financial independence for life.',
    mainMessage: 'Invest ₹5,00,000 per year for 16 years and give your daughter ₹45,00,000 at age 17, plus ₹6,00,000 every year for her whole life!',
    investment: {
      amount: '₹5,00,000',
      term: '16 Years',
      totalInvestment: '₹80,00,000',
    },
    returns: [
      {
        type: 'First Benefit',
        amount: '₹45,00,000',
        duration: 'On the 17th year',
      },
      {
        type: 'Annual Income',
        amount: '₹6,00,000',
        duration: 'From 18th year - Whole Life',
      },
    ],
    features: [
      { label: 'Annual Investment', value: '₹5,00,000', highlight: true },
      { label: 'Payment Term', value: '16 Years' },
      { label: 'First Benefit (17th year)', value: '₹45,00,000', highlight: true },
      { label: 'Annual Income (18th year onwards)', value: '₹6,00,000', highlight: true },
      { label: 'Income Duration', value: 'Whole Life' },
      { label: 'Tax Benefit', value: '100% Tax-Free' },
    ],
    benefits: [
      {
        icon: '👧',
        title: 'Specially Designed for Girl Child',
        description: 'Tailored specifically for your daughter\'s bright future',
      },
      {
        icon: '💰',
        title: '₹45 Lakhs at Age 17',
        description: 'A substantial amount for education, marriage, or dreams',
      },
      {
        icon: '♾️',
        title: 'Lifetime Annual Income',
        description: '₹6,00,000 guaranteed every year for her whole life',
      },
      {
        icon: '🎓',
        title: 'Financial Independence',
        description: 'Complete financial independence and security',
      },
      {
        icon: '💎',
        title: '100% Tax-Free Income',
        description: 'All returns are completely tax-free',
      },
      {
        icon: '✨',
        title: 'Strong Start for Dreams',
        description: 'Perfect for education, marriage, and fulfilling dreams',
      },
    ],
    additionalBenefits: [
      'Lifetime financial independence',
      'Assured income & security',
      'Strong start for education',
      'Support for marriage expenses',
      'Help in fulfilling dreams',
    ],
    icon: '🎁',
  },
];

// Category mapping
export const PRODUCT_CATEGORIES = {
  'life-insurance': {
    title: 'Life Insurance',
    description: 'Protect your loved ones with comprehensive life insurance plans tailored to your family needs.',
    slug: 'life-insurance',
  },
  'health-insurance': {
    title: 'Health Insurance',
    description: 'Get complete health coverage for you and your family with cashless hospitalization benefits.',
    slug: 'health-insurance',
  },
  investment: {
    title: 'Investment Plans',
    description: 'Build wealth with smart investment-linked insurance plans offering guaranteed returns.',
    slug: 'investment-plans',
  },
  retirement: {
    title: 'Retirement Planning',
    description: 'Secure your golden years with pension plans designed for a worry-free retirement.',
    slug: 'retirement-planning',
  },
  'child-education': {
    title: 'Child Education',
    description: 'Ensure your child education goals are met with dedicated education insurance plans.',
    slug: 'child-education',
  },
  'home-insurance': {
    title: 'Home Insurance',
    description: 'Safeguard your home and belongings against unforeseen events and natural disasters.',
    slug: 'home-insurance',
  },
} as const;

// Helper functions
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

