import { notFound } from 'next/navigation';
import { getArticlesByCategory, getAllCategories } from '@/lib/articles';
import { generateCategoryMetadata } from '@/lib/metadata';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import categories from '@/content/categories.json';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categoryList = getAllCategories();
  return categoryList.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) return {};
  return generateCategoryMetadata(category.name, category.metaDescription, category.slug);
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(params.category);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: category.name, href: `/blog/category/${category.slug}` },
  ];

  return (
    <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6">
          {category.name}
        </h1>
        <p className="text-xl text-dark-gray font-serif max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-light-gray rounded-lg">
          <p className="text-dark-gray font-serif text-lg">
            No articles in this category yet. Check back soon for new content!
          </p>
        </div>
      )}
    </div>
  );
}
