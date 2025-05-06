
import type { StaticImageData } from 'next/image';

// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per user's latest request.
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png'; // Corrected path
import firstpageGauge from '../images/gauge/firstpagegauge.png';
import firstpagePolishMedia from '../images/polish-media/firstpagepolishmedia.jpg';

// New Ferrous Product Images
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
    id: 'sb-001',
    name: 'EN-31',
    description: 'High-quality EN-31 ferrous ball for demanding industrial applications.',
    imageSrc: en31Img,
    imageHint: 'EN-31 steel ball',
    price: '$19.99/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-002',
    name: 'AISI-1010',
    description: 'Precision AISI-1010 ferrous ball, suitable for various applications.',
    imageSrc: aisi1010Img,
    imageHint: 'AISI-1010 steel ball',
    price: '$15.50/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-003',
    name: '100CR6',
    description: 'Durable 100CR6 ferrous ball, known for its hardness and wear resistance.',
    imageSrc: oneHundredCR6Img,
    imageHint: '100CR6 steel ball',
    price: '$22.75/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-004',
    name: 'SS-300 SERIES',
    description: 'Corrosion-resistant SS-300 series ferrous ball for specialized environments.',
    imageSrc: ss300SeriesImg,
    imageHint: 'SS-300 series steel ball',
    price: '$28.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-005',
    name: 'EN-9',
    description: 'Versatile EN-9 ferrous ball offering good strength and toughness.',
    imageSrc: en9Img,
    imageHint: 'EN-9 steel ball',
    price: '$17.25/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-006',
    name: 'SS-400 SERIES',
    description: 'SS-400 series ferrous ball with excellent magnetic properties and hardness.',
    imageSrc: ss400SeriesImg,
    imageHint: 'SS-400 series steel ball',
    price: '$25.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-007',
    name: 'AISI-52100',
    description: 'High-carbon AISI-52100 bearing quality ferrous ball for precision bearings.',
    imageSrc: aisi52100Img,
    imageHint: 'AISI-52100 steel ball',
    price: '$30.50/kg',
    category: 'Ferrous Balls',
  },
  
  // Other Categories (placeholders, to be updated similarly)
  {
    id: 'nfb-001',
    name: 'Brass Balls',
    description: 'Good corrosion resistance and electrical conductivity. Used in valves and electrical components.',
    imageSrc: 'https://picsum.photos/seed/brassball1/400/300', // Placeholder
    imageHint: 'brass ball',
    price: '$22.00/kg',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nmb-001',
    name: 'Ceramic Balls (Silicon Nitride)',
    description: 'Extremely hard, lightweight, and corrosion-resistant. Ideal for high-speed bearings.',
    imageSrc: 'https://picsum.photos/seed/ceramicball1/400/300', // Placeholder
    imageHint: 'ceramic sphere',
    price: '$75.00/kg',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'g-001',
    name: 'Plug Gauges',
    description: 'Precision gauges for verifying internal hole diameters to specific tolerances.',
    imageSrc: 'https://picsum.photos/seed/gauge1/400/300', // Placeholder
    imageHint: 'plug gauge',
    price: '$50.00/set',
    category: 'Gauges',
  },
  {
    id: 'pm-001',
    name: 'Ceramic Polishing Media',
    description: 'Provides excellent surface finish for various materials. Long-lasting and effective.',
    imageSrc: 'https://picsum.photos/seed/polishing1/400/300', // Placeholder
    imageHint: 'ceramic media',
    price: '$30.00/bag',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pm-002',
    name: 'Plastic Polishing Media',
    description: 'Gentle polishing for delicate parts, preventing damage while achieving a smooth finish.',
    imageSrc: 'https://picsum.photos/seed/polishing2/400/300', // Placeholder
    imageHint: 'plastic cones',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pm-003',
    name: 'Walnut Shell Media (Abrasive)',
    description: 'Natural and biodegradable, excellent for deburring and cleaning metal surfaces.',
    imageSrc: 'https://picsum.photos/seed/polishing3/400/300', // Placeholder
    imageHint: 'walnut shell',
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
