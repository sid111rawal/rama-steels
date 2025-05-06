
'use client'; // Added for useState
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Users, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppChat from '@/components/whatsapp-chat';
import { siteConfig } from '@/config/site';
import React, { useState } from 'react'; // Import useState

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", imageSrc: "https://picsum.photos/seed/team1/300/300", imageHint: "man portrait" },
  { name: "Jane Smith", role: "Head of Engineering", imageSrc: "https://picsum.photos/seed/team2/300/300", imageHint: "woman portrait" },
  { name: "Robert Brown", role: "Sales Director", imageSrc: "https://picsum.photos/seed/team3/300/300", imageHint: "man smiling" },
  { name: "Emily White", role: "Operations Manager", imageSrc: "https://picsum.photos/seed/team4/300/300", imageHint: "woman professional" },
];

export default function AboutPage() {
  const [loadedTeamImages, setLoadedTeamImages] = useState<Record<string, boolean>>({});
  const [loadedVideoPlaceholder, setLoadedVideoPlaceholder] = useState(false);

  const handleTeamImageLoad = (name: string) => {
    setLoadedTeamImages(prev => ({ ...prev, [name]: true }));
  };

  const handleVideoPlaceholderLoad = () => {
    setLoadedVideoPlaceholder(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="about-hero" className="py-20 bg-secondary text-center fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">About {siteConfig.name}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 20 years of experience in steel manufacturing, we combine innovation with quality to deliver the best products in the industry.
            </p>
          </div>
        </section>

        <section id="company-values" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: "Quality First", description: "We are committed to providing products that meet the highest standards of quality and precision." },
                { icon: Zap, title: "Innovation Driven", description: "Continuously improving our processes and products through research and development." },
                { icon: Users, title: "Customer Focus", description: "Building long-lasting relationships by understanding and exceeding customer expectations." }
              ].map((value, index) => (
                <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-16 sm:py-20 bg-secondary fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="text-center overflow-hidden group fade-in-element" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      style={{objectFit: 'cover'}}
                      className={`transition-all duration-500 ease-in-out group-hover:scale-105 ${loadedTeamImages[member.name] ? 'img-loaded' : 'img-loading'}`}
                      data-ai-hint={member.imageHint}
                      onLoad={() => handleTeamImageLoad(member.name)}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="company-video" className="py-16 sm:py-20 bg-background fade-in-element">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Story in Motion</h2>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-muted rounded-lg shadow-xl overflow-hidden">
              {/* Placeholder for YouTube embed. For now, a static image representing a video player. */}
              <div className="flex items-center justify-center h-full">
                 <Image
                    src="https://picsum.photos/seed/video-placeholder/800/450"
                    alt="Company video placeholder"
                    width={800}
                    height={450}
                    className={`object-cover transition-opacity duration-500 ease-in-out ${loadedVideoPlaceholder ? 'img-loaded' : 'img-loading'}`}
                    data-ai-hint="factory machinery"
                    onLoad={handleVideoPlaceholderLoad}
                  />
              </div>
            </div>
             <p className="text-center mt-4 text-muted-foreground">Watch our company video to learn more about our manufacturing process and commitment to excellence.</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat message={`Hi ${siteConfig.name}. I'd like to know more about your company.`} />
    </div>
  );
}
