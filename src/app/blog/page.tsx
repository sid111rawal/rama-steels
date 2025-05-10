'use client'; 

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { blogPostsData } from '@/lib/data';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });


export default function BlogPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (postId: string) => {
    setLoadedImages(prev => ({ ...prev, [postId]: true }));
  };
  
  useEffect(() => {
    document.title = `Industrial Insights & News | ${siteConfig.name} Blog`;
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="blog-hero" className="py-20 bg-secondary text-center fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">{siteConfig.name} Industrial Insights Blog</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest industry news, technical guides on steel balls, polish media, and manufacturing insights from the experts at {siteConfig.name}.
            </p>
          </div>
        </section>

        <section id="blog-posts" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {blogPostsData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPostsData.map((post, index) => (
                  <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
                    <Link href={`/blog/${post.slug}`} className="block" aria-label={`Read more about ${post.title}`}>
                      <CardHeader className="p-0 relative">
                        <Image
                          src={post.imageSrc}
                          alt={`Featured image for blog post titled: ${post.title}`}
                          width={400}
                          height={250}
                          className={`object-cover w-full h-56 transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedImages[post.id] ? 'img-loaded' : 'img-loading'}`}
                          placeholder={typeof post.imageSrc === 'string' ? undefined : "blur"}
                          blurDataURL={typeof post.imageSrc === 'string' ? undefined: (post.imageSrc as any).blurDataURL}
                          onLoad={() => handleImageLoad(post.id)}
                          data-ai-hint={`${post.category.toLowerCase()} article`}
                        />
                         <Badge variant="default" className="absolute top-3 left-3">{post.category}</Badge>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          <span className="sr-only">Blog Post Title: </span>{post.title}
                        </h2>
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
                        <Link href={`/blog/${post.slug}`}>Read Article: {post.title}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">No blog posts available at the moment. Check back soon for insights from {siteConfig.name}!</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your blog.`} />
      </Suspense>
    </div>
  );
}

// Example if it were a Server Component:
// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: `Industrial Insights & News | ${siteConfig.name} Blog`,
//     description: `Stay updated with the latest industry news, technical insights, and articles from ${siteConfig.name}, your expert in steel balls and polish media manufacturing.`,
//     keywords: [`industrial blog`, 'steel manufacturing news', `${siteConfig.name} blog`, 'steel ball insights', 'polish media guides', ...siteConfig.keywords.slice(0,5)],
//     alternates: {
//       canonical: '/blog',
//     },
//   };
// }
