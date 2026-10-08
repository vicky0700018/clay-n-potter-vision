import { describe, expect, it } from 'vitest';
import { initialData, migrateReferenceImages } from '@/data/school';
describe('Reference image replacement', () => {
 it('replaces legacy reference URLs while preserving administrator content', () => {
 const saved={...initialData,programs:initialData.programs.map(item=>({...item,name:'Edited program',image:'/__l5e/assets-v1/legacy/school.jpg'}))};
 const migrated=migrateReferenceImages(saved);
 expect(migrated.programs[0]?.name).toBe('Edited program');
 expect(migrated.programs[0]?.image).toBe(initialData.programs[0]?.image);
 expect(migrated.programs[0]?.image).not.toContain('/__l5e/assets-v1/');
 });
 it('preserves custom administrator images',()=>{
 const saved={...initialData,programs:initialData.programs.map(item=>({...item,image:'https://example.com/custom.jpg'}))};
 expect(migrateReferenceImages(saved).programs[0]?.image).toBe('https://example.com/custom.jpg');
 });
});
