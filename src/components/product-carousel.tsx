
'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image'; // Import StaticImageData
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

interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string | StaticImageData; // Updated to accept StaticImageData
  imageHint: string;
  category: string;
}

interface ProductCarouselProps {
  products: Product[];
  previewMode?: boolean;
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
        loop: products.length > 3, // Loop only if enough items
      }}
      className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto fade-in-element"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0 relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={400}
                    height={300}
                    className={`fill w-full h-48 sm:h-56 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[product.id] ? 'img-loaded' : 'img-loading'}`}
                    sizes="100vw"
                    placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                    data-ai-hint={product.imageHint}
                    onLoad={() => handleImageLoad(product.id)}
                  />
                   <Badge variant="secondary" className="absolute top-2 right-2">{product.category}</Badge>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-end items-center">
                  <Button variant="outline" size="sm" asChild>
                     <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {products.length > (previewMode ? 3 : 1) && ( // Adjust condition based on previewMode
        <>
          <CarouselPrevious className="absolute left-[-12px] sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-12px] sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
}
