
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
// Removed Avatar, AvatarFallback, AvatarImage imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site';


interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  // Removed avatarSrc and avatarFallback as they are no longer used
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 't001',
    name: 'Priya Sharma',
    role: 'Procurement Head',
    company: 'Bharat Heavy Electricals Limited (BHEL)',
    testimonial: `We've been sourcing EN31 steel balls from ${siteConfig.name} for our bearing manufacturing unit. Their consistent quality and on-time delivery have been exceptional. A reliable Indian supplier.`,
    rating: 5,
  },
  {
    id: 't002',
    name: 'Rohan Mehta',
    role: 'Chief Engineer',
    company: 'Tata Steel Downstream Products Ltd.',
    testimonial: `The SS-316 stainless steel balls from ${siteConfig.name} are top-notch for our chemical processing equipment. Their corrosion resistance is exactly what we need. Highly recommend their products made in Agra.`,
    rating: 5,
  },
  {
    id: 't003',
    name: 'Anjali Desai',
    role: 'Operations Director',
    company: 'Titan Company Limited (Jewellery Division)',
    testimonial: `Their stainless steel polishing media has drastically improved our finishing process for jewelry components. The team at ${siteConfig.name} was very helpful in selecting the right grade and size.`,
    rating: 4,
  },
  {
    id: 't004',
    name: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Larsen & Toubro (Heavy Engineering Division)',
    testimonial: `${siteConfig.name} has been our go-to supplier for custom precision gauges and various steel balls for over five years. Their commitment to quality and understanding of Indian industrial needs is commendable.`,
    rating: 5,
  },
  {
    id: 't005',
    name: 'Deepak Kumar',
    role: 'Quality Control Manager',
    company: 'SKF India Ltd.',
    testimonial: `The precision and consistency of steel balls from ${siteConfig.name} are unmatched. Their products have helped us reduce rejection rates and improve the overall quality of our bearings. Truly a top-tier manufacturer in India.`,
    rating: 5,
  },
  {
    id: 't006',
    name: 'Sneha Patel',
    role: 'Lead Design Engineer',
    company: 'Flowserve India Controls Pvt. Ltd.',
    testimonial: `For our specialized valve components, we rely on ${siteConfig.name} for high-grade non-ferrous balls. Their technical support and ability to deliver custom specifications have been invaluable to our projects.`,
    rating: 4,
  },
  {
    id: 't007',
    name: 'Rajesh Gupta',
    role: 'Production Manager',
    company: 'Hindustan Aeronautics Limited (HAL)',
    testimonial: `The non-metallic balls, especially the ceramic variants, from ${siteConfig.name} have met our stringent requirements for aerospace applications. Their reliability and performance under extreme conditions are commendable.`,
    rating: 5,
  },
  {
    id: 't008',
    name: 'Meera Krishnan',
    role: 'R&D Specialist',
    company: 'Aditya Birla Chemicals',
    testimonial: `${siteConfig.name}'s polish media and abrasives, particularly their SS Cut Wire Shorts, have significantly improved our surface finishing processes for specialized equipment. Their product consistency is key for our operations.`,
    rating: 4,
  },
  {
    id: 't009',
    name: 'Arjun Reddy',
    role: 'Senior Buyer',
    company: 'Ashok Leyland (Automotive Manufacturer)',
    testimonial: `The EN-9 and other carbon steel balls supplied by ${siteConfig.name} are consistently up to mark for our automotive component manufacturing. Their timely deliveries help us maintain our production schedules.`,
    rating: 4,
  },
  {
    id: 't010',
    name: 'Pooja Iyer',
    role: 'Plant Manager',
    company: 'Thermax Limited (Energy and Environment Solutions)',
    testimonial: `We utilize various grades of stainless steel balls from ${siteConfig.name} in our heat exchangers and environmental control systems. The product quality and their technical support are excellent.`,
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-secondary fade-in-element">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">
          What Our Clients in India Say About {siteConfig.name}
        </h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          aria-label="Client Testimonials Carousel"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-background">
                    <CardContent className="p-6 text-center sm:text-left">
                      <div className="flex mb-2 justify-center sm:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground italic mb-6 text-base md:text-lg leading-relaxed">
                        <p>"{testimonial.testimonial}"</p>
                      </blockquote>
                      <div className="flex flex-col items-center justify-center sm:items-start"> {/* Removed sm:flex-row and sm:justify-start, adjusted alignment */}
                        {/* Avatar component removed */}
                        <div className="mt-2 text-center sm:text-left"> {/* Added margin-top for spacing and ensured text alignment */}
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-12px] sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          <CarouselNext className="absolute right-[-12px] sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

