'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulated newsletter signup - in production, connect to your email service
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email to confirm.');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-light-gray rounded-lg p-8 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-sans font-bold text-charcoal mb-3">
          Stay Informed About Natural Wellness
        </h3>
        <p className="text-dark-gray font-serif mb-6">
          Get evidence-based acupuncture and wellness insights delivered to your inbox.
          No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="bg-success/10 border border-success text-success rounded-lg p-4">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-medium-gray focus:outline-none focus:ring-2 focus:ring-teal font-sans"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-forest-green text-white font-sans font-semibold rounded-lg hover:bg-forest-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-teal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-error text-sm font-sans">{message}</p>
        )}

        <p className="mt-4 text-xs text-dark-gray font-sans">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
