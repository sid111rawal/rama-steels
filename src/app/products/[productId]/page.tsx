import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { productsData } from '@/components/product-carousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, HelpCircle } from 'lucide-react';
import WhatsAppChat from '@/components/whatsapp-chat';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export async function generateStaticParams() {
  return productsData.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = productsData.find(p => p.id === params.productId);

  if (!product) {
    // TODO: Create a proper 404 page
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

  // Dummy related products (excluding the current one)
  const relatedProducts = productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow bg-secondary/50 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-8 group">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-background p-4 sm:p-6 rounded-lg shadow-xl">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={600}
                height={450}
                className="w-full h-auto object-contain rounded-md"
                data-ai-hint={product.imageHint}
              />
            </div>
            <div className="bg-background p-6 sm:p-8 rounded-lg shadow-xl">
              <Badge variant="default" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              {product.price && <p className="text-2xl text-primary font-semibold mb-6">{product.price}</p>}
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
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Shipping & Delivery</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Standard shipping takes 5-7 business days. Expedited options available. Contact us for bulk order shipping quotes. (Example content)
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-12 border-t">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(rp => (
                  <Link key={rp.id} href={`/products/${rp.id}`} className="block group">
                    <div className="bg-background rounded-lg shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                       <Image src={rp.imageSrc} alt={rp.name} width={400} height={300} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" data-ai-hint={rp.imageHint} />
                       <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-2">{rp.description}</p>
                          {rp.price && <p className="text-primary font-medium">{rp.price}</p>}
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
      <WhatsAppChat phoneNumber="+1234567890" message={`Hi SteelBalls Co. I have a question about ${product.name}.`} />
    </div>
  );
}
