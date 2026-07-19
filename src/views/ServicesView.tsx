/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { PROJECTS, FAQS, SERVICES_LIST } from '../data';
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

  const handleTakeALook = () => {
    if (setCurrentPage) {
      setCurrentPage('work');
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
  if (activeService) {
    const serviceIndex = SERVICES_LIST.findIndex(s => s.id === activeService.id) + 1;
    
    return (
      <div id="service-detail-page" className="min-h-screen bg-[#FDFCF9] text-neutral-900 font-sans pb-32">
        
        {/* Sleek Floating Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 bg-[#FDFCF9]/90 backdrop-blur-md border-b border-neutral-100/80 z-50"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
            <button
              id="back-to-services-btn"
              onClick={() => {
                setActiveServiceId(null);
                window.scrollTo(0, 0);
              }}
              className="group flex items-center gap-3 text-neutral-800 hover:text-[#B89A7A] transition-colors duration-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO COLLECTION</span>
            </button>
            
            <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
              <span className="text-[#B89A7A] font-semibold">DUBAI ARCHITECTURE</span>
              <span>/</span>
              <span>PORTFOLIO 0{serviceIndex}</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Editorial Headline Area */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUpVariants} className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#B89A7A] uppercase">
                CURATED ARCHITECTURAL SOLUTIONS &bull; EDITION 0{serviceIndex}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.1] text-neutral-900 uppercase"
            >
              {activeService.title}
            </motion.h1>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="h-[2px] w-20 bg-[#B89A7A]/40 mt-2" 
            />
            
            <motion.p 
              variants={fadeInUpVariants}
              className="font-serif text-2xl md:text-3xl font-light text-neutral-500 italic max-w-4xl leading-relaxed mt-2"
            >
              {activeService.tagline || 'Atmosphere & Spatial Elevation'}
            </motion.p>
          </motion.div>
        </header>

        {/* Master Showcase Layout */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex flex-col gap-12">
          
          {/* Premium Master Photograph & Detailed Experience Prose */}
          <div className="flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] md:aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-neutral-200/20 bg-neutral-100 group"
            >
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/5 group-hover:bg-neutral-950/0 transition-colors duration-500" />
              
              {/* Discrete Floating Tag */}
              <div className="absolute bottom-6 left-6 px-4 py-2.5 bg-[#FDFCF9]/95 backdrop-blur-md rounded-lg shadow-sm border border-neutral-200/30 font-mono text-[9px] font-bold text-neutral-800 tracking-[0.2em] uppercase">
                STUDIO WORKSHOP COLLECTION
              </div>
            </motion.div>

            {/* Comprehensive Design Narrative & Architectural Prose */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 max-w-3xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-[1px] bg-[#B89A7A]" />
                <span className="text-[#B89A7A] font-mono text-[10px] tracking-[0.2em] font-bold uppercase">
                  THE VISUAL PHILOSOPHY
                </span>
              </div>
              <p className="text-lg md:text-xl text-neutral-800 font-light leading-relaxed">
                {activeService.longDescription || activeService.description}
              </p>
              <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                Every space we shape is an exercise in material restraint and balance. Built to integrate seamlessly with luxury villa facades, these custom structures combine heavy physical stone blocks, micro-precision framing, and concealed components to keep your outdoor views unobstructed and pure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Curated Aspects / Design Mastery Section */}
        {activeService.features && activeService.features.length > 0 && (
          <section className="bg-white py-24 border-t border-b border-neutral-200/40 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-3 mb-16 max-w-xl"
              >
                <span className="text-[#B89A7A] font-mono text-[10px] tracking-[0.25em] font-bold uppercase">
                  EXPERIENCE DETAILS
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-tight text-neutral-900">
                  Key Design Aspects
                </h3>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
              >
                {activeService.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUpVariants}
                    className="flex items-start gap-6"
                  >
                    <span className="font-serif text-3xl font-extralight text-[#B89A7A]/70 leading-none">
                      0{i + 1}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase">SIGNATURE ELEMENT</span>
                      <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Immersive Photo Grid */}
        {activeService.gallery && activeService.gallery.length > 0 && (
          <section className="bg-[#FDFCF9] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-1.5 mb-12"
              >
                <span className="text-[#B89A7A] text-[10px] font-bold tracking-[0.25em] font-mono uppercase">
                  VISUAL INSPIRATION
                </span>
                <h3 className="font-serif text-3xl font-light text-neutral-900 tracking-tight uppercase">
                  Form, Line &amp; Finish
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* 1st Image: Wide */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/20 group"
                >
                  <img 
                    src={activeService.gallery[0] || activeService.image} 
                    alt="Atmospheric integration"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-[1200ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/5 transition-colors duration-300" />
                </motion.div>

                {/* 2nd Image: High */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="md:col-span-4 relative aspect-[3/4] md:aspect-auto rounded-2xl overflow-hidden shadow-sm border border-neutral-200/20 group"
                >
                  <img 
                    src={activeService.gallery[1] || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'} 
                    alt="Material texture and light"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-[1200ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/5 transition-colors duration-300" />
                </motion.div>

              </div>
            </div>
          </section>
        )}

        {/* Call to Action banner */}
        <section className="bg-neutral-950 text-white py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Background pattern" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
            <span className="text-[#B89A7A] text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase font-mono">
              LET'S DEFINE YOUR SPACE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight max-w-3xl leading-tight">
              Bring Michelin standard <span className="italic font-normal text-[#B89A7A]">fire &amp; cuisine</span> to your garden facade
            </h2>
            <div className="h-[1px] w-12 bg-[#B89A7A]/30 my-2" />
            <p className="text-xs md:text-sm text-neutral-400 font-light max-w-xl leading-relaxed">
              We collaborate closely with elite residential clients, master masonry contractors, and landscape architects across Emirates Hills, Palm Jumeirah, and Dubai Hills to install high-performance outdoor monuments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <button
                id="service-cta-inquire-btn"
                onClick={handleGetStarted}
                className="px-8 py-3.5 bg-[#B89A7A] hover:bg-[#a38668] text-white text-xs font-semibold tracking-wider rounded-full transition-all duration-300 shadow-lg cursor-pointer"
              >
                Inquire Studio Meeting
              </button>
              <button
                id="service-cta-portfolio-btn"
                onClick={() => {
                  setActiveServiceId(null);
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-3.5 border border-white/20 hover:border-white text-white text-xs font-semibold tracking-wider rounded-full transition-all duration-300 bg-transparent cursor-pointer"
              >
                Return to Collection
              </button>
            </div>
          </div>
        </section>

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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
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

      {/* 3. Standards and Approvals Section */}
      <section id="standards-approvals-section" className="bg-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
                <span className="w-6 h-[1px] bg-[#B89A7A]" />
                <span>ENGINEERED EXCELLENCE</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-tight leading-tight uppercase">
                Turnkey Technical Execution
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                Our projects are not only beautiful but engineered to standard. We manage the entire integration process from gas pipeline extensions to structural municipal permits.
              </p>
              
              <hr className="border-neutral-100 my-2" />
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[13px] md:text-sm text-neutral-600 font-light py-1.5">
                  <span className="w-4 h-4 border border-neutral-400 rounded-sm flex items-center justify-center flex-shrink-0 bg-white">
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">✓</span>
                  </span>
                  <span>Master-welded Marine Grade 316 framing</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] md:text-sm text-neutral-600 font-light py-1.5">
                  <span className="w-4 h-4 border border-neutral-400 rounded-sm flex items-center justify-center flex-shrink-0 bg-white">
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">✓</span>
                  </span>
                  <span>Dubai Municipality & Civil Defence approved engineering standards</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] md:text-sm text-neutral-600 font-light py-1.5">
                  <span className="w-4 h-4 border border-neutral-400 rounded-sm flex items-center justify-center flex-shrink-0 bg-white">
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">✓</span>
                  </span>
                  <span>We handle Emaar, Nakheel, and Developer permits directly</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] md:text-sm text-neutral-600 font-light py-1.5">
                  <span className="w-4 h-4 border border-neutral-400 rounded-sm flex items-center justify-center flex-shrink-0 bg-white">
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">✓</span>
                  </span>
                  <span>Premium climate-resilient stone masonry</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] md:text-sm text-neutral-600 font-light py-1.5">
                  <span className="w-4 h-4 border border-neutral-400 rounded-sm flex items-center justify-center flex-shrink-0 bg-white">
                    <span className="text-[10px] font-bold text-neutral-800 font-mono">✓</span>
                  </span>
                  <span>Safe electronic auto-stop ignition systems</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury outdoor entertaining area and pergola"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Recently Completed Projects Section */}
      <section id="recently-completed-projects-section" className="bg-[#FAF9F6] py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          
          <div className="text-center flex flex-col gap-6 mb-16 items-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>SHOWCASE</span>
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 tracking-tight uppercase">
              Selected Work
            </h2>
          </div>

          {/* Grid of 6 Projects */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            {PROJECTS.slice(0, 6).map((project) => (
              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.05)" }}
                key={project.id}
                id={`recently-completed-project-${project.id}`}
                onClick={() => onProjectSelect?.(project.id)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-neutral-100/80 shadow-sm transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-neutral-950/0 transition-colors duration-300" />
                  
                  {/* Hover Overlay Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-white">
                    <span className="font-serif text-xs font-semibold tracking-wider">{project.title}</span>
                    <span className="text-[10px] font-light text-neutral-200">{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered Take A Look Link */}
          <button
            id="projects-take-a-look-btn"
            onClick={handleTakeALook}
            className="group inline-flex items-center gap-2 mt-12 text-sm text-neutral-800 font-medium hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full border border-neutral-400 group-hover:bg-neutral-950 transition-colors flex-shrink-0" />
            <span className="border-b border-neutral-200 group-hover:border-neutral-800 pb-0.5 tracking-wider font-light">
              View All Projects
            </span>
          </button>

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
