import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface Artificial3DProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Artificial3DFireplacePage({ onNavigate }: Artificial3DProps) {
  const svc = SERVICES.find(s => s.id === 'artificial-3d-fireplace');
  return (
    <ProductPage
      productId="artificial-3d-fireplace"
      title="3D Artificial Fire Place"
      tagline="Realistic non-combustion flame systems"
      description="Advanced artificial flame systems that emulate flame dynamics for striking visual effect without combustion or heat. Ideal for safe indoor installations."
      detailedDescription="High-fidelity artificial flame systems reproduce realistic flame motion and depth using fans, fabric, and LED lighting. They provide dramatic visuals without heat or combustion, perfect for retail, hospitality, and modern homes where safety or ventilation is a concern."
      imageUrl={svc?.image || "/assets/3DArtificialFireplace.jpeg"}

      features={[
        "Realistic flame dynamics without combustion",
        "Cool-to-touch visual effect",
        "Low running cost and simple maintenance"
      ]}
      benefits={[
        "Safe for indoor public spaces and homes",
        "No fuel, smoke, or emissions",
        "Highly customizable visual presets"
      ]}
      howItWorks={[
        "Install the visual engine and LED lighting per site specs",
        "Power the unit and select visual presets",
        "Enjoy layered, realistic flames without heat or combustion"
      ]}
      faqs={[{ question: "Do these produce heat?", answer: "No — they are visual-only systems and generate negligible heat." }]}
      bgGradient="from-neutral-50 to-neutral-100"
      onNavigate={onNavigate}
    />
  );
}
