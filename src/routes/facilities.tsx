import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/facilities')({
 head: () => ({ meta: [{ title: 'Facilities | Clay N Potter, Bhopal' }, { name: 'description', content: 'Facilities at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Facilities | Clay N Potter' }, { property: 'og:description', content: 'Explore facilities at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="facilities"/>,
});
