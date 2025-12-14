import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; 

export const siteConfig = {
  name: "Rama & Sons",
  tagline: "India's Leading Manufacturer of High-Quality Steel Balls & Polish Media",
  description: "Excellence in industrial steel products with over 20 years of experience. Rama & Sons is a premier manufacturer of steel balls, polish media, and gauges in India, serving Agra and beyond.",
  pageDescriptions: {
    home: "Leading manufacturer of high-quality steel balls (bearing steel balls, K Monel balls, Inconel balls, Hastelloy balls, aluminium balls, alumina balls, tungsten carbide balls), polish media (cross pin, pin, rava polish media, disc ball polish media/damru, saturn polish media, wire short), and precision gauges in India. Rama & Sons offers superior industrial steel products with 20+ years of expertise. Contact us for steel ball manufacturing solutions in Agra.",
    about: "Learn about Rama & Sons - India's trusted steel ball manufacturer with over 20 years of experience. Discover our journey, values, and commitment to excellence in industrial steel products manufacturing in Agra.",
    products: "Explore our comprehensive range of industrial steel products including ferrous balls, non-ferrous balls, precision gauges, and polish media. High-quality steel balls manufactured in India by Rama & Sons.",
    blog: "Stay updated with latest insights on steel manufacturing, industrial applications, and technical guides from Rama & Sons experts. Professional blog covering steel balls, polish media, and industrial products.",
    faq: "Get answers to frequently asked questions about steel balls, polish media, precision gauges, and industrial manufacturing services from Rama & Sons. Expert technical support and product guidance for Indian industries.",
  },
  keywords: [
    // General & Brand
    "Rama & Sons", "Rama and Sons steel", "ramason", "ramason steel", "ramason steel balls", "ramason.in", "industrial steel products India", "steel manufacturing Agra",

    // Product Specific - Steel Balls
    "steel balls manufacturer", "industrial steel balls", "precision steel balls", "high quality steel balls",
    "stainless steel balls", "SS 304 balls", "SS 316 balls", "SS 440c balls",
    "carbon steel balls", "AISI 1010 steel balls", "EN9 steel balls",
    "alloy steel balls", "EN31 steel balls", "100Cr6 steel balls", "AISI 52100 steel balls", "bearing steel balls",
    "chrome steel balls", "ferrous metal balls",
    "non-ferrous metal balls", "brass balls", "copper balls", "aluminium balls", "aluminia balls", "titanium balls", "tungsten carbide balls",
    "k monel ball", "k monel balls", "inconel ball", "inconel balls", "hastelloy ball", "hast alloy ball", "hastelloy balls",
    "non-metallic balls", "ceramic balls", "glass balls", "plastic balls", "ruby balls", "silicon nitride balls",

    // Product Specific - Polish Media & Abrasives
    "polishing media supplier", "abrasive media India", "tumbling media", "vibratory finishing media",
    "stainless steel polishing media", "ss cut wire shots", "ss polish pins", "ss cross pin", "ss pin",
    "ceramic polishing media", "plastic polishing media", "zinc shots", "zinc cut wire shots",
    "rava polish media", "disc ball polish media", "damru polish media", "saturn polish media", "wire short",

    // Product Specific - Gauges
    "precision gauges manufacturer", "plug gauges India", "ring gauges", "custom gauges Agra", "industrial gauges",

    // Intent & Location Based
    "buy steel balls India", "steel ball supplier Agra", "steel balls online", "steel ball price India",
    "best steel ball manufacturer India", "top steel ball companies Agra",
    "polish media for sale", "industrial abrasives supplier",

    // Application/Use-case Based
    "steel balls for bearings", "steel balls for automotive industry", "steel balls for grinding",
    "polishing media for jewelry", "polishing media for metal finishing",
    "gauges for quality control", "precision measurement tools"
  ],
  url: "https://ramason.in", 
  ogImage: { 
    src: appLogo, // This is the StaticImageData object
    width: 512, 
    height: 512, 
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9PjsBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/AABEIAAEAAQMBEgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApb/wD/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAAAAhP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Af//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIAAT8Af//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z', // More specific blurDataURL for JPEG
  },
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com", 
    formSubmitRedirectUrl: "https://ramasons.netlify.app/", 
  },
  socialLinks: {
    facebook: "https://www.facebook.com/ramasons", 
    twitter: "https://www.twitter.com/ramasons",   
    linkedin: "https://www.linkedin.com/company/ramasons", 
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question about your steel balls and polish media.",
  heroParticleColor: {
    light: "#1A237E", // Deep Blue from --primary for light mode
    dark: "#7986CB"   // Lighter Deep Blue from --primary for dark mode
  },
};

export type SiteConfig = typeof siteConfig;
