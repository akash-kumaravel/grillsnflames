import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ChevronDown } from 'lucide-react';
import { ActiveSection } from '../types';
import { ROCKS_MEDIA_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';

interface RocksMediaHubProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function RocksMediaHubPage({ onNavigate }: RocksMediaHubProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const generalFaqs = [
    {
      question: "What is the difference between Lava Rock, Pebbles, and Artificial Stone?",
      answer: "Lava Rock consists of natural volcanic basalt that absorbs and radiates high thermal heat while dispersing gas evenly. Pebbles are smooth refractory ceramic river stones offering a contemporary minimalist look. Artificial Stone consists of lightweight refractory ceramic fiber boulders and logs that glow incandescent red under flames."
    },
    {
      question: "Why should you never use regular garden rocks or beach stones in a fireplace?",
      answer: "Ordinary stones contain trapped water and minerals. When heated by high-intensity gas burners, the internal steam pressure builds until the stones explode violently. Only laboratory-certified refractory fire media should ever be placed over burners."
    },
    {
      question: "Are these fire rocks compatible with all gas burners and bioethanol fireplaces?",
      answer: "Yes. All our stones, lava rocks, and refractory ceramic media are engineered to withstand temperatures exceeding 1100°C–1300°C without cracking, discoloring, or producing smoke."
    },
    {
      question: "How do I calculate how much lava rock or pebbles I need?",
      answer: "Measure the width, length, and depth of your burner pan. Typically, a 2 to 3-inch depth provides complete coverage over the burner ports while maintaining optimal air-gas combustion ratios."
    }
  ];

  return (
    <div id="rocks-media-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
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
            Refractory Rocks & Stones in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            Discover our high-temperature volcanic lava rocks, architectural ceramic pebbles, and glowing artificial stone formations designed for gas fire pits and custom hearths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> 1100°C–1300°C Heat Certified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Zero Popping, Cracking or Smoke
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Radiant Heat Infrared Diffusion
            </span>
          </motion.div>
        </div>
      </section>

      {/* 3 Models Grid: Lava Rock, Pebbles, Artificial Stone */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Media Catalog</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Select Your Fireplace Media</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Choose from authentic volcanic basalt, modern ceramic river stones, or glowing refractory boulders tailored for UAE weather conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROCKS_MEDIA_VARIANTS.map((item) => (
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

      {/* Comparison Guide */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-800/80">
        <div className="bg-[#121212] rounded-3xl border border-neutral-800/90 p-8 sm:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Media Comparison</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Which Fire Media is Right For You?</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <h4 className="text-base font-bold text-orange-400">LAVA ROCK</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">
                <strong>Best for:</strong> Maximum heat retention, natural rustic desert look, and even gas dispersion.
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
                <div>• Temp Rating: 1100°C</div>
                <div>• Finish: Matte Charcoal / Red</div>
                <div>• Weight: Medium</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <h4 className="text-base font-bold text-orange-400">PEBBLES</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">
                <strong>Best for:</strong> Sleek modern villas, linear gas burners, and architectural monochrome styling.
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
                <div>• Temp Rating: 1200°C</div>
                <div>• Finish: Smooth Graphite / Ivory</div>
                <div>• Weight: Heavy Refractory</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <h4 className="text-base font-bold text-orange-400">ARTIFICIAL STONE</h4>
              <p className="text-xs text-neutral-300 mt-2 font-light">
                <strong>Best for:</strong> Mesmerizing incandescent red glow, sculptural boulders, and lightweight rooftop installations.
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
                <div>• Temp Rating: 1300°C</div>
                <div>• Finish: Hand-painted Refractory</div>
                <div>• Weight: 70% Lighter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Fire Media FAQ</span>
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
            Order Bulk Fireplace Media or Request Sample Packs in Dubai
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base font-light mb-8">
            We deliver 10kg, 20kg, and bulk pallet bags of certified lava rock, smooth ceramic pebbles, and custom boulder sets directly to your doorstep across the UAE.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'm%20inquiring%20about%20Fireplace%20Rocks%20and%20Pebbles%20Delivery."
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2 cursor-pointer"
            >
              Order on WhatsApp: +971 54 211 2891
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-colors cursor-pointer"
            >
              Request Sample Swatch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
