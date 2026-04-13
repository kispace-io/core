import { test, expect, type Locator, type Page } from '@playwright/test';

/** Create-menu entry once the dropdown is open (role matches Web Awesome wa-dropdown-item). */
function jupyterNotebookCreateMenuItem(fileBrowser: Locator) {
    return fileBrowser.getByRole('menuitem', { name: 'Jupyter Notebook' });
}

/**
 * Storyboard evaluation: scripted tour with Playwright video (`video: 'on'` below).
 * Steps are grouped with test.step() for trace / reporter readability.
 *
 * Pacing: set `STORYBOARD_PACE_MS=0` for a fast run; override default ms for slower/faster beats.
 */
test.use({ video: 'on' });

/** First run may download Pyodide assets; kernel UI is not waited on (avoids long "Connecting..." polls). */
const CELL_OUTPUT_MS = 60_000;

function storyboardPaceMs(): number {
    const raw = process.env.STORYBOARD_PACE_MS;
    if (raw === '0') {
        return 0;
    }
    return raw !== undefined ? Number(raw) : 1500;
}

/** Pause so each beat lands in the recording (between actions / after a step completes). */
async function beat(page: Page, ms?: number): Promise<void> {
    const t = ms ?? storyboardPaceMs();
    if (t > 0) {
        await page.waitForTimeout(t);
    }
}

/** Hold on a revealed menu or panel so viewers can read it before the next action. */
async function dwell(page: Page, ms?: number): Promise<void> {
    if (ms === undefined && storyboardPaceMs() === 0) {
        return;
    }
    const t = ms ?? Math.max(storyboardPaceMs() * 1.6, 2200);
    if (t > 0) {
        await page.waitForTimeout(t);
    }
}

async function dismissOpenPromptDialogs(page: Page) {
    for (let i = 0; i < 6; i++) {
        const open = page.locator('wa-dialog[open]');
        if ((await open.count()) === 0) {
            return;
        }
        const cancel = open.locator('.dialog-service-footer wa-button').filter({ hasText: 'Cancel' });
        if (await cancel.first().isVisible()) {
            await cancel.first().click();
        } else {
            await page.keyboard.press('Escape');
        }
    }
}

test.describe('Storyboard: IndexedDB + Jupyter extension workflow', () => {
    /** Full story + first Pyodide download/execute (CELL_OUTPUT_MS). */
    test.describe.configure({ timeout: 300_000 });

    test('connect folder → … → notebook → Python kernel → run Hello world', async ({ page }) => {
        const notebookBaseName = `storyboard-${Date.now()}`;

        await test.step('Load app shell', async () => {
            await page.goto('/');
            await expect(page.locator('docks-standard-layout')).toBeVisible({ timeout: 120_000 });
            await beat(page);
        });

        const mainSidebar = page.locator('docks-tabs#sidebar-main');
        const fileBrowser = page.locator('docks-filebrowser');

        await test.step('Open File Browser', async () => {
            await expect(mainSidebar).toBeVisible({ timeout: 30_000 });
            await mainSidebar.locator('wa-tab[panel="view.filebrowser"]').click();
            await expect(fileBrowser).toBeVisible({ timeout: 30_000 });
            await expect(fileBrowser.locator('wa-tree')).toBeVisible({ timeout: 30_000 });
            await beat(page);
        });

        await test.step('Connect a new IndexedDB folder', async () => {
            await fileBrowser.locator('docks-command[dropdown="filebrowser.connections"]').locator('wa-button[slot="trigger"]').click();
            await page.getByText('IndexedDB (Browser Storage)', { exact: true }).click();
            await expect(fileBrowser.locator('wa-tree-item').filter({ hasText: 'IndexedDB' }).first()).toBeVisible({
                timeout: 30_000,
            });
            await beat(page, storyboardPaceMs() + 800);
        });

        const createTrigger = fileBrowser.locator('docks-command[dropdown="filebrowser.create"]').locator('wa-button[slot="trigger"]');

        await test.step('Create toolbar: only built-in create actions (no Jupyter yet)', async () => {
            await createTrigger.click();
            await expect(page.getByText('Create File...', { exact: true })).toBeVisible({ timeout: 15_000 });
            await expect(page.getByText('Create Folder...', { exact: true })).toBeVisible({ timeout: 15_000 });
            await expect(jupyterNotebookCreateMenuItem(fileBrowser)).toHaveCount(0);
            await dwell(page);
            await page.keyboard.press('Escape');
            await beat(page);
        });

        await test.step('Open Extensions and install Jupyter-like notebook extension', async () => {
            await page.getByRole('button', { name: /Open Extensions/i }).click();
            const extPanel = page.locator('docks-extensions');
            await expect(extPanel).toBeVisible({ timeout: 30_000 });
            await dwell(page);

            const jupyterTreeItem = extPanel.getByRole('treeitem', { name: /Jupyter-like Notebook Editor/i });
            await expect(jupyterTreeItem).toBeVisible({ timeout: 30_000 });
            await jupyterTreeItem.scrollIntoViewIfNeeded();
            await jupyterTreeItem.click();

            const detail = extPanel.locator('.extensions-detail-content');
            await expect(detail.locator('h1')).toContainText(/Jupyter-like Notebook Editor/i, { timeout: 15_000 });
            await beat(page);

            const installBtn = detail.getByRole('button', { name: /Install/i });
            await expect(installBtn).toBeVisible({ timeout: 15_000 });
            await installBtn.click();
            await beat(page, storyboardPaceMs() + 1000);

            await expect(async () => {
                await page.keyboard.press('Escape');
                await createTrigger.click();
                await expect(jupyterNotebookCreateMenuItem(fileBrowser)).toBeVisible({ timeout: 3000 });
            }).toPass({ timeout: 60_000 });

            await page.keyboard.press('Escape');
            await fileBrowser.locator('docks-command[cmd="refresh_resource"]').locator('wa-button').click();
            await beat(page);
        });

        await test.step('Create menu includes Jupyter Notebook', async () => {
            await page.keyboard.press('Escape');
            await createTrigger.click();
            await expect(jupyterNotebookCreateMenuItem(fileBrowser)).toBeVisible({ timeout: 15_000 });
            await dwell(page);
            await page.keyboard.press('Escape');
            await beat(page);
        });

        await test.step('Create a new notebook under the new IndexedDB root and open it', async () => {
            await dismissOpenPromptDialogs(page);
            await page.keyboard.press('Escape');
            await page.keyboard.press('Escape');

            const editorTabs = page.locator('docks-tabs#editor-area-main');
            const closeIcon = editorTabs.locator('wa-tab[aria-selected="true"] wa-icon[name="xmark"]');
            if (await closeIcon.isVisible()) {
                await closeIcon.click();
                await beat(page);
            }

            await dismissOpenPromptDialogs(page);
            await fileBrowser.locator('docks-command[cmd="refresh_resource"]').locator('wa-button').click();

            const indexedDbLabel = fileBrowser
                .locator('wa-tree-item')
                .filter({ hasText: 'IndexedDB' })
                .first()
                .locator('.tree-label-text')
                .filter({ hasText: 'IndexedDB' });
            await indexedDbLabel.scrollIntoViewIfNeeded();
            await indexedDbLabel.click();
            await beat(page);

            await dismissOpenPromptDialogs(page);

            await createTrigger.click();
            await expect(jupyterNotebookCreateMenuItem(fileBrowser)).toBeVisible({ timeout: 15_000 });
            await dwell(page);
            await jupyterNotebookCreateMenuItem(fileBrowser).click();

            const dialog = page.locator('wa-dialog[open][label="Input"]');
            await expect(dialog).toBeAttached({ timeout: 15_000 });
            const pathInput = dialog.locator('docks-prompt-dialog-content wa-input');
            await pathInput.locator('input').fill(`${notebookBaseName}.ipynb`);
            await beat(page);
            await dialog.locator('.dialog-service-footer wa-button').filter({ hasText: 'OK' }).click({ force: true });

            const ipynbRow = fileBrowser.locator('wa-tree-item').filter({ hasText: `${notebookBaseName}.ipynb` }).first();
            await expect(ipynbRow).toBeVisible({ timeout: 30_000 });
            await beat(page, storyboardPaceMs() + 600);
            await ipynbRow.dblclick();

            await expect(page.locator('docks-tabs#editor-area-main docks-notebook-editor')).toBeVisible({ timeout: 120_000 });
            await dwell(page);
        });

        const notebookEditor = page.locator('docks-tabs#editor-area-main docks-notebook-editor');

        await test.step('Select Python kernel', async () => {
            await expect(notebookEditor).toBeVisible({ timeout: 30_000 });

            await notebookEditor.locator('.kernel-select').locator('wa-button[slot="trigger"]').click();
            await dwell(page);

            const pythonItem = notebookEditor.locator('wa-dropdown-item[value="python"]');
            await expect(pythonItem).toBeVisible({ timeout: 15_000 });
            await pythonItem.click();
            await beat(page);

            const statusBtn = notebookEditor.locator('wa-button:has(wa-icon[label="Kernel status"])');
            await expect(statusBtn).toBeVisible({ timeout: 15_000 });
            if (await statusBtn.filter({ hasText: 'Not connected' }).isVisible()) {
                await statusBtn.click();
            }
            await expect(notebookEditor.locator('.kernel-select wa-button[slot="trigger"]')).toContainText(/Python/i, {
                timeout: 15_000,
            });
            await beat(page, storyboardPaceMs() + 500);
        });

        await test.step('Scroll to first code cell and enter Python', async () => {
            const firstCodeCell = notebookEditor.locator('.code-cell').first();
            await firstCodeCell.scrollIntoViewIfNeeded();
            await beat(page);

            const monacoSurface = firstCodeCell.locator('.monaco-editor');
            await expect(monacoSurface).toBeVisible({ timeout: 60_000 });
            await monacoSurface.click({ timeout: 30_000 });
            await page.keyboard.press('ControlOrMeta+a');
            await page.keyboard.type('print("Hello world!")');
            await dwell(page);
        });

        await test.step('Run cell and show output', async () => {
            const firstCodeCell = notebookEditor.locator('.code-cell').first();
            await firstCodeCell.locator('docks-command[cmd="notebook.runCell"]').click();

            const output = firstCodeCell.locator('.cell-output');
            await expect(output).toBeVisible({ timeout: CELL_OUTPUT_MS });
            await expect(output.locator('pre code')).toContainText('Hello world!', { timeout: CELL_OUTPUT_MS });
            await dwell(page);
        });
    });
});
