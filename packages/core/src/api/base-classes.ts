// Re-export framework base classes for app usage
export { KPart } from '../parts/k-part';
export { KContainer } from '../parts/k-container';
export { KDialogContent } from '../parts/k-dialog-content';
export { KStandardApp } from '../apps/k-standard-app';
export { KWidget } from '../widgets/k-widget';
export { KElement } from '../parts/k-element';
// Import to register the custom element
import '../apps/k-standard-app';

