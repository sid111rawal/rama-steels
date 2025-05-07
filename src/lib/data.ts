import type { StaticImageData } from 'next/image';

// Main Category Images (already imported, assuming paths are correct)
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png'; // Corrected folder name
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
import zincCutWireShotsImg from '../images/polish-media/zinc cut wize shots.png';
import ssRoundCutWireShortImg from '../images/polish-media/ss round cut wire short.jpg';


export interface Product {
  id: string;
  name: string;
  altName?: string; // Added alternative name field
  description: string;
  imageSrc: StaticImageData | string;
  imageHint: string;
  category: string;
}

export interface ProductCategory {
  id:string;
  name: string;
  description: string;
  imageSrc: StaticImageData;
  imageHint: string;
  path: string;
}

export const productsData: Product[] = [
  // Ferrous Balls Category
  {
    id: 'fb-001',
    name: 'EN-31',
    altName: 'SAE 52100, 100Cr6, 1.3505, Alloy Steel, Bearing Steel',
    description: 'High-carbon, chromium alloy steel balls, excellent for bearings and high-wear applications.',
    imageSrc: en31Img,
    imageHint: 'EN-31 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010',
    altName: 'Low Carbon Steel, Mild Steel, UNS G10100',
    description: 'Low-carbon steel balls, suitable for general-purpose applications requiring good formability.',
    imageSrc: aisi1010Img,
    imageHint: 'AISI-1010 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6',
    altName: 'AISI 52100, EN31, 1.3505, Bearing Steel',
    description: 'High-carbon chromium bearing steel balls, known for high hardness and wear resistance.',
    imageSrc: oneHundredCR6Img,
    imageHint: '100CR6 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 Series',
    altName: 'Austenitic Stainless Steel, SS304 (UNS S30400, 1.4301), SS316 (UNS S31600, 1.4401)',
    description: 'Corrosion-resistant austenitic stainless steel balls, widely used in various industries.',
    imageSrc: ss300SeriesImg,
    imageHint: 'SS-300 series steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9',
    altName: 'AISI 1050, Medium Carbon Steel, C50, 080M50',
    description: 'Medium carbon steel balls offering a good balance of strength and toughness.',
    imageSrc: en9Img,
    imageHint: 'EN-9 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 Series',
    altName: 'Martensitic Stainless Steel, SS410 (UNS S41000, 1.4006), SS420 (UNS S42000, 1.4021), SS440C (UNS S44004, 1.4125)',
    description: 'Martensitic stainless steel balls known for high hardness and magnetic properties after heat treatment.',
    imageSrc: ss400SeriesImg,
    imageHint: 'SS-400 series steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100',
    altName: 'EN31, 100Cr6, Bearing Steel, High Carbon Chromium Steel',
    description: 'High-carbon, chromium-alloy steel balls primarily used for precision bearings.',
    imageSrc: aisi52100Img,
    imageHint: 'AISI-52100 steel ball',
    category: 'Ferrous Balls',
  },
  // Gauges Category
  {
    id: 'gg-001',
    name: 'Type Og Gauge',
    altName: 'O-G Gauge, Measurement Tool',
    description: 'Precision Type Og Gauge for accurate industrial measurements.',
    imageSrc: typeOgGaugeImg,
    imageHint: 'type og gauge',
    category: 'Gauges',
  },
  {
    id: 'gg-002',
    name: 'Custom Made Gauges',
    altName: 'Bespoke Gauges, Special Gauges, Tailored Gauges',
    description: 'Gauges designed and manufactured to specific customer requirements for unique applications.',
    imageSrc: customMadeGaugesImg,
    imageHint: 'custom gauges',
    category: 'Gauges',
  },
  {
    id: 'gg-003',
    name: 'Plug Gauges',
    altName: 'Go/No-Go Gauges, Pin Gauges, Hole Gauges',
    description: 'High-quality plug gauges for verifying hole diameters and dimensional tolerances.',
    imageSrc: plugGaugesImg,
    imageHint: 'plug gauges set',
    category: 'Gauges',
  },
  {
    id: 'gg-004',
    name: 'Gauge',
    altName: 'Measurement Gauge, Industrial Gauge Tool',
    description: 'General-purpose industrial gauge for various measurement and inspection tasks.',
    imageSrc: gaugeImg,
    imageHint: 'industrial gauge',
    category: 'Gauges',
  },
  // Non-Ferrous Balls Category
  {
    id: 'nfb-001',
    name: 'Brass',
    altName: 'Copper-Zinc Alloy, C26000, C27000, Yellow Brass',
    description: 'Brass balls offering good corrosion resistance and electrical conductivity.',
    imageSrc: brassImg,
    imageHint: 'brass ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-002',
    name: 'Inconel',
    altName: 'Nickel-Chromium Alloy, Superalloy, Inconel 600, Inconel 625, Inconel 718',
    description: 'Inconel balls known for resistance to high temperatures and severe corrosion.',
    imageSrc: inconelImg,
    imageHint: 'inconel ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-003',
    name: 'Copper',
    altName: 'Cu, C10100, C11000, ETP Copper',
    description: 'Pure copper balls, excellent for applications requiring high electrical and thermal conductivity.',
    imageSrc: copperImg,
    imageHint: 'copper ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-004',
    name: 'Alloy-20',
    altName: 'Carpenter 20, UNS N08020, Nickel-Iron-Chromium Alloy',
    description: 'Alloy-20 balls offering superior resistance to aggressive corrosive environments like sulfuric acid.',
    imageSrc: alloy20Img,
    imageHint: 'alloy-20 ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-005',
    name: 'Aluminium',
    altName: 'Aluminum, Al, 6061 Alloy, 7075 Alloy',
    description: 'Lightweight aluminium balls, suitable for applications requiring low density and good corrosion resistance.',
    imageSrc: aluminiumImg,
    imageHint: 'aluminium ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-006',
    name: 'Rockbit Tool Steel',
    altName: 'Drill Bit Steel, High Impact Steel', // This is typically a ferrous tool steel, altName reflects usage.
    description: 'Hard-wearing tool steel balls designed for high-impact and abrasive conditions in drilling.',
    imageSrc: rockbitToolSteelImg,
    imageHint: 'rockbit tool steel ball',
    category: 'Non-Ferrous Balls', // Category as per user's existing data structure
  },
  {
    id: 'nfb-007',
    name: 'K-Monel',
    altName: 'Monel K-500, UNS N05500, Nickel-Copper Alloy',
    description: 'K-Monel balls, a precipitation-hardenable nickel-copper alloy with excellent corrosion resistance and high strength.',
    imageSrc: kMonelImg,
    imageHint: 'k-monel ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-008',
    name: 'F55',
    altName: 'Super Duplex Stainless Steel, UNS S32760, 1.4501, Ferralium 255',
    description: 'F55 Super Duplex balls, providing excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.',
    imageSrc: f55Img,
    imageHint: 'f55 super duplex ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-009',
    name: 'Hastelloy',
    altName: 'Nickel-Molybdenum Alloy, Hastelloy C-276, Hastelloy C-22',
    description: 'Hastelloy balls, known for outstanding resistance to a wide range of corrosive media, including acids and chlorides.',
    imageSrc: hastelloyImg,
    imageHint: 'hastelloy ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-010',
    name: 'Lead',
    altName: 'Pb, Plumbum',
    description: 'Dense lead balls, often used for radiation shielding, weighting applications, and some specific bearings.',
    imageSrc: leadImg,
    imageHint: 'lead ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-011',
    name: 'Super Duplex',
    altName: 'Super Duplex Stainless Steel, UNS S32750, 2507',
    description: 'High-strength Super Duplex stainless steel balls, offering excellent corrosion resistance in harsh environments.',
    imageSrc: superDuplexImg,
    imageHint: 'super duplex ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-012',
    name: 'Stellite',
    altName: 'Cobalt-Chromium Alloy, Stellite 6, Hardfacing Alloy',
    description: 'Wear-resistant Stellite balls, cobalt-chromium alloys ideal for high-wear and high-temperature applications.',
    imageSrc: stelliteImg,
    imageHint: 'stellite ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-013',
    name: 'Titanium',
    altName: 'Ti, Grade 2 Titanium, Grade 5 Titanium (Ti-6Al-4V)',
    description: 'Lightweight and strong titanium balls, offering excellent corrosion resistance and biocompatibility.',
    imageSrc: titaniumImg,
    imageHint: 'titanium ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-014',
    name: 'Tungsten',
    altName: 'W, Wolfram, Tungsten Carbide (WC if applicable)',
    description: 'High-density tungsten balls, suitable for applications requiring high mass in a small volume or extreme hardness (if carbide).',
    imageSrc: tungstenImg,
    imageHint: 'tungsten ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-015',
    name: 'Phosphorous Bronze',
    altName: 'Phosphor Bronze, Tin Bronze, C51000, C54400',
    description: 'Phosphorous bronze balls, known for their strength, toughness, low coefficient of friction, and good wear resistance.',
    imageSrc: phosphorousBronzeImg,
    imageHint: 'phosphorous bronze ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-016',
    name: 'Alumina',
    altName: 'Aluminum Oxide, Al2O3, Ceramic Alumina',
    description: 'Hard and wear-resistant Alumina (Aluminum Oxide) ceramic balls, used in various demanding industrial applications.',
    imageSrc: aluminaImg,
    imageHint: 'alumina ceramic ball',
    category: 'Non-Ferrous Balls',
  },
  // Non-Metallic Balls Category
  {
    id: 'nmb-001',
    name: 'Plastic',
    altName: 'Polymer Balls, Nylon Balls, Polypropylene (PP) Balls, PTFE Balls (Teflon), POM Balls (Delrin/Acetal)',
    description: 'Versatile plastic balls, lightweight and resistant to chemicals. Suitable for various low-friction applications.',
    imageSrc: plasticImg,
    imageHint: 'plastic balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-002',
    name: 'Ruby',
    altName: 'Synthetic Ruby, Corundum, Aluminum Oxide (Al2O3) Gem Quality',
    description: 'High-precision ruby balls, known for extreme hardness, wear resistance, and dimensional stability.',
    imageSrc: rubyImg,
    imageHint: 'ruby balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-003',
    name: 'Glass',
    altName: 'Soda-Lime Glass Balls, Borosilicate Glass Balls',
    description: 'Corrosion-resistant glass balls, ideal for check valves, flow meters, and decorative purposes.',
    imageSrc: glassImg,
    imageHint: 'glass balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-004',
    name: 'Ceramic',
    altName: 'Technical Ceramics, Alumina Balls, Zirconia Balls, Silicon Nitride Balls',
    description: 'Durable ceramic balls offering excellent wear resistance, high-temperature stability, and electrical insulation.',
    imageSrc: ceramicNonMetallicImg,
    imageHint: 'ceramic balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-005',
    name: 'Silicon Nitride',
    altName: 'Si3N4, Ceramic Silicon Nitride',
    description: 'High-performance silicon nitride balls with exceptional hardness, strength, and thermal shock resistance.',
    imageSrc: siliconNitrideImg,
    imageHint: 'silicon nitride balls',
    category: 'Non-Metallic Balls',
  },
  // Polish Media & Abrasives Category
  {
    id: 'pma-001',
    name: 'SS Straight Polish Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Finishing Pins, Tumbling Pins',
    description: 'Stainless steel straight polish pins, available in magnetic and non-magnetic variants for finishing.',
    imageSrc: ssStraightPolishPinImg,
    imageHint: 'stainless steel polish pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-002',
    name: 'SS Cut Wire Short',
    altName: 'Stainless Steel Shot, Deburring Media, Cut Wire Abrasive',
    description: 'Short cut stainless steel wire shots, effective for deburring, cleaning, and surface finishing.',
    imageSrc: ssCutWireShortImg,
    imageHint: 'stainless steel cut wire',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-003',
    name: 'Zinc Round Shots',
    altName: 'Zinc Blasting Media, Soft Abrasive Shots',
    description: 'Round zinc shots for gentle cleaning and finishing of delicate parts without excessive abrasion.',
    imageSrc: zincRoundShotsImg,
    imageHint: 'zinc round shots',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-004',
    name: 'SS Cross Pin Magnetic or Non-Magnetic',
    altName: 'Stainless Steel Tumbling Media, Angle Cut Pins',
    description: 'Stainless steel cross pins, available as magnetic or non-magnetic, for effective polishing and deburring.',
    imageSrc: ssCrossPinImg,
    imageHint: 'stainless steel cross pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-005',
    name: 'SS Magnetic Pic',
    altName: 'Magnetic Steel Pins, Micro Finishing Pins',
    description: 'Magnetic stainless steel picks/pins for precision finishing and material handling in magnetic tumbling processes.',
    imageSrc: ssMagneticPicImg,
    imageHint: 'magnetic steel pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-006',
    name: 'Mult Pin', // This name is quite generic
    altName: 'Multi-Faceted Pins, Star Media, Angle Cut Media',
    description: 'Multi-faceted pins for comprehensive surface treatment and polishing in various industrial applications.',
    imageSrc: multPinImg,
    imageHint: 'multi-faceted pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-007',
    name: 'Zinc Cut Wire Shots',
    altName: 'Zinc Shot Abrasive, Soft Blasting Media',
    description: 'Cut zinc wire shots for surface preparation and finishing, offering a softer alternative to steel media.',
    imageSrc: zincCutWireShotsImg,
    imageHint: 'zinc cut wire shots',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-008',
    name: 'SS Round Cut Wire Short',
    altName: 'Stainless Steel Round Shot, Deburring Pellets',
    description: 'Short, round cut stainless steel wire for effective deburring and surface conditioning of metal parts.',
    imageSrc: ssRoundCutWireShortImg,
    imageHint: 'round cut stainless steel wire',
    category: 'Polish Media & Abrasives',
  },
];

export const mainCategoriesData: ProductCategory[] = [
  {
    id: 'cat-ferrous',
    name: 'Ferrous Metal Balls',
    description: 'High-strength steel balls including alloy, carbon, and stainless steel variants for various industrial applications.',
    imageSrc: firstpageFerrous,
    imageHint: 'ferrous balls',
    path: '/products?category=Ferrous+Balls',
  },
  {
    id: 'cat-non-ferrous',
    name: 'Non-Ferrous Metal Balls',
    description: 'Balls made from materials like brass, copper, aluminum, titanium, and other specialized non-ferrous alloys.',
    imageSrc: firstpageNonFerrous,
    imageHint: 'non-ferrous balls',
    path: '/products?category=Non-Ferrous+Balls',
  },
  {
    id: 'cat-non-metallic',
    name: 'Non-Metallic Balls',
    description: 'Includes ceramic, glass, plastic, and ruby balls for specialized uses requiring unique material properties.',
    imageSrc: firstpageNonMetallic,
    imageHint: 'non-metallic balls',
    path: '/products?category=Non-Metallic+Balls',
  },
  {
    id: 'cat-gauges',
    name: 'Precision Gauges',
    description: 'High-accuracy gauges, including plug gauges and custom-made solutions for measurement and quality control.',
    imageSrc: firstpageGauge,
    imageHint: 'precision gauges',
    path: '/products?category=Gauges',
  },
  {
    id: 'cat-polish-media',
    name: 'Polish Media &amp; Abrasives',
    description: 'Effective media such as stainless steel pins, cut wire shots, and zinc shots for surface finishing, deburring, and polishing.',
    imageSrc: firstpagePolishMedia,
    imageHint: 'polishing media',
    path: '/products?category=Polish+Media+%26+Abrasives',
  },
];