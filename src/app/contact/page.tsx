'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import InquiryForm from '@/components/inquiry-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
        <Header />
      </Suspense>
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Contact {siteConfig.name}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for inquiries about our steel balls, polish media, and precision gauges. We're here to help with your industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Contact Information Cards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {siteConfig.contactInfo.address}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`tel:${siteConfig.contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.contactInfo.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${siteConfig.contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {siteConfig.contactInfo.email}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form Section */}
          <div className="max-w-4xl mx-auto">
            <InquiryForm />
          </div>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your products.`} />
      </Suspense>
    </div>
  );
}

