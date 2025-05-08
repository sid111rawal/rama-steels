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
import type { Metadata } from 'next';
import Script from 'next/script'; // For JSON-LD

// export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
//   const product = productsData.find(p => p.id === params.productId);

//   if (!product) {
//     return {
//       title: `Product Not Found - ${siteConfig.name}`,
//       description: `The product you are looking for could not be found on ${siteConfig.name}.`,
//     };
//   }

//   const title = `${product.name} - ${product.category} | ${siteConfig.name}`;
//   const description = `Details and specifications for ${product.name}, a high-quality ${product.category.toLowerCase()} offered by ${siteConfig.name}. ${product.description.substring(0, 100)}...`;
//   const keywords = `${product.name}, ${product.category}, ${product.altName || ''}, industrial supplies, ${siteConfig.name}`;
//   const imageUrl = typeof product.imageSrc === 'string' ? product.imageSrc : (product.imageSrc as any).src;


//   return {
//     title,
//     description,
//     keywords,
//     alternates: {
//       canonical: `/products/${product.id}`,
//     },
//     openGraph: {
//       title,
//       description,
//       url: `${siteConfig.url}/products/${product.id}`,
//       images: [
//         {
//           url: imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`,
//           width: 600, // Adjust as needed
//           height: 450, // Adjust as needed
//           alt: product.name,
//         },
//       ],
//       type: 'product', // More specific OG type
//     },
//     twitter: {
//       title,
//       description,
//       images: [{ 
//         url: imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`, 
//         alt: product.name 
//       }],
//     }
//   };
// }


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
          <p className="text-muted-foreground mb-6">The product you are looking for might have been removed or is temporarily unavailable.</p>
          <Button asChild>
            <Link href="/products">Back to All Products</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  const categoryPath = `/products?category=${encodeURIComponent(product.category)}`;
  
  const productImageUrl = typeof product.imageSrc === 'string' ? product.imageSrc : (product.imageSrc as any).src;
  const absoluteProductImageUrl = productImageUrl.startsWith('http') ? productImageUrl : `${siteConfig.url}${productImageUrl}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": absoluteProductImageUrl,
    "description": product.description,
    "sku": product.id, // Use product ID as SKU
    "mpn": product.id, // Manufacturer Part Number, can be same as SKU if not distinct
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.url}/products/${product.id}`,
      "priceCurrency": "INR", // Assuming Indian Rupees
      // "price": "0", // Set to 0 or remove if price not available, or use priceValidUntil
      "availability": "https://schema.org/InStock", // Or OutOfStock, PreOrder etc.
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name
      }
    },
    // "aggregateRating": { // Example if you have ratings
    //   "@type": "AggregateRating",
    //   "ratingValue": "4.5",
    //   "reviewCount": "12"
    // },
    // "review": [ // Example if you have reviews
    //   {
    //     "@type": "Review",
    //     "author": "Priya Sharma",
    //     "reviewBody": "Excellent quality steel balls!"
    //   }
    // ]
  };


  return (
    <div className="flex flex-col min-h-screen">
       <Script
        id={`product-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
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
                alt={`High-quality ${product.name} - ${product.category} by ${siteConfig.name}`}
                width={600}
                height={450}
                className="w-full h-auto object-contain rounded-md img-loaded"
                placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                priority // Main product image, likely LCP
              />
            </div>
            <div className="bg-background p-6 sm:p-8 rounded-lg shadow-xl fade-in-element" style={{animationDelay: '100ms'}}>
              <Badge variant="default" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105" asChild>
                  <Link href="/#inquiry">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Inquiry
                  </Link>
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
                      <li>Material: {product.altName ? product.altName.split(',')[0] : 'High-Grade Industrial Material'} (example)</li>
                      <li>Size Range: Various sizes available (Contact for details)</li>
                      <li>Hardness: Application-specific (Contact for details)</li>
                      <li>Certifications: ISO 9001 Compliant Manufacturing (example)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Common Applications</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Ideal for {product.category.toLowerCase().includes('ball') ? 'bearings, grinding, automotive parts' : product.category.toLowerCase().includes('media') ? 'surface finishing, deburring, polishing' : product.category.toLowerCase().includes('gauge') ? 'precision measurement, quality control' : 'various industrial uses'}. Contact us for specific application advice.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Why Choose {siteConfig.name}?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                     {siteConfig.name} offers over 20 years of experience in manufacturing high-quality industrial products. We are committed to precision, durability, and customer satisfaction. All products are proudly made in India.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-12 border-t fade-in-element" style={{animationDelay: '200ms'}}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Related Products in {product.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp, index) => (
                  <Link key={rp.id} href={`/products/${rp.id}`} className="block group fade-in-element" style={{ animationDelay: `${index * 100 + 300}ms` }} aria-label={`View details for related product ${rp.name}`}>
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                       <Image
                        src={rp.imageSrc}
                        alt={`Related Product: ${rp.name} - ${rp.category}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover img-loaded group-hover:opacity-90"
                        placeholder={typeof rp.imageSrc === 'string' ? undefined : "blur"}
                        loading="lazy" 
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
          <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about ${product.name} (${product.category}).`} />
        </Suspense>
      )}
    </div>
  );
}

// generateStaticParams can be used if you want to pre-render these pages at build time
// export async function generateStaticParams() {
//   return productsData.map(product => ({
//     productId: product.id,
//   }));
// }
