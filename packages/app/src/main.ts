import Pace from 'pace-js';
import 'pace-js/themes/blue/pace-theme-minimal.css';

Pace.start();

import { TOOLBAR_MAIN, appLoaderService, contributionRegistry, type HTMLContribution } from '@eclipse-lyra/core';
import { html } from '@eclipse-lyra/core/externals/lit';
void import.meta.glob('../../extension-*/src/index.ts', { eager: true });

import './dashboard-layout';

contributionRegistry.registerContribution(TOOLBAR_MAIN, {
  label: "Eclipse Lyra",
  slot: "start",
  component: () => html`
    <div
      style="
        display: inline-flex;
        align-items: center;
        gap: var(--wa-space-s);
        padding: 0 var(--wa-space-s);
      "
    >
      <img
        src="/lyra-logo.svg"
        alt="Eclipse Lyra"
        style="display: block; height: 28px; width: auto;"
      />
    </div>
  `,
} as HTMLContribution);

appLoaderService.registerApp(
  {
    name: 'Eclipse Lyra',
    description: 'Eclipse Lyra demo app with default extensions.',
    layoutId: 'standard-full',
    extensions: [
      '@eclipse-lyra/extension-utils',
      '@eclipse-lyra/extension-command-palette',
      '@eclipse-lyra/extension-command-shell',
      '@eclipse-lyra/extension-md-editor',
      '@eclipse-lyra/extension-monaco-editor',
      '@eclipse-lyra/extension-media-viewer',
      '@eclipse-lyra/extension-settings-tree',
      '@eclipse-lyra/extension-memory-usage',
      '@eclipse-lyra/extension-ai-system',
      '@eclipse-lyra/extension-dataviewer',
    ],
  },
  { autoStart: true, hostConfig: true },
);
