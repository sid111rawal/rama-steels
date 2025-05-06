
import type { StaticImageData } from 'next/image';

// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per user's latest request.
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
import phosphorousBronzeImg from '../images/non-ferrous/phosphorous bzonze.png'; // Note: filename "bzonze"
import aluminaImg from '../images/non-ferrous/alumina.png';

// Non-Metallic Product Images
import plasticImg from '../images/non-mettalic/plastic.png';
import rubyImg from '../images/non-mettalic/ruby.png';
import glassImg from '../images/non-mettalic/glass.png';
import ceramicNonMetallicImg from '../images/non-mettalic/ceramic.png'; // Corrected folder name
import siliconNitrideImg from '../images/non-mettalic/silicon nitride.png';

// Polish Media & Abrasives Product Images
import ssStraightPolishPinImg from '../images/polish-media/ss straight polish pin magnetic or non-magnetic.jpg';
import ssCutWireShortImg from '../images/polish-media/ss cut wire short.jpg';
import zincRoundShotsImg from '../images/polish-media/zinc round shots.jpg';
import ssCrossPinImg from '../images/polish-media/ss cross pin magnetic or non-magnetic.jpg';
import ssMagneticPicImg from '../images/polish-media/ss magnetic pic.jpg';
import multPinImg from '../images/polish-media/mult pin.jpg';
import zincCutWireShotsImg from '../images/polish-media/zinc cut wize shots.png'; // Corrected "wize" in import name
import ssRoundCutWireShortImg from '../images/polish-media/ss round cut wire short.jpg';


export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: StaticImageData | string; // Allow both string URLs and static image data
  imageHint: string;
  category: string;
}

export interface ProductCategory {
  id:string;
  name: string;
  description: string;
  imageSrc: StaticImageData;
  imageHint: string;
  path: string; // Path for linking, e.g., to a category-specific page
}

// Updated product data to use imported static images
export const productsData: Product[] = [
  // Ferrous Balls Category
  {
    id: 'fb-001',
    name: 'EN-31',
    description: 'High-quality EN-31 ferrous ball for demanding industrial applications. Known for its high hardness and excellent wear resistance.',
    imageSrc: en31Img,
    imageHint: 'EN-31 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010',
    description: 'Precision AISI-1010 low-carbon steel ball, suitable for various general-purpose applications. Offers good formability.',
    imageSrc: aisi1010Img,
    imageHint: 'AISI-1010 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6',
    description: 'Durable 100CR6 bearing steel ball, known for its high hardness, wear resistance, and good fatigue strength. Equivalent to AISI 52100.',
    imageSrc: oneHundredCR6Img,
    imageHint: '100CR6 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 Series',
    description: 'Corrosion-resistant SS-300 series austenitic stainless steel balls (e.g., 304, 316). Ideal for food processing and medical applications.',
    imageSrc: ss300SeriesImg,
    imageHint: 'SS-300 series steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9',
    description: 'Versatile EN-9 medium carbon steel ball offering good strength and toughness. Suitable for automotive and engineering parts.',
    imageSrc: en9Img,
    imageHint: 'EN-9 steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 Series',
    description: 'SS-400 series martensitic stainless steel balls (e.g., 420, 440C) with excellent magnetic properties and high hardness after heat treatment.',
    imageSrc: ss400SeriesImg,
    imageHint: 'SS-400 series steel ball',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100',
    description: 'High-carbon, chromium-containing low alloy steel AISI-52100 bearing quality ferrous ball for precision bearings and demanding applications.',
    imageSrc: aisi52100Img,
    imageHint: 'AISI-52100 steel ball',
    category: 'Ferrous Balls',
  },
  // Gauges Category
  {
    id: 'gg-001',
    name: 'Type Og Gauge',
    description: 'Precision Type Og Gauge for accurate measurements in various industrial settings. High durability and reliability.',
    imageSrc: typeOgGaugeImg,
    imageHint: 'type og gauge',
    category: 'Gauges',
  },
  {
    id: 'gg-002',
    name: 'Custom Made Gauges',
    description: 'Tailor-made gauges designed to meet specific customer requirements. High precision and quality for unique applications.',
    imageSrc: customMadeGaugesImg,
    imageHint: 'custom gauges',
    category: 'Gauges',
  },
  {
    id: 'gg-003',
    name: 'Plug Gauges',
    description: 'High-quality plug gauges for verifying hole diameters and tolerances. Essential for quality control processes.',
    imageSrc: plugGaugesImg,
    imageHint: 'plug gauges set',
    category: 'Gauges',
  },
  {
    id: 'gg-004',
    name: 'Gauge',
    description: 'General-purpose industrial gauge for various measurement tasks. Robust construction for long-lasting performance.',
    imageSrc: gaugeImg,
    imageHint: 'industrial gauge',
    category: 'Gauges',
  },
  // Non-Ferrous Balls Category
  {
    id: 'nfb-001',
    name: 'Brass',
    description: 'High-quality Brass non-ferrous ball, offering good corrosion resistance and electrical conductivity.',
    imageSrc: brassImg,
    imageHint: 'brass ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-002',
    name: 'Inconel',
    description: 'Durable Inconel non-ferrous ball, known for its resistance to high temperatures and corrosion.',
    imageSrc: inconelImg,
    imageHint: 'inconel ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-003',
    name: 'Copper',
    description: 'Pure Copper non-ferrous ball, excellent for electrical conductivity and thermal transfer applications.',
    imageSrc: copperImg,
    imageHint: 'copper ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-004',
    name: 'Alloy-20',
    description: 'Alloy-20 non-ferrous ball, offering superior resistance to sulfuric acid and other corrosive environments.',
    imageSrc: alloy20Img,
    imageHint: 'alloy-20 ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-005',
    name: 'Aluminium',
    description: 'Lightweight Aluminium non-ferrous ball, ideal for applications requiring low density and good corrosion resistance.',
    imageSrc: aluminiumImg,
    imageHint: 'aluminium ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-006',
    name: 'Rockbit Tool Steel',
    description: 'Hard-wearing Rockbit Tool Steel non-ferrous ball, designed for high-impact and abrasive conditions.',
    imageSrc: rockbitToolSteelImg,
    imageHint: 'rockbit tool steel ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-007',
    name: 'K-Monel',
    description: 'K-Monel non-ferrous ball, a precipitation-hardenable nickel-copper alloy with excellent corrosion resistance and high strength.',
    imageSrc: kMonelImg,
    imageHint: 'k-monel ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-008',
    name: 'F55',
    description: 'F55 (Super Duplex) non-ferrous ball, providing excellent resistance to pitting and crevice corrosion.',
    imageSrc: f55Img,
    imageHint: 'f55 super duplex ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-009',
    name: 'Hastelloy',
    description: 'Hastelloy non-ferrous ball, known for outstanding resistance to a wide range of corrosive media.',
    imageSrc: hastelloyImg,
    imageHint: 'hastelloy ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-010',
    name: 'Lead',
    description: 'Dense Lead non-ferrous ball, often used for radiation shielding and weighting applications.',
    imageSrc: leadImg,
    imageHint: 'lead ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-011',
    name: 'Super Duplex',
    description: 'High-strength Super Duplex non-ferrous ball, offering excellent corrosion resistance in harsh environments.',
    imageSrc: superDuplexImg,
    imageHint: 'super duplex ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-012',
    name: 'Stellite',
    description: 'Wear-resistant Stellite non-ferrous ball, a cobalt-chromium alloy ideal for high-wear applications.',
    imageSrc: stelliteImg,
    imageHint: 'stellite ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-013',
    name: 'Titanium',
    description: 'Lightweight and strong Titanium non-ferrous ball, offering excellent corrosion resistance and biocompatibility.',
    imageSrc: titaniumImg,
    imageHint: 'titanium ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-014',
    name: 'Tungsten',
    description: 'High-density Tungsten non-ferrous ball, suitable for applications requiring high mass in a small volume.',
    imageSrc: tungstenImg,
    imageHint: 'tungsten ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-015',
    name: 'Phosphorous Bronze',
    description: 'Phosphorous Bronze non-ferrous ball, known for its strength, toughness, and good wear resistance.',
    imageSrc: phosphorousBronzeImg,
    imageHint: 'phosphorous bronze ball',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nfb-016',
    name: 'Alumina',
    description: 'Hard and wear-resistant Alumina (Aluminum Oxide) non-ferrous ceramic ball, used in various demanding applications.',
    imageSrc: aluminaImg,
    imageHint: 'alumina ceramic ball',
    category: 'Non-Ferrous Balls',
  },
  // Non-Metallic Balls Category
  {
    id: 'nmb-001',
    name: 'Plastic',
    description: 'Versatile plastic balls, lightweight and resistant to chemicals. Suitable for various low-friction applications.',
    imageSrc: plasticImg,
    imageHint: 'plastic balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-002',
    name: 'Ruby',
    description: 'High-precision ruby balls, known for extreme hardness, wear resistance, and dimensional stability.',
    imageSrc: rubyImg,
    imageHint: 'ruby balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-003',
    name: 'Glass',
    description: 'Corrosion-resistant glass balls, ideal for check valves, flow meters, and decorative purposes.',
    imageSrc: glassImg,
    imageHint: 'glass balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-004',
    name: 'Ceramic',
    description: 'Durable ceramic balls offering excellent wear resistance, high-temperature stability, and electrical insulation.',
    imageSrc: ceramicNonMetallicImg, // Using the renamed import
    imageHint: 'ceramic balls',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'nmb-005',
    name: 'Silicon Nitride',
    description: 'High-performance silicon nitride balls with exceptional hardness, strength, and thermal shock resistance.',
    imageSrc: siliconNitrideImg,
    imageHint: 'silicon nitride balls',
    category: 'Non-Metallic Balls',
  },
  // Polish Media & Abrasives Category
  {
    id: 'pma-001',
    name: 'SS Straight Polish Pin Magnetic or Non-Magnetic',
    description: 'Stainless steel straight polish pins, available in magnetic and non-magnetic variants for various finishing applications.',
    imageSrc: ssStraightPolishPinImg,
    imageHint: 'stainless steel polish pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-002',
    name: 'SS Cut Wire Short',
    description: 'Short cut stainless steel wire shots, effective for deburring, cleaning, and surface finishing.',
    imageSrc: ssCutWireShortImg,
    imageHint: 'stainless steel cut wire',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-003',
    name: 'Zinc Round Shots',
    description: 'Round zinc shots for gentle cleaning and finishing of delicate parts without excessive abrasion.',
    imageSrc: zincRoundShotsImg,
    imageHint: 'zinc round shots',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-004',
    name: 'SS Cross Pin Magnetic or Non-Magnetic',
    description: 'Stainless steel cross pins, available as magnetic or non-magnetic, for effective polishing and deburring.',
    imageSrc: ssCrossPinImg,
    imageHint: 'stainless steel cross pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-005',
    name: 'SS Magnetic Pic',
    description: 'Magnetic stainless steel picks/pins for precision finishing and material handling in magnetic tumbling processes.',
    imageSrc: ssMagneticPicImg,
    imageHint: 'magnetic steel pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-006',
    name: 'Mult Pin',
    description: 'Multi-faceted pins for comprehensive surface treatment and polishing in various industrial applications.',
    imageSrc: multPinImg,
    imageHint: 'multi-faceted pins',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-007',
    name: 'Zinc Cut Wire Shots',
    description: 'Cut zinc wire shots for surface preparation and finishing, offering a softer alternative to steel media.',
    imageSrc: zincCutWireShotsImg, // Used corrected import name
    imageHint: 'zinc cut wire shots',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pma-008',
    name: 'SS Round Cut Wire Short',
    description: 'Short, round cut stainless steel wire for effective deburring and surface conditioning of metal parts.',
    imageSrc: ssRoundCutWireShortImg,
    imageHint: 'round cut stainless steel wire',
    category: 'Polish Media & Abrasives',
  },
];

// Data for the 5 main categories to be displayed on the home page
export const mainCategoriesData: ProductCategory[] = [
  {
    id: 'cat-ferrous',
    name: 'Ferrous Metal Balls',
    description: 'High-strength steel balls for various industrial applications.',
    imageSrc: firstpageFerrous,
    imageHint: 'ferrous balls',
    path: '/products?category=Ferrous+Balls',
  },
  {
    id: 'cat-non-ferrous',
    name: 'Non-Ferrous Metal Balls',
    description: 'Balls made from materials like brass, copper, and aluminum.',
    imageSrc: firstpageNonFerrous,
    imageHint: 'non-ferrous balls',
    path: '/products?category=Non-Ferrous+Balls',
  },
  {
    id: 'cat-non-metallic',
    name: 'Non-Metallic Balls',
    description: 'Includes ceramic, glass, and plastic balls for specialized uses.',
    imageSrc: firstpageNonMetallic,
    imageHint: 'non-metallic balls',
    path: '/products?category=Non-Metallic+Balls',
  },
  {
    id: 'cat-gauges',
    name: 'Precision Gauges',
    description: 'High-accuracy gauges for measurement and quality control.',
    imageSrc: firstpageGauge,
    imageHint: 'precision gauges',
    path: '/products?category=Gauges',
  },
  {
    id: 'cat-polish-media',
    name: 'Polish Media & Abrasives',
    description: 'Effective media for surface finishing, deburring, and polishing.',
    imageSrc: firstpagePolishMedia,
    imageHint: 'polishing media',
    path: '/products?category=Polish+Media+%26+Abrasives',
  },
];
