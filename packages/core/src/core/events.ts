export type SubscriptionToken = string;
type Callback = (data: any) => any;

class EventBus {
    private subscriptions: Map<string, Map<SubscriptionToken, Callback>> = new Map();
    private tokenCounter = 0;

    subscribe(topic: string, callback: Callback): SubscriptionToken {
        if (!this.subscriptions.has(topic)) {
            this.subscriptions.set(topic, new Map());
        }
        const token = `token_${++this.tokenCounter}_${Date.now()}`;
        this.subscriptions.get(topic)!.set(token, callback);
        return token;
    }

    unsubscribe(token: SubscriptionToken): void {
        for (const [topic, callbacks] of this.subscriptions.entries()) {
            if (callbacks.has(token)) {
                callbacks.delete(token);
                if (callbacks.size === 0) {
                    this.subscriptions.delete(topic);
                }
                return;
            }
        }
    }

    publish(topic: string, data: any): boolean {
        const callbacks = this.subscriptions.get(topic);
        if (!callbacks || callbacks.size === 0) {
            return false;
        }

        queueMicrotask(() => {
            callbacks.forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in event callback for topic "${topic}":`, error);
                }
            });
        });
        return true;
    }

    clearAllSubscriptions(): void {
        this.subscriptions.clear();
    }

    clearSubscriptions(topic: string): void {
        this.subscriptions.delete(topic);
    }
}

const eventBus = new EventBus();

export const subscribe = (topic: string, callback: Callback): SubscriptionToken => {
    return eventBus.subscribe(topic, callback);
}

export const unsubscribe = (token: SubscriptionToken): void => {
    eventBus.unsubscribe(token);
}

export const publish = (topic: string, data: any): boolean => {
    return eventBus.publish(topic, data);
}