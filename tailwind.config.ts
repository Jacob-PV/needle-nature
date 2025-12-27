import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'forest-green': '#14453d',
        'sage': '#7a9e94',
        'teal': '#0d9488',

        // Neutral colors
        'warm-cream': '#fcf9f4',
        'light-gray': '#ECECE7',
        'medium-gray': '#9ca3af',
        'charcoal': '#1a1a1a',
        'dark-gray': '#4a5568',

        // Semantic colors
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6',
      },
      fontFamily: {
        serif: ['var(--font-crimson-pro)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sora)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Mobile first, then tablet/desktop overrides
        'h1-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-desktop': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h2-mobile': ['26px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-desktop': ['36px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3-mobile': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-desktop': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body-large': ['22px', { lineHeight: '1.8' }],
        'body': ['18px', { lineHeight: '1.8' }],
        'body-small': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'article': '680px',
        'wide': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
