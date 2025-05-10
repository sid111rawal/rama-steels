import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label={`Go to ${siteConfig.name} homepage`}>
              <Image
                src={siteConfig.ogImage} 
                alt={`${siteConfig.name} - Manufacturer of Steel Balls, Polish Media, and Gauges in India`}
                className="rounded-full hover:opacity-80 transition-opacity duration-300 h-20 w-20" 
                placeholder="blur" 
                blurDataURL={siteConfig.ogImage.blurDataURL}
                data-ai-hint="company logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.description.substring(0, 120)}...</p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact {siteConfig.name}</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contactInfo.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${siteConfig.contactInfo.phone}`} className="hover:text-primary transition-colors" aria-label={`Call ${siteConfig.name} at ${siteConfig.contactInfo.phone}`}>{siteConfig.contactInfo.phone}</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${siteConfig.contactInfo.email}`} className="hover:text-primary transition-colors" aria-label={`Email ${siteConfig.name} at ${siteConfig.contactInfo.email}`}>{siteConfig.contactInfo.email}</a>
                </li>
              </ul>
            </address>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-primary mb-4">Follow {siteConfig.name}</h3>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.facebook && siteConfig.socialLinks.facebook !== "#" && (
                <Link href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Follow ${siteConfig.name} on Facebook`} className="text-secondary-foreground hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
              )}
              {siteConfig.socialLinks.twitter && siteConfig.socialLinks.twitter !== "#" && (
                <Link href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`Follow ${siteConfig.name} on Twitter`} className="text-secondary-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
              )}
              {siteConfig.socialLinks.linkedin && siteConfig.socialLinks.linkedin !== "#" && (
              <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Follow ${siteConfig.name} on LinkedIn`} className="text-secondary-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved. Manufacturer of steel balls, polish media, and gauges in Agra, India. Website by <Link href="https://www.linkedin.com/in/siddharthrawal/" target="_blank" rel="noopener developer" className="hover:text-primary">Siddharth Rawal</Link>.</p>
        </div>
      </div>
    </footer>
  );
}
