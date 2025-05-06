
'use client';

import React, { useEffect, memo } from 'react';
import type { IParticlesProps } from 'particles.js';

interface ParticlesComponentProps {
  particleColor?: string;
  particleDensity?: number;
  containerId?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({
  particleColor = '#FFFFFF', // Default to white for better visibility
  particleDensity = 60, // Reduced density for a cleaner look
  containerId = 'particles-js-hero'
}) => {
  useEffect(() => {
    let isMounted = true;
    const initParticles = async () => {
      if (typeof window === 'undefined' || !isMounted) return;

      // @ts-ignore
      const particlesModule = await import('particles.js');
      // @ts-ignore
      const particlesJSFn = window.particlesJS as (tag_id: string, params: IParticlesProps) => void;


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
        particleCount = Math.max(20, Math.floor(particleDensity / 1.5)); // Further reduce for mobile
      }

      try {
        particlesJSFn(containerId, {
          "particles": {
            "number": {
              "value": particleCount,
              "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": particleColor }, // Use prop for color
            "shape": {
              "type": "circle", // Keep circle for a clean look
              "stroke": { "width": 0, "color": "#000000" },
              "polygon": { "nb_sides": 5 }
            },
            "opacity": {
              "value": 0.7, // Increased opacity
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.5, // Slower, more subtle animation
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3.5, // Slightly larger particles
              "random": true,
              "anim": {
                "enable": true,
                "speed": 4, // Slower size animation
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 130, // Slightly shorter link distance
              "color": particleColor, // Use prop for color
              "opacity": 0.3, // Slightly reduced line opacity
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2, // Slower movement speed
              "direction": "none", // Random movement
              "random": true,
              "straight": false,
              "out_mode": "out", // Particles move out of canvas
              "bounce": false,
              "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 } // Enable attract for more dynamic movement
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "bubble" }, // Changed to bubble for a more engaging effect
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
              "bubble": { // Configure bubble mode
                "distance": 150,
                "size": 10, // Smaller bubble size for a subtle effect
                "duration": 1,
                "opacity": 0.8,
                "speed": 2
              },
              "repulse": {
                "distance": 100, // Shorter repulse distance
                "duration": 0.4
              },
              "push": { "particles_nb": 4 },
              "remove": { "particles_nb": 2 }
            }
          },
          "retina_detect": true
        } as IParticlesProps);
      } catch (e) {
        console.error("Particles.js failed to load for container:", containerId, e);
      }
    };

    // Add a small delay to ensure the DOM element is ready
    const timer = setTimeout(() => {
       if (isMounted) initParticles();
    }, 100);


    return () => {
      isMounted = false;
      clearTimeout(timer);
      // @ts-ignore
      if (window.pJSDom && Array.isArray(window.pJSDom)) {
      // @ts-ignore
        const pJSInstance = window.pJSDom.find(p => p && p.pJS && p.pJS.canvas && p.pJS.canvas.el && p.pJS.canvas.el.parentElement?.id === containerId);
        if (pJSInstance) {
            // Proper way to destroy particles.js instance if available, otherwise fallback to removing canvas
            // This depends on the version and structure of particles.js, a direct destroy method might not exist.
            // For now, we'll stick to removing the canvas as a general cleanup.
            const canvasEl = pJSInstance.pJS.canvas.el;
            if (canvasEl && canvasEl.parentElement) {
              canvasEl.parentElement.removeChild(canvasEl);
            }
             // @ts-ignore
            window.pJSDom = window.pJSDom.filter(p => p !== pJSInstance);
        }
      }
    };
  }, [particleColor, particleDensity, containerId]);

  return <div id={containerId} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

export default memo(ParticlesComponent);
