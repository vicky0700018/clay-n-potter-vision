import { createFileRoute } from '@tanstack/react-router';
import { ContentPage } from '@/components/site/pages';
export const Route = createFileRoute('/admissions')({
 head: () => ({ meta: [{ title: 'Admissions | Clay N Potter, Bhopal' }, { name: 'description', content: 'Admissions at Clay N Potter Day Care & Play School in Danish Kunj, Kolar Road, Bhopal.' }, { property: 'og:title', content: 'Admissions | Clay N Potter' }, { property: 'og:description', content: 'Explore admissions at our nurturing Bhopal preschool and day care.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <ContentPage page="admissions"/>,
});
