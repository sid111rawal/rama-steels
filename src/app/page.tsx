'use client'; 

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import { siteConfig } from '@/config/site';
import { mainCategoriesData } from '@/lib/data'; 
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React, { useState, Suspense, useEffect } from 'react'; 
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section'), {
  loading: () => <div className="text-center py-10">Loading testimonials...</div>,
  ssr: false,
});
const InquirySection = dynamic(() => import('@/components/sections/inquiry-section'), {
  loading: () => <div className="text-center py-10">Loading inquiry form...</div>,
  ssr: false,
});
const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });


export default function Home() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    document.title = `${siteConfig.name} - ${siteConfig.tagline}`;

    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); 
      const timer = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 500); // Delay to allow page layout to settle
      return () => clearTimeout(timer);
    }
  }, []);


  const handleImageLoad = (categoryId: string) => {
    setLoadedImages(prev => ({ ...prev, [categoryId]: true }));
  };

  if (!pageLoaded) {
    return <div className="flex justify-center items-center min-h-screen text-lg font-semibold">Loading {siteConfig.name}...</div>; 
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
        <Header />
      </Suspense>
      <main role="main" className="flex-grow fade-in-element">
        {/* HeroSection already has id="home" internally */}
        <HeroSection /> 
        {/* "featured-categories" id is used by header scrollspy */}
        <section id="featured-categories" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Industrial Steel Products Categories - {siteConfig.name} Manufacturing Excellence
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-prose mx-auto">
                Discover our comprehensive range of high-quality steel balls, innovative polish media, and precision gauges manufactured in India by {siteConfig.name}. From ferrous to non-ferrous metals, we deliver industrial solutions with over 20 years of expertise in Agra.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainCategoriesData.map((category, index) => (
                <Card key={category.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms`}}>
                  <Link href={category.path} className="block" aria-label={`Explore ${category.name} from ${siteConfig.name}`}>
                    <CardHeader className="p-0 relative">
                      <Image
                        src={category.imageSrc}
                        alt={`${category.name} steel products - Premium ${category.name.toLowerCase()} manufactured by ${siteConfig.name} in India for industrial applications including bearings, automotive, and precision machinery`}
                        width={400}
                        height={250}
                        className={`object-contain w-full h-56 transition-transform duration-300 group-hover:scale-105 ${loadedImages[category.id] ? 'img-loaded' : 'img-loading'}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur" 
                        blurDataURL={category.imageSrc.blurDataURL}
                        onLoad={() => handleImageLoad(category.id)}
                        title={`${category.name} - ${siteConfig.name} Manufacturing`}
                        data-ai-hint={`${category.name.toLowerCase().replace(/\s+/g, ' ').split(' ')[0]} industrial`}
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors fade-in-element">{category.name}</CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3 mb-4 fade-in-element">{category.description}</CardDescription>
                    </CardContent>
                  </Link>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <Link href={category.path}>Explore {category.name.replace(' Balls','').replace(' Media & Abrasives', '').replace(' Metal','')} Category</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Suspense fallback={<div className="text-center py-10">Loading customer experiences and inquiry options...</div>}>
          {/* TestimonialsSection already has id="testimonials" internally */}
          <TestimonialsSection />
          {/* InquirySection already has id="inquiry" internally */}
          <InquirySection />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat />
      </Suspense>
    </div>
  );
}
