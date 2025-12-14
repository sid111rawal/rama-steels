import { siteConfig } from '@/config/site';
import type { BlogPost } from '../data';

export const companyInsightsPosts: BlogPost[] = [
  {
    id: 'bp007',
    title: `The ${siteConfig.name} Advantage: Your Premier Indian Manufacturer for Steel Products`,
    slug: 'rama-and-sons-advantage',
    excerpt: `Discover the quality, innovation, and customer satisfaction that make ${siteConfig.name} a leading manufacturer of steel balls, polish media, and gauges in India.`,
    date: 'January 05, 2024',
    author: `The ${siteConfig.name} Team`,
    category: 'Company Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost7/800/400',
    content: `<p>For over two decades, ${siteConfig.name} has been a cornerstone of the industrial supply chain in India, specializing in the manufacture of high-quality steel balls, diverse polish media, and precision gauges. Our headquarters in Agra serve as a hub for innovation and production, catering to a wide array of industries nationwide.</p><h3>Our Commitment to Excellence:</h3><ul><li><strong>Uncompromising Quality:</strong> We utilize premium raw materials and adhere to stringent manufacturing processes to ensure every product, from EN-31 steel balls to SS Straight Polish Pins, meets or exceeds international standards. Our in-house quality control is rigorous.</li><li><strong>Extensive Experience:</strong> With 20+ years in the industry, we possess deep knowledge and expertise in material science, manufacturing techniques, and application engineering.</li><li><strong>Customer-Centric Approach:</strong> At ${siteConfig.name}, we prioritize understanding our clients' unique requirements. We offer customized solutions like Custom Made Gauges and responsive support to ensure complete satisfaction.</li><li><strong>Made in India, For India (and Beyond):</strong> We are proud to contribute to India's manufacturing prowess, offering world-class products that compete globally.</li></ul><h3>Partner with ${siteConfig.name}</h3><p>Whether you need standard steel balls, specialized non-ferrous components, effective polishing media, or custom-designed gauges, ${siteConfig.name} is your reliable partner. We are dedicated to fostering long-term relationships built on trust, quality, and mutual success. Contact us to discuss your requirements.</p>`,
    keywords: [`${siteConfig.name} company`, 'steel ball manufacturer Agra', 'polish media supplier India', 'precision gauges', 'industrial steel products', 'why choose Rama & Sons', 'EN31 steel balls supplier', 'custom gauge manufacturer', ...siteConfig.keywords.slice(0,9)],
    relatedProductIds: ['fb-001', 'pma-001', 'gg-002']
  }
];

