import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface BuiltInBbqProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function BuiltInBbqPage({ onNavigate }: BuiltInBbqProps) {
  const svc = SERVICES.find(s => s.id === 'built-in-bbq');
  return (
    <ProductPage
      productId="built-in-bbq"
      title="Customized Fire Table with Fire Unit"
      tagline="Bespoke Outdoor Fire Feature for High-End Spaces"
      description="Custom fire tables with integrated fire units, built for private villas, hospitality terraces, and premium outdoor lounges."
      detailedDescription="Customized fire tables with fire units combine premium materials, clean lines, and practical outdoor functionality. Designed for the UAE climate, these bespoke installations can include remote control, push-and-turn ignition, or key valve fire places for a refined outdoor experience."
      imageUrl={svc?.image || "/assets/Built-In BBQ _ Flames Close-up.png"}

      features={[
        "Custom layouts built for your patio, garden, or terrace",
        "Weather-resistant materials suitable for UAE climates",
        "Integrated storage, prep areas, and seating-friendly design",
        "Flexible finishes for a polished indoor-outdoor look"
      ]}
      benefits={[
        "Elevates outdoor entertaining and everyday living",
        "Adds long-term value to residential and hospitality spaces",
        "Creates a sleek, permanent focal point for gatherings",
        "Built for durability, comfort, and easy maintenance"
      ]}
      howItWorks={[
        "Discuss your ideal cooking layout and hosting style",
        "Review the site, utilities, and preferred materials",
        "Install the BBQ with integrated finishes and accessories",
        "Receive a complete handover with care guidance"
      ]}
      faqs={[
        {
          question: "Can built-in BBQs be customized for small spaces?",
          answer: "Yes. We tailor the layout to suit compact terraces, large gardens, and everything in between."
        },
        {
          question: "Are they suitable for Dubai’s climate?",
          answer: "Absolutely. We use durable materials and finishes designed to hold up well in heat, sun, and coastal conditions."
        }
      ]}
      bgGradient="from-amber-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
