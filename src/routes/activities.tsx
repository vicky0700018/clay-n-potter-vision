import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/activities')({
 head: () => ({ meta: [{ title: 'Activities | Clay N Potter, Bhopal' }, { name: 'description', content: 'Activities at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Activities | Clay N Potter' }, { property: 'og:description', content: 'Explore activities at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="activities"/>,
});
