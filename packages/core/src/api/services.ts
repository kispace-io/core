// Re-export framework services for app usage
export { appLoaderService } from '../core/apploader';
export { commandRegistry, CommandStack, registerAll, CommandRegistry } from '../core/commandregistry';
export { contributionRegistry, TOPIC_CONTRIBUTEIONS_CHANGED } from '../core/contributionregistry';
export { extensionRegistry } from '../core/extensionregistry';
export { workspaceService, File, StringFile, Directory, FileContentType, WorkspaceService, TOPIC_WORKSPACE_CHANGED, TOPIC_WORKSPACE_CONNECTED } from '../core/filesys';
export type { FileContentsOptions, GetResourceOptions } from '../core/filesys';
export { editorRegistry, type EditorInput } from '../core/editorregistry';
export { 
    activePartSignal,
    activeEditorSignal,
    partDirtySignal,
    activeTasksSignal,
    activeSelectionSignal,
    perspectiveSwitchedSignal,
    EMPTY_SIGNALPORT
} from '../core/appstate';
export { 
    createLogger,
    setLogLevel,
    type LogLevel,
    type Logger,
    default as logger
} from '../core/logger';
export { rootContext, uiContext, type DependencyContext } from '../core/di';
export { appSettings, TOPIC_SETTINGS_CHANGED } from '../core/settingsservice';
export { 
    infoDialog,
    navigableInfoDialog,
    confirmDialog,
    promptDialog,
    type NavigableDialogAction
} from '../dialogs';
export { 
    toastInfo,
    toastError,
    toastWarning
} from '../core/toast';
export { taskService } from '../core/taskservice';
export { applyAppHostConfig } from '../core/app-host-config';
export type { AppHostConfig } from '../core/app-host-config';
export { publish, subscribe, unsubscribe } from '../core/events';
export { configureFramework, getFrameworkConfig } from '../core/config';
export { treeNodeComparator } from '../core/tree-utils';
export type { TreeContribution, TreeNode } from '../core/tree-utils';
export { watchSignal } from '../core/signals';
export { packageInfoService } from '../core/packageinfoservice';
export type { PackageInfo } from '../core/packageinfoservice';
export { persistenceService } from '../core/persistenceservice';
export { esmShService } from '../core/esmsh-service';
export type { EsmShSource, EsmShOptions } from '../core/esmsh-service';
export { i18nLazy, i18n, SYSTEM_LANGUAGE_BUNDLES } from '../core/i18n';

