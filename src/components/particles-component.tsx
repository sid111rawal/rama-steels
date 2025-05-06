'use client';

import React, { useEffect, memo } from 'react';

interface ParticlesProps {
  particleColor?: string; 
  particleDensity?: number;
  containerId?: string;
}

const ParticlesComponent: React.FC<ParticlesProps> = ({ 
  particleColor = '#FFFFFF', 
  particleDensity = 80,
  containerId = 'particles-js-hero' 
}) => {
  useEffect(() => {
    let isMounted = true;
    const initParticles = async () => {
      if (typeof window === 'undefined' || !isMounted) return;

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
        particleCount = Math.max(20, Math.floor(particleDensity / 2)); 
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
              "value": 0.6, 
              "random": true, 
              "anim": { 
                "enable": true, 
                "speed": 1.5, // Increased speed
                "opacity_min": 0.05, 
                "sync": false 
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": { 
                "enable": true, // Enabled size animation
                "speed": 10,     // Speed of size animation
                "size_min": 0.3, // Minimum size
                "sync": false 
              }
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
              "speed": 6, // Increased speed
              "direction": "top", // Added general upward drift
              "random": true, 
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "repulse" }, // Changed to repulse
              "onclick": { "enable": true, "mode": "push" },  
              "resize": true
            },
            "modes": {
              "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, 
              "bubble": { 
                "distance": 400, 
                "size": 40,      
                "duration": 2,    
                "opacity": 0.8, 
                "speed": 3
              },
              "repulse": { 
                "distance": 150,  // Adjusted distance for repulse
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
