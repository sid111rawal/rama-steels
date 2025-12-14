// CommonJS version of data for build scripts like next-sitemap
// This file should export productsData and blogPostsData using module.exports
// For simplicity, image imports are omitted here as they are not needed for sitemap paths.

const productsData = [
  // Ferrous Balls Category (Copied from data.ts, imageSrc details removed for brevity for CJS)
  { id: 'fb-001', name: 'EN-31', category: 'Ferrous Balls' },
  { id: 'fb-002', name: 'AISI-1010', category: 'Ferrous Balls' },
  { id: 'fb-003', name: '100CR6', category: 'Ferrous Balls' },
  { id: 'fb-004', name: 'SS-300 Series', category: 'Ferrous Balls' },
  { id: 'fb-005', name: 'EN-9', category: 'Ferrous Balls' },
  { id: 'fb-006', name: 'SS-400 Series', category: 'Ferrous Balls' },
  { id: 'fb-007', name: 'AISI-52100', category: 'Ferrous Balls' },
  // Gauges Category
  { id: 'gg-001', name: 'Type Og Gauge', category: 'Gauges' },
  { id: 'gg-002', name: 'Custom Made Gauges', category: 'Gauges' },
  { id: 'gg-003', name: 'Plug Gauges', category: 'Gauges' },
  { id: 'gg-004', name: 'Gauge', category: 'Gauges' },
  // Non-Ferrous Balls Category
  { id: 'nfb-001', name: 'Brass', category: 'Non-Ferrous Balls' },
  { id: 'nfb-002', name: 'Inconel', category: 'Non-Ferrous Balls' },
  { id: 'nfb-003', name: 'Copper', category: 'Non-Ferrous Balls' },
  { id: 'nfb-004', name: 'Alloy-20', category: 'Non-Ferrous Balls' },
  { id: 'nfb-005', name: 'Aluminium', category: 'Non-Ferrous Balls' },
  { id: 'nfb-006', name: 'Rockbit Tool Steel', category: 'Non-Ferrous Balls' },
  { id: 'nfb-007', name: 'K-Monel', category: 'Non-Ferrous Balls' },
  { id: 'nfb-008', name: 'F55', category: 'Non-Ferrous Balls' },
  { id: 'nfb-009', name: 'Hastelloy', category: 'Non-Ferrous Balls' },
  { id: 'nfb-010', name: 'Lead', category: 'Non-Ferrous Balls' },
  { id: 'nfb-011', name: 'Super Duplex', category: 'Non-Ferrous Balls' },
  { id: 'nfb-012', name: 'Stellite', category: 'Non-Ferrous Balls' },
  { id: 'nfb-013', name: 'Titanium', category: 'Non-Ferrous Balls' },
  { id: 'nfb-014', name: 'Tungsten', category: 'Non-Ferrous Balls' },
  { id: 'nfb-015', name: 'Phosphorous Bronze', category: 'Non-Ferrous Balls' },
  { id: 'nfb-016', name: 'Alumina', category: 'Non-Ferrous Balls' },
  // Non-Metallic Balls Category
  { id: 'nmb-001', name: 'Plastic', category: 'Non-Metallic Balls' },
  { id: 'nmb-002', name: 'Ruby', category: 'Non-Metallic Balls' },
  { id: 'nmb-003', name: 'Glass', category: 'Non-Metallic Balls' },
  { id: 'nmb-004', name: 'Ceramic', category: 'Non-Metallic Balls' },
  { id: 'nmb-005', name: 'Silicon Nitride', category: 'Non-Metallic Balls' },
  // Polish Media & Abrasives Category
  { id: 'pma-001', name: 'SS Straight Polish Pin Magnetic or Non-Magnetic', category: 'Polish Media & Abrasives' },
  { id: 'pma-002', name: 'SS Cut Wire Short', category: 'Polish Media & Abrasives' },
  { id: 'pma-003', name: 'Zinc Round Shots', category: 'Polish Media & Abrasives' },
  { id: 'pma-004', name: 'SS Cross Pin Magnetic or Non-Magnetic', category: 'Polish Media & Abrasives' },
  { id: 'pma-005', name: 'SS Magnetic Pic', category: 'Polish Media & Abrasives' },
  { id: 'pma-006', name: 'Mult Pin', category: 'Polish Media & Abrasives' },
  { id: 'pma-007', name: 'Zinc Cut Wire Shots', category: 'Polish Media & Abrasives' },
  { id: 'pma-008', name: 'SS Round Cut Wire Short', category: 'Polish Media & Abrasives' },
];

const blogPostsData = [
  // Copied from data.ts, only slug and date needed for sitemap lastmod
  { slug: 'steel-ball-hardness', date: 'October 26, 2023' },
  { slug: 'choosing-polishing-media', date: 'November 05, 2023' },
  { slug: 'steel-manufacturing-trends-2024', date: 'November 15, 2023' },
  { slug: 'stainless-steel-corrosion-resistance', date: 'November 28, 2023' },
  { slug: 'steel-balls-price-guide-2025-india', date: 'January 15, 2025' },
  { slug: 'best-bearing-steel-balls-manufacturer-india-2025', date: 'January 22, 2025' },
  { slug: 'sustainable-steel-manufacturing-eco-friendly-india-2025', date: 'January 30, 2025' },
  { slug: 'tumbling-media-vs-vibratory-finishing-guide-2025', date: 'February 05, 2025' },
  { slug: 'steel-balls-for-ball-mills-complete-guide-2025', date: 'February 12, 2025' },
];

module.exports = { productsData, blogPostsData };
