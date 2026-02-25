export function sanitizeFunctionName(name: string): string {
    return name
        .replace(/[^a-zA-Z0-9_-]/g, '_')
        .replace(/^[^a-zA-Z]/, 'cmd_$&')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '');
}
