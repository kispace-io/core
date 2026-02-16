import { contributionRegistry, registerAll, type ExecutionContext, taskService, toastError, createLogger } from "@kispace-io/core";
import { signal } from "@kispace-io/core/externals/lit";
import { inBrowserMLService } from "./in-browser-ml-service";
import { MLTask, MLModel } from "./ml-models";

const logger = createLogger("InBrowserML");

const MEDIA_VIEWER_TOOLBAR_TARGET = "toolbar:media-viewer";

const detectionRunningSignal = signal(false);

function isMediaViewerWithImage(part: unknown): part is {
    getMediaUrl(): string | undefined;
    getIsImage(): boolean;
    getImageDimensions(): { width: number; height: number };
    setOverlays(overlays: Array<{ type: 'bbox'; left: number; top: number; width: number; height: number; label?: string; color?: string }>): void;
} {
    if (!part || typeof (part as any).getMediaUrl !== "function") return false;
    return (part as any).getIsImage?.() === true;
}

const CATEGORY_PALETTE = [
    '#0d6efd', '#dc3545', '#198754', '#fd7e14', '#6f42c1',
    '#20c997', '#e83e8c', '#ffc107', '#0dcaf0', '#6c757d'
];

function categoryToColor(category: string, palette: string[]): string {
    let n = 0;
    for (let i = 0; i < category.length; i++) n = (n * 31 + category.charCodeAt(i)) >>> 0;
    return palette[n % palette.length];
}

function detectionResultsToOverlays(
    results: Array<{ label: string; score: number; box: { xmin: number; ymin: number; xmax: number; ymax: number } }>,
    imageWidth: number,
    imageHeight: number
): Array<{ type: 'bbox'; left: number; top: number; width: number; height: number; label?: string; color?: string }> {
    const w = imageWidth || 1;
    const h = imageHeight || 1;
    return results.map((r) => ({
        type: 'bbox' as const,
        left: r.box.xmin / w,
        top: r.box.ymin / h,
        width: (r.box.xmax - r.box.xmin) / w,
        height: (r.box.ymax - r.box.ymin) / h,
        label: `${r.label} ${(r.score * 100).toFixed(0)}%`,
        color: categoryToColor(r.label, CATEGORY_PALETTE)
    }));
}

registerAll({
    command: {
        id: "detect_objects_in_current_image",
        name: "Detect objects",
        description: "Runs object detection on the image currently open in the media viewer.",
        parameters: [],
        output: []
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const part = context.activeEditor;
            if (!isMediaViewerWithImage(part)) {
                return { error: "No image open in the media viewer." };
            }
            const url = part.getMediaUrl();
            if (!url) {
                return { error: "No image URL available." };
            }
            try {
                detectionRunningSignal.set(true);
                await taskService.runAsync("Detecting objects", async () => {
                    const detector = await inBrowserMLService.getPipeline(
                        MLTask.OBJECT_DETECTION,
                        MLModel.OBJECT_DETECTION_YOLOV9
                    );
                    const results = (await detector(url)) as Array<{
                        label: string;
                        score: number;
                        box: { xmin: number; ymin: number; xmax: number; ymax: number };
                    }>;
                    const { width, height } = part.getImageDimensions();
                    part.setOverlays(detectionResultsToOverlays(results, width, height));
                });
                return { ok: true };
            } catch (err: unknown) {
                const msg = err instanceof Error ? err.message : String(err);
                logger.error(`Object detection failed: ${msg}`);
                toastError(msg);
                return { error: msg };
            } finally {
                detectionRunningSignal.set(false);
            }
        }
    }
});

contributionRegistry.registerContribution(MEDIA_VIEWER_TOOLBAR_TARGET, {
    label: "Detect objects",
    icon: "magnifying-glass",
    command: "detect_objects_in_current_image",
    disabled: () => detectionRunningSignal.get()
});
