import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/programs')({
 head: () => ({ meta: [{ title: 'Our Programs | Clay N Potter, Bhopal' }, { name: 'description', content: 'Our Programs at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Our Programs | Clay N Potter' }, { property: 'og:description', content: 'Explore our programs at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="programs"/>,
});
