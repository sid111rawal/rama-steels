import type { Metadata } from 'next';
import Script from 'next/script';
import { siteConfig } from '@/config/site';
import { faqData } from '@/lib/faq-data';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata: Metadata = {
  title: `Frequently Asked Questions - Steel Balls & Polish Media | ${siteConfig.name}`,
  description: siteConfig.pageDescriptions.faq,
  keywords: [
    ...siteConfig.keywords,
    'FAQ',
    'frequently asked questions',
    'steel balls FAQ',
    'polish media questions',
    'industrial products FAQ',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description: siteConfig.pageDescriptions.faq,
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage.src.src,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: `${siteConfig.name} - FAQ`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description: siteConfig.pageDescriptions.faq,
    images: [
      {
        url: siteConfig.ogImage.src.src,
        alt: `${siteConfig.name} - FAQ`,
      },
    ],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

