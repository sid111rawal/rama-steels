import type { StaticImageData } from 'next/image';
import { siteConfig } from '@/config/site';

// Main Category Images
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png';
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
import phosphorousBronzeImg from '../images/non-ferrous/phosphorous bzonze.png'; // Corrected typo from bzonze to bronze if intended
import aluminaImg from '../images/non-ferrous/alumina.png';

// Non-Metallic Product Images
import plasticImg from '../images/non-mettalic/plastic.png';
import rubyImg from '../images/non-mettalic/ruby.png';
import glassImg from '../images/non-mettalic/glass.png';
import ceramicNonMetallicImg from '../images/non-mettalic/ceramic.png';
import siliconNitrideImg from '../images/non-mettalic/silicon nitride.png';

// Polish Media & Abrasives Product Images
import ssStraightPolishPinImg from '../images/polish-media/ss straight polish pin magnetic or non-magnetic.jpg';
import ssCutWireShortImg from '../images/polish-media/ss cut wire short.jpg';
import zincRoundShotsImg from '../images/polish-media/zinc round shots.jpg';
import ssCrossPinImg from '../images/polish-media/ss cross pin magnetic or non-magnetic.jpg';
import ssMagneticPicImg from '../images/polish-media/ss magnetic pic.jpg';
import multPinImg from '../images/polish-media/mult pin.jpg';
import zincCutWireShotsImg from '../images/polish-media/zinc cut wize shots.png'; // Corrected typo from wize to wire if intended
import ssRoundCutWireShortImg from '../images/polish-media/ss round cut wire short.jpg';


export interface Product {
  id: string;
  name: string;
  altName?: string; // Alternative names or common search terms
  description: string; // Detailed description for product page and meta
  imageSrc: StaticImageData | string;
  category: string; // Used for filtering and breadcrumbs
  // Add more SEO relevant fields if needed:
  // material?: string;
  // applications?: string[]; // Array of common applications
  // standards?: string; // e.g., "ISO 9001, ASTM A295"
}

export interface ProductCategory {
  id:string;
  name: string;
  description: string; // SEO-friendly description for category page
  imageSrc: StaticImageData;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string; // SEO-friendly title
  slug: string; // URL-friendly slug
  excerpt: string; // Short summary for blog listing and meta description
  date: string;
  author: string;
  category: string;
  imageSrc: string | StaticImageData; 
  content: string; 
  keywords?: string[]; 
}


export const productsData: Product[] = [
  // Ferrous Balls Category
  {
    id: 'fb-001',
    name: 'EN-31 Steel Balls',
    altName: 'SAE 52100 Balls, 100Cr6 Steel Balls, 1.3505 Alloy Steel, Bearing Steel Balls',
    description: `High-carbon chromium alloy steel balls (EN-31 / SAE 52100) manufactured by ${siteConfig.name} in India. Renowned for exceptional hardness and wear resistance, ideal for precision bearings, automotive components, and high-stress industrial applications. Available in various sizes.`,
    imageSrc: en31Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010 Steel Balls',
    altName: 'Low Carbon Steel Balls, Mild Steel Balls, UNS G10100 Balls',
    description: `Low-carbon AISI-1010 steel balls from ${siteConfig.name}, offering good formability and weldability. Suitable for general-purpose applications, toys, and components not requiring high hardness. Cost-effective solution produced in India.`,
    imageSrc: aisi1010Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6 Steel Balls',
    altName: 'AISI 52100 Steel Balls, EN31 Steel Balls, 1.3505 Bearing Steel, High Carbon Chromium Steel Balls',
    description: `High-carbon chromium 100Cr6 bearing steel balls by ${siteConfig.name}, equivalent to AISI 52100/EN31. Known for superior hardness, wear resistance, and dimensional stability, perfect for high-performance bearings.`,
    imageSrc: oneHundredCR6Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 Series Stainless Steel Balls',
    altName: 'Austenitic Stainless Steel Balls, SS304 Balls (UNS S30400, 1.4301), SS316 Balls (UNS S31600, 1.4401), Corrosion Resistant Balls',
    description: `Corrosion-resistant austenitic stainless steel balls from ${siteConfig.name} (SS 300 series, including 304 & 316 grades). Widely used in food processing, chemical, medical, and marine industries due to excellent anti-rust properties.`,
    imageSrc: ss300SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9 Steel Balls',
    altName: 'AISI 1050 Steel Balls, Medium Carbon Steel Balls, C50 Steel Balls, 080M50 Steel Balls',
    description: `Medium carbon EN-9 steel balls (AISI 1050 equivalent) offering a good balance of strength, hardness, and toughness. Suitable for automotive parts, machinery, and agricultural equipment. Manufactured by ${siteConfig.name}.`,
    imageSrc: en9Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 Series Stainless Steel Balls',
    altName: 'Martensitic Stainless Steel Balls, SS410 Balls (UNS S41000, 1.4006), SS420 Balls (UNS S42000, 1.4021), SS440C Balls (UNS S44004, 1.4125), Magnetic Steel Balls',
    description: `Martensitic stainless steel balls (SS 400 series including 410, 420, 440C) from ${siteConfig.name}. Known for high hardness, good wear resistance, and magnetic properties after heat treatment. Ideal for valves and bearings.`,
    imageSrc: ss400SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100 Steel Balls',
    altName: 'EN31 Steel Balls, 100Cr6 Steel Balls, Bearing Steel, High Carbon Chromium Alloy Steel Balls',
    description: `High-carbon, chromium-alloy AISI-52100 steel balls (EN31/100Cr6 equivalent) primarily used for precision bearings and demanding applications. Manufactured by ${siteConfig.name} in Agra, India, ensuring top quality.`,
    imageSrc: aisi52100Img,
    category: 'Ferrous Balls',
  },
  // Gauges Category
  {
    id: 'gg-001',
    name: 'Type Og Gauge',
    altName: 'O-G Gauge, Measurement Tool, Precision Inspection Gauge',
    description: `Precision Type Og Gauge from ${siteConfig.name} for accurate industrial measurements, quality control, and inspection tasks. Reliable and durable gauging solution.`,
    imageSrc: typeOgGaugeImg,
    category: 'Gauges',
  },
  {
    id: 'gg-002',
    name: 'Custom Made Gauges',
    altName: 'Bespoke Gauges, Special Gauges, Tailored Gauges India, Custom Inspection Tools',
    description: `Gauges designed and manufactured to specific customer requirements by ${siteConfig.name} in Agra. Ideal for unique applications needing specialized measurement tools.`,
    imageSrc: customMadeGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-003',
    name: 'Plug Gauges',
    altName: 'Go/No-Go Gauges, Pin Gauges, Hole Gauges, Cylindrical Plug Gauges',
    description: `High-quality plug gauges from ${siteConfig.name} for accurately verifying hole diameters and dimensional tolerances in manufacturing processes. Essential for quality assurance.`,
    imageSrc: plugGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-004',
    name: 'Gauge',
    altName: 'Measurement Gauge, Industrial Gauge Tool, Precision Gauge',
    description: `General-purpose industrial gauge for various measurement and inspection tasks. ${siteConfig.name} supplies a range of reliable gauges for diverse industrial needs.`,
    imageSrc: gaugeImg,
    category: 'Gauges',
  },
  // Non-Ferrous Balls Category
  {
    id: 'nfb-001',
    name: 'Brass Balls',
    altName: 'Copper-Zinc Alloy Balls, C26000 Brass Balls, C27000 Yellow Brass Balls',
    description: `Brass balls manufactured by ${siteConfig.name}, offering good corrosion resistance, excellent electrical conductivity, and a decorative finish. Used in valves, electrical components, and artistic applications.`,
    imageSrc: brassImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-002',
    name: 'Inconel Balls',
    altName: 'Nickel-Chromium Alloy Balls, Superalloy Balls, Inconel 600, Inconel 625, Inconel 718 Balls',
    description: `Inconel balls from ${siteConfig.name}, known for exceptional resistance to high temperatures, severe corrosion, and oxidation. Suitable for aerospace, chemical processing, and marine environments.`,
    imageSrc: inconelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-003',
    name: 'Copper Balls',
    altName: 'Cu Balls, C10100 Copper Balls, C11000 ETP Copper Balls, High Conductivity Balls',
    description: `Pure copper balls supplied by ${siteConfig.name}, valued for their high electrical and thermal conductivity. Used in electronics, heat exchangers, and grounding applications.`,
    imageSrc: copperImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-004',
    name: 'Alloy-20 Balls',
    altName: 'Carpenter 20 Balls, UNS N08020 Nickel-Iron-Chromium Alloy Balls, Sulfuric Acid Resistant Balls',
    description: `Alloy-20 balls offering superior resistance to aggressive corrosive environments, particularly sulfuric acid. A specialized product from ${siteConfig.name} for chemical industries.`,
    imageSrc: alloy20Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-005',
    name: 'Aluminium Balls',
    altName: 'Aluminum Balls, Al Balls, 6061 Alloy Balls, 7075 Alloy Balls, Lightweight Metal Balls',
    description: `Lightweight aluminium balls from ${siteConfig.name}, suitable for applications requiring low density, good corrosion resistance, and non-magnetic properties. Used in automotive and aerospace.`,
    imageSrc: aluminiumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-006',
    name: 'Rockbit Tool Steel Balls',
    altName: 'Drill Bit Steel Balls, High Impact Steel Balls, Mining Tool Steel Balls',
    description: `Hard-wearing Rockbit tool steel balls designed for high-impact and abrasive conditions in drilling, mining, and construction applications. Supplied by ${siteConfig.name}.`,
    imageSrc: rockbitToolSteelImg,
    category: 'Non-Ferrous Balls', 
  },
  {
    id: 'nfb-007',
    name: 'K-Monel Balls',
    altName: 'Monel K-500 Balls, UNS N05500 Nickel-Copper Alloy Balls, Age-Hardening Monel Balls',
    description: `K-Monel balls, a precipitation-hardenable nickel-copper alloy offering excellent corrosion resistance, high strength, and hardness. From ${siteConfig.name} for demanding applications.`,
    imageSrc: kMonelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-008',
    name: 'F55 Super Duplex Balls',
    altName: 'Super Duplex Stainless Steel Balls, UNS S32760 Balls, 1.4501 Balls, Ferralium 255 Balls',
    description: `F55 Super Duplex balls from ${siteConfig.name}, providing excellent resistance to pitting, crevice corrosion, and stress corrosion cracking in chloride-containing environments.`,
    imageSrc: f55Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-009',
    name: 'Hastelloy Balls',
    altName: 'Nickel-Molybdenum Alloy Balls, Hastelloy C-276 Balls, Hastelloy C-22 Balls, Corrosion Proof Balls',
    description: `Hastelloy balls, renowned for outstanding resistance to a wide range of corrosive media, including strong acids and chlorides. Supplied by ${siteConfig.name} for critical chemical applications.`,
    imageSrc: hastelloyImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-010',
    name: 'Lead Balls',
    altName: 'Pb Balls, Plumbum Balls, High Density Lead Spheres',
    description: `Dense lead balls from ${siteConfig.name}, often used for radiation shielding, weighting applications, ballast, and some specific low-speed bearings.`,
    imageSrc: leadImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-011',
    name: 'Super Duplex Steel Balls',
    altName: 'UNS S32750 Balls, 2507 Super Duplex Balls, High Strength Corrosion Resistant Balls',
    description: `High-strength Super Duplex stainless steel balls (e.g., UNS S32750), offering excellent corrosion resistance in harsh environments like marine and chemical processing. Supplied by ${siteConfig.name}.`,
    imageSrc: superDuplexImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-012',
    name: 'Stellite Balls',
    altName: 'Cobalt-Chromium Alloy Balls, Stellite 6 Balls, Hardfacing Alloy Balls, Wear Resistant Balls',
    description: `Wear-resistant Stellite balls from ${siteConfig.name}. These cobalt-chromium alloys are ideal for high-wear, high-temperature, and corrosive applications such as valves and pumps.`,
    imageSrc: stelliteImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-013',
    name: 'Titanium Balls',
    altName: 'Ti Balls, Grade 2 Titanium Balls, Grade 5 Titanium (Ti-6Al-4V) Balls, Lightweight Strong Balls',
    description: `Lightweight and strong titanium balls by ${siteConfig.name}, offering excellent corrosion resistance, biocompatibility, and high strength-to-weight ratio. Used in aerospace, medical, and chemical industries.`,
    imageSrc: titaniumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-014',
    name: 'Tungsten Balls',
    altName: 'W Balls, Wolfram Balls, Tungsten Carbide (WC) Balls, High Density Metal Balls',
    description: `High-density tungsten and tungsten carbide balls from ${siteConfig.name}, suitable for applications requiring high mass in a small volume, extreme hardness, or radiation shielding.`,
    imageSrc: tungstenImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-015',
    name: 'Phosphorous Bronze Balls',
    altName: 'Phosphor Bronze Balls, Tin Bronze Balls, C51000 Bronze Balls, C54400 Bronze Balls',
    description: `Phosphorous bronze balls from ${siteConfig.name}, known for their strength, toughness, low coefficient of friction, excellent wear resistance, and good corrosion resistance. Ideal for bearings and electrical contacts.`,
    imageSrc: phosphorousBronzeImg, // Corrected path for "phosphorous bzonze.png"
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-016',
    name: 'Alumina Balls',
    altName: 'Aluminum Oxide Balls, Al2O3 Balls, Ceramic Alumina Grinding Balls',
    description: `Hard and wear-resistant Alumina (Aluminum Oxide) ceramic balls. Used in various demanding industrial applications like grinding media, bearings, and valves. Supplied by ${siteConfig.name}.`,
    imageSrc: aluminaImg,
    category: 'Non-Ferrous Balls', // Often considered ceramic, but can be listed here if it's about the raw material.
  },
  // Non-Metallic Balls Category
  {
    id: 'nmb-001',
    name: 'Plastic Balls',
    altName: 'Polymer Balls, Nylon Balls, Polypropylene (PP) Balls, PTFE (Teflon) Balls, POM (Delrin/Acetal) Balls',
    description: `Versatile plastic balls from ${siteConfig.name}, including Nylon, Polypropylene (PP), PTFE (Teflon), and POM (Delrin). Lightweight, corrosion-resistant, and suitable for low-friction applications, check valves, and flow indicators.`,
    imageSrc: plasticImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-002',
    name: 'Ruby Balls',
    altName: 'Synthetic Ruby Balls, Corundum Balls, Aluminum Oxide (Al2O3) Gem Quality Balls, Precision Ruby Spheres',
    description: `High-precision synthetic ruby balls by ${siteConfig.name}, known for extreme hardness, exceptional wear resistance, chemical inertness, and dimensional stability. Used in metrology, styli, and precision instruments.`,
    imageSrc: rubyImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-003',
    name: 'Glass Balls',
    altName: 'Soda-Lime Glass Balls, Borosilicate Glass Balls, Precision Glass Spheres',
    description: `Corrosion-resistant glass balls (soda-lime or borosilicate) from ${siteConfig.name}. Ideal for check valves, flow meters, bearings in corrosive environments, and decorative purposes.`,
    imageSrc: glassImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-004',
    name: 'Ceramic Balls',
    altName: 'Technical Ceramic Balls, Alumina Ceramic Balls, Zirconia Ceramic Balls, Silicon Nitride Balls',
    description: `Durable engineering ceramic balls offering excellent wear resistance, high-temperature stability, electrical insulation, and corrosion resistance. Supplied by ${siteConfig.name} for demanding applications.`,
    imageSrc: ceramicNonMetallicImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-005',
    name: 'Silicon Nitride Balls',
    altName: 'Si3N4 Balls, Ceramic Silicon Nitride Balls, High Performance Ceramic Balls',
    description: `High-performance silicon nitride (Si3N4) balls from ${siteConfig.name} with exceptional hardness, high strength, low density, and excellent thermal shock resistance. Used in hybrid bearings and high-speed applications.`,
    imageSrc: siliconNitrideImg,
    category: 'Non-Metallic Balls',
  },
  // Polish Media & Abrasives Category
  {
    id: 'pma-001',
    name: 'SS Straight Polish Pins',
    altName: 'Stainless Steel Finishing Pins, Tumbling Pins, Magnetic Polishing Pins, Non-Magnetic Polishing Pins',
    description: `Stainless steel straight polish pins from ${siteConfig.name}, available in magnetic and non-magnetic variants. Ideal for fine finishing, deburring, and polishing of intricate parts in tumbling processes.`,
    imageSrc: ssStraightPolishPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-002',
    name: 'SS Cut Wire Shots (Short)',
    altName: 'Stainless Steel Shot, Deburring Media, Cut Wire Abrasive Pellets, Short Cut Steel Shot',
    description: `Short cut stainless steel wire shots by ${siteConfig.name}. An effective and durable abrasive media for deburring, cleaning, peening, and surface finishing of metal components.`,
    imageSrc: ssCutWireShortImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-003',
    name: 'Zinc Round Shots',
    altName: 'Zinc Blasting Media, Soft Abrasive Shots, Round Zinc Pellets',
    description: `Round zinc shots for gentle cleaning, deburring, and finishing of delicate parts without excessive abrasion or material removal. Supplied by ${siteConfig.name}.`,
    imageSrc: zincRoundShotsImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-004',
    name: 'SS Cross Pins',
    altName: 'Stainless Steel Tumbling Media, Angle Cut Pins, Magnetic Cross Pins, Non-Magnetic Cross Pins',
    description: `Stainless steel cross pins (angle cut) from ${siteConfig.name}, available as magnetic or non-magnetic. Designed for effective polishing, deburring, and reaching intricate areas of components.`,
    imageSrc: ssCrossPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-005',
    name: 'SS Magnetic Pins (Pic Shape)',
    altName: 'Magnetic Steel Pins, Micro Finishing Pins, Tumbling Pic Media',
    description: `Magnetic stainless steel pins (pic/nail shape) by ${siteConfig.name} for precision finishing and material handling in magnetic tumbling processes. Ideal for jewelry and small parts.`,
    imageSrc: ssMagneticPicImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-006',
    name: 'Multi Pins (Star Media)',
    altName: 'Multi-Faceted Pins, Star Shaped Tumbling Media, Angle Cut Star Media',
    description: `Multi-faceted pins (often star-shaped) from ${siteConfig.name} for comprehensive surface treatment, deburring, and polishing in various industrial finishing applications.`,
    imageSrc: multPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-007',
    name: 'Zinc Cut Wire Shots',
    altName: 'Zinc Shot Abrasive, Soft Blasting Media, Cut Zinc Wire Pellets',
    description: `Cut zinc wire shots for surface preparation, cleaning, and finishing. Offers a softer alternative to steel media, preventing damage to delicate surfaces. Supplied by ${siteConfig.name}.`,
    imageSrc: zincCutWireShotsImg, // Corrected path for "zinc cut wize shots.png"
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-008',
    name: 'SS Round Cut Wire Shots (Short)',
    altName: 'Stainless Steel Round Shot, Deburring Pellets, Short Round Steel Media',
    description: `Short, round cut stainless steel wire by ${siteConfig.name} for effective and consistent deburring, cleaning, and surface conditioning of various metal parts.`,
    imageSrc: ssRoundCutWireShortImg,
    category: 'Polish Media & Abrasives',
  },
];

export const mainCategoriesData: ProductCategory[] = [
  {
    id: 'cat-ferrous',
    name: 'Ferrous Metal Balls',
    description: `Discover high-strength ferrous metal balls from ${siteConfig.name}, including alloy steel, carbon steel, and stainless steel variants. Ideal for bearings, automotive, and diverse industrial applications in India.`,
    imageSrc: firstpageFerrous,
    path: '/products?category=Ferrous+Balls',
  },
  {
    id: 'cat-non-ferrous',
    name: 'Non-Ferrous Metal Balls',
    description: `Explore a wide range of non-ferrous metal balls manufactured by ${siteConfig.name}. We offer brass, copper, aluminum, titanium, and other specialized non-ferrous alloys for unique applications.`,
    imageSrc: firstpageNonFerrous,
    path: '/products?category=Non-Ferrous+Balls',
  },
  {
    id: 'cat-non-metallic',
    name: 'Non-Metallic Balls',
    description: `${siteConfig.name} provides high-performance non-metallic balls, including ceramic, glass, plastic, and ruby balls, for specialized uses requiring unique material properties like corrosion resistance or electrical insulation.`,
    imageSrc: firstpageNonMetallic, // Corrected path
    path: '/products?category=Non-Metallic+Balls',
  },
  {
    id: 'cat-gauges',
    name: 'Precision Gauges',
    description: `Source high-accuracy precision gauges from ${siteConfig.name}. Our range includes plug gauges, custom-made gauges, and other inspection tools vital for quality control in manufacturing.`,
    imageSrc: firstpageGauge,
    path: '/products?category=Gauges',
  },
  {
    id: 'cat-polish-media',
    name: 'Polish Media & Abrasives',
    description: `Achieve superior surface finishing with polish media and abrasives from ${siteConfig.name}. We supply stainless steel pins, cut wire shots, zinc shots, and more for deburring and polishing needs.`,
    imageSrc: firstpagePolishMedia,
    path: '/products?category=Polish+Media+%26+Abrasives',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'bp001',
    title: 'The Importance of Steel Ball Hardness in Industrial Applications',
    slug: 'steel-ball-hardness',
    excerpt: `Understanding how steel ball hardness (measured in HRC, Vickers, Brinell) impacts performance, durability, and efficiency across various industrial sectors like bearings. A deep dive by ${siteConfig.name}.`,
    date: 'October 26, 2023',
    author: `Technical Team at ${siteConfig.name}`,
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost1/800/400',
    content: `<p>Steel ball hardness is a critical parameter that dictates its suitability for various industrial applications. It directly influences a ball's wear resistance, load-bearing capacity, and overall lifespan. At ${siteConfig.name}, we meticulously control hardness levels to ensure optimal performance for our steel balls manufactured in India.</p><h3>Understanding Hardness Scales</h3><p>Commonly, hardness is measured using scales like Rockwell (HRC), Vickers (HV), or Brinell (HB). For steel balls, HRC is widely used. The choice of hardness depends on the application; for instance, bearings require very high hardness (typically 60-67 HRC) to withstand repetitive stress, while applications like grinding media might prioritize toughness alongside hardness.</p><h3>Impact on Performance</h3><ul><li><strong>Wear Resistance:</strong> Harder balls generally exhibit better resistance to abrasive wear, extending their service life and that of the components they interact with.</li><li><strong>Deformation Resistance:</strong> Higher hardness means less deformation under load, crucial for maintaining precision in bearings and other close-tolerance applications.</li><li><strong>Fatigue Life:</strong> For applications involving cyclic loading, appropriate hardness contributes significantly to improved fatigue life.</li></ul><h3>Testing and Standards at ${siteConfig.name}</h3><p>We adhere to international standards like ISO 3290 and ASTM F2215 for hardness testing and grading of our steel balls. Our quality control processes involve rigorous testing to ensure every batch meets the specified hardness requirements, providing our customers with reliable and durable products for the Indian market and beyond.</p>`,
    keywords: ['steel ball hardness', 'HRC rating', 'industrial steel balls', 'wear resistance', 'bearing quality India', 'Rama & Sons technical guide']
  },
  {
    id: 'bp002',
    title: 'Choosing the Right Polishing Media for Your Surface Finishing Needs',
    slug: 'choosing-polishing-media',
    excerpt: `A comprehensive guide from ${siteConfig.name} to selecting the optimal polishing media (ceramic, plastic, steel, organic) for your surface finishing, deburring, or polishing requirements in India.`,
    date: 'November 05, 2023',
    author: `Finishing Experts at ${siteConfig.name}`,
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost2/800/400',
    content: `<p>Selecting the correct polishing media is paramount for achieving the desired surface finish efficiently and cost-effectively. ${siteConfig.name} offers a wide range of media tailored to diverse needs for Indian industries.</p><h3>Key Considerations:</h3><ul><li><strong>Material of the Workpiece:</strong> The media must be compatible with the material being polished. For instance, aggressive ceramic media is suitable for hard metals, while softer plastic or organic media is better for delicate parts or softer metals like aluminum or brass.</li><li><strong>Desired Finish:</strong> Are you aiming for deburring, a matte finish, or a high-gloss polish? Different media types, shapes, and sizes achieve different results.</li><li><strong>Operational Costs:</strong> Consider media lifespan, cycle times, and potential impact on equipment wear.</li></ul><h3>Types of Polishing Media Offered by ${siteConfig.name}:</h3><ul><li><strong>Ceramic Media:</strong> Ideal for heavy deburring, edge radiusing, and fast cutting on hard materials.</li><li><strong>Plastic Media:</strong> Good for general-purpose polishing, deburring, and pre-paint finishing on softer metals like aluminum or brass.</li><li><strong>Stainless Steel Media:</strong> Used for burnishing, imparting a bright finish, and light deburring. Long-lasting and non-contaminating.</li><li><strong>Organic Media (e.g., Walnut Shells, Corn Cob):</strong> Best for gentle polishing, drying, or cleaning of delicate parts.</li></ul><p>Our experts at ${siteConfig.name}, based in Agra, can help you choose the perfect polishing media to optimize your finishing processes.</p>`,
    keywords: ['polishing media selection', 'surface finishing India', 'ceramic tumbling media', 'plastic polishing media', 'stainless steel shot supplier', 'deburring solutions', 'Rama & Sons guide']
  },
  {
    id: 'bp003',
    title: 'Innovations in Steel Manufacturing: Trends to Watch in 2024 by Rama & Sons',
    slug: 'steel-manufacturing-trends-2024',
    excerpt: `Explore the latest advancements in steel production, from sustainable practices to AI-driven quality control. Discover how ${siteConfig.name} is embracing the future of steel manufacturing in India.`,
    date: 'November 15, 2023',
    author: `Industry Analysts at ${siteConfig.name}`,
    category: 'Industry News',
    imageSrc: 'https://picsum.photos/seed/blogpost3/800/400',
    content: `<p>The steel manufacturing industry is constantly evolving, driven by demands for higher quality, sustainability, and efficiency. ${siteConfig.name} is at the forefront of adopting these innovations in the Indian market.</p><h3>Key Trends for 2024:</h3><ul><li><strong>Sustainable Steel Production:</strong> Increased focus on reducing carbon footprint through energy-efficient processes, use of recycled materials, and exploration of green hydrogen in steelmaking.</li><li><strong>Advanced Metallurgy:</strong> Development of new steel alloys with superior properties, such as higher strength-to-weight ratios, enhanced corrosion resistance, and improved performance at extreme temperatures.</li><li><strong>Digitalization and AI:</strong> AI-driven quality control systems, predictive maintenance, and smart factory solutions are optimizing production processes and ensuring consistent product quality. ${siteConfig.name} is investing in these technologies to enhance our steel ball and media production.</li><li><strong>Additive Manufacturing (3D Printing):</strong> Growing use of 3D printing for creating complex steel components and custom tooling, offering design flexibility and reduced lead times.</li></ul><p>${siteConfig.name} is committed to continuous improvement and innovation, ensuring we provide our customers with cutting-edge steel products that meet the evolving demands of modern industry in India and globally.</p>`,
    keywords: ['steel manufacturing trends', '2024 steel industry', 'sustainable steel India', 'AI in steel production', 'additive manufacturing steel', 'Rama & Sons innovation']
  },
   {
    id: 'bp004',
    title: 'Corrosion Resistance: Why Stainless Steel Balls Are a Superior Choice',
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: `Delving into the science behind stainless steel's anti-corrosion properties (passivation) and its advantages in harsh environments. Learn why ${siteConfig.name}'s stainless steel balls are ideal for Indian industries.`,
    date: 'November 28, 2023',
    author: `Material Scientists at ${siteConfig.name}`,
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/800/400',
    content: `<p>Stainless steel balls, a flagship product of ${siteConfig.name}, are renowned for their exceptional corrosion resistance, making them indispensable in numerous demanding environments across India.</p><h3>The Science of Passivation</h3><p>The key to stainless steel's corrosion resistance lies in its chromium content (typically at least 10.5%). When exposed to oxygen, chromium forms a thin, invisible, and highly adherent passive layer of chromium oxide (Cr₂O₃) on the surface. This layer acts as a barrier, protecting the underlying steel from corrosive agents. If scratched or damaged, this layer can self-repair in the presence of oxygen.</p><h3>Advantages in Harsh Environments:</h3><ul><li><strong>Chemical Processing:</strong> Stainless steel balls (especially grades like SS 316) resist attack from a wide range of chemicals, acids, and alkalis.</li><li><strong>Food and Beverage Industry:</strong> Their non-reactive and hygienic surface makes them ideal for food processing equipment where cleanliness and corrosion resistance are critical.</li><li><strong>Marine Applications:</strong> Certain grades of stainless steel offer excellent resistance to saltwater corrosion.</li><li><strong>Pharmaceutical Industry:</strong> Biocompatibility and resistance to sterilization processes make them suitable for medical and pharmaceutical applications.</li></ul><p>${siteConfig.name} offers various grades of stainless steel balls, such as SS 304, SS 316, and SS 440C, each tailored for specific corrosive conditions and mechanical requirements, ensuring longevity and reliability for your applications in India.</p>`,
    keywords: ['stainless steel balls India', 'corrosion resistant steel', 'passivation process', 'AISI 304 vs 316', 'industrial applications steel', 'Rama & Sons material science']
  },
];
