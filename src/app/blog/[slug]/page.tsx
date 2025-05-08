'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarDays, UserCircle, MessageSquare, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import dynamic from 'next/dynamic';
import React, { Suspense, use } from 'react'; 
import { blogPostsData as blogPosts } from '@/lib/data'; // Import from data.ts

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

interface BlogPostPageParams {
  slug: string;
}

// generateStaticParams is not needed here as we are using client-side rendering with `use` for params
// If SSG for blog posts is desired later, this component structure would need to be re-evaluated
// or a different approach for fetching data on the server would be used.

export default function BlogPostPage({ params }: { params: BlogPostPageParams }) {
  const resolvedParams = use(params as unknown as Promise<BlogPostPageParams>);
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold my-8">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow bg-background py-8 sm:py-12 fade-in-element">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button variant="outline" asChild className="mb-8 group">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>

          <article className="bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl fade-in-element">
            <header className="mb-8">
              <Badge variant="secondary" className="mb-3">{post.category}</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <UserCircle className="h-4 w-4 mr-1.5" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </header>

            <figure className="mb-8">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md img-loaded"
                priority // Main blog image, likely LCP
                data-ai-hint={post.imageHint}
              />
            </figure>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Separator className="my-10" />

            <footer className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MessageSquare className="h-5 w-5" />
                <span>Discuss this post</span> 
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about the blog post: ${post.title}`} />
      </Suspense>
    </div>
  );
}
