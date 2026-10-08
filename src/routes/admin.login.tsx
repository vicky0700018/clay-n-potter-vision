import { createFileRoute } from '@tanstack/react-router';
import { AdminLogin } from '@/admin/admin';
export const Route = createFileRoute('/admin/login')({
 head: () => ({ meta: [{ title: 'Demo Admin Login | Clay N Potter' }, { name: 'description', content: 'Demo Admin Login for the Clay N Potter frontend demo workspace.' }, { property: 'og:title', content: 'Demo Admin Login | Clay N Potter' }, { property: 'og:description', content: 'Manage the school demo content on this device.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex, nofollow' }] }),
 component: AdminLogin,
});
