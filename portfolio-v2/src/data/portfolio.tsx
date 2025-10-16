import { PlaceOSContent } from '@/components/portfolio-content/placeos-content';
import { KnowledgeBaseContent } from '@/components/portfolio-content/knowledge-base-content';
import { KnowledgeBaseSkeleton } from '@/components/skeletons/knowledge-base-skeleton';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: 'portfolio' | 'project';
  color: string;
  colorLight: string;
  colorLighter: string; // Even lighter for hover backgrounds
  colorLightest: string; // Lightest for card backgrounds
  colorDark: string;
  features?: string[]; // List of features/highlights
  detailedContent?: React.ReactNode; // Full case study content
  ctaText?: string; // Custom CTA button text
  skeleton?: React.ReactNode; // Optional skeleton component for card hover
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'placeos',
    title: 'PlaceOS - Founding Marketer (2020-2025)',
    description: 'Smart building platform for enterprise workplaces and university campuses',
    image: '/images/workmate-dashboard.png',
    link: '/case-studies/placeos',
    category: 'portfolio',
    color: '#1800AD',
    colorDark: '#0F0070',
    colorLight: '#4D33D9',
    colorLighter: '#A699E6',
    colorLightest: '#E6E0FF',
    features: ['Product launch', 'Sales enablement', 'Content marketing'],
    detailedContent: <PlaceOSContent />,
    ctaText: 'Read case study',
  },
  {
    id: 'knowledge-base',
    title: 'Interactive Knowledge Base for Smart Building Teams',
    description: 'Turned a decade of expertise into a graph-based tool that helps workplace, campus, and facilities teams explore how concepts like occupancy, utilization, and space planning connect — and answer the core question: is this space delivering value? 100+ Leads Generated on Launch.',
    image: '/images/knowledge-base.jpg',
    link: '/case-studies/knowledge-base',
    category: 'portfolio',
    color: '#7F3576',
    colorDark: '#5A2452',
    colorLight: '#A6649D',
    colorLighter: '#D4B2CE',
    colorLightest: '#F7EBFF',
    features: ['100+ leads generated', 'Graph-based navigation', 'Smart building expertise'],
    detailedContent: <KnowledgeBaseContent />,
    ctaText: 'Explore the tool',
    skeleton: <KnowledgeBaseSkeleton />,
  },
];
