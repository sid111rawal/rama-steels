import ProductCarousel, { productsData } from '@/components/product-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProductsSectionProps {
  id: string;
  title: string;
  previewMode?: boolean;
}

export default function ProductsSection({ id, title, previewMode = false }: ProductsSectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 sm:mb-0">
            {title}
            <Badge variant="outline" className="ml-3 text-base bg-green-100 text-green-700 border-green-300 dark:bg-green-800 dark:text-green-200 dark:border-green-600">
              In Stock
            </Badge>
          </h2>
          {previewMode && (
             <Button asChild variant="link" className="text-primary hover:text-primary/80 text-lg">
               <Link href="/products">View All Products &rarr;</Link>
             </Button>
          )}
        </div>
        <ProductCarousel products={productsData} previewMode={previewMode} />
      </div>
    </section>
  );
}
