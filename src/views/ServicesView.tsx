/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { FAQS, SERVICES_LIST } from '../data';
import { 
  Plus, 
  Minus,
  Flame,
  ChefHat,
  Sparkles,
  Tent,
  Layers,
  Check,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  Compass
} from 'lucide-react';

interface ServicesViewProps {
  activeServiceId: string | null;
  setActiveServiceId: (id: string | null) => void;
  setCurrentPage?: (page: PageId) => void;
  onProjectSelect?: (projectId: string) => void;
}

export default function ServicesView({
  activeServiceId,
  setActiveServiceId,
  setCurrentPage,
  onProjectSelect
}: ServicesViewProps) {
  // Navigation & Detail states
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  const handleGetStarted = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  // Helper function to render a representative icon for each service type
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'pergolas':
        return <Tent className="w-5 h-5 text-[#B89A7A]" />;
      case 'outdoor-fire-pits':
        return <Flame className="w-5 h-5 text-[#B89A7A]" />;
      case 'indoor-fire-pits':
        return <Sparkles className="w-5 h-5 text-[#B89A7A]" />;
      case 'fire-bowls':
        return <Layers className="w-5 h-5 text-[#B89A7A]" />;
      case 'bbqs':
        return <Flame className="w-5 h-5 text-[#B89A7A]" />;
      case 'outdoor-kitchens':
        return <ChefHat className="w-5 h-5 text-[#B89A7A]" />;
      default:
        return <Flame className="w-5 h-5 text-[#B89A7A]" />;
    }
  };

  // Find active service if set
  const activeService = SERVICES_LIST.find(s => s.id === activeServiceId);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.85, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  // RENDERING DEDICATED SERVICE DETAIL PAGE
  // RENDERING DEDICATED CLEAN SERVICE DETAIL PAGE (WHITE BACKGROUND & LEFT-ALIGNED TEXT)
  if (activeService) {
    const serviceIndex = SERVICES_LIST.findIndex(s => s.id === activeService.id) + 1;
    
    return (
      <div id="service-detail-page" className="min-h-screen bg-white text-neutral-900 font-sans pb-32">
        
        {/* 1. Header Section */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-12 border-b border-neutral-100">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 text-left items-start"
          >
            {/* Title */}
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.05] text-neutral-900 uppercase text-left"
            >
              {activeService.title}
            </motion.h1>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="h-[2px] w-24 bg-[#B89A7A] mt-1" 
            />
            
            {/* Tagline */}
            <motion.p 
              variants={fadeInUpVariants}
              className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#B89A7A] italic max-w-4xl leading-relaxed text-left"
            >
              {activeService.tagline || 'Atmosphere & Spatial Elevation'}
            </motion.p>

            {/* Highlights Badge Strip */}
            <motion.div variants={fadeInUpVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-700 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89A7A]" />
                <span>Dubai Municipality Approved</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-700 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B89A7A]" />
                <span>316 Marine Grade Steel</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-700 uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#B89A7A]" />
                <span>Custom 3D Visualization</span>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* 2. Full-Width Master Showcase Image (No Technical Spec Box) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/60 group bg-stone-100"
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-neutral-200/50 font-mono text-[9px] font-bold text-neutral-900 tracking-[0.2em] uppercase text-left">
                MASTER SPECIMEN
              </div>
              <div className="text-[10px] font-mono text-white uppercase tracking-widest font-semibold drop-shadow-md">
                EMIRATES HILLS &bull; VILLA INSTALLATION
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. Architectural Philosophy & Narrative */}
        <section className="bg-[#FAF9F6] py-16 md:py-24 border-t border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8 text-left items-start">
            <div className="inline-flex items-center gap-3 text-xs font-mono font-bold text-[#B89A7A] tracking-[0.3em] uppercase">
              <span className="w-8 h-[1px] bg-[#B89A7A]" />
              <span>THE ARCHITECTURAL PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight uppercase text-left max-w-4xl">
              "Crafted to endure Dubai's climate while commanding the visual aesthetic of the villa facade."
            </h2>

            <p className="text-base md:text-lg text-neutral-700 font-light leading-relaxed max-w-3xl text-left">
              {activeService.longDescription || activeService.description}
            </p>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-3xl text-left">
              Every structure we manufacture is an exercise in material restraint and balance. We combine heavy physical natural stone, micro-precision 316 marine-grade steel framing, and concealed gas utility channels to preserve pure unobstructed views.
            </p>

            {/* Bullet Highlights (if present) */}
            {activeService.bullets && activeService.bullets.length > 0 && (
              <div className="mt-4 flex flex-col gap-3 pt-6 border-t border-neutral-200/80 w-full max-w-3xl">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold text-left">
                  Key Performance Attributes
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-light leading-relaxed text-left">
                      <Check className="w-4 h-4 text-[#B89A7A] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. Signature Elements Bento Grid */}
        {activeService.features && activeService.features.length > 0 && (
          <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 mb-12 text-left items-start max-w-xl"
            >
              <span className="text-[#B89A7A] font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
                ENGINEERING EXCELLENCE
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-tight text-neutral-900 text-left">
                Signature Features
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activeService.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#FAF9F6] p-8 rounded-2xl border border-neutral-200/60 hover:border-[#B89A7A]/50 transition-all duration-300 group flex items-start gap-6 text-left"
                >
                  <span className="font-serif text-4xl font-extralight text-[#B89A7A] group-hover:scale-110 transition-transform">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2 text-left">
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#B89A7A] uppercase text-left">
                      SIGNATURE CAPABILITY
                    </span>
                    <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed text-left">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Immersive Photo Gallery Mosaic */}
        {activeService.gallery && activeService.gallery.length > 0 && (
          <section className="bg-[#FAF9F6] py-20 border-t border-b border-neutral-200/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 mb-12 text-left items-start"
              >
                <span className="text-[#B89A7A] text-[10px] font-bold tracking-[0.3em] font-mono uppercase">
                  VISUAL ARCHIVE
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-tight uppercase text-left">
                  Form, Line &amp; Finish Showcase
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {activeService.gallery.map((imgUrl, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className={`${idx === 0 ? 'md:col-span-8 aspect-[16/10]' : 'md:col-span-4 aspect-[4/3] md:aspect-auto'} relative rounded-2xl overflow-hidden border border-neutral-200/60 group bg-stone-100`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Gallery specimen ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="font-mono text-[10px] text-white tracking-widest uppercase text-left">
                        SPECIMEN 0{idx + 1} &bull; STUDIO COLLECTION
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    );
  }

  // STANDARD SERVICES INDEX / LISTING PAGE
  return (
    <div id="services-index-page" className="pt-0 min-h-screen bg-white font-sans overflow-hidden">
      
      {/* 1. Curated Header Banner */}
      <div className="relative h-[80vh] lg:h-[90vh] w-full overflow-hidden bg-stone-100">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/service banner.png"
          alt="Luxury modern outdoor pavilion and deck"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Text Protection Overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:pb-24 md:px-12 max-w-7xl mx-auto z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            <motion.span 
              variants={fadeInUpVariants}
              className="text-[#B89A7A] font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold"
            >
              GRILLS &amp; FLAMES &bull; OUTDOOR &amp; INDOOR LUXURY
            </motion.span>
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight leading-tight max-w-2xl"
            >
              Premium Shade &amp; <br />Fire Features
            </motion.h1>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xs md:text-sm text-neutral-300 max-w-lg leading-relaxed font-light"
            >
              Elevating Dubai's finest homes with custom-engineered cooking spaces, pergolas, and luxury fireplaces tailored for exquisite modern living.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 2. Specialties Grid Section */}
      <section id="luxury-specialties-section" className="bg-[#FAF9F6] py-20 md:py-28 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mb-16 max-w-3xl text-left items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight uppercase">
              PREMIUM LIVING <br />SPECIFICATIONS
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed font-light mt-2">
              Every detail is pre-fabricated to absolute millimeter precision in our Dubai workshop, ensuring unmatched durability, pristine joints, and seamless on-site assembly.
            </p>
          </motion.div>

          {/* 3x2 Grid for the Six Services */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {SERVICES_LIST.map((service, index) => (
              <motion.div 
                variants={serviceCardVariants}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 30px 60px rgba(184,154,122,0.15)",
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => {
                  setActiveServiceId(service.id);
                  window.scrollTo(0, 0);
                }}
                className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.04)] bg-neutral-900 border border-neutral-200/10 hover:border-[#B89A7A]/30 flex flex-col justify-end p-8"
              >
                {/* Full-bleed background image with modern luxury cinematic zoom */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out scale-100 group-hover:scale-108 opacity-75 group-hover:opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  {/* Masterful double-layer gradient: dark vignette at bottom, subtle shade at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20" />
                </div>

                {/* Elegant subtle top metadata */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-white/10 backdrop-blur-md text-[#B89A7A] rounded-lg flex items-center justify-center border border-white/5">
                      {getServiceIcon(service.id)}
                    </span>
                    <span className="text-[9px] text-neutral-300 tracking-[0.25em] font-semibold uppercase font-mono">
                      DUBAI LUXURY
                    </span>
                  </div>
                  <span className="font-mono text-sm font-light text-white/50 tracking-widest">
                    0{index + 1} <span className="text-[#B89A7A]/40">/</span> 06
                  </span>
                </div>

                {/* Elegant Typography and Hover Reveals */}
                <div className="relative z-10 w-full flex flex-col gap-4">
                  <div>
                    {/* Golden accent bar that expands on hover */}
                    <div className="w-8 h-[2px] bg-[#B89A7A] mb-3.5 transition-all duration-500 ease-out group-hover:w-16" />
                    
                    <h3 className="font-serif text-2xl font-light text-white tracking-wide group-hover:text-[#B89A7A] transition-colors duration-300 uppercase leading-none">
                      {service.title}
                    </h3>
                  </div>

                  {/* Elegant interactive banner that rises on hover */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] font-bold tracking-[0.2em] text-neutral-300 font-mono uppercase group-hover:text-white transition-colors duration-300">
                    <span>Inquire Custom Design</span>
                    <span className="text-sm text-[#B89A7A] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>



        </div>
      </section>

      {/* 5. FAQ Section */}
      <section id="faq-section" className="bg-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
                <span className="w-6 h-[1px] bg-[#B89A7A]" />
                <span>COMMON QUERIES</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-tight leading-tight uppercase">
                You Ask, We <br />Answer
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-light max-w-md">
                Starting a custom fire, pergola, or outdoor kitchen project can bring up questions about approvals, gas utilities, and materials. Here are answers to some common queries to help guide you. Feel free to reach out with any others!
              </p>
            </motion.div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 flex flex-col border-t border-neutral-200/80">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={faq.id}
                    id={`services-faq-item-${faq.id}`}
                    className="border-b border-neutral-200/80 py-4"
                  >
                    {/* Trigger Row */}
                    <button
                      id={`services-faq-trigger-${faq.id}`}
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left py-2 flex items-center justify-between gap-4 font-light text-stone-800 hover:text-stone-950 focus:outline-none cursor-pointer"
                    >
                      <span className="font-serif text-sm md:text-base font-normal tracking-tight text-neutral-900">
                        {faq.question}
                      </span>
                      <span className="text-neutral-400 flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4 text-[#B89A7A]" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {/* Animated Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light mt-3 pb-2">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Got a Project in Mind? Section */}
      <section id="got-project-in-mind-section" className="bg-[#FAF9F6] py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Title & Action Button row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-none uppercase">
              Got a <span className="font-extrabold font-sans text-[#B89A7A]">PROJECT</span> <br />IN MIND?
            </h2>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="cta-lets-talk-btn"
              onClick={handleGetStarted}
              className="rounded-full border border-neutral-400 bg-white hover:bg-neutral-50 px-8 py-3.5 text-xs font-semibold tracking-wider text-neutral-800 transition-colors duration-300 shadow-sm cursor-pointer whitespace-nowrap"
            >
              Let's Talk
            </motion.button>
          </div>

        </div>
      </section>

    </div>
  );
}
