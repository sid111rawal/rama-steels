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
import React, { useEffect, useState, Suspense } from 'react'; // Added React for Suspense
import type { Product, ProductCategory } from '@/lib/data';
import dynamic from 'next/dynamic';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

function ProductsContent({ setWhatsAppMessage }: { setWhatsAppMessage: (message: string) => void }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [loadedCategoryImages, setLoadedCategoryImages] = useState<Record<string, boolean>>({});
  const [pageTitle, setPageTitle] = useState('Our Products');
  const [pageDescription, setPageDescription] = useState('Browse our comprehensive range of high-quality industrial products.');

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleCategoryImageLoad = (id: string) => {
    setLoadedCategoryImages(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    let productsToDisplay: Product[] = [...productsData];
    let title = 'Our Products';
    let description = 'Browse our comprehensive range of high-quality industrial products.';
    let isCategoryListView = false;
    let currentCategoryNameForMessage = '';
    let currentSearchTermForMessage = '';

    if (searchQuery) {
      const decodedSearch = decodeURIComponent(searchQuery).toLowerCase();
      currentSearchTermForMessage = decodeURIComponent(searchQuery);
      productsToDisplay = productsToDisplay.filter(
        (product) =>
          product.name.toLowerCase().includes(decodedSearch) ||
          (product.altName && product.altName.toLowerCase().includes(decodedSearch))
      );
      title = `Search Results for "${currentSearchTermForMessage}"`;
      description = `Found ${productsToDisplay.length} product(s) matching your search.`;
    }

    if (categoryFilter) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      currentCategoryNameForMessage = decodedCategory;
      productsToDisplay = productsToDisplay.filter(
        (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
      );
      
      if (searchQuery) {
        title = `Search Results for "${currentSearchTermForMessage}" in ${decodedCategory}`;
        description = `Found ${productsToDisplay.length} product(s) matching your search in ${decodedCategory}.`;
      } else {
        title = decodedCategory;
        description = `Explore our high-quality ${decodedCategory.toLowerCase()}.`;
      }
    }
    
    if (!searchQuery && !categoryFilter) {
      isCategoryListView = true;
      title = 'Product Categories';
      description = 'Explore our range of products by category.';
    }

    setFilteredProducts(isCategoryListView ? [] : productsToDisplay);
    setPageTitle(title);
    setPageDescription(description);

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
        <p className="mt-4 text-lg text-muted-foreground">
          {pageDescription}
        </p>
        {(categoryFilter || searchQuery) && (
          <Button variant="outline" asChild className="mt-6">
            <Link href="/products">View All Categories</Link>
          </Button>
        )}
      </div>

      {showCategoriesView ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategoriesData.map((category: ProductCategory, index: number) => (
            <Card key={category.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
              <Link href={category.path} className="block">
                <CardHeader className="p-0 relative">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    width={400}
                    height={250}
                    className={`object-cover w-full h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedCategoryImages[category.id] ? 'img-loaded' : 'img-loading'}`}
                    placeholder="blur" // StaticImageData benefits from blur
                    data-ai-hint={category.imageHint}
                    onLoad={() => handleCategoryImageLoad(category.id)}
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
              <Link href={`/products/${product.id}`} className="block group">
                <CardHeader className="p-0 relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={400}
                    height={300}
                    className={`object-cover w-full h-48 sm:h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[product.id] ? 'img-loaded' : 'img-loading'}`}
                    sizes="100vw"
                    placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                    data-ai-hint={product.imageHint}
                    onLoad={() => handleImageLoad(product.id)}
                    // No priority for listing images
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-lg font-semibold mb-2 h-14 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3 h-[3.75rem]">{product.description}</p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row justify-end items-center">
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
            No products found {searchQuery ? `for "${searchQuery}"` : ''} {categoryFilter ? `in ${categoryFilter}` : ''}.
          </p>
          <Button asChild>
            <Link href="/products">View All Categories</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  const [whatsAppMessage, setWhatsAppMessage] = useState(`Hi ${siteConfig.name}. I have a question about your products.`);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="products-or-categories" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="text-center py-10 text-lg">Loading products...</div>}>
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
