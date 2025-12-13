import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from '@/config/site';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'], 
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), 
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.pageDescriptions.home,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'en': '/',
    },
  },
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: {
      default: `${siteConfig.name} - ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.pageDescriptions.home,
    images: [
      { 
        url: siteConfig.ogImage.src.src, // Use the string path from StaticImageData
        width: siteConfig.ogImage.width, 
        height: siteConfig.ogImage.height, 
        alt: `${siteConfig.name} Logo - Manufacturer of Steel Balls and Polish Media` 
      }
    ],
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${siteConfig.name} - ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.pageDescriptions.home,
    images: [
      { 
        url: siteConfig.ogImage.src.src, // Use the string path from StaticImageData
        alt: `${siteConfig.name} Logo - Industrial Steel Products` 
      }
    ],
    // site: '@YourTwitterHandle', // Add if you have a Twitter handle
    // creator: '@CreatorTwitterHandle', // Add if relevant
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google90490e4fdae7d67a', // Using the verification file found in public folder
    // yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}${siteConfig.ogImage.src.src}`, // Use the string path
    "description": siteConfig.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contactInfo.phone,
      "contactType": "Customer Service",
      "email": siteConfig.contactInfo.email,
      "areaServed": "IN", 
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contactInfo.address.split(',').slice(0, -2).join(',').trim() || "Jaipur House",
      "addressLocality": siteConfig.contactInfo.address.split(',').slice(-2, -1)[0]?.trim() || "Agra",
      "addressRegion": siteConfig.contactInfo.address.split(',').slice(-1)[0]?.trim() || "Uttar Pradesh", 
      // TODO: Update postal code if you have the exact postal code for your business location
      "postalCode": "282002", // Default postal code for Agra, India
      "addressCountry": "IN"
    },
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.linkedin
    ].filter(link => link && link !== "#") 
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}${siteConfig.ogImage.src.src}` // Use the string path
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/products?search={search_term_string}`, 
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    "name": siteConfig.name,
    "image": `${siteConfig.url}${siteConfig.ogImage.src.src}`,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contactInfo.phone,
    "email": siteConfig.contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contactInfo.address.split(',').slice(0, -2).join(',').trim() || "Jaipur House",
      "addressLocality": siteConfig.contactInfo.address.split(',').slice(-2, -1)[0]?.trim() || "Agra",
      "addressRegion": siteConfig.contactInfo.address.split(',').slice(-1)[0]?.trim() || "Uttar Pradesh",
      // TODO: Update postal code if you have the exact postal code for your business location
      "postalCode": "282002", // Default postal code for Agra, India
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      // TODO: Update with exact business location coordinates if available
      // Current values are approximate coordinates for Agra, India
      "latitude": "27.1767",
      "longitude": "78.0081"
    },
    "priceRange": "$$", // Update if you have specific pricing information
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      // TODO: Verify and update with actual business hours
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.linkedin
    ].filter(link => link && link !== "#")
  };

  // Aggregate Rating Schema based on testimonials
  // TODO: Update with actual aggregate rating data if you have verified reviews/ratings
  // Current values are calculated from testimonials section (10 testimonials, average ~4.7/5)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    "name": siteConfig.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7", // Update with actual average rating
      "reviewCount": "10", // Update with actual review count
      "bestRating": "5",
      "worstRating": "4"
    }
  };

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="aggregate-rating-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        <link rel="alternate" hrefLang="en-IN" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
