'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import React, { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { faqData } from '@/lib/faq-data';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

// Group FAQs by category
const faqCategories = faqData.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push(faq);
  return acc;
}, {} as Record<string, typeof faqData>);

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
          <Header />
        </Suspense>
        <main role="main" className="flex-grow bg-background py-8 sm:py-12 fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12 fade-in-element">
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Find answers to common questions about steel balls, polish media, precision gauges, and services from {siteConfig.name}. 
                Over 20 years of manufacturing expertise in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/#inquiry">Get Custom Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`https://wa.me/${siteConfig.contactInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${siteConfig.name}. I have a question that's not in your FAQ.`)}`} target="_blank">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Ask on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="max-w-4xl mx-auto">
              {Object.entries(faqCategories).map(([category, faqs], categoryIndex) => (
                <div key={category} className="mb-12 fade-in-element" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
                    {category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-6 bg-card">
                        <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                          <span className="text-lg font-medium pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          <div className="prose prose-gray dark:prose-invert max-w-none">
                            {faq.answer.split('\n').map((paragraph, index) => (
                              <p key={index} className="mb-3 whitespace-pre-line">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16 p-8 bg-secondary rounded-lg fade-in-element">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our technical experts at {siteConfig.name} are ready to help you find the perfect steel balls, 
                polish media, or precision gauges for your specific industrial requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={`tel:${siteConfig.contactInfo.phone}`}>
                    Call {siteConfig.contactInfo.phone}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`mailto:${siteConfig.contactInfo.email}`}>
                    Email Us: {siteConfig.contactInfo.email}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <Suspense fallback={null}>
          <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question that's not covered in your FAQ section.`} />
        </Suspense>
    </div>
  );
}
