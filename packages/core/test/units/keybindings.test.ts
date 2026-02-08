/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach } from 'vitest';
import { keyBindingManager } from '../../src/core/keybindings';

const TEST_KEY = 'CTRL+ALT+F12';
const TEST_CMD_A = 'test.keybindings.cmdA';
const TEST_CMD_B = 'test.keybindings.cmdB';

describe('KeyBindingManager', () => {
    afterEach(() => {
        keyBindingManager.unregisterKeyBinding(TEST_CMD_A);
        keyBindingManager.unregisterKeyBinding(TEST_CMD_B);
    });

    describe('parseKeyBinding', () => {
        it('parses valid key binding with modifiers', () => {
            const b = keyBindingManager.parseKeyBinding('CTRL+SHIFT+P');
            expect(b).not.toBeNull();
            expect(b!.key).toBe('P');
            expect(b!.ctrl).toBe(true);
            expect(b!.shift).toBe(true);
            expect(b!.alt).toBe(false);
        });

        it('parses single key without modifiers', () => {
            const b = keyBindingManager.parseKeyBinding('P');
            expect(b).not.toBeNull();
            expect(b!.key).toBe('P');
            expect(b!.ctrl).toBe(false);
        });

        it('normalizes key names', () => {
            const b = keyBindingManager.parseKeyBinding('CTRL+ESC');
            expect(b).not.toBeNull();
            expect(b!.key).toBe('ESCAPE');
        });

        it('returns null for empty or whitespace', () => {
            expect(keyBindingManager.parseKeyBinding('')).toBeNull();
            expect(keyBindingManager.parseKeyBinding('   ')).toBeNull();
        });

        it('returns null when only a modifier is given', () => {
            expect(keyBindingManager.parseKeyBinding('CTRL')).toBeNull();
            expect(keyBindingManager.parseKeyBinding('SHIFT')).toBeNull();
        });

        it('returns null when unknown modifier is present', () => {
            expect(keyBindingManager.parseKeyBinding('CTRL+FOO+P')).toBeNull();
        });
    });

    describe('registerKeyBinding', () => {
        it('rejects when different command already has the same key', () => {
            const first = keyBindingManager.registerKeyBinding(TEST_CMD_A, TEST_KEY);
            expect(first).toBe(true);
            const second = keyBindingManager.registerKeyBinding(TEST_CMD_B, TEST_KEY);
            expect(second).toBe(false);
        });

        it('rejects duplicate registration for same command and key', () => {
            keyBindingManager.registerKeyBinding(TEST_CMD_A, TEST_KEY);
            const again = keyBindingManager.registerKeyBinding(TEST_CMD_A, TEST_KEY);
            expect(again).toBe(false);
        });
    });

    describe('getKeyBindingsForCommand', () => {
        it('returns bindings in stable sorted order', () => {
            keyBindingManager.registerKeyBinding(TEST_CMD_A, 'CTRL+SHIFT+P');
            keyBindingManager.registerKeyBinding(TEST_CMD_A, 'CTRL+P');
            const bindings = keyBindingManager.getKeyBindingsForCommand(TEST_CMD_A);
            expect(bindings).toHaveLength(2);
            expect(bindings[0]).toBe(bindings.slice().sort()[0]);
            expect(bindings[1]).toBe(bindings.slice().sort()[1]);
        });
    });

    describe('getAllBindings', () => {
        it('returns a copy that does not mutate internal state', () => {
            keyBindingManager.registerKeyBinding(TEST_CMD_A, TEST_KEY);
            const all = keyBindingManager.getAllBindings();
            const entry = all.get('alt+ctrl+F12');
            expect(entry).toBeDefined();
            entry!.pop();
            const still = keyBindingManager.getKeyBindingsForCommand(TEST_CMD_A);
            expect(still).toHaveLength(1);
        });
    });
});
