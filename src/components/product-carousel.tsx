'use client';

import * as React from 'react';
import Image from 'next/image';
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
  imageSrc: string;
  imageHint: string;
  price?: string; 
  category: string;
}

const productsData: Product[] = [
  {
    id: 'sb-001',
    name: 'High-Carbon Steel Balls',
    description: 'Precision-engineered for durability and high performance in demanding applications.',
    imageSrc: 'https://picsum.photos/seed/steelball1/400/300',
    imageHint: 'steel ball',
    price: '$15.99/kg',
    category: 'Steel Balls',
  },
  {
    id: 'sb-002',
    name: 'Stainless Steel Balls',
    description: 'Corrosion-resistant, ideal for food processing, medical, and chemical industries.',
    imageSrc: 'https://picsum.photos/seed/steelball2/400/300',
    imageHint: 'shiny sphere',
    price: '$25.50/kg',
    category: 'Steel Balls',
  },
  {
    id: 'pm-001',
    name: 'Ceramic Polishing Media',
    description: 'Provides excellent surface finish for various materials. Long-lasting and effective.',
    imageSrc: 'https://picsum.photos/seed/polishing1/400/300',
    imageHint: 'ceramic media',
    price: '$30.00/bag',
    category: 'Polish Media',
  },
  {
    id: 'pm-002',
    name: 'Plastic Polishing Media',
    description: 'Gentle polishing for delicate parts, preventing damage while achieving a smooth finish.',
    imageSrc: 'https://picsum.photos/seed/polishing2/400/300',
    imageHint: 'plastic cones',
    category: 'Polish Media',
  },
  {
    id: 'sb-003',
    name: 'Chrome Steel Balls',
    description: 'Known for their hardness and wear resistance, suitable for bearings and automotive parts.',
    imageSrc: 'https://picsum.photos/seed/steelball3/400/300',
    imageHint: 'chrome bearing',
    price: '$18.75/kg',
    category: 'Steel Balls',
  },
  {
    id: 'pm-003',
    name: 'Walnut Shell Media',
    description: 'Natural and biodegradable, excellent for deburring and cleaning metal surfaces.',
    imageSrc: 'https://picsum.photos/seed/polishing3/400/300',
    imageHint: 'walnut shell',
    category: 'Polish Media',
  },
];

interface ProductCarouselProps {
  products: Product[];
  previewMode?: boolean;
}

export default function ProductCarousel({ products, previewMode = false }: ProductCarouselProps) {
  const displayedProducts = previewMode ? products.slice(0, 4) : products;

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: displayedProducts.length > 3, // Loop only if enough items
      }}
      className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {displayedProducts.map((product) => (
          <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0 relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 hover:scale-105"
                    data-ai-hint={product.imageHint}
                  />
                   <Badge variant="secondary" className="absolute top-2 right-2">{product.category}</Badge>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-between items-center">
                  {product.price && <p className="text-primary font-semibold text-lg mb-2 sm:mb-0">{product.price}</p>}
                  <Button variant="outline" size="sm" asChild>
                     <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {displayedProducts.length > 1 && ( // Show controls only if multiple items
        <>
          <CarouselPrevious className="absolute left-[-12px] sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-12px] sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
}

// Export productsData for use in other pages/components
export { productsData };
