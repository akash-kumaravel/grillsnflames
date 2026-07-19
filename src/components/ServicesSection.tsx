/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SERVICES_LIST } from '../data';
import { Flame, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onDiscoverServicesClick: () => void;
}

export default function ServicesSection({ onDiscoverServicesClick }: ServicesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services-summary-section" className="py-24 md:py-32 bg-white font-sans overflow-hidden border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Editorial Concept */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>WHAT WE EXCEL AT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              Crafting Majestic Al Fresco Gastronomy & Lounges.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              We engineer custom, climate-resilient outdoor cooking stations, floating fire bowls, and all-weather dining pavilions. Every layout is structured around your lifestyle, utilizing high-grade architectural elements of volcanic basalt, absolute black granite, and treated timber.
            </p>
            <div className="pt-4">
              <button
                id="services-section-discover-cta"
                onClick={onDiscoverServicesClick}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-neutral-900 hover:bg-[#B89A7A] text-white rounded-full text-xs font-bold tracking-widest transition-all duration-300"
              >
                <span>VIEW SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Accordion Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES_LIST.map((service, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  id={`service-block-${service.id}`}
                  key={service.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                    isOpen
                      ? 'bg-neutral-50/80 border-[#B89A7A]/30 shadow-md shadow-neutral-100'
                      : 'bg-white border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 md:gap-5">
                      {/* Interactive Index indicator */}
                      <span className={`font-mono text-xs font-bold tracking-widest mt-1.5 ${
                        isOpen ? 'text-[#B89A7A]' : 'text-neutral-400'
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className={`font-serif text-lg md:text-xl font-bold transition-colors ${
                          isOpen ? 'text-[#B89A7A]' : 'text-neutral-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-xs md:text-sm text-neutral-500 mt-2 leading-relaxed transition-all duration-300 ${
                          isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <span className={`p-1.5 rounded-lg border transition-all ${
                      isOpen ? 'bg-[#B89A7A]/10 border-[#B89A7A]/20 text-[#B89A7A] rotate-45' : 'bg-neutral-50 border-neutral-100 text-neutral-400'
                    }`}>
                      <Flame className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bullet Spec Grid inside open item */}
                  {isOpen && (
                    <div className="mt-6 pl-9 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-neutral-100 pt-6 animate-fadeIn">
                      {service.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#B89A7A] flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
