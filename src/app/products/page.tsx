'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData, mainCategoriesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WhatsAppChat from '@/components/whatsapp-chat';
import { siteConfig } from '@/config/site';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import type { Product, ProductCategory } from '@/lib/data'; // Ensure ProductCategory is imported

// New component to hold the logic that uses useSearchParams
function ProductsContent({ setWhatsAppMessage }: { setWhatsAppMessage: (message: string) => void }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
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
    let currentCategoryName = '';
    if (categoryFilter) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      currentCategoryName = decodedCategory;
      const newFilteredProducts = productsData.filter(
        (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
      );
      setFilteredProducts(newFilteredProducts);
      setPageTitle(decodedCategory);
      setPageDescription(`Explore our high-quality ${decodedCategory.toLowerCase()}.`);
    } else {
      setFilteredProducts([]);
      setPageTitle('Product Categories');
      setPageDescription('Explore our range of products by category.');
    }
    // Update WhatsApp message based on the category
    const baseMessage = `Hi ${siteConfig.name}. I have a question about your products`;
    setWhatsAppMessage(currentCategoryName ? `${baseMessage} in the ${currentCategoryName} category.` : `${baseMessage}.`);

    setLoadedImages({});
    setLoadedCategoryImages({});
  }, [categoryFilter, setWhatsAppMessage]);

  return (
    <>
       <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {pageTitle}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {pageDescription}
          </p>
          {categoryFilter && (
            <Button variant="outline" asChild className="mt-6">
              <Link href="/products">View All Categories</Link>
            </Button>
          )}
        </div>

      {!categoryFilter ? (
        // Display Categories
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategoriesData.map((category: ProductCategory, index: number) => (
            <Card key={category.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms`}}>
              <Link href={category.path} className="block">
                <CardHeader className="p-0 relative">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    width={400}
                    height={250}
                    className={`object-cover w-full h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedCategoryImages[category.id] ? 'img-loaded' : 'img-loading'}`}
                    placeholder="blur"
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
                  <Link href={category.path}>Explore {category.name.replace(' Balls','').replace(' Media & Abrasives', '').replace(' Metal', '')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        // Display Products for a selected category
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
        // No products found in the selected category
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground mb-4">
            No products found in this category.
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
      <WhatsAppChat message={whatsAppMessage} />
    </div>
  );
}