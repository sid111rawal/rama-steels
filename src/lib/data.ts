
import type { StaticImageData } from 'next/image';

// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per user's latest request.
import firstpageFerrous from '../images/ferrous/firstpageferrous.png';
import firstpageNonFerrous from '../images/non-ferrous/firstpagenonferrous.png';
import firstpageNonMetallic from '../images/non-mettalic/firstpagenonmettalic.png'; // Corrected path
import firstpageGauge from '../images/gauge/firstpagegauge.png';
import firstpagePolishMedia from '../images/polish-media/firstpagepolishmedia.jpg';

// Ferrous Product Images - Assuming actual filenames are lowercase
import highCarbonSteelBallImg from '../images/ferrous/highcarbonsteelball.png';
import stainlessSteelBallImg from '../images/ferrous/stainlesssteelball.png';
import chromeSteelBallImg from '../images/ferrous/chromesteelball.png';
import lowCarbonSteelBallImg from '../images/ferrous/lowcarbonsteelball.png';
import bearingSteelBallImg from '../images/ferrous/bearingsteelball.png';
import alloySteelBallImg from '../images/ferrous/alloysteelball.png'; // Changed to lowercase
import toolSteelBallImg from '../images/ferrous/toolsteelball.png';


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
  id: string;
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
    id: 'sb-001',
    name: 'High Carbon Steel Ball',
    description: 'Precision-engineered for durability and high performance in demanding applications.',
    imageSrc: highCarbonSteelBallImg,
    imageHint: 'high carbon steel ball',
    price: '$15.99/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-002',
    name: 'Stainless Steel Ball',
    description: 'Corrosion-resistant, ideal for food processing, medical, and chemical industries.',
    imageSrc: stainlessSteelBallImg,
    imageHint: 'stainless steel ball',
    price: '$25.50/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-003',
    name: 'Chrome Steel Ball',
    description: 'Known for their hardness and wear resistance, suitable for bearings and automotive parts.',
    imageSrc: chromeSteelBallImg,
    imageHint: 'chrome steel ball',
    price: '$18.75/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-004',
    name: 'Low Carbon Steel Ball',
    description: 'Cost-effective solution for applications requiring moderate strength and wear resistance.',
    imageSrc: lowCarbonSteelBallImg,
    imageHint: 'low carbon steel ball',
    price: '$12.50/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-005',
    name: 'Bearing Steel Ball',
    description: 'High-quality steel balls specifically designed for various bearing applications.',
    imageSrc: bearingSteelBallImg,
    imageHint: 'bearing steel ball',
    price: '$22.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-006',
    name: 'Alloy Steel Ball',
    description: 'Enhanced mechanical properties through alloying elements, for specialized uses.',
    imageSrc: alloySteelBallImg,
    imageHint: 'alloy steel ball',
    price: '$28.00/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-007',
    name: 'Tool Steel Ball',
    description: 'Exceptional hardness and abrasion resistance, suitable for tools and dies.',
    imageSrc: toolSteelBallImg,
    imageHint: 'tool steel ball',
    price: '$35.00/kg',
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
    imageSrc: firstpageNonMetallic, // Corrected variable name
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
