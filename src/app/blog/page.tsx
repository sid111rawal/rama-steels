
'use client'; // Added for useState and useEffect
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle } from 'lucide-react';
import WhatsAppChat from '@/components/whatsapp-chat';
import { siteConfig } from '@/config/site';
import React, { useState } from 'react'; // Import useState

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  imageHint: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'bp001',
    title: 'The Importance of Steel Ball Hardness in Industrial Applications',
    slug: 'steel-ball-hardness',
    excerpt: 'Understanding how steel ball hardness impacts performance, durability, and efficiency across various industrial sectors. A deep dive into testing methods and standards.',
    date: 'October 26, 2023',
    author: 'Dr. Metallurgy Expert',
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost1/400/250',
    imageHint: 'metalworking process'
  },
  {
    id: 'bp002',
    title: 'Choosing the Right Polishing Media for Your Surface Finishing Needs',
    slug: 'choosing-polishing-media',
    excerpt: 'A comprehensive guide to selecting the optimal polishing media, considering material, desired finish, and operational costs. Compare ceramic, plastic, and organic options.',
    date: 'November 05, 2023',
    author: 'Finishing Pro',
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost2/400/250',
    imageHint: 'polishing tools'
  },
  {
    id: 'bp003',
    title: 'Innovations in Steel Manufacturing: Trends to Watch in 2024',
    slug: 'steel-manufacturing-trends-2024',
    excerpt: 'Explore the latest advancements in steel production, from sustainable practices to AI-driven quality control. How SteelBalls Co. is embracing the future.',
    date: 'November 15, 2023',
    author: 'Industry Analyst',
    category: 'Industry News',
    imageSrc: 'https://picsum.photos/seed/blogpost3/400/250',
    imageHint: 'futuristic factory'
  },
   {
    id: 'bp004',
    title: 'Corrosion Resistance: Why Stainless Steel Balls Are a Superior Choice',
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: 'Delving into the science behind stainless steel\'s anti-corrosion properties and its advantages in harsh environments, including chemical and food processing industries.',
    date: 'November 28, 2023',
    author: 'Materials Scientist',
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/400/250',
    imageHint: 'shiny metal'
  },
];


export default function BlogPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (postId: string) => {
    setLoadedImages(prev => ({ ...prev, [postId]: true }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="blog-hero" className="py-20 bg-secondary text-center fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">{siteConfig.name} Blog</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest insights, technical guides, and industry news from the experts at {siteConfig.name}.
            </p>
          </div>
        </section>

        <section id="blog-posts" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        width={400}
                        height={250}
                        className={`object-cover w-full h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[post.id] ? 'img-loaded' : 'img-loading'}`}
                        data-ai-hint={post.imageHint}
                        onLoad={() => handleImageLoad(post.id)}
                      />
                       <Badge variant="default" className="absolute top-3 left-3">{post.category}</Badge>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                      <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <UserCircle className="h-4 w-4 mr-1.5" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your blog.`} />
    </div>
  );
}
