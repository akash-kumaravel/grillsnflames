import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface FireplaceDubaiProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FireplaceDubaiPage({ onNavigate }: FireplaceDubaiProps) {
  const svc = SERVICES.find(s => s.id === 'fireplace-dubai');
  return (
    <ProductPage
      productId="fireplace-dubai"
      title="Fireplaces for Dubai Homes"
      tagline="Fire Features Designed for the UAE Lifestyle"
      description="Discover fireplaces specifically designed for Dubai's climate and lifestyle. From innovative water vapor to traditional bioethanol, we bring world-class fire features home."
      detailedDescription="Dubai demands thoughtful solutions. Our fireplace collection is carefully curated for the unique needs of Dubai residents and businesses. We understand the challenges of extreme heat, humidity, and salt-laden air - and we've engineered solutions that not only survive but thrive in these conditions. Each product is tested and certified for safety and performance in the UAE climate."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1579389072513-c8264a3a7a2c?auto=format&fit=crop&q=80&w=1200"}
      features={[
        "Climate-Engineered - Specifically designed for Dubai's extreme weather conditions",
        "Elegant Aesthetics - Finishes and designs suited to modern Dubai interiors",
        "Dubai-Compliant - Meets all UAE safety standards and regulations",
        "Professional Support - Local expertise and responsive customer service",
        "Variety of Options - From modern to traditional, indoor to outdoor solutions",
        "Investment Quality - Built to last and appreciated over time"
      ]}
      benefits={[
        "Brings international fireplace technology to your Dubai home",
        "Enhances property value in Dubai real estate markets",
        "Creates sophisticated entertaining spaces",
        "Local support and maintenance services ensure peace of mind",
        "Perfect for villas, apartments, and commercial developments"
      ]}
      howItWorks={[
        "Consultation with Dubai-based specialists who understand local preferences",
        "Site visit to assess space, climate exposure, and electrical needs",
        "Professional installation with full compliance to UAE standards",
        "Ongoing support and maintenance services"
      ]}
      faqs={[
        {
          question: "Which fireplace is best for Dubai apartments?",
          answer: "Water vapor fireplaces are ideal for apartments - they're safe, produce no emissions, and add visual appeal without installation complexity. Bioethanol units also work well with proper ventilation."
        },
        {
          question: "Do outdoor fireplaces work well in Dubai heat?",
          answer: "Absolutely! Our outdoor fireplaces are engineered specifically for Dubai's intense heat and humidity. They're made from materials that won't degrade and are designed for year-round use."
        },
        {
          question: "Are fireplaces worth the investment in Dubai?",
          answer: "Yes. Fireplaces can significantly enhance property appeal and value in Dubai's market, plus they provide genuine enjoyment and entertaining capabilities."
        },
        {
          question: "What warranty do you provide for Dubai purchases?",
          answer: "We provide comprehensive 2-year warranties on all products plus extended service options. Our local team handles all warranty claims and maintenance."
        }
      ]}
      bgGradient="from-blue-50 to-indigo-50"
      onNavigate={onNavigate}
    />
  );
}
