import { describe, it, expect } from 'vitest';
import * as constants from '../../src/core/constants';
import { MouseButton } from '../../src/core/constants';

describe('constants', () => {
  it('exports toolbar constants', () => {
    expect(constants.TOOLBAR_MAIN).toBe('app-toolbars-main');
    expect(constants.TOOLBAR_MAIN_RIGHT).toBe('app-toolbars-main-right');
    expect(constants.TOOLBAR_BOTTOM).toBe('app-toolbars-bottom');
  });

  it('exports layout container constants', () => {
    expect(constants.EDITOR_AREA_MAIN).toBe('editor-area-main');
    expect(constants.SIDEBAR_MAIN).toBe('sidebar-main');
    expect(constants.PANEL_BOTTOM).toBe('panel-bottom');
  });

  it('exports COMMAND_SAVE and HIDE_DOT_RESOURCE', () => {
    expect(constants.COMMAND_SAVE).toBe('command-save');
    expect(constants.HIDE_DOT_RESOURCE).toBe(false);
  });

  it('MouseButton enum has expected values', () => {
    expect(MouseButton.LEFT).toBe(0);
    expect(MouseButton.MIDDLE).toBe(1);
    expect(MouseButton.RIGHT).toBe(2);
    expect(MouseButton.BACK).toBe(3);
    expect(MouseButton.FORWARD).toBe(4);
  });
});
