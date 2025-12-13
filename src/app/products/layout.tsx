import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Industrial Products | ${siteConfig.name} - Steel Balls, Polish Media, Gauges`,
  description: siteConfig.pageDescriptions.products,
  keywords: [
    ...siteConfig.keywords,
    'product catalog',
    'steel products list',
    'industrial products catalog',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: `Industrial Products | ${siteConfig.name}`,
    description: siteConfig.pageDescriptions.products,
    url: `${siteConfig.url}/products`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage.src.src,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: `${siteConfig.name} - Products`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Industrial Products | ${siteConfig.name}`,
    description: siteConfig.pageDescriptions.products,
    images: [
      {
        url: siteConfig.ogImage.src.src,
        alt: `${siteConfig.name} - Products`,
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

