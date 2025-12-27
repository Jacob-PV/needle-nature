import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Privacy Policy',
  'Learn how Needle & Nature collects, uses, and protects your personal information.',
  '/privacy-policy'
);

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6">
        Privacy Policy
      </h1>

      <div className="prose">
        <p className="text-sm text-dark-gray italic mb-8">
          Last Updated: December 26, 2025
        </p>

        <p className="text-xl text-dark-gray font-serif leading-relaxed mb-8">
          At Needle & Nature, we are committed to protecting your privacy and being
          transparent about how we collect and use information.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>
          When you subscribe to our newsletter or contact us, we collect:
        </p>
        <ul>
          <li>Email address</li>
          <li>Name (if provided)</li>
          <li>Any information you include in messages to us</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we automatically collect certain information through
          cookies and similar technologies:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website</li>
          <li>IP address (anonymized)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Send you newsletter emails (only if you've subscribed)</li>
          <li>Respond to your inquiries and feedback</li>
          <li>Analyze website traffic and improve user experience</li>
          <li>Understand which content is most valuable to our readers</li>
          <li>Ensure website security and prevent abuse</li>
        </ul>

        <h2>Third-Party Services</h2>

        <h3>Analytics</h3>
        <p>
          We use Google Analytics to understand how visitors use our site. Google Analytics
          collects information anonymously and reports website trends without identifying
          individual visitors. You can opt out of Google Analytics by installing the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>

        <h3>Email Service</h3>
        <p>
          If you subscribe to our newsletter, your email address is stored by our email
          service provider. We do not share your email address with any other parties for
          marketing purposes.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies to improve your browsing experience and analyze site traffic.
          Cookies are small text files stored on your device. You can control cookies
          through your browser settings, but disabling cookies may affect site functionality.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Unsubscribe from our newsletter at any time (link included in every email)</li>
          <li>Request a copy of the personal information we have about you</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of analytics tracking</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your
          personal information. However, no internet transmission is completely secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our website is not intended for children under 13. We do not knowingly collect
          personal information from children under 13. If you believe we have collected
          such information, please contact us.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of
          significant changes by posting a notice on our website or sending an email to
          newsletter subscribers.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy or our data practices, please
          contact us at:{' '}
          <a href="mailto:privacy@needleandnature.com">privacy@needleandnature.com</a>
        </p>

        <div className="bg-light-gray rounded-lg p-6 my-8">
          <h3 className="mt-0">GDPR Compliance</h3>
          <p className="mb-0">
            For users in the European Union, we comply with GDPR requirements. You have
            the right to access, correct, delete, or export your personal data. To
            exercise these rights, please contact us at the email address above.
          </p>
        </div>
      </div>
    </div>
  );
}
