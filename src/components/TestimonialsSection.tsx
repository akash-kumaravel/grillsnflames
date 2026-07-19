/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < floorRating) {
        stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-neutral-200" />);
      }
    }
    return stars;
  };

  const activeReview = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials-carousel-section" className="py-24 md:py-32 bg-white font-sans overflow-hidden border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Google rating card */}
          <div className="lg:col-span-4 bg-neutral-50 border border-neutral-100 p-8 rounded-3xl flex flex-col items-center text-center">
            {/* Mock Google Logo */}
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-bold tracking-tight text-blue-600">G</span>
              <span className="text-2xl font-bold tracking-tight text-red-500">o</span>
              <span className="text-2xl font-bold tracking-tight text-yellow-500">o</span>
              <span className="text-2xl font-bold tracking-tight text-blue-500">g</span>
              <span className="text-2xl font-bold tracking-tight text-green-500">l</span>
              <span className="text-2xl font-bold tracking-tight text-red-500">e</span>
              <span className="text-xs font-bold tracking-widest text-neutral-400 ml-2 uppercase">REVIEWS</span>
            </div>

            {/* Score Display */}
            <div className="text-5xl font-extrabold text-neutral-900 tracking-tight mb-2">4.9</div>
            
            {/* Stars Row */}
            <div className="flex items-center gap-1.5 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="text-xs font-semibold text-neutral-500 tracking-wider mb-6 uppercase">
              Based on 148 Verified Client Submissions
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 rounded-full text-[10px] font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              100% Satisfaction Record
            </span>
          </div>

          {/* Right Column: Sliding Reviews Carousel */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>CLIENT SATISFACTION</span>
            </div>
            
            <div className="relative min-h-[220px] md:min-h-[180px] bg-neutral-50/50 rounded-3xl p-8 md:p-10 border border-neutral-100 flex flex-col justify-between">
              
              {/* Giant quotation mark in background */}
              <div className="absolute top-6 right-6 text-neutral-200 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180 opacity-40" />
              </div>

              {/* Review Text */}
              <div className="animate-fadeIn">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(activeReview.rating)}
                </div>
                <p className="text-neutral-700 italic text-sm md:text-base leading-relaxed">
                  "{activeReview.text}"
                </p>
              </div>

              {/* Client metadata footer inside slider */}
              <div className="flex items-center justify-between border-t border-neutral-100 pt-6 mt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.author}
                    className="w-11 h-11 rounded-full object-cover border border-white/80 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-neutral-900 text-xs tracking-wider uppercase">
                      {activeReview.author}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-semibold tracking-wider">
                      {activeReview.role} &bull; {activeReview.date}
                    </div>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    id="testimonial-btn-prev"
                    onClick={handlePrev}
                    className="p-2 border border-neutral-200 hover:border-[#B89A7A] hover:bg-[#B89A7A]/10 hover:text-[#B89A7A] rounded-full text-neutral-400 transition-all focus:outline-none"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    id="testimonial-btn-next"
                    onClick={handleNext}
                    className="p-2 border border-neutral-200 hover:border-[#B89A7A] hover:bg-[#B89A7A]/10 hover:text-[#B89A7A] rounded-full text-neutral-400 transition-all focus:outline-none"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
