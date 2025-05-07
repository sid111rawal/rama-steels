'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet'; 
import { Menu, Search as SearchIcon } from 'lucide-react'; 
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import React, { useState } from 'react'; 
import { Input } from '@/components/ui/input'; 

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
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(''); 
      setSheetOpen(false); 
    }
  };

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        isMobile ? (
          <SheetClose asChild key={link.href} onClick={() => setSheetOpen(false)}>
            <Button
              variant="ghost"
              asChild
              className={`w-full justify-start text-lg py-3 ${pathname === link.href && !link.isHashLink ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'} transition-colors duration-200`}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          </SheetClose>
        ) : (
          <Button
            key={link.href} 
            variant="ghost"
            asChild
            className={`${pathname === link.href && !link.isHashLink ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'} transition-colors duration-200`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        )
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
              width={75}
              height={75}
              className="rounded-full group-hover:opacity-80 transition-opacity duration-300"
              data-ai-hint="company logo"
              placeholder="blur"
              priority // Logo is critical for LCP
            />
            <span className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <NavLinksContent /> 
            <form onSubmit={handleSearchSubmit} className="flex items-center relative ml-2">
              <Input
                type="search"
                name="product-search-desktop"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="h-9 pl-3 pr-8 w-40 lg:w-56 rounded-md border focus:border-primary"
                aria-label="Search products"
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit search">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for the site.</SheetDescription>
                
                <form onSubmit={handleSearchSubmit} className="relative mt-6 mb-3">
                  <Input
                    type="search"
                    name="product-search-mobile"
                    placeholder="Search products..."
                    value={searchTerm} 
                    onChange={handleSearchChange}
                    className="h-10 pl-3 pr-10 w-full rounded-md border focus:border-primary"
                    aria-label="Search products"
                  />
                  <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit search">
                    <SearchIcon className="h-5 w-5" />
                  </Button>
                </form>
                
                <nav className="flex flex-col space-y-3">
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
