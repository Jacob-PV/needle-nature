import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Contact Us',
  'Get in touch with the Needle & Nature team. We welcome your questions, feedback, and suggestions.',
  '/contact'
);

export default function ContactPage() {
  return (
    <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6">
        Contact Us
      </h1>

      <div className="prose">
        <p className="text-xl text-dark-gray font-serif leading-relaxed mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or suggestions
          for future articles, please don't hesitate to reach out.
        </p>

        <h2>Get In Touch</h2>
        <p>
          For general inquiries, article suggestions, or feedback, please email us at:
        </p>
        <p className="text-xl">
          <a
            href="mailto:hello@needleandnature.com"
            className="text-teal hover:text-forest-green font-semibold"
          >
            hello@needleandnature.com
          </a>
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Do you provide medical advice or treatment?</h3>
        <p>
          No, Needle & Nature is an educational resource only. We do not provide medical
          advice, diagnosis, or treatment. For health concerns, please consult with a
          licensed healthcare provider.
        </p>

        <h3>Can you help me find an acupuncturist?</h3>
        <p>
          While we don't maintain a directory, we recommend searching for licensed
          acupuncturists through the{' '}
          <a
            href="https://www.nccaom.org/find-a-practitioner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCCAOM practitioner directory
          </a>{' '}
          or your state's acupuncture licensing board.
        </p>

        <h3>Do you accept guest posts?</h3>
        <p>
          We occasionally accept contributions from credentialed acupuncture and TCM
          professionals. If you're interested in writing for Needle & Nature, please
          email us with your credentials, areas of expertise, and article ideas.
        </p>

        <h3>How can I stay updated with new articles?</h3>
        <p>
          Subscribe to our newsletter to receive new articles and wellness insights
          directly in your inbox. You'll find newsletter signup forms throughout the site.
        </p>

        <h2>Report an Issue</h2>
        <p>
          If you've found an error in one of our articles or have concerns about content
          accuracy, please let us know. We take accuracy seriously and review all reports
          promptly.
        </p>

        <div className="bg-light-gray rounded-lg p-6 my-8">
          <h3 className="mt-0">Business Inquiries</h3>
          <p className="mb-0">
            For partnership opportunities, advertising, or other business inquiries,
            please email:{' '}
            <a
              href="mailto:partnerships@needleandnature.com"
              className="text-teal hover:text-forest-green font-semibold"
            >
              partnerships@needleandnature.com
            </a>
          </p>
        </div>

        <div className="bg-warm-cream border-l-4 border-forest-green p-6 my-8">
          <p className="text-sm text-dark-gray mb-0">
            <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3
            business days. During busy periods, it may take slightly longer. Thank you for
            your patience!
          </p>
        </div>
      </div>
    </div>
  );
}
