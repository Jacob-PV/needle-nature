export interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  lastModified: string;
  featuredImage: string;
  imageAlt: string;
  readingTime: number;
  status: 'published' | 'draft' | 'archived';
  featured: boolean;
  seoKeywords: string[];
  faq?: FAQ[];
  externalSources?: ExternalLink[];
  internalLinks?: string[];
  canonicalUrl?: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  credentials: string;
  expertise: string[];
  photo: string;
  email?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  articleCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaDescription: string;
  icon: string;
  color: string;
  featuredImage: string;
  parent: string | null;
  articleCount: number;
  seoKeywords: string[];
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  defaultOgImage: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    pinterest?: string;
  };
  googleAnalyticsId?: string;
  googleSearchConsole?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ExternalLink {
  title: string;
  url: string;
  source: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ArticleFrontmatter {
  title: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  lastModified: string;
  featuredImage: string;
  imageAlt: string;
  featured?: boolean;
  seoKeywords: string[];
  faq?: FAQ[];
  externalSources?: ExternalLink[];
}
