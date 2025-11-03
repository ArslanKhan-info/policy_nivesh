import { useState, useEffect } from 'react';
import { Calculator, Home, TrendingUp, CreditCard, DollarSign, PieChart } from 'lucide-react';
import SEOHead from '../components/seo/seo-head';
import Container from '../components/ui/container';
import Section from '../components/ui/section';
import Card from '../components/ui/card';
import Button from '../components/ui/button';
import { mergeSEOMetadata } from '../utils/seo-helpers';

type CalculatorType = 'emi' | 'home-loan' | 'sip' | 'fd' | 'rd';

interface CalculatorOption {
  id: CalculatorType;
  label: string;
  icon: React.ElementType;
  description: string;
}

const calculatorOptions: CalculatorOption[] = [
  {
    id: 'emi',
    label: 'EMI Calculator',
    icon: CreditCard,
    description: 'Calculate your loan EMI',
  },
  {
    id: 'home-loan',
    label: 'Home Loan Calculator',
    icon: Home,
    description: 'Calculate home loan EMI & interest',
  },
  {
    id: 'sip',
    label: 'SIP Calculator',
    icon: TrendingUp,
    description: 'Calculate SIP returns',
  },
  {
    id: 'fd',
    label: 'FD Calculator',
    icon: DollarSign,
    description: 'Calculate Fixed Deposit returns',
  },
  {
    id: 'rd',
    label: 'RD Calculator',
    icon: PieChart,
    description: 'Calculate Recurring Deposit returns',
  },
];

/**
 * Financial Calculators Page
 */
export default function Calculators() {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType>('emi');

  const seoMetadata = mergeSEOMetadata({
    title: 'Financial Calculators - EMI, SIP, Home Loan Calculator | Policy Nivesh',
    description:
      'Free online financial calculators including EMI Calculator, SIP Calculator, Home Loan Calculator, FD Calculator, and RD Calculator. Calculate your investment returns and loan EMIs instantly.',
    canonical: 'https://policynivesh.com/calculators',
    keywords:
      'EMI calculator, SIP calculator, home loan calculator, loan calculator, investment calculator, FD calculator, RD calculator, financial planning calculator',
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Policy Nivesh Financial Calculators',
    description: 'Free online financial calculators for EMI, SIP, Home Loan, FD, and RD calculations',
    url: 'https://policynivesh.com/calculators',
    applicationCategory: 'FinanceApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'emi':
        return <EMICalculator />;
      case 'home-loan':
        return <HomeLoanCalculator />;
      case 'sip':
        return <SIPCalculator />;
      case 'fd':
        return <FDCalculator />;
      case 'rd':
        return <RDCalculator />;
      default:
        return <EMICalculator />;
    }
  };

  return (
    <>
      <SEOHead metadata={seoMetadata} structuredData={structuredData} />
      
      <Section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Financial Calculators
            </h1>
            <p className="text-xl text-gray-600">
              Plan your finances with our free online calculators. Calculate EMI, SIP returns, home loans, and more.
            </p>
          </div>

          {/* Calculator Type Selection */}
          <Card className="mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Calculator Type</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {calculatorOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = selectedCalculator === option.id;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedCalculator(option.id)}
                      className={`
                        relative p-4 rounded-lg border-2 transition-all duration-200 text-left
                        ${
                          isSelected
                            ? 'border-primary-500 bg-primary-50 shadow-lg'
                            : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                        }
                      `}
                    >
                      {/* Radio indicator */}
                      <div className="flex items-start space-x-3">
                        <div
                          className={`
                            flex-shrink-0 w-5 h-5 rounded-full border-2 mt-1 transition-all
                            ${
                              isSelected
                                ? 'border-primary-500 bg-primary-500'
                                : 'border-gray-300 bg-white'
                            }
                          `}
                        >
                          {isSelected && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? 'text-primary-600' : 'text-gray-500'
                              }`}
                            />
                            <span
                              className={`font-semibold ${
                                isSelected ? 'text-primary-700' : 'text-gray-700'
                              }`}
                            >
                              {option.label}
                            </span>
                          </div>
                          <p
                            className={`text-sm ${
                              isSelected ? 'text-primary-600' : 'text-gray-500'
                            }`}
                          >
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Calculator Component */}
          {renderCalculator()}

          {/* SEO Content */}
          <div className="mt-16 prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Our Financial Calculators?
            </h2>
            <p className="text-gray-600 mb-6">
              Our comprehensive suite of financial calculators helps you make informed decisions about
              loans, investments, and savings. Whether you're planning to buy a home, invest in mutual
              funds, or calculate your loan EMIs, our calculators provide accurate results instantly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">EMI & Loan Calculators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Calculate monthly EMI payments</li>
                  <li>• View total interest payable</li>
                  <li>• Compare different loan tenures</li>
                  <li>• Plan your home loan effectively</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Calculators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Calculate SIP returns over time</li>
                  <li>• Estimate FD maturity amounts</li>
                  <li>• Plan recurring deposits</li>
                  <li>• Understand power of compounding</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/**
 * EMI Calculator Component
 */
function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(120); // in months
  const [result, setResult] = useState<{
    emi: number;
    totalAmount: number;
    totalInterest: number;
  } | null>(null);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    });
  }, [principal, rate, tenure]);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter loan amount"
              />
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter interest rate"
              />
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure (Months)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter tenure in months"
              />
              <input
                type="range"
                min="12"
                max="360"
                step="12"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">{(tenure / 12).toFixed(1)} years</p>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                  <p className="text-3xl font-bold text-primary-600">
                    ₹{result.emi.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalInterest.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalAmount.toLocaleString('en-IN')}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Principal Amount:</span>
                    <span className="font-semibold">₹{principal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-600">Interest Amount:</span>
                    <span className="font-semibold text-orange-600">
                      ₹{result.totalInterest.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * Home Loan Calculator Component
 */
function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(240); // in months
  const [result, setResult] = useState<{
    emi: number;
    totalAmount: number;
    totalInterest: number;
  } | null>(null);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - loanAmount;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    });
  }, [loanAmount, rate, tenure]);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Loan Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter home loan amount"
              />
              <input
                type="range"
                min="500000"
                max="50000000"
                step="500000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter interest rate"
              />
              <input
                type="range"
                min="6"
                max="15"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                value={tenure / 12}
                onChange={(e) => setTenure(Number(e.target.value) * 12)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter tenure in years"
              />
              <input
                type="range"
                min="60"
                max="360"
                step="12"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">{tenure / 12} years</p>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Loan Details</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                  <p className="text-3xl font-bold text-green-600">
                    ₹{result.emi.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalInterest.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Amount Payable</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalAmount.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * SIP Calculator Component
 */
function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [tenure, setTenure] = useState(120); // in months
  const [result, setResult] = useState<{
    totalInvestment: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, tenure) - 1) / monthlyRate) *
      (1 + monthlyRate);
    
    const totalInvestment = monthlyInvestment * tenure;
    const estimatedReturns = futureValue - totalInvestment;

    setResult({
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
    });
  }, [monthlyInvestment, expectedReturn, tenure]);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">SIP Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Investment (₹)
              </label>
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter monthly investment"
              />
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Return Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter expected return"
              />
              <input
                type="range"
                min="8"
                max="20"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Period (Years)
              </label>
              <input
                type="number"
                value={tenure / 12}
                onChange={(e) => setTenure(Number(e.target.value) * 12)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter period in years"
              />
              <input
                type="range"
                min="12"
                max="360"
                step="12"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">{tenure / 12} years</p>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Summary</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Investment</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalInvestment.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{result.estimatedReturns.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">Total Value</p>
                  <p className="text-3xl font-bold text-purple-600">
                    ₹{result.totalValue.toLocaleString('en-IN')}
                  </p>
                </div>
                
                <div className="mt-4 bg-white rounded-lg p-4">
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{
                        width: `${(result.totalInvestment / result.totalValue) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-gray-600">Invested: {((result.totalInvestment / result.totalValue) * 100).toFixed(1)}%</span>
                    <span className="text-green-600">Returns: {((result.estimatedReturns / result.totalValue) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * FD Calculator Component
 */
function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(12); // in months
  const [result, setResult] = useState<{
    maturityAmount: number;
    interestEarned: number;
  } | null>(null);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    const years = tenure / 12;
    const maturityAmount = principal * Math.pow(1 + rate / 400, 4 * years);
    const interestEarned = maturityAmount - principal;

    setResult({
      maturityAmount: Math.round(maturityAmount),
      interestEarned: Math.round(interestEarned),
    });
  }, [principal, rate, tenure]);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fixed Deposit Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Amount (₹)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter investment amount"
              />
              <input
                type="range"
                min="10000"
                max="5000000"
                step="10000"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter interest rate"
              />
              <input
                type="range"
                min="4"
                max="10"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenure (Months)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter tenure in months"
              />
              <input
                type="range"
                min="6"
                max="120"
                step="3"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">{(tenure / 12).toFixed(1)} years</p>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maturity Details</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{principal.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Interest Earned</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{result.interestEarned.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Maturity Amount</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ₹{result.maturityAmount.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/**
 * RD Calculator Component
 */
function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(12); // in months
  const [result, setResult] = useState<{
    totalDeposit: number;
    interestEarned: number;
    maturityAmount: number;
  } | null>(null);

  // Auto-calculate on mount and when values change
  useEffect(() => {
    const monthlyRate = rate / 1200;
    const maturityAmount =
      monthlyDeposit *
      (((Math.pow(1 + monthlyRate, tenure) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalDeposit = monthlyDeposit * tenure;
    const interestEarned = maturityAmount - totalDeposit;

    setResult({
      totalDeposit: Math.round(totalDeposit),
      interestEarned: Math.round(interestEarned),
      maturityAmount: Math.round(maturityAmount),
    });
  }, [monthlyDeposit, rate, tenure]);

  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recurring Deposit Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Deposit (₹)
              </label>
              <input
                type="number"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter monthly deposit"
              />
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter interest rate"
              />
              <input
                type="range"
                min="4"
                max="10"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenure (Months)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter tenure in months"
              />
              <input
                type="range"
                min="6"
                max="120"
                step="3"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">{(tenure / 12).toFixed(1)} years</p>
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maturity Details</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Total Deposit</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{result.totalDeposit.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Interest Earned</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{result.interestEarned.toLocaleString('en-IN')}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">Maturity Amount</p>
                  <p className="text-3xl font-bold text-orange-600">
                    ₹{result.maturityAmount.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

