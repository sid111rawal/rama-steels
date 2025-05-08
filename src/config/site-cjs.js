// CommonJS version of siteConfig for build scripts like next-sitemap
// This file should mirror src/config/site.ts but use module.exports

// Note: StaticImageData cannot be directly represented in CJS for build tools
// that don't process TypeScript/ESM imports.
// For siteUrl, it's fine. For ogImage, next-sitemap doesn't use the image data directly.

const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons",
  url: "https://www.ramasons.com",
  // ogImage: appLogo, // Cannot use StaticImageData here directly
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
    light: "#1A237E",
    dark: "#7986CB"
  },
};

module.exports = { siteConfig };
