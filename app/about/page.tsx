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

      <div className="prose-spiritual">
        <p className="text-xl text-dark-gray font-serif leading-relaxed mb-8">
          Needle & Nature is a sanctuary for those seeking to understand and honor their body's innate healing wisdom through the gentle, time-tested practices of acupuncture and Traditional Chinese Medicine.
        </p>

        <h2>Our Heart</h2>
        <p>
          We believe healing happens when you feel safe, supported, and deeply connected to your body's natural wisdom. Our purpose is to create a peaceful space where ancient healing practices meet modern understanding—helping you discover gentle, holistic paths to balance, relief, and wholeness. You deserve to feel at home in your body, and we're here to support that journey.
        </p>

        <h2>Our Approach</h2>
        <p>
          Everything you read here is crafted by licensed acupuncturists and TCM practitioners who've dedicated their lives to understanding the body's subtle energies and natural healing rhythms. We honor both the ancient wisdom passed down through generations and the insights of modern research—always seeking the truth that serves your wellbeing.
        </p>

        <h3>What Makes Us Different</h3>
        <ul>
          <li>
            <strong>Compassionate Guidance:</strong> Every piece is written by practitioners who see you as a whole person—body, mind, and spirit—not just a set of symptoms.
          </li>
          <li>
            <strong>Grounded in Truth:</strong> We share what we know from both ancient practice and modern understanding, always honest about what helps and what remains a mystery.
          </li>
          <li>
            <strong>Honoring All Perspectives:</strong> We hold space for Traditional Chinese Medicine's spiritual wisdom alongside Western science's insights, finding harmony between both.
          </li>
          <li>
            <strong>Growing with You:</strong> As our collective understanding of healing deepens, we revisit and refine our guidance to serve you better.
          </li>
          <li>
            <strong>Here to Support, Not Sell:</strong> Our only goal is to help you feel more at peace in your body and more connected to your natural healing capacity.
          </li>
        </ul>

        <h2>Our Integrity</h2>
        <p>
          We hold ourselves to deep integrity in everything we share: We speak truthfully about what acupuncture can and cannot do. We honor our training and licenses while staying humble about the mysteries of healing. We acknowledge when something is ancient wisdom versus modern proof. We're transparent about when articles were published and updated. And we always, always encourage you to trust your own body's wisdom and work with qualified practitioners for personalized care.
        </p>

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
