import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from '@/config/site';
import Script from 'next/script';

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
  metadataBase: new URL(siteConfig.url), // Essential for resolving relative OG images
  title: {
    default: `${siteConfig.name} - High-Quality Steel Balls & Polish Media`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: {
      default: `${siteConfig.name} - High-Quality Steel Balls & Polish Media`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [{ 
      url: siteConfig.ogImage.src, 
      width: siteConfig.ogImage.width, 
      height: siteConfig.ogImage.height, 
      alt: `${siteConfig.name} Logo` 
    }],
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${siteConfig.name} - High-Quality Steel Balls & Polish Media`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [{ 
      url: siteConfig.ogImage.src,
      alt: `${siteConfig.name} Logo` 
    }],
    // siteId: '@YourTwitterHandle', 
    // creatorId: '@YourTwitterHandle',
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
    // google: 'your-google-site-verification-code', 
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
    "logo": `${siteConfig.url}${siteConfig.ogImage.src}`, 
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
      "streetAddress": siteConfig.contactInfo.address.split(',')[0]?.trim() || "Jaipur House",
      "addressLocality": siteConfig.contactInfo.address.split(',')[1]?.trim() || "Agra",
      "addressRegion": siteConfig.contactInfo.address.split(',')[2]?.trim(), // Optional if available
      "postalCode": siteConfig.contactInfo.address.split(',')[3]?.trim(), // Optional if available
      "addressCountry": "IN"
    },
    "sameAs": [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.linkedin
    ].filter(link => link && link !== "#") // Filter out placeholder or empty links
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
        "url": `${siteConfig.url}${siteConfig.ogImage.src}`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/products?search={search_term_string}`, // Ensure this path is correct
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <html lang="en" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}