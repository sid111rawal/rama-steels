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
import React, { Suspense } from 'react'; 
import { blogPostsData } from '@/lib/data';
import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';

// Dynamically import WhatsAppChat as it's a client component
const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat').then(mod => mod.default), { ssr: false });


interface BlogPostPageParams {
  slug: string;
}

async function getPost(slug: string) {
  // In a real app, you might fetch this from a database or API
  return blogPostsData.find(p => p.slug === slug);
}

export async function generateMetadata({ params }: { params: BlogPostPageParams }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: `Blog Post Not Found - ${siteConfig.name}`,
      description: `The blog post you are looking for could not be found on ${siteConfig.name}'s blog.`,
    };
  }

  const title = `${post.title} - ${siteConfig.name} Blog`;
  const description = post.excerpt; 
  const keywords = `${post.title}, ${post.category}, ${siteConfig.name} blog, ${post.keywords ? post.keywords.join(', ') : ''}`;
  
  const imageUrl = typeof post.imageSrc === 'string' ? post.imageSrc : (post.imageSrc as any).src;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;

  return {
    title,
    description,
    keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), 
      authors: [post.author], // Assuming post.author is a string like "John Doe"
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: absoluteImageUrl,
          width: 800, 
          height: 400, 
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ 
        url: absoluteImageUrl, 
        alt: post.title 
      }],
    }
  };
}


export default async function BlogPostPage({ params }: { params: BlogPostPageParams }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const postImageUrl = typeof post.imageSrc === 'string' ? post.imageSrc : (post.imageSrc as any).src;
  const absolutePostImageUrl = postImageUrl.startsWith('http') ? postImageUrl : `${siteConfig.url}${postImageUrl.startsWith('/') ? '' : '/'}${postImageUrl}`;


  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`
    },
    "headline": post.title,
    "image": absolutePostImageUrl,
    "datePublished": new Date(post.date).toISOString(),
    // "dateModified": new Date(post.dateModified || post.date).toISOString(), // If you have a modified date
    "author": {
      "@type": "Person", 
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}${siteConfig.ogImage.src}`
      }
    },
    "description": post.excerpt,
    "articleBody": post.content.replace(/<[^>]*>?/gm, ''), 
    "keywords": post.keywords ? post.keywords.join(',') : post.category
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id={`blogpost-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main role="main" className="flex-grow bg-background py-8 sm:py-12 fade-in-element">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <nav aria-label="Breadcrumb">
            <Button variant="outline" asChild className="mb-8 group">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to All Blog Posts
              </Link>
            </Button>
          </nav>

          <article className="bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl fade-in-element">
            <header className="mb-8">
              <Badge variant="secondary" className="mb-3">{post.category}</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
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
                alt={`Main image for blog post: ${post.title}`}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md img-loaded"
                placeholder={typeof post.imageSrc === 'string' ? undefined : "blur"}
                blurDataURL={typeof post.imageSrc === 'string' ? undefined : post.imageSrc.blurDataURL}
                priority 
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
                <span>Comments or thoughts? Share this post!</span> 
              </div>
              {/* Basic share button - This will remain client-side behavior */}
              <Button 
                variant="outline" 
                onClick={() => {
                  if (typeof window !== 'undefined' && navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    alert('Sharing is not supported on this browser, please copy the link manually.');
                  }
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share This Article
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

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}