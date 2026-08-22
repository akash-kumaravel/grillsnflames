import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Sparkles, Sliders, ChevronDown, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { OUTDOOR_GAS_VARIANTS } from '../data';
import ServiceCard from './ServiceCard';

interface OutdoorGasProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function OutdoorGasFireplacePage({ onNavigate }: OutdoorGasProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const generalFaqs = [
    {
      question: "Which gas supply is required for outdoor gas fireplaces in Dubai?",
      answer: "All our outdoor gas burners are dual-certified and can be factory-jetted for either LPG (bottled/bulk propane tanks) or centralized municipal Natural Gas (NG) lines across Dubai and the UAE."
    },
    {
      question: "Can outdoor gas fireplaces be left outside year-round in Dubai's heat and dust?",
      answer: "Yes. Our burners and pans are fabricated from marine-grade 304 and 316 stainless steel with drain holes and weather-resistant sealed valve enclosures specifically built to withstand high UAE humidity, intense summer temperatures, and coastal salt air."
    },
    {
      question: "What is the difference between Home Automated, Remote, Push & Turn, and Key Valve?",
      answer: "Home Automated links directly to central smart home systems (Crestron, Lutron, KNX, Control4). Remote Operated uses a wireless handheld RF controller. Push & Turn uses an independent battery-spark rotary knob without electrical wires. Key Valve is 100% mechanical with a removable brass key for tamper-proof security."
    },
    {
      question: "Do you supply custom fire glass, lava rock, and wind glass guards?",
      answer: "Yes, we custom-fabricate tempered wind glass shields, drop-in pans, burner rings, and supply volcanic lava rocks, ceramic logs, and reflective fire glass media in various colors."
    }
  ];

  return (
    <div id="outdoor-gas-fireplace-hub" className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-28">
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
            Engineered Outdoor Gas Fireplaces in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            Explore our 5 specialized ignition and automation configurations — from seamless smart home BMS integrations to handheld remote controls and heavy-duty brass key valves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300"
          >
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Marine 316 Stainless Steel
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> LPG & Natural Gas Certified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 px-3.5 py-2 rounded-full border border-neutral-800">
              <Check className="w-3.5 h-3.5 text-orange-400" /> Custom Built for UAE Weather
            </span>
          </motion.div>
        </div>
      </section>

      {/* 5 Product Models Containers Grid (Like Service Page Containers) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Choose Your Control System</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">5 Specialized Gas Fireplace Models</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Select a model below to explore in-depth technical specifications, installation guidelines, CAD drawings, and custom fabrication options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUTDOOR_GAS_VARIANTS.map((item) => (
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-[#121212] rounded-3xl p-8 sm:p-12 border border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Technical Comparison</span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">How to Choose the Right Ignition System</h3>
            <p className="mt-3 text-neutral-400 text-sm font-light">
              Compare power requirements, controls, and ideal application scenarios across all five models.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-300">
              <thead className="border-b border-neutral-800 text-xs uppercase tracking-wider text-orange-400 bg-neutral-900/50">
                <tr>
                  <th className="py-4 px-4 font-semibold">Model</th>
                  <th className="py-4 px-4 font-semibold">Ignition Method</th>
                  <th className="py-4 px-4 font-semibold">Power Source</th>
                  <th className="py-4 px-4 font-semibold">Safety Control</th>
                  <th className="py-4 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Home Automated On & Off</td>
                  <td className="py-4 px-4">Electronic Hot Surface / Direct Spark</td>
                  <td className="py-4 px-4">220V Low-Voltage Relay</td>
                  <td className="py-4 px-4">Flame-sensing Auto Shutoff</td>
                  <td className="py-4 px-4 text-orange-300">Smart Villas, Crestron / KNX</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">High and Low Flame</td>
                  <td className="py-4 px-4">Dual-Stage Electronic Modulation</td>
                  <td className="py-4 px-4">220V / Modulating Valve</td>
                  <td className="py-4 px-4">Hi/Lo Solenoid + Safety Sensor</td>
                  <td className="py-4 px-4 text-orange-300">Variable climate & gas savings</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">On & Off Remote Operated</td>
                  <td className="py-4 px-4">Encrypted 433MHz Wireless RF</td>
                  <td className="py-4 px-4">Battery Pack (4x AA) or 220V</td>
                  <td className="py-4 px-4">Child Lock & Sleep Timer</td>
                  <td className="py-4 px-4 text-orange-300">Poolside patios, wire-free comfort</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Push & Turn Fireplace</td>
                  <td className="py-4 px-4">Continuous Piezo Spark</td>
                  <td className="py-4 px-4">1x AA Battery (No Mains)</td>
                  <td className="py-4 px-4">Mechanical Push-in Safety Lock</td>
                  <td className="py-4 px-4 text-orange-300">Garden fire tables, family homes</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Key Valve Fireplace</td>
                  <td className="py-4 px-4">Manual Match-Lit / Long Lighter</td>
                  <td className="py-4 px-4">Zero Electricity Needed</td>
                  <td className="py-4 px-4">Removable Brass Key Lock</td>
                  <td className="py-4 px-4 text-orange-300">Resorts, tamper-proof spaces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Got Questions?</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-800/40 transition-colors cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base text-white">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-orange-400 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6 pt-2 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/80 bg-neutral-900/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-orange-700 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Fireplace Design in Dubai?
            </h2>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed mb-8">
              Send us your architectural drawings, landscape plans, or space dimensions for a full technical proposal, burner sizing, and site visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%2C%20I'd%20like%20to%20consult%20with%20an%20engineer%20regarding%20an%20outdoor%20gas%20fireplace."
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-4 rounded-full bg-neutral-900 hover:bg-black text-white font-semibold text-sm shadow-xl flex items-center gap-2 cursor-pointer transition-all"
              >
                Consult via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-sm backdrop-blur-sm transition-all cursor-pointer"
              >
                Request a Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
