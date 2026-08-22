import { useState } from 'react';
import { 
  Flame, 
  Droplets, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Ruler, 
  Clock, 
  Coins, 
  Zap,
  Info,
  Sliders,
  CheckCircle2,
  Tv,
  HelpCircle
} from 'lucide-react';
import { ProductDetails } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProductsOverviewProps {
  products: ProductDetails[];
  onSelectProduct: (productId: string, sectionId: string) => void;
  onNavigateContact: () => void;
}

// Comparison data matrix helper
const COMPARISON_SHEET = [
  {
    feature: 'Thermodynamic Flame Source',
    vapor: 'Ultra-fine Ultrasonic Cold Mist (Mains Water)',
    indoorEthanol: 'High-purity Liquid Plant Bio-Ethanol fuel',
    outdoorEthanol: 'Pure Weatherproof Liquid Bio-Ethanol fuel'
  },
  {
    feature: 'Thermal Heat Output (Rating)',
    vapor: '0.0 kW — Completely cool visual atmosphere',
    indoorEthanol: '2.0 kW - 5.8 kW (cozy localized ambient warming)',
    outdoorEthanol: '3.2 kW - 10.5 kW (engineered for wind dispersal)'
  },
  {
    feature: 'Venting / Chimney Requirements',
    vapor: 'Zero Venting. Low electrical outlet only.',
    indoorEthanol: 'Zero Chimney. Balanced spatial oxygen density.',
    outdoorEthanol: '100% Open Air / Patio ventilation'
  },
  {
    feature: 'Child, Pet & Airflow Safety',
    vapor: 'Perfect Integrity. Completely touch-safe visual mist.',
    indoorEthanol: 'Dual casework. Manual or active digital fuel guards.',
    outdoorEthanol: 'High wind deflector tempered glass panels.'
  },
  {
    feature: 'Standard Casing Spans Available',
    vapor: '800mm to 2400mm modular casings',
    indoorEthanol: '800mm to 2400mm modular casings',
    outdoorEthanol: '800mm to 2400mm architectural custom rails'
  },
  {
    feature: 'Burn Time (Reserve Capacity)',
    vapor: '12 - 22 Hours cycle on light domestic tap feed',
    indoorEthanol: '6 - 12 Hours on high-purity botanical alcohol',
    outdoorEthanol: '5 - 11 Hours on outdoor botanical alcohol'
  }
];

// Interactive Casing Size visual comparison references
const SCALE_REFERENCES = [
  { length: 800, name: 'S-80 Casette', tvRatio: 'Covers width of a 32” Screen', notes: 'Best for narrow wall niches and vanity cabinets' },
  { length: 1200, name: 'M-125 Casette', tvRatio: 'Almost matches a 55” Screen', notes: 'Optimal architectural sweet spot for master bedrooms' },
  { length: 1500, name: 'L-150 Casette', tvRatio: 'Matches a 65” Screen exactly', notes: 'Perfect linear balance below a grand media wall console' },
  { length: 2000, name: 'XL-200 Casette', tvRatio: 'Matches an 85” Ultra-Wide Screen', notes: 'Stunning centerpiece for luxury duplex double-height halls' },
  { length: 2400, name: 'Grand 240 Casette', tvRatio: 'Wider than a 98” Cinema display', notes: 'Commercial spec for premium hotel lounges and boardrooms' }
];

export default function ProductsOverview({ products, onSelectProduct, onNavigateContact }: ProductsOverviewProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'vapor' | 'ethanol'>('all');
  const [selectedScaleIndex, setSelectedScaleIndex] = useState<number>(2); // Default to 1500mm
  const [activeMatrixTab, setActiveMatrixTab] = useState<'vapor' | 'ethanol'>('vapor');

  // Filtered products subset
  const filteredProducts = products.filter(p => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'vapor') return p.id.includes('vapor');
    if (activeCategoryFilter === 'ethanol') return p.id.includes('ethanol');
    return true;
  });

  return (
    <div id="immersive-products-overview" className="bg-[#FAF9F6] text-neutral-800 min-h-screen pt-28 pb-24 font-sans selection:bg-orange-500/10 selection:text-orange-600">
      
      {/* 1. Dramatic Editorial Hero Block */}
      <section className="relative px-6 md:px-12 xl:px-16 py-12 overflow-hidden max-w-[1500px] mx-auto text-center">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50/80 border border-orange-100 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[9px] font-mono tracking-widest text-orange-700 uppercase font-bold">
              THE FLAMES SYSTEM MANIFESTO • SWISS ENGINEERING • LUXURY CASING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
            Architectural Fire, <br/>
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Redefined for the Future.
            </span>
          </h1>

          <p className="text-neutral-550 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            From zero-clearance, touch-safe molecular mist systems to pure, plant-powered botanical heat grids. Explore our premium fireplace collections designed to transform residential and commercial floorplans into living, glowing retreats.
          </p>

          {/* Interactive filter pill system */}
          <div className="pt-6 flex flex-wrap gap-2.5 justify-center">
            {[
              { id: 'all' as const, label: 'All System Designs' },
              { id: 'vapor' as const, label: 'Hydro-Sonic Cold Vapor' },
              { id: 'ethanol' as const, label: 'Pure Eco-Ethanol Burners' }
            ].map((filter) => {
              const active = activeCategoryFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  id={`filter-pill-${filter.id}`}
                  onClick={() => setActiveCategoryFilter(filter.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    active 
                      ? 'bg-neutral-900 text-white shadow-xl shadow-neutral-900/10 font-bold' 
                      : 'bg-white hover:bg-neutral-100 text-neutral-500 border border-neutral-200/80 hover:text-neutral-800'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ambient gradient backdrops */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/5 filter blur-[110px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/5 filter blur-[110px] rounded-full -translate-y-1/2 pointer-events-none" />
      </section>

      {/* 2. Panoramic Collections Grid (New High-Design Cards) */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1500px] mx-auto py-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, idx) => {
              // Custom map to routing selectors
              const routeMapping: Record<string, string> = {
                "vapor-fireplace": "product-watercolor",
                "indoor-ethanol": "product-indoor",
                "outdoor-ethanol": "product-outdoor"
              };

              const isVapor = prod.id.includes('vapor');
              const specBadge = isVapor ? "0.0 kW Heat (Touch-Safe)" : "Variable Heat (Real Fire)";

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-white border border-neutral-200/60 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between hover:scale-[1.01] hover:border-orange-500/30 transition-all duration-500 h-full"
                >
                  
                  {/* Top Image area with hover effect */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-100">
                    <img 
                      src={prod.imageUrl}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-1000"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Technology Series Pin badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-widest font-extrabold uppercase ${
                        isVapor 
                          ? 'bg-sky-100 text-sky-800 border border-sky-200 shadow-xs' 
                          : 'bg-orange-105 bg-orange-100 text-orange-850 border border-orange-200 shadow-xs'
                      }`}>
                        {isVapor ? 'HYDRO-SONIC 3D VAPOR' : 'BOTANICAL BIOCUMBUST'}
                      </span>
                    </div>

                    {/* Standard Specs badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-200/80 text-[10px] font-mono tracking-wide text-neutral-700 shadow-xs">
                      <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{specBadge}</span>
                    </div>
                  </div>

                  {/* Middle Text / Core Info Deck */}
                  <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-3.5">
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                        {prod.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm font-medium text-orange-600 italic block leading-relaxed">
                        &ldquo;{prod.tagline}&rdquo;
                      </p>
                      <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-light">
                        {prod.description}
                      </p>
                    </div>

                    {/* High-design Specification Summary list */}
                    <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                        Casing & Hardware Specifications:
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2 text-neutral-600 font-light">
                          <Ruler className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>80cm to 240cm modular</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 font-light">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>EN-16647 Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 font-light">
                          <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>up to 22h Burn cycle</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 font-light">
                          <Droplets className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{isVapor ? 'Filtered Water' : 'Botanical Ethanol'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Highlights / Key features list (show product.features as bullets) */}
                    {prod.features && prod.features.length > 0 && (
                      <div className="pt-4 space-y-2">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                          Key Features:
                        </span>
                        <ul className="space-y-1.5">
                          {prod.features.map((f, fIdx) => (
                             <li key={fIdx} className="text-xs text-neutral-600 font-sans flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                  {/* Primary Call-to-action bar */}
                  <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase block tracking-wider">Available Sizes</span>
                      <span className="text-sm font-bold text-neutral-900 font-mono">80cm - 240cm</span>
                    </div>
                    <button
                      id={`explore-specs-btn-${prod.id}`}
                      onClick={() => onSelectProduct(prod.id, routeMapping[prod.id])}
                      className="px-5 py-2.5 rounded-xl bg-neutral-900 text-xs font-semibold text-white hover:bg-orange-500 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      Configure Specs
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Interactive Component: The Casing Space Visualizer Studio */}
      <section className="bg-white border-t border-b border-neutral-200/60 py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-14 max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest block w-fit mx-auto border border-orange-200/50 font-mono">
              FLAMES DOCK PLANNING STUDIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
              Casing Length Visual Scale Studio
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-light">
              Selecting the right length fireplace is critical to establishing proper aesthetic proportions. Drag or select the scale presets below to preview standard linear fireplace cassette lengths matched to popular luxury television displays.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left controller (4 cols) */}
            <div className="lg:col-span-4 bg-[#FAF9F6] border border-neutral-200/65 p-6 sm:p-8 rounded-3xl space-y-6">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold flex items-center gap-2 pb-3 border-b border-neutral-200">
                <Sliders className="w-4 h-4 text-orange-500" />
                DOCK PRESETS SELECTOR
              </span>

              <div className="space-y-2">
                {SCALE_REFERENCES.map((ref, idx) => (
                  <button
                    key={idx}
                    id={`scale-preset-btn-${idx}`}
                    onClick={() => setSelectedScaleIndex(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex justify-between items-center cursor-pointer ${
                      selectedScaleIndex === idx
                        ? 'bg-orange-50 border-orange-500 text-orange-950 shadow-xs'
                        : 'bg-white border-neutral-200 hover:bg-neutral-100/50 text-neutral-500'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold font-mono">{ref.name}</span>
                      <span className="block text-[11px] text-neutral-400 font-light mt-0.5 font-sans">{ref.tvRatio}</span>
                    </div>
                    <span className="text-xs font-bold text-orange-600 font-mono">
                      {ref.length}mm
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Stage Visualizer (8 cols) */}
            <div className="lg:col-span-8 bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-neutral-200/60 shadow-inner space-y-12">
              
              {/* Responsive comparison canvas scale */}
              <div className="relative border-b border-dashed border-neutral-200/80 pb-16 min-h-[220px] flex flex-col justify-end items-center">
                
                {/* 65" TV Mockup Centerpiece */}
                <div className="absolute top-0 flex flex-col items-center bg-white border-2 border-neutral-200/80 rounded-lg p-2 h-28 w-56 shadow-sm z-10 transition-all duration-500">
                  <div className="w-full h-full bg-neutral-50 rounded flex items-center justify-center relative text-[9px] font-mono text-neutral-500">
                    <Tv className="w-4 h-4 text-neutral-400 block mr-1.5" />
                    <span>65" Luxury OLED TV Display</span>
                  </div>
                </div>

                {/* Fireplace Casette Cassette drawing (Scales dynamically) */}
                <div className="w-full flex justify-center z-12">
                  <motion.div 
                    layout
                    className="bg-white border border-neutral-250/60 p-3.5 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-500 relative"
                    style={{
                      width: `${
                        selectedScaleIndex === 0 ? '30%' :
                        selectedScaleIndex === 1 ? '50%' :
                        selectedScaleIndex === 2 ? '65%' :
                        selectedScaleIndex === 3 ? '85%' : '98%'
                      }`
                    }}
                  >
                    
                    {/* Simulated live flame mist inside container */}
                    <div className="w-full bg-neutral-950 rounded h-3 flex items-center justify-center relative shadow-inner overflow-hidden">
                      <div className="absolute inset-x-4 h-2 rounded-full filter blur-xs bg-gradient-to-r from-orange-600 via-amber-400 to-amber-600 animate-pulse" />
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-orange-600 font-bold block mt-2 text-center">
                      {SCALE_REFERENCES[selectedScaleIndex].name} ({SCALE_REFERENCES[selectedScaleIndex].length} mm Span)
                    </span>

                  </motion.div>
                </div>

                {/* Alignment center line guide info indicator */}
                <div className="absolute -bottom-1.5 bg-white px-3 py-1 border border-neutral-200/80 text-[10px] font-mono tracking-widest text-neutral-500 uppercase rounded-full shadow-xs">
                  PROPORTIONAL CO-ALIGNMENT
                </div>

              </div>

              {/* Live planning feedback analysis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-sans pt-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase font-bold">Space Planning Target:</span>
                  <p className="text-neutral-600 leading-relaxed font-light">
                    {SCALE_REFERENCES[selectedScaleIndex].notes}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase font-bold">Recommended Co-alignment:</span>
                  <p className="text-neutral-600 leading-relaxed font-light">
                    This selection is designed to pair seamlessly with {SCALE_REFERENCES[selectedScaleIndex].tvRatio.toLowerCase()}.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Complete Side-by-Side Comprehensive Spec Matrix */}
      <section className="px-6 md:px-12 xl:px-16 max-w-5xl mx-auto py-20 relative z-10">
        
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
          <span className="text-orange-600 font-mono text-[10px] font-bold uppercase tracking-widest block">Comparative Engineering Suite</span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">System Comparison Matrix</h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-light">
            Review detailed differences between our three core fireplace technologies to verify specific structural constraints, heating outputs, and installation metrics before procurement.
          </p>
        </div>

        {/* Comparison grid wrapper with custom overflow scroll */}
        <div className="border border-neutral-200 rounded-3xl overflow-hidden bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 font-sans uppercase font-bold text-[10px] tracking-widest text-neutral-600">
                  <th className="p-5 font-mono">Technology Metric</th>
                  <th className="p-5 text-sky-600">Hydro-Sonic 3D Vapor</th>
                  <th className="p-5 text-orange-650">Indoor Bio-Ethanol</th>
                  <th className="p-5 text-amber-600">Outdoor Bio-Ethanol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm text-neutral-700 font-sans">
                {COMPARISON_SHEET.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="p-5 font-semibold text-neutral-800 font-mono text-xs">{row.feature}</td>
                    <td className="p-5 font-light text-neutral-600 bg-sky-500/[0.015] leading-relaxed">{row.vapor}</td>
                    <td className="p-5 font-light text-neutral-600 bg-orange-500/[0.015] leading-relaxed">{row.indoorEthanol}</td>
                    <td className="p-5 font-light text-neutral-600 bg-amber-500/[0.015] leading-relaxed">{row.outdoorEthanol}</td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-2xl border border-neutral-200/50 text-neutral-500 text-xs leading-normal flex items-start gap-3 justify-center max-w-3xl mx-auto shadow-xs">
          <Info className="w-5 h-5 text-orange-500 shrink-0" />
          <span>
            <strong>Architectural Support:</strong> Instant design advice and product dimension sheets are available directly via WhatsApp (+971 54 211 2891) for quick project integration with your architectural plans.
          </span>
        </div>

        {/* Fixing the FAQ not easily visible next step from products */}
        <div className="mt-14 p-8 rounded-3xl bg-amber-500/[0.03] border border-orange-200/65 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-mono tracking-widest text-orange-600 font-bold uppercase flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-orange-500" />
              Not sure about custom local dimensions?
            </span>
            <h4 className="text-base font-bold text-neutral-900">
               Visit Our Complete Fireplace Buyer FAQ Guide
            </h4>
            <p className="text-xs text-neutral-500 max-w-2xl font-light leading-relaxed">
              We compile structured and AEO-indexed answers regarding safety setups, fuel usage, double-walled casing protections, heat delivery controls, and custom architectural floor plans.
            </p>
          </div>
          <button
            onClick={() => onSelectProduct('faq', 'faq')}
            className="px-5 py-3 rounded-full bg-neutral-900 hover:bg-orange-500 text-white font-sans text-xs font-semibold cursor-pointer transition flex items-center gap-1.5 shrink-0 shadow-xs"
          >
            Open Buyer FAQs page
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* 5. Clean, Professional Grand Conversion Panel */}
      <section className="px-6 md:px-12 xl:px-16 max-w-[1500px] mx-auto pb-12 relative z-10">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 xl:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 filter blur-3xl rounded-full" />
          
          <div className="max-w-2xl space-y-4 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Planning a commercial or custom domestic project?
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              We work directly with prominent developers, interior designers, commercial contractors, and luxury builders across the Gulf. Register your site location details to receive tailored pricing packages and expert layout drawings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <button
              id="studio-quote-cta"
              onClick={onNavigateContact}
              className="px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-bold transition-all duration-300 shadow-xl shadow-orange-500/10 text-center cursor-pointer"
            >
              Get Custom Quotation
            </button>
            <button
              id="studio-direct-expert"
              onClick={onNavigateContact}
              className="px-5 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 font-sans text-xs font-semibold text-center cursor-pointer transition-all duration-300"
            >
              Talk to dynamic Advisor
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
