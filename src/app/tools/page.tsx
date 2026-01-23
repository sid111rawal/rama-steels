'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { Calculator } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

const tools = [
    {
        id: 'price-calculator',
        name: 'Price Calculator',
        description: 'Calculate pricing for spherical metal balls based on size, quantity, and rate. Includes MOQ and minimum billing support.',
        icon: Calculator,
        href: '/tools/price-calculator',
    },
];

export default function ToolsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
                <Header />
            </Suspense>
            <main className="flex-1 py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Tools
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Free online calculators and tools to help you estimate pricing and specifications for our products.
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {tools.map((tool) => (
                            <Link key={tool.id} href={tool.href} className="group">
                                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group-hover:scale-[1.02]">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <tool.icon className="h-6 w-6" />
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                {tool.name}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {tool.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <Suspense fallback={null}>
                <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about your products.`} />
            </Suspense>
        </div>
    );
}
