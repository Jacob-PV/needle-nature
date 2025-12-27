# Image Assets

This directory contains all images for the Needle & Nature website.

## Directory Structure

```
images/
├── articles/           # Featured images for blog articles
├── authors/           # Author profile photos
├── categories/        # Category featured images
├── logo.png          # Site logo
└── og-default.jpg    # Default Open Graph image
```

## Image Requirements

### Article Images
- **Format**: WebP preferred, JPEG fallback
- **Dimensions**: 1200x630px (16:9 aspect ratio)
- **File Size**: < 200KB optimized
- **Naming**: Descriptive, lowercase, hyphens (e.g., `back-pain-acupuncture.jpg`)

### Author Photos
- **Format**: WebP or JPEG
- **Dimensions**: 400x400px (square)
- **File Size**: < 100KB
- **Naming**: Match author ID (e.g., `dr-sarah-chen.jpg`)

### Category Images
- **Format**: WebP or JPEG
- **Dimensions**: 1200x630px
- **File Size**: < 200KB
- **Naming**: Match category slug (e.g., `pain-relief.jpg`)

## Placeholder Images

For development, use placeholder images:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Placeholder.com](https://placeholder.com) - Simple placeholders

## Image Optimization

Before adding images to production:
1. Compress images using tools like TinyPNG or ImageOptim
2. Convert to WebP format for better performance
3. Ensure descriptive alt text in article frontmatter
4. Use Next.js Image component for automatic optimization

## Current Placeholder Images Needed

Create or obtain these images:

### Articles (12 images needed)
- `back-pain-acupuncture.jpg`
- `migraine-acupuncture.jpg`
- `anxiety-acupuncture.jpg`
- `sleep-acupuncture.jpg`
- `headache-acupressure.jpg`
- `nausea-acupressure.jpg`
- `meridians-tcm.jpg`
- `qi-energy.jpg`
- `immune-acupuncture.jpg`
- `digestive-acupuncture.jpg`
- `arthritis-acupuncture.jpg`
- `neck-pain-acupuncture.jpg`
- `womens-health-acupuncture.jpg`

### Authors (2 images needed)
- `dr-sarah-chen.jpg`
- `michael-rodriguez.jpg`

### Categories (5 images needed)
- `pain-relief.jpg`
- `mental-health.jpg`
- `acupressure.jpg`
- `tcm.jpg`
- `wellness.jpg`

### Site Assets
- `logo.png` - Site logo (transparent background)
- `og-default.jpg` - Default social sharing image (1200x630px)
