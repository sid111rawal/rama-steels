'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Search as SearchIcon, X as ClearIcon } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import type { Product } from '@/lib/data';
import { productsData } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/#testimonials', label: 'Testimonials', isHashLink: true },
  { href: '/#inquiry', label: 'Inquiry', isHashLink: true },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const MAX_SUGGESTIONS = 7;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isDesktopSuggestionsVisible, setIsDesktopSuggestionsVisible] = useState(false);
  const [isMobileSuggestionsVisible, setIsMobileSuggestionsVisible] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const desktopSearchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setSuggestions([]);
      setIsDesktopSuggestionsVisible(false);
      setIsMobileSuggestionsVisible(false);
      return;
    }

    const lowerCaseTerm = term.toLowerCase();
    const filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(lowerCaseTerm) ||
      (product.altName && product.altName.toLowerCase().includes(lowerCaseTerm))
    ).slice(0, MAX_SUGGESTIONS);

    setSuggestions(filteredProducts);
    // Visibility will be handled by onFocus and click-outside
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setIsDesktopSuggestionsVisible(false);
    setIsMobileSuggestionsVisible(false);
  };
  
  const handleSearchSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      clearSearch();
      setSheetOpen(false); 
    }
  };

  const handleSuggestionClick = (productId: string) => {
    router.push(`/products/${productId}`);
    clearSearch();
    setSheetOpen(false);
  };
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopSearchContainerRef.current && !desktopSearchContainerRef.current.contains(event.target as Node)) {
        setIsDesktopSuggestionsVisible(false);
      }
      if (mobileSearchContainerRef.current && !mobileSearchContainerRef.current.contains(event.target as Node)) {
        setIsMobileSuggestionsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        isMobile ? (
          <SheetClose asChild key={link.href} >
            <Button
              variant="ghost"
              asChild
              onClick={() => setSheetOpen(false)} // Close sheet on link click
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

  const renderSuggestions = (isVisible: boolean, setVisibility: (visible: boolean) => void) => {
    if (!isVisible || searchTerm.trim() === '') return null;

    return (
      <div className="absolute top-full left-0 right-0 z-[60] mt-1 bg-background border border-border rounded-md shadow-lg max-h-80 overflow-y-auto">
        {suggestions.length > 0 ? (
          <ul>
            {suggestions.map(product => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(product.id)}
                  className="w-full text-left p-3 hover:bg-accent transition-colors text-sm"
                >
                  {product.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-3 text-sm text-muted-foreground">No products found for "{searchTerm}"</p>
        )}
      </div>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <nav role="navigation" aria-label="Main Navigation" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group mr-2 sm:mr-6">
            <Image
              src={siteConfig.ogImage}
              alt={`${siteConfig.name} Logo`}
              width={55} 
              height={55}
              className="rounded-full group-hover:opacity-80 transition-opacity duration-300"
              data-ai-hint="company logo"
              placeholder="blur"
              priority 
            />
            <span className="text-lg sm:text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300 whitespace-nowrap">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-grow justify-center">
            <NavLinksContent />
          </div>
          
          <div className="hidden md:flex items-center space-x-2" ref={desktopSearchContainerRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center relative">
              <Input
                type="search"
                name="product-search-desktop"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => searchTerm.trim() && setIsDesktopSuggestionsVisible(true)}
                className="h-9 pl-3 pr-8 w-36 lg:w-48 rounded-md border focus:border-primary"
                aria-label="Search products"
                autoComplete="off"
              />
              {searchTerm && (
                <Button type="button" variant="ghost" size="icon" onClick={clearSearch} className="absolute right-6 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Clear search">
                  <ClearIcon className="h-4 w-4" />
                </Button>
              )}
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit search">
                <SearchIcon className="h-4 w-4" />
              </Button>
              {renderSuggestions(isDesktopSuggestionsVisible, setIsDesktopSuggestionsVisible)}
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
                <SheetHeader className="mb-4">
                    <SheetTitle className="text-2xl font-semibold text-primary">{siteConfig.name}</SheetTitle>
                    <SheetDescription className="sr-only">Main menu and search</SheetDescription>
                </SheetHeader>

                <div ref={mobileSearchContainerRef}>
                  <form onSubmit={handleSearchSubmit} className="relative mt-6 mb-3">
                    <Input
                      type="search"
                      name="product-search-mobile"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onFocus={() => searchTerm.trim() && setIsMobileSuggestionsVisible(true)}
                      className="h-10 pl-3 pr-10 w-full rounded-md border focus:border-primary"
                      aria-label="Search products"
                      autoComplete="off"
                    />
                     {searchTerm && (
                        <Button type="button" variant="ghost" size="icon" onClick={clearSearch} className="absolute right-8 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Clear search">
                          <ClearIcon className="h-5 w-5" />
                        </Button>
                      )}
                    <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit search">
                      <SearchIcon className="h-5 w-5" />
                    </Button>
                     {renderSuggestions(isMobileSuggestionsVisible, setIsMobileSuggestionsVisible)}
                  </form>
                </div>
                

                <nav className="flex flex-col space-y-3 mt-4">
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
