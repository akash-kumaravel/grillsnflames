/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Award, Flame, Users, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  const qualities = [
    {
      title: 'Structural Durability',
      description: 'We source thick-gauge marine-grade 316 stainless steel and weather-sealed thermo ash/teak wood. This prevents warps, decay, and rust during seasonal sandstorms and humid beach breeze.',
      icon: ShieldCheck
    },
    {
      title: 'Chef-grade Performance',
      description: 'Our builds integrate professional cooking features. We align grills, custom copper ovens, height-adjustable charcoal pans, and coolers to make your backyard a Michelin-standard workspace.',
      icon: Flame
    },
    {
      title: 'In-house Workmanship',
      description: 'We never subcontract. Our dedicated workshop team of master masonry, joiners, gas utility experts, and structural welders manage your build under consistent design supervision.',
      icon: Users
    },
    {
      title: 'Approved Municipality Engineers',
      description: 'Our in-house certification team handles all drawings, structural analysis, load calculations, and permit submissions for Emaar, Nakheel, and Dubai Municipality smoothly.',
      icon: FileCheck
    }
  ];

  // Animation Variants
  const heroContainerVariants = {
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

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div id="about-view-container" className="pt-0 min-h-screen bg-white font-sans overflow-hidden">
      {/* Page Header */}
      <div className="relative h-[80vh] lg:h-[90vh] w-full overflow-hidden bg-stone-100">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          src="/assets/about.png"
          alt="Luxury villa outdoor lounge architecture"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Text Protection Overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:pb-28 md:px-12 max-w-7xl mx-auto z-20">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4"
          >
            <motion.span 
              variants={fadeInUpVariants}
              className="text-[#B89A7A] font-sans text-[10px] md:text-[11px] tracking-[0.25em] font-bold uppercase"
            >
              MASTER ARTISANS &amp; FABRICATORS
            </motion.span>
            <motion.h1 
              variants={fadeInUpVariants}
              className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight leading-tight max-w-2xl"
            >
              Grills and Flames Dubai
            </motion.h1>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xs md:text-sm text-neutral-300 max-w-xl leading-relaxed font-light"
            >
              We specialize in creating premium outdoor and indoor lifestyle features that bring warmth, charm, and sophistication to your home or commercial space.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* About Us Editorial Section */}
      <section id="about-editorial-section" className="bg-[#FAF9F6] py-20 md:py-28 border-b border-neutral-100 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Narrative Content */}
          <motion.div 
            variants={heroContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 max-w-3xl text-left items-start"
          >
            <motion.div 
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase"
            >
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>ABOUT US</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUpVariants}
              className="font-serif text-3xl md:text-5xl font-light text-neutral-900 tracking-tight leading-tight max-w-2xl text-left uppercase"
            >
              BRINGING WARMTH, CHARM, <br />&amp; SOPHISTICATION TO YOUR SPACES
            </motion.h2>

            <motion.p 
              variants={fadeInUpVariants}
              className="text-sm text-neutral-500 leading-relaxed font-light text-left mt-2"
            >
              At Grills and Flames, we specialize in creating premium outdoor and indoor lifestyle features that bring warmth, charm, and sophistication to your home or commercial space. Based in Dubai, our mission is to deliver top-quality craftsmanship, timeless design, and unmatched durability with every project we take on.
            </motion.p>

            <motion.p 
              variants={fadeInUpVariants}
              className="text-sm text-neutral-500 leading-relaxed font-light text-left"
            >
              Our experienced team blends aesthetics with functionality to deliver tailor-made BBQs, pergolas, fire pits, and outdoor kitchens that elevate the way you relax and entertain.
            </motion.p>

            <motion.blockquote 
              variants={fadeInUpVariants}
              className="border-l-2 border-[#B89A7A] pl-5 py-2 text-sm text-neutral-500 italic bg-neutral-100/40 p-5 rounded-r-xl text-left max-w-2xl mt-4"
            >
              "We believe true luxury comes from the perfect blend of heat, structure, and design. A premium cooking or fire feature should look as striking and operate as safely under the brilliant Dubai sun as it does blazing elegantly at midnight."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Brand Qualities Section */}
      <section id="about-qualities-section" className="bg-white py-20 md:py-28 font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B89A7A] tracking-[0.2em] uppercase">
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
              <span>STANDARDS OF QUALITY</span>
              <span className="w-6 h-[1px] bg-[#B89A7A]" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900 uppercase">
              Why Discerning Villa Owners Choose Us
            </h3>
            <p className="text-sm text-neutral-500 max-w-lg font-light">
              Every detail is engineered to survive humid Middle Eastern beach environments and severe summer heat.
            </p>
          </motion.div>

          <motion.div 
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {qualities.map((q, idx) => {
              const Icon = q.icon;
              return (
                <motion.div
                  id={`quality-block-${idx}`}
                  key={idx}
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    y: -6,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
                    borderColor: "rgba(184, 154, 122, 0.25)"
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 md:p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 flex flex-col gap-4 shadow-sm"
                >
                  <span className="p-3 bg-white text-[#B89A7A] rounded-xl border border-neutral-200/40 shadow-sm w-fit">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-serif text-base font-medium text-neutral-900 tracking-tight">
                      {q.title}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-2 font-light">
                      {q.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
