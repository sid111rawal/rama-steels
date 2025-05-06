import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-secondary py-24 sm:py-32 md:py-40 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image - subtle steel texture or abstract industrial */}
      <Image 
        src="https://picsum.photos/seed/hero-bg/1920/1080" 
        alt="Industrial background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        data-ai-hint="industrial background"
      />
      <div className="absolute inset-0 bg-background/30 dark:bg-background/50 z-0"></div> {/* Overlay for readability */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Premium Steel Balls &amp; Polish Media
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10">
            Excellence in industrial steel products. Your trusted partner for quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <Link href="/products" aria-label="Explore Products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
              <Link href="#inquiry" aria-label="Request a Quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
