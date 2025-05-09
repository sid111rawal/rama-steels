
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; 

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience. Manufacturer of steel balls, polish media, and gauges in India.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons, Ferrous Balls, Non-Ferrous Balls, Non-Metallic Balls, Precision Gauges, Abrasives, Steel Ball Manufacturer India, Industrial Polish Media India",
  url: "https://www.ramasons.com", 
  ogImage: appLogo, // Store the StaticImageData object directly
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
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#1A237E", // Deep Blue for light mode
    dark: "#7986CB"   // Lighter Blue for dark mode
  },
};

export type SiteConfig = typeof siteConfig;
