# Needle & Nature - SEO-Optimized Wellness Hub

A high-performance, SEO-first acupuncture and wellness information website built with Next.js 14, TypeScript, and Tailwind CSS. Features comprehensive content management, schema markup, and accessibility compliance.

## Overview

Needle & Nature is an evidence-based acupuncture and wellness resource designed to rank highly on Google and provide trustworthy health information. The site implements best-in-class SEO architecture, E-E-A-T compliance for health content, and beautiful, accessible design.

### Key Features

- **SEO-First Architecture**: Dynamic sitemap, robots.txt, comprehensive schema markup (Article, MedicalWebPage, FAQPage, BreadcrumbList)
- **Content-Rich**: 12+ professionally written MDX articles across 5 health categories
- **Performance Optimized**: Static site generation, optimized images, minimal JavaScript
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, and focus management
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Design System**: Custom color palette (forest green, warm cream) with Crimson Pro + Sora fonts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX for articles with frontmatter
- **SEO**: Built-in sitemap, robots.txt, schema markup
- **Deployment**: Optimized for Vercel

## Project Structure

```
needle-nature/
├── app/                          # Next.js 14 app directory
│   ├── layout.tsx               # Root layout with fonts and metadata
│   ├── page.tsx                 # Homepage with hero and featured articles
│   ├── blog/
│   │   ├── page.tsx             # Blog listing page
│   │   ├── [slug]/page.tsx      # Individual article pages
│   │   └── category/[category]/ # Category archive pages
│   ├── about/page.tsx           # About page with author bios
│   ├── contact/page.tsx         # Contact page
│   ├── privacy-policy/page.tsx  # Privacy policy
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # Dynamic robots.txt
│   ├── not-found.tsx            # Custom 404 page
│   └── globals.css              # Global styles and prose classes
├── components/                   # React components
│   ├── Header.tsx               # Site header with navigation
│   ├── Footer.tsx               # Site footer with sitemap
│   ├── ArticleCard.tsx          # Article preview cards
│   ├── Breadcrumbs.tsx          # SEO breadcrumb navigation
│   ├── AuthorBio.tsx            # Author information display
│   ├── RelatedArticles.tsx      # Related content recommendations
│   └── NewsletterCTA.tsx        # Email signup component
├── lib/                         # Utility functions
│   ├── articles.ts              # Article fetching and management
│   ├── metadata.ts              # SEO metadata generation
│   └── schema.ts                # JSON-LD schema generation
├── types/                       # TypeScript interfaces
│   └── index.ts                 # All type definitions
├── content/                     # Content files
│   ├── articles/                # MDX article files by category
│   │   ├── pain-relief/
│   │   ├── mental-health/
│   │   ├── acupressure/
│   │   ├── tcm/
│   │   └── wellness/
│   ├── authors.json             # Author profiles and credentials
│   └── categories.json          # Category definitions
├── config/                      # Configuration files
│   └── site.config.ts           # Global site settings
├── public/                      # Static assets
│   └── images/                  # Optimized images
└── package.json                 # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd workspace/needle-nature
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SITE_URL=https://needleandnature.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_GSC_ID=your-search-console-id
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

The build process will:
- Generate static pages for all articles and categories
- Create optimized images
- Generate sitemap.xml and robots.txt
- Minify and optimize all code

## Content Management

### Adding New Articles

1. Create a new MDX file in the appropriate category folder:
   ```
   content/articles/[category]/article-slug.mdx
   ```

2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Article Title (50-60 characters)"
   metaDescription: "SEO meta description (150-160 characters)"
   excerpt: "Article summary for cards (150-160 characters)"
   category: "pain-relief"
   tags: ["tag1", "tag2"]
   author: "dr-sarah-chen"
   publishedDate: "2024-01-15"
   lastModified: "2024-01-15"
   featuredImage: "/images/articles/image.jpg"
   imageAlt: "Descriptive alt text"
   featured: false
   seoKeywords: ["keyword1", "keyword2"]
   ---
   ```

3. Write article content in Markdown/MDX

4. Rebuild the site - new article will automatically appear

### Adding New Authors

Edit `content/authors.json` to add new author profiles:

```json
{
  "id": "author-id",
  "name": "Author Name",
  "slug": "author-name",
  "bio": "Professional bio...",
  "credentials": "L.Ac., DACM",
  "expertise": ["Area 1", "Area 2"],
  "photo": "/images/authors/photo.jpg"
}
```

### Adding New Categories

Edit `content/categories.json` to add new categories:

```json
{
  "id": "category-id",
  "name": "Category Name",
  "slug": "category-slug",
  "description": "SEO-rich description...",
  "metaDescription": "Meta description..."
}
```

## SEO Features

### Implemented SEO Best Practices

- **Metadata**: Unique title and description for every page
- **Schema Markup**: Article, MedicalWebPage, Organization, Person, BreadcrumbList, FAQPage
- **Sitemap**: Automatically generated from all content
- **Robots.txt**: Configured for optimal crawling
- **URL Structure**: Clean, keyword-rich URLs
- **Heading Hierarchy**: Proper H1-H6 structure
- **Image Optimization**: WebP format with descriptive alt text
- **Internal Linking**: Related articles and breadcrumb navigation
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Page Speed**: Static generation, optimized assets, minimal JavaScript

### E-E-A-T Compliance for Health Content

- Author credentials prominently displayed
- Medical claims backed by external sources
- Publication and last-updated dates visible
- Professional, trustworthy design
- Privacy policy and medical disclaimer

## Design System

### Colors

- **Forest Green** (#14453d): Primary brand color
- **Sage Green** (#7a9e94): Secondary accents
- **Teal** (#0d9488): Interactive elements and links
- **Warm Cream** (#fcf9f4): Primary background
- **Light Gray** (#ECECE7): Secondary backgrounds
- **Charcoal** (#1a1a1a): Primary text

### Typography

- **Headings**: Sora (modern sans-serif)
- **Body**: Crimson Pro (elegant serif for readability)
- **Base Size**: 18px for comfortable reading
- **Line Height**: 1.8 for health content

### Spacing

- 8px baseline grid
- Generous whitespace for calm, focused reading
- Max content width: 680px (articles), 1200px (wide layouts)

## Accessibility

WCAG 2.1 AA compliant features:

- Semantic HTML5 elements
- Keyboard navigation support
- Focus visible states
- ARIA labels where needed
- Sufficient color contrast (AAA for text)
- Alt text for all images
- Responsive font sizes
- Skip to content link

## Performance

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with WebP
- **Font Optimization**: next/font with display: swap
- **Code Splitting**: Automatic with Next.js
- **Minimal JavaScript**: Server components where possible
- **Target Metrics**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Deployment

### Deploying to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

Vercel automatically:
- Runs build process
- Generates static pages
- Configures edge caching
- Sets up automatic deployments

### Environment Variables for Production

Set these in your Vercel project settings:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_ID=your-search-console-verification
```

## Development Workflow

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

### Code Quality

- TypeScript strict mode enabled
- Component-level error boundaries
- Proper type definitions for all functions
- Consistent naming conventions

## Customization

### Changing Colors

Edit `tailwind.config.ts` to update the color palette:

```typescript
colors: {
  'forest-green': '#14453d',
  // ... other colors
}
```

### Changing Fonts

Edit `app/layout.tsx` to use different Google Fonts:

```typescript
import { NewFont } from 'next/font/google';

const newFont = NewFont({
  subsets: ['latin'],
  variable: '--font-new',
});
```

### Adding New Pages

1. Create new file in `app/` directory
2. Export default component
3. Add metadata export for SEO
4. Page automatically appears in sitemap

## Content Guidelines

### Writing Articles

- **Title**: 50-60 characters, include primary keyword
- **Meta Description**: 150-160 characters, compelling and descriptive
- **Excerpt**: 150-160 characters for article cards
- **Content**: 1000-2500 words for comprehensive coverage
- **Headings**: Use H2 for main sections, H3 for subsections
- **Links**: Include 2-3 external links to credible sources
- **Internal Links**: Link to 3-5 related articles

### SEO Best Practices

- One H1 per page (article title)
- Include target keywords naturally
- Use descriptive image alt text
- Add FAQ sections where appropriate
- Cite credible sources for health claims
- Keep URLs short and descriptive

## Troubleshooting

### Build Fails

- Check all MDX frontmatter is valid YAML
- Ensure all images referenced exist
- Verify TypeScript has no errors

### Images Not Loading

- Place images in `public/images/`
- Reference with leading slash: `/images/filename.jpg`
- Ensure image paths in frontmatter match actual files

### Articles Not Appearing

- Check article category folder matches category slug
- Verify frontmatter has all required fields
- Ensure publishedDate is in valid format (YYYY-MM-DD)
- Rebuild the site after adding content

## License

Private project - All rights reserved.

## Support

For questions or issues:
- Review this documentation
- Check Next.js 14 documentation
- Review Tailwind CSS documentation

## Credits

- Built with Next.js 14, React, and Tailwind CSS
- Fonts: Crimson Pro and Sora from Google Fonts
- Icons: SVG icons for social media and UI elements
- Deployed on Vercel edge network

---

Built with care for SEO, performance, and user experience.
