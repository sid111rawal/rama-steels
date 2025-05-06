
import type { StaticImageData } from 'next/image';

// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per user's latest request.
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png'; // Corrected path
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


export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: StaticImageData | string; // Allow both string URLs and static image data
  imageHint: string;
  price?: string;
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
  // Ferrous Balls Category - Updated with new products
  {
    id: 'fb-001', // Changed ID prefix for ferrous balls
    name: 'EN-31',
    description: 'High-quality EN-31 ferrous ball for demanding industrial applications. Known for its high hardness and excellent wear resistance.',
    imageSrc: en31Img,
    imageHint: 'EN-31 steel ball',
    price: '$19.99/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-002',
    name: 'AISI-1010',
    description: 'Precision AISI-1010 low-carbon steel ball, suitable for various general-purpose applications. Offers good formability.',
    imageSrc: aisi1010Img,
    imageHint: 'AISI-1010 steel ball',
    price: '$15.50/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-003',
    name: '100CR6',
    description: 'Durable 100CR6 bearing steel ball, known for its high hardness, wear resistance, and good fatigue strength. Equivalent to AISI 52100.',
    imageSrc: oneHundredCR6Img,
    imageHint: '100CR6 steel ball',
    price: '$22.75/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-004',
    name: 'SS-300 SERIES',
    description: 'Corrosion-resistant SS-300 series austenitic stainless steel balls (e.g., 304, 316). Ideal for food processing and medical applications.',
    imageSrc: ss300SeriesImg,
    imageHint: 'SS-300 series steel ball',
    price: '$28.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-005',
    name: 'EN-9',
    description: 'Versatile EN-9 medium carbon steel ball offering good strength and toughness. Suitable for automotive and engineering parts.',
    imageSrc: en9Img,
    imageHint: 'EN-9 steel ball',
    price: '$17.25/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-006',
    name: 'SS-400 SERIES',
    description: 'SS-400 series martensitic stainless steel balls (e.g., 420, 440C) with excellent magnetic properties and high hardness after heat treatment.',
    imageSrc: ss400SeriesImg,
    imageHint: 'SS-400 series steel ball',
    price: '$25.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'fb-007',
    name: 'AISI-52100',
    description: 'High-carbon, chromium-containing low alloy steel AISI-52100 bearing quality ferrous ball for precision bearings and demanding applications.',
    imageSrc: aisi52100Img,
    imageHint: 'AISI-52100 steel ball',
    price: '$30.50/kg',
    category: 'Ferrous Balls',
  },
  // Placeholder products for other categories will be added later.
  // For now, we are focusing on the Ferrous Balls category.
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
