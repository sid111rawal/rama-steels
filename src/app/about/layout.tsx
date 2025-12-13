import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `About ${siteConfig.name} - Our Story, Values & Expertise in Steel Manufacturing`,
  description: siteConfig.pageDescriptions.about,
  keywords: [
    ...siteConfig.keywords,
    'about Rama & Sons',
    'steel manufacturer history',
    'industrial steel company India',
    'steel ball manufacturer story',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About ${siteConfig.name} - Our Story, Values & Expertise`,
    description: siteConfig.pageDescriptions.about,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage.src.src,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: `${siteConfig.name} - About Us`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${siteConfig.name}`,
    description: siteConfig.pageDescriptions.about,
    images: [
      {
        url: siteConfig.ogImage.src.src,
        alt: `${siteConfig.name} - About Us`,
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

