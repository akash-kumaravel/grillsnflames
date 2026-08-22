import { ActiveSection } from '../types';

interface Props { onNavigate: (section: ActiveSection) => void }

export default function BestFireplaceLanding({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
      <section className="max-w-5xl mx-auto pt-28 sm:pt-36 px-6 md:px-12 pb-20 space-y-16">
        
        {/* Intro Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Best Fireplace in Dubai — Premium Indoor & Outdoor Fire Units
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-4xl">
            Flames Fireplace designs, manufactures, and installs premium architectural fire features across Dubai, Abu Dhabi, and the Northern Emirates. We combine safety-first engineering with sculptural finishes to deliver the best fireplace solutions for luxury villas, penthouses, commercial lobbies, and five-star hospitality projects.
          </p>
        </div>

        {/* Dynamic Matrix Layout */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Why Flames Fireplace is the Best Fireplace Choice in Dubai
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400 font-light">
              Selecting a fireplace in the UAE requires careful attention to building layout, air conditioning airflow, and physical safety constraints. At Flames Fireplace, we provide a complete engineering consult, on-site survey, and custom CAD blocks before any construction begins.
            </p>
            <ul className="list-disc pl-5 text-neutral-350 space-y-3 text-sm">
              <li>
                <strong>Double-Wall Insulated Casings:</strong> Grade 316 marine stainless steel panels that remain cool to protect wall drywall, wood paneling, and smart TV screens.
              </li>
              <li>
                <strong>Eco-Friendly & Ventless:</strong> Bio-ethanol liquid pure fuel combusts cleanly with zero soot, ash, smoke, or chimney pipe requisites.
              </li>
              <li>
                <strong>UAE Civil Defense Compatibility:</strong> Engineered according to international CE, UL, and regional safety guidelines.
              </li>
              <li>
                <strong>Bespoke Remodeling:</strong> Complete technical casing coordination for interior designers and fit-out specialists.
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 bg-[#121212] border border-neutral-800 p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-semibold text-white">Explore Solutions</h3>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => onNavigate('bio-ethanol-fireplace')} 
                className="text-left text-sm text-neutral-300 hover:text-orange-400 cursor-pointer border-b border-neutral-800 pb-2 transition"
              >
                Bio-Ethanol Fireplaces
              </button>
              <button 
                onClick={() => onNavigate('water-vapor-fireplace')} 
                className="text-left text-sm text-neutral-300 hover:text-orange-400 cursor-pointer border-b border-neutral-800 pb-2 transition"
              >
                3D Water Vapor Fireplaces
              </button>
              <button 
                onClick={() => onNavigate('fire-pit')} 
                className="text-left text-sm text-neutral-300 hover:text-orange-400 cursor-pointer border-b border-neutral-800 pb-2 transition"
              >
                Fire Pits &amp; Tables
              </button>
              <button 
                onClick={() => onNavigate('built-in-bbq')} 
                className="text-left text-sm text-neutral-300 hover:text-orange-400 cursor-pointer pb-2 transition"
              >
                Built-In BBQs &amp; Kitchens
              </button>
            </div>
          </div>
        </div>

        {/* Feature Descriptions */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Our Signature Fireplace Formats &amp; Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#121212] border border-neutral-800 p-6 rounded-2xl space-y-3">
              <h3 className="font-semibold text-white text-base">Bio-Ethanol Fireplaces</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Utilizing clean-burning bioethanol fuel, our bio ethanol burners deliver beautiful, real golden flames and supplementary heat without chimneys, gas lines, or soot residues. Ideal for luxury living rooms.
              </p>
            </div>
            <div className="bg-[#121212] border border-neutral-800 p-6 rounded-2xl space-y-3">
              <h3 className="font-semibold text-white text-base">3D Water Vapor Fireplaces</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                An innovative option using ultrasonic mist nebulizers and LED lights to produce incredibly realistic, cool-to-touch flames. 100% child-safe and suitable directly beneath television screens.
              </p>
            </div>
            <div className="bg-[#121212] border border-neutral-800 p-6 rounded-2xl space-y-3">
              <h3 className="font-semibold text-white text-base">Bespoke Outdoor Fire Pits</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Individually customized weather-proof fire tables, gas burners, and pool fire bowls. Designed with marine-grade steel to withstand high temperature swings and summer humidity.
              </p>
            </div>
          </div>
        </div>

        {/* Local UAE Context & Projects block */}
        <div className="bg-[#121212] border border-neutral-800 p-8 rounded-3xl space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Trusted in Dubai's Most Prestigious Communities
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            Our expert fireplace installation and fit-out advisory group has worked in collaboration with local designers across Emirates Hills, Palm Jumeirah villas, Dubai Marina penthouses, Jumeirah Golf Estates, and Downtown Dubai hotels. We provide custom site surveying, coordinate casing dimensions, and ensure safety handover for all client developments.
          </p>
        </div>

        {/* FAQs Segment */}
        <div className="bg-[#121212] rounded-3xl p-8 border border-neutral-800 space-y-6">
          <h3 className="font-semibold text-white text-xl">Best Fireplace Dubai — FAQ Desk</h3>
          
          <div className="space-y-6 text-neutral-300">
            <div className="space-y-1.5">
              <strong className="text-sm font-semibold text-white">Why is bio ethanol considered the best fireplace choice for Dubai apartments?</strong>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">Bioethanol fireplaces require zero venting pipes, chimneys, or gas hookups. They generate real warmth and flickering flames without producing smoke or ash, making them highly versatile for residential spaces without pre-installed flues.</p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-sm font-semibold text-white">How does Flames Fireplace ensure safety for wall casings under TVs?</strong>
              <p className="text-xs text-neutral-450 leading-relaxed font-light">We engineer bespoke double-wall casings with marine steel inserts and technical ventilation paths. This ensures the heat from our bioethanol burners is directed outward rather than upward, protecting smart TV consoles and surrounding wood or marble drywall frames.</p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-sm font-semibold text-white">Do you provide site measurements and custom CAD planning?</strong>
              <p className="text-xs text-neutral-450 leading-relaxed font-light">Yes. Our Dubai engineering support team coordinates direct CAD blocks, conducts precise site inspections, and commissions units at handover to ensure optimal safety compliance and perfect aesthetics.</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800">
            <button 
              onClick={() => onNavigate('contact')} 
              className="px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-sans text-xs font-semibold cursor-pointer transition shadow-lg shadow-orange-500/10"
            >
              Speak to a Dubai Fireplace Advisor
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
