'use client'; // Required for useState

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import WhatsAppChat from '@/components/whatsapp-chat';
import TestimonialsSection from '@/components/sections/testimonials-section';
import InquirySection from '@/components/sections/inquiry-section';
import { siteConfig } from '@/config/site';
import { mainCategoriesData } from '@/lib/data'; // Import main categories
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'; // Import useState

export default function Home() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (categoryId: string) => {
    setLoadedImages(prev => ({ ...prev, [categoryId]: true }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow fade-in-element"> {/* Added fade-in-element to main */}
        <HeroSection />
        <section id="featured-categories" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Featured Product Categories
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Explore our main categories of high-quality industrial products.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainCategoriesData.map((category, index) => (
                <Card key={category.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms`}}>
                  <Link href={category.path} className="block"> {/* category.path already links to /products?category=... */}
                    <CardHeader className="p-0 relative">
                      <Image
                        src={category.imageSrc}
                        alt={category.name}
                        width={400}
                        height={250}
                        className={`object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105 ${loadedImages[category.id] ? 'img-loaded' : 'img-loading'}`}
                        placeholder="blur"
                        data-ai-hint={category.imageHint}
                        onLoad={() => handleImageLoad(category.id)}
                      />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors fade-in-element">{category.name}</CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3 mb-4 fade-in-element">{category.description}</CardDescription>
                    </CardContent>
                  </Link>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                       {/* category.path already links to /products?category=... */}
                      <Link href={category.path}>Explore {category.name.replace(' Balls','').replace(' Media & Abrasives', '').replace(' Metal','')}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <TestimonialsSection />
        <InquirySection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

