import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface CustomFireTablesProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function CustomFireTablesPage({ onNavigate }: CustomFireTablesProps) {
  const svc = SERVICES.find(s => s.id === 'custom-fire-table' || s.id === 'custom-fire-tables');
  return (
    <ProductPage
      productId="custom-fire-tables"
      title="Customized Fire Tables"
      tagline="Bespoke fire tables with integrated burners"
      description="Full custom fire table fabrication and integration with optional fire unit installations per client specification."
      detailedDescription="Bespoke design and fabrication of fire tables with integrated burners, controls and finishing — ideal for villas, restaurants and hospitality terraces."
      imageUrl={svc?.image || "/assets/CustomizedFireTabl.jpeg"}

      features={["Custom sizes and finishes", "Integration with fire unit optional"]}
      benefits={["Tailored aesthetics", "Full installation and commissioning available"]}
      howItWorks={["Request a site survey, approve materials, and we fabricate and install."]}
      faqs={[{ question: "Can these include integrated fire units?", answer: "Yes — specify integrated burners and control options during quoting." }]}
      bgGradient="from-amber-100 to-orange-100"
      onNavigate={onNavigate}
    />
  );
}
