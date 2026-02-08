/// <reference types="vite/client" />

declare module "pace-js" {
  const Pace: { start: (options?: unknown) => void };
  export default Pace;
}
