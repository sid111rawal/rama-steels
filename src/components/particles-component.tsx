'use client';

import React, { useEffect, memo } from 'react';
import type { siteConfig } from '@/config/site'; // Ensure this type import is correct or adjust as needed

interface ParticlesProps {
  particleColor?: string; // typeof siteConfig.heroParticleColor; // More specific type if possible
  particleDensity?: number;
  containerId?: string;
}

const ParticlesComponent: React.FC<ParticlesProps> = ({ 
  particleColor = '#00BCD4', // Default color, will be overridden by prop
  particleDensity = 80,
  containerId = 'particles-js-hero' // Unique ID for this instance
}) => {
  useEffect(() => {
    let isMounted = true;
    const initParticles = async () => {
      if (typeof window === 'undefined' || !isMounted) return;

      // Dynamically import particles.js
      // @ts-ignore
      const particlesModule = await import('particles.js');
      // @ts-ignore
      const particlesJSFn = window.particlesJS;


      if (!document.getElementById(containerId) && isMounted) {
        console.warn(`Particles.js: Container with ID "${containerId}" not found.`);
        return;
      }
      
      if (!particlesJSFn || typeof particlesJSFn !== 'function') {
        console.error('Particles.js library is not loaded correctly or particlesJSFn is not a function.');
        return;
      }


      let particleCount = particleDensity;
      if (window.innerWidth < 768) {
        particleCount = Math.max(20, Math.floor(particleDensity / 1.5)); 
      }

      try {
        particlesJSFn(containerId, {
          "particles": {
            "number": {
              "value": particleCount,
              "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": particleColor },
            "shape": {
              "type": "circle",
              "stroke": { "width": 0, "color": "#000000" },
              "polygon": { "nb_sides": 5 }
            },
            "opacity": {
              "value": 0.6, // Base opacity
              "random": true, // Particles will have random starting opacities
              "anim": { 
                "enable": true, // Enable opacity animation
                "speed": 0.5, 
                "opacity_min": 0.1, 
                "sync": false 
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": particleColor, // Use the passed particleColor for lines
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4, // Slightly reduced speed for a calmer effect
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "repulse" }, // Repulse on hover
              "onclick": { "enable": true, "mode": "bubble" },  // Bubble on click
              "resize": true
            },
            "modes": {
              "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
              "bubble": { // Parameters for bubble effect
                "distance": 250, // How far the bubble effect extends
                "size": 20,       // Max size of bubbled particles
                "duration": 2,    // How long the bubble effect lasts
                "opacity": 0.8,   // Opacity during bubble
                "speed": 3
              },
              "repulse": { // Parameters for repulse effect
                "distance": 100,  // How far particles are repulsed
                "duration": 0.4 
              },
              "push": { "particles_nb": 4 },
              "remove": { "particles_nb": 2 }
            }
          },
          "retina_detect": true
        });
      } catch (e) {
        console.error("Particles.js failed to load for container:", containerId, e);
      }
    };

    const timer = setTimeout(() => {
       if (isMounted) initParticles();
    }, 100);


    return () => {
      isMounted = false;
      clearTimeout(timer);
      const pJSContainer = document.getElementById(containerId);
      if (pJSContainer) {
        const canvasEl = pJSContainer.querySelector('.particles-js-canvas-el');
        if (canvasEl) {
          pJSContainer.removeChild(canvasEl);
        }
      }
      // @ts-ignore
      if (window.pJSDom && Array.isArray(window.pJSDom)) {
        // @ts-ignore
        window.pJSDom = window.pJSDom.filter(p => p && p.pJS && p.pJS.canvas && p.pJS.canvas.el && p.pJS.canvas.el.parentElement?.id !== containerId);
      }
    };
  }, [particleColor, particleDensity, containerId]);

  return <div id={containerId} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

export default memo(ParticlesComponent);
