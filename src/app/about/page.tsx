import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Users, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WhatsAppChat from '@/components/whatsapp-chat';

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", imageSrc: "https://picsum.photos/seed/team1/300/300", imageHint: "man portrait" },
  { name: "Jane Smith", role: "Head of Engineering", imageSrc: "https://picsum.photos/seed/team2/300/300", imageHint: "woman portrait" },
  { name: "Robert Brown", role: "Sales Director", imageSrc: "https://picsum.photos/seed/team3/300/300", imageHint: "man smiling" },
  { name: "Emily White", role: "Operations Manager", imageSrc: "https://picsum.photos/seed/team4/300/300", imageHint: "woman professional" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main role="main" className="flex-grow">
        <section id="about-hero" className="py-20 bg-secondary text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">About SteelBalls Co.</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 20 years of experience in steel manufacturing, we combine innovation with quality to deliver the best products in the industry.
            </p>
          </div>
        </section>

        <section id="company-values" className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are committed to providing products that meet the highest standards of quality and precision.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Innovation Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Continuously improving our processes and products through research and development.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Building long-lasting relationships by understanding and exceeding customer expectations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="py-16 sm:py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <Card key={member.name} className="text-center overflow-hidden group">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={member.imageSrc} 
                      alt={member.name} 
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={member.imageHint}
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

        <section id="company-video" className="py-16 sm:py-20 bg-background">
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
                    className="object-cover"
                    data-ai-hint="factory machinery"
                  />
              </div>
            </div>
             <p className="text-center mt-4 text-muted-foreground">Watch our company video to learn more about our manufacturing process and commitment to excellence.</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat phoneNumber="+1234567890" message="Hi SteelBalls Co. I'd like to know more about your company." />
    </div>
  );
}
