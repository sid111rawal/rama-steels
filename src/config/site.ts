
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; // Using alias import path

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons",
  url: "https://www.ramasons.com", 
  ogImage: appLogo as StaticImageData,
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com", 
    formSubmitRedirectUrl: "https://ramason.netlify.app/", 
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#1A237E", // Deep Blue (primary for light mode)
    dark: "#7986CB"   // Lighter Blue, closer to accent for dark mode (hsl(231, 48%, 63%))
  },
};
