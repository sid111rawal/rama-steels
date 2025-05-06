import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarDays, UserCircle, MessageSquare, Share2 } from 'lucide-react';
import WhatsAppChat from '@/components/whatsapp-chat';
import { Separator } from '@/components/ui/separator';

// Re-using the blogPosts data from the blog page for simplicity.
// In a real app, this would likely come from a CMS or database.
const blogPosts = [
  {
    id: 'bp001',
    title: 'The Importance of Steel Ball Hardness in Industrial Applications',
    slug: 'steel-ball-hardness',
    excerpt: 'Understanding how steel ball hardness impacts performance, durability, and efficiency across various industrial sectors. A deep dive into testing methods and standards.',
    content: `
      <p class="mb-4 text-lg leading-relaxed">Steel ball hardness is a critical factor that significantly influences the performance and lifespan of components in numerous industrial applications. From bearings to grinding media, the ability of a steel ball to resist deformation under load is paramount. This article delves into why hardness matters, how it's measured, and what standards to look for.</p>
      <h2 class="text-2xl font-semibold my-4">Why Hardness is Key</h2>
      <p class="mb-4 leading-relaxed">Increased hardness typically translates to better wear resistance and a higher load-bearing capacity. For applications like ball bearings, harder balls maintain their shape under stress, ensuring smooth operation and preventing premature failure. In grinding media, harder balls are more effective at breaking down materials and last longer, reducing operational costs.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/seed/hardness-detail/800/400" alt="Steel ball hardness testing" class="rounded-lg shadow-md mx-auto" data-ai-hint="metal testing" />
        <figcaption class="text-sm text-center text-muted-foreground mt-2">Microscopic view of steel ball surface after hardness testing.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold my-4">Measuring Hardness</h2>
      <p class="mb-4 leading-relaxed">The most common methods for measuring steel ball hardness include Rockwell (HRC), Brinell (HB), and Vickers (HV) tests. Each method uses an indenter of a specific shape and material, applying a known force. The size or depth of the resulting indentation determines the hardness value. For steel balls, Rockwell C is often preferred due to its suitability for harder materials.</p>
      <h2 class="text-2xl font-semibold my-4">Industry Standards and SteelBalls Co.</h2>
      <p class="mb-4 leading-relaxed">At SteelBalls Co., we adhere to stringent international standards such as ISO 3290 and ASTM F2215. Our manufacturing processes are designed to achieve consistent hardness levels tailored to specific application requirements. For example, our high-carbon chrome steel balls typically achieve a hardness of 60-67 HRC, ensuring optimal performance in demanding conditions.</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 py-2 text-muted-foreground">
        "The right hardness ensures not just longevity, but also the efficiency and reliability of the entire system the steel ball is part of."
      </blockquote>
      <p class="leading-relaxed">Choosing steel balls with the appropriate hardness is crucial for maximizing performance and minimizing downtime. Contact SteelBalls Co. today to discuss your specific requirements and find the perfect solution for your application.</p>
    `,
    date: 'October 26, 2023',
    author: 'Dr. Metallurgy Expert',
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost1/800/400',
    imageHint: 'metalworking process'
  },
  {
    id: 'bp002',
    title: 'Choosing the Right Polishing Media for Your Surface Finishing Needs',
    slug: 'choosing-polishing-media',
    excerpt: 'A comprehensive guide to selecting the optimal polishing media, considering material, desired finish, and operational costs. Compare ceramic, plastic, and organic options.',
    content: `
      <p class="mb-4 text-lg leading-relaxed">Selecting the correct polishing media is crucial for achieving the desired surface finish in various manufacturing processes. The choice depends on factors like the material being polished, the initial surface condition, the required final finish, and cost considerations. This guide explores common types of polishing media and their applications.</p>
      <h2 class="text-2xl font-semibold my-4">Types of Polishing Media</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 pl-4">
        <li><strong>Ceramic Media:</strong> Ideal for heavy cutting and deburring. Available in various shapes and abrasive levels. Best for harder metals.</li>
        <li><strong>Plastic Media:</strong> Softer than ceramic, suitable for softer metals like aluminum or brass, and for achieving a pre-polish finish. Reduces the risk of part damage.</li>
        <li><strong>Steel Media:</strong> Used for burnishing and achieving a high-luster finish. It compacts the surface, increasing hardness and corrosion resistance.</li>
        <li><strong>Organic Media (e.g., Walnut Shells, Corn Cob):</strong> Gentle, often used for light deburring, cleaning, or drying parts. Environmentally friendly.</li>
      </ul>
      <figure class="my-6">
        <img src="https://picsum.photos/seed/media-types/800/400" alt="Various types of polishing media" class="rounded-lg shadow-md mx-auto" data-ai-hint="industrial parts" />
        <figcaption class="text-sm text-center text-muted-foreground mt-2">A selection of different polishing media types.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold my-4">Factors to Consider</h2>
      <p class="mb-4 leading-relaxed">When choosing polishing media, consider the following:</p>
      <ol class="list-decimal list-inside mb-4 space-y-2 pl-4">
          <li><strong>Material of the workpiece:</strong> Harder materials require more aggressive media.</li>
          <li><strong>Desired finish:</strong> From rough deburring to a mirror shine.</li>
          <li><strong>Part geometry:</strong> Media shape and size should prevent lodging in part crevices.</li>
          <li><strong>Process time and cost:</strong> Aggressiveness of media affects cycle times.</li>
      </ol>
      <p class="leading-relaxed">At SteelBalls Co., we offer a wide range of polishing media and can assist you in selecting the perfect type for your application. Our experts can help optimize your finishing processes for efficiency and quality.</p>
    `,
    date: 'November 05, 2023',
    author: 'Finishing Pro',
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost2/800/400',
    imageHint: 'polishing tools'
  },
  {
    id: 'bp003',
    title: 'Innovations in Steel Manufacturing: Trends to Watch in 2024',
    slug: 'steel-manufacturing-trends-2024',
    excerpt: 'Explore the latest advancements in steel production, from sustainable practices to AI-driven quality control. How SteelBalls Co. is embracing the future.',
    content: `
      <p class="mb-4 text-lg leading-relaxed">The steel industry is undergoing a significant transformation, driven by technological advancements and a growing emphasis on sustainability. As we look towards 2024, several key trends are shaping the future of steel manufacturing. SteelBalls Co. is at the forefront, adopting innovative practices to enhance quality, efficiency, and environmental responsibility.</p>
      <h2 class="text-2xl font-semibold my-4">Key Trends in Steel Manufacturing</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 pl-4">
        <li><strong>Sustainable Steelmaking:</strong> Increased focus on reducing carbon emissions through hydrogen-based steel production, carbon capture technologies, and greater use of recycled materials.</li>
        <li><strong>Digitalization and AI:</strong> AI-powered predictive maintenance, automated quality control systems, and smart factory solutions are optimizing production processes and reducing waste.</li>
        <li><strong>Advanced High-Strength Steels (AHSS):</strong> Development of new steel grades with superior strength-to-weight ratios, crucial for automotive and construction industries aiming for lighter and safer products.</li>
        <li><strong>Circular Economy:</strong> Enhanced efforts in recycling and reusing steel products to minimize environmental impact and conserve natural resources.</li>
      </ul>
      <figure class="my-6">
        <img src="https://picsum.photos/seed/future-steel/800/400" alt="Futuristic steel manufacturing plant" class="rounded-lg shadow-md mx-auto" data-ai-hint="modern factory" />
        <figcaption class="text-sm text-center text-muted-foreground mt-2">AI and robotics are revolutionizing steel production.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold my-4">SteelBalls Co.'s Commitment to Innovation</h2>
      <p class="mb-4 leading-relaxed">At SteelBalls Co., we are actively investing in research and development to incorporate these trends into our operations. This includes optimizing our energy consumption, exploring greener raw materials, and implementing advanced analytics for quality assurance. Our goal is to provide our customers with not only the highest quality steel products but also a partnership that values sustainability and technological excellence.</p>
      <p class="leading-relaxed">The future of steel is bright and dynamic. Stay tuned to our blog for more updates on how SteelBalls Co. is contributing to this exciting evolution.</p>
    `,
    date: 'November 15, 2023',
    author: 'Industry Analyst',
    category: 'Industry News',
    imageSrc: 'https://picsum.photos/seed/blogpost3/800/400',
    imageHint: 'futuristic factory'
  },
  {
    id: 'bp004',
    title: 'Corrosion Resistance: Why Stainless Steel Balls Are a Superior Choice',
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: 'Delving into the science behind stainless steel\'s anti-corrosion properties and its advantages in harsh environments, including chemical and food processing industries.',
    content: `
      <p class="mb-4 text-lg leading-relaxed">Corrosion is a major concern in many industrial environments, leading to component failure, increased maintenance costs, and potential safety hazards. Stainless steel balls offer a robust solution due to their inherent corrosion resistance. This article explores the science behind this property and highlights the advantages of using stainless steel balls in demanding applications.</p>
      <h2 class="text-2xl font-semibold my-4">The Science of Stainless Steel</h2>
      <p class="mb-4 leading-relaxed">Stainless steel's remarkable resistance to corrosion is primarily due to its chromium content. When exposed to oxygen, chromium forms a thin, invisible, and self-healing passive layer of chromium oxide (Cr₂O₃) on the surface of the steel. This passive layer acts as a barrier, protecting the underlying iron from reacting with oxygen and moisture, which are the primary drivers of rust and other forms of corrosion.</p>
      <figure class="my-6">
        <img src="https://picsum.photos/seed/stainless-micro/800/400" alt="Microscopic view of stainless steel passive layer" class="rounded-lg shadow-md mx-auto" data-ai-hint="metal surface" />
        <figcaption class="text-sm text-center text-muted-foreground mt-2">The protective chromium oxide layer is key to stainless steel's durability.</figcaption>
      </figure>
      <h2 class="text-2xl font-semibold my-4">Advantages in Harsh Environments</h2>
      <ul class="list-disc list-inside mb-4 space-y-2 pl-4">
        <li><strong>Chemical Industry:</strong> Stainless steel balls can withstand exposure to a wide range of corrosive chemicals, making them ideal for pumps, valves, and mixing equipment.</li>
        <li><strong>Food Processing:</strong> Their non-reactive and easy-to-clean surface ensures hygiene and prevents contamination, crucial for food-grade applications.</li>
        <li><strong>Marine Applications:</strong> Resistance to saltwater corrosion makes them suitable for components used in marine environments.</li>
        <li><strong>Medical Devices:</strong> Biocompatibility and sterilizability are key advantages for stainless steel in medical instruments and implants.</li>
      </ul>
      <h2 class="text-2xl font-semibold my-4">Types of Stainless Steel Balls</h2>
      <p class="mb-4 leading-relaxed">Different grades of stainless steel (e.g., 304, 316, 440C) offer varying levels of corrosion resistance and mechanical properties. For instance, 316 stainless steel provides superior resistance to chlorides and is often used in marine or chemical processing applications, while 440C offers higher hardness for bearing applications. SteelBalls Co. provides a range of stainless steel balls to meet diverse needs.</p>
      <p class="leading-relaxed">Choosing stainless steel balls can significantly enhance the longevity and reliability of your equipment, especially in corrosive conditions. Consult with our experts at SteelBalls Co. to determine the best stainless steel grade for your specific requirements.</p>
    `,
    date: 'November 28, 2023',
    author: 'Materials Scientist',
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/800/400',
    imageHint: 'shiny metal'
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    // TODO: Create a proper 404 page
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
      <main role="main" className="flex-grow bg-background py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button variant="outline" asChild className="mb-8 group">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>

          <article className="bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
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
                className="w-full h-auto object-cover rounded-lg shadow-md"
                priority // Prioritize loading the main blog image
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
                <span>Discuss this post</span> {/* Placeholder for comments or social discussion */}
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
      <WhatsAppChat phoneNumber="+1234567890" message={`Hi SteelBalls Co. I have a question about the blog post: ${post.title}`} />
    </div>
  );
}

// Add some basic styling for prose content if not already handled globally
// This can be added to globals.css or a specific component style
/*
.prose h2 { @apply text-2xl font-semibold mt-8 mb-4; }
.prose p { @apply mb-4 leading-relaxed; }
.prose ul, .prose ol { @apply list-inside mb-4 pl-4 space-y-1; }
.prose blockquote { @apply border-l-4 border-primary pl-4 italic my-6 py-2 text-muted-foreground; }
.prose figure { @apply my-6; }
.prose figcaption { @apply text-sm text-center text-muted-foreground mt-2; }
.prose img { @apply rounded-lg shadow-md mx-auto; }
*/
