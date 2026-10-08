import { describe, expect, it } from 'vitest';
import { validDemoLogin, visibleItems, enquiryStatuses, admissionStatuses, initialData } from '@/data/school';
describe('School demo rules',()=>{
 it('accepts the exact requested demo account',()=>{expect(validDemoLogin('admin@claynpotter.com','Admin@123')).toBe(true);expect(validDemoLogin('admin@claynpotter.com','wrong')).toBe(false);expect(validDemoLogin('another@example.com','Admin@123')).toBe(false);});
 it('does not show disabled programs',()=>{const item=initialData.programs[0];if(!item)throw new Error('Missing demo program');expect(visibleItems([{...item,status:'Disabled'},{...item,id:'active',status:'Enabled'}]).map(x=>x.id)).toEqual(['active']);});
 it('does not show unapproved testimonials',()=>{const item=initialData.testimonials[0];if(!item)throw new Error('Missing testimonial');expect(visibleItems([{...item,status:'Unapproved'},{...item,id:'approved',status:'Approved'}]).map(x=>x.id)).toEqual(['approved']);});
 it('uses the four requested enquiry statuses',()=>{expect(enquiryStatuses).toEqual(['New','Contacted','Scheduled','Completed']);});
 it('uses the four requested admission statuses',()=>{expect(admissionStatuses).toEqual(['New','Under Review','Approved','Rejected']);});
 it('provides at least twenty gallery photographs',()=>{expect(initialData.gallery.length).toBeGreaterThanOrEqual(20);expect(initialData.gallery.every(x=>Boolean(x.image))).toBe(true);});
});
