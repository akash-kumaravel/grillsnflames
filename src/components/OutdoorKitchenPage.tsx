import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface OutdoorKitchenProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorKitchenPage({ onNavigate }: OutdoorKitchenProps) {
  const svc = SERVICES.find(s => s.id === 'outdoor-kitchen');
  return (
    <ProductPage
      productId="outdoor-kitchen"
      title="Custom Outdoor Kitchens"
      tagline="Luxury Culinary Spaces for Entertaining & Daily Living"
      description="Design and build your dream outdoor kitchen. Our custom modular kitchens combine durable materials, reliable appliances, and thoughtful architecture."
      detailedDescription="Outdoor kitchens extend your living space and transform how you entertain. We design custom kitchens with sintered stone countertops, integrated appliances, and professional-grade equipment specifically engineered for Dubai's climate. From intimate cooking spaces to resort-style entertainment areas, each kitchen is tailored to your lifestyle and aesthetic vision."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1556932643-51765f3e1f18?auto=format&fit=crop&q=80&w=1200"}
      features={[
        "Custom Design - Tailored layouts match your space and needs",
        "Durable Countertops - High-grade sintered stone withstands extreme heat and UV",
        "Professional Appliances - Commercial-grade grills, burners, and refrigeration",
        "Modular Construction - Mix and match components for flexibility",
        "Weather-Resistant Materials - Stainless steel, powder-coated finishes, UV-protected",
        "Storage Solutions - Built-in cabinets, beverage coolers, and prep areas"
      ]}
      benefits={[
        "Significantly increases outdoor entertaining capacity",
        "Raises property value and curb appeal",
        "Creates resort-style living at home",
        "Enables daily outdoor dining and cooking",
        "Durable investment lasting 15+ years with proper maintenance"
      ]}
      howItWorks={[
        "Consultation to discuss your vision and requirements",
        "Site assessment and custom design proposal",
        "Professional installation with all utilities and finishing",
        "Handover with maintenance training and warranty"
      ]}
      faqs={[
        {
          question: "What factors shape an outdoor kitchen design?",
          answer: "Designs vary widely based on size, materials, and features you choose. We provide a detailed recommendation after assessing your specific requirements and lifestyle."
        },
        {
          question: "How long does outdoor kitchen installation take?",
          answer: "Typical installation takes 3-6 weeks depending on complexity, plumbing requirements, and electrical connections. We plan timelines in consultation with you."
        },
        {
          question: "Do outdoor kitchens require maintenance?",
          answer: "Minimal maintenance includes occasional cleaning and sealing of stone surfaces. Stainless steel should be wiped regularly. Most systems require annual professional servicing."
        },
        {
          question: "Can I add to my outdoor kitchen later?",
          answer: "Yes! Our modular designs are specifically planned for future expansions. Additional burners, coolers, or storage can be added anytime."
        }
      ]}
      bgGradient="from-green-50 to-emerald-50"
      onNavigate={onNavigate}
    />
  );
}
