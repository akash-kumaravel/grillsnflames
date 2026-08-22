import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface RocksProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function RocksPage({ onNavigate }: RocksProps) {
  const svc = SERVICES.find(s => s.id === 'rocks-media');
  return (
    <ProductPage
      productId="rocks-media"
      title="Rocks"
      tagline="Lava rock, pebbles and artificial stone media"
      description="Decorative and functional media for fire beds: lava rock, pebbles and artificial stone selections for pots, bowls and linear burners."
      detailedDescription="Choose from graded lava rock, decorative pebbles and engineered artificial stone to style and protect your burner area. Suitable for poolside and high-moisture environments when specified correctly."
      imageUrl={svc?.image || "/assets/Rocks_StoneonHous.jpeg"}

      features={["Lava rock", "Pebbles", "Artificial stone"]}
      benefits={["Improved flame aesthetics", "Durable under heat", "Multiple textures and colours"]}
      howItWorks={["Spread media to recommended depth and rinse pebbles before use."]}
      faqs={[{ question: "Which media is best for coastal use?", answer: "Artificial stone or marine-grade aggregates are best for salty coastal exposure." }]}
      bgGradient="from-neutral-50 to-neutral-100"
      onNavigate={onNavigate}
    />
  );
}
