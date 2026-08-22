import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface IndoorFireplaceProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function IndoorFireplacePage({ onNavigate }: IndoorFireplaceProps) {
  const svc = SERVICES.find(s => s.id === 'indoor-fireplace');
  return (
    <ProductPage
      productId="indoor-fireplace"
      title="Indoor Fire Place"
      tagline="Ethanol, 3D Water Vapor & 3D Artificial Fireplaces"
      description="Transform your interior with indoor fire places. Choose from manual ethanol fire places, 3D water vapor fire places, or 3D artificial fire places that provide warmth, style, and atmosphere."
      detailedDescription="Our indoor fire place collection brings together cutting-edge technology and stunning design. Whether you prefer the realistic flames of ethanol, the visual magic of water vapor, or the convenience of 3D artificial fire places, we have the perfect solution. Each model is carefully selected for safety, efficiency, and aesthetic appeal in contemporary Dubai homes."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "Ventless Technology - No chimney or flue installation required",
        "Wall-Mounted or Recessed Options - Fits seamlessly into modern interiors",
        "Multiple Fuel Choices - Bioethanol, electric, or water vapor technologies",
        "Adjustable Flame Intensity - Control heat output and visual effects",
        "Clean Aesthetics - Minimalist design complements any décor",
        "Safety Certified - All units meet international safety standards"
      ]}
      benefits={[
        "Creates a dramatic focal point in living rooms, bedrooms, or offices",
        "Provides supplementary heating for energy efficiency",
        "No complex installation - ready to enjoy quickly",
        "Safe for families with children and pets when properly selected",
        "Enhances property value and modern appeal"
      ]}
      howItWorks={[
        "Choose your fireplace type based on desired features and space",
        "Install on wall, in recess, or freestanding as preferred",
        "Activate and enjoy instant warmth and ambiance"
      ]}
      faqs={[
        {
          question: "Which indoor fireplace is best for apartments?",
          answer: "Bioethanol or water vapor models are ideal for apartments as they require no venting, gas connections, or complex installations."
        },
        {
          question: "Can I install an indoor fireplace myself?",
          answer: "Many wall-mounted models can be installed with basic tools, but we recommend professional installation for safety and warranty compliance."
        },
        {
          question: "How does indoor fireplace operation differ by type?",
          answer: "Operating experience varies by type, with electric units offering the simplest setup and water vapor models providing a modern, low-maintenance experience. For detailed guidance based on your needs, please contact us."
        },
        {
          question: "Are indoor fireplaces good for air quality?",
          answer: "Bioethanol and water vapor models are excellent for air quality. Electric models produce zero emissions. Ensure proper ventilation for bioethanol units."
        }
      ]}
      bgGradient="from-neutral-50 to-orange-50"
      onNavigate={onNavigate}
    />
  );
}
