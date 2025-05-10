import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarDays, UserCircle, MessageSquare } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';
import React, { Suspense } from 'react'; 
import { blogPostsData } from '@/lib/data';
import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import ClientWhatsAppLoader from '@/components/client-whatsapp-loader';
import ShareButton from '@/components/share-button'; 

interface BlogPostPageParams {
  slug: string;
}

async function getPost(slug: string) {
  return blogPostsData.find(p => p.slug === slug);
}

export async function generateMetadata({ params }: { params: BlogPostPageParams }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: `Blog Post Not Found - ${siteConfig.name}`,
      description: `The blog post you are looking for could not be found on ${siteConfig.name}'s blog. Explore other articles on steel manufacturing and industrial products.`,
    };
  }

  const title = `${post.title} | ${siteConfig.name} Blog`;
  const description = post.excerpt; 
  const keywordsList = [
    post.title, 
    post.category, 
    `${siteConfig.name} blog`, 
    ...(post.keywords ? post.keywords : []),
    'industrial insights',
    'steel manufacturing India',
     ...siteConfig.keywords.slice(0,3)
  ];
  
  const imageUrl = typeof post.imageSrc === 'string' ? post.imageSrc : (post.imageSrc as any).src;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;

  return {
    title,
    description,
    keywords: keywordsList.filter((value, index, self) => self.indexOf(value) === index && value.length > 0),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), 
      authors: [post.author],
      section: post.category, // Used as article:section
      tags: post.keywords,
      images: [
        {
          url: absoluteImageUrl,
          width: 800, 
          height: 400, 
          alt: `Article image for "${post.title}" by ${siteConfig.name}`,
        },
      ],
      siteName: siteConfig.name,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ 
        url: absoluteImageUrl, 
        alt: `Twitter image for article: ${post.title}` 
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
    "dateModified": new Date(post.date).toISOString(), // Assuming dateModified is same as published for now
    "author": {
      "@type": "Person", 
      "name": post.author,
      "url": siteConfig.url // Or a specific author page URL if available
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
    "keywords": post.keywords ? post.keywords.join(', ') : post.category,
    "articleSection": post.category // For schema.org article section
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
          <nav aria-label="Breadcrumb" className="mb-8">
            <Button variant="outline" asChild className="group">
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
                alt={`Main image for blog post: ${post.title} - by ${siteConfig.name}`}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md img-loaded"
                placeholder={typeof post.imageSrc === 'string' ? undefined : "blur"}
                blurDataURL={typeof post.imageSrc === 'string' ? undefined : (post.imageSrc as any).blurDataURL}
                priority 
                data-ai-hint={`${post.category.toLowerCase()} topic illustrative`}
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
                <span>Found this article useful? Share it!</span> 
              </div>
              <ShareButton title={post.title} text={post.excerpt} />
            </footer>
          </article>
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ClientWhatsAppLoader message={`Hi ${siteConfig.name}. I have a question about the blog post: ${post.title}`} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}
