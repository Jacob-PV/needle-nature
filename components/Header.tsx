'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site.config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Pain Relief', href: '/blog/category/pain-relief' },
    { name: 'Mental Health', href: '/blog/category/mental-health' },
    { name: 'Acupressure', href: '/blog/category/acupressure' },
    { name: 'TCM', href: '/blog/category/tcm' },
    { name: 'Wellness', href: '/blog/category/wellness' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-warm-cream border-b border-light-gray">
      <nav className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-sans font-bold text-forest-green">
                {siteConfig.siteName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/blog"
                className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium"
              >
                All Articles
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-forest-green hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-teal"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3">
              <Link
                href="/blog"
                className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Articles
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="text-charcoal hover:text-forest-green transition-colors font-sans font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
