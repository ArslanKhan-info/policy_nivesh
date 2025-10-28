import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/container';
import Section from '../../components/ui/section';
import Button from '../../components/ui/button';

/**
 * Learn & Insights section component with article cards
 */
export default function InsightsSection() {
  const articles = [
    {
      category: 'Investment Guide',
      categoryColor: 'text-primary-600',
      title: 'What is Life Insurance and How Does it Work?',
      description:
        'Learn about life insurance and how it can help you build wealth through disciplined protection.',
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
      link: '#',
    },
    {
      category: 'Insurance Planning',
      categoryColor: 'text-success-600',
      title: 'How to Choose the Right Insurance Plan',
      description:
        'A comprehensive guide to selecting life and health insurance that fits your family\'s needs and budget.',
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      link: '#',
    },
    {
      category: 'Tax Planning',
      categoryColor: 'text-purple-600',
      title: 'Top Tax Saving Investment Options for 2024',
      description:
        'Discover the best tax-saving instruments under Section 80C and optimize your tax liability legally.',
      image: 'bg-gradient-to-br from-purple-100 to-purple-200',
      link: '#',
    },
  ];

  return (
    <Section background="gray">
      <Container>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Educational content to help you make informed investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className={`h-48 ${article.image} flex items-center justify-center`}>
                <div className="text-6xl">📊</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <span className={`text-sm font-medium ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors pt-2"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="group">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}

