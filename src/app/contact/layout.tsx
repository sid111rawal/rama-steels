import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Contact Us - ${siteConfig.name} | Get in Touch for Steel Balls & Polish Media`,
  description: `Contact ${siteConfig.name} for inquiries about steel balls, polish media, and precision gauges. Reach us at ${siteConfig.contactInfo.phone} or ${siteConfig.contactInfo.email}. Located in ${siteConfig.contactInfo.address}.`,
  keywords: [
    ...siteConfig.keywords,
    'contact us',
    'get in touch',
    'inquiry form',
    'steel ball manufacturer contact',
    'polish media supplier contact',
    'Agra steel manufacturer',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Us - ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for inquiries about steel balls, polish media, and precision gauges.`,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Us - ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} for inquiries about steel balls, polish media, and precision gauges.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

