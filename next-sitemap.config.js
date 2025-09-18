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
      // Add disallow rules if needed, e.g., for admin or private areas
      // { userAgent: '*', disallow: '/admin/' }, 
    ],
    // Remove circular reference - next-sitemap will handle the main sitemap automatically
    // additionalSitemaps: [
    //   `${siteConfig.url}/sitemap.xml`, 
    // ],
  },
  // (Optional) Exclude routes from sitemap
  exclude: ['/admin', '/404', '/api/*'], // Example exclusions, added /api/*
  // (Optional) Add custom paths or modify existing ones
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
