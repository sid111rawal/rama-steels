import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import WhatsAppChat from '@/components/whatsapp-chat';
import ProductCarousel from '@/components/product-carousel';
import { productsData } from '@/lib/data';
import TestimonialsSection from '@/components/sections/testimonials-section';
import InquirySection from '@/components/sections/inquiry-section';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <HeroSection />
        <section id="products-preview" className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Featured Products
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Discover our range of high-quality steel products.
              </p>
            </div>
            <ProductCarousel products={productsData} previewMode={true} />
          </div>
        </section>
        <TestimonialsSection />
        <InquirySection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}
