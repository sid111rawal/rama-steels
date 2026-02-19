import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for SEO optimizations:
 * 1. Handle soft 404 from SearchAction template URL
 *
 * Note: www → non-www redirect should be configured in Vercel Dashboard → Domains
 */
export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    // Handle soft 404: Redirect SearchAction template URL to clean products page
    // Google is literally crawling "/products?search={search_term_string}"
    if (url.pathname === '/products') {
        const searchParam = url.searchParams.get('search');

        // If search param is the literal template string, redirect to clean /products
        if (searchParam === '{search_term_string}' ||
            searchParam === '%7Bsearch_term_string%7D' ||
            searchParam === 'search_term_string' ||
            searchParam === '') {
            return NextResponse.redirect(new URL('/products', request.url), 301);
        }
    }

    return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
    matcher: [
        // Only match products page to handle SearchAction template
        '/products',
    ],
};
