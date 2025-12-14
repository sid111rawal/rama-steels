import { siteConfig } from '@/config/site';
import type { BlogPost } from '../data';

export const useCasesPosts: BlogPost[] = [
  {
    id: 'bp005',
    title: `Top 5 Industrial Applications of High-Quality Steel Balls from ${siteConfig.name}`,
    slug: 'steel-ball-applications',
    excerpt: `Discover the diverse uses of precision steel balls by ${siteConfig.name}, from automotive bearings to industrial machinery, driving efficiency across Indian sectors.`,
    date: 'December 10, 2023',
    author: `Application Engineers at ${siteConfig.name}`,
    category: 'Use Cases',
    imageSrc: 'https://picsum.photos/seed/blogpost5/800/400',
    content: `<p>High-quality steel balls are fundamental components in a vast array of industrial and commercial applications. At ${siteConfig.name}, we manufacture steel balls, such as our EN-31 and AISI-1010 grades, that meet the rigorous demands of modern machinery and equipment.</p><h3>Key Application Areas for Steel Balls:</h3><ol><li><strong>Bearings:</strong> Perhaps the most common application, steel balls are essential in ball bearings, enabling smooth and low-friction motion in everything from automotive wheels to industrial motors and household appliances. ${siteConfig.name} specializes in bearing-quality steel balls like 100CR6 and AISI-52100.</li><li><strong>Automotive Industry:</strong> Used in steering systems, seatbelt mechanisms, and various powertrain components. Our steel balls contribute to the reliability and safety of vehicles across India.</li><li><strong>Grinding Media:</strong> In ball mills, steel balls are used as grinding media to crush or grind materials into finer powders for industries like cement, mining, and pharmaceuticals.</li><li><strong>Valves:</strong> Steel balls are critical in various types of check valves and ball valves, controlling the flow of liquids and gases in industrial pipelines and hydraulic systems.</li><li><strong>Freewheel Mechanisms:</strong> Used in bicycle freewheels, clutches, and other mechanisms requiring one-way motion. Our EN-9 balls are also suitable for some of these applications.</li></ol><p>Explore the full range of steel balls at ${siteConfig.name} and find the perfect solution for your specific application needs in India.</p>`,
    keywords: ['steel ball uses', 'industrial steel ball applications', 'bearing steel balls India', 'automotive steel balls', 'grinding media supplier', `${siteConfig.name} products`, 'EN31 applications', 'AISI 1010 uses', ...siteConfig.keywords.slice(0,7)],
    relatedProductIds: ['fb-001', 'fb-002', 'fb-003', 'fb-005', 'fb-007']
  },
  {
    id: 'bp009',
    title: `The Role of Non-Metallic Balls in Modern Industry: Insights from ${siteConfig.name}`,
    slug: 'non-metallic-balls-industrial-role',
    excerpt: `Discover the applications of non-metallic balls like Ceramic, Glass, and Plastic balls. ${siteConfig.name} provides high-performance solutions for diverse Indian industries.`,
    date: 'February 02, 2024',
    author: `Polymer & Ceramic Specialists at ${siteConfig.name}`,
    category: 'Use Cases',
    imageSrc: 'https://picsum.photos/seed/blogpost9/800/400',
    content: `<p>Non-metallic balls offer distinct advantages in applications where metal balls may not be suitable. ${siteConfig.name} is a leading Indian supplier of various non-metallic balls.</p><h3>Popular Non-Metallic Ball Materials & Applications:</h3><ul><li><strong>Ceramic Balls (e.g., Alumina, Silicon Nitride):</strong> Offer high hardness, excellent wear resistance, high-temperature stability, and electrical insulation. Used in precision bearings, valves, and grinding media. Our Silicon Nitride balls are top-tier for demanding applications.</li><li><strong>Glass Balls:</strong> Provide good corrosion resistance and are often used in check valves, flow meters, and bearings in corrosive environments.</li><li><strong>Plastic Balls (e.g., Nylon, PP, PTFE, POM):</strong> Lightweight, corrosion-resistant, and offer low friction. Ideal for light-load bearings, flow indicators, and chemical applications.</li><li><strong>Ruby Balls:</strong> Extremely hard and wear-resistant, used in precision measuring instruments, styli, and jewel bearings.</li></ul><p>From Plastic balls for general use to high-performance Ceramic balls, ${siteConfig.name} supplies the right non-metallic solution for your specific industrial requirements in India.</p>`,
    keywords: ['non-metallic balls', 'ceramic balls India', 'glass balls supplier', 'plastic balls manufacturer', 'ruby balls applications', 'silicon nitride balls', `${siteConfig.name} industrial insights`, ...siteConfig.keywords.slice(0,11)],
    relatedProductIds: ['nmb-001', 'nmb-002', 'nmb-003', 'nmb-004', 'nmb-005']
  }
];

