import { createLogger } from '@kispace-io/core';
import { inBrowserMLService, MLTask, MLModel } from '@kispace-io/extension-in-browser-ml/api';

const logger = createLogger('ToolDetector');

export class ToolDetector {
    private classifier: any = null;
    private loading = false;
    private loadPromise: Promise<void> | null = null;

    private async ensureLoaded(): Promise<void> {
        if (this.classifier) return;
        if (this.loading && this.loadPromise) return this.loadPromise;

        this.loading = true;
        this.loadPromise = (async () => {
            try {
                logger.info('Loading ML model for tool detection...');
                this.classifier = await inBrowserMLService.getPipeline(
                    MLTask.ZERO_SHOT_CLASSIFICATION,
                    MLModel.ZERO_SHOT_CLASSIFICATION,
                    { quantized: true }
                );
                logger.info('ML model loaded successfully');
            } catch (error) {
                logger.warn(`Failed to load ML model: ${error instanceof Error ? error.message : String(error)}`);
                this.classifier = null;
            } finally {
                this.loading = false;
            }
        })();

        return this.loadPromise;
    }

    async needsTools(prompt: string): Promise<boolean> {
        if (!prompt?.trim()) return false;

        const normalized = prompt.toLowerCase().trim();
        const greetings = ['hello', 'hi', 'hey', 'thanks', 'thank you', 'bye', 'goodbye'];
        if (greetings.some(g => normalized === g || normalized.startsWith(g + ' '))) return false;

        try {
            await this.ensureLoaded();
            if (this.classifier) {
                const result = await this.classifier(normalized, [
                    'requires executing commands or actions',
                    'is a simple greeting or question'
                ]);
                const needsTools = result.labels[0] === 'requires executing commands or actions' && result.scores[0] > 0.6;
                logger.info(`ML classification: ${result.labels[0]} (${(result.scores[0] * 100).toFixed(1)}%) → needsTools: ${needsTools}`);
                return needsTools;
            }
        } catch (error) {
            logger.warn(`ML classification failed: ${error instanceof Error ? error.message : String(error)}`);
        }

        return this.keywordBasedDetection(normalized);
    }

    private keywordBasedDetection(prompt: string): boolean {
        const actionKeywords = [
            'create', 'open', 'delete', 'read', 'write', 'edit', 'save', 'rename',
            'move', 'copy', 'list', 'show', 'display', 'run', 'execute', 'build',
            'add', 'remove', 'update', 'modify', 'change', 'set', 'get', 'find',
            'search', 'filter', 'sort', 'install', 'uninstall', 'load', 'import',
            'export', 'generate', 'make', 'do', 'perform', 'call', 'invoke'
        ];
        const contextKeywords = [
            'file', 'folder', 'directory', 'workspace', 'editor', 'map', 'layer',
            'command', 'tool', 'extension', 'script', 'code', 'project'
        ];
        return actionKeywords.some(k => prompt.includes(k)) &&
               (contextKeywords.some(k => prompt.includes(k)) || prompt.length > 20);
    }

    dispose(): void {
        this.classifier = null;
        this.loading = false;
        this.loadPromise = null;
    }
}

export const toolDetector = new ToolDetector();
