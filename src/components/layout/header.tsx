
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/#testimonials', label: 'Testimonials', isHashLink: true },
  { href: '/#inquiry', label: 'Inquiry', isHashLink: true },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          className={`
            ${isMobile ? 'w-full justify-start text-lg py-3' : ''}
            ${pathname === link.href && !link.isHashLink ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}
            transition-colors duration-200
          `}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <nav role="navigation" aria-label="Main Navigation" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src={siteConfig.ogImage}
              alt={`${siteConfig.name} Logo`}
              width={50} // Increased logo width
              height={50} // Increased logo height
              className="rounded-full group-hover:opacity-80 transition-opacity duration-300"
              data-ai-hint="company logo"
              placeholder="blur"
            />
            <span className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <NavLinksContent />
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
                 {/* Added SheetTitle and SheetDescription for accessibility */}
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for the site.</SheetDescription>
                <nav className="flex flex-col space-y-3 mt-6">
                  <NavLinksContent isMobile={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
