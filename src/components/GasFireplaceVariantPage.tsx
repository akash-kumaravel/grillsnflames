import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ChevronDown, Flame, Shield, Sparkles, Sliders } from 'lucide-react';
import { ActiveSection, GasFireplaceVariant } from '../types';
import { OUTDOOR_GAS_VARIANTS } from '../data';

interface GasFireplaceVariantPageProps {
  variantId: string;
  onNavigate: (section: ActiveSection) => void;
}

export default function GasFireplaceVariantPage({ variantId, onNavigate }: GasFireplaceVariantPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const variant = OUTDOOR_GAS_VARIANTS.find(v => v.id === variantId) || OUTDOOR_GAS_VARIANTS[0];
  const otherVariants = OUTDOOR_GAS_VARIANTS.filter(v => v.id !== variant.id);

  return (
    <div id={`variant-${variant.id}`} className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500 selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_35%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6"
              >
                {variant.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8"
              >
                {variant.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a
                  id={`wa-cta-variant-${variant.id}`}
                  href={`https://wa.me/971542112891?text=${encodeURIComponent(variant.waMessage)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-fit sm:min-w-[160px] justify-center px-6 py-3.5 rounded-2xl bg-[#1b1b1b] hover:bg-emerald-950/60 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2.5 cursor-pointer text-sm font-semibold text-neutral-100 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0">
                    <defs>
                      <linearGradient id={`wa-btn-grad-${variant.id}`} x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#57d163" />
                        <stop offset="1" stopColor="#23b33a" />
                      </linearGradient>
                    </defs>
                    <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
                    <path fill={`url(#wa-btn-grad-${variant.id})`} d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
                    <path fill="#fff" fillRule="evenodd" d="M68.016 54.843c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013c.918 1.228 12.718 20.381 31.405 27.75 15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74c1.531-4.293 1.531-7.971 1.072-8.74-.459-.769-1.685-1.226-3.525-2.146s-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                  </svg>
                  WhatsApp
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={variant.image}
                  alt={`${variant.title} Dubai outdoor installation — Flames Fireplace`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Custom sizes from 60cm to 300cm
                </span>
                <span className="bg-orange-500/90 text-white px-3 py-1.5 rounded-lg font-medium">
                  UAE Certified
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications & Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-8">
          <div className="bg-[#121212] rounded-3xl p-8 sm:p-12 border border-neutral-800">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">{variant.badge || 'Engineered Architecture'}</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{variant.shortTitle || variant.title}: System Profile & Performance</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed text-base sm:text-lg font-light max-w-4xl">
              {variant.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          {variant.features && variant.features.length > 0 && (
            <div className="bg-[#121212] rounded-3xl p-8 sm:p-10 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Key Engineered Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {variant.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm sm:text-base text-neutral-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-[#0f0f0f] py-20 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Advantages</span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Why Choose {variant.shortTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {variant.benefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#141414] p-6 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-3.5">
                  <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <p className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {variant.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Common Queries</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {variant.faqs.map((faq, idx) => (
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
      )}

      {/* Other Gas Fireplace Models */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-semibold">Explore Alternatives</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Other Gas Fireplace Configurations</h2>
          </div>
          <button
            onClick={() => onNavigate('outdoor-gas-fireplace')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 cursor-pointer"
          >
            View All 5 Models
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherVariants.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onNavigate(item.id as ActiveSection);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-[#121212] rounded-2xl border border-neutral-800 overflow-hidden hover:border-orange-500/50 transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-orange-400 font-semibold">{item.badge}</span>
                  <h4 className="text-base font-semibold text-white mt-1 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-orange-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-orange-700 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Bring the Magic of Real Flame to Your Outdoor Oasis
            </h2>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed mb-8">
              From automated villa masterplans to bespoke resort fire bowls, Flames Fireplace delivers turnkey design, gas supply coordination, and professional installation across Dubai & UAE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/971542112891?text=${encodeURIComponent(`Hi Flames Fireplace, I'd like to book a consultation for ${variant.title}.`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-4 rounded-full bg-neutral-900 hover:bg-black text-white font-semibold text-sm shadow-xl flex items-center gap-2 cursor-pointer transition-all"
              >
                Inquire on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-sm backdrop-blur-sm transition-all cursor-pointer"
              >
                Contact Our Engineers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
