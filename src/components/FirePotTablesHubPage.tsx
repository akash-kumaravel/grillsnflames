import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ChevronDown, Layers, Box, Paintbrush } from 'lucide-react';
import { ActiveSection } from '../types';
import { FIRE_POT_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';

interface FirePotTablesHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function FirePotTablesHubPage({ onNavigate }: FirePotTablesHubProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const generalFaqs = [
    {
      question: "What is the difference between Concrete, Metal Powder Coated, and GRC Fire Bowls?",
      answer: "Concrete Fire Pots are cast from heavy reinforced architectural concrete offering monolithic stability in high-wind areas. Metal Powder Coated Pots are fabricated from marine-grade aluminum and stainless steel with baked electrostatic finishes in any custom RAL color. GRC (GFRC) Fire Bowls use glass fiber reinforcement to achieve stone texture at 50% lighter weight—ideal for rooftop penthouses."
    },
    {
      question: "Can these fire pots and tables be connected to either LPG bottles or Natural Gas lines?",
      answer: "Yes. All our units are dual-certified. They can be plumbed directly into subterranean Natural Gas/LPG lines or configured with internal hidden access compartments that conceal standard 5kg or 11kg LPG composite cylinders."
    },
    {
      question: "How do you customize a Fire Table?",
      answer: "We fabricate bespoke tables to your required length, width, and height. You select the tabletop surface (Dekton sintered stone, Calacatta marble, granite, or fluted concrete), the burner type (automated remote, push & turn, key valve, or bioethanol), and add accessories like glass wind guards and matching tabletop lids."
    },
    {
      question: "Are fire pots safe for wooden pool decks and grass lawns in Dubai?",
      answer: "Yes, because our burner drop-in pans feature internal thermal insulation barriers and elevated air gaps that prevent downward heat transfer to delicate timber decking or outdoor tiles."
    }
  ];

  return (
    <div id="fire-pot-tables-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_40%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Architectural Fire Pots & Fire Tables in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            Discover precast concrete fire pots, powder coated marine aluminum vessels, lightweight GRC fire bowls, and bespoke custom fire tables engineered for UAE villas and luxury resorts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Precast Concrete & Lightweight GFRC
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Marine-Grade 316 Stainless Burners
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Custom RAL & Dekton Table Finishes
            </span>
          </motion.div>
        </div>
      </section>

      {/* 4 Models Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Product Catalog</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Select Your Vessel & Table Architecture</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Click on any model below to view inside specifications, material samples, diameter options, and turnkey installation details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FIRE_POT_VARIANTS.map((item) => (
            <div key={item.id}>
              <ServiceCard 
                service={item} 
                onNavigate={() => {
                  onNavigate(item.id as ActiveSection);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Materials Comparison */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="bg-[#121212] rounded-3xl border border-neutral-800/90 p-8 sm:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Material Engineering</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Material Comparison Matrix</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">Concrete</span>
              <h4 className="text-base font-bold text-white mt-2">Cast Concrete</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Monolithic, wind-stable weight. Perfect for open lawns and seaside villas.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 45–120kg</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">Metal</span>
              <h4 className="text-base font-bold text-white mt-2">Powder Coated Metal</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Marine aluminum with electrostatic RAL coating. Lightweight & rust-proof.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 18–35kg</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">GFRC</span>
              <h4 className="text-base font-bold text-white mt-2">GRC Fire Bowls</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Glass fiber matrix stone. High tensile strength, ideal for luxury penthouses.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Weight: 25–55kg</div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-semibold uppercase">Bespoke</span>
              <h4 className="text-base font-bold text-white mt-2">Custom Tables</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">Bespoke Dekton / marble tables with integrated flame units and dining lids.</p>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">Custom Dimensions</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Expert Guidance</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-[#121212] rounded-2xl border border-neutral-800/90 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/60 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-950/40 via-neutral-900 to-[#121212] border border-orange-500/20 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Custom Fire Pot & Fire Table Fabrication in Dubai
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base font-light mb-8">
            Speak with our engineering team to design custom diameter vessels, choose powder coating finishes, or review 3D CAD renders for bespoke fire tables.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Custom%20Fire%20Pots%20and%20Fire%20Tables."
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2 cursor-pointer"
            >
              Chat on WhatsApp: +971 54 211 2891
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-colors cursor-pointer"
            >
              Request 3D Concept Design
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
