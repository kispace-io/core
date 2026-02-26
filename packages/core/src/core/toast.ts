import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const DURATION = 4000;
const BASE = { duration: DURATION, gravity: 'bottom' as const, position: 'right' as const, close: true };

const show = (msg: string, style: { background: string; color: string }) => {
  Toastify({ ...BASE, text: msg, style }).showToast();
};

export const toastInfo = (msg: string) => {
  show(msg, { background: 'var(--wa-color-brand-50)', color: 'var(--wa-color-brand-on)' });
};

export const toastError = (msg: string) => {
  show(msg, { background: 'var(--wa-color-danger-50)', color: 'var(--wa-color-danger-on)' });
};

export const toastWarning = (msg: string) => {
  show(msg, { background: 'var(--wa-color-warning-50)', color: 'var(--wa-color-warning-on)' });
};
