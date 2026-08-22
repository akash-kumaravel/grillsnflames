import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface FireTableProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FireTablePage({ onNavigate }: FireTableProps) {
  const svc = SERVICES.find(s => s.id === 'fire-table');
  return (
    <ProductPage
      productId="fire-table"
      title="Customized Fire Table with Fire Unit"
      tagline="Integrated Outdoor Fire Feature for Luxury Entertaining"
      description="Custom fire tables with integrated fire units, built for private villas, hospitality terraces, and modern outdoor spaces."
      detailedDescription="Customized fire tables with fire units combine premium materials, clean lines, and practical outdoor functionality. Designed for the UAE climate, these bespoke installations can include remote control, push-and-turn ignition, or key valve fire places for a refined outdoor experience."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1566558236202-ad0e17c20d85?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Integrated Design - Compact fire feature built into table surface",
        "Seating Height Flames - Enjoy flames while seated comfortably",
        "Tempered Glass Top - Safe, clean surface with glass safety barrier",
        "Multiple Sizes - From intimate 2-person to large gathering tables",
        "Temperature Controlled - Safe to touch glass, heat directed upward",
        "Easy Maintenance - Minimal upkeep required for long life"
      ]}
      benefits={[
        "Maximizes space efficiency for small patios and decks",
        "Creates conversation-starting focal point",
        "Provides warmth while maintaining conversation distance",
        "Sophisticated alternative to traditional fire pits",
        "Works beautifully in modern and traditional designs"
      ]}
      howItWorks={[
        "Position fire table in seating area on level ground",
        "Add bioethanol fuel to built-in burner chamber",
        "Light safely and enjoy warmth while seated"
      ]}
      faqs={[
        {
          question: "Are fire tables safe for use around children?",
          answer: "Yes, fire tables with tempered glass tops are very safe. The glass acts as a heat shield while allowing flame visibility. Supervision is always recommended."
        },
        {
          question: "Can I use a fire table on a wooden deck?",
          answer: "We don't recommend it. Fire tables should be placed on heat-resistant surfaces like concrete, stone, or fire-rated decking to prevent damage."
        },
        {
          question: "How long does bioethanol burn in a fire table?",
          answer: "Typically 2-4 hours per fuel loading, depending on table size and fuel quality. Small tables use less fuel than fire pits."
        },
        {
          question: "Can I put food or objects on the glass?",
          answer: "The glass surface should remain clear of objects to maintain safety and allow heat circulation. Use side tables for snacks and drinks."
        }
      ]}
      bgGradient="from-purple-50 to-pink-50"
      onNavigate={onNavigate}
    />
  );
}
