import ProductPage from './ProductPage';
import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface EthanolBurnerProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function EthanolBurnerPage({ onNavigate }: EthanolBurnerProps) {
  const svc = SERVICES.find(s => s.id === 'ethanol-burner');
  return (
    <ProductPage
      productId="ethanol-burner"
      title="Manual Ethanol Fire Place"
      tagline="The Heart of Every Custom Fire Feature - Pure Burning Performance"
      description="High-quality ethanol fire places that deliver clean, consistent flames. Perfect for custom fireplace projects and replacement needs."
      detailedDescription="The burner is the heart of any ethanol fire place. Our ethanol burners are engineered for safety, efficiency, and flame quality. Whether you're building a custom project, upgrading an existing fireplace, or replacing a worn component, our burners deliver clean, reliable performance. Each unit is tested for fuel efficiency and flame consistency."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1600210454835-a3b4e3b7c3b2?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Precision Engineering - Optimized combustion chamber design for clean burning",
        "Multiple Sizes - Available in various capacities (0.5L to 3L)",
        "Safety Features - Flame guards, overflow protection, and stable base",
        "Easy Installation - Simple mounting and fuel loading systems",
        "Long-Lasting - Durable materials withstand repeated heating cycles",
        "Efficient Burning - Maximum heat output with minimal fuel consumption"
      ]}
      benefits={[
        "Perfect for DIY fireplace projects and custom installations",
        "Replace burners in existing fireplaces to extend lifespan",
        "Delivers consistent, beautiful flames every time",
        "Easy fuel management and reliable ignition",
        "Versatile solution for professional and custom fireplace projects"
      ]}
      howItWorks={[
        "Install burner securely in fireplace chamber or custom enclosure",
        "Fill with high-quality bioethanol fuel",
        "Ignite using electronic ignition or manual lighter",
        "Enjoy beautiful flames and warmth"
      ]}
      faqs={[
        {
          question: "What size ethanol burner do I need?",
          answer: "Burner size depends on your fireplace dimensions and desired heat output. Small spaces (1-2 sqm) suit 0.5-1L burners. Larger spaces may need 2-3L units. We help calculate the right size."
        },
        {
          question: "Can I upgrade my existing fireplace burner?",
          answer: "In many cases, yes. If the fireplace chamber can accommodate a larger burner safely, we can help with the upgrade. Consult our specialists for compatibility."
        },
        {
          question: "What fuel should I use in ethanol burners?",
          answer: "Use only high-quality bioethanol fuel (at least 95% purity). Lower quality fuels produce more smoke and reduce burner lifespan. We recommend specifically formulated fireplace ethanol."
        },
        {
          question: "How often should I replace an ethanol burner?",
          answer: "With proper maintenance and quality fuel, burners last 5-10+ years. Replace sooner if you notice reduced flame quality, increased smoke, or fuel leaks."
        }
      ]}
      bgGradient="from-yellow-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
