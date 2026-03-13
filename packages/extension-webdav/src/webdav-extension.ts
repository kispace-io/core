/**
 * WebDAV Extension for geo!space
 * 
 * This extension enables connecting to WebDAV servers (Nextcloud, ownCloud, etc.)
 * as workspace folders, providing cloud storage integration.
 * 
 * Features:
 * - Connect to WebDAV servers
 * - Full file/directory operations
 * - Nextcloud and ownCloud support
 * - Seamless integration with existing workspace API
 * 
 * Usage:
 * Import this file to register the WebDAV extension and its commands.
 */

import { workspaceService, createLogger } from '@eclipse-lyra/core';

const logger = createLogger('WebDAVExtension');
import { WebDAVClient, type WebDAVConnectionInfo } from './webdav-client';
import { WebDAVDirectoryResource } from './webdav-filesys';
import type { WebDAVResource } from './webdav-client';

// Export all WebDAV types and classes
export { WebDAVClient, type WebDAVConnectionInfo, type WebDAVResource } from './webdav-client';
export { WebDAVFileResource, WebDAVDirectoryResource } from './webdav-filesys';

// Import UI component (registers itself)
import './webdav-connect';

// Import commands (registers themselves)
import './webdav-commands';

// Register WebDAV as a workspace contribution
workspaceService.registerContribution({
    type: 'webdav',
    name: 'webdav',
    
    canHandle(input: any): boolean {
        // Accept any connection info with a URL (credentials are optional for public/shared folders)
        return input && typeof input === 'object' && 'url' in input && typeof input.url === 'string';
    },
    
    async connect(input: WebDAVConnectionInfo) {
        const client = new WebDAVClient(input);
        const rootResource: WebDAVResource = {
            href: input.url,
            displayName: extractWorkspaceNameFromUrl(input.url),
            isDirectory: true
        };
        return new WebDAVDirectoryResource(client, rootResource, undefined, input);
    },
    
    async restore(data: WebDAVConnectionInfo) {
        if (!data || !data.url) {
            return undefined;
        }
        
        try {
            const client = new WebDAVClient(data);
            const rootResource: WebDAVResource = {
                href: data.url,
                displayName: extractWorkspaceNameFromUrl(data.url),
                isDirectory: true
            };
            return new WebDAVDirectoryResource(client, rootResource, undefined, data);
        } catch (error) {
            logger.error('Failed to restore WebDAV workspace:', error);
            return undefined;
        }
    },
    
    async persist(workspace) {
        if (workspace instanceof WebDAVDirectoryResource) {
            const connectionInfo = workspace.getConnectionInfo();
            if (!connectionInfo) {
                return null;
            }

            return {
                url: connectionInfo.url,
                ...(connectionInfo.username !== undefined ? { username: connectionInfo.username } : {}),
                ...(connectionInfo.password !== undefined ? { password: connectionInfo.password } : {})
            };
        }
        return null;
    }
});

function extractWorkspaceNameFromUrl(url: string): string {
    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        return pathParts[pathParts.length - 1] || 'workspace';
    } catch {
        return 'workspace';
    }
}

logger.debug('WebDAV Extension loaded');
