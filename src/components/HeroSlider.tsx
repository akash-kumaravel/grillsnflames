/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play, Compass } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  category: string;
  title: string;
  tagline: string;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    category: 'ELEGANT SHADE SOLUTIONS',
    title: 'ELEGANT PERGOLAS',
    tagline: 'Stylish shade solutions for outdoor comfort.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80',
    category: 'PREMIUM OUTDOOR GRILLING',
    title: 'CUSTOM BBQ STATIONS',
    tagline: 'Grill in style with premium outdoor BBQs.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1920&q=80',
    category: 'AMBIENT LUXURY RETREATS',
    title: 'OUTDOOR FIRE PITS',
    tagline: 'Cozy up with beautiful backyard fire pits.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80',
    category: 'INTERIOR ELEGANCE & COMFORT',
    title: 'INDOOR FIRE PITS',
    tagline: 'Add warmth and elegance indoors.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    category: 'AL FRESCO ENTERTAINING',
    title: 'OUTDOOR KITCHENS',
    tagline: 'Cook and entertain in open-air luxury.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80',
    category: 'ARTISTIC DESIGN ELEMENTS',
    title: 'DECORATIVE FIRE BOWLS',
    tagline: 'Glow with stylish, artistic fire features.'
  }
];

interface HeroSliderProps {
  onLearnMoreClick: () => void;
  onContactClick: () => void;
}

export default function HeroSlider({ onLearnMoreClick, onContactClick }: HeroSliderProps) {
  const [{ currentIdx, direction }, setSlideState] = useState({ currentIdx: 0, direction: 1 });

  // Autoplay Timer (resets whenever currentIdx changes)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideState((prev) => {
        if (prev.currentIdx < HERO_SLIDES.length - 1) {
          return { currentIdx: prev.currentIdx + 1, direction: 1 };
        }
        return prev; // Stay on the last slide, do not loop
      });
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  // Handle wheel and swipe gestures on scroll
  useEffect(() => {
    let lastScrollTime = 0;
    const cooldown = 1100; // ms cooldown to prevent hyper-scroll skipping

    const handleWheel = (e: WheelEvent) => {
      // Prevent default to disable any native bounce/scroll issues
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      if (e.deltaY > 10) {
        // Scroll Down -> Next Slide
        setSlideState((prev) => {
          if (prev.currentIdx < HERO_SLIDES.length - 1) {
            lastScrollTime = now;
            return { currentIdx: prev.currentIdx + 1, direction: 1 };
          }
          return prev;
        });
      } else if (e.deltaY < -10) {
        // Scroll Up -> Previous Slide
        setSlideState((prev) => {
          if (prev.currentIdx > 0) {
            lastScrollTime = now;
            return { currentIdx: prev.currentIdx - 1, direction: -1 };
          }
          return prev;
        });
      }
    };

    // Touch events for mobile swiping
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const now = Date.now();
      if (now - lastScrollTime < cooldown) return;

      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
          // Swipe up -> next slide
          setSlideState((prev) => {
            if (prev.currentIdx < HERO_SLIDES.length - 1) {
              lastScrollTime = now;
              return { currentIdx: prev.currentIdx + 1, direction: 1 };
            }
            return prev;
          });
        } else {
          // Swipe down -> previous slide
          setSlideState((prev) => {
            if (prev.currentIdx > 0) {
              lastScrollTime = now;
              return { currentIdx: prev.currentIdx - 1, direction: -1 };
            }
            return prev;
          });
        }
      }
    };

    const container = document.getElementById('hero-slider-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const handlePrev = () => {
    setSlideState((prev) => {
      if (prev.currentIdx > 0) {
        return { currentIdx: prev.currentIdx - 1, direction: -1 };
      }
      return prev;
    });
  };

  const handleNext = () => {
    setSlideState((prev) => {
      if (prev.currentIdx < HERO_SLIDES.length - 1) {
        return { currentIdx: prev.currentIdx + 1, direction: 1 };
      }
      return prev;
    });
  };

  const handleDotClick = (idx: number) => {
    setSlideState((prev) => {
      if (idx === prev.currentIdx) return prev;
      return { currentIdx: idx, direction: idx > prev.currentIdx ? 1 : -1 };
    });
  };

  // Framer Motion Variants for Directional Sliding
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 1,
      zIndex: 10
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? '-100%' : '100%',
      opacity: 1
    })
  };

  // Image Parallax Variants (moves slower in the opposite direction of the slide to create the depth/parallax effect)
  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '-25%' : '25%',
      scale: 1.2
    }),
    center: {
      x: '0%',
      scale: 1.1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '25%' : '-25%',
      scale: 1.2,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const textElementVariants = {
    hidden: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <div
      id="hero-slider-container"
      className="relative h-screen w-full overflow-hidden bg-neutral-950 font-sans select-none"
    >
      {/* Background Slides with AnimatePresence */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            id={`hero-slide-${HERO_SLIDES[currentIdx].id}`}
            key={HERO_SLIDES[currentIdx].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              variants={imageVariants}
              src={HERO_SLIDES[currentIdx].image}
              alt={HERO_SLIDES[currentIdx].title}
              className="w-full h-full object-cover select-none pointer-events-none origin-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Content with Staggered Framer Motion Animations */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIdx}
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
              className="max-w-3xl flex flex-col items-start gap-4 md:gap-6"
            >
              {/* Badge Indicator */}
              <motion.div
                custom={direction}
                variants={textElementVariants}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#B89A7A] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase"
              >
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                <span>{HERO_SLIDES[currentIdx].category}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                custom={direction}
                variants={textElementVariants}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              >
                {HERO_SLIDES[currentIdx].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                custom={direction}
                variants={textElementVariants}
                className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-xl font-light"
              >
                {HERO_SLIDES[currentIdx].tagline}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={direction}
                variants={textElementVariants}
                className="flex flex-wrap items-center gap-4 mt-4"
              >
                <button
                  id="hero-cta-explore"
                  onClick={onLearnMoreClick}
                  className="px-8 py-3.5 bg-[#B89A7A] hover:bg-[#a38566] text-white rounded-full text-xs font-bold tracking-widest transition-all duration-300 transform hover:translate-y-[-2px] flex items-center gap-2 shadow-lg shadow-[#B89A7A]/25 cursor-pointer"
                >
                  <span>EXPLORE PROJECTS</span>
                  <Play className="w-3.5 h-3.5 fill-current" />
                </button>
                <button
                  id="hero-cta-contact"
                  onClick={onContactClick}
                  className="px-8 py-3.5 border border-white/30 hover:border-white text-white hover:bg-white/10 rounded-full text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer"
                >
                  BOOK CONSULTATION
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Arrow Controls */}
      <div className="absolute bottom-12 right-4 md:right-12 z-30 flex items-center gap-2 md:gap-3">
        <button
          id="hero-btn-prev"
          onClick={handlePrev}
          className="p-2 md:p-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full transition-all duration-200 focus:outline-none backdrop-blur-sm cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          id="hero-btn-next"
          onClick={handleNext}
          className="p-2 md:p-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full transition-all duration-200 focus:outline-none backdrop-blur-sm cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Sliding indicators/ticks */}
      <div className="absolute bottom-12 left-4 md:left-12 z-30 flex items-center gap-2 md:gap-4 max-w-[65%] sm:max-w-none flex-wrap">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              id={`hero-indicator-dot-${slide.id}`}
              key={slide.id}
              onClick={() => handleDotClick(idx)}
              className="flex items-center gap-1 sm:gap-2 group focus:outline-none cursor-pointer"
            >
              <span className={`text-[10px] sm:text-[11px] font-mono tracking-wider transition-colors ${
                isActive ? 'text-white font-semibold' : 'text-neutral-500 hover:text-neutral-300'
              }`}>
                0{slide.id}
              </span>
              <span className={`h-[2px] transition-all duration-300 rounded-full ${
                isActive ? 'w-8 sm:w-12 bg-[#B89A7A]' : 'w-2 sm:w-4 bg-neutral-700 group-hover:bg-neutral-500'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1.5 animate-pulse">
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[18px] h-[28px] border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#B89A7A] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
