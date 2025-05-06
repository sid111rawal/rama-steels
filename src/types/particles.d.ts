declare module 'particles.js' {
  interface ParticlesJS {
    (tag_id: string, params: any): void;
    load(tag_id: string, path_config_json: string, callback: () => void): void;
  }
  const particlesJS: ParticlesJS;
  export default particlesJS;
}

// Optional: If you need to access pJSDom on window (though it's better to avoid global access)
interface Window {
  pJSDom?: { pJS: { canvas: { el: HTMLElement } } }[];
}
