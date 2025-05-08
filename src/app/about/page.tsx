'use client'; 
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Users, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// export const metadata: Metadata = { // Metadata for client components is typically handled differently or not directly exported like this.
//   title: `About ${siteConfig.name} - Our Story and Values in Steel Manufacturing`,
//   description: `Learn about ${siteConfig.name}, a leading Indian manufacturer of steel balls and polish media with over 20 years of experience. Discover our commitment to quality, innovation, and customer satisfaction.`,
//   keywords: `about ${siteConfig.name}, steel manufacturing India, company history, industrial products, quality steel balls`,
//   alternates: {
//     canonical: '/about',
//   },
// };


const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="about-hero" className="py-20 bg-secondary text-center fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">About {siteConfig.name}: Steel Manufacturing Excellence</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 20 years of experience in steel manufacturing in India, {siteConfig.name} combines innovation with quality to deliver the best industrial steel products.
            </p>
          </div>
        </section>

        <section id="company-values" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Core Values at {siteConfig.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: "Quality First", description: "We are committed to providing products that meet the highest standards of quality and precision." },
                { icon: Zap, title: "Innovation Driven", description: "Continuously improving our processes and products through research and development." },
                { icon: Users, title: "Customer Focus", description: "Building long-lasting relationships by understanding and exceeding customer expectations." }
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
        <WhatsAppChat message={`Hi ${siteConfig.name}. I'd like to know more about your company.`} />
      </Suspense>
    </div>
  );
}
