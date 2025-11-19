declare module "*.css";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// This is required so the file becomes a module.
export {};

