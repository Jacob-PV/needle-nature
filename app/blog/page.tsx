import { getAllArticles } from '@/lib/articles';
import { generatePageMetadata } from '@/lib/metadata';
import ArticleCard from '@/components/ArticleCard';

export const metadata = generatePageMetadata(
  'All Articles',
  'Browse our complete library of evidence-based acupuncture and wellness articles. Expert insights on pain relief, mental health, TCM, acupressure, and holistic wellness.',
  '/blog'
);

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-4">
          All Articles
        </h1>
        <p className="text-xl text-dark-gray font-serif max-w-3xl">
          Explore our complete library of evidence-based articles on acupuncture, Traditional Chinese Medicine, and holistic wellness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark-gray font-serif text-lg">
            No articles found. Check back soon for new content!
          </p>
        </div>
      )}
    </div>
  );
}
