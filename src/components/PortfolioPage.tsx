import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Flame, Droplets, ExternalLink, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "proj-hills-vapor",
    title: "Signature Double-Sided 3D Water Vapor Fireplace",
    category: "indoor",
    categoryLabel: "Indoor Fireplace",
    location: "Emirates Hills, Dubai",
    description: "A stunning dual-aspect flueless installation separating the primary salon from the formal dining room. Featuring a custom black powder-coated structural frame, integrated automatic water supply feed, and high-intensity LED projection to simulate deep golden flame plumes.",
    image: "/assets/project 1.png",
    specs: [
      "No chimney, zero heat, perfectly safe next to delicate artwork",
      "Ultrasonic cool mist technology with gentle humidification",
      "Custom recessed wall housing designed in architectural steel"
    ],
    waMessage: "Hi Flames Fireplace team, I am interested in a 3D Water Vapor project similar to the Emirates Hills showcase."
  },
  {
    id: "proj-jumeirah-ethanol",
    title: "Architectural Bio-Ethanol Cassette Media Wall",
    category: "indoor",
    categoryLabel: "Indoor Fireplace",
    location: "Jumeirah Golf Estates, Dubai",
    description: "A contemporary living room media hub featuring an extra-wide flueless bioethanol burner. Built into a floating marble-clad drywall structure with specialized thermal ceramic isolation shields beneath a large ultra-HD television screen.",
    image: "/assets/project 2.png",
    specs: [
      "Golden ventless real-fire flame with warm radiant heat",
      "Comprehensive heat isolation barrier protection framework",
      "Manual adjustable sliding dampers for flame height control"
    ],
    waMessage: "Hi Flames Fireplace team, please send me details about the flueless Bio-Ethanol Cassette project in Jumeirah."
  },
  {
    id: "proj-yas-firetable",
    title: "Custom Linear Gas Fire Table & Patio Deck",
    category: "fire-pit",
    categoryLabel: "Fire Pit & Table",
    location: "Yas Island, Abu Dhabi",
    description: "A gorgeous sunken seating garden pavilion designed for late-night family gatherings. Centered by a bespoke concrete fire table operating on a concealed LPG supply with tempered fire glass beads and a wind-guard shroud.",
    image: "/assets/project 3.png",
    specs: [
      "Custom hand-cast volcanic basalt concrete tabletop housing",
      "Rust-proof aluminum tray with electronic flame monitoring",
      "Clear heavy-duty tempered glass breeze barrier guards"
    ],
    waMessage: "Hi Flames Fireplace team, tell me more about custom concrete Gas Fire Tables like Yas Island."
  },
  {
    id: "proj-penthouse-bowl",
    title: "High-Gloss Stainless Steel Fire Bowl Setup",
    category: "fire-pit",
    categoryLabel: "Fire Pit & Table",
    location: "Downtown Dubai Penthouse",
    description: "An elegant rooftop penthouse installation with a striking geometric spherical bioethanol burner. Elevated on a highly polished chrome plinth to produce mesmerizing fire reflections against the backdrop of the iconic Burj Khalifa skyline.",
    image: "/assets/project 4.png",
    specs: [
      "Fully portable freestanding design, ideal for luxury balconies",
      "High-grade stainless steel fuel tank with easy-pour port",
      "No smoke, ashes, or electrical cords needed"
    ],
    waMessage: "Hi Flames Fireplace team, I want to learn about freestanding bioethanol burners like the Downtown Penthouse one."
  },
  {
    id: "proj-arabian-double",
    title: "Double-Sided Freestanding Ethanol Divider",
    category: "indoor",
    categoryLabel: "Indoor Fireplace",
    location: "Arabian Ranches, Dubai",
    description: "A glass-framed flueless divider between a cozy family lounge and private study. Utilizing two glass security side-panels to isolate the flame while providing deep room-to-room visibility.",
    image: "/assets/project 5.png",
    specs: [
      "Full 360-degree visibility of safe, glowing amber fire",
      "Tempered safety-rated glass side panels",
      "Quick-snuff sliding lid damper mechanism"
    ],
    waMessage: "Hi Flames Fireplace team, please send me info on freestanding room dividers like the Arabian Ranches setup."
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | 'indoor' | 'fire-pit'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => filter === 'all' || item.category === filter
  );

  return (
    <div id="portfolio-page" className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-28 sm:pt-36 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Our Works — Flames Fireplace Installations
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm md:text-base text-neutral-400 max-w-2xl mx-auto mt-4 leading-relaxed font-light"
        >
          Discover a curated selection of our custom indoor fireplaces, flueless water vapor features, and custom fire tables across GCC developments.
        </motion.p>
      </section>

      {/* Filter Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex justify-center">
          <div className="bg-[#121212] p-1.5 rounded-2xl inline-flex flex-wrap justify-center items-center gap-1 border border-neutral-800">
            <button
              id="filter-all-btn"
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer ${
                filter === 'all'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
              }`}
            >
              Show All Works ({PORTFOLIO_ITEMS.length})
            </button>
            <button
              id="filter-indoor-btn"
              onClick={() => setFilter('indoor')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                filter === 'indoor'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              Indoor Fireplaces
            </button>
            <button
              id="filter-firepit-btn"
              onClick={() => setFilter('fire-pit')}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                filter === 'fire-pit'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Fire Pits &amp; Tables
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-8 md:p-12 text-white shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">Project showcase</span>
            <h2 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight mt-4">Luxury fire features installed in iconic homes and hospitality spaces across the UAE.</h2>
            <p className="font-sans text-sm md:text-base text-neutral-300 leading-relaxed mt-4">Each installation is tailored to the architecture, interior palette, and functional needs of the property, delivering a distinct result every time.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Responsive Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] rounded-3xl overflow-hidden border border-neutral-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative h-64 overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={`${item.title} — Best fireplace installation in ${item.location} by Flames Fireplace`}
                    width={500}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95 group-hover:opacity-100"
                  />
                  {/* Subtle Top badge */}
                  <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider font-mono px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1">
                    {item.category === 'indoor' ? (
                      <Droplets className="w-2.5 h-2.5 text-orange-400" />
                    ) : (
                      <Flame className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />
                    )}
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-sans font-semibold text-white text-base leading-snug group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-neutral-300 text-xs font-semibold font-sans">
                    <span className="text-orange-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      View Project Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#121212] rounded-3xl border border-neutral-800">
            <Compass className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <p className="font-sans text-sm text-neutral-500">No projects found in this selection. Explore other work disciplines.</p>
          </div>
        )}
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="portfolio-detail-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-100 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="portfolio-detail-modal-content"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-orange-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Column */}
                <div className="md:col-span-6 relative bg-neutral-950 h-64 sm:h-80 md:h-full min-h-[320px]">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} custom fireplace design installed in ${selectedProject.location} by Flames Fireplace`}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                    <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-[9px] font-bold uppercase tracking-wider font-mono inline-block">
                      {selectedProject.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Detail Column */}
                <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-sans font-semibold text-white text-xl md:text-2xl tracking-tight leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-neutral-350 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>

                    {/* Specs / Deliverables */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-sans text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        Technical Highlights &amp; Specs
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex gap-2 items-start font-sans text-xs text-neutral-350 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                    <a
                      id={`wa-cta-portfolio-modal-${selectedProject.id}`}
                      href={`https://wa.me/971542112891?text=${encodeURIComponent(selectedProject.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold tracking-wide transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      Inquire About This Work
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      id="modal-secondary-close"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-950 text-white font-sans text-xs font-semibold transition border border-white/10"
                    >
                      Close Gallery
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advisory Team Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-orange-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">
              COLLABORATIVE ARCHITECTURAL WORKFLOWS
            </span>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight">
              Have a custom residential blueprint in mind?
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
              We collaborate closely with elite developers, architectural consultants, pool contractors, and fit-out professionals. From initial hand sketches to full technical submittals and CAD files, our project engineers bring your distinct vision to life seamlessly.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                id="portfolio-bottom-wa-btn"
                href="https://wa.me/971542112891?text=Hi%20Flames%20Fireplace%20team%2C%20I'd%20like%20to%20send%20you%20a%20blueprint%20or%20project%20CAD%20for%20my%20upcoming%20fireplace%2Fkitchen."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold font-sans transition flex items-center gap-2 cursor-pointer"
              >
                Inquire on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
