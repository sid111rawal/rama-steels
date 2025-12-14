import { siteConfig } from '@/config/site';
import type { BlogPost } from '../data';

export const materialComparisonPosts: BlogPost[] = [
  {
    id: 'bp012',
    title: `Choosing Between Stainless Steel 304 and 316 Balls: ${siteConfig.name} Explains`,
    slug: 'ss304-vs-ss316-steel-balls',
    excerpt: `Understand the differences between SS 304 and SS 316 stainless steel balls for corrosion resistance and specific industrial uses. ${siteConfig.name} helps you choose.`,
    date: 'March 15, 2024',
    author: `Stainless Steel Experts at ${siteConfig.name}`,
    category: 'Material Comparison',
    imageSrc: 'https://picsum.photos/seed/blogpost12/800/400',
    content: `<p>When selecting stainless steel balls, choosing the right grade is critical for optimal performance, especially concerning corrosion resistance. ${siteConfig.name} offers both SS 304 and SS 316 balls, common grades in our SS-300 Series, to meet diverse Indian industrial needs.</p><h3>SS 304 Stainless Steel Balls:</h3><ul><li><strong>Composition:</strong> Primarily 18% chromium and 8% nickel.</li><li><strong>Corrosion Resistance:</strong> Good resistance to atmospheric corrosion, most oxidizing acids, sterilizing solutions, foodstuffs, and many organic chemicals.</li><li><strong>Applications:</strong> Widely used in food processing equipment, medical devices, valves, and general industrial components where moderate corrosion resistance is sufficient.</li></ul><h3>SS 316 Stainless Steel Balls:</h3><ul><li><strong>Composition:</strong> Typically 16-18% chromium, 10-14% nickel, and 2-3% molybdenum. The molybdenum is key to its enhanced corrosion resistance.</li><li><strong>Corrosion Resistance:</strong> Superior resistance to SS 304, especially against chlorides (like saltwater) and many industrial chemicals and solvents. Offers better resistance to pitting and crevice corrosion.</li><li><strong>Applications:</strong> Ideal for marine environments, chemical processing, pharmaceutical equipment, and applications exposed to harsh or corrosive substances.</li></ul><h3>Which Grade Should You Choose?</h3><p>For general-purpose applications with good corrosion resistance, SS 304 is often a cost-effective choice. However, if your application involves exposure to chlorides, harsh chemicals, or requires superior pitting resistance, SS 316 is the preferred option. ${siteConfig.name} can advise on the best stainless steel grade for your specific environment and operational requirements.</p>`,
    keywords: ['SS 304 steel balls', 'SS 316 steel balls', 'stainless steel comparison', 'corrosion resistant balls India', 'marine grade stainless steel', 'food grade steel balls', 'Rama & Sons materials', 'SS-300 Series', ...siteConfig.keywords.slice(0,6)],
    relatedProductIds: ['fb-004']
  },
  {
    id: 'bp015',
    title: `Non-Ferrous vs. Non-Metallic Balls: Which to Choose? Feat. ${siteConfig.name}`,
    slug: 'nonferrous-vs-nonmetallic-balls',
    excerpt: `Compare non-ferrous (Brass, Aluminium) and non-metallic (Ceramic, Plastic) balls for your specific application. ${siteConfig.name} offers a wide range in India.`,
    date: 'May 05, 2024',
    author: `Application Specialists at ${siteConfig.name}`,
    category: 'Material Comparison',
    imageSrc: 'https://picsum.photos/seed/blogpost15/800/400',
    content: `<p>Choosing between non-ferrous and non-metallic balls depends heavily on the application's demands. ${siteConfig.name} provides expert guidance and a diverse product range.</p>
             <h3>Non-Ferrous Metal Balls (e.g., Brass, Copper, Aluminium, Titanium):</h3>
             <ul>
               <li><strong>Properties:</strong> Generally offer good electrical/thermal conductivity, corrosion resistance (varies by alloy), and are non-magnetic (most types).</li>
               <li><strong>Applications:</strong> Electrical components, valves, heat exchangers, lightweight applications (Aluminium), high-strength/low-weight (Titanium).</li>
             </ul>
             <h3>Non-Metallic Balls (e.g., Plastic, Ceramic, Glass, Ruby):</h3>
             <ul>
               <li><strong>Properties:</strong> Lightweight (plastics), high hardness/wear resistance (ceramics, ruby), electrical insulation, excellent corrosion/chemical resistance.</li>
               <li><strong>Applications:</strong> Low-load bearings, check valves, flow indicators (plastics, glass); high-performance bearings, valves, medical (ceramics, ruby). Our Ceramic balls are excellent for harsh environments.</li>
             </ul>
             <p>Consider factors like load, temperature, chemical exposure, and electrical properties. ${siteConfig.name} can help you select from our ranges of Non-Ferrous Balls and Non-Metallic Balls.</p>`,
    keywords: ['non-ferrous balls', 'non-metallic balls', 'brass balls vs plastic balls', 'ceramic balls applications', 'aluminium balls uses', 'industrial ball selection', 'Rama & Sons guide', ...siteConfig.keywords.slice(0,9)],
    relatedProductIds: ['nfb-001', 'nfb-005', 'nmb-001', 'nmb-004']
  }
];

