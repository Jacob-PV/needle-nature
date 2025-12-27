import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  siteName: 'Needle & Nature',
  siteDescription: 'Evidence-based acupuncture and wellness information. Explore Traditional Chinese Medicine, pain relief, mental health support, and natural healing approaches backed by research.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://needleandnature.com',
  defaultOgImage: '/images/og-default.webp',
  socialLinks: {
    twitter: 'https://twitter.com/needleandnature',
    instagram: 'https://instagram.com/needleandnature',
    pinterest: 'https://pinterest.com/needleandnature',
  },
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  googleSearchConsole: process.env.NEXT_PUBLIC_GSC_ID,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Needle & Nature',
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/logo.png`,
  description: siteConfig.siteDescription,
  sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
};
