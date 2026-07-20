/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { MapPin, Grid, ArrowUpRight } from 'lucide-react';

interface ProjectsGridProps {
  onProjectSelect: (id: string) => void;
  limit?: number;
}

export default function ProjectsGrid({ onProjectSelect, limit }: ProjectsGridProps) {
  const [filter, setFilter] = useState<'all' | 'kitchen' | 'fire' | 'pavilion'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const categories = [
    { label: 'ALL WORKS', id: 'all' as const },
    { label: 'OUTDOOR KITCHENS', id: 'kitchen' as const },
    { label: 'FIRE FEATURES', id: 'fire' as const },
    { label: 'PAVILIONS & PERGOLAS', id: 'pavilion' as const }
  ];

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.4, ease: 'easeIn' } 
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'kitchen':
        return 'OUTDOOR KITCHEN';
      case 'fire':
        return 'FIRE FEATURE';
      case 'pavilion':
        return 'PERGOLA & PAVILION';
      default:
        return category.toUpperCase();
    }
  };

  return (
    <section id="portfolio-grid-section" className="py-24 md:py-32 bg-neutral-50/50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header - Consistent Layout Container */}
        <div className="flex flex-col gap-6 mb-16 max-w-3xl text-left items-start">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
            <span className="w-6 h-[1px] bg-[#B89A7A]" />
            <span>OUR WORKS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight uppercase">
            OUR WORKS
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-light mt-2 max-w-2xl">
            Explore our portfolio of custom luxury outdoor kitchens, bioclimatic pergolas, and architectural fire features built to Dubai's highest engineering standards.
          </p>
        </div>

        {/* Filter Navigation Tabs - Minimalist Design */}
        <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 mb-16 border-b border-neutral-200 pb-4">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                id={`filter-tab-${cat.id}`}
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className="relative px-5 py-2.5 text-[10px] md:text-xs font-semibold tracking-[0.2em] tracking-[0.2em] transition-colors focus:outline-none cursor-pointer uppercase"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B89A7A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`transition-colors duration-300 ${isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-neutral-950'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container with AnimatePresence layout */}
        <AnimatePresence mode="popLayout">
          {displayedProjects.length > 0 ? (
            <motion.div 
              layout
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {displayedProjects.map((project: Project, idx: number) => {
                const projectIndex = String(idx + 1).padStart(2, '0');

                return (
                  <motion.div
                    layout
                    id={`project-card-${project.id}`}
                    key={project.id}
                    variants={cardVariants}
                    whileHover="hover"
                    onClick={() => {
                      onProjectSelect(project.id);
                      window.scrollTo(0, 0);
                    }}
                    className="group cursor-pointer flex flex-col gap-6"
                  >
                    {/* Immersive Image Frame - Clean, Borderless, Infinite Feel */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 rounded-lg border border-neutral-200/40 shadow-sm">
                      {/* Interactive Subtle Tint Overlay */}
                      <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-500 z-10" />
                      
                      <motion.img
                        src={project.heroImage}
                        alt={project.title}
                        variants={{
                          hover: { scale: 1.04 }
                        }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />

                      {/* Floating Minimal Category Badge */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-neutral-200/50 text-[8px] font-bold tracking-[0.2em] text-neutral-800 uppercase shadow-sm">
                        {getCategoryLabel(project.category)}
                      </div>

                      {/* Oversized Subtle Serial Number in Background of frame */}
                      <div className="absolute bottom-2 right-4 z-20 font-serif italic text-6xl text-white/45 select-none pointer-events-none tracking-tighter opacity-80 font-normal">
                        {projectIndex}
                      </div>
                    </div>

                    {/* Editorial Description & Details */}
                    <div className="flex flex-col gap-4 px-1">
                      {/* Top Row: Title & Action */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="font-serif text-xl sm:text-2xl font-normal text-neutral-900 group-hover:text-[#B89A7A] transition-colors duration-300 tracking-tight">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                        
                        {/* Minimalist modern circle-arrow link icon */}
                        <div className="p-3 rounded-full border border-neutral-200 text-neutral-500 bg-white group-hover:bg-[#B89A7A] group-hover:text-white group-hover:border-[#B89A7A] transition-all duration-300 shadow-sm shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-24 bg-white rounded-xl border border-dashed border-neutral-200">
              <Grid className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold text-neutral-800">No Projects Found</h3>
              <p className="text-xs text-neutral-500 mt-1">Please explore our other categories.</p>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
