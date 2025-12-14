'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Filter, Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { blogPostsData, blogCategories } from '@/lib/data';
import { Checkbox } from '@/components/ui/checkbox';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });


export default function BlogPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['All']));

  const handleImageLoad = (postId: string) => {
    setLoadedImages(prev => ({ ...prev, [postId]: true }));
  };

  // Handle category selection/deselection
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      
      if (category === 'All') {
        // If "All" is clicked, toggle all categories
        if (newSet.has('All')) {
          // Deselect all
          newSet.clear();
        } else {
          // Select all
          newSet.clear();
          newSet.add('All');
          blogCategories.forEach(cat => newSet.add(cat));
        }
      } else {
        // Toggle individual category
        if (newSet.has(category)) {
          newSet.delete(category);
        } else {
          newSet.add(category);
        }
        // Remove "All" if a specific category is selected
        newSet.delete('All');
      }
      
      // If no categories selected, default to "All"
      if (newSet.size === 0) {
        newSet.add('All');
      }
      
      return newSet;
    });
  };

  // Filter blog posts by selected categories
  const filteredPosts = selectedCategories.has('All')
    ? blogPostsData
    : blogPostsData.filter(post => selectedCategories.has(post.category));

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
        <Header />
      </Suspense>
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
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Sidebar - Category Filter */}
                      <aside className="lg:w-64 flex-shrink-0">
                        <div className="lg:sticky lg:top-24 bg-card border rounded-lg p-4 shadow-sm">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                            <Filter className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-semibold">Filter by Category</h2>
                          </div>
                          <nav className="space-y-2">
                            <div
                              onClick={() => handleCategoryToggle('All')}
                              className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                                selectedCategories.has('All')
                                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                  : 'hover:bg-accent hover:text-accent-foreground'
                              }`}
                            >
                              <div className="flex items-center gap-3 flex-1 w-full">
                                <Checkbox
                                  checked={selectedCategories.has('All')}
                                  onCheckedChange={() => handleCategoryToggle('All')}
                                  onClick={(e) => e.stopPropagation()}
                                  className="pointer-events-none"
                                />
                                <span className="flex-1 text-left text-sm font-medium">All Posts</span>
                              </div>
                              <Badge variant={selectedCategories.has('All') ? 'secondary' : 'secondary'} className="ml-2">
                                {blogPostsData.length}
                              </Badge>
                            </div>
                            {blogCategories.map(category => {
                              const count = blogPostsData.filter(post => post.category === category).length;
                              const isSelected = selectedCategories.has(category);
                              return (
                                <div
                                  key={category}
                                  onClick={() => handleCategoryToggle(category)}
                                  className={`w-full flex items-center justify-between px-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                                    isSelected
                                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                      : 'hover:bg-accent hover:text-accent-foreground'
                                  }`}
                                >
                                  <div className="flex items-center gap-3 flex-1 w-full">
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => handleCategoryToggle(category)}
                                      onClick={(e) => e.stopPropagation()}
                                      className="pointer-events-none"
                                    />
                                    <span className="flex-1 text-left truncate text-sm font-medium">{category}</span>
                                  </div>
                                  <Badge variant="secondary" className="ml-2">
                                    {count}
                                  </Badge>
                                </div>
                              );
                            })}
                          </nav>
                        </div>
                      </aside>

                      {/* Main Content - Blog Posts Grid */}
                      <div className="flex-1 min-w-0">
                        {filteredPosts.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
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
                      <Button variant="outline" asChild className="w-full">
                        <Link href={`/blog/${post.slug}`} className="truncate block w-full text-center">
                          Read Article
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-muted-foreground text-lg py-12">
                            {selectedCategories.has('All') || selectedCategories.size === 0
                              ? `No blog posts available at the moment. Check back soon for insights from ${siteConfig.name}!`
                              : `No blog posts found in the selected ${selectedCategories.size === 1 ? 'category' : 'categories'}. Try selecting different categories or view all posts.`
                            }
                          </p>
                        )}
                      </div>
                    </div>
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
