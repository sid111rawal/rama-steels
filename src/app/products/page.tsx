'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData, mainCategoriesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';
import type { Product, ProductCategory } from '@/lib/data';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Note: This is a client component, so we'll handle metadata dynamically

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

function ProductsContent({ setWhatsAppMessage }: { setWhatsAppMessage: (message: string) => void }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams?.get('category');
  const searchQuery = searchParams?.get('search');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [loadedCategoryImages, setLoadedCategoryImages] = useState<Record<string, boolean>>({});
  const [pageTitle, setPageTitle] = useState<string>(`All Industrial Products - ${siteConfig.name}`);
  const [pageDescription, setPageDescription] = useState<string>(`Browse our comprehensive range of high-quality industrial steel balls, polish media, and gauges manufactured by ${siteConfig.name} in India.`);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleCategoryImageLoad = (id: string) => {
    setLoadedCategoryImages(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    let productsToDisplay: Product[] = [...productsData];
    let title = `All Industrial Products - ${siteConfig.name}`;
    let description = `Browse all industrial steel products from ${siteConfig.name}, including steel balls, polish media, and gauges. Your trusted manufacturer in India.`;
    let isCategoryListView = false;
    let currentCategoryNameForMessage = '';
    let currentSearchTermForMessage = '';

    if (searchQuery) {
      const decodedSearch = decodeURIComponent(searchQuery).toLowerCase();
      currentSearchTermForMessage = decodeURIComponent(searchQuery);
      productsToDisplay = productsData.filter( 
        (product) =>
          product.name.toLowerCase().includes(decodedSearch) ||
          (product.altName && product.altName.toLowerCase().includes(decodedSearch)) ||
          product.category.toLowerCase().includes(decodedSearch)
      );
      title = `Search Results for "${currentSearchTermForMessage}" | ${siteConfig.name}`;
      description = `Found ${productsToDisplay.length} product(s) matching your search for "${currentSearchTermForMessage}". Explore ${siteConfig.name}'s range of steel balls, polish media, and gauges.`;
    }

    if (categoryFilter) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      currentCategoryNameForMessage = decodedCategory;
      productsToDisplay = (searchQuery ? productsToDisplay : productsData).filter(
        (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
      );
      
      if (searchQuery) {
        title = `Search Results for "${currentSearchTermForMessage}" in ${decodedCategory} | ${siteConfig.name}`;
        description = `Found ${productsToDisplay.length} ${decodedCategory.toLowerCase()} matching your search for "${currentSearchTermForMessage}" at ${siteConfig.name}.`;
      } else {
        title = `${decodedCategory} | ${siteConfig.name} - Manufacturer in India`;
        description = `Explore our high-quality ${decodedCategory.toLowerCase()} at ${siteConfig.name}. Find the best ${decodedCategory.toLowerCase()} for your industrial needs, manufactured in India.`;
      }
    }
    
    if (!searchQuery && !categoryFilter) {
      isCategoryListView = true;
      title = `Product Categories | ${siteConfig.name} - Steel Balls, Polish Media, Gauges`;
      description = `Explore industrial products by ${siteConfig.name} by category: Ferrous Balls, Non-Ferrous Balls, Non-Metallic Balls, Precision Gauges, and Polish Media & Abrasives.`;
    }

    setFilteredProducts(isCategoryListView ? [] : productsToDisplay);
    setPageTitle(title);
    setPageDescription(description);
    document.title = title; 

    const baseMessage = `Hi ${siteConfig.name}. I have a question about your products`;
    let contextMessage = ".";
    if (currentSearchTermForMessage && currentCategoryNameForMessage) {
      contextMessage = ` matching "${currentSearchTermForMessage}" in the ${currentCategoryNameForMessage} category.`;
    } else if (currentSearchTermForMessage) {
      contextMessage = ` matching "${currentSearchTermForMessage}".`;
    } else if (currentCategoryNameForMessage) {
      contextMessage = ` in the ${currentCategoryNameForMessage} category.`;
    }
    setWhatsAppMessage(`${baseMessage}${contextMessage}`);

    setLoadedImages({});
    setLoadedCategoryImages({});
  }, [categoryFilter, searchQuery, setWhatsAppMessage]);

  const showCategoriesView = !searchQuery && !categoryFilter;

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          {pageTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {pageDescription}
        </p>
        {(categoryFilter || searchQuery) && (
          <Button variant="outline" asChild className="mt-6">
            <Link href="/products">View All Product Categories</Link>
          </Button>
        )}
      </div>

      {showCategoriesView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategoriesData.map((category: ProductCategory, index: number) => (
            <Card key={category.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
              <Link href={category.path} className="block" aria-label={`Explore ${category.name} products from ${siteConfig.name}`}>
                <CardHeader className="p-0 relative">
                  <Image
                    src={category.imageSrc}
                    alt={`${category.name} - Complete range of ${category.name.toLowerCase()} manufactured by ${siteConfig.name} in India including steel balls, polish media and industrial components`}
                    width={400}
                    height={250}
                    className={`object-contain w-full h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedCategoryImages[category.id] ? 'img-loaded' : 'img-loading'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={category.imageSrc.blurDataURL}
                    onLoad={() => handleCategoryImageLoad(category.id)}
                    title={`${category.name} Products - ${siteConfig.name} Manufacturing`}
                    data-ai-hint={`${category.name.toLowerCase().replace(/\s+/g, ' ').split(' ')[0]} products`}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{category.name}</CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3 mb-4">{category.description}</CardDescription>
                </CardContent>
              </Link>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href={category.path}>Explore {category.name.replace(' Balls', '').replace(' Media & Abrasives', '').replace(' Metal', '')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
              <Link href={`/products/${product.id}`} className="block group" aria-label={`View details for ${product.name} - ${product.category}`}>
                <CardHeader className="p-0 relative">
                  <Image
                    src={product.imageSrc}
                    alt={`${product.name} steel balls - High quality ${product.category.toLowerCase()} manufactured by ${siteConfig.name} in India for industrial applications`}
                    width={400}
                    height={300}
                    className={`object-contain w-full h-48 sm:h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[product.id] ? 'img-loaded' : 'img-loading'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                    blurDataURL={typeof product.imageSrc === 'string' ? undefined : product.imageSrc.blurDataURL}
                    onLoad={() => handleImageLoad(product.id)}
                    title={`${product.name} - Premium ${product.category} from ${siteConfig.name}`}
                    data-ai-hint={`${product.category.toLowerCase()} ${product.name.toLowerCase().split(' ')[0]}`}
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                   {product.altName && <p className="text-xs text-muted-foreground mb-1 line-clamp-1">Also known as: {product.altName}</p>}
                  <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-end items-center">
                <Button variant="default" size="sm" asChild className="transition-transform hover:scale-105">
                  <Link href={`/products/${product.id}`}>View Details: {product.name}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground mb-4">
            No products found {searchQuery ? `for "${searchQuery}"` : ''} {categoryFilter ? `in ${categoryFilter}` : ''}. Try a different search or browse our categories.
          </p>
          <Button asChild>
            <Link href="/products">View All Product Categories</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  const [whatsAppMessage, setWhatsAppMessage] = useState(`Hi ${siteConfig.name}. I have a question about your products.`);
  
  useEffect(() => {
    // Fallback document title update, as ProductsContent will handle more specific titles
    document.title = `Industrial Products | ${siteConfig.name}`;
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
        <Header />
      </Suspense>
      <main role="main" className="flex-grow">
        <section id="products-or-categories" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="text-center py-10 text-lg font-semibold">Loading products...</div>}>
              <ProductsContent setWhatsAppMessage={setWhatsAppMessage} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat message={whatsAppMessage} />
      </Suspense>
    </div>
  );
}
