
'use client';

import React, { useEffect, memo } from 'react';

interface ParticlesProps {
  particleColor?: string;
  particleDensity?: number;
  containerId?: string;
}

const ParticlesComponent: React.FC<ParticlesProps> = ({ 
  particleColor = '#00BCD4', 
  particleDensity = 80,
  containerId = 'particles-js-hero' // Unique ID for this instance
}) => {
  useEffect(() => {
    let isMounted = true;
    const initParticles = async () => {
      if (typeof window === 'undefined' || !isMounted) return;

      // Dynamically import particles.js
      await import('particles.js');
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
        particleCount = Math.max(20, Math.floor(particleDensity / 2)); // Ensure at least some particles on mobile
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
              "value": 0.5,
              "random": false,
              "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": particleColor,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
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
              "onhover": { "enable": true, "mode": "grab" },
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
              "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
              "repulse": { "distance": 200, "duration": 0.4 },
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

    // Delay initialization slightly to ensure DOM is ready
    const timer = setTimeout(() => {
       if (isMounted) initParticles();
    }, 100);


    return () => {
      isMounted = false;
      clearTimeout(timer);
      // Clean up particles.js instance
      // particles.js doesn't have a built-in destroy method for a specific ID in v2.
      // The typical cleanup is to remove the canvas it creates.
      const pJSContainer = document.getElementById(containerId);
      if (pJSContainer) {
        const canvasEl = pJSContainer.querySelector('.particles-js-canvas-el');
        if (canvasEl) {
          pJSContainer.removeChild(canvasEl);
        }
      }
       // @ts-ignore
      if (window.pJSDom && window.pJSDom.length > 0) {
         // @ts-ignore
        window.pJSDom = window.pJSDom.filter(p => p.pJS.canvas.el.parentElement?.id !== containerId);
      }
    };
  }, [particleColor, particleDensity, containerId]);

  return <div id={containerId} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

export default memo(ParticlesComponent);
