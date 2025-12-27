import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-light-gray">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <Link
            href={`/blog/category/${article.category}`}
            className="inline-block text-xs font-sans font-semibold uppercase tracking-wide text-forest-green hover:text-teal transition-colors"
          >
            {article.category.replace(/-/g, ' ')}
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-sans font-semibold mb-3 leading-tight">
          <Link
            href={`/blog/${article.slug}`}
            className="text-charcoal hover:text-forest-green transition-colors"
          >
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-dark-gray font-serif mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-dark-gray font-sans">
          <div className="flex items-center space-x-4">
            <time dateTime={article.publishedDate}>{formattedDate}</time>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </div>
    </article>
  );
}
