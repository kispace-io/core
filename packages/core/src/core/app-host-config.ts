import type { PackageInfo } from './packageinfoservice';
import { packageInfoService } from './packageinfoservice';
import { marketplaceRegistry } from './marketplaceregistry';

let applied = false;

export interface AppHostConfig {
    packageInfo?: PackageInfo;
    marketplaceCatalogUrls?: string[];
}

export function applyAppHostConfig(config: AppHostConfig): void {
    if (applied) return;
    applied = true;
    if (config.packageInfo) {
        packageInfoService.addPackage(config.packageInfo);
    }
    if (config.marketplaceCatalogUrls?.length) {
        config.marketplaceCatalogUrls.forEach((url) => {
            marketplaceRegistry.addCatalogUrl(url).catch(() => {});
        });
    }
}
