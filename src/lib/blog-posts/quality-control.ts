import { siteConfig } from '@/config/site';
import type { BlogPost } from '../data';

export const qualityControlPosts: BlogPost[] = [
  {
    id: 'bp006',
    title: `A Guide to Precision Gauges: Ensuring Quality Control with ${siteConfig.name} in India`,
    slug: 'precision-gauges-guide',
    excerpt: `Learn about the importance of precision gauges like Plug Gauges and Custom Made Gauges in manufacturing. ${siteConfig.name} offers reliable solutions for Indian industries.`,
    date: 'December 22, 2023',
    author: `Metrology Experts at ${siteConfig.name}`,
    category: 'Quality Control',
    imageSrc: 'https://picsum.photos/seed/blogpost6/800/400',
    content: `<p>Precision gauges are indispensable tools in modern manufacturing, ensuring that components meet strict dimensional tolerances and quality standards. ${siteConfig.name} is a trusted supplier of high-quality gauges in India.</p><h3>Why are Precision Gauges Crucial for Manufacturing?</h3><ul><li><strong>Ensuring Interchangeability:</strong> Gauges verify that parts are made to the correct size, allowing for easy assembly and replacement.</li><li><strong>Maintaining Quality Standards:</strong> They help identify and reject out-of-spec components, preventing costly rework or product failures.</li><li><strong>Optimizing Manufacturing Processes:</strong> Regular use of gauges can help monitor process stability and indicate when adjustments are needed.</li></ul><h3>Types of Gauges from ${siteConfig.name}:</h3><ul><li><strong>Plug Gauges:</strong> Used to check the internal diameter of holes (Go/No-Go).</li><li><strong>Ring Gauges:</strong> Used to check the external diameter of shafts or cylindrical parts. (While not explicitly listed as a product, it's a common gauge type)</li><li><strong>Custom Made Gauges:</strong> ${siteConfig.name} can design and manufacture gauges for specific, unique measurement tasks, tailored to your industry needs in Agra or anywhere in India.</li><li><strong>Type Og Gauge and General Gauges:</strong> We also provide specialized gauges like the 'Type Og Gauge' and other general measurement tools.</li></ul><p>Contact ${siteConfig.name} for expert advice on selecting the right precision gauges to enhance your quality control processes and ensure product excellence.</p>`,
    keywords: ['precision gauges India', 'quality control tools', 'plug gauges manufacturer', 'custom gauges Agra', 'industrial metrology', `${siteConfig.name} quality assurance`, 'Type Og Gauge', ...siteConfig.keywords.slice(0,8)],
    relatedProductIds: ['gg-001', 'gg-002', 'gg-003', 'gg-004']
  },
  {
    id: 'bp013',
    title: `Guide to Using Plug Gauges for Quality Control | ${siteConfig.name}`,
    slug: 'plug-gauges-quality-control',
    excerpt: `Learn how plug gauges from ${siteConfig.name} ensure dimensional accuracy in manufacturing. A crucial tool for quality control in Indian industries.`,
    date: 'April 02, 2024',
    author: `Metrology Team at ${siteConfig.name}`,
    category: 'Quality Control',
    imageSrc: 'https://picsum.photos/seed/blogpost13/800/400',
    content: `<p>Plug gauges are essential metrology tools used to verify the accuracy of internal hole diameters. ${siteConfig.name}, a leading gauge manufacturer in India, provides high-quality plug gauges for robust quality control.</p>
             <h3>What are Plug Gauges?</h3>
             <p>Plug gauges are typically cylindrical and come in pairs: a "Go" gauge and a "No-Go" gauge. The "Go" gauge represents the minimum acceptable hole diameter, and the "No-Go" gauge represents the maximum acceptable diameter.</p>
             <h3>How to Use Plug Gauges:</h3>
             <ul>
               <li><strong>"Go" Gauge:</strong> Should enter the hole with minimal force. If it doesn't fit, the hole is too small.</li>
               <li><strong>"No-Go" Gauge:</strong> Should not enter the hole, or only enter very slightly. If it fully enters, the hole is too large.</li>
             </ul>
             <p>Proper use ensures parts meet design specifications, crucial for interchangeability and assembly. ${siteConfig.name} also offers Custom Made Gauges for specific needs.</p>`,
    keywords: ['plug gauges', 'go-no-go gauges', 'quality control tools', 'dimensional inspection', 'manufacturing precision', 'Rama & Sons gauges', 'metrology India', 'custom made gauges', ...siteConfig.keywords.slice(0,7)],
    relatedProductIds: ['gg-003', 'gg-002', 'gg-001']
  }
];

