
import type { StaticImageData } from 'next/image';

// Ensure these paths correctly match your file structure in src/images/
// Using lowercase folder names as per last error resolutions, but adjusting based on specific errors.
import firstpageFerrous from '../images/ferrous/firstpageferrous.png'; // Adjusted path based on error
import firstpageNonFerrous from '../images/non-ferrous/FirstPageNonFerrous.png';
import firstpageNonMetallic from '../images/non-metallic/FirstPageNonMetallic.png';
import firstpageGauge from '../images/GAUGE/FirstPageGauge.png'; // Corrected path to use uppercase GAUGE
import firstpagePolishMedia from '../images/polish-media-and-abrasive/FirstPagePolishMedia.jpg';


export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string | StaticImageData; // Allow both string URLs and static image data
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

// Updated product data to use placeholder images or imported static images if available
export const productsData: Product[] = [
  {
    id: 'sb-001',
    name: 'High-Carbon Steel Balls',
    description: 'Precision-engineered for durability and high performance in demanding applications.',
    imageSrc: 'https://picsum.photos/seed/steelball1/400/300', // Example, replace with actual product image or static import
    imageHint: 'steel ball',
    price: '$15.99/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'sb-002',
    name: 'Stainless Steel Balls',
    description: 'Corrosion-resistant, ideal for food processing, medical, and chemical industries.',
    imageSrc: 'https://picsum.photos/seed/steelball2/400/300',
    imageHint: 'shiny sphere',
    price: '$25.50/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'nfb-001',
    name: 'Brass Balls',
    description: 'Good corrosion resistance and electrical conductivity. Used in valves and electrical components.',
    imageSrc: 'https://picsum.photos/seed/brassball1/400/300',
    imageHint: 'brass ball',
    price: '$22.00/kg',
    category: 'Non-Ferrous Balls',
  },
  {
    id: 'nmb-001',
    name: 'Ceramic Balls (Silicon Nitride)',
    description: 'Extremely hard, lightweight, and corrosion-resistant. Ideal for high-speed bearings.',
    imageSrc: 'https://picsum.photos/seed/ceramicball1/400/300',
    imageHint: 'ceramic sphere',
    price: '$75.00/kg',
    category: 'Non-Metallic Balls',
  },
  {
    id: 'g-001',
    name: 'Plug Gauges',
    description: 'Precision gauges for verifying internal hole diameters to specific tolerances.',
    imageSrc: 'https://picsum.photos/seed/gauge1/400/300',
    imageHint: 'plug gauge',
    price: '$50.00/set',
    category: 'Gauges',
  },
  {
    id: 'pm-001',
    name: 'Ceramic Polishing Media',
    description: 'Provides excellent surface finish for various materials. Long-lasting and effective.',
    imageSrc: 'https://picsum.photos/seed/polishing1/400/300',
    imageHint: 'ceramic media',
    price: '$30.00/bag',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'pm-002',
    name: 'Plastic Polishing Media',
    description: 'Gentle polishing for delicate parts, preventing damage while achieving a smooth finish.',
    imageSrc: 'https://picsum.photos/seed/polishing2/400/300',
    imageHint: 'plastic cones',
    category: 'Polish Media & Abrasives',
  },
  {
    id: 'sb-003',
    name: 'Chrome Steel Balls',
    description: 'Known for their hardness and wear resistance, suitable for bearings and automotive parts.',
    imageSrc: 'https://picsum.photos/seed/steelball3/400/300',
    imageHint: 'chrome bearing',
    price: '$18.75/kg',
    category: 'Ferrous Balls',
  },
  {
    id: 'pm-003',
    name: 'Walnut Shell Media (Abrasive)',
    description: 'Natural and biodegradable, excellent for deburring and cleaning metal surfaces.',
    imageSrc: 'https://picsum.photos/seed/polishing3/400/300',
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
    path: '/products?category=ferrous',
  },
  {
    id: 'cat-non-ferrous',
    name: 'Non-Ferrous Metal Balls',
    description: 'Balls made from materials like brass, copper, and aluminum.',
    imageSrc: firstpageNonFerrous,
    imageHint: 'non-ferrous balls',
    path: '/products?category=non-ferrous',
  },
  {
    id: 'cat-non-metallic',
    name: 'Non-Metallic Balls',
    description: 'Includes ceramic, glass, and plastic balls for specialized uses.',
    imageSrc: firstpageNonMetallic,
    imageHint: 'non-metallic balls',
    path: '/products?category=non-metallic',
  },
  {
    id: 'cat-gauges',
    name: 'Precision Gauges',
    description: 'High-accuracy gauges for measurement and quality control.',
    imageSrc: firstpageGauge,
    imageHint: 'precision gauges',
    path: '/products?category=gauges',
  },
  {
    id: 'cat-polish-media',
    name: 'Polish Media & Abrasives',
    description: 'Effective media for surface finishing, deburring, and polishing.',
    imageSrc: firstpagePolishMedia,
    imageHint: 'polishing media',
    path: '/products?category=polish-media',
  },
];
