/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, MapPin, Sparkles, ExternalLink, Calendar, Hammer } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onInquire: () => void;
}

export default function ProjectDetail({ project, onBack, onInquire }: ProjectDetailProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Deduplicate images based on Unsplash base URL to avoid visual repetition
  const getBaseUrl = (url: string) => url.split('?')[0];
  const seen = new Set();
  const uniqueImages: string[] = [];
  [project.heroImage, ...project.gallery].forEach(img => {
    const base = getBaseUrl(img);
    if (!seen.has(base)) {
      seen.add(base);
      uniqueImages.push(img);
    }
  });

  // Animation Variants
  const textStaggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <article id={`project-detail-article-${project.id}`} className="bg-white min-h-screen font-sans pt-0 overflow-hidden">
      
      {/* Immersive Hero Cover */}
      <div className="relative h-screen w-full bg-stone-100 overflow-hidden">
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Float Control: Back Button */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="project-detail-back-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 hover:bg-white backdrop-blur-md border border-white/20 text-white hover:text-neutral-950 rounded-full text-xs font-bold tracking-widest transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO WORKS</span>
          </motion.button>
        </div>

        {/* Project Headline Overlay */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 z-20 max-w-7xl mx-auto w-full">
          <motion.div 
            variants={textStaggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl flex flex-col items-start gap-3"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#B89A7A] border border-[#B89A7A]/50 rounded-full text-[10px] font-mono tracking-widest text-white uppercase font-bold"
            >
              CASE STUDY
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none uppercase"
            >
              {project.title}
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-300 font-medium"
            >
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#B89A7A]" />
                {project.location}
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#B89A7A]" />
                {project.specs.find(s => s.label === 'Completion')?.value || 'Recent Build'}
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Hammer className="w-4 h-4 text-[#B89A7A]" />
                DESIGN & BUILD
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Container - Structured with Editorial Spacing */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Editorial Text Block - Centered Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-20 md:mb-28"
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#B89A7A]" />
              <span className="text-[#B89A7A] font-mono text-[10px] font-bold tracking-widest uppercase">
                THE DESIGN CONCEPT
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight leading-tight">
              The Architectural Narrative
            </h2>
            
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:text-[#B89A7A] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {project.fullStory}
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Gallery Section */}
        <div className="mt-16 md:mt-24 border-t border-neutral-100 pt-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            {uniqueImages.map((img, idx) => {
              // Assign bento grid layout classes based on image count and position
              let gridClasses = "relative group overflow-hidden rounded-2xl cursor-zoom-in border border-neutral-200/40 shadow-sm";
              let heightClass = "h-[300px] md:h-[450px]";
              
              if (idx === 0) {
                // Main large featured photo
                gridClasses += " md:col-span-8 md:row-span-2";
                heightClass = "h-[300px] md:h-[530px]";
              } else if (idx === 1) {
                // Secondary photo
                gridClasses += " md:col-span-4 md:row-span-1";
                heightClass = "h-[220px] md:h-[250px]";
              } else if (idx === 2) {
                // Third photo
                gridClasses += " md:col-span-4 md:row-span-1";
                heightClass = "h-[220px] md:h-[250px]";
              } else {
                // Fourth wide photo if exists
                gridClasses += " md:col-span-12";
                heightClass = "h-[250px] md:h-[380px]";
              }

              return (
                <div
                  id={`bento-gallery-item-${idx}`}
                  key={idx}
                  onClick={() => {
                    setActiveImageIdx(idx);
                    setIsLightboxOpen(true);
                  }}
                  className={`${gridClasses} ${heightClass}`}
                >
                  {/* Subtle Interactive Shading Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500 z-10" />
                  
                  {/* Zoom Transition Image */}
                  <img
                    src={img}
                    alt={`Case Study Frame ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 origin-center"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner zoom pill indicator */}
                  <div className="absolute top-4 right-4 z-20 px-2.5 py-1.5 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 shadow-md">
                    <ExternalLink className="w-3 h-3 text-[#B89A7A]" />
                    <span>ZOOM</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="gallery-lightbox-modal"
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="max-w-5xl w-full max-h-[85vh] relative" 
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={uniqueImages[activeImageIdx]}
                alt="Expanded Lightbox Frame"
                className="w-full max-h-[80vh] object-contain rounded-2xl mx-auto shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <button
                id="gallery-lightbox-close"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors font-mono text-xs tracking-widest flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>[ CLOSE WINDOW ]</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </article>
  );
}
