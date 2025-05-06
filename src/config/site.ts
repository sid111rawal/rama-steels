
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; // Using alias import path

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons",
  url: "https://www.ramasons.com", // Replace with actual URL
  ogImage: appLogo as StaticImageData,
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com", // Updated form submit email
    formSubmitRedirectUrl: "/", // Default redirect, can be changed to a thank you page
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#4B5563", // Slate 600 - Made slightly darker for light mode
    dark: "#F9FAFB" // Gray 50 - A very light gray for dark mode
  },
};

