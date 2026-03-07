import { readFileSync, existsSync } from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export interface ResolvedPackageInfo {
  name: string;
  version: string;
  description?: string;
  dependencies: Record<string, string>;
  marketplaceCatalogUrls?: string[];
}

interface PackageJson {
  name?: string;
  version?: string;
  description?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

function findPackageVersion(appRoot: string, depName: string): string | null {
  const segments = depName.startsWith('@')
    ? depName.split('/')
    : [depName];
  const relativePath = path.join('node_modules', ...segments, 'package.json');
  let dir = path.resolve(appRoot);
  const root = path.parse(dir).root;

  while (true) {
    const pkgPath = path.join(dir, relativePath);
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as PackageJson;
        if (typeof pkg.version === 'string') return pkg.version;
      } catch {
        // ignore parse errors
      }
      return null;
    }
    if (dir === root) break;
    dir = path.dirname(dir);
  }
  return null;
}

function resolveDepVersionsFromPkg(
  appRoot: string,
  pkg: PackageJson,
  options?: { includeDevDependencies?: boolean }
): Record<string, string> {
  const deps = { ...pkg.dependencies };
  if (options?.includeDevDependencies && pkg.devDependencies) {
    Object.assign(deps, pkg.devDependencies);
  }
  const result: Record<string, string> = {};
  for (const [name, specifier] of Object.entries(deps)) {
    const version = findPackageVersion(appRoot, name);
    result[name] = version ?? specifier;
  }
  return result;
}

export function resolvePackageInfo(
  appRoot: string,
  options?: { includeDevDependencies?: boolean }
): ResolvedPackageInfo | null {
  const pkgPath = path.join(appRoot, 'package.json');
  if (!existsSync(pkgPath)) return null;

  let pkg: PackageJson;
  try {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as PackageJson;
  } catch {
    return null;
  }

  const name = typeof pkg.name === 'string' ? pkg.name : '';
  const version = typeof pkg.version === 'string' ? pkg.version : '0.0.0';
  const description = typeof pkg.description === 'string' ? pkg.description : undefined;
  const dependencies = resolveDepVersionsFromPkg(appRoot, pkg, options);
  const marketplaceCatalogUrls = (pkg as { marketplace?: { catalogUrls?: string[] } }).marketplace?.catalogUrls;

  return { name, version, description, dependencies, marketplaceCatalogUrls };
}

export function resolveDepVersions(
  appRoot: string,
  options?: { includeDevDependencies?: boolean }
): Record<string, string> {
  const info = resolvePackageInfo(appRoot, options);
  return info?.dependencies ?? {};
}

const RESOLVED_PACKAGE_INFO_KEY = '__RESOLVED_PACKAGE_INFO__';

export function resolveDepVersionsPlugin(options?: {
  includeDevDependencies?: boolean;
}): Plugin {
  return {
    name: 'resolve-dep-versions',
    config(config) {
      const root = config.root ? path.resolve(config.root) : process.cwd();
      const info = resolvePackageInfo(root, options);
      const value = info ?? { name: '', version: '0.0.0', description: undefined, dependencies: {}, marketplaceCatalogUrls: undefined };
      return {
        define: {
          [RESOLVED_PACKAGE_INFO_KEY]: JSON.stringify(value),
        },
      };
    },
  };
}
