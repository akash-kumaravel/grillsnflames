import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ChevronDown, Trees, Wrench, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { WOOD_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';

interface WoodFireplaceHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function WoodFireplaceHubPage({ onNavigate }: WoodFireplaceHubProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const generalFaqs = [
    {
      question: "Can wood fireplaces be safely used in residential gardens and patios in Dubai?",
      answer: "Yes, provided they are installed on non-combustible stone, tiled, or concrete surfaces with adequate open-air clearance. All our wood fireplaces include stainless steel spark arrestor mesh domes to contain floating embers."
    },
    {
      question: "What wood is recommended for low smoke burning in the UAE?",
      answer: "We recommend kiln-dried seasoned hardwoods such as oak, olive wood, or birch. These hardwoods have a moisture content under 18%, producing maximum radiant heat, long-lasting coals, and virtually zero acrid smoke."
    },
    {
      question: "Do you supply heavy-duty Corten steel and custom masonry hearth designs?",
      answer: "Yes. We design and custom-build heavy Corten steel chimeneas that develop a protective rustic patina, as well as 304 stainless steel fire pits and refractory firebrick masonry hearths tailored to UAE villa architecture."
    },
    {
      question: "How do you clean and maintain outdoor wood fire pits?",
      answer: "Our wood fire features come equipped with slide-out stainless steel ash collection drawers and base rainwater drain plugs, making maintenance fast, clean, and effortless."
    }
  ];

  return (
    <div id="wood-fireplace-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
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
            Authentic Outdoor Wood Fireplaces in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            Experience the timeless crackling warmth, hypnotic aroma, and primal campfire atmosphere of authentic wood-burning hearths, heavy corten pits, and engineered chimeneas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Heavy-Gauge Corten & 304 Steel
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> 1400°C Refractory Firebrick Lining
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Spark Arrestor Safety Screens
            </span>
          </motion.div>
        </div>
      </section>

      {/* Model Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Featured Woodfire Model</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Wood Fireplace Engineering</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Explore complete technical specifications, ember control screens, firebrick thermal linings, and custom hearth installations across Dubai and the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {WOOD_VARIANTS.map((item) => (
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

      {/* Safety & Construction Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Crafted for Performance</span>
          <h2 className="mt-3 text-3xl font-bold text-white">Built for Outdoor Desert Living</h2>
          <p className="mt-3 text-neutral-400 text-sm font-light">
            Engineered with high-temperature alloys and smart ember control to ensure authentic fires with absolute safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Trees className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Natural Radiant Heating</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Provides genuine woodfire aroma, crackle, and high thermal radius extending well over 4 meters in cool winter nights.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Micro-Mesh Spark Containment</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Heavy 304 stainless steel spark screen dome traps sparks and flying embers while allowing unobstructed flame view.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-neutral-800">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 w-fit mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Effortless Ash Drawer Cleanout</h4>
            <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
              Integrated lower slide-out ash pan and bottom rainwater drain holes prevent soot buildup and water stagnation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Technical Q&A</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Wood Fireplace FAQs</h3>
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
            Custom Built-in Wood Fireplaces & Garden Hearths in Dubai
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base font-light mb-8">
            Book a site survey to determine optimal wind orientation, firebrick safety offsets, and custom Corten steel masonry designs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Outdoor%20Wood%20Fireplaces."
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
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
