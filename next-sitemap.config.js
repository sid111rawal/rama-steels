// @ts-check
/** @type {import('next-sitemap').IConfig} */

const { siteConfig } = require('./src/config/site-cjs.js'); // Use a CJS version for build scripts
const { productsData, blogPostsData } = require('./src/lib/data-cjs.js'); // Use a CJS version for build scripts


module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true, // (Optional) Generate robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Add disallow rules if needed, e.g.,
      // { userAgent: '*', disallow: '/admin' },
    ],
    additionalSitemaps: [
      `${siteConfig.url}/sitemap.xml`, // If you have multiple sitemaps
    ],
  },
  // (Optional) Exclude routes from sitemap
  exclude: ['/admin', '/404'], // Example exclusions
  // (Optional) Add custom paths
  additionalPaths: async (config) => {
    const productPaths = productsData.map(product => ({
      loc: `/products/${product.id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    const blogPostPaths = blogPostsData.map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    }));

    return [...productPaths, ...blogPostPaths];
  },
};
