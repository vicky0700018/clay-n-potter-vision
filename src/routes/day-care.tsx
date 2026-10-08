import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/day-care')({
 head: () => ({ meta: [{ title: 'Day Care | Clay N Potter, Bhopal' }, { name: 'description', content: 'Day Care at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Day Care | Clay N Potter' }, { property: 'og:description', content: 'Explore day care at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="day-care"/>,
});
