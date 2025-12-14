'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Search as SearchIcon, X as ClearIcon } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import type { Product } from '@/lib/data';
import { productsData } from '@/lib/data';

const mainPageNavLinksConfig = [
  { href: '/', label: 'Home', isPageLink: true },
  { href: '/products', label: 'Products', isPageLink: true },
  { href: '/#testimonials', label: 'Testimonials', isHashLink: true, sectionId: 'testimonials' },
  { href: '/about', label: 'About Us', isPageLink: true },
  { href: '/faq', label: 'FAQ', isPageLink: true },
  { href: '/blog', label: 'Blog', isPageLink: true },
];

const MAX_SUGGESTIONS = 7;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams(); // To read existing search params if any

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isDesktopSuggestionsVisible, setIsDesktopSuggestionsVisible] = useState(false);
  const [isMobileSuggestionsVisible, setIsMobileSuggestionsVisible] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const headerRef = useRef<HTMLElement>(null);


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
     if (document.activeElement === event.target) { // Check if the input is focused
        if (desktopSearchContainerRef.current?.contains(event.target as Node)) {
            setIsDesktopSuggestionsVisible(true);
        }
        if (mobileSearchContainerRef.current?.contains(event.target as Node)) {
            setIsMobileSuggestionsVisible(true);
        }
    }
  };

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setSuggestions([]);
    setIsDesktopSuggestionsVisible(false);
    setIsMobileSuggestionsVisible(false);
  }, []);
  
  const handleSearchSubmit = useCallback((event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (searchTerm.trim()) {
      const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
      currentParams.set('search', searchTerm.trim());
      router.push(`/products?${currentParams.toString()}`);
      clearSearch(); // Clear search term and suggestions
      if (sheetOpen) setSheetOpen(false); // Close mobile sheet if open
    }
  }, [searchTerm, router, searchParams, clearSearch, sheetOpen]);

  const handleSuggestionClick = useCallback((productId: string) => {
    router.push(`/products/${productId}`);
    clearSearch();
    if (sheetOpen) setSheetOpen(false);
  }, [router, clearSearch, sheetOpen]);
  
  const desktopSearchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(''); // Clear active section if not on homepage
      return;
    }

    const handleScroll = () => {
      let currentActiveSection = '';
      const headerHeight = headerRef.current?.offsetHeight ?? 80; // 80px as fallback (h-20)
      const scrollY = window.scrollY;

      mainPageNavLinksConfig.forEach(link => {
        if (link.isHashLink && link.sectionId) {
          const section = document.getElementById(link.sectionId);
          if (section) {
            const sectionTop = section.offsetTop - headerHeight - 20; // Add some offset
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
              currentActiveSection = link.href;
            }
          }
        }
      });
      
      const firstHashSection = mainPageNavLinksConfig.find(l => l.isHashLink && l.sectionId);
      let firstHashSectionTop = Infinity; 
      if (firstHashSection && firstHashSection.sectionId) {
          const sectionElement = document.getElementById(firstHashSection.sectionId);
          if (sectionElement) {
            firstHashSectionTop = sectionElement.offsetTop - headerHeight;
          } else {
            // Fallback if the element is not found, might happen during initial render or if ID is incorrect
            // Setting to window.innerHeight can be a rough estimate, or a large number if sections are further down
             firstHashSectionTop = window.innerHeight; 
          }
      }


      if (!currentActiveSection && scrollY < firstHashSectionTop) {
        currentActiveSection = '/'; 
      }


      setActiveSection(currentActiveSection);
    };
    
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);


  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {mainPageNavLinksConfig.map((link) => {
        let isActive = false;
        if (pathname === '/') { 
          if (link.isHashLink) {
            isActive = activeSection === link.href;
          } else if (link.href === '/') {
            isActive = activeSection === '/' || activeSection === '' ;
          } else {
            isActive = pathname === link.href;
          }
        } else {
          isActive = link.isPageLink ? pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/') : false;
        }
        
        const buttonProps = {
          variant: "ghost" as const,
          onClick: () => {
            if (link.isHashLink && pathname === '/') {
              const sectionId = link.href.substring(link.href.lastIndexOf('#') + 1);
              const section = document.getElementById(sectionId);
              if (section) {
                const headerHeight = headerRef.current?.offsetHeight ?? 0;
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: sectionTop, behavior: 'smooth' });
              }
              if (isMobile) setSheetOpen(false);
            } else if (link.isHashLink && pathname !== '/') {
               // Construct absolute URL for hash links when not on homepage
              const absoluteUrl = new URL(link.href, siteConfig.url).toString();
              router.push(absoluteUrl);
              if (isMobile) setSheetOpen(false);
            } else {
              router.push(link.href);
              if (isMobile) setSheetOpen(false);
            }
          },
          className: `transition-colors duration-200 ${isMobile ? 'w-full justify-start text-lg py-3' : ''} ${isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`,
          'aria-current': (isActive ? 'page' : undefined) as 'page' | undefined,
        };

        return (
          isMobile ? (
            <SheetClose asChild key={link.href}>
              <Button {...buttonProps} aria-label={`Navigate to ${link.label}`}>
                {link.label}
              </Button>
            </SheetClose>
          ) : ( // For desktop links
             <Button key={link.href} {...buttonProps} asChild={link.isPageLink || (link.isHashLink && pathname !== '/')} aria-label={`Navigate to ${link.label}`}>
              {link.isPageLink || (link.isHashLink && pathname !== '/') ? <Link href={link.href}>{link.label}</Link> : <>{link.label}</>}
            </Button>
          )
        );
      })}
    </>
  );

  const renderSuggestions = (isVisible: boolean) => {
    if (!isVisible || searchTerm.trim() === '' || suggestions.length === 0) return null;

    return (
      <div className="absolute top-full left-0 right-0 z-[60] mt-1 bg-background border border-border rounded-md shadow-lg max-h-80 overflow-y-auto">
        <ul>
          {suggestions.map(product => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => handleSuggestionClick(product.id)}
                className="w-full text-left p-3 hover:bg-accent transition-colors text-sm"
                aria-label={`View product: ${product.name}`}
              >
                {product.name}
              </button>
            </li>
          ))}
           {suggestions.length > 0 && searchTerm.trim() && (
             <li>
                <button
                    type="button"
                    onClick={() => handleSearchSubmit()}
                    className="w-full text-left p-3 hover:bg-accent transition-colors text-sm font-semibold text-primary"
                    aria-label={`Search for all products matching ${searchTerm}`}
                >
                    View all results for "{searchTerm}"
                </button>
            </li>
           )}
        </ul>
      </div>
    );
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <nav role="navigation" aria-label="Main Navigation" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group mr-6 md:mr-8" aria-label={`Go to ${siteConfig.name} homepage`}>
            <Image
              src={siteConfig.ogImage.src} 
              alt={`${siteConfig.name} Logo - Manufacturer of Steel Balls and Polish Media`}
              width={siteConfig.ogImage.width} 
              height={siteConfig.ogImage.height}
              className="rounded-full group-hover:opacity-80 transition-opacity duration-300 h-14 w-14 sm:h-16 sm:w-16" 
              placeholder="blur" 
              blurDataURL={siteConfig.ogImage.blurDataURL}
              priority 
              data-ai-hint="company logo"
            />
             <span className="text-lg sm:text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300 md:whitespace-nowrap">
              {siteConfig.name.split(' ')[0]} <span className="inline">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-grow justify-center flex-wrap">
            <NavLinksContent />
          </div>
          
          <div className="hidden md:flex items-center space-x-2 flex-wrap" ref={desktopSearchContainerRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center relative w-full md:w-auto">
              <Input
               type="search"
                name="product-search-desktop"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocusCapture={() => searchTerm.trim() && setIsDesktopSuggestionsVisible(true)} 
                className="h-9 pl-3 pr-8 w-36 lg:w-48 rounded-md border focus:border-primary"
                aria-label="Search products by name or type (e.g., EN31 steel balls, polish media)"
                autoComplete="off"
              />
              {searchTerm && (
                <Button type="button" variant="ghost" size="icon" onClick={clearSearch} className="absolute right-6 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Clear search input">
                  <ClearIcon className="h-4 w-4" />
                </Button>
              )}
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit product search">
                <SearchIcon className="h-4 w-4" />
              </Button>
              {renderSuggestions(isDesktopSuggestionsVisible)}
            </form>
            <DarkModeToggle />
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
              <Link href="/contact" aria-label="Navigate to Contact Us">
                Contact Us
              </Link>
            </Button>
          </div>


          <div className="md:hidden flex items-center">
            <DarkModeToggle />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2" aria-label="Open main menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
                <SheetHeader className="mb-4">
                    <SheetTitle className="text-2xl font-semibold text-primary">{siteConfig.name}</SheetTitle>
                    <SheetDescription className="sr-only">Main menu and product search for {siteConfig.name}</SheetDescription>
                </SheetHeader>

                <div ref={mobileSearchContainerRef}>
                  <form onSubmit={handleSearchSubmit} className="relative mt-6 mb-3">
                    <Input
                      type="search"
                      name="product-search-mobile"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      onFocusCapture={() => searchTerm.trim() && setIsMobileSuggestionsVisible(true)} 
                      className="h-10 pl-3 pr-10 w-full rounded-md border focus:border-primary"
                      aria-label="Search products by name or type (e.g., steel balls, polish media)"
                      autoComplete="off"
                    />
                     {searchTerm && (
                        <Button type="button" variant="ghost" size="icon" onClick={clearSearch} className="absolute right-8 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Clear search input">
                          <ClearIcon className="h-5 w-5" />
                        </Button>
                      )}
                    <Button type="submit" variant="ghost" size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-primary" aria-label="Submit product search">
                      <SearchIcon className="h-5 w-5" />
                    </Button>
                     {renderSuggestions(isMobileSuggestionsVisible)}
                  </form>
                </div>
                

                <nav className="flex flex-col space-y-3 mt-4" aria-label="Mobile navigation">
                  <NavLinksContent isMobile={true} />
                  <SheetClose asChild>
                    <Button asChild className="w-full justify-center text-lg py-3 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact" aria-label="Navigate to Contact Us">
                        Contact Us
                      </Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
