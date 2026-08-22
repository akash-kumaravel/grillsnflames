import ProductPage from './ProductPage';

import { ActiveSection } from '../types';
import { SERVICES } from '../data';

interface WaterVaporProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function WaterVaporFireplacePage({ onNavigate }: WaterVaporProps) {
  const svc = SERVICES.find(s => s.id === 'water-vapor-fireplace');
  return (
    <ProductPage
      productId="water-vapor-fireplace"
      title="3D Water Vapor Fire Place"
      tagline="Cool-To-Touch Visual Flames for Modern Interiors"
      description="Experience the beauty of 3D realistic flames using ultrasonic water mist technology. Safe, cool-to-touch, and ideal for luxury media walls and family homes."
      detailedDescription="Water vapor fire places create mesmerizing 3D flame effects using ultrasonic water mist combined with LED lighting. The technology produces realistic, deep flames that look like traditional fireplaces but with zero heat production. Cool-to-touch and 100% safe, making them ideal for family homes, offices, and spaces where traditional fireplaces aren't practical."
      imageUrl={svc?.image || "https://images.unsplash.com/photo-1600210494033-b55f6b9f6a14?auto=format&fit=crop&q=80&w=1200"}

      features={[
        "3D Flame Effect - Ultrasonic mist creates incredibly realistic layered flames",
        "Cool-to-Touch Technology - Completely safe for children and pets",
        "No Heat Production - Ideal for media walls, under TVs, and decorative installations",
        "LED Lighting Options - Customize flame colors and intensity",
        "Eco-Friendly - Uses only electricity and water, zero emissions",
        "Low Maintenance - Simple water refill and occasional cleaning"
      ]}
      benefits={[
        "Safe for placement under televisions and in any interior design",
        "Stunning visual centerpiece that impresses guests",
        "Perfect for commercial spaces, lobbies, and showrooms",
        "No combustion byproducts or air quality concerns",
        "Energy-efficient compared to traditional heating systems"
      ]}
      howItWorks={[
        "Fill the water reservoir with distilled water",
        "Turn on the ultrasonic mist system and LED lights",
        "Watch realistic 3D flames appear and dance beautifully"
      ]}
      faqs={[
        {
          question: "Do water vapor fireplaces produce heat?",
          answer: "No, they produce zero heat. The flame effect is purely visual. They are ideal for decoration and ambiance."
        },
        {
          question: "Is the technology safe around children and pets?",
          answer: "Yes, absolutely. The unit is cool-to-touch and uses only water mist and electricity. It's one of the safest fireplace options available."
        },
        {
          question: "What kind of water should I use?",
          answer: "Use distilled water to prevent mineral buildup in the ultrasonic atomizer. Regular tap water may cause deposits and reduce performance."
        },
        {
          question: "How long does the water last?",
          answer: "Depending on the model and mist intensity, a full reservoir typically lasts 8-12 hours before needing refill."
        }
      ]}
      bgGradient="from-blue-50 to-cyan-50"
      onNavigate={onNavigate}
    />
  );
}
