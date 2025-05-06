
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
  // Initialize with light theme color, useEffect will update it for dark theme
  const [particleColor, setParticleColor] = useState(siteConfig.heroParticleColor.light);

  useEffect(() => {
    // Update particle color based on theme
    setParticleColor(theme === 'dark' ? siteConfig.heroParticleColor.dark : siteConfig.heroParticleColor.light);
  }, [theme]);

  return (
    <section
      id="home"
      ref={parallaxRef}
      className="relative bg-gradient-to-br from-background to-secondary py-24 sm:py-32 md:py-40 flex items-center justify-center text-center overflow-hidden animated-element"
    >
      <ParticlesComponent
        containerId="hero-particles"
        particleColor={particleColor} // Use the state variable here
        particleDensity={isMobile ? 45 : 75} // Reduced density from 3x request
      />

      {/* Overlay for readability over particles - reduced opacity further */}
      <div className="absolute inset-0 bg-background/10 dark:bg-background/15 z-[1] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]"> {/* Content must be above overlay */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Premium Steel Balls &amp; Polish Media
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10">
            Excellence in industrial steel products. Your trusted partner for quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="/products" aria-label="Explore Products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="/#inquiry" aria-label="Request a Quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
