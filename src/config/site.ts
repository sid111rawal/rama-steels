
import type { StaticImageData } from 'next/image';
import appLogo from '@/images/logo/l.jpeg'; // Using alias import path

export const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons",
  url: "https://www.ramasons.com", // Replace with actual URL, or use deployed URL if preferred
  ogImage: appLogo as StaticImageData,
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com", // User provided email for form submission
    formSubmitRedirectUrl: "https://ramason.netlify.app/", // User provided absolute redirect URL
  },
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#1A237E", // Deep Blue (corresponds to light theme's primary: hsl(226 70% 28%))
    dark: "#5C6BC0"   // Lighter Blue (corresponds to dark theme's primary: hsl(226 70% 58%))
  },
};

