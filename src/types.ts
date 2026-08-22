export type ActiveSection =
  | 'home'
  | 'about'
  | 'services'           // Services, Advisory, and Installation
  | 'portfolio'          // Portfolio of works
  | 'why-choose'
  | 'faq'
  | 'contact'
  | 'blog'
  | 'bio-ethanol-fireplace'
  | 'water-vapor-fireplace'
  | 'outdoor-fireplace'
  | 'indoor-fireplace'
  | 'fire-pit'
  | 'fire-table'
  | 'outdoor-kitchen'
  | 'built-in-bbq'
  | 'fireplace-dubai'
  | 'ethanol-burner'
  | 'best-fireplace-dubai'
  | 'outdoor-gas-fireplace'
  | 'home-automated-gas-fireplace'
  | 'high-low-flame-gas-fireplace'
  | 'remote-operated-gas-fireplace'
  | 'push-and-turn-gas-fireplace'
  | 'key-valve-gas-fireplace'
  | 'ethanol-fireplace'
  | 'manual-ethanol-fireplace'
  | 'ethanol-fuel-fireplace'
  | 'wood-fireplace'
  | 'outdoor-woodfire-place'
  | 'rocks-media'
  | 'lava-rock-media'
  | 'pebbles-media'
  | 'artificial-stone-media'
  | 'fire-pot-tables'
  | 'concrete-fire-pot'
  | 'metal-powder-coated-pot'
  | 'grc-fire-bowls'
  | 'customized-fire-tables-general'
  | 'custom-fire-tables'
  | 'custom-fire-table'
  | 'custom-fire-table-with-fire-unit'
  | 'artificial-3d-fireplace';

export interface BreadcrumbStep {
  label: string;
  section?: ActiveSection;
  articleId?: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'ethanol' | 'general';
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  faqs: FAQItem[];
  imageUrl: string;
  bgGradient: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  targetKeyword: string;
  schema: string;
  seoTitle?: string;
  seoDescription?: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
    faq?: FAQItem;
    category: string;
    readTime: string;
    date: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'indoor' | 'fire-pit';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  specs: string[];
  waMessage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  badge?: string;
  category?: 'indoor' | 'outdoor' | string;
  waMessage?: string;
  faqs?: FAQItem[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface GasFireplaceVariant {
  id: 'home-automated-gas-fireplace' | 'high-low-flame-gas-fireplace' | 'remote-operated-gas-fireplace' | 'push-and-turn-gas-fireplace' | 'key-valve-gas-fireplace';
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  badge: string;
  features: string[];
  benefits: string[];
  howItWorks: string[];
  specs: { label: string; value: string }[];
  faqs: FAQItem[];
  waMessage: string;
  seoTitle: string;
  seoDescription: string;
}

export interface OutdoorFireUnitVariant {
  id: ActiveSection;
  categoryId: 'outdoor-gas-fireplace' | 'ethanol-fireplace' | 'wood-fireplace' | 'rocks-media' | 'fire-pot-tables' | 'custom-fire-table';
  categoryTitle: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  image: string;
  badge: string;
  features?: string[];
  benefits: string[];
  howItWorks: string[];
  specs: { label: string; value: string }[];
  faqs: FAQItem[];
  waMessage: string;
  seoTitle: string;
  seoDescription: string;
}
