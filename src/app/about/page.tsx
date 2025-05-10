'use client'; 
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Users, Zap, CheckCircle, Award, Factory, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import React, { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

export default function AboutPage() {
  useEffect(() => {
    document.title = `About ${siteConfig.name} - Our Story, Values & Expertise in Steel Manufacturing`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="about-hero" className="py-20 bg-secondary text-center fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">About {siteConfig.name}: Pioneering Steel Manufacturing in India</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              With over two decades of unwavering experience in steel manufacturing, {siteConfig.name} proudly stands as a leader in India, innovatively crafting superior industrial steel products like steel balls, polish media, and precision gauges.
            </p>
          </div>
        </section>

        <section id="company-story" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Journey of Excellence</h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6">
              <p>
                Founded in Agra over 20 years ago, {siteConfig.name} began with a vision to deliver unparalleled quality in industrial steel components. Our journey has been marked by continuous innovation, dedication to precision engineering, and a deep understanding of our customers' evolving needs across India.
              </p>
              <p>
                From humble beginnings, we have grown into a trusted name for high-quality steel balls, diverse polish media, and reliable precision gauges. Our commitment to 'Made in India' excellence drives us to adopt advanced manufacturing techniques and stringent quality control processes, ensuring every product surpasses industry standards.
              </p>
              <p>
                At {siteConfig.name}, we believe in forging strong partnerships with our clients, offering not just products but complete solutions. Our experienced team works closely with industries ranging from automotive to heavy engineering, providing expertise and support to optimize their operations.
              </p>
            </div>
          </div>
        </section>

        <section id="company-values" className="py-16 sm:py-20 bg-secondary fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Core Values at {siteConfig.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Uncompromising Quality", description: `We are committed to manufacturing and supplying products like steel balls and polish media that meet the highest standards of quality, precision, and durability for Indian industries.` },
                { icon: Sparkles, title: "Customer-Centric Innovation", description: `Continuously improving our processes and product range through R&D, focusing on solutions that meet the specific needs of our diverse clientele across India.` },
                { icon: Factory, title: "Manufacturing Excellence", description: `Leveraging over 20 years of experience and modern technology to ensure efficient, reliable, and superior production of all our industrial steel components.` },
                { icon: CheckCircle, title: "Integrity & Reliability", description: "We conduct our business with the utmost integrity, ensuring transparency and building trust as a reliable partner for all your industrial steel needs." },
                { icon: Zap, title: "Responsive Service", description: "Providing prompt and effective support to our customers, from initial inquiry for steel balls or gauges to after-sales service." },
                { icon: Users, title: "Valued Partnerships", description: "Building long-lasting relationships by understanding and exceeding customer expectations for products like polish media and precision gauges." }
              ].map((value, index) => (
                <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4" aria-hidden="true">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat message={`Hi ${siteConfig.name}. I'd like to know more about your company, ${siteConfig.name}, and its steel products.`} />
      </Suspense>
    </div>
  );
}

// Example if it were a Server Component:
// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: `About ${siteConfig.name} - Steel Manufacturing Experts in India`,
//     description: `Learn about ${siteConfig.name}, a leading Indian manufacturer of steel balls, polish media, and precision gauges with over 20 years of experience. Discover our commitment to quality, innovation, and customer satisfaction in Agra and across India.`,
//     keywords: [`about ${siteConfig.name}`, 'company history', 'steel manufacturing India', 'industrial products Agra', 'quality steel balls', 'polish media manufacturer', ...siteConfig.keywords.slice(0,7)],
//     alternates: {
//       canonical: '/about',
//     },
//   };
// }
