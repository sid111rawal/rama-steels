
import type { StaticImageData } from 'next/image';
import { siteConfig } from '@/config/site';

// Main Category Images
// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per last error resolutions
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png'; 
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png';
import firstpageGauge from '../images/gauge/firstpagegauge.png'; // Corrected typo
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
import phosphorousBronzeImg from '../images/non-ferrous/phosphorous bzonze.png'; // Note: bzonze likely a typo in filename, matching as is.
import aluminaImg from '../images/non-ferrous/alumina.png';

// Non-Metallic Product Images
import plasticImg from '../images/non-mettalic/plastic.png';
import rubyImg from '../images/non-mettalic/ruby.png';
import glassImg from '../images/non-mettalic/glass.png';
import ceramicNonMetallicImg from '../images/non-mettalic/ceramic.png'; // Corrected image name to lowercase 'c'
import siliconNitrideImg from '../images/non-mettalic/silicon nitride.png';

// Polish Media & Abrasives Product Images
import ssStraightPolishPinImg from '../images/polish-media/ss straight polish pin magnetic or non-magnetic.jpg';
import ssCutWireShortImg from '../images/polish-media/ss cut wire short.jpg';
import zincRoundShotsImg from '../images/polish-media/zinc round shots.jpg';
import ssCrossPinImg from '../images/polish-media/ss cross pin magnetic or non-magnetic.jpg';
import ssMagneticPicImg from '../images/polish-media/ss magnetic pic.jpg';
import multPinImg from '../images/polish-media/mult pin.jpg';
import zincCutWireShotsImg from '../images/polish-media/zinc cut wize shots.png'; // Note: wize likely a typo in filename, matching as is.
import ssRoundCutWireShortImg from '../images/polish-media/ss round cut wire short.jpg';


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
  imageSrc: string | StaticImageData;
  content: string;
  keywords?: string[];
  relatedProductIds?: string[];
}


export const productsData: Product[] = [
  // Ferrous Balls Category
  {
    id: 'fb-001',
    name: 'EN-31',
    altName: 'SAE 52100 Balls, 100Cr6 Steel Balls, 1.3505 Alloy Steel, Bearing Steel Balls, High Carbon Chromium Steel Balls, Chrome Steel Balls',
    description: `High-carbon chromium alloy steel balls (EN-31 / SAE 52100) manufactured by ${siteConfig.name} in India. Renowned for exceptional hardness and wear resistance, ideal for precision bearings, automotive components, and high-stress industrial applications. Available in various sizes.`,
    imageSrc: en31Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010',
    altName: 'Low Carbon Steel Balls, Mild Steel Balls, UNS G10100 Balls, Soft Steel Balls, Case Hardening Steel Balls',
    description: `Low-carbon AISI-1010 steel balls from ${siteConfig.name}, offering good formability and weldability. Suitable for general-purpose applications, toys, and components not requiring high hardness. Cost-effective solution produced in India.`,
    imageSrc: aisi1010Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6',
    altName: 'AISI 52100 Steel Balls, EN31 Steel Balls, 1.3505 Bearing Steel, High Carbon Chromium Steel Balls, Chrome Alloy Steel Balls',
    description: `High-carbon chromium 100Cr6 bearing steel balls by ${siteConfig.name}, equivalent to AISI 52100/EN31. Known for superior hardness, wear resistance, and dimensional stability, perfect for high-performance bearings.`,
    imageSrc: oneHundredCR6Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 Series',
    altName: 'Austenitic Stainless Steel Balls, SS304 Balls (UNS S30400, 1.4301), SS316 Balls (UNS S31600, 1.4401), SS302 Balls, SS303 Balls, Corrosion Resistant Steel Balls, Non-Magnetic Steel Balls, Food Grade Steel Balls',
    description: `Corrosion-resistant austenitic stainless steel balls from ${siteConfig.name} (SS 300 series, including 304 & 316 grades). Widely used in food processing, chemical, medical, and marine industries due to excellent anti-rust properties.`,
    imageSrc: ss300SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9',
    altName: 'AISI 1050 Steel Balls, Medium Carbon Steel Balls, C50 Steel Balls, 080M50 Steel Balls, High Tensile Steel Balls, DIN Ck50 Balls',
    description: `Medium carbon EN-9 steel balls (AISI 1050 equivalent) offering a good balance of strength, hardness, and toughness. Suitable for automotive parts, machinery, and agricultural equipment. Manufactured by ${siteConfig.name}.`,
    imageSrc: en9Img,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 Series',
    altName: 'Martensitic Stainless Steel Balls, SS410 Balls (UNS S41000, 1.4006), SS420 Balls (UNS S42000, 1.4021), SS440C Balls (UNS S44004, 1.4125), Magnetic Steel Balls, Hardened Stainless Steel Balls, Cutlery Grade Steel Balls',
    description: `Martensitic stainless steel balls (SS 400 series including 410, 420, 440C) from ${siteConfig.name}. Known for high hardness, good wear resistance, and magnetic properties after heat treatment. Ideal for valves and bearings.`,
    imageSrc: ss400SeriesImg,
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100',
    altName: 'EN31 Steel Balls, 100Cr6 Steel Balls, Bearing Steel, High Carbon Chromium Alloy Steel Balls, Chrome Steel Balls GCr15',
    description: `High-carbon, chromium-alloy AISI-52100 steel balls (EN31/100Cr6 equivalent) primarily used for precision bearings and demanding applications. Manufactured by ${siteConfig.name} in Agra, India, ensuring top quality.`,
    imageSrc: aisi52100Img,
    category: 'Ferrous Balls',
  },
  // Gauges Category
  {
    id: 'gg-001',
    name: 'Type Og Gauge',
    altName: 'O-G Gauge, Measurement Tool, Precision Inspection Gauge, Special Profile Gauge, Contour Gauge',
    description: `Precision Type Og Gauge from ${siteConfig.name} for accurate industrial measurements, quality control, and inspection tasks. Reliable and durable gauging solution for specific profiles.`,
    imageSrc: typeOgGaugeImg,
    category: 'Gauges',
  },
  {
    id: 'gg-002',
    name: 'Custom Made Gauges',
    altName: 'Bespoke Gauges, Special Gauges, Tailored Gauges India, Custom Inspection Tools, Made-to-Order Gauges, Fixture Gauges',
    description: `Gauges designed and manufactured to specific customer requirements by ${siteConfig.name} in Agra. Ideal for unique applications needing specialized measurement tools and fixtures.`,
    imageSrc: customMadeGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-003',
    name: 'Plug Gauges',
    altName: 'Go/No-Go Gauges, Pin Gauges, Hole Gauges, Cylindrical Plug Gauges, Plain Plug Gauges, Limit Gauges',
    description: `High-quality plug gauges from ${siteConfig.name} for accurately verifying hole diameters and dimensional tolerances in manufacturing processes. Essential for quality assurance.`,
    imageSrc: plugGaugesImg,
    category: 'Gauges',
  },
  {
    id: 'gg-004',
    name: 'Gauge',
    altName: 'Measurement Gauge, Industrial Gauge Tool, Precision Gauge, General Purpose Gauge, Ring Gauges, Snap Gauges, Thread Gauges (general term)',
    description: `General-purpose industrial gauge for various measurement and inspection tasks. ${siteConfig.name} supplies a range of reliable gauges for diverse industrial needs.`,
    imageSrc: gaugeImg,
    category: 'Gauges',
  },
  // Non-Ferrous Balls Category
  {
    id: 'nfb-001',
    name: 'Brass',
    altName: 'Copper-Zinc Alloy Balls, C26000 Brass Balls, C27000 Yellow Brass Balls, Decorative Brass Balls, Cartridge Brass Balls',
    description: `Brass balls manufactured by ${siteConfig.name}, offering good corrosion resistance, excellent electrical conductivity, and a decorative finish. Used in valves, electrical components, and artistic applications.`,
    imageSrc: brassImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-002',
    name: 'Inconel',
    altName: 'Nickel-Chromium Alloy Balls, Superalloy Balls, Inconel 600, Inconel 625, Inconel 718 Balls, High Temperature Alloy Balls, UNS N06600, UNS N06625, UNS N07718',
    description: `Inconel balls from ${siteConfig.name}, known for exceptional resistance to high temperatures, severe corrosion, and oxidation. Suitable for aerospace, chemical processing, and marine environments.`,
    imageSrc: inconelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-003',
    name: 'Copper',
    altName: 'Cu Balls, C10100 Copper Balls, C11000 ETP Copper Balls, High Conductivity Balls, Pure Copper Spheres, Oxygen-Free Copper Balls',
    description: `Pure copper balls supplied by ${siteConfig.name}, valued for their high electrical and thermal conductivity. Used in electronics, heat exchangers, and grounding applications.`,
    imageSrc: copperImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-004',
    name: 'Alloy-20',
    altName: 'Carpenter 20 Balls, UNS N08020 Nickel-Iron-Chromium Alloy Balls, Sulfuric Acid Resistant Balls, Corrosion Resistant Alloy Balls, CN7M Balls',
    description: `Alloy-20 balls offering superior resistance to aggressive corrosive environments, particularly sulfuric acid. A specialized product from ${siteConfig.name} for chemical industries.`,
    imageSrc: alloy20Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-005',
    name: 'Aluminium',
    altName: 'Aluminum Balls, Al Balls, 6061 Alloy Balls, 7075 Alloy Balls, Lightweight Metal Balls, Anodized Aluminum Balls, Aluminum Spheres',
    description: `Lightweight aluminium balls from ${siteConfig.name}, suitable for applications requiring low density, good corrosion resistance, and non-magnetic properties. Used in automotive and aerospace.`,
    imageSrc: aluminiumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-006',
    name: 'Rockbit Tool Steel',
    altName: 'Drill Bit Steel Balls, High Impact Steel Balls, Mining Tool Steel Balls, Wear Resistant Tool Steel Balls, Tungsten Carbide Composite Balls (often used in rock bits)',
    description: `Hard-wearing Rockbit tool steel balls designed for high-impact and abrasive conditions in drilling, mining, and construction applications. Supplied by ${siteConfig.name}.`,
    imageSrc: rockbitToolSteelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-007',
    name: 'K-Monel',
    altName: 'Monel K-500 Balls, UNS N05500 Nickel-Copper Alloy Balls, Age-Hardening Monel Balls, Seawater Resistant Balls, High Strength Monel Balls',
    description: `K-Monel balls, a precipitation-hardenable nickel-copper alloy offering excellent corrosion resistance, high strength, and hardness. From ${siteConfig.name} for demanding applications.`,
    imageSrc: kMonelImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-008',
    name: 'F55',
    altName: 'Super Duplex Stainless Steel Balls, UNS S32760 Balls, 1.4501 Balls, Ferralium 255 Balls, Pitting Resistant Steel Balls, Zeron 100 (similar properties)',
    description: `F55 Super Duplex balls from ${siteConfig.name}, providing excellent resistance to pitting, crevice corrosion, and stress corrosion cracking in chloride-containing environments.`,
    imageSrc: f55Img,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-009',
    name: 'Hastelloy',
    altName: 'Nickel-Molybdenum Alloy Balls, Hastelloy C-276 Balls, Hastelloy C-22 Balls, Corrosion Proof Balls, Acid Resistant Alloy Balls, UNS N10276, UNS N06022',
    description: `Hastelloy balls, renowned for outstanding resistance to a wide range of corrosive media, including strong acids and chlorides. Supplied by ${siteConfig.name} for critical chemical applications.`,
    imageSrc: hastelloyImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-010',
    name: 'Lead',
    altName: 'Pb Balls, Plumbum Balls, High Density Lead Spheres, Radiation Shielding Balls, Lead Shot (for ballast)',
    description: `Dense lead balls from ${siteConfig.name}, often used for radiation shielding, weighting applications, ballast, and some specific low-speed bearings.`,
    imageSrc: leadImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-011',
    name: 'Super Duplex',
    altName: 'UNS S32750 Balls, 2507 Super Duplex Balls, High Strength Corrosion Resistant Balls, Duplex Steel Balls, SAF 2507 Balls',
    description: `High-strength Super Duplex stainless steel balls (e.g., UNS S32750), offering excellent corrosion resistance in harsh environments like marine and chemical processing. Supplied by ${siteConfig.name}.`,
    imageSrc: superDuplexImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-012',
    name: 'Stellite',
    altName: 'Cobalt-Chromium Alloy Balls, Stellite 6 Balls, Hardfacing Alloy Balls, Wear Resistant Balls, High Temperature Cobalt Alloy Balls, Cobalt-Chrome-Tungsten Alloy Balls',
    description: `Wear-resistant Stellite balls from ${siteConfig.name}. These cobalt-chromium alloys are ideal for high-wear, high-temperature, and corrosive applications such as valves and pumps.`,
    imageSrc: stelliteImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-013',
    name: 'Titanium',
    altName: 'Ti Balls, Grade 2 Titanium Balls (CP Titanium), Grade 5 Titanium (Ti-6Al-4V) Balls, Lightweight Strong Balls, Biocompatible Titanium Balls, Corrosion-Proof Titanium Spheres',
    description: `Lightweight and strong titanium balls by ${siteConfig.name}, offering excellent corrosion resistance, biocompatibility, and high strength-to-weight ratio. Used in aerospace, medical, and chemical industries.`,
    imageSrc: titaniumImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-014',
    name: 'Tungsten',
    altName: 'W Balls, Wolfram Balls, Tungsten Carbide (WC) Balls, High Density Metal Balls, Heavy Alloy Balls, Tungsten Alloy Spheres',
    description: `High-density tungsten and tungsten carbide balls from ${siteConfig.name}, suitable for applications requiring high mass in a small volume, extreme hardness, or radiation shielding.`,
    imageSrc: tungstenImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-015',
    name: 'Phosphorous Bronze', // Corrected typo bzonze -> bronze in name
    altName: 'Phosphor Bronze Balls, Tin Bronze Balls, C51000 Bronze Balls, C54400 Bronze Balls, Bearing Bronze Balls, CuSnP Alloy Balls',
    description: `Phosphorous bronze balls from ${siteConfig.name}, known for their strength, toughness, low coefficient of friction, excellent wear resistance, and good corrosion resistance. Ideal for bearings and electrical contacts.`,
    imageSrc: phosphorousBronzeImg,
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-016',
    name: 'Alumina',
    altName: 'Aluminum Oxide Balls, Al2O3 Balls, Ceramic Alumina Grinding Balls, High Purity Alumina Balls, Alumina Oxide Ceramic Spheres (Technically ceramic, but sometimes listed with non-ferrous due to metal oxide nature)',
    description: `Hard and wear-resistant Alumina (Aluminum Oxide) ceramic balls. Used in various demanding industrial applications like grinding media, bearings, and valves. Supplied by ${siteConfig.name}.`,
    imageSrc: aluminaImg,
    category: 'Non-Ferrous Balls',
  },
  // Non-Metallic Balls Category
  {
    id: 'nmb-001',
    name: 'Plastic',
    altName: 'Polymer Balls, Nylon Balls, Polypropylene (PP) Balls, PTFE (Teflon) Balls, POM (Delrin/Acetal) Balls, HDPE Balls, Polyethylene Balls, Polyamide Balls',
    description: `Versatile plastic balls from ${siteConfig.name}, including Nylon, Polypropylene (PP), PTFE (Teflon), and POM (Delrin). Lightweight, corrosion-resistant, and suitable for low-friction applications, check valves, and flow indicators.`,
    imageSrc: plasticImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-002',
    name: 'Ruby',
    altName: 'Synthetic Ruby Balls, Corundum Balls, Aluminum Oxide (Al2O3) Gem Quality Balls, Precision Ruby Spheres, Jewel Bearings, Sapphire Balls (similar material)',
    description: `High-precision synthetic ruby balls by ${siteConfig.name}, known for extreme hardness, exceptional wear resistance, chemical inertness, and dimensional stability. Used in metrology, styli, and precision instruments.`,
    imageSrc: rubyImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-003',
    name: 'Glass',
    altName: 'Soda-Lime Glass Balls, Borosilicate Glass Balls, Precision Glass Spheres, Decorative Glass Balls, Chemically Inert Glass Balls, Glass Marbles (industrial grade)',
    description: `Corrosion-resistant glass balls (soda-lime or borosilicate) from ${siteConfig.name}. Ideal for check valves, flow meters, bearings in corrosive environments, and decorative purposes.`,
    imageSrc: glassImg,
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-004',
    name: 'Ceramic', // Generic name for the product
    altName: 'Technical Ceramic Balls, Alumina Ceramic Balls (Al2O3), Zirconia Ceramic Balls (ZrO2), Silicon Nitride Balls (Si3N4), Engineering Ceramic Spheres, Advanced Ceramic Balls',
    description: `Durable engineering ceramic balls offering excellent wear resistance, high-temperature stability, electrical insulation, and corrosion resistance. Supplied by ${siteConfig.name} for demanding applications.`,
    imageSrc: ceramicNonMetallicImg, // Variable name matches import
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-005',
    name: 'Silicon Nitride',
    altName: 'Si3N4 Balls, Ceramic Silicon Nitride Balls, High Performance Ceramic Balls, Bearing Grade Silicon Nitride Balls, Hot Pressed Silicon Nitride (HPSN) Balls',
    description: `High-performance silicon nitride (Si3N4) balls from ${siteConfig.name} with exceptional hardness, high strength, low density, and excellent thermal shock resistance. Used in hybrid bearings and high-speed applications.`,
    imageSrc: siliconNitrideImg,
    category: 'Non-Metallic Balls',
  },
  // Polish Media & Abrasives Category
  {
    id: 'pma-001',
    name: 'SS Straight Polish Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Finishing Pins, Tumbling Pins, Magnetic Polishing Pins, Non-Magnetic Polishing Pins, Micro Pins for Polishing, Jewelry Polishing Pins',
    description: `Stainless steel straight polish pins from ${siteConfig.name}, available in magnetic and non-magnetic variants. Ideal for fine finishing, deburring, and polishing of intricate parts in tumbling processes.`,
    imageSrc: ssStraightPolishPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-002',
    name: 'SS Cut Wire Short',
    altName: 'Stainless Steel Shot, Deburring Media, Cut Wire Abrasive Pellets, Short Cut Steel Shot, Tumbling Steel Media, Peening Media',
    description: `Short cut stainless steel wire shots by ${siteConfig.name}. An effective and durable abrasive media for deburring, cleaning, peening, and surface finishing of metal components.`,
    imageSrc: ssCutWireShortImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-003',
    name: 'Zinc Round Shots',
    altName: 'Zinc Blasting Media, Soft Abrasive Shots, Round Zinc Pellets, Die Cast Cleaning Media, Non-Ferrous Shot',
    description: `Round zinc shots for gentle cleaning, deburring, and finishing of delicate parts without excessive abrasion or material removal. Supplied by ${siteConfig.name}.`,
    imageSrc: zincRoundShotsImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-004',
    name: 'SS Cross Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Tumbling Media, Angle Cut Pins, Magnetic Cross Pins, Non-Magnetic Cross Pins, Finishing Media Pins, Bevel Cut Pins',
    description: `Stainless steel cross pins (angle cut) from ${siteConfig.name}, available as magnetic or non-magnetic. Designed for effective polishing, deburring, and reaching intricate areas of components.`,
    imageSrc: ssCrossPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-005',
    name: 'SS Magnetic Pic',
    altName: 'Magnetic Steel Pins, Micro Finishing Pins, Tumbling Pic Media, Nail Shaped Polishing Media, Satellite Pins',
    description: `Magnetic stainless steel pins (pic/nail shape) by ${siteConfig.name} for precision finishing and material handling in magnetic tumbling processes. Ideal for jewelry and small parts.`,
    imageSrc: ssMagneticPicImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-006',
    name: 'Mult Pin',
    altName: 'Multi-Faceted Pins, Star Shaped Tumbling Media, Angle Cut Star Media, High Performance Finishing Media, Conical Pins, Pyramid Pins (depending on specific multi-facet shape)',
    description: `Multi-faceted pins (often star-shaped) from ${siteConfig.name} for comprehensive surface treatment, deburring, and polishing in various industrial finishing applications.`,
    imageSrc: multPinImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-007',
    name: 'Zinc Cut Wire Shots', // Corrected typo wize -> wire in name
    altName: 'Zinc Shot Abrasive, Soft Blasting Media, Cut Zinc Wire Pellets, Non-Ferrous Blasting Media, Zinc Peening Media',
    description: `Cut zinc wire shots for surface preparation, cleaning, and finishing. Offers a softer alternative to steel media, preventing damage to delicate surfaces. Supplied by ${siteConfig.name}.`,
    imageSrc: zincCutWireShotsImg,
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-008',
    name: 'SS Round Cut Wire Short',
    altName: 'Stainless Steel Round Shot, Deburring Pellets, Short Round Steel Media, Peening Media, Conditioned Cut Wire Shot',
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
    imageSrc: firstpageNonMetallic,
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
    title: `Understanding Steel Ball Hardness: A Key to Industrial Performance with ${siteConfig.name}`,
    slug: 'steel-ball-hardness',
    excerpt: `Explore how steel ball hardness (HRC, Vickers) impacts durability and efficiency in bearings and more. ${siteConfig.name}, India's expert, explains.`,
    date: 'October 26, 2023',
    author: `Technical Team at ${siteConfig.name}`,
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost1/800/400',
    content: `<p>Steel ball hardness is a critical parameter dictating its suitability for various industrial applications. It directly influences a ball's wear resistance, load-bearing capacity, and overall lifespan. At ${siteConfig.name}, we meticulously control hardness levels to ensure optimal performance for our steel balls manufactured in India.</p><h3>Understanding Hardness Scales for Steel Balls</h3><p>Commonly, hardness is measured using scales like Rockwell (HRC), Vickers (HV), or Brinell (HB). For steel balls, HRC is widely used. The choice of hardness depends on the application; for instance, bearings require very high hardness (typically 60-67 HRC) to withstand repetitive stress, while applications like grinding media might prioritize toughness alongside hardness.</p><h3>Impact of Hardness on Steel Ball Performance</h3><ul><li><strong>Wear Resistance:</strong> Harder balls generally exhibit better resistance to abrasive wear, extending their service life and that of the components they interact with.</li><li><strong>Deformation Resistance:</strong> Higher hardness means less deformation under load, crucial for maintaining precision in bearings and other close-tolerance applications.</li><li><strong>Fatigue Life:</strong> For applications involving cyclic loading, appropriate hardness contributes significantly to improved fatigue life.</li></ul><h3>Quality Testing and Standards at ${siteConfig.name}</h3><p>We adhere to international standards like ISO 3290 and ASTM F2215 for hardness testing and grading of our steel balls. Our quality control processes involve rigorous testing to ensure every batch meets the specified hardness requirements, providing our customers with reliable and durable products for the Indian market and beyond.</p><p>For specific steel ball grades like EN-31 or AISI-52100, achieving the correct hardness is paramount for their intended use in precision bearings.</p>`,
    keywords: ['steel ball hardness', 'HRC rating', 'industrial steel balls', 'wear resistance', 'bearing quality India', 'Rama & Sons technical guide', 'EN31 steel balls', 'AISI 52100 hardness', ...siteConfig.keywords.slice(0,3)],
    relatedProductIds: ['fb-001', 'fb-003', 'fb-007']
  },
  {
    id: 'bp002',
    title: `Choosing the Right Polishing Media: A ${siteConfig.name} Guide for Indian Industries`,
    slug: 'choosing-polishing-media',
    excerpt: `Select the optimal polishing media (ceramic, plastic, steel) for your surface finishing needs in India. ${siteConfig.name} offers expert advice.`,
    date: 'November 05, 2023',
    author: `Finishing Experts at ${siteConfig.name}`,
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost2/800/400',
    content: `<p>Selecting the correct polishing media is paramount for achieving the desired surface finish efficiently and cost-effectively. ${siteConfig.name} offers a wide range of media tailored to diverse needs for Indian industries.</p><h3>Key Considerations for Selecting Polish Media:</h3><ul><li><strong>Material of the Workpiece:</strong> The media must be compatible with the material being polished. For instance, aggressive ceramic media is suitable for hard metals, while softer plastic or organic media is better for delicate parts or softer metals like aluminum or brass.</li><li><strong>Desired Finish:</strong> Are you aiming for deburring, a matte finish, or a high-gloss polish? Different media types, shapes, and sizes achieve different results. Our SS Straight Polish Pins are excellent for fine finishing.</li><li><strong>Operational Costs:</strong> Consider media lifespan, cycle times, and potential impact on equipment wear.</li></ul><h3>Types of Polishing Media Offered by ${siteConfig.name}:</h3><ul><li><strong>Ceramic Media:</strong> Ideal for heavy deburring, edge radiusing, and fast cutting on hard materials.</li><li><strong>Plastic Media:</strong> Good for general-purpose polishing, deburring, and pre-paint finishing on softer metals like aluminum or brass.</li><li><strong>Stainless Steel Media:</strong> Includes products like our SS Cut Wire Shorts and SS Magnetic Pics, used for burnishing, imparting a bright finish, and light deburring. Long-lasting and non-contaminating.</li><li><strong>Zinc Media:</strong> Our Zinc Round Shots and Zinc Cut Wire Shots offer gentle cleaning and finishing.</li></ul><p>Our experts at ${siteConfig.name}, based in Agra, can help you choose the perfect polishing media, such as our versatile Mult Pins, to optimize your finishing processes.</p>`,
    keywords: ['polishing media selection', 'surface finishing India', 'ceramic tumbling media', 'plastic polishing media', 'stainless steel shot supplier', 'deburring solutions', 'Rama & Sons guide', 'zinc shots', 'SS polish pins', ...siteConfig.keywords.slice(0,4)],
    relatedProductIds: ['pma-001', 'pma-002', 'pma-003', 'pma-005', 'pma-006', 'pma-007']
  },
  {
    id: 'bp003',
    title: `Steel Manufacturing Innovations: 2024 Trends with ${siteConfig.name}`,
    slug: 'steel-manufacturing-trends-2024',
    excerpt: `Stay updated on steel production advancements like AI quality control and sustainable practices with ${siteConfig.name}, India's manufacturing leader.`,
    date: 'November 15, 2023',
    author: `Industry Analysts at ${siteConfig.name}`,
    category: 'Industry News',
    imageSrc: 'https://picsum.photos/seed/blogpost3/800/400',
    content: `<p>The steel manufacturing industry is constantly evolving, driven by demands for higher quality, sustainability, and efficiency. ${siteConfig.name} is at the forefront of adopting these innovations in the Indian market.</p><h3>Key Steel Industry Trends for 2024:</h3><ul><li><strong>Sustainable Steel Production:</strong> Increased focus on reducing carbon footprint through energy-efficient processes, use of recycled materials, and exploration of green hydrogen in steelmaking.</li><li><strong>Advanced Metallurgy:</strong> Development of new steel alloys with superior properties, such as higher strength-to-weight ratios, enhanced corrosion resistance, and improved performance at extreme temperatures. This impacts products like our SS-300 and SS-400 series balls.</li><li><strong>Digitalization and AI:</strong> AI-driven quality control systems, predictive maintenance, and smart factory solutions are optimizing production processes and ensuring consistent product quality. ${siteConfig.name} is investing in these technologies to enhance our steel ball and media production.</li><li><strong>Additive Manufacturing (3D Printing):</strong> Growing use of 3D printing for creating complex steel components and custom tooling, offering design flexibility and reduced lead times, relevant for our custom made gauges.</li></ul><p>${siteConfig.name} is committed to continuous improvement and innovation, ensuring we provide our customers with cutting-edge steel products that meet the evolving demands of modern industry in India and globally.</p>`,
    keywords: ['steel manufacturing trends', '2024 steel industry', 'sustainable steel India', 'AI in steel production', 'additive manufacturing steel', 'Rama & Sons innovation', 'custom gauges', ...siteConfig.keywords.slice(0,5)],
    relatedProductIds: ['fb-004', 'fb-006', 'gg-002']
  },
   {
    id: 'bp004',
    title: `Why ${siteConfig.name}'s Stainless Steel Balls Offer Superior Corrosion Resistance`,
    slug: 'stainless-steel-corrosion-resistance',
    excerpt: `Learn about stainless steel's passivation process and its benefits in harsh environments. ${siteConfig.name} provides top-grade SS balls for Indian industries.`,
    date: 'November 28, 2023',
    author: `Material Scientists at ${siteConfig.name}`,
    category: 'Material Science',
    imageSrc: 'https://picsum.photos/seed/blogpost4/800/400',
    content: `<p>Stainless steel balls, a flagship product of ${siteConfig.name}, are renowned for their exceptional corrosion resistance, making them indispensable in numerous demanding environments across India.</p><h3>The Science of Passivation in Stainless Steel</h3><p>The key to stainless steel's corrosion resistance lies in its chromium content (typically at least 10.5%). When exposed to oxygen, chromium forms a thin, invisible, and highly adherent passive layer of chromium oxide (Cr₂O₃) on the surface. This layer acts as a barrier, protecting the underlying steel from corrosive agents. If scratched or damaged, this layer can self-repair in the presence of oxygen.</p><h3>Advantages of Stainless Steel Balls in Harsh Environments:</h3><ul><li><strong>Chemical Processing:</strong> Stainless steel balls (especially grades like SS 316, part of our SS-300 Series) resist attack from a wide range of chemicals, acids, and alkalis.</li><li><strong>Food and Beverage Industry:</strong> Their non-reactive and hygienic surface makes them ideal for food processing equipment where cleanliness and corrosion resistance are critical.</li><li><strong>Marine Applications:</strong> Certain grades of stainless steel offer excellent resistance to saltwater corrosion.</li><li><strong>Pharmaceutical Industry:</strong> Biocompatibility and resistance to sterilization processes make them suitable for medical and pharmaceutical applications.</li></ul><p>${siteConfig.name} offers various grades of stainless steel balls, such as SS 304, SS 316 (found in our SS-300 Series), and SS 440C (part of our SS-400 Series), each tailored for specific corrosive conditions and mechanical requirements, ensuring longevity and reliability for your applications in India.</p>`,
    keywords: ['stainless steel balls India', 'corrosion resistant steel', 'passivation process', 'AISI 304 vs 316', 'industrial applications steel', 'Rama & Sons material science', 'SS300 series balls', 'SS400 series balls', ...siteConfig.keywords.slice(0,6)],
    relatedProductIds: ['fb-004', 'fb-006']
  },
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
  },
  {
    id: 'bp010',
    title: `Maximizing Efficiency with ${siteConfig.name}'s Polish Media & Abrasives`,
    slug: 'efficient-polishing-with-rama-and-sons',
    excerpt: `Learn how to optimize your surface finishing processes using ${siteConfig.name}'s range of polish media, including stainless steel pins and zinc shots, for superior results in India.`,
    date: 'February 15, 2024',
    author: `Surface Finishing Team at ${siteConfig.name}`,
    category: 'Product Guides',
    imageSrc: 'https://picsum.photos/seed/blogpost10/800/400',
    content: `<p>Achieving the perfect surface finish requires the right polish media and abrasives. ${siteConfig.name} offers a comprehensive selection designed to enhance efficiency and quality for various Indian industries.</p><h3>Optimizing Your Finishing Process:</h3><ul><li><strong>Material Compatibility:</strong> Match the media to your workpiece. Our SS Straight Polish Pins are great for metals, while softer media might be needed for delicate items.</li><li><strong>Desired Outcome:</strong> For aggressive deburring, consider SS Cut Wire Short. For fine polishing, smaller pins or specific ceramic media might be better.</li><li><strong>Process Parameters:</strong> Tumbling time, speed, and the ratio of media to parts all play a crucial role. ${siteConfig.name} can advise on optimal settings.</li></ul><h3>Featured Polish Media from ${siteConfig.name}:</h3><ul><li><strong>Stainless Steel Media:</strong> Including various pins (Straight, Cross, Magnetic Pic) and cut wire shots (Round, Short) for versatile finishing.</li><li><strong>Zinc Media:</strong> Zinc Round Shots and Cut Wire Shots for gentler applications.</li><li><strong>Mult Pin:</strong> For reaching complex geometries and achieving uniform finishes.</li></ul><p>Consult with ${siteConfig.name} to find the most effective polish media and abrasives strategy to elevate your product quality and operational efficiency.</p>`,
    keywords: ['polish media efficiency', 'abrasives guide India', 'surface finishing optimization', 'stainless steel polishing media', 'zinc cut wire shots', `${siteConfig.name} finishing solutions`, 'tumbling media', ...siteConfig.keywords.slice(0,12)],
    relatedProductIds: ['pma-001', 'pma-002', 'pma-003', 'pma-004', 'pma-005', 'pma-006', 'pma-007', 'pma-008']
  },
  {
    id: 'bp011',
    title: `The Ultimate Guide to EN31 Steel Balls from ${siteConfig.name}`,
    slug: 'en31-steel-balls-guide',
    excerpt: `Discover why EN31 steel balls are crucial for precision bearings and high-stress applications. ${siteConfig.name} provides top-quality EN31 steel balls in India.`,
    date: 'March 01, 2024',
    author: `Alloy Specialists at ${siteConfig.name}`,
    category: 'Material Deep Dive',
    imageSrc: 'https://picsum.photos/seed/blogpost11/800/400',
    content: `<p>EN31, also known as SAE 52100 or 100Cr6, is a high-carbon, chromium alloy steel renowned for its exceptional hardness, wear resistance, and dimensional stability. At ${siteConfig.name}, we specialize in manufacturing EN31 steel balls for the most demanding industrial applications across India.</p><h3>Key Properties of EN31 Steel:</h3><ul><li><strong>High Hardness:</strong> Achieves Rockwell C hardness (HRC) values typically between 60-67 after heat treatment, making it suitable for applications with high contact stress.</li><li><strong>Excellent Wear Resistance:</strong> The chromium content contributes to superior resistance against abrasive and adhesive wear.</li><li><strong>Good Fatigue Strength:</strong> Can withstand high cyclic loading, crucial for bearing life.</li><li><strong>Dimensional Stability:</strong> Maintains its shape and size under varying loads and temperatures.</li></ul><h3>Applications of EN31 Steel Balls:</h3><ul><li><strong>Precision Ball Bearings:</strong> The primary application, used in automotive, aerospace, and industrial machinery.</li><li><strong>Constant Velocity (CV) Joints:</strong> Found in automotive drivetrains.</li><li><strong>Ballscrews and Linear Motion Systems:</strong> For precise linear movement.</li><li><strong>Grinding Media:</strong> In specialized, high-performance grinding applications.</li></ul><p>When you source EN31 steel balls from ${siteConfig.name}, you are investing in a product engineered for performance and longevity. Our manufacturing processes ensure tight tolerances and consistent quality for all your needs in Agra and beyond.</p>`,
    keywords: ['EN31 steel balls', 'SAE 52100 steel', '100Cr6 bearing steel', 'high carbon steel balls', 'precision bearing balls', 'Rama & Sons steel', 'steel ball manufacturer India', 'wear resistant steel', ...siteConfig.keywords.slice(0,5)],
    relatedProductIds: ['fb-001', 'fb-003', 'fb-007']
  },
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
  },
  {
    id: 'bp014',
    title: `The Importance of Steel Ball Roundness and Surface Finish by ${siteConfig.name}`,
    slug: 'steel-ball-roundness-surface-finish',
    excerpt: `Discover how roundness (sphericity) and surface finish affect steel ball performance in bearings and valves. ${siteConfig.name} ensures top-grade quality in India.`,
    date: 'April 18, 2024',
    author: `Quality Assurance at ${siteConfig.name}`,
    category: 'Technical Insights',
    imageSrc: 'https://picsum.photos/seed/blogpost14/800/400',
    content: `<p>Beyond hardness, the roundness (sphericity) and surface finish of steel balls are critical for their performance in precision applications. ${siteConfig.name} manufactures balls to stringent geometric tolerances.</p>
             <h3>Why Roundness Matters:</h3>
             <p>High sphericity ensures smooth rotation, reduces vibration and noise, and distributes load evenly in bearings. Deviations can lead to premature wear and failure. We produce EN-31 and other bearing-grade balls with excellent roundness.</p>
             <h3>Impact of Surface Finish:</h3>
             <p>A smooth surface finish (low Ra value) minimizes friction, reduces wear, and improves fatigue life. A rough surface can act as a stress concentrator and impede smooth operation. ${siteConfig.name}'s manufacturing processes are designed to achieve superior surface finishes.</p>
             <p>For applications like valves, a good surface finish on the ball ensures a proper seal. For polishing applications, the surface finish of the media itself, like our SS Polish Pins, is key.</p>`,
    keywords: ['steel ball roundness', 'surface finish Ra', 'sphericity', 'bearing performance', 'precision manufacturing', 'Rama & Sons quality', 'EN31 steel balls', 'SS polish pins', ...siteConfig.keywords.slice(0,8)],
    relatedProductIds: ['fb-001', 'fb-007', 'pma-001']
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
  },
  {
    id: 'bp016',
    title: `The Ultimate Guide to AISI 1010 Low Carbon Steel Balls by ${siteConfig.name}`,
    slug: 'aisi-1010-low-carbon-steel-balls',
    excerpt: `Explore the properties, applications, and benefits of AISI 1010 low carbon steel balls. ${siteConfig.name} is your trusted manufacturer in India for cost-effective solutions.`,
    date: 'May 12, 2024',
    author: `Steel Experts at ${siteConfig.name}`,
    category: 'Material Deep Dive',
    imageSrc: 'https://picsum.photos/seed/blogpost16/800/400',
    content: `<p>AISI 1010 is a popular grade of low carbon steel, widely used for manufacturing steel balls due to its excellent formability, weldability, and cost-effectiveness. ${siteConfig.name} produces high-quality AISI 1010 steel balls for various general-purpose applications across India.</p><h3>Key Characteristics of AISI 1010 Steel Balls:</h3><ul><li><strong>Low Carbon Content:</strong> Typically contains around 0.08-0.13% carbon, making it relatively soft and ductile.</li><li><strong>Good Formability:</strong> Easily formed into spherical shapes with consistent dimensions.</li><li><strong>Weldability:</strong> Can be easily welded if required for specific assemblies.</li><li><strong>Case Hardening:</strong> While naturally soft, AISI 1010 steel balls can be case hardened to improve surface hardness and wear resistance while maintaining a ductile core.</li><li><strong>Cost-Effective:</strong> Generally more economical compared to high carbon or alloy steel balls.</li></ul><h3>Common Applications:</h3><ul><li>Light-load bearings where high hardness is not critical.</li><li>Furniture casters and drawer slides.</li><li>Toys and recreational equipment.</li><li>Agitators and mixing applications.</li><li>Welded assemblies and components.</li></ul><p>For applications not requiring extreme hardness or corrosion resistance, AISI 1010 steel balls from ${siteConfig.name} offer a reliable and economical solution. Contact us for your requirements in Agra and all over India.</p>`,
    keywords: ['AISI 1010 steel balls', 'low carbon steel balls', 'mild steel balls', 'case hardened steel balls', 'cost-effective steel balls', 'Rama & Sons steel products', 'steel ball manufacturer Agra', ...siteConfig.keywords.slice(0,3)],
    relatedProductIds: ['fb-002']
  },
  {
    id: 'bp017',
    title: `Understanding SS 400 Series Martensitic Stainless Steel Balls with ${siteConfig.name}`,
    slug: 'ss-400-series-stainless-steel-balls',
    excerpt: `Learn about SS 400 series (410, 420, 440C) martensitic stainless steel balls - their hardness, magnetic properties, and applications. ${siteConfig.name} is your Indian supplier.`,
    date: 'May 20, 2024',
    author: `Metallurgists at ${siteConfig.name}`,
    category: 'Material Deep Dive',
    imageSrc: 'https://picsum.photos/seed/blogpost17/800/400',
    content: `<p>The SS 400 series of stainless steels, including grades like SS 410, SS 420, and SS 440C, are martensitic types known for their high strength, hardness, and wear resistance after heat treatment. ${siteConfig.name} manufactures these specialized stainless steel balls for demanding industrial use in India.</p><h3>Key Features of SS 400 Series Steel Balls:</h3><ul><li><strong>High Hardness:</strong> Can be heat-treated to achieve significant hardness, particularly SS 440C, making them suitable for bearing applications and cutlery.</li><li><strong>Good Wear Resistance:</strong> The hardness contributes to good resistance against abrasive wear.</li><li><strong>Magnetic Properties:</strong> Unlike austenitic stainless steels (e.g., SS 304/316), martensitic stainless steels are magnetic.</li><li><strong>Moderate Corrosion Resistance:</strong> Offer better corrosion resistance than carbon steels but generally less than austenitic grades. Resistance varies among the 400 series grades.</li></ul><h3>Specific Grades and Applications:</h3><ul><li><strong>SS 410:</strong> A general-purpose martensitic stainless steel offering good strength and corrosion resistance in mild environments. Used in valves, pumps, and cutlery.</li><li><strong>SS 420:</strong> Higher carbon content than SS 410, allowing for greater hardness. Used for cutlery, surgical instruments, and wear-resistant parts.</li><li><strong>SS 440C:</strong> Highest carbon content in the 400 series, achieving the highest hardness and wear resistance. Excellent for ball bearings, valve components, and high-wear applications.</li></ul><p>When high hardness and wear resistance are paramount, and moderate corrosion resistance is acceptable, SS 400 series steel balls from ${siteConfig.name} are an excellent choice. Our team in Agra can assist you in selecting the right grade for your application.</p>`,
    keywords: ['SS 400 series steel balls', 'martensitic stainless steel', 'SS 410 balls', 'SS 420 balls', 'SS 440C steel balls', 'hardened stainless steel', 'magnetic steel balls', 'Rama & Sons Agra', ...siteConfig.keywords.slice(0,4)],
    relatedProductIds: ['fb-006']
  }
];

