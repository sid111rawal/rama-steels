import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"

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
  title: 'SteelBalls Co. - Premium Steel Products',
  description: 'Excellence in industrial steel products with over 20 years of experience.',
  keywords: "Steel Balls, Polish Media, Industrial Steel, SteelBalls Co.",
  openGraph: {
    title: 'SteelBalls Co. - Premium Steel Products',
    description: 'Excellence in industrial steel products with over 20 years of experience.',
    // TODO: Update with actual logo URL once available
    images: [{ url: 'https://picsum.photos/seed/logo/1200/630', dataAiHint: 'company logo' }], 
    url: 'https://www.steelballsco.com', // Replace with actual URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${roboto.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
