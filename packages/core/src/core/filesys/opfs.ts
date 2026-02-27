import { publish } from "../events";
import {
    Directory,
    type GetResourceOptions,
    type Resource,
    TOPIC_WORKSPACE_CHANGED,
    workspaceService,
} from "./common";

const OPFS_DISPLAY_NAME = 'OPFS';

async function getOPFSRoot(): Promise<FileSystemDirectoryHandle> {
    if (typeof navigator === 'undefined' || !navigator.storage?.getDirectory) {
        throw new Error('OPFS is not available in this environment');
    }
    return await navigator.storage.getDirectory();
}

export class OPFSRootDirectory extends Directory {
    constructor(private readonly inner: Directory) {
        super();
    }

    getName(): string {
        return OPFS_DISPLAY_NAME;
    }

    getParent(): Directory | undefined {
        return this.inner.getParent();
    }

    async listChildren(forceRefresh: boolean): Promise<Resource[]> {
        return this.inner.listChildren(forceRefresh);
    }

    async getResource(path: string, options?: GetResourceOptions): Promise<Resource | null> {
        return this.inner.getResource(path, options);
    }

    touch(): void {
        this.inner.touch();
    }

    async delete(name?: string, recursive?: boolean): Promise<void> {
        return this.inner.delete(name, recursive);
    }

    async copyTo(targetPath: string): Promise<void> {
        return this.inner.copyTo(targetPath);
    }

    async rename(newName: string): Promise<void> {
        return this.inner.rename(newName);
    }
}

// Register OPFS workspace contribution
workspaceService.registerContribution({
    type: 'opfs',
    name: 'OPFS',

    canHandle(input: any): boolean {
        return input && typeof input === 'object' && input.opfs === true;
    },

    async connect(_input: { opfs: true }): Promise<Directory> {
        const root = await getOPFSRoot();
        // We wrap the underlying FileSysDirHandleResource root in an OPFSRootDirectory
        // for a stable display name and clear separation in the workspace tree.
        const fsModule = await import('./fs-access');
        const FileSysDirHandleResource = fsModule.FileSysDirHandleResource;
        const inner = new FileSysDirHandleResource(root);
        return new OPFSRootDirectory(inner);
    },

    async restore(data: any): Promise<Directory | undefined> {
        if (data && typeof data === 'object' && data.opfs === true) {
            const root = await getOPFSRoot();
            const fsModule = await import('./fs-access');
            const FileSysDirHandleResource = fsModule.FileSysDirHandleResource;
            const inner = new FileSysDirHandleResource(root);
            return new OPFSRootDirectory(inner);
        }
        return undefined;
    },

    async persist(workspace: Directory): Promise<any> {
        if (workspace instanceof OPFSRootDirectory) {
            return { opfs: true };
        }
        return null;
    }
});


