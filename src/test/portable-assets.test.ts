import { describe, expect, it } from 'vitest';
import { portableSchoolAssets } from '../../build/school-assets';
import photoBundle from '../../build/school-photo-bundle.json';
describe('Portable school photographs', () => {
  it('emits all 24 photos at their exact production URL paths', () => {
    const emitted: { fileName: string; source: Uint8Array }[] = [];
    const plugin = portableSchoolAssets();
    const hook = plugin.generateBundle;
    if (typeof hook !== 'function') throw new Error('Missing export hook');
    Reflect.apply(hook, { emitFile: (asset: { fileName: string; source: Uint8Array }) => emitted.push(asset) }, []);
    expect(emitted).toHaveLength(24);
    expect(emitted.map(photo => photo.fileName)).toEqual(photoBundle.map(photo => photo.path));
    expect(emitted.every(photo => photo.source[0] === 255 && photo.source[1] === 216)).toBe(true);
  });
});