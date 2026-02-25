import type { IProvider } from "../core/interfaces";
import type { ChatProvider } from "../core/types";
import { OpenAIProvider } from "./openai-provider";
import { OllamaProvider } from "./ollama-provider";

export class ProviderFactory {
    private providers: IProvider[] = [];

    constructor() {
        this.providers.push(new OpenAIProvider());
        this.providers.push(new OllamaProvider());
    }

    registerProvider(provider: IProvider): void {
        this.providers.push(provider);
    }

    getProvider(chatProvider: ChatProvider): IProvider {
        return this.providers.find(p => p.canHandle(chatProvider)) ?? this.providers[0];
    }

    getAllProviders(): IProvider[] {
        return [...this.providers];
    }
}
