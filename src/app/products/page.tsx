
'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WhatsAppChat from '@/components/whatsapp-chat';
import { siteConfig } from '@/config/site';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Product } from '@/lib/data';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [pageTitle, setPageTitle] = useState('Our Products');
  const [pageDescription, setPageDescription] = useState('Browse our comprehensive range of high-quality industrial products.');

  useEffect(() => {
    if (categoryFilter) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      const newFilteredProducts = productsData.filter(
        (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
      );
      setFilteredProducts(newFilteredProducts);
      setPageTitle(decodedCategory);
      setPageDescription(`Explore our high-quality ${decodedCategory.toLowerCase()}.`);
    } else {
      setFilteredProducts(productsData);
      setPageTitle('Our Products');
      setPageDescription('Browse our comprehensive range of high-quality industrial products.');
    }
  }, [categoryFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="all-products" className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                {pageTitle}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {pageDescription}
              </p>
              {categoryFilter ? (
                <Button variant="outline" asChild className="mt-6">
                  <Link href="/products">View All Products</Link>
                </Button>
              ) : (
                <Badge variant="outline" className="mt-4 text-base bg-green-100 text-green-700 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-600">
                  All Products In Stock
                </Badge>
              )}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="fill w-full h-48 sm:h-56 transition-transform duration-300 hover:scale-105 object-cover"
                        sizes="100vw"
                        placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                        data-ai-hint={product.imageHint}
                      />
                    
                      {!categoryFilter && <Badge variant="secondary" className="absolute top-2 right-2">{product.category}</Badge>}
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2">{product.name}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-between items-center">
                      {product.price && <p className="text-primary font-semibold text-lg mb-2 sm:mb-0">{product.price}</p>}
                      <Button variant="default" size="sm" asChild className="transition-transform hover:scale-105">
                         <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-muted-foreground mb-4">
                  No products found in this category.
                </p>
                <Button asChild>
                  <Link href="/products">View All Products</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your products ${categoryFilter ? `in the ${categoryFilter} category` : ''}.`} />
    </div>
  );
}
