// @ts-check
/** @type {import('next-sitemap').IConfig} */

const { siteConfig } = require('./src/config/site-cjs.js'); 
const { productsData, blogPostsData } = require('./src/lib/data-cjs.js');


module.exports = {
  siteUrl: siteConfig.siteUrl,
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Add disallow rules if needed, e.g., for admin or private areas
      // { userAgent: '*', disallow: '/admin/' }, 
    ],
    additionalSitemaps: [
      `${siteConfig.siteUrl}/sitemap.xml`, 
      // If you have other sitemaps (e.g., for images, videos), add them here
      // `${siteConfig.siteUrl}/image-sitemap.xml`,
    ],
  },
  // (Optional) Exclude routes from sitemap
  exclude: ['/admin', '/404', '/api/*'], // Example exclusions, added /api/*
  // (Optional) Add custom paths or modify existing ones
  additionalPaths: async (config) => {
    const productPaths = productsData.map(product => ({
      loc: `/products/${product.id}`,
      lastmod: new Date().toISOString(), // Or use a product-specific update date if available
      changefreq: 'weekly', // How often product details might change
      priority: 0.8, // Higher priority for product pages
    }));

    const blogPostPaths = blogPostsData.map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
      changefreq: 'monthly', // How often blog posts might be updated
      priority: 0.7, // Slightly lower than products, but still important
    }));
    
    const staticPagePaths = [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/about', changefreq: 'monthly', priority: 0.7 },
      { loc: '/products', changefreq: 'weekly', priority: 0.9 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.7 },
      // Add other static pages if any
    ];

    return [...staticPagePaths, ...productPaths, ...blogPostPaths];
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
