import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getAllSlugs, getRelatedArticles } from '@/lib/articles';
import { generateArticleMetadata } from '@/lib/metadata';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import authors from '@/content/authors.json';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBio from '@/components/AuthorBio';
import RelatedArticles from '@/components/RelatedArticles';
import NewsletterCTA from '@/components/NewsletterCTA';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return generateArticleMetadata(article);
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const author = authors.find((a) => a.id === article.author);
  const relatedArticles = getRelatedArticles(article.slug);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: article.category.replace(/-/g, ' '), href: `/blog/category/${article.category}` },
    { label: article.title, href: `/blog/${article.slug}` },
  ];

  const articleSchema = author ? generateArticleSchema(article, author) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://needleandnature.com' },
    { name: 'Blog', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://needleandnature.com'}/blog` },
    { name: article.category.replace(/-/g, ' '), url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://needleandnature.com'}/blog/category/${article.category}` },
    { name: article.title, url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://needleandnature.com'}/blog/${article.slug}` },
  ]);
  const faqSchema = article.faq ? generateFAQSchema(article.faq) : null;

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedModified = new Date(article.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Schema Markup */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block text-sm font-sans font-semibold uppercase tracking-wide text-forest-green">
              {article.category.replace(/-/g, ' ')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-dark-gray font-serif mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex items-center space-x-6 text-sm text-dark-gray font-sans mb-8">
            <div className="flex items-center space-x-2">
              {author && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={author.photo}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold text-charcoal">{author?.name}</p>
                <p className="text-xs">{author?.credentials}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <time dateTime={article.publishedDate}>{formattedDate}</time>
              <span>•</span>
              <span>{article.readingTime} min read</span>
            </div>
          </div>

          {article.publishedDate !== article.lastModified && (
            <p className="text-sm text-dark-gray font-sans italic mb-8">
              Last updated: {formattedModified}
            </p>
          )}

          {/* Featured Image */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={article.featuredImage}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 680px"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose">
          <MDXRemote source={article.content} />
        </div>

        {/* FAQ Section */}
        {article.faq && article.faq.length > 0 && (
          <section className="my-12 border-t border-light-gray pt-12">
            <h2 className="text-3xl font-sans font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {article.faq.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-sans font-semibold text-charcoal mb-3">
                    {faq.question}
                  </h3>
                  <div
                    className="text-dark-gray font-serif leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* External Sources */}
        {article.externalSources && article.externalSources.length > 0 && (
          <section className="my-12 border-t border-light-gray pt-12">
            <h2 className="text-2xl font-sans font-bold text-charcoal mb-6">
              Sources & References
            </h2>
            <ul className="space-y-2">
              {article.externalSources.map((source, index) => (
                <li key={index} className="text-dark-gray font-serif">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-forest-green underline"
                  >
                    {source.title}
                  </a>
                  {' - '}
                  <span className="text-sm">{source.source}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Author Bio */}
        {author && <AuthorBio author={author} />}

        {/* Newsletter CTA */}
        <NewsletterCTA />

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  );
}
