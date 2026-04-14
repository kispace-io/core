import type { PluginOption } from 'vite';

export type CreateDocksPwaPluginOptions = {
  basePath: string;
  appName: string;
  appDescription: string;
  maximumFileSizeToCacheInBytes: number;
  shortName?: string;
};

export declare function createDocksPwaPlugin(
  options: CreateDocksPwaPluginOptions,
): PluginOption;
