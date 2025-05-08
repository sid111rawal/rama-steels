
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; 

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience. Manufacturer of steel balls, polish media, and gauges in India.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons, Ferrous Balls, Non-Ferrous Balls, Non-Metallic Balls, Precision Gauges, Abrasives, Steel Ball Manufacturer India, Industrial Polish Media India",
  url: "https://www.ramasons.com", 
  ogImage: { // Changed to an object to include width and height
    src: appLogo.src, // Assuming appLogo is a StaticImageData object, use its src
    width: appLogo.width, // Use width from StaticImageData
    height: appLogo.height, // Use height from StaticImageData
  } as { src: string; width: number; height: number; }, // Type assertion
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com", 
    formSubmitRedirectUrl: "https://ramason.netlify.app/", 
  },
  socialLinks: {
    facebook: "https://www.facebook.com/ramasons", // Example, replace with actual
    twitter: "https://www.twitter.com/ramasons",   // Example, replace with actual
    linkedin: "https://www.linkedin.com/company/ramasons", // Example, replace with actual
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#1A237E", 
    dark: "#7986CB"   
  },
};
