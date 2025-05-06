export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageHint: string;
  price?: string;
  category: string;
}

export const productsData: Product[] = [
  {
    id: 'sb-001',
    name: 'High-Carbon Steel Balls',
    description: 'Precision-engineered for durability and high performance in demanding applications.',
    imageSrc: 'https://picsum.photos/seed/steelball1/400/300',
    imageHint: 'steel ball',
    price: '$15.99/kg',
    category: 'Steel Balls',
  },
  {
    id: 'sb-002',
    name: 'Stainless Steel Balls',
    description: 'Corrosion-resistant, ideal for food processing, medical, and chemical industries.',
    imageSrc: 'https://picsum.photos/seed/steelball2/400/300',
    imageHint: 'shiny sphere',
    price: '$25.50/kg',
    category: 'Steel Balls',
  },
  {
    id: 'pm-001',
    name: 'Ceramic Polishing Media',
    description: 'Provides excellent surface finish for various materials. Long-lasting and effective.',
    imageSrc: 'https://picsum.photos/seed/polishing1/400/300',
    imageHint: 'ceramic media',
    price: '$30.00/bag',
    category: 'Polish Media',
  },
  {
    id: 'pm-002',
    name: 'Plastic Polishing Media',
    description: 'Gentle polishing for delicate parts, preventing damage while achieving a smooth finish.',
    imageSrc: 'https://picsum.photos/seed/polishing2/400/300',
    imageHint: 'plastic cones',
    category: 'Polish Media',
  },
  {
    id: 'sb-003',
    name: 'Chrome Steel Balls',
    description: 'Known for their hardness and wear resistance, suitable for bearings and automotive parts.',
    imageSrc: 'https://picsum.photos/seed/steelball3/400/300',
    imageHint: 'chrome bearing',
    price: '$18.75/kg',
    category: 'Steel Balls',
  },
  {
    id: 'pm-003',
    name: 'Walnut Shell Media',
    description: 'Natural and biodegradable, excellent for deburring and cleaning metal surfaces.',
    imageSrc: 'https://picsum.photos/seed/polishing3/400/300',
    imageHint: 'walnut shell',
    category: 'Polish Media',
  },
];