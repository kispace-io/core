/**
 * Third-party library re-exports
 * Centralized re-exports for commonly used third-party libraries.
 * This ensures a single source of truth for these dependencies.
 */

export function v4(): string {
  return crypto.randomUUID();
}

