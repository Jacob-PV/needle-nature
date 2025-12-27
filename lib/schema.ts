import { Article, Author, FAQ } from '@/types';
import { siteConfig } from '@/config/site.config';

export function generateArticleSchema(article: Article, author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `${siteConfig.siteUrl}${article.featuredImage}`,
    datePublished: article.publishedDate,
    dateModified: article.lastModified,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.credentials,
      description: author.bio,
      url: author.socialLinks?.website,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${article.slug}`,
    },
    keywords: article.seoKeywords.join(', '),
  };
}

export function generateMedicalWebPageSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: article.title,
    description: article.metaDescription,
    url: `${siteConfig.siteUrl}/blog/${article.slug}`,
    datePublished: article.publishedDate,
    dateModified: article.lastModified,
    reviewedBy: {
      '@type': 'Person',
      name: article.author,
    },
    specialty: 'Acupuncture',
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generatePersonSchema(author: Author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.credentials,
    description: author.bio,
    url: author.socialLinks?.website,
    sameAs: Object.values(author.socialLinks || {}).filter(Boolean),
    knowsAbout: author.expertise,
  };
}
