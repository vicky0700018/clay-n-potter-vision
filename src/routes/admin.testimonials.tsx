import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/admin/admin';
export const Route = createFileRoute('/admin/testimonials')({
 head: () => ({ meta: [{ title: 'Manage Testimonials | Clay N Potter' }, { name: 'description', content: 'Manage Testimonials for the Clay N Potter frontend demo workspace.' }, { property: 'og:title', content: 'Manage Testimonials | Clay N Potter' }, { property: 'og:description', content: 'Manage the school demo content on this device.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex, nofollow' }] }),
 component: () => <AdminPage module="testimonials"/>,
});
