export const PACKAGES_COMMENT_PREFIX = "# @py-packages:";
const MAGIC_COMMENT_REGEX = /^#\s*@py-packages:\s*(.+)$/i;

export function parsePackagesFromContent(content: string): string[] {
    const firstLine = content.split("\n")[0] ?? "";
    const match = firstLine.match(MAGIC_COMMENT_REGEX);
    if (!match) return [];
    return match[1]
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
}

export function contentWithPackagesLine(content: string, packages: string[]): string {
    const lines = content.split("\n");
    const idx = lines.findIndex((line) => MAGIC_COMMENT_REGEX.test(line));
    const newLine = packages.length > 0 ? `${PACKAGES_COMMENT_PREFIX} ${packages.join(", ")}` : null;

    if (idx >= 0) {
        if (newLine) {
            lines[idx] = newLine;
        } else {
            lines.splice(idx, 1);
        }
    } else if (newLine) {
        lines.unshift(newLine);
    }
    return lines.join("\n");
}
