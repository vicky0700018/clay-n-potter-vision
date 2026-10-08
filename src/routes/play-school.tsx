import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/play-school')({
 head: () => ({ meta: [{ title: 'Play School | Clay N Potter, Bhopal' }, { name: 'description', content: 'Play School at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Play School | Clay N Potter' }, { property: 'og:description', content: 'Explore play school at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="play-school"/>,
});
