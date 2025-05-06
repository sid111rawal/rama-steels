declare module 'particles.js' {
  // Define a more specific type for the params argument if possible
  // This is a generic example, you might need to refine it based on particles.js documentation
  export interface IParticlesParams {
    particles: {
      number: {
        value: number;
        density: {
          enable: boolean;
          value_area: number;
        };
      };
      color: {
        value: string | string[];
      };
      shape: {
        type: string | string[];
        stroke: {
          width: number;
          color: string;
        };
        polygon: {
          nb_sides: number;
        };
        image?: { // Optional image shape
          src: string;
          width: number;
          height: number;
        };
      };
      opacity: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          opacity_min: number;
          sync: boolean;
        };
      };
      size: {
        value: number;
        random: boolean;
        anim: {
          enable: boolean;
          speed: number;
          size_min: number;
          sync: boolean;
        };
      };
      line_linked: {
        enable: boolean;
        distance: number;
        color: string;
        opacity: number;
        width: number;
        shadow?: { // Optional shadow for lines
            enable: boolean;
            blur: number;
            color: string;
        }
      };
      move: {
        enable: boolean;
        speed: number;
        direction: string;
        random: boolean;
        straight: boolean;
        out_mode: string;
        bounce: boolean;
        attract: {
          enable: boolean;
          rotateX: number;
          rotateY: number;
        };
      };
      [key: string]: any; // Allow other properties
    };
    interactivity: {
      detect_on: string;
      events: {
        onhover: {
          enable: boolean;
          mode: string | string[];
        };
        onclick: {
          enable: boolean;
          mode: string | string[];
        };
        resize: boolean;
      };
      modes: {
        grab: {
          distance: number;
          line_linked: {
            opacity: number;
          };
        };
        bubble: {
          distance: number;
          size: number;
          duration: number;
          opacity?: number; // Optional opacity for bubble
          speed?: number; // Optional speed for bubble
        };
        repulse: {
          distance: number;
          duration?: number; // Optional duration for repulse
        };
        push: {
          particles_nb: number;
        };
        remove: {
          particles_nb: number;
        };
        [key: string]: any; // Allow other modes
      };
      [key: string]: any; // Allow other properties
    };
    retina_detect?: boolean; // Optional retina_detect
    [key: string]: any; // Allow other top-level properties
  }
  
  export interface IParticlesJS {
      (tag_id: string, params: IParticlesParams): void;
      load(tag_id: string, path_config_json: string, callback: () => void): void;
    }
  
  const particlesJS: IParticlesJS;
  export default particlesJS;
  
  // Keep window augmentation if still needed, but prefer avoiding global access.
  interface Window {
    pJSDom?: { 
        pJS: { 
            canvas: { 
                el: HTMLElement 
            },
            // Add other properties of pJS if you access them
        } 
    }[];
  }
}
