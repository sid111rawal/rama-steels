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

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="all-products" className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Our Products
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our comprehensive range of high-quality steel balls and polish media.
              </p>
              <Badge variant="outline" className="mt-4 text-base bg-green-100 text-green-700 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-600">
                All Products In Stock
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {productsData.map((product) => (
                <Card key={product.id} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="fill w-full h-48 sm:h-56 transition-transform duration-300 hover:scale-105"
                      sizes="100vw"
                    />
                   
                    <Badge variant="secondary" className="absolute top-2 right-2">{product.category}</Badge>
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your products.`} />
    </div>
  );
}
