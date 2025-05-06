
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; // Using alias import path

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons",
  url: "https://www.ramasons.com", // Replace with actual URL
  ogImage: appLogo as StaticImageData,
  contactInfo: {
    address: "123 Industrial Road, Tech City, Country",
    phone: "+1 (123) 456-7890",
    email: "info@ramasons.com",
    formSubmitEmail: "sidrawal1200@gmail.com",
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: "#CBD5E1", // Slate 300 for light theme, will be adjusted for dark
};

