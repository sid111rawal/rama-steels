'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image'; 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string | StaticImageData; 
  category: string;
  altName?: string;
}

interface ProductCarouselProps {
  products: Product[];
  previewMode?: boolean;
  // loading prop is not directly used by Carousel itself but might be useful for parent components
  // to conditionally render this carousel. Removed from here as it's not directly consumed.
  // loading?: 'lazy' | 'eager'; 
}

export default function ProductCarousel({ products, previewMode = false }: ProductCarouselProps) {
  const [loadedImages, setLoadedImages] = React.useState<Record<string, boolean>>({});

  const handleImageLoad = (productId: string) => {
    setLoadedImages(prev => ({ ...prev, [productId]: true }));
  };


  return (
    <Carousel
      opts={{
        align: 'start',
        loop: products.length > (previewMode ? 3 : 1), 
      }}
      className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto fade-in-element"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product, index) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 fade-in-element"
            style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <Link href={`/products/${product.id}`} className="block" aria-label={`View details for ${product.name}`}>
                  <CardHeader className="p-0 relative">
                    <Image
                      src={product.imageSrc}
                      alt={`${product.name} - ${product.category} by ${siteConfig.name}`}
                      width={400}
                      height={300}
                      className={`object-contain w-full h-48 sm:h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[product.id] ? 'img-loaded' : 'img-loading'}`}
                      sizes="100vw" // Good default for responsive images
                      placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                      blurDataURL={typeof product.imageSrc === 'string' ? undefined : (product.imageSrc as StaticImageData).blurDataURL}
                      data-ai-hint={`${product.category.toLowerCase()} ${product.name.toLowerCase().split(' ')[0]}`}
                      onLoad={() => handleImageLoad(product.id)}
                      loading="lazy" // Lazy load images in carousel
                    />
                    <Badge variant="secondary" className="absolute top-2 right-2">{product.category}</Badge>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                  </CardContent>
                </Link>
                <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-end items-center">
                  <Button variant="outline" size="sm" asChild>
                     <Link href={`/products/${product.id}`}>View Details: {product.name}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {products.length > (previewMode ? 3 : (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3 )) && ( 
        <>
          <CarouselPrevious className="absolute left-[-12px] sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-12px] sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
}
