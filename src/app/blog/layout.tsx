import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Industrial Insights & News | ${siteConfig.name} Blog`,
  description: siteConfig.pageDescriptions.blog,
  keywords: [
    ...siteConfig.keywords,
    'steel manufacturing blog',
    'industrial insights',
    'steel industry news',
    'manufacturing blog India',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `Industrial Insights & News | ${siteConfig.name} Blog`,
    description: siteConfig.pageDescriptions.blog,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage.src.src,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: `${siteConfig.name} - Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Industrial Insights & News | ${siteConfig.name} Blog`,
    description: siteConfig.pageDescriptions.blog,
    images: [
      {
        url: siteConfig.ogImage.src.src,
        alt: `${siteConfig.name} - Blog`,
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

