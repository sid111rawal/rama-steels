import type { StaticImageData } from 'next/image';

// Main Category Images
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png'; // Corrected path as per user's file structure
import firstpageGauge from '../images/gauge/firstpagegauge.png';
import firstpagePolishMedia from '../images/polish-media/firstpagepolishmedia.jpg';


// Ferrous Product Images
import en31Img from '../images/ferrous/en-31.png';
import aisi1010Img from '../images/ferrous/aisi-1010.png';
import oneHundredCR6Img from '../images/ferrous/100cr6.png';
import ss300SeriesImg from '../images/ferrous/ss-300 series.png';
import en9Img from '../images/ferrous/en-9.png';
import ss400SeriesImg from '../images/ferrous/ss-400 series.png';
import aisi52100Img from '../images/ferrous/aisi-52100.png';

// Gauge Product Images
import typeOgGaugeImg from '../images/gauge/type og gauge.jpg';
import customMadeGaugesImg from '../images/gauge/custom made gauges.png';
import plugGaugesImg from '../images/gauge/plug-gauges.png';
import gaugeImg from '../images/gauge/gauge.png';

// Non-Ferrous Product Images
import brassImg from '../images/non-ferrous/brass.png';
import inconelImg from '../images/non-ferrous/inconel.png';
import copperImg from '../images/non-ferrous/copper.png';
import alloy20Img from '../images/non-ferrous/alloy-20.png';
import aluminiumImg from '../images/non-ferrous/aluminium.png';
import rockbitToolSteelImg from '../images/non-ferrous/rockbit tool steel.png';
import kMonelImg from '../images/non-ferrous/k-monel.png';
import f55Img from '../images/non-ferrous/f55.png';
import hastelloyImg from '../images/non-ferrous/hastelloy.png';
import leadImg from '../images/non-ferrous/lead.png';
import superDuplexImg from '../images/non-ferrous/super-duplex.png';
import stelliteImg from '../images/non-ferrous/stellite.png';
import titaniumImg from '../images/non-ferrous/titanium.png';
import tungstenImg from '../images/non-ferrous/tungsten.png';
import phosphorousBronzeImg from '../images/non-ferrous/phosphorous bzonze.png';
import aluminaImg from '../images/non-ferrous/alumina.png';

// Non-Metallic Product Images
import plasticImg from '../images/non-mettalic/plastic.png'; // Corrected path as per user's file structure
import rubyImg from '../images/non-mettalic/ruby.png'; // Corrected path
import glassImg from '../images/non-mettalic/glass.png'; // Corrected path
import ceramicNonMetallicImg from '../images/non-mettalic/ceramic.png'; // Corrected path
import siliconNitrideImg from '../images/non-mettalic/silicon nitride.png'; // Corrected path

// Polish Media & Abrasives Product Images
import ssStraightPolishPinImg from '../images/polish-media/ss straight polish pin magnetic or non-magnetic.jpg';
import ssCutWireShortImg from '../images/polish-media/ss cut wire short.jpg';
import zincRoundShotsImg from '../images/polish-media/zinc round shots.jpg';
import ssCrossPinImg from '../images/polish-media/ss cross pin magnetic or non-magnetic.jpg';
import ssMagneticPicImg from '../images/polish-media/ss magnetic pic.jpg';
import multPinImg from '../images/polish-media/mult pin.jpg';
import zincCutWireShotsImg from '../images/polish-media/zinc cut wize shots.png';
import ssRoundCutWireShortImg from '../images/polish-media/ss round cut wire short.jpg';
import { siteConfig } from '@/config/site';


export interface Product {
  id: string;
  name: string;
  altName?: string;
  description: string;
  imageSrc: StaticImageData | string;
  category: string;
}

export interface ProductCategory {
  id:string;
  name: string;
  description: string;
  imageSrc: StaticImageData;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string | StaticImageData; // Allow both for flexibility
  content: string; // HTML content for the blog post
  keywords?: string[]; // Optional keywords for SEO
}


export const productsData: Product[] = [
  // Ferrous Balls Category
  {
    id: 'fb-001',
    name: 'EN-31',
    altName: 'SAE 52100, 100Cr6, 1.3505, Alloy Steel, Bearing Steel',
    description: 'High-carbon, chromium alloy steel balls, excellent for bearings and high-wear applications. Precision manufactured by Rama & Sons.',
    imageSrc: en31Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010',
    altName: 'Low Carbon Steel, Mild Steel, UNS G10100',
    description: 'Low-carbon steel balls from Rama & Sons, suitable for general-purpose applications requiring good formability.',
    imageSrc: aisi1010Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6',
    altName: 'AISI 52100, EN31, 1.3505, Bearing Steel',
    description: 'High-carbon chromium bearing steel balls by Rama & Sons, known for high hardness and wear resistance.',
    imageSrc: oneHundredCR6Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 Series',
    altName: 'Austenitic Stainless Steel, SS304 (UNS S30400, 1.4301), SS316 (UNS S31600, 1.4401)',
    description: 'Corrosion-resistant austenitic stainless steel balls (300 series), widely used in various industries. Supplied by Rama & Sons.',
    imageSrc: ss300SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9',
    altName: 'AISI 1050, Medium Carbon Steel, C50, 080M50',
    description: 'Medium carbon steel balls (EN-9) offering a good balance of strength and toughness. From Rama & Sons.',
    imageSrc: en9Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 Series',
    altName: 'Martensitic Stainless Steel, SS410 (UNS S41000, 1.4006), SS420 (UNS S42000, 1.4021), SS440C (UNS S44004, 1.4125)',
    description: 'Martensitic stainless steel balls (400 series) known for high hardness and magnetic properties after heat treatment. Rama & Sons quality.',
    imageSrc: ss400SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100',
    altName: 'EN31, 100Cr6, Bearing Steel, High Carbon Chromium Steel',
    description: 'High-carbon, chromium-alloy steel balls (AISI-52100) primarily used for precision bearings. Manufactured by Rama & Sons.',
    imageSrc: aisi52100Img,
    category: 'Ferrous Balls',
  },
  // Gauges Category
  {
    id: 'gg-001',
    name: 'Type Og Gauge',
    altName: 'O-G Gauge, Measurement Tool',
    description: 'Precision Type Og Gauge from Rama & Sons for accurate industrial measurements and quality control.',
    imageSrc: typeOgGaugeImg,
    category: 'Gauges',
  },
  {
    id: 'gg-002',
    name: 'Custom Made Gauges',
    altName: 'Bespoke Gauges, Special Gauges, Tailored Gauges',
    description: 'Gauges designed and manufactured to specific customer requirements for unique applications by Rama & Sons.',
    imageSrc: customMadeGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-003',
    name: 'Plug Gauges',
    altName: 'Go/No-Go Gauges, Pin Gauges, Hole Gauges',
    description: 'High-quality plug gauges for verifying hole diameters and dimensional tolerances. Rama & Sons precision.',
    imageSrc: plugGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-004',
    name: 'Gauge',
    altName: 'Measurement Gauge, Industrial Gauge Tool',
    description: 'General-purpose industrial gauge for various measurement and inspection tasks, supplied by Rama & Sons.',
    imageSrc: gaugeImg,
    category: 'Gauges',
  },
  // Non-Ferrous Balls Category
  {
    id: 'nfb-001',
    name: 'Brass',
    altName: 'Copper-Zinc Alloy, C26000, C27000, Yellow Brass',
    description: 'Brass balls offering good corrosion resistance and electrical conductivity. Quality assured by Rama & Sons.',
    imageSrc: brassImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-002',
    name: 'Inconel',
    altName: 'Nickel-Chromium Alloy, Superalloy, Inconel 600, Inconel 625, Inconel 718',
    description: 'Inconel balls from Rama & Sons, known for resistance to high temperatures and severe corrosion.',
    imageSrc: inconelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-003',
    name: 'Copper',
    altName: 'Cu, C10100, C11000, ETP Copper',
    description: 'Pure copper balls, excellent for applications requiring high electrical and thermal conductivity. Supplied by Rama & Sons.',
    imageSrc: copperImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-004',
    name: 'Alloy-20',
    altName: 'Carpenter 20, UNS N08020, Nickel-Iron-Chromium Alloy',
    description: 'Alloy-20 balls offering superior resistance to aggressive corrosive environments like sulfuric acid. Rama & Sons product.',
    imageSrc: alloy20Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-005',
    name: 'Aluminium',
    altName: 'Aluminum, Al, 6061 Alloy, 7075 Alloy',
    description: 'Lightweight aluminium balls from Rama & Sons, suitable for applications requiring low density and good corrosion resistance.',
    imageSrc: aluminiumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-006',
    name: 'Rockbit Tool Steel',
    altName: 'Drill Bit Steel, High Impact Steel',
    description: 'Hard-wearing tool steel balls designed for high-impact and abrasive conditions in drilling. Supplied by Rama & Sons.',
    imageSrc: rockbitToolSteelImg,
    category: 'Non-Ferrous Balls', 
  },
  {
    id: 'nfb-007',
    name: 'K-Monel',
    altName: 'Monel K-500, UNS N05500, Nickel-Copper Alloy',
    description: 'K-Monel balls, a precipitation-hardenable nickel-copper alloy with excellent corrosion resistance and high strength. From Rama & Sons.',
    imageSrc: kMonelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-008',
    name: 'F55',
    altName: 'Super Duplex Stainless Steel, UNS S32760, 1.4501, Ferralium 255',
    description: 'F55 Super Duplex balls from Rama & Sons, providing excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.',
    imageSrc: f55Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-009',
    name: 'Hastelloy',
    altName: 'Nickel-Molybdenum Alloy, Hastelloy C-276, Hastelloy C-22',
    description: 'Hastelloy balls, known for outstanding resistance to a wide range of corrosive media, including acids and chlorides. Rama & Sons supply.',
    imageSrc: hastelloyImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-010',
    name: 'Lead',
    altName: 'Pb, Plumbum',
    description: 'Dense lead balls from Rama & Sons, often used for radiation shielding, weighting applications, and some specific bearings.',
    imageSrc: leadImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-011',
    name: 'Super Duplex',
    altName: 'Super Duplex Stainless Steel, UNS S32750, 2507',
    description: 'High-strength Super Duplex stainless steel balls, offering excellent corrosion resistance in harsh environments. Supplied by Rama & Sons.',
    imageSrc: superDuplexImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-012',
    name: 'Stellite',
    altName: 'Cobalt-Chromium Alloy, Stellite 6, Hardfacing Alloy',
    description: 'Wear-resistant Stellite balls from Rama & Sons, cobalt-chromium alloys ideal for high-wear and high-temperature applications.',
    imageSrc: stelliteImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-013',
    name: 'Titanium',
    altName: 'Ti, Grade 2 Titanium, Grade 5 Titanium (Ti-6Al-4V)',
    description: 'Lightweight and strong titanium balls by Rama & Sons, offering excellent corrosion resistance and biocompatibility.',
    imageSrc: titaniumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-014',
    name: 'Tungsten',
    altName: 'W, Wolfram, Tungsten Carbide (WC if applicable)',
    description: 'High-density tungsten balls, suitable for applications requiring high mass in a small volume or extreme hardness. From Rama & Sons.',
    imageSrc: tungstenImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-015',
    name: 'Phosphorous Bronze',
    altName: 'Phosphor Bronze, Tin Bronze, C51000, C54400',
    description: 'Phosphorous bronze balls from Rama & Sons, known for their strength, toughness, low coefficient of friction, and good wear resistance.',
    imageSrc: phosphorousBronzeImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-016',
    name: 'Alumina',
    altName: 'Aluminum Oxide, Al2O3, Ceramic Alumina',
    description: 'Hard and wear-resistant Alumina (Aluminum Oxide) ceramic balls, used in various demanding industrial applications. Supplied by Rama & Sons.',
    imageSrc: aluminaImg,
    category: 'Non-Ferrous Balls',
  },
  // Non-Metallic Balls Category
  {
    id: 'nmb-001',
    name: 'Plastic',
    altName: 'Polymer Balls, Nylon Balls, Polypropylene (PP) Balls, PTFE Balls (Teflon), POM Balls (Delrin/Acetal)',
    description: 'Versatile plastic balls from Rama & Sons, lightweight and resistant to chemicals. Suitable for various low-friction applications.',
    imageSrc: plasticImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-002',
    name: 'Ruby',
    altName: 'Synthetic Ruby, Corundum, Aluminum Oxide (Al2O3) Gem Quality',
    description: 'High-precision ruby balls by Rama & Sons, known for extreme hardness, wear resistance, and dimensional stability.',
    imageSrc: rubyImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-003',
    name: 'Glass',
    altName: 'Soda-Lime Glass Balls, Borosilicate Glass Balls',
    description: 'Corrosion-resistant glass balls from Rama & Sons, ideal for check valves, flow meters, and decorative purposes.',
    imageSrc: glassImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-004',
    name: 'Ceramic',
    altName: 'Technical Ceramics, Alumina Balls, Zirconia Balls, Silicon Nitride Balls',
    description: 'Durable ceramic balls offering excellent wear resistance, high-temperature stability, and electrical insulation. Supplied by Rama & Sons.',
    imageSrc: ceramicNonMetallicImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-005',
    name: 'Silicon Nitride',
    altName: 'Si3N4, Ceramic Silicon Nitride',
    description: 'High-performance silicon nitride balls from Rama & Sons with exceptional hardness, strength, and thermal shock resistance.',
    imageSrc: siliconNitrideImg,
    category: 'Non-Metallic Balls',
  },
  // Polish Media & Abrasives Category
  {
    id: 'pma-001',
    name: 'SS Straight Polish Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Finishing Pins, Tumbling Pins',
    description: 'Stainless steel straight polish pins from Rama & Sons, available in magnetic and non-magnetic variants for finishing.',
    imageSrc: ssStraightPolishPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-002',
    name: 'SS Cut Wire Short',
    altName: 'Stainless Steel Shot, Deburring Media, Cut Wire Abrasive',
    description: 'Short cut stainless steel wire shots by Rama & Sons, effective for deburring, cleaning, and surface finishing.',
    imageSrc: ssCutWireShortImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-003',
    name: 'Zinc Round Shots',
    altName: 'Zinc Blasting Media, Soft Abrasive Shots',
    description: 'Round zinc shots for gentle cleaning and finishing of delicate parts without excessive abrasion. Supplied by Rama & Sons.',
    imageSrc: zincRoundShotsImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-004',
    name: 'SS Cross Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Tumbling Media, Angle Cut Pins',
    description: 'Stainless steel cross pins from Rama & Sons, available as magnetic or non-magnetic, for effective polishing and deburring.',
    imageSrc: ssCrossPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-005',
    name: 'SS Magnetic Pic',
    altName: 'Magnetic Steel Pins, Micro Finishing Pins',
    description: 'Magnetic stainless steel picks/pins by Rama & Sons for precision finishing and material handling in magnetic tumbling processes.',
    imageSrc: ssMagneticPicImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-006',
    name: 'Mult Pin',
    altName: 'Multi-Faceted Pins, Star Media, Angle Cut Media',
    description: 'Multi-faceted pins from Rama & Sons for comprehensive surface treatment and polishing in various industrial applications.',
    imageSrc: multPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-007',
    name: 'Zinc Cut Wire Shots',
    altName: 'Zinc Shot Abrasive, Soft Blasting Media',
    description: 'Cut zinc wire shots for surface preparation and finishing, offering a softer alternative to steel media. Supplied by Rama & Sons.',
    imageSrc: zincCutWireShotsImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-008',
    name: 'SS Round Cut Wire Short',
    altName: 'Stainless Steel Round Shot, Deburring Pellets',
    description: 'Short, round cut stainless steel wire by Rama & Sons for effective deburring and surface conditioning of metal parts.',
    imageSrc: ssRoundCutWireShortImg,
    category: 'Polish Media & Abrasives',
  },
];

export const mainCategoriesData: ProductCategory[] = [
  {
    id: 'cat-ferrous',
    name: 'Ferrous Metal Balls',
    description: `High-strength steel balls from ${siteConfig.name} including alloy, carbon, and stainless steel variants for various industrial applications.`,
    imageSrc: firstpageFerrous,
    path: '/products?category=Ferrous+Balls',
  },
  {
    id: 'cat-non-ferrous',
    name: 'Non-Ferrous Metal Balls',
    description: `Balls made by ${siteConfig.name} from materials like brass, copper, aluminum, titanium, and other specialized non-ferrous alloys.`,
    imageSrc: firstpageNonFerrous,
    path: '/products?category=Non-Ferrous+Balls',
  },
  {
    id: 'cat-non-metallic',
    name: 'Non-Metallic Balls',
    description: `Includes ceramic, glass, plastic, and ruby balls from ${siteConfig.name} for specialized uses requiring unique material properties.`,
    imageSrc: firstpageNonMetallic,
    path: '/products?category=Non-Metallic+Balls',
  },
  {
    id: 'cat-gauges',
    name: 'Precision Gauges',
    description: `High-accuracy gauges from ${siteConfig.name}, including plug gauges and custom-made solutions for measurement and quality control.`,
    imageSrc: firstpageGauge,
    path: '/products?category=Gauges',
  },
  {
    id: 'cat-polish-media',
    name: 'Polish Media & Abrasives',
    description: `Effective media by ${siteConfig.name} such as stainless steel pins, cut wire shots, and zinc shots for surface finishing, deburring, and polishing.`,
    imageSrc: firstpagePolishMedia,
    path: '/products?category=Polish+Media+%26+Abrasives',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'bp001',
    title: 'The Importance of Steel Ball Hardness in Industrial Applications',
    slug: 'steel-ball-hardness',
    excerpt: 'Understanding how steel ball hardness impacts performance, durability, and efficiency across various industrial sectors. A deep dive into testing methods and standards.',
    date: 'October 26, 2023',
    author: 'Dr. Metallurgy Expert (Rama & Sons)',
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost1/800/400',
    content: `<p>Steel ball hardness is a critical parameter that dictates its suitability for various industrial applications. It directly influences a ball's wear resistance, load-bearing capacity, and overall lifespan. At ${siteConfig.name}, we meticulously control hardness levels to ensure optimal performance.</p><h3>Understanding Hardness Scales</h3><p>Commonly, hardness is measured using scales like Rockwell (HRC), Vickers (HV), or Brinell (HB). For steel balls, HRC is widely used. The choice of hardness depends on the application; for instance, bearings require very high hardness (typically 60-67 HRC) to withstand repetitive stress, while applications like grinding media might prioritize toughness alongside hardness.</p><h3>Impact on Performance</h3><ul><li><strong>Wear Resistance:</strong> Harder balls generally exhibit better resistance to abrasive wear, extending their service life and that of the components they interact with.</li><li><strong>Deformation Resistance:</strong> Higher hardness means less deformation under load, crucial for maintaining precision in bearings and other close-tolerance applications.</li><li><strong>Fatigue Life:</strong> For applications involving cyclic loading, appropriate hardness contributes significantly to improved fatigue life.</li></ul><h3>Testing and Standards at ${siteConfig.name}</h3><p>We adhere to international standards like ISO 3290 and ASTM F2215 for hardness testing and grading of our steel balls. Our quality control processes involve rigorous testing to ensure every batch meets the specified hardness requirements, providing our customers with reliable and durable products.</p>`,
    keywords: ['steel ball hardness', 'HRC', 'industrial applications', 'wear resistance', 'bearing quality', 'Rama & Sons']
  },
  {
    id: 'bp002',
    title: 'Choosing the Right Polishing Media for Your Surface Finishing Needs',
    slug: 'choosing-polishing-media',
    excerpt: 'A comprehensive guide to selecting the optimal polishing media, considering material, desired finish, and operational costs. Compare ceramic, plastic, and organic options.',
    date: 'November 05, 2023',
    author: 'Finishing Pro (Rama & Sons)',
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost2/800/400',
    content: `<p>Selecting the correct polishing media is paramount for achieving the desired surface finish efficiently and cost-effectively. ${siteConfig.name} offers a wide range of media tailored to diverse needs.</p><h3>Key Considerations:</h3><ul><li><strong>Material of the Workpiece:</strong> The media must be compatible with the material being polished. For instance, aggressive ceramic media is suitable for hard metals, while softer plastic or organic media is better for delicate parts or softer metals.</li><li><strong>Desired Finish:</strong> Are you aiming for deburring, a matte finish, or a high-gloss polish? Different media types, shapes, and sizes achieve different results.</li><li><strong>Operational Costs:</strong> Consider media lifespan, cycle times, and potential impact on equipment wear.</li></ul><h3>Types of Polishing Media Offered by ${siteConfig.name}:</h3><ul><li><strong>Ceramic Media:</strong> Ideal for heavy deburring, edge radiusing, and fast cutting on hard materials.</li><li><strong>Plastic Media:</strong> Good for general-purpose polishing, deburring, and pre-paint finishing on softer metals like aluminum or brass.</li><li><strong>Stainless Steel Media:</strong> Used for burnishing, imparting a bright finish, and light deburring. Long-lasting and non-contaminating.</li><li><strong>Organic Media (e.g., Walnut Shells, Corn Cob):</strong> Best for gentle polishing, drying, or cleaning of delicate parts.</li></ul><p>Our experts at ${siteConfig.name} can help you choose the perfect polishing media to optimize your finishing processes.</p>`,
    keywords: ['polishing media', 'surface finishing', 'ceramic media', 'plastic media', 'stainless steel shot', 'deburring', 'Rama & Sons']
  },
  {
    id: 'bp003',
    title: 'Innovations in Steel Manufacturing: Trends to Watch in 2024 by Rama & Sons',
    slug: 'steel-manufacturing-trends-2024',
    excerpt: 'Explore the latest advancements in steel production, from sustainable practices to AI-driven quality control. How Rama & Sons is embracing the future.',
    date: 'November 15, 2023',
    author: 'Industry Analyst (Rama & Sons)',
    category: 'Industry News',
    imageSrc: 'https://picsum.photos/seed/blogpost3/800/400',
    content: `<p>The steel manufacturing industry is constantly evolving, driven by demands for higher quality, sustainability, and efficiency. ${siteConfig.name} is at the forefront of adopting these innovations.</p><h3>Key Trends for 2024:</h3><ul><li><strong>Sustainable Steel Production:</strong> Increased focus on reducing carbon footprint through energy-efficient processes, use of recycled materials, and exploration of green hydrogen in steelmaking.</li><li><strong>Advanced Metallurgy:</strong> Development of new steel alloys with superior properties, such as higher strength-to-weight ratios, enhanced corrosion resistance, and improved performance at extreme temperatures.</li><li><strong>Digitalization and AI:</strong> AI-driven quality control systems, predictive maintenance, and smart factory solutions are optimizing production processes and ensuring consistent product quality. ${siteConfig.name} is investing in these technologies.</li><li><strong>Additive Manufacturing (3D Printing):</strong> Growing use of 3D printing for creating complex steel components and custom tooling, offering design flexibility and reduced lead times.</li></ul><p>${siteConfig.name} is committed to continuous improvement and innovation, ensuring we provide our customers with cutting-edge steel products that meet the evolving demands of modern industry.</p>`,
    keywords: ['steel manufacturing', 'industry trends 2024', 'sustainable steel', 'AI in manufacturing', 'additive manufacturing', 'Rama & Sons']
  },
   {
    id: 'bp004',
    title: 'Corrosion Resistance: Why Stainless Steel Balls Are a Superior Choice',
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: 'Delving into the science behind stainless steel\'s anti-corrosion properties and its advantages in harsh environments, including chemical and food processing industries.',
    date: 'November 28, 2023',
    author: 'Materials Scientist (Rama & Sons)',
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/800/400',
    content: `<p>Stainless steel balls, a flagship product of ${siteConfig.name}, are renowned for their exceptional corrosion resistance, making them indispensable in numerous demanding environments.</p><h3>The Science of Passivation</h3><p>The key to stainless steel's corrosion resistance lies in its chromium content (typically at least 10.5%). When exposed to oxygen, chromium forms a thin, invisible, and highly adherent passive layer of chromium oxide (Cr₂O₃) on the surface. This layer acts as a barrier, protecting the underlying steel from corrosive agents. If scratched or damaged, this layer can self-repair in the presence of oxygen.</p><h3>Advantages in Harsh Environments:</h3><ul><li><strong>Chemical Processing:</strong> Stainless steel balls (especially grades like 316) resist attack from a wide range of chemicals, acids, and alkalis.</li><li><strong>Food and Beverage Industry:</strong> Their non-reactive and hygienic surface makes them ideal for food processing equipment where cleanliness and corrosion resistance are critical.</li><li><strong>Marine Applications:</strong> Certain grades of stainless steel offer excellent resistance to saltwater corrosion.</li><li><strong>Pharmaceutical Industry:</strong> Biocompatibility and resistance to sterilization processes make them suitable for medical and pharmaceutical applications.</li></ul><p>${siteConfig.name} offers various grades of stainless steel balls, each tailored for specific corrosive conditions and mechanical requirements, ensuring longevity and reliability.</p>`,
    keywords: ['stainless steel balls', 'corrosion resistance', 'passivation', 'AISI 304', 'AISI 316', 'industrial applications', 'Rama & Sons']
  },
];
