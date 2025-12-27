import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warm-cream flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl md:text-8xl font-sans font-bold text-forest-green mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-charcoal mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-dark-gray font-serif mb-8">
          We couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Browse Articles
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-dark-gray font-sans mb-4">
            Looking for something specific? Try these popular topics:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog/category/pain-relief"
              className="text-sm px-4 py-2 bg-sage text-charcoal rounded-full hover:bg-sage/80 transition-colors"
            >
              Pain Relief
            </Link>
            <Link
              href="/blog/category/mental-health"
              className="text-sm px-4 py-2 bg-sage text-charcoal rounded-full hover:bg-sage/80 transition-colors"
            >
              Mental Health
            </Link>
            <Link
              href="/blog/category/acupressure"
              className="text-sm px-4 py-2 bg-sage text-charcoal rounded-full hover:bg-sage/80 transition-colors"
            >
              Acupressure
            </Link>
            <Link
              href="/blog/category/tcm"
              className="text-sm px-4 py-2 bg-sage text-charcoal rounded-full hover:bg-sage/80 transition-colors"
            >
              TCM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
