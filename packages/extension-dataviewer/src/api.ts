export interface TabularData {
  columns: string[];
  rows: unknown[][];
}

export interface DataView {
  id?: string;
  title: string;
  data: TabularData;
  source?: string;
  createdAt?: number;
}

export const TOPIC_DATAVIEW_PUBLISH = 'dataview/publish';
