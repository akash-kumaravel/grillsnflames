import React, { useState } from 'react';
import { ShieldCheck, Zap, Flame, Droplet, Star, ArrowRight, HeartHandshake, Check, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface MetricDetail {
  label: string;
  ethanol: string;
  traditional: string;
}

export default function WhyChoosePage() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'safety' | 'efficiency'>('matrix');
  
  // Interactive Advisor states
  const [roomType, setRoomType] = useState<string>('bedroom');
  const [needsHeat, setNeedsHeat] = useState<string>('no');
  const [hasKids, setHasKids] = useState<string>('yes');

  const getAdvisorRecommendation = () => {
    if (roomType === 'outdoor') {
      return {
        title: "Outdoor Bio Ethanol Fireplace",
        tagline: "Weather-Resistant Living Flames Fireplace",
        reason: "For pool decks, outdoor terraces, and gardens, our weather-proof Bio Ethanol fire tables and tall pillar torches cut through the wind and sea breeze, offering authentic cozy warmth without pesky electrical cords.",
        features: ["Genuine living fire", "316 Marine-grade stainless steel", "Tempered wind guards", "100% wireless"],
        buttonCode: "outdoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Outdoor Bio Ethanol Fireplace. Can I get more details?"
      };
    } else {
      return {
        title: "Indoor Bio Ethanol Fireplace",
        tagline: "Cozy Real Flame with Zero Soot",
        reason: hasKids === 'yes'
          ? "Your setting calls for beautiful real warmth. For homes with children and pets, our Indoor Bio Ethanol cassettes include custom heat-shielded glass guards and active automatic safety valves that prevent accidental fuel contact."
          : "Your setting calls for real flame ambience and comfortable heat. Our Indoor Bio Ethanol system burns plant-derived fuel, producing cozy warmth with zero soot, zero chimneys, and zero permit hurdles.",
        features: ["Real warming fire", "Chimney-free", "Clean burn", "Active safety guards"],
        buttonCode: "indoor-ethanol",
        whatsappMsg: "Hi, I ran your Room Advisor. I got recommended an Indoor Bio Ethanol Fireplace. Can I explore built-in cassette specs?"
      };
    }
  };

  const recommendation = getAdvisorRecommendation();

  const comparisonData: MetricDetail[] = [
    {
      label: "Atmosphere",
      ethanol: "Warm, sculptural flame that elevates interiors without visual clutter",
      traditional: "Often heavy, permanent, and visually dominant in the room"
    },
    {
      label: "Safety",
      ethanol: "Protected flame with clean operation and no ash, smoke, or soot",
      traditional: "Higher exposure to sparks, residue, and maintenance concerns"
    },
    {
      label: "Installation",
      ethanol: "Flexible placement with minimal structural requirements",
      traditional: "Often demands masonry, flues, or fuel line planning"
    },
    {
      label: "Climate Fit",
      ethanol: "Well suited to contemporary UAE interiors and outdoor living spaces",
      traditional: "Less adaptable for modern, low-maintenance, high-design homes"
    },
    {
      label: "Maintenance",
      ethanol: "Simple upkeep with a refined, elegant finish and no chimney cleaning",
      traditional: "Regular care, ash handling, and service routines are typically required"
    },
    {
      label: "Design Freedom",
      ethanol: "A seamless option for custom interiors, lounges, and hospitality settings",
      traditional: "More constrained by construction limitations and existing infrastructure"
    }
  ];

  return (
    <div id="section-why-choose" className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
      <div className="max-w-7xl mx-auto pt-28 sm:pt-36 px-6 md:px-12">
        
        {/* Header Block Description */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest font-sans inline-block mb-4">
            Engineering Excellence
          </span>
          <h1 className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none mb-6">
            Why Choose Flames Fireplace — The Best Fireplace in Dubai
          </h1>
          <p className="font-sans text-base sm:text-lg text-neutral-400 leading-relaxed">
            By merging high-specification casing designs with plant-derived clean fuel, we completely bypass the soot, ash, permit paperwork, and safety hazards of older wood or gas line systems.
          </p>
        </section>



        {/* Bento highlights of material excellence */}
        <section className="mb-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Quality Standards</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              Uncompromising Physical Security Specs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                <ShieldCheck className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-white text-base">Grade 316 Marine Stainless Steel</h3>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                All burner bays and outdoor casings utilize double-wall marine-grade steel resistant to high atmospheric humidity, garden water spray, and fuel thermal stress.
              </p>
            </div>

            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                <Star className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-white text-base">Adjustable Safety Slides</h3>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                Manually control physical flame length and thermal intensity easily with quick-slide structural dampers, ensuring absolute control over fuel consumption and local room ambient heating.
              </p>
            </div>

            <div className="bg-[#121212] border border-neutral-800 p-8 rounded-3xl space-y-4 shadow-2xs hover:shadow-md transition">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                <Star className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-sans font-semibold text-white text-base">CE, UL, and AHD Certifications</h3>
              <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                Our technology adheres to globally recognized testing compliance structures guaranteeing safety triggers that shut down system feeds automatically in case of temperature surges or tilt.
              </p>
            </div>
          </div>
        </section>
        
        {/* Comparison Matrix */}
        <section className="mb-12 bg-[#121212] p-8 rounded-3xl border border-neutral-800">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Direct Comparison</span>
            <h3 className="font-sans text-xl font-semibold text-white">Ethanol vs Traditional Firepoints</h3>
          </div>

          <div className="space-y-2">
            {/* Header row (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-6 text-[10px] text-neutral-400 uppercase font-mono font-bold border-b border-neutral-800 pb-3 pl-3">
              <div className="col-span-2">Metric</div>
              <div className="col-span-5">Ethanol Fireplace</div>
              <div className="col-span-5">Traditional Firepoints</div>
            </div>

            {/* Matrix rows */}
            {comparisonData.map((m, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-5 border-b border-neutral-800 last:border-b-0 pl-3 align-top"
              >
                {/* Metric Title */}
                <div className="col-span-1 md:col-span-2">
                  <span className="text-[9px] font-mono font-bold text-orange-400 uppercase tracking-wider block md:hidden mb-1">Metric</span>
                  <h4 className="text-sm font-semibold text-white">{m.label}</h4>
                </div>

                {/* Ethanol */}
                <div className="col-span-1 md:col-span-5 space-y-1">
                  <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider block md:hidden">Ethanol Fireplace</span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{m.ethanol}</p>
                </div>

                {/* Traditional */}
                <div className="col-span-1 md:col-span-5 space-y-1 pt-3 md:pt-0 border-t border-neutral-800/60 md:border-t-0">
                  <span className="text-[9px] font-mono font-bold text-neutral-500 uppercase tracking-wider block md:hidden">Traditional Firepoints</span>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{m.traditional}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Room Advisor removed per request */}

        <section className="mb-16 bg-[#121212] rounded-3xl border border-neutral-800 p-8 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">Complete project support</span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight mt-4">From design consultation to installation handover, every step is supported by our technical team.</h3>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed mt-4">We help clients choose the right burner format, fuel type, finish, placement, and safety plan for modern homes, hospitality projects, and outdoor living spaces.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Trusted By</span>
            <h3 className="font-sans text-2xl font-semibold text-white">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121212] p-6 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">Laila — Private Client</div>
                  <p className="text-xs text-neutral-450">"Flawless install, warm ambience, and zero maintenance. Perfect for our family lounge."</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] p-6 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">Hassan — Architect</div>
                  <p className="text-xs text-neutral-450">"The design freedom saved our concept. Their technical team delivered precise CAD and install guidance."</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] p-6 rounded-3xl border border-neutral-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">Mariam — Developer</div>
                  <p className="text-xs text-neutral-450">"Reliable delivery and excellent aftercare. We repeated the layout across three villas."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-20">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-sans text-2xl font-semibold">Ready to reimagine your space?</h3>
              <p className="text-xs text-neutral-300 mt-2">Get a tailored recommendation, CAD drawings, and comprehensive specifications from our project team.</p>
            </div>
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%20team%2C%20I'd%20like%20to%20discuss%20a%20bespoke%20fireplace%20project."
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold"
            >
              Speak to a Project Engineer
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
