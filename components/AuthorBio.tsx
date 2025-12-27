import Image from 'next/image';
import { Author } from '@/types';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-light-gray rounded-lg p-6 my-12">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={author.photo}
              alt={author.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-xl font-sans font-semibold text-charcoal">
              {author.name}
            </h3>
            <p className="text-sm font-sans text-dark-gray italic">
              {author.credentials}
            </p>
          </div>
          <p className="text-sm font-serif text-dark-gray leading-relaxed">
            {author.bio}
          </p>
          {author.socialLinks && Object.keys(author.socialLinks).length > 0 && (
            <div className="mt-4 flex items-center space-x-4">
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
  );
}
