import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface WoodFireplaceProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function WoodFireplacePage({ onNavigate }: WoodFireplaceProps) {
  const svc = SERVICES.find(s => s.id === 'wood-fireplace');
  return (
    <ProductPage
      productId="wood-fireplace"
      title="Wood Fire Place"
      tagline="Classic wood-fire features for outdoor areas"
      description="Traditional wood-burning fireplaces and fire pits designed for outdoor use with ember control and durable finishes."
      detailedDescription="Wood-fire solutions including chimeneas, built-in hearths and engineered pits — specify ember guards and finishes suitable for terraces and gardens."
      imageUrl={svc?.image || "/assets/WOOD FIRE PLACE.jpeg"}

      features={["Natural wood combustion", "Ember containment options"]}
      benefits={["Authentic campfire ambiance", "Robust outdoor performance"]}
      howItWorks={["Use seasoned hardwood and follow local open-burning regulations."]}
      faqs={[{ question: "Can wood fires be used near leisure areas?", answer: "Yes — with spark guards and correct placement as advised by our team." }]}
      bgGradient="from-neutral-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
