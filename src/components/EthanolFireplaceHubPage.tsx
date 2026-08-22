import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ChevronDown, Droplets, Leaf } from 'lucide-react';
import { ActiveSection } from '../types';
import { ETHANOL_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';

interface EthanolFireplaceHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function EthanolFireplaceHubPage({ onNavigate }: EthanolFireplaceHubProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const generalFaqs = [
    {
      question: "What is the difference between a Manual Ethanol Fireplace and Ethanol Fuel?",
      answer: "The Manual Ethanol Fireplace is the physical stainless steel burner appliance featuring spill-proof ceramic fiber wadding and manual snuffer lids. Ethanol Fuel refers to the 96.6%+ ultra-pure denatured liquid bio-fuel that powers the fireplace with zero smoke or soot."
    },
    {
      question: "Do ethanol fireplaces require any chimney, flue, or electrical plug?",
      answer: "No. High-purity bioethanol undergoes clean combustion, producing only warmth, water vapor, and trace carbon dioxide. It is 100% ventless and requires zero gas pipelines, chimneys, flues, or electrical wires."
    },
    {
      question: "Can manual ethanol fireplaces be used outdoors in Dubai?",
      answer: "Yes. They are perfect for sheltered outdoor patios, balconies, terraces, and indoor living rooms. For breezy outdoor areas, we recommend pairing them with our 10mm tempered glass wind guards to maintain steady, elegant golden flames."
    },
    {
      question: "How long does 1 liter of bioethanol fuel burn?",
      answer: "Depending on the burner tray length and flame damper opening, 1 liter of certified bioethanol burns for approximately 2 to 4 hours, producing up to 12,000 to 18,000 BTU of soothing radiant warmth."
    }
  ];

  return (
    <div id="ethanol-fireplace-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
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
            Clean-Burning Bio-Ethanol Fireplaces in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            Explore our manual stainless steel bioethanol burner trays and high-purity eco-fuel systems — 100% ventless, smokeless, and soot-free for indoor living spaces and outdoor terraces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> 100% Ventless (No Flue or Chimney)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> 96.6%+ Ultra-Pure Biofuel
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Marine 316 Stainless Steel
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2 Product Models Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Select Configuration</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Ethanol Fireplace Models & Fuel</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Select a category below to explore detailed dimensions, safety burn rates, stainless steel tray engineering, and certified eco-fuel specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ETHANOL_VARIANTS.map((item) => (
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

      {/* Engineering Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Eco-Friendly & Safe</span>
          <h2 className="mt-3 text-3xl font-bold text-white">Why Bio-Ethanol is Ideal for UAE Properties</h2>
          <p className="mt-3 text-neutral-400 text-sm font-light">
            Enjoy authentic dancing golden flames with absolute peace of mind and zero structural renovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Zero Flue or Chimney Required</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Produces no smoke, soot, or harmful particles. Simply unpack, fuel, ignite, and enjoy instant atmospheric fire.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Spill-Proof Ceramic Core</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Internal micro-porous ceramic wool stabilizes liquid biofuel, preventing spills if the vessel is accidentally jostled.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Clean Sustainable Energy</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Formulated from 100% renewable sugarcane and plant biomass fermentations, leaving zero carbon residue on walls or ceilings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Got Questions?</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Bio-Ethanol Fireplace FAQs</h3>
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
            Need Custom Ethanol Burner Trays or Bulk Biofuel Delivery in Dubai?
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base font-light mb-8">
            We custom-fabricate linear stainless steel ethanol inserts to any dimension and supply certified 96.6% bioethanol with same-day delivery across Dubai and the UAE.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Custom%20Ethanol%20Burners%20and%20Biofuel%20Supply."
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2 cursor-pointer"
            >
              Order Bioethanol Fuel / Inquire on WhatsApp
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-colors cursor-pointer"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
