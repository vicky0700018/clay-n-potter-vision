import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/pages';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [
 { title: 'Clay N Potter Day Care & Play School | Bhopal' },
 { name: 'description', content: 'A caring preschool and day care in Danish Kunj, Kolar Road, Bhopal. Discover programs, school moments and a happy place to grow.' },
 { property: 'og:title', content: 'Clay N Potter Day Care & Play School | Bhopal' },
 { property: 'og:description', content: 'A happy childhood. A beautiful beginning. Explore Clay N Potter in Bhopal.' },
 { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }
 ] }), component: HomePage,
});
