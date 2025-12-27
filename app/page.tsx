import Link from 'next/link';
import { getAllArticles, getFeaturedArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import categories from '@/content/categories.json';

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);
  const recentArticles = getAllArticles().slice(0, 6);

  return (
    <div className="bg-warm-cream">
      {/* Hero Section */}
      <section className="bg-forest-green text-warm-cream py-20">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
              Evidence-Based Acupuncture & Wellness Knowledge
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-8 text-warm-cream/90">
              Discover how Traditional Chinese Medicine and acupuncture can support your health journey.
              Expert insights backed by research, explained clearly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn btn-primary bg-white text-forest-green hover:bg-warm-cream">
                Explore All Articles
              </Link>
              <Link href="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-forest-green">
                About Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-4 text-center">
            Explore By Topic
          </h2>
          <p className="text-lg text-dark-gray font-serif text-center mb-12 max-w-2xl mx-auto">
            Browse our comprehensive library of articles organized by health category
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group bg-warm-cream border border-light-gray rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-sans font-semibold text-charcoal mb-3 group-hover:text-forest-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-dark-gray font-serif mb-4 line-clamp-3">
                  {category.description}
                </p>
                <span className="text-teal font-sans font-medium group-hover:underline">
                  Explore {category.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-12">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal">
              Recent Articles
            </h2>
            <Link href="/blog" className="text-teal font-sans font-medium hover:text-forest-green transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-12 text-center">
            Why Trust Needle & Nature?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-charcoal mb-3">
                Expert Authors
              </h3>
              <p className="text-dark-gray font-serif">
                All content written and reviewed by licensed acupuncturists and TCM practitioners with years of clinical experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-charcoal mb-3">
                Research-Backed
              </h3>
              <p className="text-dark-gray font-serif">
                Every health claim is supported by credible sources including peer-reviewed studies, medical journals, and expert consensus.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-charcoal mb-3">
                Regularly Updated
              </h3>
              <p className="text-dark-gray font-serif">
                Our articles are regularly reviewed and updated to reflect the latest research and best practices in acupuncture and TCM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
