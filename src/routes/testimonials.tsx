import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/testimonials')({
 head: () => ({ meta: [{ title: 'Parent Stories | Clay N Potter, Bhopal' }, { name: 'description', content: 'Parent Stories at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Parent Stories | Clay N Potter' }, { property: 'og:description', content: 'Explore parent stories at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="testimonials"/>,
});
