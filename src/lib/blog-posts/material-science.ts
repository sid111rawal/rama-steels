import { siteConfig } from '@/config/site';
import type { BlogPost } from '../data';

export const materialSciencePosts: BlogPost[] = [
  {
    id: 'bp004',
    title: `Stainless Steel Balls Corrosion Resistance Guide 2025: SS 304 vs SS 316 by ${siteConfig.name}`,
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: `Complete guide to stainless steel ball corrosion resistance. Learn about passivation, SS 304 vs SS 316, and applications in harsh environments. ${siteConfig.name} provides premium SS balls for Indian industries.`,
    date: 'November 28, 2023',
    author: `Material Scientists at ${siteConfig.name}`,
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/800/400',
    content: `<p>Stainless steel balls, a flagship product of ${siteConfig.name}, are renowned for their exceptional corrosion resistance, making them indispensable in numerous demanding environments across India.</p><h3>The Science of Passivation in Stainless Steel</h3><p>The key to stainless steel's corrosion resistance lies in its chromium content (typically at least 10.5%). When exposed to oxygen, chromium forms a thin, invisible, and highly adherent passive layer of chromium oxide (Cr₂O₃) on the surface. This layer acts as a barrier, protecting the underlying steel from corrosive agents. If scratched or damaged, this layer can self-repair in the presence of oxygen.</p><h3>Advantages of Stainless Steel Balls in Harsh Environments:</h3><ul><li><strong>Chemical Processing:</strong> Stainless steel balls (especially grades like SS 316, part of our SS-300 Series) resist attack from a wide range of chemicals, acids, and alkalis.</li><li><strong>Food and Beverage Industry:</strong> Their non-reactive and hygienic surface makes them ideal for food processing equipment where cleanliness and corrosion resistance are critical.</li><li><strong>Marine Applications:</strong> Certain grades of stainless steel offer excellent resistance to saltwater corrosion.</li><li><strong>Pharmaceutical Industry:</strong> Biocompatibility and resistance to sterilization processes make them suitable for medical and pharmaceutical applications.</li></ul><p>${siteConfig.name} offers various grades of stainless steel balls, such as SS 304, SS 316 (found in our SS-300 Series), and SS 440C (part of our SS-400 Series), each tailored for specific corrosive conditions and mechanical requirements, ensuring longevity and reliability for your applications in India.</p>`,
    keywords: ['stainless steel balls India', 'SS 304 vs SS 316', 'corrosion resistant steel balls', 'stainless steel passivation', 'SS balls corrosion resistance', 'marine grade steel balls', 'food grade steel balls', 'chemical resistant balls', 'SS 300 series', 'SS 400 series', 'stainless steel applications', 'Rama & Sons SS balls', ...siteConfig.keywords.slice(0,6)],
    relatedProductIds: ['fb-004', 'fb-006']
  },
  {
    id: 'bp008',
    title: `Exploring Non-Ferrous Metal Balls: Properties and Applications with ${siteConfig.name}`,
    slug: 'non-ferrous-metal-balls-guide',
    excerpt: `Dive into the world of non-ferrous metal balls like Brass, Copper, and Aluminium. ${siteConfig.name} explains their unique properties and uses in Indian industries.`,
    date: 'January 18, 2024',
    author: `Material Experts at ${siteConfig.name}`,
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost8/800/400',
    content: `<p>Beyond traditional steel, ${siteConfig.name} manufactures a diverse range of non-ferrous metal balls, each offering unique properties for specialized applications in India.</p><h3>Key Non-Ferrous Materials and Their Uses:</h3><ul><li><strong>Brass Balls:</strong> Known for good corrosion resistance and electrical conductivity. Often used in valves and electrical components.</li><li><strong>Copper Balls:</strong> Offer excellent electrical and thermal conductivity, making them ideal for electronics and heat transfer applications.</li><li><strong>Aluminium Balls:</strong> Lightweight with good corrosion resistance, suitable for automotive and aerospace where weight is a concern.</li><li><strong>Titanium Balls:</strong> High strength-to-weight ratio, excellent corrosion resistance, and biocompatibility. Used in aerospace, medical implants, and chemical processing.</li><li><strong>Tungsten Carbide Balls:</strong> Extremely hard and wear-resistant, used in high-wear applications, precision bearings, and ballizing.</li></ul><p>${siteConfig.name} can help you select the right non-ferrous metal ball, from Inconel for high-temperature environments to Phosphorous Bronze for bearing applications, ensuring optimal performance for your specific needs.</p>`,
    keywords: ['non-ferrous metal balls', 'brass balls India', 'copper balls supplier', 'aluminium balls manufacturer', 'titanium balls applications', 'tungsten carbide balls', `${siteConfig.name} non-ferrous guide`, ...siteConfig.keywords.slice(0,10)],
    relatedProductIds: ['nfb-001', 'nfb-003', 'nfb-005', 'nfb-013', 'nfb-014', 'nfb-002', 'nfb-015']
  }
];

