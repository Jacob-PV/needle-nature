import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import authors from '@/content/authors.json';

export const metadata = generatePageMetadata(
  'About Us',
  'Meet the licensed acupuncturists and TCM experts behind Needle & Nature. Learn about our mission to provide evidence-based wellness information.',
  '/about'
);

export default function AboutPage() {
  return (
    <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-6">
        About Needle & Nature
      </h1>

      <div className="prose">
        <p className="text-xl text-dark-gray font-serif leading-relaxed mb-8">
          Needle & Nature is your trusted source for evidence-based information about acupuncture,
          Traditional Chinese Medicine, and holistic wellness.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that everyone deserves access to accurate, trustworthy information about
          acupuncture and Traditional Chinese Medicine. Our mission is to bridge the gap between
          ancient wisdom and modern science, providing clear, well-researched content that
          empowers you to make informed decisions about your health.
        </p>

        <h2>Our Approach</h2>
        <p>
          Every article on Needle & Nature is written or reviewed by licensed acupuncturists
          and TCM practitioners with years of clinical experience. We combine traditional
          knowledge with current research, always citing credible sources including
          peer-reviewed studies, medical journals, and expert consensus.
        </p>

        <h3>What Makes Us Different</h3>
        <ul>
          <li>
            <strong>Expert Authors:</strong> All content is created by licensed, credentialed
            acupuncture and TCM professionals.
          </li>
          <li>
            <strong>Evidence-Based:</strong> We support health claims with research and cite
            credible sources including PubMed, NIH, and medical journals.
          </li>
          <li>
            <strong>Balanced Perspective:</strong> We present both traditional TCM theory and
            modern scientific understanding, acknowledging limitations and uncertainties.
          </li>
          <li>
            <strong>Regular Updates:</strong> Articles are reviewed and updated to reflect
            the latest research and best practices.
          </li>
          <li>
            <strong>Educational Focus:</strong> We prioritize education over promotion,
            providing information to help you understand acupuncture and wellness.
          </li>
        </ul>

        <h2>Editorial Standards</h2>
        <p>
          We maintain strict editorial standards to ensure the accuracy and credibility of
          our content:
        </p>
        <ul>
          <li>All health claims must be supported by credible sources</li>
          <li>Authors must disclose credentials and potential conflicts of interest</li>
          <li>Content is reviewed for medical accuracy and clarity</li>
          <li>We clearly distinguish between traditional theory and modern evidence</li>
          <li>Articles include publication and last-updated dates for transparency</li>
        </ul>

        <h2>Meet Our Experts</h2>
        <p>
          Our team consists of licensed acupuncturists and Traditional Chinese Medicine
          practitioners dedicated to sharing their knowledge and expertise.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {authors.map((author) => (
          <div key={author.id} className="bg-light-gray rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src={author.photo}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-sans font-bold text-charcoal mb-2">
                  {author.name}
                </h3>
                <p className="text-sm font-sans text-dark-gray italic mb-4">
                  {author.credentials}
                </p>
                <p className="text-dark-gray font-serif mb-4 leading-relaxed">
                  {author.bio}
                </p>
                <div className="mb-3">
                  <p className="text-sm font-sans font-semibold text-charcoal mb-2">
                    Areas of Expertise:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((area) => (
                      <span
                        key={area}
                        className="inline-block bg-white px-3 py-1 rounded-full text-sm font-sans text-dark-gray"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                {author.socialLinks && Object.keys(author.socialLinks).length > 0 && (
                  <div className="flex items-center space-x-4 mt-4">
                    {author.socialLinks.website && (
                      <a
                        href={author.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-teal hover:text-forest-green transition-colors"
                      >
                        Website
                      </a>
                    )}
                    {author.socialLinks.linkedin && (
                      <a
                        href={author.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-teal hover:text-forest-green transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {author.socialLinks.twitter && (
                      <a
                        href={author.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-teal hover:text-forest-green transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose mt-12">
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you. Visit our{' '}
          <a href="/contact">contact page</a> to get in touch.
        </p>

        <div className="bg-warm-cream border-l-4 border-forest-green p-6 my-8">
          <p className="text-sm text-dark-gray mb-0">
            <strong>Medical Disclaimer:</strong> The information on this website is for
            educational purposes only and is not intended as a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the advice of your physician
            or other qualified health provider with any questions you may have regarding a
            medical condition.
          </p>
        </div>
      </div>
    </div>
  );
}
