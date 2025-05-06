'use client';

import *ానికి React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Star } from 'lucide-react';


interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarSrc?: string;
  avatarFallback: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 't001',
    name: 'Jane Doe',
    role: 'Procurement Manager',
    company: 'Acme Corp',
    testimonial: 'SteelBalls Co. consistently delivers high-quality products on time. Their customer service is exceptional, making them a reliable partner for our industrial needs.',
    avatarSrc: 'https://picsum.photos/seed/avatar1/100/100',
    avatarFallback: 'JD',
    rating: 5,
  },
  {
    id: 't002',
    name: 'John Smith',
    role: 'Lead Engineer',
    company: 'Beta Industries',
    testimonial: "The precision of SteelBalls Co.'s steel balls is unmatched. We've seen a significant improvement in our machinery's performance since switching to their products.",
    avatarSrc: 'https://picsum.photos/seed/avatar2/100/100',
    avatarFallback: 'JS',
    rating: 5,
  },
  {
    id: 't003',
    name: 'Alice Brown',
    role: 'Operations Director',
    company: 'Gamma Solutions',
    testimonial: "Their polish media has drastically improved our finishing process. The team at SteelBalls Co. was very helpful in selecting the right media for our specific application.",
    avatarSrc: 'https://picsum.photos/seed/avatar3/100/100',
    avatarFallback: 'AB',
    rating: 4,
  },
  {
    id: 't004',
    name: 'Robert Green',
    role: 'CEO',
    company: 'Delta Manufacturing',
    testimonial: "We've been sourcing from SteelBalls Co. for over five years. Their commitment to quality and innovation keeps us coming back. Highly recommended!",
    avatarFallback: 'RG',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">
          What Our Clients Say
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
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-background">
                    <CardContent className="p-6 text-center sm:text-left">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-6 text-base md:text-lg leading-relaxed">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                        <Avatar className="h-12 w-12 sm:mr-4 mb-2 sm:mb-0">
                          <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint="person face" />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
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
