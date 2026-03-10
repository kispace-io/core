import { persistenceService, subscribe } from '@eclipse-lyra/core';
import { v4 } from '@eclipse-lyra/core/externals/third-party';
import type { DataView } from './api';
import { TOPIC_DATAVIEW_PUBLISH } from './api';

const KEY_PREFIX = 'dataview/';
const KEY_INDEX = KEY_PREFIX + 'index';

export interface DataviewListEntry {
  storageKey: string;
  title: string;
  createdAt: number;
}

type IndexEntry = DataviewListEntry;

export class DataviewerService {
  private subscriptionToken?: string;

  init(): void {
    if (this.subscriptionToken !== undefined) return;
    this.subscriptionToken = subscribe(TOPIC_DATAVIEW_PUBLISH, (payload: DataView) => {
      void this.handlePublish(payload);
    });
  }

  private async handlePublish(payload: DataView): Promise<void> {
    const storageKey = v4();
    const createdAt = Date.now();
    const entry: DataView = {
      id: payload.id ?? storageKey,
      title: payload.title,
      data: payload.data,
      source: payload.source,
      createdAt,
    };
    await persistenceService.persistObject(KEY_PREFIX + storageKey, entry);
    const index = (await persistenceService.getObject(KEY_INDEX)) as IndexEntry[] | undefined;
    const list = Array.isArray(index) ? index : [];
    list.push({ storageKey, title: payload.title, createdAt });
    await persistenceService.persistObject(KEY_INDEX, list);
  }

  async listViews(): Promise<DataviewListEntry[]> {
    const raw = await persistenceService.getObject(KEY_INDEX);
    if (!Array.isArray(raw) || raw.length === 0) return [];
    if (typeof raw[0] === 'string') {
      return (raw as string[]).map((storageKey) => ({
        storageKey,
        title: storageKey,
        createdAt: 0,
      }));
    }
    const list = raw as IndexEntry[];
    return [...list].sort((a, b) => a.createdAt - b.createdAt);
  }

  async getView(storageKey: string): Promise<DataView | null> {
    const entry = await persistenceService.getObject(KEY_PREFIX + storageKey);
    return entry ?? null;
  }

  async deleteView(storageKey: string): Promise<void> {
    const index = (await persistenceService.getObject(KEY_INDEX)) as IndexEntry[] | undefined;
    const list = Array.isArray(index) ? index.filter((e) => e.storageKey !== storageKey) : [];
    await persistenceService.persistObject(KEY_INDEX, list);
    await persistenceService.persistObject(KEY_PREFIX + storageKey, null);
  }
}

export const dataviewerService = new DataviewerService();
