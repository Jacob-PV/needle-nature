import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleFrontmatter } from '@/types';
import readingTime from 'reading-time';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  // Get all category directories
  const categories = fs.readdirSync(articlesDirectory);

  categories.forEach((category) => {
    const categoryPath = path.join(articlesDirectory, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);

      files.forEach((filename) => {
        if (filename.endsWith('.mdx')) {
          const slug = filename.replace(/\.mdx$/, '');
          const article = getArticleBySlug(slug);
          if (article && article.status === 'published') {
            articles.push(article);
          }
        }
      });
    }
  });

  // Sort by published date (newest first)
  return articles.sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    // Search all category directories for the article
    const categories = fs.readdirSync(articlesDirectory);

    for (const category of categories) {
      const categoryPath = path.join(articlesDirectory, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const filePath = path.join(categoryPath, `${slug}.mdx`);

        if (fs.existsSync(filePath)) {
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          const frontmatter = data as ArticleFrontmatter;

          const stats = readingTime(content);

          return {
            id: slug,
            slug,
            title: frontmatter.title,
            metaDescription: frontmatter.metaDescription,
            excerpt: frontmatter.excerpt,
            content,
            category: frontmatter.category,
            tags: frontmatter.tags || [],
            author: frontmatter.author,
            publishedDate: frontmatter.publishedDate,
            lastModified: frontmatter.lastModified || frontmatter.publishedDate,
            featuredImage: frontmatter.featuredImage,
            imageAlt: frontmatter.imageAlt,
            readingTime: Math.ceil(stats.minutes),
            status: 'published',
            featured: frontmatter.featured || false,
            seoKeywords: frontmatter.seoKeywords || [],
            faq: frontmatter.faq,
            externalSources: frontmatter.externalSources,
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.category === categorySlug);
}

export function getFeaturedArticles(limit: number = 3): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.featured).slice(0, limit);
}

export function getRelatedArticles(currentSlug: string, limit: number = 4): Article[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const allArticles = getAllArticles().filter(article => article.slug !== currentSlug);

  // Score articles by relevance
  const scored = allArticles.map(article => {
    let score = 0;

    // Same category gets highest score
    if (article.category === currentArticle.category) score += 10;

    // Shared tags
    const sharedTags = article.tags.filter(tag => currentArticle.tags.includes(tag));
    score += sharedTags.length * 3;

    return { article, score };
  });

  // Sort by score and return top results
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article);
}

export function getAllSlugs(): string[] {
  const articles = getAllArticles();
  return articles.map(article => article.slug);
}

export function getAllCategories(): string[] {
  const categories = fs.readdirSync(articlesDirectory);
  return categories.filter(category => {
    const categoryPath = path.join(articlesDirectory, category);
    return fs.statSync(categoryPath).isDirectory();
  });
}
