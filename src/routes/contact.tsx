import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/contact')({
 head: () => ({ meta: [{ title: 'Contact Us | Clay N Potter, Bhopal' }, { name: 'description', content: 'Contact Us at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Contact Us | Clay N Potter' }, { property: 'og:description', content: 'Explore contact us at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="contact"/>,
});
