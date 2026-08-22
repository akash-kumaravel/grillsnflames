import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface OutdoorFireplaceProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorFireplacePage({ onNavigate }: OutdoorFireplaceProps) {
  const svc = SERVICES.find(s => s.id === 'outdoor-fireplace');
  return (
    <ProductPage
      productId="outdoor-fireplace"
      title="Outdoor Fire Unit"
      tagline="Home Automated On & Off Fireplace Control"
      description="Create a premium outdoor fire unit with gas, ethanol, or wood fuel options, built for Dubai gardens, terraces, and hospitality spaces."
      detailedDescription="Our outdoor fire unit collection is designed for versatile outdoor living. Choose from home automated on and off fire places, high and low flame fire places, remote operated fire places, push and turn fire places, and key valve fire places. We also design fire pots, fire tables, and custom integrated fire solutions for modern UAE properties."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1585761214872-f76baf5b9900?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Climate-Resistant Construction - Engineered for Dubai's intense sun and humidity",
        "Durable Materials - High-grade concrete, stainless steel, and powder-coated finishes",
        "Multiple Fuel Options - Bioethanol, wood-burning, or gas-fired designs",
        "Safety Wind Guards - Tempered glass screens for wind protection",
        "Integrated Design - Seamlessly blends with landscaping and architecture",
        "Low Maintenance - Durable materials require minimal upkeep"
      ]}
      benefits={[
        "Extends outdoor entertaining season year-round",
        "Adds significant property value and curb appeal",
        "Creates a welcoming gathering space for family and guests",
        "Available in custom sizes and finishes",
        "Complements modern and traditional outdoor designs"
      ]}
      howItWorks={[
        "Professional installation on level ground near seating areas",
        "Connect to fuel source (bioethanol, gas, or wood storage)",
        "Ignite and enjoy the ambiance - safety systems prevent accidents"
      ]}
      faqs={[
        {
          question: "What is the best fuel type for outdoor fireplaces?",
          answer: "Bioethanol is most popular due to ease of use, no smoke, and low maintenance. Wood-burning offers tradition but requires more upkeep. Gas provides consistent heat and convenience."
        },
        {
          question: "Are outdoor fireplaces safe in windy conditions?",
          answer: "Yes, when equipped with wind guards and installed on stable bases. Our designs meet international safety standards for outdoor use."
        },
        {
          question: "How much space do outdoor fireplaces need?",
          answer: "Typically 8-12 feet clearance from structures and trees is recommended. Consult our specialists for your specific layout."
        },
        {
          question: "Can outdoor fireplaces withstand Dubai's heat and humidity?",
          answer: "Absolutely. Our materials are specifically chosen for Gulf climate resilience, including UV protection and rust resistance."
        }
      ]}
      bgGradient="from-amber-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
