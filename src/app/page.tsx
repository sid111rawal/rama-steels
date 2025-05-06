import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProductsSection from '@/components/sections/products-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import InquirySection from '@/components/sections/inquiry-section';
import WhatsAppChat from '@/components/whatsapp-chat';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <HeroSection />
        <ProductsSection id="products-preview" title="Our Products" previewMode={true} />
        <TestimonialsSection />
        <InquirySection />
      </main>
      <Footer />
      <WhatsAppChat phoneNumber="+1234567890" message="Hi SteelBalls Co. I have a question" />
    </div>
  );
}
