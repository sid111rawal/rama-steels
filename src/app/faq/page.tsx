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

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

// FAQ Data with comprehensive steel industry questions
const faqData = [
  {
    id: "general-1",
    category: "General Information",
    question: "What types of steel balls does Rama & Sons manufacture?",
    answer: `${siteConfig.name} manufactures a comprehensive range of steel balls including:
    • Ferrous Steel Balls: EN31, AISI-1010, 100CR6, SS-300 Series (304, 316), EN-9, SS-400 Series (410, 420, 440C), AISI-52100
    • Non-Ferrous Metal Balls: Brass, Copper, Aluminium, Titanium, Tungsten, Inconel, Hastelloy, and more
    • Non-Metallic Balls: Ceramic, Glass, Plastic, Ruby, Silicon Nitride balls
    All our steel balls are manufactured in India with over 20 years of expertise.`
  },
  {
    id: "general-2", 
    category: "General Information",
    question: "Where is Rama & Sons located and do you ship across India?",
    answer: `${siteConfig.name} is headquartered in Agra, Uttar Pradesh, India. We ship our high-quality steel balls, polish media, and precision gauges across India and internationally. Our manufacturing facility is equipped with modern technology to ensure consistent quality and timely delivery to customers nationwide.`
  },
  {
    id: "products-1",
    category: "Product Specifications",
    question: "What is the difference between EN31 and AISI 52100 steel balls?",
    answer: `EN31 and AISI 52100 are essentially equivalent grades of high-carbon chromium bearing steel. Both offer:
    • High hardness (60-67 HRC after heat treatment)
    • Excellent wear resistance and dimensional stability
    • Superior fatigue strength for bearing applications
    • Chemical composition: ~1% Carbon, ~1.5% Chromium
    EN31 is the British standard while AISI 52100 is the American designation for the same material specification.`
  },
  {
    id: "products-2",
    category: "Product Specifications", 
    question: "What sizes of steel balls are available?",
    answer: `${siteConfig.name} manufactures steel balls in a wide range of sizes from precision micro balls to large industrial balls. Standard sizes include:
    • Precision balls: 0.5mm to 25mm diameter
    • Industrial balls: 25mm to 150mm diameter
    • Custom sizes: Available on request
    We maintain tight tolerances and can produce balls to Grade 10, Grade 25, Grade 100, and other precision grades as per your requirements.`
  },
  {
    id: "products-3",
    category: "Product Specifications",
    question: "What is the difference between SS 304 and SS 316 stainless steel balls?",
    answer: `The main differences between SS 304 and SS 316 stainless steel balls are:
    
    **SS 304 Balls:**
    • 18% Chromium, 8% Nickel
    • Good corrosion resistance in atmospheric conditions
    • Cost-effective for general applications
    • Suitable for food processing and medical devices
    
    **SS 316 Balls:**
    • 16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum
    • Superior corrosion resistance, especially against chlorides
    • Better pitting and crevice corrosion resistance
    • Ideal for marine environments and harsh chemical conditions`
  },
  {
    id: "applications-1",
    category: "Applications & Uses",
    question: "What are the main applications for steel balls in industry?",
    answer: `Steel balls from ${siteConfig.name} are used in numerous industrial applications:
    • **Bearings**: Ball bearings for automotive, machinery, and industrial equipment
    • **Valves**: Check valves, ball valves for flow control systems
    • **Grinding Media**: Ball mills for cement, mining, and pharmaceutical industries
    • **Automotive**: Steering systems, CV joints, seat belt mechanisms
    • **Aerospace**: Precision components requiring high reliability
    • **Medical Devices**: Biocompatible balls for surgical instruments
    • **Food Processing**: Stainless steel balls for hygienic applications`
  },
  {
    id: "applications-2",
    category: "Applications & Uses",
    question: "What polish media does Rama & Sons offer for surface finishing?",
    answer: `Our comprehensive polish media range includes:
    • **Stainless Steel Media**: SS straight polish pins, SS cross pins, SS cut wire shots, SS round cut wire
    • **Zinc Media**: Zinc round shots, zinc cut wire shots for gentle finishing
    • **Magnetic/Non-Magnetic**: Available in both variants for different applications
    • **Multi-faceted Pins**: For reaching complex geometries and uniform finishes
    All media are designed for tumbling, deburring, polishing, and surface preparation applications.`
  },
  {
    id: "quality-1",
    category: "Quality & Standards",
    question: "What quality standards does Rama & Sons follow?",
    answer: `${siteConfig.name} adheres to international quality standards including:
    • ISO 3290 for steel balls used in rolling bearings
    • ASTM F2215 for steel balls used in bearing applications
    • DIN 5401 for steel balls precision grades
    • AISI standards for material specifications
    • In-house quality control with dimensional inspection, hardness testing, and surface finish verification
    We maintain strict quality control throughout the manufacturing process to ensure consistency and reliability.`
  },
  {
    id: "quality-2",
    category: "Quality & Standards",
    question: "How do you ensure the hardness and surface finish of steel balls?",
    answer: `Our quality assurance process includes:
    • **Hardness Testing**: Rockwell C scale testing (typically 60-67 HRC for bearing grade)
    • **Surface Finish**: Ra values maintained as per grade requirements
    • **Dimensional Accuracy**: Precision measurement using coordinate measuring machines
    • **Roundness/Sphericity**: Controlled to meet Grade 10, 25, or 100 specifications
    • **Material Certification**: Chemical composition analysis and material traceability
    Each batch undergoes rigorous testing before dispatch.`
  },
  {
    id: "ordering-1",
    category: "Ordering & Pricing",
    question: "How can I get a quote for steel balls or polish media?",
    answer: `To get a competitive quote from ${siteConfig.name}:
    1. **Contact Us**: Call ${siteConfig.contactInfo.phone} or email ${siteConfig.contactInfo.email}
    2. **Specify Requirements**: Material grade, size, quantity, tolerance, and application
    3. **WhatsApp**: Send your requirements via WhatsApp for quick response
    4. **Online Inquiry**: Use our inquiry form on the website
    We provide detailed quotes within 24 hours with technical specifications and delivery timelines.`
  },
  {
    id: "ordering-2",
    category: "Ordering & Pricing",
    question: "What is the minimum order quantity and delivery time?",
    answer: `**Minimum Order Quantity:**
    • Standard products: As low as 1kg for common grades
    • Custom specifications: Depends on material and size requirements
    
    **Delivery Time:**
    • Standard steel balls: 7-15 days from order confirmation
    • Custom products: 15-30 days depending on specifications
    • Express delivery available for urgent requirements
    
    We maintain stock of commonly used grades to ensure faster delivery across India.`
  },
  {
    id: "technical-1",
    category: "Technical Support",
    question: "Can you help me select the right steel ball grade for my application?",
    answer: `Absolutely! Our technical team at ${siteConfig.name} provides expert consultation to help you select the optimal steel ball grade based on:
    • Load requirements and operating conditions
    • Environmental factors (temperature, corrosion, chemicals)
    • Precision and tolerance requirements
    • Cost considerations and volume requirements
    Contact our technical experts for application-specific recommendations and engineering support.`
  },
  {
    id: "technical-2",
    category: "Technical Support",
    question: "Do you provide custom manufacturing for special requirements?",
    answer: `Yes, ${siteConfig.name} specializes in custom manufacturing:
    • **Custom Sizes**: Non-standard diameters and specifications
    • **Special Materials**: Exotic alloys and specialized compositions
    • **Precision Gauges**: Custom-made gauges for specific measurement needs
    • **Surface Treatments**: Special coatings and heat treatments
    • **Packaging**: Custom packaging for automated assembly lines
    Our experienced team works closely with customers to develop solutions for unique industrial requirements.`
  }
];

// Group FAQs by category
const faqCategories = faqData.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push(faq);
  return acc;
}, {} as Record<string, typeof faqData>);

export default function FAQPage() {
  useEffect(() => {
    document.title = `Frequently Asked Questions - Steel Balls & Polish Media | ${siteConfig.name}`;
  }, []);

  // Generate FAQ Schema markup for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
