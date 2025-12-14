
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


// Import blog posts from category files
import { technicalInsightsPosts } from './blog-posts/technical-insights';
import { productGuidesPosts } from './blog-posts/product-guides';
import { industryNewsPosts } from './blog-posts/industry-news';
import { materialSciencePosts } from './blog-posts/material-science';
import { useCasesPosts } from './blog-posts/use-cases';
import { qualityControlPosts } from './blog-posts/quality-control';
import { companyInsightsPosts } from './blog-posts/company-insights';
import { materialDeepDivePosts } from './blog-posts/material-deep-dive';
import { materialComparisonPosts } from './blog-posts/material-comparison';

// Combine all blog posts from different categories
export const blogPostsData: BlogPost[] = [
  ...technicalInsightsPosts,
  ...productGuidesPosts,
  ...industryNewsPosts,
  ...materialSciencePosts,
  ...useCasesPosts,
  ...qualityControlPosts,
  ...companyInsightsPosts,
  ...materialDeepDivePosts,
  ...materialComparisonPosts,
];

// Get unique categories from blog posts
export const blogCategories = Array.from(
  new Set(blogPostsData.map(post => post.category))
).sort();
