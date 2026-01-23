// @ts-check
/** @type {import('next-sitemap').IConfig} */

const { siteConfig } = require('./src/config/site-cjs.js');
const { productsData, blogPostsData } = require('./src/lib/data-cjs.js');


module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Block search and filter URLs to prevent duplicate content
      { userAgent: '*', disallow: '/products?search=' },
      { userAgent: '*', disallow: '/products?category=' },
      { userAgent: '*', disallow: '/products?product=' },
      // Block SearchAction template URL (soft 404 fix)
      { userAgent: '*', disallow: '/products?search={search_term_string}' },
      { userAgent: '*', disallow: '/products?search=%7Bsearch_term_string%7D' },
    ],
    additionalSitemaps: [],
  },
  // Exclude routes from sitemap
  exclude: ['/admin', '/404', '/api/*', '/products?*'], // Exclude query string routes
  // Add custom paths
  additionalPaths: async (config) => {
    try {
      const productPaths = productsData.map(product => ({
        loc: `/products/${product.id}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }));

      const blogPostPaths = blogPostsData.map(post => ({
        loc: `/blog/${post.slug}`,
        lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      }));

      const staticPagePaths = [
        { loc: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
        { loc: '/about', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
        { loc: '/products', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
        { loc: '/blog', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
        { loc: '/faq', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
        { loc: '/contact', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
        { loc: '/tools', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
        { loc: '/tools/price-calculator', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
      ];

      return [...staticPagePaths, ...productPaths, ...blogPostPaths];
    } catch (error) {
      console.error('Error generating sitemap paths:', error);
      return [];
    }
  },
  // (Optional) You can transform paths if needed
  // transform: async (config, path) => {
  //   return {
  //     loc: path, // Default transform
  //     changefreq: config.changefreq,
  //     priority: config.priority,
  //     lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //     alternateRefs: config.alternateRefs ?? [],
  //   }
  // },
};
