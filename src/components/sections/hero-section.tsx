
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Keep for potential future static background fallback
import ParticlesComponent from '@/components/particles-component';
import useParallax from '@/hooks/use-parallax';
import { siteConfig } from "@/config/site";
import { useIsMobile } from '@/hooks/use-mobile';

export default function HeroSection() {
  const parallaxRef = useParallax<HTMLElement>({ factor: 25 }); // Adjust factor as needed
  const isMobile = useIsMobile();

  return (
    <section 
      id="home" 
      ref={parallaxRef}
      className="relative bg-gradient-to-br from-background to-secondary py-24 sm:py-32 md:py-40 flex items-center justify-center text-center overflow-hidden"
    >
      {/* Particles Background - ensure it's behind the overlay and content */}
      <ParticlesComponent 
        containerId="hero-particles" 
        particleColor={siteConfig.heroParticleColor} 
        particleDensity={isMobile ? 40 : 80} 
      />
      
      {/* Overlay for readability over particles - Reduced opacity */}
      <div className="absolute inset-0 bg-background/20 dark:bg-background/30 z-[1]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]"> {/* Content must be above overlay */}
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
              <Link href="/#inquiry" aria-label="Request a Quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

