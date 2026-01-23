'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData, mainCategoriesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { siteConfig } from '@/config/site';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';
import type { Product, ProductCategory } from '@/lib/data';
import dynamic from 'next/dynamic';
import { Filter } from 'lucide-react';

// Note: This is a client component, so we'll handle metadata dynamically

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

function ProductsContent({ setWhatsAppMessage }: { setWhatsAppMessage: (message: string) => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryFilter = searchParams?.get('category');
  const productFilter = searchParams?.get('product');
  const searchQuery = searchParams?.get('search');
  
  // Get unique main product categories (5 main categories)
  const mainProductCategories = Array.from(
    new Set(productsData.map(product => product.category))
  ).sort();
  
  // Get products in the selected category (for product-level filtering)
  const productsInCategory = categoryFilter 
    ? productsData.filter(p => p.category === decodeURIComponent(categoryFilter))
    : [];
  
  // Initialize selected main categories from URL (for main page)
  const [selectedMainCategories, setSelectedMainCategories] = useState<Set<string>>(() => {
    const set = new Set<string>();
    if (!categoryFilter) {
      set.add('All');
    }
    return set;
  });
  
  // Initialize selected products from URL (for product-level filtering within a category)
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(() => {
    const set = new Set<string>();
    if (productFilter) {
      const decoded = decodeURIComponent(productFilter);
      decoded.split(',').forEach(prod => {
        if (prod.trim()) set.add(prod.trim());
      });
    } else if (categoryFilter) {
      // If category is selected but no product filter, select all products in that category
      productsInCategory.forEach(p => set.add(p.id));
    }
    return set;
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [loadedCategoryImages, setLoadedCategoryImages] = useState<Record<string, boolean>>({});
  const [pageTitle, setPageTitle] = useState<string>(`All Industrial Products - ${siteConfig.name}`);
  const [pageDescription, setPageDescription] = useState<string>(`Browse our comprehensive range of high-quality industrial steel balls, polish media, and gauges manufactured by ${siteConfig.name} in India.`);
  
  // Track if we're updating from user interaction vs URL change
  const [isUserInteraction, setIsUserInteraction] = useState(false);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleCategoryImageLoad = (id: string) => {
    setLoadedCategoryImages(prev => ({ ...prev, [id]: true }));
  };

  // Handle main category toggle (for main products page)
  const handleMainCategoryToggle = (category: string) => {
    setIsUserInteraction(true);
    if (category === 'All') {
      // Navigate to main products page
      router.push('/products');
    } else {
      // Navigate to that category page
      router.push(`/products?category=${encodeURIComponent(category)}`);
    }
  };
  
  // Handle product toggle (for product-level filtering within a category)
  const handleProductToggle = (productId: string) => {
    setIsUserInteraction(true);
    setSelectedProducts(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      
      return newSet;
    });
  };
  
  // Update URL when selectedProducts changes (only from user interaction)
  useEffect(() => {
    if (!isUserInteraction || !categoryFilter) return;
    
    const categoryProducts = productsData.filter(p => p.category === decodeURIComponent(categoryFilter));
    const params = new URLSearchParams(searchParams?.toString() || '');
    
    if (selectedProducts.size === 0 || selectedProducts.size === categoryProducts.length) {
      params.delete('product');
    } else {
      params.set('product', Array.from(selectedProducts).join(','));
    }
    
    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    
    if (newUrl !== currentUrl) {
      router.push(newUrl);
    }
    
    setIsUserInteraction(false);
  }, [selectedProducts, isUserInteraction, categoryFilter, pathname, router, searchParams]);

  // Sync selectedProducts with URL when category or product filter changes
  useEffect(() => {
    if (isUserInteraction) return;
    
    if (categoryFilter && productsInCategory.length > 0) {
      const urlProduct = searchParams?.get('product');
      if (urlProduct) {
        const decoded = decodeURIComponent(urlProduct);
        const products = decoded.split(',').map(p => p.trim()).filter(p => p);
        setSelectedProducts(new Set(products));
      } else {
        // If no product filter, select all products in category
        setSelectedProducts(new Set(productsInCategory.map(p => p.id)));
      }
    } else {
      setSelectedProducts(new Set());
    }
  }, [categoryFilter, productFilter, isUserInteraction]);

  useEffect(() => {
    let productsToDisplay: Product[] = [...productsData];
    let title = `All Industrial Products - ${siteConfig.name}`;
    let description = `Browse all industrial steel products from ${siteConfig.name}, including steel balls, polish media, and gauges. Your trusted manufacturer in India.`;
    let isCategoryListView = false;
    let currentCategoryNameForMessage = '';
    let currentSearchTermForMessage = '';

    // Filter by category
    if (categoryFilter) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      productsToDisplay = productsData.filter(
        (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
      );
      
      // Further filter by selected products if product filter exists
      if (productFilter && selectedProducts.size > 0 && selectedProducts.size < productsInCategory.length) {
        productsToDisplay = productsToDisplay.filter(product => 
          selectedProducts.has(product.id)
        );
      }
    }

    if (searchQuery) {
      const decodedSearch = decodeURIComponent(searchQuery).toLowerCase();
      currentSearchTermForMessage = decodeURIComponent(searchQuery);
      productsToDisplay = productsToDisplay.filter( 
        (product) =>
          product.name.toLowerCase().includes(decodedSearch) ||
          (product.altName && product.altName.toLowerCase().includes(decodedSearch)) ||
          product.category.toLowerCase().includes(decodedSearch)
      );
      title = `Search Results for "${currentSearchTermForMessage}" | ${siteConfig.name}`;
      description = `Found ${productsToDisplay.length} product(s) matching your search for "${currentSearchTermForMessage}". Explore ${siteConfig.name}'s range of steel balls, polish media, and gauges.`;
    }

    if (categoryFilter && !searchQuery) {
      const decodedCategory = decodeURIComponent(categoryFilter);
      currentCategoryNameForMessage = decodedCategory;
      const categories = decodedCategory.split(',').map(c => c.trim());
      
      if (categories.length === 1) {
        title = `${categories[0]} | ${siteConfig.name} - Manufacturer in India`;
        description = `Explore our high-quality ${categories[0].toLowerCase()} at ${siteConfig.name}. Find the best ${categories[0].toLowerCase()} for your industrial needs, manufactured in India.`;
      } else {
        title = `Products - ${categories.join(', ')} | ${siteConfig.name}`;
        description = `Browse ${categories.join(', ').toLowerCase()} from ${siteConfig.name}. High-quality industrial products manufactured in India.`;
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
  }, [categoryFilter, searchQuery, selectedProducts, setWhatsAppMessage]);

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

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Category/Product Filter */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-24 bg-card border rounded-lg p-4 shadow-sm">
            {!categoryFilter ? (
              // Main categories filter (on /products)
              <>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Filter by Category</h2>
                </div>
                <nav className="space-y-2">
                  <div
                    onClick={() => handleMainCategoryToggle('All')}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                      !categoryFilter
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 w-full">
                      <Checkbox
                        checked={!categoryFilter}
                        onCheckedChange={() => handleMainCategoryToggle('All')}
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-none"
                      />
                      <span className="flex-1 text-left text-sm font-medium">All Products</span>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {productsData.length}
                    </Badge>
                  </div>
                  {mainProductCategories.map(category => {
                    const count = productsData.filter(product => product.category === category).length;
                    const isSelected = categoryFilter === category;
                    return (
                      <div
                        key={category}
                        onClick={() => handleMainCategoryToggle(category)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 w-full">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleMainCategoryToggle(category)}
                            onClick={(e) => e.stopPropagation()}
                            className="pointer-events-none"
                          />
                          <span className="flex-1 text-left truncate text-sm font-medium">{category}</span>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </nav>
              </>
            ) : (
              // Product filters (when a category is selected)
              <>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Filter Products</h2>
                </div>
                <div className="mb-3 pb-2 border-b">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push('/products')}
                    className="w-full justify-start"
                  >
                    ← Back to Categories
                  </Button>
                </div>
                <nav className="space-y-2">
                  <div
                    onClick={() => {
                      setIsUserInteraction(true);
                      // Select all products in category
                      setSelectedProducts(new Set(productsInCategory.map(p => p.id)));
                    }}
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                      !productFilter || selectedProducts.size === productsInCategory.length
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 w-full">
                      <Checkbox
                        checked={!productFilter || selectedProducts.size === productsInCategory.length}
                        onCheckedChange={() => {
                          setIsUserInteraction(true);
                          setSelectedProducts(new Set(productsInCategory.map(p => p.id)));
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-none"
                      />
                      <span className="flex-1 text-left text-sm font-medium">All {decodeURIComponent(categoryFilter)}</span>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {productsInCategory.length}
                    </Badge>
                  </div>
                  {productsInCategory.map(product => {
                    const isSelected = selectedProducts.has(product.id);
                    return (
                      <div
                        key={product.id}
                        onClick={() => handleProductToggle(product.id)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 w-full">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleProductToggle(product.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="pointer-events-none"
                          />
                          <span className="flex-1 text-left truncate text-sm font-medium">{product.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
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
        </div>
      </div>
    </>
  );
}

export default function ProductsPage() {
  const [whatsAppMessage, setWhatsAppMessage] = useState(`Hi ${siteConfig.name}. I have a question about your products.`);
  


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
