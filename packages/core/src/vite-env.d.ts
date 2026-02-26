/// <reference types="vite/client" />

declare module 'toastify-js' {
  interface ToastifyOptions {
    text?: string;
    duration?: number;
    gravity?: 'top' | 'bottom';
    position?: 'left' | 'center' | 'right';
    close?: boolean;
    style?: { background?: string };
    className?: string;
  }
  function Toastify(options: ToastifyOptions): { showToast(): void };
  export default Toastify;
}

