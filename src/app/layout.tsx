import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from '@/config/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // Added metadataBase
  title: `${siteConfig.name} - Premium Steel Products`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: `${siteConfig.name} - Premium Steel Products`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage.src, width: 1200, height: 630, alt: `${siteConfig.name} Logo`, 'data-ai-hint': 'company logo' }], // Added width, height, alt
    url: siteConfig.url,
    type: 'website', // Added OG type
  },
  twitter: { // Added Twitter specific metadata
    card: 'summary_large_image',
    title: `${siteConfig.name} - Premium Steel Products`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage.src, alt: `${siteConfig.name} Logo`, 'data-ai-hint': 'company logo' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Ensure this is 'system' for auto dark/light
          enableSystem // Enable system theme detection
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
