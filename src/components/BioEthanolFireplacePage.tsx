import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface BioEthanolProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function BioEthanolFireplacePage({ onNavigate }: BioEthanolProps) {
  const svc = SERVICES.find(s => s.id === 'ethanol-fireplace' || s.id === 'bio-ethanol-fireplace');
  return (
    <ProductPage
      productId="bio-ethanol-fireplace"
      title="Manual Ethanol Fire Place"
      tagline="Ventless Real Flame for Modern Homes"
      description="Experience authentic flame without a chimney. Our manual ethanol fire places deliver real warmth and ambiance with zero smoke, ash, or installation hassle."
      detailedDescription="Manual ethanol fire places offer the elegance of a real fire with unprecedented flexibility. No venting, no gas lines, no complex installations. Simply add clean-burning ethanol fuel and enjoy instant warmth, real flames, and the ambiance of traditional fireplaces. Perfect for apartments, modern homes, and commercial spaces."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Real Flames & Authentic Heat - Burn renewable bioethanol fuel for genuine warmth and flickering golden flames",
        "100% Ventless Installation - No chimney, flue, or gas connection required",
        "Zero Emissions - Clean-burning fuel produces only CO₂ and water vapor",
        "Easy Tabletop to Wall-Mounted Models - Portable or permanently installed options",
        "Instant Ambiance - Turn on or off instantly with electronic ignition",
        "Environmentally Friendly - Sustainable, clean-burning biofuel solution"
      ]}
      benefits={[
        "Transform any room with real flame ambiance",
        "Provides supplementary heat without energy waste",
        "Perfect for rental properties and modern interior design",
        "Low maintenance and fuel consumption",
        "Eco-friendly alternative to gas or wood fireplaces"
      ]}
      howItWorks={[
        "Fill the bioethanol burner with clean-burning fuel",
        "Ignite using the electronic ignition system",
        "Enjoy instant heat and mesmerizing real flames"
      ]}
      faqs={[
        {
          question: "Is bioethanol fireplace safe for indoor use?",
          answer: "Yes, when installed correctly. Bioethanol burns cleanly, producing only CO₂ and water vapor. We recommend adequate ventilation and following manufacturer safety guidelines."
        },
        {
          question: "How much heat does a bioethanol fireplace produce?",
          answer: "Most units produce 1-3kW of heat, suitable for rooms up to 200-300 sq ft. Exact output depends on the burner size and fuel quality."
        },
        {
          question: "What is the cost to operate a bioethanol fireplace?",
          answer: "Operational cost is typically low and significantly lower than traditional heating methods. For exact costs based on your usage, please contact our team for a personalized estimate."
        },
        {
          question: "Can I move a bioethanol fireplace?",
          answer: "Yes! Tabletop and portable models can be moved freely. Wall-mounted units are permanently installed but can be relocated with professional help."
        }
      ]}
      bgGradient="from-orange-50 to-amber-50"
      onNavigate={onNavigate}
    />
  );
}
