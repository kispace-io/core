import {marketplaceRegistry} from "../core/marketplaceregistry";
import {createLogger} from "../core/logger";
import appspacePackageJson from "../../package.json";

const logger = createLogger('MarketplaceCatalogContributions');

const catalogUrls = (appspacePackageJson as any).marketplace?.catalogUrls;
if (catalogUrls && Array.isArray(catalogUrls)) {
    catalogUrls.forEach((url: string) => {
        marketplaceRegistry.addCatalogUrl(url).catch(err => {
            logger.warn(`Failed to add marketplace catalog ${url}: ${err}`);
        });
    });
} else {
    logger.warn('No marketplace catalog URLs found in package.json');
}

