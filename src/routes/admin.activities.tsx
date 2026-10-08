import { createFileRoute } from '@tanstack/react-router';
import { AdminPage } from '@/admin/admin';
export const Route = createFileRoute('/admin/activities')({
 head: () => ({ meta: [{ title: 'Manage Activities | Clay N Potter' }, { name: 'description', content: 'Manage Activities for the Clay N Potter frontend demo workspace.' }, { property: 'og:title', content: 'Manage Activities | Clay N Potter' }, { property: 'og:description', content: 'Manage the school demo content on this device.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex, nofollow' }] }),
 component: () => <AdminPage module="activities"/>,
});
