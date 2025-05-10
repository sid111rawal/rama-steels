'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParticlesComponent from '@/components/particles-component';
import useParallax from '@/hooks/use-parallax';
import { siteConfig } from "@/config/site";
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const parallaxRef = useParallax<HTMLElement>({ factor: 25 });
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState(siteConfig.heroParticleColor.light);

  useEffect(() => {
    setParticleColor(theme === 'dark' ? siteConfig.heroParticleColor.dark : siteConfig.heroParticleColor.light);
  }, [theme]);

  return (
    <section
      id="home"
      ref={parallaxRef}
      className="relative bg-gradient-to-br from-background to-secondary py-24 sm:py-32 md:py-40 flex items-center justify-center text-center overflow-hidden animated-element"
      aria-labelledby="hero-heading"
    >
      <ParticlesComponent
        containerId="hero-particles"
        particleColor={particleColor} 
        particleDensity={isMobile ? 40 : 120} 
      />

      <div className="absolute inset-0 bg-background/10 dark:bg-background/15 z-[1] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]"> 
        <div className="max-w-3xl mx-auto">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Premium Steel Balls &amp; Polish Media by {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10">
            {siteConfig.description} Your trusted partner for quality and reliability in industrial steel products, manufactured in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="/products" aria-label={`Explore Industrial Products from ${siteConfig.name}`}>Explore Our Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="/#inquiry" aria-label={`Request a Quote for Steel Balls or Polish Media from ${siteConfig.name}`}>Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
