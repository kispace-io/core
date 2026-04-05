import '@eclipse-lyra/extension-ai-system';
// Register AI auxiliary tab before main.ts adds the e2e tab so order is [aiview, e2e]; avoids false positives when the tab group falls back to the first tab.
import '../../extension-ai-system/src/ai-system-extension.ts';
