import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Tools',
    description: `Free online tools from ${siteConfig.name} - Calculate pricing for steel balls and polish media products. Professional calculators for industrial steel product estimates.`,
    keywords: [
        'steel ball calculator',
        'price calculator',
        'steel ball pricing tool',
        'industrial calculator',
        'metal ball price estimate',
        ...siteConfig.keywords.slice(0, 5),
    ],
    openGraph: {
        title: `Tools | ${siteConfig.name}`,
        description: `Free online tools from ${siteConfig.name} - Calculate pricing for steel balls and polish media products.`,
        url: `${siteConfig.url}/tools`,
        siteName: siteConfig.name,
        locale: 'en_IN',
        type: 'website',
    },
};

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
