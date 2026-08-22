import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface FirePotTablesProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FirePotTablesPage({ onNavigate }: FirePotTablesProps) {
  const svc = SERVICES.find(s => s.id === 'fire-pot-tables');
  return (
    <ProductPage
      productId="fire-pot-tables"
      title="Fire Pot & Fire Tables"
      tagline="Concrete, metal powder-coated and GRC fire bowls and tables"
      description="Durable fire pots and tables in a variety of materials and finishes. Options include integrated burners, powder-coated metals and lightweight GFRC constructions."
      detailedDescription="Fire pots and tables are available in concrete, powder-coated metal and GRC with options for integrated burners and custom finishes — suitable for terraces, rooftops and hospitality spaces."
      imageUrl={svc?.image || "/assets/FireTable_FirePotShowcas.jpeg"}

      features={["Concrete fire pot", "Metal powder coated pot", "GRC fire bowls"]}
      benefits={["Multiple material options", "Custom finishes available"]}
      howItWorks={["Select material and burner type; commission with protective covers and maintenance guidance."]}
      faqs={[{ question: "Can tables be customized?", answer: "Yes — we fabricate custom sizes and integrate burners on request." }]}
      bgGradient="from-orange-50 to-neutral-50"
      onNavigate={onNavigate}
    />
  );
}
