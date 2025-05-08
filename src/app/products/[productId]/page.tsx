'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site';
import dynamic from 'next/dynamic';
import React, { Suspense, use } from 'react'; 

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

interface ProductPageParams {
  productId: string;
}

export default function ProductDetailPage({ params }: { params: ProductPageParams }) {
  const resolvedParams = use(params as unknown as Promise<ProductPageParams>);
  const product = productsData.find(p => p.id === resolvedParams.productId);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold my-8">Product Not Found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  const categoryPath = `/products?category=${encodeURIComponent(product.category)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow bg-secondary/50 py-8 sm:py-12 fade-in-element">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-8 group">
            <Link href={categoryPath}>
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to {product.category}
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background p-4 sm:p-6 rounded-lg shadow-xl fade-in-element">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={600}
                height={450}
                className="w-full h-auto object-contain rounded-md img-loaded"
                placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                data-ai-hint={product.imageHint}
                priority // Main product image, likely LCP
              />
            </div>
            <div className="bg-background p-6 sm:p-8 rounded-lg shadow-xl fade-in-element" style={{animationDelay: '100ms'}}>
              <Badge variant="default" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Inquiry
                </Button>
                 <Button variant="outline" size="lg" className="w-full sm:w-auto ml-0 sm:ml-4" asChild>
                  <Link href="/#inquiry">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Ask a Question
                  </Link>
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Product Specifications</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Material: High-Grade Alloy Steel (example)</li>
                      <li>Size Range: 5mm - 50mm (example)</li>
                      <li>Hardness: HRC 60-65 (example)</li>
                      <li>Certifications: ISO 9001, RoHS (example)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Common Applications</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ideal for bearings, automotive components, grinding media, valves, and various industrial machinery. (Example content)
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-12 border-t fade-in-element" style={{animationDelay: '200ms'}}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp, index) => (
                  <Link key={rp.id} href={`/products/${rp.id}`} className="block group fade-in-element" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                       <Image
                        src={rp.imageSrc}
                        alt={rp.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover img-loaded group-hover:opacity-90"
                        placeholder={typeof rp.imageSrc === 'string' ? undefined : "blur"}
                        data-ai-hint={rp.imageHint}
                        loading="lazy" // Related products are below the fold
                       />
                       <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-2">{rp.description}</p>
                       </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
      {product && (
        <Suspense fallback={null}>
          <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about ${product.name}.`} />
        </Suspense>
      )}
    </div>
  );
}
