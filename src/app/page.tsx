import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
// import ProductsSection from '@/components/sections/products-section'; // ProductsSection is not used directly anymore
import WhatsAppChat from '@/components/whatsapp-chat';
import ProductCarousel from '@/components/product-carousel';
import { productsData } from '@/lib/data';
import TestimonialsSection from '@/components/sections/testimonials-section';
import InquirySection from '@/components/sections/inquiry-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <HeroSection />
        {/* Use ProductCarousel for the product preview */}
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
      <WhatsAppChat phoneNumber="+1234567890" message="Hi SteelBalls Co. I have a question" />
    </div>
  );
}
