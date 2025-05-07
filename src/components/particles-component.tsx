'use client';

import React, { useEffect, memo } from 'react';
import type { IParticlesParams } from 'particles.js'; 

interface ParticlesComponentProps {
  particleColor?: string;
  particleDensity?: number;
  containerId?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({
  particleColor = '#A0AEC0', 
  particleDensity = 50, // Reduced default particle density
  containerId = 'particles-js-hero'
}) => {
  useEffect(() => {
    let isMounted = true;
    const initParticles = async () => {
      if (typeof window === 'undefined' || !isMounted) return;

      // @ts-ignore next line
      const particlesModule = await import('particles.js');
      // @ts-ignore next line
      const particlesJSFn = window.particlesJS as (tag_id: string, params: IParticlesParams) => void;


      if (!document.getElementById(containerId) && isMounted) {
        console.warn(`Particles.js: Container with ID "${containerId}" not found.`);
        return;
      }

      if (!particlesJSFn || typeof particlesJSFn !== 'function') {
        console.error('Particles.js library is not loaded correctly or particlesJSFn is not a function.');
        return;
      }


      let currentParticleCount = particleDensity;
      if (window.innerWidth < 768) {
        currentParticleCount = Math.max(20, Math.floor(particleDensity / 1.5)); // Adjusted mobile density
      }

      try {
        particlesJSFn(containerId, {
          "particles": {
            "number": {
              "value": currentParticleCount,
              "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": particleColor }, 
            "shape": {
              "type": "circle", 
              "stroke": { "width": 0, "color": "#000000" },
              "polygon": { "nb_sides": 5 }
            },
            "opacity": {
              "value": 0.6, // Slightly increased base opacity as animation is off
              "random": true,
              "anim": {
                "enable": false, // Disabled opacity animation
                "speed": 0.5, 
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 2.5, // Slightly reduced size
              "random": true,
              "anim": {
                "enable": false, // Disabled size animation
                "speed": 2, 
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 120, // Slightly reduced distance
              "color": particleColor, 
              "opacity": 0.3, // Slightly reduced opacity
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.5, // Reduced speed
              "direction": "none", 
              "random": true,
              "straight": false,
              "out_mode": "out", 
              "bounce": false,
              "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } // Disabled attract
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "grab" }, // Changed to grab
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 100, "line_linked": { "opacity": 0.7 } }, // Adjusted grab
              "bubble": { 
                "distance": 150, 
                "size": 8, 
                "duration": 0.5, 
                "opacity": 0.8,
                "speed": 1.5 
              },
              "repulse": {
                "distance": 80, 
                "duration": 0.4
              },
              "push": { "particles_nb": 3 }, // Reduced particles on push
              "remove": { "particles_nb": 2 }
            }
          },
          "retina_detect": true
        } as IParticlesParams);
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
      // @ts-ignore next line
      if (window.pJSDom && Array.isArray(window.pJSDom)) {
      // @ts-ignore next line
        const pJSInstance = window.pJSDom.find(p => p && p.pJS && p.pJS.canvas && p.pJS.canvas.el && p.pJS.canvas.el.parentElement?.id === containerId);
        if (pJSInstance) {
            
            const canvasEl = pJSInstance.pJS.canvas.el;
            if (canvasEl && canvasEl.parentElement) {
              canvasEl.parentElement.removeChild(canvasEl);
            }
             // @ts-ignore next line
            window.pJSDom = window.pJSDom.filter(p => p !== pJSInstance);
        }
      }
    };
  }, [particleColor, particleDensity, containerId]);

  return <div id={containerId} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

export default memo(ParticlesComponent);
