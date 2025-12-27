import { Metadata } from 'next';
import { Article } from '@/types';
import { siteConfig } from '@/config/site.config';

export function generateArticleMetadata(article: Article): Metadata {
  const url = `${siteConfig.siteUrl}/blog/${article.slug}`;
  const imageUrl = `${siteConfig.siteUrl}${article.featuredImage}`;

  return {
    title: `${article.title} | ${siteConfig.siteName}`,
    description: article.metaDescription,
    keywords: article.seoKeywords,
    authors: [{ name: article.author }],
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
      publishedTime: article.publishedDate,
      modifiedTime: article.lastModified,
      authors: [article.author],
      siteName: siteConfig.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: article.canonicalUrl || url,
    },
    robots: {
      index: article.status === 'published',
      follow: article.status === 'published',
    },
  };
}

export function generateCategoryMetadata(
  categoryName: string,
  categoryDescription: string,
  categorySlug: string
): Metadata {
  const url = `${siteConfig.siteUrl}/blog/category/${categorySlug}`;

  return {
    title: `${categoryName} | ${siteConfig.siteName}`,
    description: categoryDescription,
    openGraph: {
      type: 'website',
      url,
      title: `${categoryName} | ${siteConfig.siteName}`,
      description: categoryDescription,
      images: [siteConfig.defaultOgImage],
      siteName: siteConfig.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | ${siteConfig.siteName}`,
      description: categoryDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title: `${title} | ${siteConfig.siteName}`,
    description,
    openGraph: {
      type: 'website',
      url,
      title: `${title} | ${siteConfig.siteName}`,
      description,
      images: [siteConfig.defaultOgImage],
      siteName: siteConfig.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.siteName}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
