/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import ProjectsGrid from '../components/ProjectsGrid';

interface WorkViewProps {
  onProjectSelect: (id: string) => void;
}

export default function WorkView({ onProjectSelect }: WorkViewProps) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div id="work-view-container" className="pt-0 min-h-screen bg-white font-sans overflow-hidden">
      {/* Portfolio Banner */}
      <div className="relative h-[80vh] lg:h-[90vh] w-full overflow-hidden bg-stone-100">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury villa and swimming pool architecture"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Text Protection Overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:pb-28 md:px-12 max-w-7xl mx-auto z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            <motion.span 
              variants={fadeInUpVariants}
              className="text-[#B89A7A] font-sans text-[10px] md:text-[11px] tracking-[0.25em] font-bold uppercase"
            >
              OUR WORKS &amp; PORTFOLIOS
            </motion.span>
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight leading-tight max-w-2xl"
            >
              Our Recent Works
            </motion.h1>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xs md:text-sm text-neutral-300 max-w-lg leading-relaxed font-light"
            >
              Browse through our award-winning residential builds across Dubai, representing custom outdoor kitchens, linear fire features, and beachfront pavilions.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Grid of All Work */}
      <ProjectsGrid onProjectSelect={onProjectSelect} />
    </div>
  );
}
