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
import { blogPostsData as blogPosts } from '@/lib/data';
import type { Metadata } from 'next';
import Script from 'next/script'; // For JSON-LD


// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = blogPosts.find(p => p.slug === params.slug);

//   if (!post) {
//     return {
//       title: `Blog Post Not Found - ${siteConfig.name}`,
//       description: `The blog post you are looking for could not be found on ${siteConfig.name}'s blog.`,
//     };
//   }

//   const title = `${post.title} - ${siteConfig.name} Blog`;
//   const description = post.excerpt; // Use excerpt as meta description
//   const keywords = `${post.title}, ${post.category}, ${siteConfig.name} blog, ${post.keywords ? post.keywords.join(', ') : ''}`;
//   const imageUrl = typeof post.imageSrc === 'string' ? post.imageSrc : (post.imageSrc as any).src;

//   return {
//     title,
//     description,
//     keywords,
//     alternates: {
//       canonical: `/blog/${post.slug}`,
//     },
//     openGraph: {
//       title,
//       description,
//       url: `${siteConfig.url}/blog/${post.slug}`,
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(), // Ensure post.date is in a format Date can parse
//       authors: [post.author],
//       section: post.category,
//       tags: post.keywords,
//       images: [
//         {
//           url: imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`,
//           width: 800, // Adjust as needed
//           height: 400, // Adjust as needed
//           alt: post.title,
//         },
//       ],
//     },
//     twitter: {
//       title,
//       description,
//       images: [{ 
//         url: imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`, 
//         alt: post.title 
//       }],
//     }
//   };
// }


const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

interface BlogPostPageParams {
  slug: string;
}


export default function BlogPostPage({ params }: { params: BlogPostPageParams }) {
  // This 'use' hook approach for params is specific to Client Components
  // and might not be ideal if full SSG/ISR capabilities for metadata are desired.
  // For full App Router capabilities with `generateMetadata`, this page would typically be a Server Component.
  const resolvedParams = use(params as unknown as Promise<BlogPostPageParams>);
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold my-8">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find the blog post you were looking for.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const postImageUrl = typeof post.imageSrc === 'string' ? post.imageSrc : (post.imageSrc as any).src;
  const absolutePostImageUrl = postImageUrl.startsWith('http') ? postImageUrl : `${siteConfig.url}${postImageUrl}`;


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
      "@type": "Person", // Or Organization if appropriate
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
    "articleBody": post.content.replace(/<[^>]*>?/gm, ''), // Basic stripping of HTML for articleBody
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
                {/* Placeholder for discussion link or comments count */}
                <span>Comments or thoughts? Share this post!</span> 
              </div>
              {/* Basic share button - consider using a library for more advanced sharing */}
              <Button 
                variant="outline" 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    // Fallback for browsers that don't support navigator.share
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

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }
