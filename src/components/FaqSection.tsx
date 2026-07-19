/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-accordions-section" className="py-24 md:py-32 bg-neutral-50/50 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
            <span className="w-6 h-[1px] bg-[#B89A7A]" />
            <span>YOU ASK, WE ANSWER</span>
            <span className="w-6 h-[1px] bg-[#B89A7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-neutral-500 max-w-md leading-relaxed mt-2">
            Everything you need to know about design specifications, municipality approvals, material quality, and construction processes.
          </p>
        </div>

        {/* FAQs list */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-accordion-item-${faq.id}`}
                key={faq.id}
                className={`rounded-2xl border transition-all duration-350 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#B89A7A]/25 shadow-md shadow-neutral-100'
                    : 'bg-white/80 border-neutral-100/80 hover:border-neutral-200'
                }`}
              >
                {/* Trigger Row */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`p-2 rounded-xl transition-colors ${
                      isOpen ? 'bg-[#B89A7A]/10 text-[#B89A7A]' : 'bg-neutral-50 text-neutral-400'
                    }`}>
                      <HelpCircle className="w-4.5 h-4.5" />
                    </span>
                    <span className={`font-serif text-sm md:text-base font-bold transition-colors ${
                      isOpen ? 'text-[#B89A7A]' : 'text-neutral-900'
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <span className={`p-1.5 rounded-full border transition-all ${
                    isOpen ? 'bg-[#B89A7A] text-white border-[#B89A7A] rotate-180' : 'bg-neutral-50 border-neutral-100 text-neutral-400'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* Animated Answer Body */}
                <div
                  id={`faq-answer-container-${faq.id}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-80 border-t border-neutral-50' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 md:p-7 bg-white text-xs md:text-sm text-neutral-600 leading-relaxed pl-16">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
