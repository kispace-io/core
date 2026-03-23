import { createLogger } from "@eclipse-lyra/core";

const logger = createLogger('PyService');
import type { PyWorkerMessage, PyWorkerResponse } from "./pyworker";
import PyWorker from "./pyworker?worker&inline";

let messageId = 0;

export class PyEnv {
    private worker?: Worker;
    private vars: any;
    private pendingMessages: Map<string, { resolve: (value: any) => void, reject: (error: any) => void }> = new Map();
    private stdoutCallback?: (text: string) => void;
    private stderrCallback?: (text: string) => void;
    private interruptBuffer?: Uint8Array;

    public async init(_workspace?: unknown, vars?: any) {
        this.vars = vars ?? {};

        const worker = new PyWorker();
        this.worker = worker;

        worker.onmessage = (event: MessageEvent<PyWorkerResponse>) => {
            this.handleWorkerMessage(event.data);
        };

        worker.onerror = (error) => {
            console.error('Python Worker error:', error);
        };

        await this.sendMessage('init', { vars: this.vars });
    }

    private handleWorkerMessage(response: PyWorkerResponse) {
        // Handle interrupt buffer initialization
        if (response.id === 'interrupt-buffer') {
            if (response.type === 'success') {
                this.interruptBuffer = new Uint8Array(response.payload);
            } else {
                // SharedArrayBuffer not available - interrupt buffer will be undefined
                this.interruptBuffer = undefined;
            }
            return;
        }
        
        // Handle input requests
        if (response.type === 'inputRequest') {
            const promptText = response.payload.prompt || 'Input:';
            const userInput = window.prompt(promptText);
            
            // Send response back to worker
            this.worker!.postMessage({
                id: response.id,
                type: 'inputResponse',
                payload: {
                    value: userInput,
                    cancelled: userInput === null
                }
            } as PyWorkerMessage);
            return;
        }
        
        // Handle stdout/stderr streams
        if (response.type === 'stdout') {
            if (this.stdoutCallback) {
                this.stdoutCallback(response.payload);
            } else {
                logger.debug(response.payload);
            }
            return;
        }
        
        if (response.type === 'stderr') {
            if (this.stderrCallback) {
                this.stderrCallback(response.payload);
            } else {
                logger.error(response.payload);
            }
            return;
        }
        
        // Handle console messages from worker
        if (response.type === 'console') {
            const { level, message } = response.payload;
            // Forward to log terminal
            if (typeof window !== 'undefined' && (window as any).logToTerminal) {
                (window as any).logToTerminal('Python Worker', message, level);
            }
            return;
        }

        // Handle regular responses
        const pending = this.pendingMessages.get(response.id);
        if (pending) {
            this.pendingMessages.delete(response.id);
            
            if (response.type === 'success') {
                pending.resolve(response.payload);
            } else if (response.type === 'error') {
                pending.reject(new Error(response.payload.message));
            }
        }
    }

    private async sendMessage(type: PyWorkerMessage['type'], payload?: any): Promise<any> {
        if (!this.worker) {
            throw new Error('PyEnv not initialized yet: see init()');
        }

        const id = `msg-${messageId++}`;
        const message: PyWorkerMessage = { id, type, payload };

        return new Promise((resolve, reject) => {
            this.pendingMessages.set(id, { resolve, reject });
            this.worker!.postMessage(message);
        });
    }

    public setStdoutCallback(callback: (text: string) => void) {
        this.stdoutCallback = callback;
    }

    public setStderrCallback(callback: (text: string) => void) {
        this.stderrCallback = callback;
    }

    public async runFunction(name: string, args: any) {
        return await this.sendMessage('runFunction', { name, args });
    }

    public async setGlobal(key: string, value: any) {
        await this.sendMessage('setGlobal', { key, value });
    }

    public async loadPackages(packages: string[]) {
        if (packages.length > 0) {
            await this.sendMessage('loadPackages', { packages });
        }
    }

    public async execCode(code: string) {
        return await this.sendMessage('execCode', { code });
    }

    public async execScript(path: string, _installDependencies: boolean = false) {
        const moduleName = path.split(".")[0];
        const entryName = path.includes(":") ? path.split(":").reverse()[0] : undefined;
        return await this.execModule(moduleName, entryName);
    }

    public async execModule(moduleName: string, entryName?: string) {
        return await this.sendMessage('execModule', {
            moduleName,
            entryName,
            vars: this.vars
        });
    }

    public async getVersion() {
        return await this.sendMessage('getVersion');
    }

    /**
     * Check if interrupt functionality is available (requires SharedArrayBuffer).
     */
    public canInterrupt(): boolean {
        return this.interruptBuffer !== undefined;
    }

    /**
     * Interrupts any currently running Python code.
     * This will cause a KeyboardInterrupt to be raised in the Python code.
     * Only works if SharedArrayBuffer is available (check with canInterrupt()).
     */
    public interrupt() {
        if (this.interruptBuffer) {
            // Set the interrupt flag (2 = SIGINT)
            this.interruptBuffer[0] = 2;
        }
    }

    close() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = undefined;
        }
        this.pendingMessages.clear();
    }
}
