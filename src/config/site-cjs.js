// CommonJS version of siteConfig for build scripts like next-sitemap
// This file should mirror src/config/site.ts but use module.exports

const siteConfig = {
  name: "Rama & Sons",
  description: "Excellence in industrial steel products with over 20 years of experience. Manufacturer of steel balls, polish media, and gauges in India.",
  keywords: "Steel Balls, Polish Media, Industrial Steel, Rama & Sons, Ferrous Balls, Non-Ferrous Balls, Non-Metallic Balls, Precision Gauges, Abrasives, Steel Ball Manufacturer India, Industrial Polish Media India",
  url: "https://ramason.in", // Updated to correct domain for sitemap
  // For ogImage, next-sitemap primarily uses the URL, not the image data itself.
  // We can hardcode a path here if needed, but often it's derived from the main URL.
  // For simplicity and to avoid issues with StaticImageData in CJS, we might omit specific width/height here.
  // The important part for sitemap is the siteUrl.
  ogImage: { // Providing a simplified structure
    src: '/_next/static/media/l.99b2bc1d.jpeg', // Example path if logo is in public/images or handled by Next/Image
    // width and height are less critical for sitemap generation itself
  },
  contactInfo: {
    address: "Jaipur House, Agra, India",
    phone: "+91-63976-82296",
    email: "ramasons2001@gmail.com",
    formSubmitEmail: "sidrawal1200@gmail.com",
    formSubmitRedirectUrl: "https://ramason.netlify.app/",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/ramasons",
    twitter: "https://www.twitter.com/ramasons",
    linkedin: "https://www.linkedin.com/company/ramasons",
  },
  whatsAppDefaultMessage: "Hi Rama & Sons. I have a question",
  heroParticleColor: {
    light: "#1A237E",
    dark: "#7986CB"
  },
};

module.exports = { siteConfig };
