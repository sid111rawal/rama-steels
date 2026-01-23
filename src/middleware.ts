import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware for SEO optimizations:
 * 1. Redirect www to non-www (backup for Vercel config)
 * 2. Handle soft 404 from SearchAction template URL
 * 3. Ensure proper canonical URL handling
 */
export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const host = request.headers.get('host') || '';

    // 1. Redirect www to non-www (backup for vercel.json)
    if (host.startsWith('www.')) {
        const nonWwwHost = host.replace('www.', '');
        url.host = nonWwwHost;
        return NextResponse.redirect(url, 301);
    }

    // 2. Handle soft 404: Redirect SearchAction template URL to clean products page
    // Google is literally crawling "/products?search={search_term_string}"
    if (url.pathname === '/products') {
        const searchParam = url.searchParams.get('search');

        // If search param is the literal template string, redirect to clean /products
        if (searchParam === '{search_term_string}' ||
            searchParam === '%7Bsearch_term_string%7D' ||
            searchParam === 'search_term_string' ||
            searchParam === '') {
            url.searchParams.delete('search');
            // Also delete empty category params
            if (url.searchParams.get('category') === '') {
                url.searchParams.delete('category');
            }
            return NextResponse.redirect(new URL('/products', request.url), 301);
        }
    }

    // 3. Handle HTTP to HTTPS (Vercel handles this, but extra safety)
    // Note: This is handled at the edge by Vercel, so we don't need to do it here

    return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, robots.txt, sitemap.xml (static files)
         * - api routes
         */
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|api).*)',
    ],
};
