import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react'; // Changed ShoppingCart, HelpCircle to MessageSquare
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from '@/config/site';
import React, { Suspense } from 'react'; 
import type { Metadata } from 'next';
import Script from 'next/script'; 
import { notFound } from 'next/navigation';
import ClientWhatsAppLoader from '@/components/client-whatsapp-loader';

interface ProductPageParams {
  productId: string;
}

async function getProduct(productId: string) {
  return productsData.find(p => p.id === productId);
}

export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const product = await getProduct(params.productId);

  if (!product) {
    return {
      title: `Product Not Found - ${siteConfig.name}`,
      description: `The product you are looking for could not be found on ${siteConfig.name}. Browse our extensive catalog of steel balls, polish media, and gauges.`,
    };
  }

  const title = `Buy ${product.name} - ${product.category} | ${siteConfig.name}`;
  const description = `Get details and specifications for ${product.name}, a high-quality ${product.category.toLowerCase()} by ${siteConfig.name}. ${product.description.substring(0, 120)}... Ideal for various industrial applications in India.`;
  
  const keywordsList = [
    product.name,
    product.category,
    ...(product.altName ? product.altName.split(',').map(s => s.trim()) : []),
    `buy ${product.name}`,
    `${product.category} India`,
    `${siteConfig.name} ${product.name}`,
    'industrial supplies',
    'steel products Agra',
    ...siteConfig.keywords.slice(0,5) // Add some general site keywords
  ];
  
  const imageUrl = typeof product.imageSrc === 'string' ? product.imageSrc : (product.imageSrc as any).src;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;


  return {
    title,
    description,
    keywords: keywordsList.filter((value, index, self) => self.indexOf(value) === index && value.length > 0), // Unique keywords
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/products/${product.id}`,
      images: [
        {
          url: absoluteImageUrl,
          width: 600, 
          height: 450, 
          alt: `Image of ${product.name} - ${product.category} by ${siteConfig.name}`,
        },
      ],
      type: 'website', 
      siteName: siteConfig.name,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ 
        url: absoluteImageUrl, 
        alt: `Twitter image for ${product.name} from ${siteConfig.name}` 
      }],
    }
  };
}


export default async function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
  const categoryPath = `/products?category=${encodeURIComponent(product.category)}`;
  
  const productImageUrlString = typeof product.imageSrc === 'string' ? product.imageSrc : (product.imageSrc as any).src;
  const absoluteProductImageUrl = productImageUrlString.startsWith('http') ? productImageUrlString : `${siteConfig.url}${productImageUrlString.startsWith('/') ? '' : '/'}${productImageUrlString}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": absoluteProductImageUrl,
    "description": product.description,
    "sku": product.id, 
    "mpn": product.id, 
    "category": product.category,
    "material": product.altName?.split(',')[0]?.trim() || "High-Grade Industrial Material", // Example, improve if specific material data is available
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    },
    "manufacturer": { 
      "@type": "Organization",
      "name": siteConfig.name
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteConfig.url}/products/${product.id}`,
      "priceCurrency": "INR", 
      "availability": "https://schema.org/InStock", 
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name
      }
    },
  };

  const whatsappPhoneNumber = siteConfig.contactInfo.phone.replace(/\D/g, '');
  const whatsappMessage = encodeURIComponent(`Hi ${siteConfig.name}. I have a question about the product: ${product.name}.`);
  const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`;

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
          <nav aria-label="Breadcrumb" className="mb-8">
            <Button variant="outline" asChild className="group">
              <Link href={categoryPath}>
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to {product.category}
              </Link>
            </Button>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background p-4 sm:p-6 rounded-lg shadow-xl fade-in-element">
              <Image
                src={product.imageSrc}
                alt={`High-quality ${product.name} - ${product.category} by ${siteConfig.name}`}
                width={600}
                height={450}
                className="w-full h-auto object-contain rounded-md img-loaded"
                placeholder={typeof product.imageSrc === 'string' ? undefined : "blur"}
                blurDataURL={typeof product.imageSrc === 'string' ? undefined: (product.imageSrc as any).blurDataURL}
                priority 
                data-ai-hint={`${product.category.toLowerCase()} ${product.name.toLowerCase().split(' ')[0]}`}
              />
            </div>
            <div className="bg-background p-6 sm:p-8 rounded-lg shadow-xl fade-in-element" style={{animationDelay: '100ms'}}>
              <Badge variant="default" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              {product.altName && <p className="text-sm text-muted-foreground mb-3">Also known as: {product.altName}</p>}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105" asChild>
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Inquire on WhatsApp
                  </Link>
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Product Specifications</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Material: {product.altName?.split(',')[0]?.trim() || 'High-Grade Industrial Material'}</li>
                      <li>Size Range: Various sizes available (Contact for details)</li>
                      <li>Hardness: Application-specific (Contact for details)</li>
                      <li>Standards: Complies with relevant ISO/ASTM standards (Contact for specifics)</li>
                      <li>Origin: Made in India by ${siteConfig.name}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Common Applications</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our {product.name} are ideal for {product.category.toLowerCase().includes('ball') ? 'bearings, grinding, automotive parts, valves' : product.category.toLowerCase().includes('media') ? 'surface finishing, deburring, polishing, cleaning' : product.category.toLowerCase().includes('gauge') ? 'precision measurement, quality control, inspection tools' : 'various industrial uses'}. Contact us for specific application advice for your industry.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Why Choose {siteConfig.name}?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                     {siteConfig.name} brings over 20 years of manufacturing expertise to every {product.name}. We are committed to precision engineering, product durability, and complete customer satisfaction. All our {product.category.toLowerCase()} are proudly made in India, ensuring quality and reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-12 border-t fade-in-element" style={{animationDelay: '200ms'}}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Related Products in {product.category} from {siteConfig.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp, index) => (
                  <Link key={rp.id} href={`/products/${rp.id}`} className="block group fade-in-element" style={{ animationDelay: `${index * 100 + 300}ms` }} aria-label={`View details for related product: ${rp.name}`}>
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                       <Image
                        src={rp.imageSrc}
                        alt={`Related Product: ${rp.name} - ${rp.category} by ${siteConfig.name}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain img-loaded group-hover:opacity-90" 
                        placeholder={typeof rp.imageSrc === 'string' ? undefined : "blur"}
                        blurDataURL={typeof rp.imageSrc === 'string' ? undefined: (rp.imageSrc as any).blurDataURL}
                        loading="lazy" 
                        data-ai-hint={`${rp.category.toLowerCase()} related ${rp.name.toLowerCase().split(' ')[0]}`}
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
           <ClientWhatsAppLoader message={`Hi ${siteConfig.name}. I have a question about ${product.name} (${product.category}).`} />
        </Suspense>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return productsData.map(product => ({
    productId: product.id,
  }));
}
