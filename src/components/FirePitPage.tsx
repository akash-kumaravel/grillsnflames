import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface FirePitProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FirePitPage({ onNavigate }: FirePitProps) {
  const svc = SERVICES.find(s => s.id === 'fire-pit');
  return (
    <ProductPage
      productId="fire-pit"
      title="Fire Pot & Fire Tables"
      tagline="Concrete, Metal Powder-Coated & GRC Fire Bowls for Outdoor Living"
      description="Create unforgettable outdoor experiences with our architectural fire pots and fire tables. Built tough for Dubai's climate, designed for entertaining and relaxation."
      detailedDescription="Fire pots and fire tables are the perfect centerpiece for outdoor gatherings. Our collection features concrete, metal powder-coated, and GRC construction specifically engineered for extreme heat and humidity. Choose from bioethanol-powered instant-flame models or traditional wood-burning pits. Each design combines functionality with sophisticated aesthetics."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1578270842512-b6c5f1f14dbb?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Heavy-Duty Construction - Reinforced concrete and marine-grade stainless steel",
        "Fuel Flexibility - Bioethanol, wood-burning, or gas options",
        "Safety Features - Wind-resistant design with contained flame area",
        "Easy to Use - Bioethanol models ignite instantly, no setup needed",
        "Weather Resistant - Sealed and treated for salt air and UV exposure",
        "Stunning Design - Modern and traditional styles available"
      ]}
      benefits={[
        "Creates an inviting gathering space for entertaining",
        "Provides warmth and ambiance for cool desert evenings",
        "Durable investment that lasts for decades",
        "Requires minimal maintenance compared to traditional fireplaces",
        "Perfect for residential, resort, and commercial settings"
      ]}
      howItWorks={[
        "Position fire pit in outdoor seating area on stable ground",
        "Add fuel (wood, bioethanol, or connect gas)",
        "Ignite safely and enjoy gatherings around the flames"
      ]}
      faqs={[
        {
          question: "What size fire pit do I need for my space?",
          answer: "For intimate gathering of 4-6 people, a 3-4 ft diameter pit works well. Larger spaces benefit from 5-6 ft pits. We assess your space and recommend the ideal size."
        },
        {
          question: "Is bioethanol fire pit better than wood-burning?",
          answer: "Bioethanol pits are cleaner, easier to use, and require no wood storage. Wood pits offer traditional ambiance. Both are excellent choices depending on your preferences."
        },
        {
          question: "Can I use a fire pit in windy conditions?",
          answer: "Yes, our pits are designed with wind resistance. However, extremely high winds may affect flame appearance. Wind guards provide additional protection."
        },
        {
          question: "How do I maintain a fire pit?",
          answer: "Regular clearing of ash (for wood pits), occasional sealing of concrete, and checking fuel connections keeps pits in excellent condition for years."
        }
      ]}
      bgGradient="from-red-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
